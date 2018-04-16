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

export const gorilla = () => {
  return createMonster(8, 15, 50, "gorilla", 5, 15, 300);
}

export const tiger = () => {
  return createMonster(15, 7, 40, "tiger", 15, 20, 350);
}

export const poo = () => {
  return createMonster(1, 1, 5, "poo", 1, 2, 10);
}

export const ghost = () => {
  return createMonster(5, 30, 5, "ghost", 1, 5, 100);
}

export const alien = () => {
  return createMonster(10, 10, 25, "alien", 10, 20, 300);
}

export const robot = () => {
  return createMonster(15, 15, 50, "robot", 15, 25, 450);
}

export const randomEnemy = () => {
  const enemies = [turtle, snake, tiger, gorilla, alien, poo, robot, ghost];
  return enemies[Math.floor(Math.random() * enemies.length)]();
};