export const sword = () => {
  return {
    attackBonus: 50,
    defenseBonus: 15,
    itemType: 'weapon',
    slot: 'hand',
    symbol: '🗡',
  }
}

export const hammer = () => {
  return {
    attackBonus: 75,
    itemType: 'weapon',
    slot: 'hand',
    symbol: '🔨'
  }
}

export const randomWeapon = () => {
  const weapons = [sword, hammer];
  return weapons[Math.floor(Math.random() * weapons.length)]();
};