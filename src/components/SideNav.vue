<template>
  <nav class="side-nav">
    <div class="nav-label">功能目录</div>

    <div class="nav-tree">
      <template v-for="item in navTree" :key="item.id">
        <!-- L1 with no children: direct link -->
        <div
          v-if="!item.children || item.children.length === 0"
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

        <!-- L1 with children: expandable group -->
        <div v-else class="nav-group">
          <div
            class="nav-l1"
            :class="{ 'has-children': true, expanded: expandedGroups.includes(item.id) }"
            @click="toggleGroup(item.id)"
          >
            <div class="nav-l1-icon" :style="{ background: hexToRgba(item.color, 0.12) }">
              <el-icon :style="{ color: item.color }">
                <component :is="item.icon" />
              </el-icon>
            </div>
            <span class="nav-l1-label">{{ item.label }}</span>
            <el-icon class="expand-arrow" :class="{ rotated: expandedGroups.includes(item.id) }">
              <ArrowRight />
            </el-icon>
          </div>

          <transition name="expand">
            <div v-show="expandedGroups.includes(item.id)" class="nav-l2-group">
              <div
                v-for="child in item.children"
                :key="child.id"
                class="nav-l2"
                :class="{ active: activePanel === child.panelId }"
                @click="selectItem(child.panelId)"
              >
                <span class="nav-l2-dot"></span>
                <span class="nav-l2-label">{{ child.label }}</span>
              </div>
            </div>
          </transition>
        </div>
      </template>
    </div>
  </nav>
</template>

<script setup>
import { ref, watch } from 'vue'
import { navTree } from '../data/modules.js'

const props = defineProps({
  activePanel: {
    type: String,
    default: 'home'
  }
})

const emit = defineEmits(['select'])

const expandedGroups = ref([])

// Initialize: expand the group that contains the active panel
function findParentGroup(panelId) {
  for (const item of navTree) {
    if (item.children && item.children.some(c => c.panelId === panelId)) {
      return item.id
    }
  }
  return null
}

watch(() => props.activePanel, (panelId) => {
  const parentId = findParentGroup(panelId)
  if (parentId && !expandedGroups.value.includes(parentId)) {
    expandedGroups.value.push(parentId)
  }
}, { immediate: true })

function toggleGroup(groupId) {
  const idx = expandedGroups.value.indexOf(groupId)
  if (idx === -1) {
    expandedGroups.value.push(groupId)
  } else {
    expandedGroups.value.splice(idx, 1)
  }
}

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
  width: 260px;
  min-width: 260px;
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
  padding: 9px 16px 9px 20px;
  cursor: pointer;
  transition: all var(--transition);
  border-left: 3px solid transparent;
  position: relative;
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

.expand-arrow {
  color: #CBD5E1;
  font-size: 12px;
  transition: transform var(--transition);
}

.expand-arrow.rotated {
  transform: rotate(90deg);
  color: var(--blue);
}

.nav-l2-group {
  padding: 2px 0 4px;
  background: #FAFBFE;
  border-bottom: 1px solid var(--border);
}

.nav-l2 {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 7px 16px 7px 52px;
  cursor: pointer;
  transition: all var(--transition);
}

.nav-l2:hover {
  background: var(--blue-light);
}

.nav-l2.active {
  background: var(--blue-light);
}

.nav-l2-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #CBD5E1;
  flex-shrink: 0;
  transition: background var(--transition);
}

.nav-l2.active .nav-l2-dot {
  background: var(--blue);
}

.nav-l2-label {
  font-size: 13px;
  color: var(--text-muted);
  transition: color var(--transition);
}

.nav-l2.active .nav-l2-label {
  color: var(--blue);
  font-weight: 600;
}

/* Expand transition */
.expand-enter-active,
.expand-leave-active {
  transition: all 0.22s ease;
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  max-height: 0;
}

.expand-enter-to,
.expand-leave-from {
  opacity: 1;
  max-height: 300px;
}
</style>
