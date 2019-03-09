<template>
  <div class="level" :style="{'background-color': color}">
    <div class="tile" v-for="(tile, index) in tiles"
    :key="index">
      {{ tile.type }}
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
  if(!tile.content){
    return '';
  }
  if(tile.content.isPlayer){
    return "🏃"
  }
  return tile.content.symbol;
}

const drawLevel = (level) => {
  const tiles = [];
  const columns = 30;
  const rows = 13;

 for (let y = 0; y < rows; y++) {
  for (let x = 0; x < columns; x++) {
      const tile = level.getTile(x, y);
      tiles.push({
        type: getTileType(tile, level.environment)
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
  align-items: center;
  width: calc(75vw - 4px);
  height: calc(75vh - 4px);
}
.tile {
  font-size: calc(75vh / 13 - 15px);
  margin: 0;
  padding: 0;
  user-select: none;
  width: 100%;
  height: 100%;
  margin-top: 4px;
}
</style>
