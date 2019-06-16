<script>
export default {
  props: ['analyser'],
  data () {
    return {
      animationId: null,
      canvasCtx: null,
      width: window.innerWidth,
      height: 200
    }
  },
  mounted() {
    this.canvasCtx = this.$el.getContext('2d')
    window.addEventListener('resize', this.resize)
  },
  methods: {
    play() {
       this.animationId = requestAnimationFrame(this.render)
    },
    render() {
      // 指定数分の配列を定義
      let data = new Uint8Array(this.analyser.frequencyBinCount)
      this.canvasCtx.clearRect(0, 0, this.$el.width, this.$el.height)
      this.renderBar(data)
      this.animationId = requestAnimationFrame(this.render)
    },
    renderBar(data) {
      // 周波数領域の波形データ
      this.analyser.getByteFrequencyData(data)
      for (let i=0, len=data.length; i<len; i++) {
          this.canvasCtx.fillStyle = `hsl(${i*3}, 100%, 50%)`;
          this.canvasCtx.fillRect(i*18, this.$el.height, 12, (data[i]*-0.6))
      }
    },
    resize() {
      this.width = window.innerWidth
    }
  },
  watch: {
    analyser: {
      handler(val) {
        this.play();
      },
      deep: true
    },
  },
  render(el) {
    return el(
      'canvas',
      {
        attrs: {
          width: this.width,
          height: this.height,
        },
        style: {
          'position': 'absolute',
          'left': '0',
          'bottom': '0',
          'zIndex': '1'
        }
      },
      this.$slots.default
    )
  },
}
</script>
