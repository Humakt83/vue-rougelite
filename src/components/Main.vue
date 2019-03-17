<template>
  <div class="main" v-if="player">
    <div class="levelArea">
      <Level :level="level"/>
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
