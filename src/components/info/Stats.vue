<template>
  <div class="inventory">
    <h3>Stats</h3>
    <ul>
      <li>Health: {{player.health}}</li>
      <li>Attack: {{player.attack}}</li>
      <li>Defense: {{player.defense}}</li>
      <li>Damage: {{player.minDamage}}-{{player.maxDamage}}</li>
    </ul>
  </div>
</template>

<script>

export default {
  props: ['player']
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
