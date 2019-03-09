import Player from '../objects/player';
import Level from '../objects/level';
import combat from './combat'; 

const columns = 30;
const rows = 13;
const player = Player();
let currentLevel = 1;
const createLevel = () => Level(columns, rows, player, currentLevel++);
const level = createLevel();
const gameLog = ['Welcome weary traveler!'];

const canMoveToTile = (tileToMove) => {
  return !tileToMove.isWall && !tileToMove.isDoor && !tileToMove.content;
}

const containsAttackable = (tile) => {
  return tile.content && tile.content.health;
}

const containsItem = (tile) => {
  return tile.content && tile.content.itemType;
}

const containsTreasure = (tile) => {
  return tile.content && tile.content.type === 'treasure';
}

const moveToTile = (originalPosition, tileToMove) => {
  tileToMove.content = originalPosition.content;
  originalPosition.content = undefined;
}

const takeItem = (player, tile) => {
  const item = tile.content;
  player.inventory.backpack.push(item);
  gameLog.unshift(`Picked up ${item.symbol} (defense bonus: ${item.defenseBonus | 0}, attack bonus: ${item.attackBonus | 0})`)
  tile.content = undefined;
}

const findClosest = (target, tiles, minRadius) => {
  const x = target.x;
  const y = target.y;
  let closest = undefined;
  let closestDistance = undefined;
  for (let tile of tiles) {
    let distance = (Math.abs(tile.x - x) + Math.abs(tile.y - y));
    if (minRadius >= distance && (!closestDistance || distance < closestDistance)) {
      closest = tile;
      closestDistance = distance;
    }
  }
  return closest;
}

const attackPlayer = (position, tileToMove) => {
  combat(position.content, tileToMove.content, gameLog);
  setAttackAnimation(tileToMove);
  if (tileToMove.content.health <= 0) {
    tileToMove.content = undefined;
    gameLog.unshift('GAME OVER!!!');
  }
}

const setAttackAnimation = (tile) => {
  tile.animation = {triggerAttack: true};
  setTimeout(() => tile.animation = undefined, 100);
}

const randomMove = (level, position) => {
  const moveX = Math.floor(Math.random() * 10) >= 5;
  const direction = Math.sign(Math.floor(Math.random() * 10) - 5);
  const xAdjustment = moveX ? direction : 0;
  const yAdjustment = !moveX ? direction: 0;
  const tileToMove = level.getTile(position.x + xAdjustment, position.y + yAdjustment);
  if (tileToMove && canMoveToTile(tileToMove)) {
    moveToTile(position, tileToMove);
  }
}

const monstersTurn = (level) => {
  const playerPosition = level.getPlayerPosition();

  level.getMonsterPositions().forEach(position => {
    const movableNeighbors = level.getNeighbors(position).filter(tile => playerPosition === tile || canMoveToTile(tile));
    const playerIsNear = movableNeighbors.some(tile => tile === playerPosition);
    if (playerIsNear) {
      attackPlayer(position, playerPosition);
    } else {
      const tileToMove = findClosest(playerPosition, movableNeighbors, 3);
      if (tileToMove) {
        moveToTile(position, tileToMove);
      } else {
        randomMove(level, position);
      }
    }
  });
}

const levelUp = (gameLog, player) => {
  gameLog.unshift('Congratulations, you gained level!');
  player.level++;
  player.maxHealth += 10;
  player.attack++;
  player.defense++;
  player.health = player.maxHealth;
  player.maxDamage++;
  player.experience -= 1000;
}

function handleMoveAction(level, player, playerPosition, xAdjustment, yAdjustment) {
  let levelNew = undefined;
  const tileToMove = level.getTile(playerPosition.x + xAdjustment, playerPosition.y + yAdjustment);
  if (canMoveToTile(tileToMove)) {
    moveToTile(playerPosition, tileToMove);
    monstersTurn(level);
  } else if (tileToMove.isDoor) {
    levelNew = createLevel()
  } else if (containsItem(tileToMove)) {
    takeItem(player, tileToMove);
  } else if (containsTreasure(tileToMove)) {
    player.winner = true;
  } else if (containsAttackable(tileToMove)) {
    combat(player, tileToMove.content, gameLog);
    setAttackAnimation(tileToMove);
    const opponent = tileToMove.content;
    if (opponent.health <= 0) {
      gameLog.unshift(`Monstrous ${opponent.monsterType} defeated. Gained ${opponent.experience} experience.` );
      player.experience += tileToMove.content.experience;
      if (player.experience >= 1000) {
        levelUp(gameLog, player);
      }
      tileToMove.content = undefined;
    }
    monstersTurn(level);
  }
  return {level: levelNew};
}

export default () => {
  return {
    level: level,
    move(direction) {
      if (this.player.health <= 0) {
        return {}
      }
      const playerPosition = this.level.getPlayerPosition();
      if (direction === 'left' && playerPosition.x > 0) {
        return handleMoveAction(this.level, this.player, playerPosition, -1, 0);
      }
      if (direction === 'right' && playerPosition.x < columns - 1) {
        return handleMoveAction(this.level, this.player, playerPosition, 1, 0);
      }
      if (direction === 'down' && playerPosition.y < rows - 1) {
        return handleMoveAction(this.level, this.player, playerPosition, 0, 1);
      }
      if (direction === 'up' && playerPosition.y > 0) {
        return handleMoveAction(this.level, this.player, playerPosition, 0, -1);
      }
    },
    player,
    gameLog: gameLog
  }
}

