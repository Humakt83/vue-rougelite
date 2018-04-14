const createMonster = (attack, defense, health) => {
  return {
    attack: attack,
    defense: defense,
    health: health
  }
}

export const snake = () => {
  return createMonster(10, 1, 20);
}

export const turtle = () => {
  return createMonster(3, 10, 30);
}

export const randomEnemy = () => {
  const enemies = [turtle, snake];
  return enemies[Math.floor(Math.random() * enemies.length)]();
};