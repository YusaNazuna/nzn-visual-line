<script>
// new ○○のオブジェクトはdeppでもwatchで認識してくれない
// this.$setだとFileReaderのonloadが発火してくれない
// requestAnimationFrame引数の、コールバック関数には「通常」引数を渡せない

export default {
  props: ['analyser'],
  data () {
    return {
      animationId: null,
      canvasCtx: null,
    }
  },
  mounted() {
    this.canvasCtx = this.$el.getContext('2d')
  },
  methods: {
    play() {
       this.animationId = requestAnimationFrame(this.render)
    },
    render() {
      // 指定数分の配列を定義
      let data = new Uint8Array(this.analyser.frequencyBinCount)
      this.canvasCtx.clearRect(0, 0, this.$el.width, this.$el.height)
      this.canvasCtx.fillStyle = 'rgba(255, 255, 255, 1)';

      this.renderBar(data)
      this.renderLineGraph(data)

      this.animationId = requestAnimationFrame(this.render)
    },
    renderBar(data) {
      // 周波数領域の波形データ
      this.analyser.getByteFrequencyData(data)
      for (let i=0, len=data.length; i<len; i++) {
        this.canvasCtx.fillRect(i*7, this.$el.height, 5, (data[i]*-0.3))
      }
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
        style: {
          'width': '100%',
          'height': '250px'
        }
      },
      this.$slots.default
    )
  },
}
</script>
