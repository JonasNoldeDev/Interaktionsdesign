import { createStore } from 'vuex'

export default createStore({
  state: {
    playMusic: false,
    bgMusic: new Audio(require("../assets/music/backgroundMusic.mp3"))
  },
  mutations: {
    startMusic (state) {
      state.playMusic = true
      state.bgMusic.play()
      state.bgMusic.loop = true
    },
    stopMusic (state) {
      state.playMusic = false
      state.bgMusic.pause()
    }
  },
  actions: {
  },
  modules: {
  }
})
