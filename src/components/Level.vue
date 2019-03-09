<template>
  <div class="level" :style="{'background-color': color}">
    <div class="tile" v-for="(tile, index) in tiles"
    :key="index"
    :style="{left: tile.x + '%', top: tile.y + '%'}">
      <span>{{ tile.type }}</span>
      <template v-if="tile.animation">
        <span class="animation">💥</span>
      </template>
    </div>
  </div>
</template>
<script>
const getTileType = (tile, environment) => {
  if(tile.isDoor) {
    return environment.doorSymbol;
  }
  if (tile.isWall){
    return environment.wallSymbol;
  }
  if (!tile.content){
    return '';
  }
  if (tile.content.isPlayer){
    return "🏃"
  }
  return tile.content.symbol;
}

const drawLevel = (level) => {
  const tiles = [];
  const columns = 30;
  const rows = 13;
  const tileSize = columns;

  level.level.forEach((tile) => {
    tiles.push({
      type: getTileType(tile, level.environment),
      x: tile.x * (100 / columns),
      y: tile.y * (100 / rows),
      animation: tile.animation
    })
  })

  return tiles;
};

export default {
  name: "Level",
  props: ['level'],
  computed: {
    tiles(){
      return drawLevel(this.level)
    },
    color() {
      return this.level.environment.floorColor;
    }
  }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.level {
  border: solid 2px black;
  position: relative;
  width: calc(75vw - 4px);
  height: calc(75vh - 4px);
}
.tile {
  border: solid 1px rgba(255, 255, 255, 0.1);
  position: absolute;
  width: 1px;
  height: 1px;
  left: 0px;
  top: 0px;
  font-size: calc(75vh / 13);
  transform: scale(calc(2 * (13 / 30)), 1.1);
  margin: 0;
  padding: 0;
  vertical-align: top;
  line-height: 1em;
  user-select: none;
}
.animation {
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
  z-index: 1;
  animation: fade 1s;
  opacity: 0;
}

@keyframes fade {
  0% { opacity: 0;}
  50% { opacity: 1;}
  100% { opacity: 0;}
}
</style>
