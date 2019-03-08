export const platemail = () => {
  return {
    defenseBonus: 10,
    itemType: 'armor',
    slot: 'torso',
    symbol: '👘'
  }
}

export const chainmail = () => {
  return {
    defenseBonus: 5,
    itemType: 'armor',
    slot: 'torso',
    symbol: '👗'
  }
}

export const splintmail = () => {
  return {
    defenseBonus: 7,
    itemType: 'armor',
    slot: 'torso',
    symbol: '👕'
  }
}

export const kiteShield = () => {
  return {
    defenseBonus: 6,
    itemType: 'armor',
    slot: 'hand',
    symbol: '🛡'
  }
}

export const buckler = () => {
  return {
    defenseBonus: 1,
    itemType: 'armor',
    slot: 'hand',
    symbol: '💿'
  }
}

export const helmet = () => {
  return {
    defenseBonus: 2,
    itemType: 'armor',
    slot: 'head',
    symbol: '🎩',
  }
}

export const boots = () => {
  return {
    defenseBonus: 1,
    itemType: 'armor',
    slot: 'feet',
    symbol: '👟'
  }
}

export const randomArmor = () => {
  const armors = [platemail, helmet, boots, buckler, chainmail, splintmail, kiteShield];
  return armors[Math.floor(Math.random() * armors.length)]();
};