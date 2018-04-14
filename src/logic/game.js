import Player from '../objects/player';
import Map from '../objects/map';

export default () => {
  const player = Player();
  const map = Map(30, 13, player);
  const move = (direction) => {
    return direction;
  };
  console.log(map.getPlayerPosition());
  return {
    map: map,
    move: move 
  }
}

