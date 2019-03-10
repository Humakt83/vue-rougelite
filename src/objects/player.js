export default () => {
  return {
    maxHealth: 100,
    health: 100,
    defense: 10,
    attack: 10,
    level: 1,
    experience: 0,
    maxDamage: 20,
    minDamage: 5,
    winner: false,
    inventory: {
      head: undefined,
      torso: undefined,
      lefthand: undefined,
      righthand: undefined,
      feet: undefined,
      backpack: []
    },
    isPlayer: true,
    getDefenseBonus() {
      return [
        this.inventory.head,
        this.inventory.torso,
        this.inventory.lefthand,
        this.inventory.righthand,
        this.inventory.feet]
        .filter(item => !!item)
        .map(item => item.defenseBonus | 0)
        .reduce((prev, current) => prev + current, 0);
    },
    getDefense() {
      const defenseMultiplier = 1 + (this.getDefenseBonus() / 100);
      return this.defense * defenseMultiplier;
    },
    getAttackBonus() {
      return [
        this.inventory.lefthand,
        this.inventory.righthand]
        .filter(item => !!item)
        .map(item => item.attackBonus | 0)
        .reduce((prev, current) => prev + current, 0);
    },
    getAttack() {
      const attackMultiplier = 1 + (this.getAttackBonus() / 100);
      return this.attack * attackMultiplier;
    }
  }
};
