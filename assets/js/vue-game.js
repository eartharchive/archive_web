import Vue from 'vue'
import App from './App.vue'

const gameContainer = document.querySelector("#game-container")

if (gameContainer) {
  console.log("have a gameContainer")
  new Vue({
    el: '#game-container',
    template: '<App/>',
    components: { App }
  })
}