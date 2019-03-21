<template>
  <div class="main" v-if="player">
    <div class="levelArea">
      <Level :level="level"/>
    </div>
    <div class="infoArea">
      <Info :player="player"/>
      <Commands @move="move"></Commands>
    </div>
    <div class="logArea">
      <Log :gameLog="gameLog"/>
    </div>
    <GameOver v-if="player.health <= 0 || victory" :win="victory" @confirm="createNewGame()"/>
  </div>
</template>

<script>
import Level from './Level';
import Info from './info/Info';
import Log from './Log';
import Game from '../logic/game';
import Commands from './Commands';
import GameOver from './GameOver';

const keyCommands = {
  'ArrowLeft': (game) => game.move('left'),
  'ArrowRight': (game) => game.move('right'),
  'ArrowUp': (game) => game.move('up'),
  'ArrowDown': (game) => game.move('down'),
}

export default {
  data:() => {
    return {
      game: undefined,
      level: undefined,
      player: undefined,
      gameLog: Game.gameLog,
    }
  },
  components: {
    Level,
    Info,
    Log,
    Commands,
    GameOver,
  },
  mounted() {
    const that = this;
    this.createNewGame();
    window.addEventListener('keydown', (e) => {
      const {key, shiftKey, ctrlKey, altKey} = e

      const modifiers = shiftKey || ctrlKey || altKey

      if (!modifiers && keyCommands.hasOwnProperty(key) && typeof keyCommands[key] === 'function') {
        const cmd = keyCommands[key]
        that.changeLevel(cmd(that.game));
      }
    })
  },
  computed: {
    victory() {
      return !!this.player.winner;
    }
  },
  methods: {
    move(direction) {
      const result = this.game.move(direction)
      this.changeLevel(result);
    },
    changeLevel(result) {
      if (result && result.level) {
        this.level = result.level;
        this.game.level = result.level;
      }
    },
    createNewGame() {
      this.game = Game.createNewGame();
      this.player = this.game.player;
      this.level = this.game.level;
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .levelArea, .infoArea {
    min-height: 75vh;
    position: absolute;
    top: 3vh;
    margin: -6px;
  }

  .levelArea {
    left: 2vw;
    width: calc(75vw - 4px);
    height: calc(75vh - 4px);
    @media (orientation: portrait) {
      width: calc(75vw - 4px);
      height: calc(75vw - 4 px);
    }
  }

  .infoArea {
    left: 78vw;
    width: 20vw;
    @media (orientation: portrait) {
      width: 20vh;
      left: 78vh;
    }
  }

  .logArea {
    position: absolute;
    left: 2vw;
    top: 78vh;
    width: 70vw;
    min-height: 20vh;
    margin: -6px;
    @media (orientation: portrait) {
      width: 70vh;
      left: 1vh;
      top: 79vw;
      min-height: 19vw;
    }
  }

</style>
