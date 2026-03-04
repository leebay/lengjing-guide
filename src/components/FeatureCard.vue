<template>
  <div class="feature-card" @click="handleClick">
    <div v-if="card.hasVideo" class="video-badge">
      <el-icon><VideoPlay /></el-icon>
      教学视频
    </div>
    <div class="card-name">{{ card.name }}</div>
    <div class="card-desc">{{ card.desc }}</div>
    <div v-if="card.tags && card.tags.length" class="card-tags">
      <span v-for="tag in card.tags" :key="tag" class="sub-tag">{{ tag }}</span>
    </div>
    <div v-if="card.hasVideo" class="card-action">
      <button class="watch-btn" @click.stop="handleClick">
        <el-icon><CaretRight /></el-icon>
        观看视频
      </button>
    </div>
    <div class="card-bar"></div>
  </div>
</template>

<script setup>
const props = defineProps({
  card: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['open-video'])

function handleClick() {
  emit('open-video', { title: props.card.videoTitle || props.card.name, desc: props.card.desc })
}
</script>

<style scoped>
.feature-card {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 18px 20px 16px;
  cursor: pointer;
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

.video-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  align-items: center;
  gap: 4px;
  background: linear-gradient(135deg, var(--blue), var(--teal));
  color: #fff;
  font-size: 11px;
  font-weight: 500;
  padding: 3px 8px;
  border-radius: 20px;
  line-height: 1;
}

.card-name {
  font-size: 15px;
  font-weight: 600;
  color: var(--text-dark);
  padding-right: 68px;
  line-height: 1.4;
}

.card-desc {
  font-size: 13px;
  color: var(--text-muted);
  line-height: 1.7;
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

.card-action {
  margin-top: 4px;
}

.watch-btn {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 12.5px;
  font-family: inherit;
  color: var(--blue);
  background: var(--blue-light);
  border: 1px solid rgba(26,111,212,.2);
  border-radius: var(--radius-sm);
  padding: 4px 12px;
  cursor: pointer;
  transition: all var(--transition);
}

.watch-btn:hover {
  background: var(--blue);
  color: #fff;
}
</style>
