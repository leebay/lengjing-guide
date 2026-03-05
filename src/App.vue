<template>
  <div class="app">
    <TopBar :mode="currentMode" @mode-change="switchMode" />

    <div class="app-body">
      <!-- List Mode -->
      <template v-if="currentMode === 'list'">
        <SideNav :activePanel="activePanelId" @select="selectPanel" />
        <ContentPanel :panel="activePanel" @open-video="openVideo" />
      </template>

      <!-- Flow / Graph Mode -->
      <FlowMode v-else @open-video="openVideo" />
    </div>

    <VideoModal
      :visible="videoModal.visible"
      :title="videoModal.title"
      :desc="videoModal.desc"
      @close="closeVideo"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import TopBar from './components/TopBar.vue'
import SideNav from './components/SideNav.vue'
import ContentPanel from './components/ContentPanel.vue'
import FlowMode from './components/FlowMode.vue'
import VideoModal from './components/VideoModal.vue'
import { panels } from './data/modules.js'

const currentMode = ref('list')
const activePanelId = ref('oc-all')

const activePanel = computed(() => panels.find(p => p.id === activePanelId.value) || panels[0])

const videoModal = ref({ visible: false, title: '', desc: '' })

function switchMode(mode) {
  currentMode.value = mode
}

function selectPanel(panelId) {
  activePanelId.value = panelId
}

function openVideo({ title, desc }) {
  videoModal.value = { visible: true, title, desc }
}

function closeVideo() {
  videoModal.value.visible = false
}
</script>

<style scoped>
.app {
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.app-body {
  margin-top: 56px;
  flex: 1;
  display: flex;
  overflow: hidden;
  height: calc(100vh - 56px);
}
</style>
