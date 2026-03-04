<template>
  <div class="content-area" ref="scrollEl">
    <transition name="panel-fade" mode="out-in">
      <div v-if="panel" :key="panel.id" class="panel">
        <!-- Cover Image -->
        <div class="cover-wrap">
          <img
            class="cover-img"
            :src="panel.cover"
            :alt="panel.title"
            loading="lazy"
          />
          <div class="cover-overlay">
            <span class="cover-badge">{{ panel.title }}</span>
          </div>
        </div>

        <!-- Module Header -->
        <div class="module-header">
          <div class="module-icon" :style="{ background: hexToRgba(panel.iconColor, 0.12) }">
            <el-icon :style="{ color: panel.iconColor, fontSize: '24px' }">
              <component :is="panel.icon" />
            </el-icon>
          </div>
          <div class="module-info">
            <h1 class="module-title">{{ panel.title }}</h1>
            <p class="module-desc">{{ panel.desc }}</p>
          </div>
        </div>

        <!-- Feature Sections -->
        <div v-for="section in panel.sections" :key="section.title" class="section">
          <div class="section-title">{{ section.title }}</div>
          <div class="cards-grid">
            <FeatureCard
              v-for="(card, i) in section.cards"
              :key="i"
              :card="card"
              @open-video="onOpenVideo"
            />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import FeatureCard from './FeatureCard.vue'

const props = defineProps({
  panel: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['open-video'])
const scrollEl = ref(null)

watch(() => props.panel, () => {
  if (scrollEl.value) scrollEl.value.scrollTop = 0
})

function onOpenVideo(payload) {
  emit('open-video', payload)
}

function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r},${g},${b},${alpha})`
}
</script>

<style scoped>
.content-area {
  flex: 1;
  overflow-y: auto;
  padding: 32px 40px;
  background: var(--bg);
}

.panel {
  width: 100%;
}

/* Cover */
.cover-wrap {
  position: relative;
  width: 100%;
  height: 200px;
  border-radius: var(--radius-lg);
  overflow: hidden;
  margin-bottom: 28px;
  cursor: default;
}

.cover-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
  display: block;
}

.cover-wrap:hover .cover-img {
  transform: scale(1.03);
}

.cover-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(10,15,40,.6) 0%, transparent 60%);
  display: flex;
  align-items: flex-end;
  padding: 20px 24px;
}

.cover-badge {
  background: rgba(255,255,255,.18);
  backdrop-filter: blur(8px);
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  padding: 6px 16px;
  border-radius: 20px;
  border: 1px solid rgba(255,255,255,.25);
  letter-spacing: 0.3px;
}

/* Module Header */
.module-header {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 32px;
}

.module-icon {
  width: 52px;
  height: 52px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.module-info {
  flex: 1;
  padding-top: 2px;
}

.module-title {
  font-size: 22px;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 8px;
  line-height: 1.3;
}

.module-desc {
  font-size: 13.5px;
  color: var(--text-muted);
  line-height: 1.7;
}

/* Sections */
.section {
  margin-bottom: 32px;
}

.section-title {
  font-size: 15px;
  font-weight: 600;
  color: var(--text-dark);
  padding-left: 12px;
  border-left: 3px solid var(--blue);
  margin-bottom: 16px;
  line-height: 1;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 16px;
}

/* Panel transition */
.panel-fade-enter-active,
.panel-fade-leave-active {
  transition: all 0.2s ease;
}

.panel-fade-enter-from,
.panel-fade-leave-to {
  opacity: 0;
  transform: translateY(8px);
}
</style>
