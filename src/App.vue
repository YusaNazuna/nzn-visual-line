<template>
  <div id="app">
    <input type="file" @change="upload" ref="input">
    <audio-sound :ctx="this.ctx" :buffer="buffer"></audio-sound>
  </div>
</template>

<script>
import audioSound from '@/components/audioSound.vue'

export default {
  name: 'app',
  data () {
    return {
      reader: new FileReader,
      ctx: null,
      buffer: null
    }
  },
  methods: {
    upload(e) {
      this.reader.readAsArrayBuffer(e.target.files[0])
      this.reader.onload = this.readerOnload
    },
    readerOnload() {
      // ブラウザ制約
      this.ctx = new AudioContext;
      this.ctx.decodeAudioData(this.reader.result, this.bufferOnload)
    },
    bufferOnload(buffer) {
      this.buffer = buffer;
    }
  },
  components: {
    audioSound
  }
}
</script>

<style lang="scss">
#app {
  margin: 0;
}
</style>
