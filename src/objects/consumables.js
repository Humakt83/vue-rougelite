export const beer = () => {
  return {
    itemType: 'consumable',
    effect: (player) => {
      player.health = Math.min(player.maxHealth, player.health + 50);
    },
    symbol: '🍺',
    text: '🍺: restores 50 health'
  }
}

export const coffee = () => {
  return {
    itemType: 'consumable',
    effect: (player) => {
      player.health = Math.min(player.maxHealth, player.health + 20);
    },
    symbol: '☕',
    text: '☕: restores 20 health'
  }
}

export const apple = () => {
  return {
    itemType: 'consumable',
    effect: (player) => {
      player.health = Math.min(player.maxHealth, player.health + 25);
    },
    symbol: '🍎',
    text: '🍎: restores 25 health'
  }
}

export const bread = () => {
  return {
    itemType: 'consumable',
    effect: (player) => {
      player.health = Math.min(player.maxHealth, player.health + 30);
    },
    symbol: '🍞',
    text: '🍞: restores 30 health'
  }
}

export const hamburger = () => {
  return {
    itemType: 'consumable',
    effect: (player) => {
      player.health = Math.min(player.maxHealth, player.health + 40);
    },
    symbol: '🍔',
    text: '🍔: restores 40 health'
  }
}

export const randomConsumable = () => {
  const items = [coffee, beer, apple];
  return items[Math.floor(Math.random() * items.length)]();
};

// TODO:
// bomb: 💣
