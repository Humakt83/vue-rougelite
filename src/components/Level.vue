<template>
  <div class="level" :style="{'background-color': color}">
    <div class="tile" v-for="(tile, index) in tiles" :key="index" v-tooltip.right="tile.text">
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

const getText = (tile, environment) => {
  if(tile.isDoor) {
    return `${environment.doorSymbol}: exits the level`;
  }
  if (tile.isWall || !tile.content){
    return undefined;
  }
  if (tile.content.isPlayer){
    return "🏃: You"
  }
  return tile.content.text;
}

const drawLevel = (level) => {
  const tiles = [];
  const columns = 30;
  const rows = 13;

 for (let y = 0; y < rows; y++) {
  for (let x = 0; x < columns; x++) {
      const tile = level.getTile(x, y);
      tiles.push({
        type: getTileType(tile, level.environment),
        animation: tile.animation,
        text: getText(tile, level.environment),
      });
    }
  }

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
  display: grid;
  grid-template-columns: repeat(30, 3.33%);
  grid-template-rows: repeat(13, 7,69%);
  align-items: center;
  width: calc(75vw - 4px);
  height: calc(75vh - 4px);
}
.tile {
  font-size: calc(75vh / 13 - 15px);
  margin: 0;
  padding: 0;
  user-select: none;
  width: calc(75vh / 13 - 13px);
  height: calc(75vh / 13 - 13px);
  margin-top: 4px;
  position: relative;
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
