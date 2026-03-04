<template>
  <teleport to="body">
    <transition name="overlay">
      <div v-if="visible" class="modal-overlay" @click.self="close">
        <transition name="modal">
          <div v-if="visible" class="modal-box" role="dialog">
            <div class="modal-header">
              <span class="modal-title">{{ title }}</span>
              <button class="modal-close" @click="close" aria-label="关闭">
                <el-icon><Close /></el-icon>
              </button>
            </div>
            <div class="modal-body">
              <div class="video-placeholder">
                <div class="video-glow"></div>
                <div class="play-circle">
                  <el-icon class="play-icon"><CaretRight /></el-icon>
                </div>
                <div class="video-label">{{ title }}</div>
                <div class="video-hint">视频上传后将在此处播放</div>
              </div>
              <div class="modal-desc">{{ desc }}</div>
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </teleport>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

const props = defineProps({
  visible: Boolean,
  title: { type: String, default: '' },
  desc: { type: String, default: '' }
})

const emit = defineEmits(['close'])

function close() {
  emit('close')
}

function onKeydown(e) {
  if (e.key === 'Escape') close()
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => window.removeEventListener('keydown', onKeydown))
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(10,15,30,.72);
  backdrop-filter: blur(6px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.modal-box {
  background: #fff;
  border-radius: var(--radius-lg);
  width: min(820px, 92vw);
  overflow: hidden;
  box-shadow: 0 24px 80px rgba(0,0,0,.3);
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 24px;
  border-bottom: 1px solid var(--border);
}

.modal-title {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-dark);
}

.modal-close {
  width: 32px;
  height: 32px;
  border: none;
  background: var(--bg);
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
  font-size: 16px;
  transition: all var(--transition);
}

.modal-close:hover {
  background: #FFE4E4;
  color: var(--red);
}

.modal-body {
  padding: 24px;
}

.video-placeholder {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background: linear-gradient(135deg, #0D1B3E 0%, #0A2560 50%, #0D1B3E 100%);
  border-radius: var(--radius-md);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  gap: 12px;
}

.video-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at center, rgba(26,111,212,.25) 0%, transparent 70%);
}

.play-circle {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: rgba(255,255,255,.15);
  border: 2px solid rgba(255,255,255,.3);
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(4px);
  position: relative;
  z-index: 1;
}

.play-icon {
  font-size: 28px;
  color: #fff;
  margin-left: 4px;
}

.video-label {
  font-size: 15px;
  font-weight: 600;
  color: rgba(255,255,255,.9);
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 0 16px;
}

.video-hint {
  font-size: 12px;
  color: rgba(255,255,255,.4);
  position: relative;
  z-index: 1;
}

.modal-desc {
  margin-top: 16px;
  font-size: 13.5px;
  color: var(--text-muted);
  line-height: 1.7;
}

/* Overlay transition */
.overlay-enter-active,
.overlay-leave-active {
  transition: opacity 0.22s ease;
}
.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}

/* Modal box transition */
.modal-enter-active,
.modal-leave-active {
  transition: all 0.22s cubic-bezier(.4,0,.2,1);
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(0.94) translateY(16px);
}
</style>
