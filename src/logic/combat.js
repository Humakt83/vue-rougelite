export default (attacker, defender) => {
  const multiplier = attacker.attack / defender.defense;
  const damage = Math.max(attacker.minDamage, Math.floor(Math.random() * attacker.maxDamage)) * multiplier;
  defender.health -= Math.floor(Math.max(1, damage));
};

