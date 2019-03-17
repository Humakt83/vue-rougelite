<template>
  <fieldset class="stats">
    <legend>Stats</legend>
    <ul type="none">
      <li>Level: {{player.level}} ({{player.experience}}/1000)</li>
      <li>Health: {{player.health}}</li>
      <li>Attack: {{attack}}</li>
      <li>Defense: {{defense}}</li>
      <li>Damage: {{player.minDamage}}-{{player.maxDamage}}</li>
    </ul>
  </fieldset>
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
.stats {
  background-color: lemonchiffon;
  padding: 0.2rem 0.4rem 0 0;
  margin-top: 0.5rem;
  ul {
    text-align: left;
    font-size: small;
    margin: 0;
    padding: 0;
    li {
      margin-left: 0;
      padding-left: 0;
    }
  }
}
</style>
