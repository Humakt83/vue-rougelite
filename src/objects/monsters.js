const createMonster = (attack, defense, health, monsterType, minDamage, maxDamage, symbol, radius = 3) => {
  const score = (attack + defense + health + minDamage + maxDamage) * 1.25;
  return {
    attack,
    defense,
    health,
    minDamage,
    maxDamage,
    monsterType,
    experience: score,
    symbol,
    radius
  }
}

export const snake = () => {
  return createMonster(10, 1, 20, 'snake', 10, 20, '🐍');
}

export const turtle = () => {
  return createMonster(3, 10, 30, 'turtle', 5, 10, '🐢', 1);
}

export const gorilla = () => {
  return createMonster(8, 15, 50, 'gorilla', 5, 15, '🐒');
}

export const tiger = () => {
  return createMonster(15, 7, 40, 'tiger', 15, 20, '🐅', 5);
}

export const poo = () => {
  return createMonster(1, 1, 5, 'poo', 1, 2, '💩', 1);
}

export const ghost = () => {
  return createMonster(5, 30, 5, 'ghost', 1, 5, '👻', 5);
}

export const alien = () => {
  return createMonster(10, 10, 25, 'alien', 10, 20, '👽', 5);
}

export const robot = () => {
  return createMonster(15, 15, 50, 'robot', 15, 25, '🤖', 30);
}

export const demon = () => {
  return createMonster(10, 5, 40, 'demon', 20, 30, '👿', 5);
}

export const ogre = () => {
  return createMonster(8, 8, 40, 'ogre', 10, 15, '👹');
}

export const monster = () => {
  return createMonster(12, 12, 45, 'monster', 15, 25, '👾');
}

export const monkey = () => {
  return createMonster(4, 4, 15, 'monkey', 2, 12, '🐒', 5);
}

export const wolf = () => {
  return createMonster(13, 7, 25, 'wolf', 13, 19, '🐺', 5);
}

export const rhino = () => {
  return createMonster(15, 15, 50, 'rhino', 5, 30, '🦏');
}

export const bear = () => {
  return createMonster(12, 12, 40, 'bear', 10, 29, '🐻');
}

export const dragon = () => {
  return createMonster(30, 30, 100, 'dragon', 20, 50, '🐉', 10);
}

export const tyrannosaurus = () => {
  return createMonster(20, 20, 75, 't-rex', 15, 35, '🦖', 6);
}

export const whale = () => {
  return createMonster(5, 30, 150, 'whale', 15, 35, '🐳', 1);
}

export const fish = () => {
  return createMonster(1, 5, 15, 'fish', 2, 5, '🐟', 1);
}

export const shark = () => {
  return createMonster(17, 9, 40, 'shark', 15, 25, '🦈', 10);
}

export const octopus = () => {
  return createMonster(10, 17, 35, 'octopus', 10, 15, '🐙', 5);
}

export const bee = () => {
  return createMonster(10, 7, 5, 'killer bee', 6, 12, '🐝');
}

export const spider = () => {
  return createMonster(9, 15, 35, 'giant spider', 5, 10, '🕷');
}

export const scorpion = () => {
  return createMonster(15, 8, 25, 'scorpion', 10, 25, '🦂');
}

export const crab = () => {
  return createMonster(6, 6, 30, 'crab', 1, 6, '🦀');
}

export const snowman = () => {
  return createMonster(1, 5, 40, 'snowman', 3, 5, '⛄', 1);
}

const enviromentalMonsters = {
  desert: [snake, poo, scorpion, scorpion, dragon],
  snow: [poo, ghost, snowman, snowman, bear, wolf],
  spaceship: [robot, alien, monster, alien],
  forest: [wolf, bear, snake, spider, bee, dragon],
  town: [poo, ghost, spider, bee],
  ocean: [crab, turtle, octopus, shark, shark, fish, fish, fish, whale],
  hell: [dragon, ogre, ogre, ogre, demon, demon, demon],
  jungle: [tiger, gorilla, snake, turtle, bee, tyrannosaurus, rhino, monkey],
}

export const randomEnemyFromEnvironment = (env) => {
  const enemies = enviromentalMonsters[env];
  return enemies[Math.floor(Math.random() * enemies.length)]();
}
