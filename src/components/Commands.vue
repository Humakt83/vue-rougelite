<template>
  <div class="commands">
      <button class="left" @click="left()">LEFT</button>
      <button class="right" @click="right()">RIGHT</button>
      <button class="up" @click="up()">UP</button>
      <button class="down" @click="down()">DOWN</button>
  </div>
</template>

<script>

export default {
  methods: {
      left: function(event) { this.$emit('move', 'left')},
      right: function(event) { this.$emit('move', 'right')},
      down: function(event) { this.$emit('move', 'down')},
      up: function(event) { this.$emit('move', 'up')},
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .commands button {
    font-size: 18px;
    border: 1px solid black;
    border-radius: 15px;
    width: 100px;
    position: absolute;
    height: 30px;
    background-color: rgb(80, 255, 180);
    font-weight: bolder;
  }

  .left {
      left: 0;
      top: 30px;
  }

  .right {
      left: 200px;
      top: 30px;
  }

  .down {
      top: 30px;
      left: 100px;
  }

  .up {
      top: 0;
      left: 100px;
  }
</style>
