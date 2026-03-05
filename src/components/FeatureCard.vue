<template>
  <div class="feature-card">
    <div class="card-name">{{ card.name }}</div>
    <div class="card-desc">{{ card.desc }}</div>
    <div v-if="card.tags && card.tags.length" class="card-tags">
      <span v-for="tag in card.tags" :key="tag" class="sub-tag">{{ tag }}</span>
    </div>
    <div class="card-action">
      <button class="btn-guide" @click.stop="handleGuideClick">
        <el-icon><Document /></el-icon>
        图文教程
      </button>
      <button v-if="card.hasVideo" class="btn-video" @click.stop="handleVideoClick">
        <el-icon><CaretRight /></el-icon>
        观看视频
      </button>
    </div>
    <div class="card-bar"></div>
  </div>
</template>

<script setup>
import { Document, CaretRight } from '@element-plus/icons-vue'

const props = defineProps({
  card: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['open-video'])

function handleVideoClick() {
  emit('open-video', { title: props.card.videoTitle || props.card.name, desc: props.card.desc })
}

function handleGuideClick() {
  // 图文教程功能占位
}
</script>

<style scoped>
.feature-card {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 18px 20px 16px;
  transition: all var(--transition);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.feature-card:hover {
  transform: translateY(-2px);
  border-color: var(--blue);
  box-shadow: var(--shadow-md);
}

.feature-card:hover .card-bar {
  transform: scaleX(1);
}

.card-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--blue), var(--teal));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform var(--transition);
}

.card-name {
  font-size: 15px;
  font-weight: 600;
  color: var(--text-dark);
  line-height: 1.4;
}

.card-desc {
  font-size: 13px;
  color: var(--text-muted);
  line-height: 1.7;
  flex: 1;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 2px;
}

.sub-tag {
  font-size: 11.5px;
  color: var(--text-muted);
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 2px 8px;
  cursor: default;
  transition: all var(--transition);
}

.feature-card:hover .sub-tag {
  color: var(--blue);
  background: var(--blue-light);
  border-color: rgba(26,111,212,.3);
}

/* Action row */
.card-action {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 6px;
}

/* 观看视频 — 蓝色实心风格 */
.btn-video {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 13px;
  font-family: inherit;
  color: #fff;
  background: var(--blue);
  border: 1px solid var(--blue);
  border-radius: var(--radius-sm);
  padding: 7px 14px;
  cursor: pointer;
  transition: all var(--transition);
  line-height: 1;
}

.btn-video:hover {
  background: #1558b0;
  border-color: #1558b0;
}

/* 图文教程 — 线框风格，与视频按钮形成对比 */
.btn-guide {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 13px;
  font-family: inherit;
  color: #475569;
  background: transparent;
  border: 1px solid #cbd5e1;
  border-radius: var(--radius-sm);
  padding: 7px 14px;
  cursor: pointer;
  transition: all var(--transition);
  line-height: 1;
}

.btn-guide:hover {
  color: var(--blue);
  border-color: rgba(26,111,212,.4);
  background: var(--blue-light);
}
</style>
