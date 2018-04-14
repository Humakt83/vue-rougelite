<template>
  <div class="level">
    <span class="tile" v-for="(tile, index) in tiles"  
    :x="tile.type" 
    :y="tile.type" 
    v-bind:key="index"
    v-bind:style="{left: tile.x + '%', top: tile.y + '%' }">
      {{ tile.type }}
    </span>
  </div>
</template>
<script>
const Tile = {
  props: ["tile"],
  /*computed: {
    color() {
    	return this.item.color.toFixed(2);
    }
  },*/
  template: "{{ tile.type }}"
};

const getTile = type => {

  switch (type) {
    case "floor":
      return "◻️";  
    default:
      return "⬛";
  }

}

const drawLevel = (level) => {
  //console.log(JSON.stringify(level))
  const tiles = [];
  const columns = 30;
  const rows = 13;
  const tileSize = columns;

  const sprites = [
    "💩",
    "⬛",
    "◻️",
    "🐍"
  ];

  level.level.map((tile) => {
    tiles.push({
      type: tile.content ? tile.content.isPlayer ? "🏃": "🐍" : tile.isWall ? "⬛" : "◻️",
      x: tile.x * (100 / columns),
      y: tile.y * (100 / rows)
    })
  })

  /* for (let i = 0; i < rows * columns; i++) {
    tiles.push({
      type: sprites[Math.floor(Math.random() * sprites.length)],
      x: (i % columns) * (100 / columns),
      y: Math.floor(i / columns) * (100 / rows)
    });
  }*/

  return tiles;
};

export default {
  name: "Level",
  props: ['level'],
  components: {
    tile: Tile
  },
  computed: {
    tiles(){
      return drawLevel(this.level)
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
  background-color: silver;
  border: solid 2px black;
  position: relative;
  width: 75vw;
  height: 75vh;
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
</style>
