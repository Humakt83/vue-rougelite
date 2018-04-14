<template>
  <div class="main">
    <div class="levelArea">
      <Level :level="game.level" />
    </div>
    <div class="infoArea">
      <Info />
    </div>
    <div class="logArea">
      <Log />
    </div>
  </div>
</template>

<script>
import Level from './Level';
import Info from './info/Info';
import Log from './Log';
import Game from '../logic/game';

const game = Game();

const keyCommands = {
  'ArrowLeft': () => game.move('left'),
  'ArrowRight': () => game.move('right'),
  'ArrowUp': () => game.move('up'),
  'ArrowDown': () => game.move('down'),
}

window.addEventListener('keydown', (e) => {
  const {key, shiftKey, ctrlKey, altKey} = e

  const modifiers = shiftKey || ctrlKey || altKey

  if (!modifiers && keyCommands.hasOwnProperty(key) && typeof keyCommands[key] === 'function') {
    const cmd = keyCommands[key]
    cmd()
  }
})

export default {
  data:() => {
    return {game: game}
  },
  components: {
    Level,
    Info,
    Log
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .levelArea, .infoArea {
    width: 75%;
    min-height: 75%;
    border: 2px solid black;
    position: absolute;
    top: 0;
    left: 0;
    margin: -6px;
  }

  .levelArea {
    width: calc(75% - 4px);
    min-height: calc(75% - 4px);
  }

  .infoArea {
    left: 75%;
    width: 25%;
    min-height: 75%;
  }

  .logArea {
    position: absolute;
    left: 0;
    top: 75%;
    width: 100%;
    min-height: 25%;
    border: 2px solid black;
    margin: -6px;
  }

</style>
