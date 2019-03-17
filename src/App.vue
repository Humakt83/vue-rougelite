<template>
  <div id="app">
    <Main />
  </div>
</template>

<script>
import Main from './components/Main.vue'

export default {
  name: 'app',
  components: {
    Main
  }
}
</script>

<style lang="scss">
body {
  overflow: hidden;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

legend {
  font-weight: bolder;
  font-size: normal;
}

.tooltip {
  display: block;
  z-index: 10000;
 
  .tooltip-inner {
    background: rgba(0, 0, 0, 0.6);
    color: white;
    border-radius: 16px;
    padding: 5px 10px 4px;
  }
 
  .tooltip-arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 5px;
    border-color: black;
    z-index: 1;
  }
 
  &[x-placement^="bottom"] {
    margin-top: 5px;
 
    .tooltip-arrow {
      border-width: 0 5px 5px 5px;
      border-left-color: transparent;
      border-right-color: transparent;
      border-top-color: transparent;
      top: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  &[x-placement^="top"] {
    margin-bottom: 5px;

    .tooltip-arrow {
      border-width: 5px 5px 0 5px;
      border-left-color: transparent;
      border-right-color: transparent;
      border-bottom-color: transparent;
      bottom: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }
 
  &[x-placement^="right"] {
    margin-left: 5px;
 
    .tooltip-arrow {
      border-width: 5px 5px 5px 0;
      border-left-color: transparent;
      border-top-color: transparent;
      border-bottom-color: transparent;
      left: -5px;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
    }
  }
  
}
</style>
