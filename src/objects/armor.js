export const platemail = () => {
  return {
    defenseBonus: 50,
    itemType: 'armor',
    slot: 'torso',
    symbol: '👘'
  }
}

export const chainmail = () => {
  return {
    defenseBonus: 20,
    itemType: 'armor',
    slot: 'torso',
    symbol: '👗'
  }
}

export const splintmail = () => {
  return {
    defenseBonus: 40,
    itemType: 'armor',
    slot: 'torso',
    symbol: '👕'
  }
}

export const kiteShield = () => {
  return {
    defenseBonus: 20,
    itemType: 'armor',
    slot: 'hand',
    symbol: '🛡'
  }
}

export const buckler = () => {
  return {
    defenseBonus: 10,
    itemType: 'armor',
    slot: 'hand',
    symbol: '💿'
  }
}

export const helmet = () => {
  return {
    defenseBonus: 15,
    itemType: 'armor',
    slot: 'head',
    symbol: '🎩',
  }
}

export const boots = () => {
  return {
    defenseBonus: 15,
    itemType: 'armor',
    slot: 'feet',
    symbol: '👟'
  }
}

export const randomArmor = () => {
  const armors = [platemail, helmet, boots, buckler, chainmail, splintmail, kiteShield];
  return armors[Math.floor(Math.random() * armors.length)]();
};