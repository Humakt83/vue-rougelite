import * as _ from 'lodash';

import { randomEnemy } from './monsters';

const createTile = (x, y, wall) => {
  return {
    tileType: wall ? 'wall' : 'floor',
    content: undefined,
    x: x,
    y: y
  }
}

const getTile = (map, x, y) => {
  return map.find(tile => tile.x === x && tile.y === y);
}

const place = (map, item, columns, rows) => {
  const x = Math.floor(Math.random() * columns);
  const y = Math.floor(Math.random() * rows);
  const tile = getTile(map, x, y);
  if (tile.tileType !== 'wall' && !tile.content) {
    tile.content = item;
  } else {
    place(map, item, columns, rows);
  }
}

export default (columns, rows, player) => {
  const numberOfEnemies = (columns * rows) / Math.max(10, Math.floor(Math.random() * 20));
  const map = [];
  for (let x = 0; x < columns; x++) {
    for (let y = 0; y < rows; y++) {
      map.push(createTile(x, y))
    }
  }
  getTile(map, 1, 1).content = player;
  for (let i = 0; i < numberOfEnemies; i++) {
    place(map, randomEnemy, columns, rows);
  }

  const getPlayerPosition = () => {
    return _.chain(map).find(tile => tile.content && !!tile.content.isPlayer).value();
  }

  return {
    map: map,
    getPlayerPosition: getPlayerPosition
  }
};
