<template>
  <div class="map">
    <span class="tile" v-for="(tile, index) in tiles"  
    :x="tile.type" 
    :y="tile.type" 
    v-bind:key="index"
    v-bind:style="{left: tile.x + 'px', top: tile.y + 'px' }">
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

const generateMapData = () => {
  const tiles = [];
  const columns = 20
  const tileSize = 30

  for (let i = 0; i < 100; i++) {
    tiles.push({ type: "B", 
                 x: (i % columns) * tileSize, 
                 y: Math.floor(i/columns) * tileSize });
  }

  return { tiles: tiles };
};

export default {
  name: "Map",
  props: {
    msg: String
  },
  components: {
    tile: Tile
  },
  data() {
    /*return {tiles: [
      { type: '#' },
      { type: 'H' }
    ]}*/
    return generateMapData();
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
.map {
  background-color: gray;
  border: solid 2px black;
  position: relative;
  width: 800px;
  height: 400px;
}
.tile {
  border: solid 1px rgba(255, 255, 255, .1);
  position: absolute;
  width: 30px;
  height: 30px;
  left: 0px;
  top: 0px;
}
</style>
