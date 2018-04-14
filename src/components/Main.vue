<template>
  <div class="main">
    <div class="mapArea">
      <Map />
    </div>
    <div class="infoArea">
      <Info />
    </div>
    <div class="commandArea">
      <Commands />
    </div>
  </div>
</template>

<script>
import Engine from '../Engine'
import Map from './Map';
import Info from './Info';
import Commands from './Commands';


const keyCommands = {
  'ArrowLeft': Engine.moveLeft,
  'ArrowRight': Engine.moveRight,
  'ArrowUp': Engine.moveUp,
  'ArrowDown': Engine.moveDown,
}

export default {
  components: {
    Map,
    Info,
    Commands
  },
  mounted() {
    window.addEventListener('keydown', (e) => {
      const {key, shiftKey, ctrlKey, altKey} = e

      const modifiers = shiftKey || ctrlKey || altKey

      if (!modifiers && keyCommands.hasOwnProperty(key) && typeof keyCommands[key] === 'function') {
        const cmd = keyCommands[key]

        cmd()
      }
    })
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .mapArea, .infoArea {
    width: 75%;
    min-height: 75%;
    border: 2px solid black;
    position: absolute;
    top: 0;
    left: 0;
  }

  .infoArea {
    left: 75%;
    width: 25%;
    min-height: 75%;
  }

  .commandArea {
    position: absolute;
    left: 0;
    top: 75%;
    width: 100%;
    min-height: 25%;
    border: 2px solid black;
  }

</style>
