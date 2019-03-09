import Player from '../objects/player';
import Level from '../objects/level';
import combat from './combat'; 

let gameOver = false;

const columns = 30;
const rows = 13;
const player = Player();
const level = Level(columns, rows, player);
const gameLog = ['Welcome to the jungle!'];

const move = (direction) => {
  if (gameOver) {
    return;
  }
  const playerPosition = level.getPlayerPosition();
  if (direction === 'left' && playerPosition.x > 0) {
    handleMoveAction(level, player, playerPosition, -1, 0);
  }
  if (direction === 'right' && playerPosition.x < columns - 1) {
    handleMoveAction(level, player, playerPosition, 1, 0);
  }
  if (direction === 'down' && playerPosition.y < rows - 1) {
    handleMoveAction(level, player, playerPosition, 0, 1);
  }
  if (direction === 'up' && playerPosition.y > 0) {
    handleMoveAction(level, player, playerPosition, 0, -1);
  }
};

const canMoveToTile = (tileToMove) => {
  return !tileToMove.isWall && !tileToMove.content;
}

const containsAttackable = (tile) => {
  return tile.content && tile.content.health;
}

const containsItem = (tile) => {
  return tile.content && tile.content.itemType;
}

const moveToTile = (originalPosition, tileToMove) => {
  tileToMove.content = originalPosition.content;
  originalPosition.content = undefined;
}

const takeItem = (player, tile) => {
  player.inventory.backpack.push(tile.content);
  tile.content = undefined;
}

const monstersTurn = (level) => {
  level.getMonsterPositions().forEach(position => {
    const moveX = Math.floor(Math.random() * 10) >= 5;
    const direction = Math.sign(Math.floor(Math.random() * 10) - 5);
    const xAdjustment = moveX ? direction : 0;
    const yAdjustment = !moveX ? direction: 0;
    const tileToMove = level.getTile(position.x + xAdjustment, position.y + yAdjustment);
    if (tileToMove && canMoveToTile(tileToMove)) {
      moveToTile(position, tileToMove);
    } else if (tileToMove && containsAttackable(tileToMove) && tileToMove.content.isPlayer) {
      combat(position.content, tileToMove.content, gameLog);
      if (tileToMove.content.health <= 0) {
        tileToMove.content = undefined;
        gameOver = true;
        gameLog.unshift('GAME OVER!!!');
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

const handleMoveAction = (level, player, playerPosition, xAdjustment, yAdjustment) => {
  const tileToMove = level.getTile(playerPosition.x + xAdjustment, playerPosition.y + yAdjustment);
  if (canMoveToTile(tileToMove)) {
    moveToTile(playerPosition, tileToMove);
    monstersTurn(level);
  } else if (containsItem(tileToMove)) {
    takeItem(player, tileToMove);
  } else if (containsAttackable(tileToMove)) {
    combat(player, tileToMove.content, gameLog);
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
}

export default () => {
  return {
    level: level,
    move: move,
    player: player,
    gameLog: gameLog
  }
}

