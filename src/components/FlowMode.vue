<template>
  <div class="flow-mode">
    <div class="flow-header">
      <h2 class="flow-title">教师组课与授课 · 完整流程</h2>
      <p class="flow-subtitle">点击各步骤节点可查看对应操作教学视频</p>

      <!-- Tab 切换 -->
      <div class="flow-tabs">
        <button
          class="flow-tab"
          :class="{ active: activeTab === 'quick' }"
          @click="activeTab = 'quick'"
        >快速上手</button>
        <button
          class="flow-tab"
          :class="{ active: activeTab === 'expert' }"
          @click="activeTab = 'expert'"
        >专家模式</button>
      </div>
    </div>

    <!-- 快速上手 -->
    <div v-if="activeTab === 'quick'" class="flow-wrapper flow-wrapper--quick" ref="quickWrapperEl">
      <!-- Row 1: qs1 → qs2 → qs3 -->
      <div class="flow-row">
        <FlowStepCard :step="quickStartSteps[0]" @open-video="$emit('open-video', $event)" />
        <div class="flow-h-arrow"><div class="flow-h-arrow-line"></div><div class="flow-h-arrow-head"></div></div>
        <FlowStepCard :step="quickStartSteps[1]" @open-video="$emit('open-video', $event)" />
        <div class="flow-h-arrow"><div class="flow-h-arrow-line"></div><div class="flow-h-arrow-head"></div></div>
        <FlowStepCard :step="quickStartSteps[2]" @open-video="$emit('open-video', $event)" />
      </div>

      <!-- 行间距 -->
      <div class="flow-row-gap"></div>

      <!-- Row 2: qs4 → qs5 -->
      <div class="flow-row">
        <FlowStepCard :step="quickStartSteps[3]" @open-video="$emit('open-video', $event)" />
        <div class="flow-h-arrow"><div class="flow-h-arrow-line"></div><div class="flow-h-arrow-head"></div></div>
        <FlowStepCard :step="quickStartSteps[4]" @open-video="$emit('open-video', $event)" />
      </div>

      <!-- SVG 折线：qs3 底部中心 → qs4 顶部中心 -->
      <svg
        v-if="quickSvgReady"
        class="bend-svg-overlay"
        :width="quickSvgW"
        :height="quickSvgH"
        :viewBox="`0 0 ${quickSvgW} ${quickSvgH}`"
        fill="none"
      >
        <defs>
          <linearGradient id="qBendGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#00B4D8"/>
            <stop offset="100%" stop-color="#1A6FD4"/>
          </linearGradient>
        </defs>
        <path :d="quickBendPath" stroke="url(#qBendGrad)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <polygon :points="quickArrowPts" fill="#1A6FD4"/>
      </svg>
    </div>

    <!-- 专家模式 -->
    <div v-if="activeTab === 'expert'" class="flow-wrapper" ref="expertWrapperEl">
      <!-- Row 1: step1 → step2 -->
      <div class="flow-row">
        <FlowStepCard :step="flowSteps[0]" @open-video="$emit('open-video', $event)" />
        <div class="flow-h-arrow"><div class="flow-h-arrow-line"></div><div class="flow-h-arrow-head"></div></div>
        <FlowStepCard :step="flowSteps[1]" @open-video="$emit('open-video', $event)" />
      </div>

      <!-- 行间距 -->
      <div class="flow-row-gap"></div>

      <!-- Row 2: step3 → step4 → step5 -->
      <div class="flow-row">
        <FlowStepCard :step="flowSteps[2]" @open-video="$emit('open-video', $event)" />
        <div class="flow-h-arrow"><div class="flow-h-arrow-line"></div><div class="flow-h-arrow-head"></div></div>
        <FlowStepCard :step="flowSteps[3]" @open-video="$emit('open-video', $event)" />
        <div class="flow-h-arrow"><div class="flow-h-arrow-line"></div><div class="flow-h-arrow-head"></div></div>
        <FlowStepCard :step="flowSteps[4]" @open-video="$emit('open-video', $event)" />
      </div>

      <!-- SVG 折线：step2 底部中心 → step3 顶部中心 -->
      <svg
        v-if="expertSvgReady"
        class="bend-svg-overlay"
        :width="expertSvgW"
        :height="expertSvgH"
        :viewBox="`0 0 ${expertSvgW} ${expertSvgH}`"
        fill="none"
      >
        <defs>
          <linearGradient id="eBendGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#00B4D8"/>
            <stop offset="100%" stop-color="#1A6FD4"/>
          </linearGradient>
        </defs>
        <path :d="expertBendPath" stroke="url(#eBendGrad)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <polygon :points="expertArrowPts" fill="#1A6FD4"/>
      </svg>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick, watch } from 'vue'
import FlowStepCard from './FlowStepCard.vue'
import { flowSteps, quickStartSteps } from '../data/modules.js'

defineEmits(['open-video'])

const activeTab = ref('quick')

// ---- 快速上手 SVG ----
const quickWrapperEl = ref(null)
const quickSvgReady = ref(false)
const quickSvgW = ref(0)
const quickSvgH = ref(0)
const quickBendPath = ref('')
const quickArrowPts = ref('')

// ---- 专家模式 SVG ----
const expertWrapperEl = ref(null)
const expertSvgReady = ref(false)
const expertSvgW = ref(0)
const expertSvgH = ref(0)
const expertBendPath = ref('')
const expertArrowPts = ref('')

