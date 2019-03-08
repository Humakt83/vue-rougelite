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
    </div>
    <div class="backpack">
      <div class="backpackSlot" v-for="(item, index) in inventory.backpack" :key="index">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['inventory']
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .paperdoll {
    display: grid;
    grid-template-columns: 40px 40px 40px;
    grid-template-rows: auto;
    grid-template-areas: 
      ". head ."
      "left torso right";
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
  }

  .backpack {
    position: relative;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    display: inline-block;
    max-height: 260px;
    background-color: rgb(200, 180, 0);
  }
  .backpackSlot {
    position: relative;
    width: 50px;
    height: 50px;
    background-color: rgb(200, 180, 0);
    border: 1px solid black;
  }
</style>
