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

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.dial {
  position: relative;
  .boxSet();
  overflow: hidden;
  .circle {
    .boxSet();
    position: absolute;
    background-position: center center;
    background-repeat: no-repeat;
    &.circle-out {
      z-index: 1;
      background-size: 100% 100%;
      background-image: url("../assets/images/circle_out.png");
      animation: rotate 30s linear infinite;
    }
    &.circle-center {
      z-index: 2;
      background-size: 96% 96%;
      background-image: url("../assets/images/circle_center.png");
    }
    &.circle-in {
      z-index: 3;
      background-size: 86% 86%;
      background-image: url("../assets/images/circle_in.png");
      animation: rotate 30s linear infinite;
    }
  }
}
</style>