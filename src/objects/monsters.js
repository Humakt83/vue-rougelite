const createMonster = (attack, defense, health, monsterType, minDamage, maxDamage, experience) => {
  return {
    attack: attack,
    defense: defense,
    health: health,
    minDamage: minDamage,
    maxDamage: maxDamage,
    monsterType: monsterType,
    experience: experience
  }
}

export const snake = () => {
  return createMonster(10, 1, 20, "snake", 10, 20, 50);
}

export const turtle = () => {
  return createMonster(3, 10, 30, "turtle", 5, 10, 50);
}

export const randomEnemy = () => {
  const enemies = [turtle, snake];
  return enemies[Math.floor(Math.random() * enemies.length)]();
};