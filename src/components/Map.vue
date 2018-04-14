<template>
  <div class="map">
    <span class="tile" v-for="(tile, index) in tiles"  :x="tile.type" :y="tile.type" v-bind:style="{ 'left': x + 'px' }">
      {{ tile.type }}
    </span>
  </div>
</template>

<script>

const Tile = {
  props: ['tile'],
  /*computed: {
    color() {
    	return this.item.color.toFixed(2);
    }
  },*/
  template: "{{ tile.type }}",
}

const generateMapData = () => {

  const tiles = []

  for(let i=0;i<10;i++){
    tiles.push({type: "B", x: i*40, y: 1})
  }

  return {tiles:tiles}
}

export default {
  name: 'Map',
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
    return generateMapData()
  }
}

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
  background-color: brown;
  border: solid 2px black;
  position: absolute;
  width: 40px;
  height: 40px;
  left:0px;
  top:0px;
}
</style>
