export const platemail = () => {
  return {
    defenseBonus: 10,
    itemType: 'armor',
    slot: 'torso'
  }
}

export const chainmail = () => {
  return {
    defenseBonus: 5,
    itemType: 'armor',
    slot: 'torso'
  }
}

export const splintmail = () => {
  return {
    defenseBonus: 7,
    itemType: 'armor',
    slot: 'torso'
  }
}

export const kiteShield = () => {
  return {
    defenseBonus: 6,
    itemType: 'armor',
    slot: 'shield'
  }
}

export const buckler = () => {
  return {
    defenseBonus: 1,
    itemType: 'armor',
    slot: 'shield'
  }
}

export const helmet = () => {
  return {
    defenseBonus: 2,
    itemType: 'armor',
    slot: 'head'
  }
}

export const boots = () => {
  return {
    defenseBonus: 1,
    itemType: 'armor',
    slot: 'shield'
  }
}

export const randomArmor = () => {
  const armors = [platemail, helmet, boots];
  return armors[Math.floor(Math.random() * armors.length)]();
};