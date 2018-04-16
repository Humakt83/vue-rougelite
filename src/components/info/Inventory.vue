<template>
  <div class="inventory">
    <h3>Inventory</h3>
    <div class="paperdoll">
    </div>
    <div class="backpack">
      <div class="backpackSlot" v-for="(item, index) in inventory.backpack" :key="index">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['inventory']
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .paperdoll {
    display: inline-block;
    width: 80%;
  }

  .backpack {
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    display: inline-block;
  }
  .backpackSlot {
    width: 50px;
    height: 50px;
    background-color: rgb(200, 180, 0);
    border: 1px solid black;
  }
</style>
