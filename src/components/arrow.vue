<template>
  <div class="arrow" :class="{ move: move }">
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>
<script>
export default {
  props: {
    move: {
      default: Boolean,
      default: true
    }
  }
};
</script>
<style lang="less">
@import "../assets/style/common.less";
@keyframes move {
  0% {
    transform: translate(0, 0.3rem);
    opacity: 0;
  }
  100% {
    transform: translate(0, 0);
    opacity: 1;
  }
}
.arrow {
  position: absolute;
  .boxSet(0.9rem, 0.5rem);
  &.move {
    div {
      animation: move 1.2s linear infinite;
    }
  }
  div {
    position: absolute;
    .boxSet();
    background-image: url("../assets/images/arrow@2x.png");
    background-position: center center;
    background-repeat: no-repeat;
    &:nth-of-type(1) {
      top: 0;
      background-size: 100%;
    }
    &:nth-of-type(2) {
      top: 0.12rem;
      background-size: 85%;
    }
    &:nth-of-type(3) {
      top: 0.2rem;
      background-size: 65%;
    }
  }
}
</style>