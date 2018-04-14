const createMonster = (attack, defense, health, monsterType) => {
  return {
    attack: attack,
    defense: defense,
    health: health,
    monsterType: monsterType
  }
}

export const snake = () => {
  return createMonster(10, 1, 20, "snake");
}

export const turtle = () => {
  return createMonster(3, 10, 30, "turtle");
}

export const randomEnemy = () => {
  const enemies = [turtle, snake];
  return enemies[Math.floor(Math.random() * enemies.length)]();
};