import Player from './player';
import { randomEnemy } from './monsters';

const createTile = (wall) => {
  return {
    tileType: wall ? 'wall' : 'floor',
    content: undefined
  }
}

const place = (map, item, columns, rows) => {
  const x = Math.floor(Math.random() * columns);
  const y = Math.floor(Math.random() * rows);
  const tile = map[x][y];
  if (tile.tileType !== 'wall' && !tile.content) {
    tile.content = item;
  } else {
    place(map, item, columns, rows);
  }
}

export const generateMap = (columns, rows) => {
  const numberOfEnemies = (columns * rows) / Math.max(10, Math.floor(Math.random() * 20));
  const map = [columns][rows];
  for (let x of map) {
    for (let y of map) {
      map[x][y] = createTile();
    }
  }
  map[1][1].content = Player();
  for (let i = 0; i < numberOfEnemies; i++) {
    place(map, randomEnemy, columns, rows);
  }
};
