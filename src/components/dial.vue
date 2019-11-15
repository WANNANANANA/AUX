<template>
  <div class="dial">
    <div class="circle circle-out"></div>
    <div class="circle circle-center"></div>
    <div class="circle circle-in"></div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "dial"
};
</script>
<style lang="less">
@import "../assets/style/common.less";
.dial {
  position: relative;
  .boxSet();
  .circle {
    .boxSet();
    position: absolute;
    background-position: center center;
    background-repeat: no-repeat;
    &.circle-out {
      z-index: 1;
      background-size: 100% 100%;
      background-image: url("../assets/images/circle_out@2x.png");
      animation: rotate 30s linear infinite;
    }
    &.circle-center {
      z-index: 2;
      background-size: 96% 96%;
      background-image: url("../assets/images/circle_center@2x.png");
    }
    &.circle-in {
      z-index: 3;
      background-size: 86% 86%;
      background-image: url("../assets/images/circle_in@2x.png");
      animation: rotate 30s linear infinite;
    }
  }
}
</style>