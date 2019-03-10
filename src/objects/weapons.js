const weaponText = (weapon) => {
  const defenseBonus = weapon.defenseBonus ? ` and ${weapon.defenseBonus}% bonus to defense` : '';
  return `${weapon.symbol}: ${weapon.attackBonus}% bonus to attack${defenseBonus}`;
}

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

export const knife = () => {
  return {
    attackBonus: 20,
    itemType: 'weapon',
    slot: 'hand',
    symbol: '🔪'
  }
}

export const randomWeapon = () => {
  const weapons = [sword, hammer, knife];
  const weapon = weapons[Math.floor(Math.random() * weapons.length)]();
  return Object.assign(weapon, {text: weaponText(weapon)});
};