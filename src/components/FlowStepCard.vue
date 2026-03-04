<template>
  <div class="flow-card" :class="`color-step-${step.step}`" :style="{ flex: step.flex }">
    <!-- Card Header -->
    <div class="flow-card-header">
      <div
        class="flow-step-badge"
        :style="{ background: `linear-gradient(135deg, ${step.color}, ${step.gradientColor})` }"
      >
        {{ step.step }}
      </div>
      <div class="flow-card-info">
        <div class="flow-card-title">{{ step.title }}</div>
        <div class="flow-card-desc">{{ step.desc }}</div>
      </div>
      <button
        class="flow-card-video-btn"
        :style="{ borderColor: step.color, color: step.color, '--hover-bg': step.color }"
        @click="$emit('open-video', { title: step.title + '操作演示', desc: `了解「${step.title}」的完整操作流程` })"
      >
        <el-icon><CaretRight /></el-icon>
        观看视频
      </button>
    </div>

    <!-- Sub-cards -->
    <div v-if="step.subCards && step.subCards.length" class="flow-subcards" :class="step.colsCls">
      <div
        v-for="sub in step.subCards"
        :key="sub.name"
        class="flow-subcard"
        @click="$emit('open-video', { title: sub.videoTitle || sub.name, desc: `了解「${sub.name.replace(/\n/g, '')}」的操作方法` })"
      >
        <div class="flow-subcard-title">{{ sub.name }}</div>
        <button class="flow-subcard-btn">
          <el-icon><CaretRight /></el-icon>
          播放视频
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  step: {
    type: Object,
    required: true
  }
})

defineEmits(['open-video'])
</script>

<style scoped>
.flow-card {
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, .08);
  border: 1.5px solid #E5E9F2;
  overflow: hidden;
  transition: box-shadow 0.22s cubic-bezier(.4,0,.2,1);
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.flow-card:hover {
  box-shadow: 0 4px 20px rgba(0, 0, 0, .12);
}

/* Top accent border per step */
.color-step-1 { border-top: 3px solid #1A6FD4; }
.color-step-2 { border-top: 3px solid #2ECC71; }
.color-step-3 { border-top: 3px solid #00B4D8; }
.color-step-4 { border-top: 3px solid #F39C12; }
.color-step-5 { border-top: 3px solid #E74C3C; }

/* ── Header ── */
.flow-card-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px 14px;
}

.flow-step-badge {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 800;
  color: #fff;
  flex-shrink: 0;
}

.flow-card-info {
  flex: 1;
  min-width: 0;
}

.flow-card-title {
  font-size: 16px;
  font-weight: 800;
  color: #1A1A2E;
  line-height: 1.3;
}

.flow-card-desc {
  font-size: 12px;
  color: #6B7280;
  margin-top: 3px;
  line-height: 1.45;
}

.flow-card-video-btn {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 6px 13px;
  border-radius: 20px;
  border: 1.5px solid;
  font-size: 12px;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.22s cubic-bezier(.4,0,.2,1);
  background: transparent;
  white-space: nowrap;
  flex-shrink: 0;
}

.flow-card-video-btn:hover {
  background: var(--hover-bg);
  color: #fff !important;
}

/* ── Sub-cards ── */
.flow-subcards {
  display: grid;
  gap: 10px;
  padding: 12px 16px 16px;
  border-top: 1px solid #E5E9F2;
  flex: 1;
}

.flow-subcards.cols-2 {
  grid-template-columns: repeat(2, 1fr);
}

.flow-subcards.cols-4 {
  grid-template-columns: repeat(4, 1fr);
}

@media (max-width: 900px) {
  .flow-subcards.cols-4 {
    grid-template-columns: repeat(2, 1fr);
  }
}

.flow-subcard {
  background: #F4F6FA;
  border: 1.5px solid #E5E9F2;
  border-radius: 10px;
  padding: 14px 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  cursor: pointer;
  transition: all 0.22s cubic-bezier(.4,0,.2,1);
}

.flow-subcard:hover {
  border-color: #1A6FD4;
  background: #E8F1FD;
  box-shadow: 0 2px 10px rgba(26, 111, 212, .12);
}

.flow-subcard-title {
  font-size: 13px;
  font-weight: 700;
  color: #1A1A2E;
  line-height: 1.4;
  flex: 1;
  white-space: pre-line;
}

.flow-subcard-btn {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 10px;
  border-radius: 20px;
  border: 1.5px solid #1A6FD4;
  color: #1A6FD4;
  font-size: 11px;
  font-weight: 600;
  font-family: inherit;
  background: transparent;
  cursor: pointer;
  transition: all 0.22s cubic-bezier(.4,0,.2,1);
  align-self: flex-start;
}

.flow-subcard-btn:hover {
  background: #1A6FD4;
  color: #fff;
}
</style>
