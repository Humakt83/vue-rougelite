<template>
  <div class="main">
    <div class="levelArea">
      <Level :level="level" />
    </div>
    <div class="infoArea">
      <Info :player="player"/>
    </div>
    <div class="commandsArea">
      <Commands @move="move"></Commands>
    </div>
    <div class="logArea">
      <Log :gameLog="gameLog"/>
    </div>
  </div>
</template>

<script>
import Level from './Level';
import Info from './info/Info';
import Log from './Log';
import Game from '../logic/game';
import Commands from './Commands';

const game = Game();

const keyCommands = {
  'ArrowLeft': () => game.move('left'),
  'ArrowRight': () => game.move('right'),
  'ArrowUp': () => game.move('up'),
  'ArrowDown': () => game.move('down'),
}

export default {
  data:() => {
    return {
      level: game.level,
      player: game.player,
      gameLog: game.gameLog,
    }
  },
  components: {
    Level,
    Info,
    Log,
    Commands
  },
  mounted() {
    const that = this;
    window.addEventListener('keydown', (e) => {
      const {key, shiftKey, ctrlKey, altKey} = e

      const modifiers = shiftKey || ctrlKey || altKey

      if (!modifiers && keyCommands.hasOwnProperty(key) && typeof keyCommands[key] === 'function') {
        const cmd = keyCommands[key]
        that.changeLevel(cmd());
      }
    })
  },
  methods: {
    move(direction) {
      const result = game.move(direction)
      this.changeLevel(result);
    },
    changeLevel(result) {
      if (result.level) {
        this.level = result.level;
        game.level = result.level;
      }
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .levelArea, .infoArea {
    width: 75%;
    min-height: 75%;
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

  .commandsArea {
    position: absolute;
    left: 0;
    top: 75%;
    width: 30%;
  }

  .logArea {
    position: absolute;
    left: 30%;
    top: 75%;
    width: 70%;
    min-height: 25%;
    margin: -6px;
  }

</style>
