<template>
  <fieldset class="inventory">
    <legend>Inventory</legend>
    <div class="paperdoll">
      <div class="head" :class="{'selectable': headSelectable}" @click="move('head')">
        <span v-if="inventory.head">
          {{ inventory.head.symbol }}
        </span>
        <i v-else class="fas fa-hard-hat"/>
      </div>
      <div class="hand hand--left" :class="{'selectable': handSelectable}" @click="move('hand', 'left')">
        <span v-if="inventory.lefthand">
          {{ inventory.lefthand.symbol }}
        </span>
        <i v-else class="far fa-hand-paper" />
      </div>
      <div class="torso" :class="{'selectable': torsoSelectable}" @click="move('torso')">
        <span v-if="inventory.torso">
          {{ inventory.torso.symbol }}
        </span>
        <i v-else class="fas fa-tshirt" />
      </div>
      <div class="hand hand--right" :class="{'selectable': handSelectable}" @click="move('hand', 'right')">
        <span v-if="inventory.righthand">
          {{ inventory.righthand.symbol }}
        </span>
        <i v-else class="far fa-hand-paper" />
      </div>
      <div class="feet" :class="{'selectable': feetSelectable}" @click="move('feet')">
        <span v-if="inventory.feet">
          {{ inventory.feet.symbol }}
        </span>
        <i v-else class="fas fa-shoe-prints" />
      </div>
    </div>
    <div class="backpack">
      <div class="backpackSlot placeHolder" v-if="inventory.backpack.length < 1">🎒</div>
      <div class="backpackSlot" :class="{'selected': index === selected}" v-for="(item, index) in inventory.backpack" :key="index" @click="select(item, index)">
        <span>{{ item.symbol }}</span>
      </div>
    </div>
  </fieldset>
</template>

<script>

export default {
  props: ['inventory', 'player'],
  data() {
    return {
      selected: undefined,
      selectedItem: undefined
    }
  },
  computed: {
    headSelectable() {
      return this.selectableBodySlot('head');
    },
    torsoSelectable() {
      return this.selectableBodySlot('torso');
    },
    handSelectable() {
      return this.selectableBodySlot('hand');
    },
    feetSelectable() {
      return this.selectableBodySlot('feet');
    }
  },
  methods: {
    select(item, index) {
      if (this.selectedItem === item && this.selected === index) {
        this.unselect();
      } else {
        this.selected = index;
        this.selectedItem = item;
      }
    },
    selectableBodySlot(slotType) {
      if (!this.selectedItem || this.selected === undefined) {
        return false;
      }
      return this.selectedItem.itemType === 'consumable' || slotType.includes(this.selectedItem.slot);
    },
    move(slotType, handPrefix = '') {
      if (!this.selectableBodySlot(slotType)) {
        return false;
      }   
      if (this.selected !== undefined) {
        this.inventory.backpack.splice(this.selected, 1);
      }
      if (!!this.inventory[handPrefix + this.selectedItem.slot]) {
        this.inventory.backpack.push(this.inventory[handPrefix + this.selectedItem.slot]);
      }
      if (this.selectedItem.itemType === 'consumable') {
        this.selectedItem.effect(this.player);
      } else {
        this.inventory[handPrefix + this.selectedItem.slot] = this.selectedItem;      
      }
      this.unselect();
    },
    unselect() {
      this.selectedItem = undefined;
      this.selected = undefined;
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.inventory {
  background-color: lemonchiffon;
  margin-top: 0.2rem;
  .paperdoll {
    display: grid;      
    grid-template-columns: repeat(3, 1.7rem);
    grid-template-rows: repeat(3, 1.7rem);
    grid-template-areas: 
      ". head ."
      "left torso right"
      ". feet .";
    div {
      border-radius: 2px;
      width: 1.5rem;
      height: 1.5rem;
      padding: 0.3rem 0.2rem;
      text-align: center;
      cursor: pointer;
      font-size: 1.4rem;
      &.selectable {
        background-color: whitesmoke; 
      }
      i {        
        margin-top: 0.1rem;
        font-weight: bolder;
        color: lightgrey;
      }
      &:hover {
        i {
          color: darkgrey;
        }
      }
    }
    .head {
      grid-area: head;
    }
    .hand--left {
      grid-area: left;
      i {
        transform: rotate(330deg) scale(-1, 1);
      }
    }
    .hand--right {
      grid-area: right;
      i {
        transform: rotate(30deg);
      }
    }
    .torso {
      grid-area: torso;
    }
    .feet {
      grid-area: feet;
      i {
        transform: rotate(-90deg);
      }
    }
  }

  .backpack {
    display: block;
    height: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    max-width: 100%;
    max-height: 10rem;
  }
  .backpackSlot {
    display: table-cell;
    width: 1.5rem;
    height: 1.5rem;
    background-color: lightblue;
    border: 1px solid black;
    text-align: center;
    vertical-align: middle;
    font-size: 1.4rem;
    cursor: pointer;
    &:hover {
      background-color: lightcyan;
    }
    &.selected {
      background-color: lightgoldenrodyellow;
    }
    &.placeHolder {
      cursor: default;
      opacity: 0.4;
      background-color: white;
      border: 1px solid white;
      &:hover {
        background-color: white;
      }
    }
  }
}
</style>
