import * as _ from 'lodash';

import { randomEnemy } from './monsters';
import { randomWeapon } from './weapons';
import { randomArmor } from './armor';

const createTile = (x, y, wall) => {
  return {
    content: undefined,
    x: x,
    y: y,
    isWall: !!wall
  }
}

const getTile = (level, x, y) => {
  return level.find(tile => tile.x === x && tile.y === y);
}

const place = (level, enemy, weapon, armor, columns, rows) => {
  const x = Math.floor(Math.random() * columns);
  const y = Math.floor(Math.random() * rows);
  const tile = getTile(level, x, y);
  if (tile.tileType !== 'wall' && !tile.content) {

    var n = Math.floor(Math.random() * 100)
    switch (n) {
      case n < 10:
        tile.content = weapon;
      case n < 15:
        tile.content = armor;
      default:
        tile.content = enemy;
    }


  } else {
    place(level, enemy, weapon, armor, columns, rows);
  }
}

export default (columns, rows, player) => {
  const numberOfEnemies = (columns * rows) / Math.max(10, Math.floor(Math.random() * 20));
  const level = [];
  for (let x = 0; x < columns; x++) {
    for (let y = 0; y < rows; y++) {
      level.push(createTile(x, y))
    }
  }
  getTile(level, 1, 1).content = player;
  for (let i = 0; i < numberOfEnemies; i++) {
    place(level, randomEnemy(), randomWeapon(), randomArmor(), columns, rows);
  }

  const getPlayerPosition = () => {
    return _.chain(level).find(tile => tile.content && !!tile.content.isPlayer).value();
  }

  const getMonsterPositions = () => {
    return _.chain(level).filter(tile => tile.content && tile.content.health && !tile.content.isPlayer).value();
  }

  return {
    level: level,
    getPlayerPosition: getPlayerPosition,
    getTile: (x, y) => getTile(level, x, y),
    getMonsterPositions: getMonsterPositions
  }
};
