<template>
  <div class="flow-mode">
    <div class="flow-header">
      <h2 class="flow-title">教师组课与授课 · 完整流程</h2>
      <p class="flow-subtitle">点击各步骤节点可查看对应操作教学视频</p>
    </div>

    <div class="flow-wrapper">
      <!-- Row 1: Step 1 + arrow + Step 2 -->
      <div class="flow-row">
        <FlowStepCard :step="flowSteps[0]" @open-video="$emit('open-video', $event)" />
        <div class="flow-h-arrow">
          <div class="flow-h-arrow-line"></div>
          <div class="flow-h-arrow-head"></div>
        </div>
        <FlowStepCard :step="flowSteps[1]" @open-video="$emit('open-video', $event)" />
      </div>

      <!-- Vertical arrow -->
      <div class="flow-v-wrap">
        <div class="flow-v-arrow">
          <div class="flow-v-arrow-line"></div>
          <div class="flow-v-arrow-head"></div>
        </div>
      </div>

      <!-- Row 2: Step 3 + arrow + Step 4 + arrow + Step 5 -->
      <div class="flow-row">
        <FlowStepCard :step="flowSteps[2]" @open-video="$emit('open-video', $event)" />
        <div class="flow-h-arrow">
          <div class="flow-h-arrow-line"></div>
          <div class="flow-h-arrow-head"></div>
        </div>
        <FlowStepCard :step="flowSteps[3]" @open-video="$emit('open-video', $event)" />
        <div class="flow-h-arrow">
          <div class="flow-h-arrow-line"></div>
          <div class="flow-h-arrow-head"></div>
        </div>
        <FlowStepCard :step="flowSteps[4]" @open-video="$emit('open-video', $event)" />
      </div>
    </div>
  </div>
</template>

<script setup>
import FlowStepCard from './FlowStepCard.vue'
import { flowSteps } from '../data/modules.js'

defineEmits(['open-video'])
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
  margin-bottom: 28px;
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
}

.flow-wrapper {
  max-width: 1040px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.flow-row {
  display: flex;
  gap: 16px;
  align-items: stretch;
}

/* Horizontal arrow — vertically centered */
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

/* Vertical arrow */
.flow-v-wrap {
  display: flex;
  justify-content: center;
  padding: 6px 0;
}

.flow-v-arrow {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.flow-v-arrow-line {
  width: 2px;
  height: 24px;
  background: linear-gradient(to bottom, var(--blue), var(--teal));
  border-radius: 2px;
}

.flow-v-arrow-head {
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 9px solid var(--teal);
}

@media (max-width: 900px) {
  .flow-row {
    flex-direction: column;
  }

  .flow-h-arrow {
    display: none;
  }
}
</style>
