<template>
  <div class="Info">
    <h3>Info</h3>
    <Stats />
    <Inventory />    
  </div>
</template>

<script>
import Inventory from './Inventory';
import Stats from './Stats';
export default {
  components: { Inventory, Stats }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
