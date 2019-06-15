<template>
    <audio-visualizer :analyser="this.analyser"></audio-visualizer>
</template>

<script>
import audioVisualizer from '@/components/audioVisualizer.vue'

export default {
  props: ['ctx', 'buffer'],
  data () {
    return {
      volume: 0.3,
      fftSize: 256,
      smooth: 0.7,
      source: null,
      analyser: null
    }
  },
  methods: {
    play() {
      this.setup()
      this.source.start(0)
    },
    stop() {
      this.source && this.source.stop()
    },
    setup() {
      this.source = this.ctx.createBufferSource()
      this.source.buffer = this.buffer
      this.analyser = this.ctx.createAnalyser()
      this.gain = this.ctx.createGain()

      this.analyser.fftSize = this.fftSize
      this.analyser.smoothingTimeConstant = this.smooth
      this.gain.gain.value = this.volume

      this.source.connect(this.gain)
      this.gain.connect(this.analyser)
      this.analyser.connect(this.ctx.destination)
    },
  },
  watch: {
    buffer: {
      handler(val) {
        this.stop()
        this.play()
      },
      deep: true
    },
  },
  components: {
    audioVisualizer
  }
}
</script>
