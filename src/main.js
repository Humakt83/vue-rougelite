import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Engine from './Engine'
Vue.config.productionTip = false

const engine = new Engine()

const keyCommands = {
  'ArrowLeft': engine.moveLeft,
  'ArrowRight': engine.moveRight,
  'ArrowUp': engine.moveUp,
  'ArrowDown': engine.moveDown,
}

window.addEventListener('keydown', (e) => {
  const {key, shiftKey, ctrlKey, altKey} = e

  const modifiers = shiftKey || ctrlKey || altKey

  if (!modifiers && keyCommands.hasOwnProperty(key) && typeof keyCommands[key] === 'function') {
    const cmd = keyCommands[key]

    cmd()
  }
})

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
