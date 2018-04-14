export default (attacker, defender, gameLog) => {
  const multiplier = attacker.attack / defender.defense;
  const damage = Math.max(attacker.minDamage, Math.floor(Math.random() * attacker.maxDamage)) * multiplier;
  defender.health -= Math.floor(Math.max(1, damage));
  gameLog.unshift(defender.isPlayer
    ? `Player received ${damage} damage from ${attacker.monsterType}.`
    : `Player dealt ${damage} to ${defender.monsterType}.`
  );
};

