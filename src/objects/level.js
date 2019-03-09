import * as _ from 'lodash';

import { randomEnemy } from './monsters';
import { randomWeapon } from './weapons';
import { randomArmor } from './armor';

const LEVEL_TYPES = [
  { env: 'jungle', floorSymbol: '🍃', wallSymbol: '🌳', doorSymbol: '🚪'},
  { env: 'spaceship', floorSymbol: '🎆', wallSymbol: '🚀', doorSymbol: '🚻'},
  { env: 'desert', floorSymbol: '🏜', wallSymbol: '🔥', doorSymbol: '🚪'},
  { env: 'snow', floorSymbol: '❄', wallSymbol: '🎄', doorSymbol: '🚪'}
];

const createTile = (x, y, wall = false, door = false) => {
  return {
    content: undefined,
    x,
    y,
    isWall: wall,
    isDoor: door,
  }
}

const getTile = (level, x, y) => {
  return level.find(tile => tile.x === x && tile.y === y);
}

const getNeighbors = (level, tile) => {
  const x = tile.x;
  const y = tile.y;
  return [
    getTile(level, x + 1, y),
    getTile(level, x - 1, y),
    getTile(level, x, y - 1),
    getTile(level, x, y + 1),
  ].filter(tile => !!tile);
}

const place = (level, content, columns, rows) => {
  const x = Math.floor(Math.random() * columns);
  const y = Math.floor(Math.random() * rows);
  const tile = getTile(level, x, y);

  if (!tile.isWall && !tile.content && !tile.isDoor) {
    tile.content = content;
  } else {
    place(level, content, columns, rows);
  }
}

export default (columns, rows, player) => {
  const numberOfEnemies = (columns * rows) / Math.max(10, Math.floor(Math.random() * 10));
  const numberOfArmor = 3;
  const numberOfWeapons = 1;
  const numberOfWalls = (columns * rows) / Math.max(10, Math.floor(Math.random() * 20));
  const level = [];
  
  for (let x = 0; x < columns; x++) {
    for (let y = 0; y < rows; y++) {
      level.push(createTile(x, y))
    }
  }

  getTile(level, 1, 1).content = player;

  let doorPlaced = false;
  while (!doorPlaced) {
    const position = Math.floor(Math.random()*level.length);
    if (!level[position].content) {
      level[position].isDoor = true;
      doorPlaced = true;
    }
  }

  for (let i = 0; i < numberOfWalls; i++) {
    const position = Math.floor(Math.random()*level.length);
    if (!level[position].content && !level[position].isDoor) {
      level[position].isWall = true;
    }
  }

  for (let i = 0; i < numberOfEnemies; i++) {
    place(level, randomEnemy(), columns, rows);
  }

  for (let i = 0; i < numberOfArmor; i++) {
    place(level, randomArmor(), columns, rows);
  }

  for (let i = 0; i < numberOfWeapons; i++) {
    place(level, randomWeapon(), columns, rows);
  }
  
  const getPlayerPosition = () => {
    return _.chain(level).find(tile => tile.content && !!tile.content.isPlayer).value();
  }

  const getMonsterPositions = () => {
    return _.chain(level).filter(tile => tile.content && tile.content.health && !tile.content.isPlayer).value();
  }

  const environment = LEVEL_TYPES[Math.floor(Math.random() * LEVEL_TYPES.length)];

  return {
    level: level,
    environment,
    getPlayerPosition: getPlayerPosition,
    getTile(x, y) { 
      return getTile(this.level, x, y);
    },
    getMonsterPositions,
    getNeighbors(tile) {
      return getNeighbors(this.level, tile);
    }
  }
};
