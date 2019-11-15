<template>
  <div class="arrow">
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>
<script>
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
  div {
    position: absolute;
    .boxSet();
    background-image: url("../assets/images/arrow@2x.png");
    background-position: center center;
    background-repeat: no-repeat;
    &:nth-of-type(1) {
      top: 0;
      background-size: 100%;
      animation: move 1.2s linear infinite;
    }
    &:nth-of-type(2) {
      top: 0.12rem;
      background-size: 85%;
      animation: move 1.2s linear infinite;
    }
    &:nth-of-type(3) {
      top: 0.2rem;
      background-size: 65%;
      animation: move 1.2s linear infinite;
    }
  }
}
</style>