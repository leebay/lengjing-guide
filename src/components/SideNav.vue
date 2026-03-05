<template>
  <nav class="side-nav">
    <div class="nav-label">功能目录</div>

    <div class="nav-tree">
      <div
        v-for="item in navTree"
        :key="item.id"
        class="nav-l1"
        :class="{ active: activePanel === item.panelId }"
        @click="selectItem(item.panelId)"
      >
        <div class="nav-l1-icon" :style="{ background: hexToRgba(item.color, 0.12) }">
          <el-icon :style="{ color: item.color }">
            <component :is="item.icon" />
          </el-icon>
        </div>
        <span class="nav-l1-label">{{ item.label }}</span>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { navTree } from '../data/modules.js'

const props = defineProps({
  activePanel: {
    type: String,
    default: 'home'
  }
})

const emit = defineEmits(['select'])

function selectItem(panelId) {
  emit('select', panelId)
}

function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r},${g},${b},${alpha})`
}
</script>

<style scoped>
.side-nav {
  width: 220px;
  min-width: 220px;
  height: 100%;
  background: #fff;
  border-right: 1px solid var(--border);
  overflow-y: auto;
  padding: 16px 0 20px;
  display: flex;
  flex-direction: column;
}

.nav-label {
  font-size: 11px;
  font-weight: 600;
  color: #94A3B8;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 0 20px 10px;
}

.nav-tree {
  flex: 1;
}

.nav-l1 {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px 10px 20px;
  cursor: pointer;
  transition: all var(--transition);
  border-left: 3px solid transparent;
}

.nav-l1:hover {
  background: var(--blue-light);
}

.nav-l1.active {
  background: var(--blue-light);
  border-left-color: var(--blue);
}

.nav-l1-icon {
  width: 28px;
  height: 28px;
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 14px;
}

.nav-l1-label {
  flex: 1;
  font-size: 13.5px;
  font-weight: 500;
  color: var(--text-dark);
}

.nav-l1.active .nav-l1-label {
  color: var(--blue);
  font-weight: 600;
}
</style>
