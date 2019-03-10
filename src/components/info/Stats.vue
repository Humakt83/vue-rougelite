<template>
  <div class="inventory">
    <h3>Stats</h3>
    <ul type="none">
      <li>Level: {{player.level}} ({{player.experience}}/1000)</li>
      <li>Health: {{player.health}}</li>
      <li>Attack: {{attack}}</li>
      <li>Defense: {{defense}}</li>
      <li>Damage: {{player.minDamage}}-{{player.maxDamage}}</li>
    </ul>
  </div>
</template>

<script>

export default {
  props: ['player'],
  computed: {
    defense() {
      const bonus = this.player.getDefenseBonus();
      const bonusText = bonus > 0 ? ` (+ ${bonus}%)`: '';
      return this.player.defense + bonusText;
    },
    attack() {
      const bonus = this.player.getAttackBonus();
      const bonusText = bonus > 0 ? ` (+ ${bonus}%)`: '';
      return this.player.attack + bonusText;
    },
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
