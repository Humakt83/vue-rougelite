export const sword = () => {
  return {
    attackBonus: 5,
    defenseBonus: 2,
    itemType: 'weapon',
    symbol: '🗡',
  }
}

export const hammer = () => {
  return {
    attackBonus: 7,
    itemType: 'weapon',
    symbol: '🔨'
  }
}

export const randomWeapon = () => {
  const weapons = [sword, hammer];
  return weapons[Math.floor(Math.random() * weapons.length)]();
};