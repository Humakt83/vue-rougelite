const createMonster = (attack, defense, health) => {
  return {
    attack: attack,
    defense: defense,
    health: health
  }
}

export const snake = {
  create: createMonster(10, 1, 20),
}

export const turtle = {
  create: createMonster(2, 10, 30),
}