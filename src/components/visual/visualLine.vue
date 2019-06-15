<script>
export default {
  props: ['analyser'],
  data () {
    return {
      animationId: null,
      canvasCtx: null,
      width: window.innerWidth,
      height: 125
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
      this.renderLineGraph(data)
      this.animationId = requestAnimationFrame(this.render)
    },
    renderLineGraph(data) {
      // 時間領域の波形データ
      this.analyser.getByteTimeDomainData(data)
      this.canvasCtx.beginPath()

      for (let i=0, len=data.length; i<len; i++) {
        let x = (i / len) * this.$el.width
        var y = (1 - (data[i] / 255)) * this.$el.height;
        (i === 0) ? this.canvasCtx.moveTo(x, y) : this.canvasCtx.lineTo(x, y)
        this.canvasCtx.stroke()
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
