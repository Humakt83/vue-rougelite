<template>
  <div class="commands">
    <i @click="up()" class="fas fa-arrow-alt-circle-up" />
    <i @click="left()" class="fas fa-arrow-alt-circle-left" />
    <i @click="down()" class="fas fa-arrow-alt-circle-down" />
    <i @click="right()" class="fas fa-arrow-alt-circle-right" />
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
.commands {
  display: grid;
  grid-template-columns: 50px 50px 50px 50px;
  grid-template-rows: auto;
  grid-template-areas: 
    ". up ."
    "left down right";
  padding: 1rem 2rem;
  i {
    font-size: 48px;
    font-weight: bolder;
    color: blue;
    cursor: pointer;
    &:hover {
      color: cyan;
    }
  }

  .fa-arrow-alt-circle-up {
    grid-area: up;
  }

  .fa-arrow-alt-circle-left {
    grid-area: left;
  }

  .fa-arrow-alt-circle-down {
    grid-area: down;
  }

  .fa-arrow-alt-circle-right {
    grid-area: right;
  }
}
</style>
