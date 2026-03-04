<template>
  <header class="topbar">
    <div class="topbar-left">
      <div class="logo-icon">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <defs>
            <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#1A6FD4"/>
              <stop offset="100%" stop-color="#00B4D8"/>
            </linearGradient>
          </defs>
          <polygon points="14,2 26,8 26,20 14,26 2,20 2,8" fill="url(#logoGrad)"/>
          <polygon points="14,7 21,11 21,17 14,21 7,17 7,11" fill="rgba(255,255,255,0.25)"/>
        </svg>
      </div>
      <span class="logo-text">棱境</span>
      <div class="divider"></div>
      <span class="subtitle">教师端 · 功能导览</span>
    </div>

    <div class="topbar-right">
      <div class="mode-toggle">
        <button
          class="mode-btn"
          :class="{ active: mode === 'list' }"
          @click="$emit('mode-change', 'list')"
        >
          <el-icon><List /></el-icon>
          列表模式
        </button>
        <button
          class="mode-btn"
          :class="{ active: mode === 'graph' }"
          @click="$emit('mode-change', 'graph')"
        >
          <el-icon><Share /></el-icon>
          流程化教学
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
defineProps({
  mode: {
    type: String,
    default: 'list'
  }
})
defineEmits(['mode-change'])
</script>

<style scoped>
.topbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 56px;
  background: #fff;
  border-bottom: 1px solid var(--border);
  box-shadow: 0 1px 8px rgba(26,111,212,.06);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  z-index: 100;
}

.topbar-left {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo-icon {
  display: flex;
  align-items: center;
}

.logo-text {
  font-size: 18px;
  font-weight: 700;
  color: var(--blue-dark);
  letter-spacing: 0.5px;
}

.divider {
  width: 1px;
  height: 18px;
  background: var(--border);
  margin: 0 4px;
}

.subtitle {
  font-size: 13px;
  color: var(--text-muted);
  font-weight: 400;
}

.mode-toggle {
  display: flex;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 3px;
  gap: 2px;
}

.mode-btn {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 14px;
  border: none;
  background: transparent;
  border-radius: 6px;
  font-size: 13px;
  font-family: inherit;
  color: var(--text-muted);
  cursor: pointer;
  transition: all var(--transition);
  white-space: nowrap;
}

.mode-btn:hover {
  color: var(--blue);
  background: rgba(26,111,212,.06);
}

.mode-btn.active {
  background: #fff;
  color: var(--blue);
  font-weight: 600;
  box-shadow: 0 1px 4px rgba(26,111,212,.12);
}
</style>
