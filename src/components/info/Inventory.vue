<template>
  <div class="inventory">
    <h3>Inventory</h3>
    <div class="paperdoll">
      <div class="head">
        <i class="fas fa-hard-hat"/>
      </div>
      <div class="hand hand--left">
        <i class="far fa-hand-paper" />
      </div>
      <div class="torso">
        <i class="fas fa-tshirt" />
      </div>
      <div class="hand hand--right">
        <i class="far fa-hand-paper" />
      </div>
      <div class="feet">
        <i class="fas fa-shoe-prints" />
      </div>
    </div>
    <div class="backpack">
      <div class="backpackSlot" :class="{'selected': index === selected}" v-for="(item, index) in inventory.backpack" :key="index" @click="select(item, index)">
        <span>{{ item.symbol }}</span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['inventory'],
  data() {
    return {
      selected: undefined,
      selectedItem: undefined
    }
  },
  methods: {
    select(item, index) {
      if (this.selectedItem === item && this.selected === index) {
        this.selected = undefined;
        this.selectedItem = undefined;
      } else {
        this.selected = index;
        this.selectedItem = item;
      }
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.inventory {
  display: flex;
  flex-wrap: wrap;
  margin-left: 3rem;
  .paperdoll {
    display: grid;
    grid-template-columns: 40px 40px 40px;
    grid-template-rows: 40px 40px;
    grid-template-areas: 
      ". head ."
      "left torso right"
      ". feet .";
    padding: 1rem 2rem;
    div {
      border-radius: 2px;
      width: 40px;
      height: 40px;
      padding: 0.3rem 0.2rem;
      text-align: center;
      cursor: pointer;
      i {        
        margin-top: 0.3rem;
        font-size: 30px;
        font-weight: bolder;
        color: lightgrey;
      }
      &:hover {
        background-color: whitesmoke;
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
    height: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    max-width: 100%;
    max-height: 10rem;
  }
  .backpackSlot {
    display: table-cell;
    width: 2.5rem;
    height: 2.5rem;
    background-color: lightblue;
    border: 1px solid black;
    text-align: center;
    vertical-align: middle;
    font-size: 1.6rem;
    cursor: pointer;
    &:hover {
      background-color: lightcyan;
    }
    &.selected {
      background-color: lightgoldenrodyellow;
    }
  }
}
</style>
