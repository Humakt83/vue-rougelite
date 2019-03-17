<template>
  <div class="curtain" :class="{'victory': win}" @click="$emit('confirm')">
    <span v-if="win">
      ✨✨✨😃😁😉😍😘😜😏💩✨✨✨
    </span>
    <span v-else>
      💀💀💀💀💀💀
    </span>
  </div>
</template>

<script>
export default {
  props: {
    win: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
.curtain {
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.53);
  text-align: center;
  padding-top: 30vh;
  vertical-align: center;
  font-size: calc(100vw / 10);
  font-weight: bold;
  z-index: 500;
  letter-spacing: 1.5px;
  cursor: pointer;
  &.victory {
    background-color: rgba(200, 200, 0, 0.53);
    font-size: calc(100vw / 15);
  }
}
</style>
