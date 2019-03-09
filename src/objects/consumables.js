export const beer = () => {
  return {
    itemType: 'consumable',
    effect: (player) => {
      player.health = Math.min(player.maxHealth, player.health + 50);
    },
    symbol: '🍺'
  }
}

export const coffee = () => {
  return {
    itemType: 'consumable',
    effect: (player) => {
      player.health = Math.min(player.maxHealth, player.health + 20);
    },
    symbol: '☕'
  }
}

export const randomConsumable = () => {
  const items = [coffee, beer];
  return items[Math.floor(Math.random() * items.length)]();
};