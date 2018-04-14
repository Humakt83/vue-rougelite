import Player from '../objects/player';
import Level from '../objects/level';

export default () => {
  const player = Player();
  const level = Level(30, 13, player);
  const move = (direction) => {
    return direction;
  };
  console.log(level.getPlayerPosition());
  return {
    level: level,
    move: move 
  }
}

