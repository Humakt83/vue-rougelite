<template>
  <div class="Info">
    <template v-if="player.health > 0">
      <Stats :player="player"/>
      <Inventory :inventory="player.inventory" :player="player"/>    
    </template>
    <template v-else>
      <h1>DÖÖD</h1>
    </template>
  </div>
</template>

<script>
import Inventory from './Inventory';
import Stats from './Stats';
export default {
  props: ['player'],
  components: { Inventory, Stats }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