function calcBendForWrapper(wrapperEl, cardIndex1, cardIndex2, svgW, svgH, bendPath, arrowPts, svgReady) {
  if (!wrapperEl.value) return
  const cards = wrapperEl.value.querySelectorAll('.flow-card')
  if (cards.length <= Math.max(cardIndex1, cardIndex2)) return

  const s1El = cards[cardIndex1]
  const s2El = cards[cardIndex2]
  const wRect = wrapperEl.value.getBoundingClientRect()
  const s1Rect = s1El.getBoundingClientRect()
  const s2Rect = s2El.getBoundingClientRect()

  if (wRect.width === 0) return

  svgW.value = wRect.width
  svgH.value = wRect.height

  // 起点：第一个卡片底部中心
  const startX = (s1Rect.left + s1Rect.right) / 2 - wRect.left
  const startY = s1Rect.bottom - wRect.top

  // 终点：第二个卡片顶部中心
  const endX = (s2Rect.left + s2Rect.right) / 2 - wRect.left
  const endY = s2Rect.top - wRect.top

  const r = 12
  const midY = (startY + endY) / 2

  bendPath.value = [
    `M ${startX} ${startY}`,
    `L ${startX} ${midY - r}`,
    `Q ${startX} ${midY} ${startX - r} ${midY}`,
    `L ${endX + r} ${midY}`,
    `Q ${endX} ${midY} ${endX} ${midY + r}`,
    `L ${endX} ${endY}`
  ].join(' ')

  const ax = endX
  const ay = endY
  arrowPts.value = `${ax - 6},${ay - 10} ${ax + 6},${ay - 10} ${ax},${ay}`
  svgReady.value = true
}

function calcQuick() {
  // 快速上手：第3张卡片(index 2, qs3) → 第4张卡片(index 3, qs4)
  calcBendForWrapper(quickWrapperEl, 2, 3, quickSvgW, quickSvgH, quickBendPath, quickArrowPts, quickSvgReady)
}

function calcExpert() {
  // 专家模式：第2张卡片(index 1, step2) → 第3张卡片(index 2, step3)
  calcBendForWrapper(expertWrapperEl, 1, 2, expertSvgW, expertSvgH, expertBendPath, expertArrowPts, expertSvgReady)
}

let roQuick = null
let roExpert = null

function setupObserver(wrapperEl, calcFn, roRef) {
  if (wrapperEl.value) {
    if (roRef.value) roRef.value.disconnect()
    roRef.value = new ResizeObserver(() => calcFn())
    roRef.value.observe(wrapperEl.value)
    calcFn()
  }
}

onMounted(() => {
  nextTick(() => {
    setTimeout(() => {
      setupObserver(quickWrapperEl, calcQuick, { value: roQuick })
    }, 150)
  })
})

// 切换 Tab 时重新计算
watch(activeTab, (val) => {
  nextTick(() => {
    setTimeout(() => {
      if (val === 'quick') calcQuick()
      else calcExpert()
    }, 150)
  })
})

onUnmounted(() => {
  roQuick && roQuick.disconnect()
  roExpert && roExpert.disconnect()
})
</script>

<style scoped>
.flow-mode {
  flex: 1;
  overflow-y: auto;
  background: #F0F4FA;
  padding: 28px 36px 40px;
}

.flow-header {
  text-align: center;
  margin-bottom: 20px;
}

.flow-title {
  font-size: 21px;
  font-weight: 800;
  color: #1A1A2E;
  margin-bottom: 5px;
  letter-spacing: 0.5px;
}

.flow-subtitle {
  font-size: 13px;
  color: #6B7280;
  margin-bottom: 16px;
}

/* Tab 样式 */
.flow-tabs {
  display: inline-flex;
  background: #E2E8F4;
  border-radius: 24px;
  padding: 3px;
  gap: 2px;
}

.flow-tab {
  padding: 7px 24px;
  border-radius: 20px;
  border: none;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.22s cubic-bezier(.4,0,.2,1);
  background: transparent;
  color: #6B7280;
  font-family: inherit;
}

.flow-tab.active {
  background: #fff;
  color: #1A6FD4;
  box-shadow: 0 2px 8px rgba(26,111,212,.15);
}

.flow-tab:hover:not(.active) {
  color: #1A1A2E;
}

.flow-wrapper {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  position: relative;
}

.flow-wrapper--quick {
  max-width: 900px;
}

.flow-row {
  display: flex;
  gap: 16px;
  align-items: stretch;
}

.flow-row-gap {
  height: 32px;
  flex-shrink: 0;
}

/* Horizontal arrow */
.flow-h-arrow {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  align-self: center;
  margin: 0 4px;
}

.flow-h-arrow-line {
  width: 20px;
  height: 2px;
  background: linear-gradient(to right, var(--blue), var(--teal));
}

.flow-h-arrow-head {
  width: 0;
  height: 0;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-left: 9px solid var(--teal);
}

/* SVG overlay */
.bend-svg-overlay {
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  overflow: visible;
}

@media (max-width: 900px) {
  .flow-row {
    flex-direction: column;
  }
  .flow-h-arrow,
  .flow-row-gap,
  .bend-svg-overlay {
    display: none;
  }
}
</style>
