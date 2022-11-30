import { boot } from 'quasar/wrappers'
import VideoBackground from 'vue-responsive-video-background-player'

export default boot(({ app }) => {
  app.component('video-background', VideoBackground)
})
