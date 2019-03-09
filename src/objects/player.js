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
    inventory: {
      head: undefined,
      torso: undefined,
      lefthand: undefined,
      righthand: undefined,
      feet: undefined,
      backpack: []
    },
    isPlayer: true,
    getDefense() {
      const combatBonusFromItems = [
        this.inventory.head,
        this.inventory.torso,
        this.inventory.lefthand,
        this.inventory.righthand,
        this.inventory.feet]
        .filter(item => !!item)
        .map(item => item.defenseBonus | 0)
        .reduce((prev, current) => prev + current, 0);
      const defenseMultiplier = 1 + (combatBonusFromItems / 100);
      return this.defense * defenseMultiplier;
    },
    getAttack() {
      const combatBonusFromItems = [
        this.inventory.lefthand,
        this.inventory.righthand]
        .filter(item => !!item)
        .map(item => item.attackBonus | 0)
        .reduce((prev, current) => prev + current, 0);
      const attackMultiplier = 1 + (combatBonusFromItems / 100);
      return this.attack * attackMultiplier;
    }
  }
};
