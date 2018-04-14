import Player from '../objects/player';
import Level from '../objects/level';
import combat from './combat'; 

const canMoveToTile = (tileToMove) => {
  return !tileToMove.isWall && !tileToMove.content;
}

const containsAttackable = (tile) => {
  return tile.content && tile.content.health;
}

const movePlayerToTile = (playerPosition, tileToMove, player) => {
  tileToMove.content = player;
  playerPosition.content = undefined;
}

const handleMoveAction = (level, player, playerPosition, xAdjustment, yAdjustment) => {
  const tileToMove = level.getTile(playerPosition.x + xAdjustment, playerPosition.y + yAdjustment);
  if (canMoveToTile(tileToMove)) {
    movePlayerToTile(playerPosition, tileToMove, player);
  } else if (containsAttackable(tileToMove)) {
    combat(player, tileToMove.content);
    if (tileToMove.content.health <= 0) {
      tileToMove.content = undefined;
    }
  }
}

export default () => {
  const columns = 30;
  const rows = 13;
  const player = Player();
  const level = Level(columns, rows, player);
  const move = (direction) => {
    const playerPosition = level.getPlayerPosition();
    if (direction === 'left' && playerPosition.x > 0) {
      handleMoveAction(level, player, playerPosition, -1, 0);
    }
    if (direction === 'right' && playerPosition.x < columns) {
      handleMoveAction(level, player, playerPosition, 1, 0);
    }
    if (direction === 'down' && playerPosition.y < rows) {
      handleMoveAction(level, player, playerPosition, 0, 1);
    }
    if (direction === 'up' && playerPosition.y > 0) {
      handleMoveAction(level, player, playerPosition, 0, -1);
    }
  };
  return {
    level: level,
    move: move 
  }
}

