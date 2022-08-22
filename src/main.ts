// import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'

// createApp(App).mount('#app')

import { Application } from 'pixi.js';

const game = new Application({
  width: 500,
  height: 500
})

document.body.append(game.view)
