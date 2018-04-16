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
      head: undefined,
      torso: undefined,
      lefthand: undefined,
      righthand: undefined,
      legs: undefined,
      backpack: ['blaa', 'bluu','blaa', 'bluu','blaa', 'bluu','blaa', 'bluu','blaa', 'bluu','blaa', 'bluu','blaa', 'bluu','blaa', 'bluu']
    },
    isPlayer: true
  }
};
