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

export const apple = () => {
  return {
    itemType: 'consumable',
    effect: (player) => {
      player.health = Math.min(player.maxHealth, player.health + 25);
    },
    symbol: '🍎'
  }
}

export const bread = () => {
  return {
    itemType: 'consumable',
    effect: (player) => {
      player.health = Math.min(player.maxHealth, player.health + 30);
    },
    symbol: '🍞'
  }
}

export const hamburger = () => {
  return {
    itemType: 'consumable',
    effect: (player) => {
      player.health = Math.min(player.maxHealth, player.health + 40);
    },
    symbol: '🍔'
  }
}

export const randomConsumable = () => {
  const items = [coffee, beer, apple];
  return items[Math.floor(Math.random() * items.length)]();
};

// TODO:
// bomb: 💣
