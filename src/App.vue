<template>
  <div id="app">
    <input type="file" @change="upload" ref="input">
    <audio-visualizer :audio="this.$data.audio" :buffer="modBuffer"></audio-visualizer>
  </div>
</template>

<script>
import audioVisualizer from '@/components/audioVisualizer.vue'

export default {
  name: 'app',
  data () {
    return {
      audio: null,
      readAsArrayBuffer: null,
    }
  },
  methods: {
    upload(e) {
      this.readAsArrayBuffer = e.target.files[0]
    },
  },
  computed: {
    modBuffer() {
      return this.readAsArrayBuffer
    },
  },
  watch: {

  },
  components: {
    audioVisualizer
  }
}
</script>

<style lang="scss">
#app {
  margin: 0;
}
</style>
