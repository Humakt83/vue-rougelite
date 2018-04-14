<template>
  <div class="main">
    <Map />
    <Info />
    <Commands />
  </div>
</template>

<script>

import Map from './Map';
import Info from './Info';
import Commands from './Commands';

export default {
  components: {
    Map,
    Info,
    Commands
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
