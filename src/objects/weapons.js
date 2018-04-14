export const sword = () => {
  return {
    attackBonus: 5,
    defenseBonus: 2,
    itemType: 'weapon'
  }
}

export const axe = () => {
  return {
    attackBonus: 7,
    itemType: 'weapon'
  }
}

export const randomWeapon = () => {
  const weapons = [sword, axe];
  return weapons[Math.floor(Math.random() * weapons.length)]();
};