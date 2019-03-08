import {randomArmor, helmet, platemail} from './armor';

export default () => {
  return {
    maxHealth: 100,
    health: 100,
    defense: 10,
    attack: 10,
    level: 1,
    experience: 0,
    maxDamage: 20,
    minDamage: 5,
    inventory: {
      head: helmet(),
      torso: platemail(),
      lefthand: undefined,
      righthand: undefined,
      feet: undefined,
      backpack: [randomArmor(), randomArmor(), randomArmor(), randomArmor()]
    },
    isPlayer: true
  }
};
