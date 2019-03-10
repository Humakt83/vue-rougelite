<template>
  <div class="log">
    <textarea class="logArea" disabled v-model="logToString">
    </textarea>
  </div>
</template>

<script>

export default {
  props: ['gameLog'],
  computed: {
    logToString() {
      let converted = ''
      this.gameLog.forEach(logEntry => {
        converted += logEntry;
        converted += '\n';
      })
      return converted;
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .logArea {
    width: 98%;
    height: 23vh;
    position: relative;
    background-color: lemonchiffon;
  }
  .logArea:disabled {
    color: black;
  }
</style>
