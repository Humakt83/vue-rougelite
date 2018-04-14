export const receiveDamage = (attacker, defender) => {
  defender.health -= Math.max(1, attacker.attack - defender.defense);
};

