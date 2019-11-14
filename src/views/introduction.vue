<template>
  <div class="introduction">
    <div class="circle circle-out"></div>
    <div class="circle circle-center"></div>
    <div class="circle circle-in"></div>
    <img src="../assets/images/title@2x.png" alt />
    <router-link tag="li" to="/part/0"></router-link>
    <router-link tag="li" to="/part/26"></router-link>
    <router-link tag="li" to="/part/37"></router-link>
    <router-link tag="li" to="/part/60"></router-link>
    <router-link tag="li" to="/part/100"></router-link>
  </div>
</template>
<script>
export default {
  name: "introduction",
  data() {
    return {};
  }
};
</script>
<style lang="less">
@import "../assets/style/common.less";
.introduction {
  position: relative;
  .boxSet(7.4rem, 7.4rem);
  .circle {
    .boxSet();
    position: absolute;
    background-position: center center;
    background-repeat: no-repeat;
    &.circle-out {
      z-index: 1;
      background-size: 100% 100%;
      background-image: url("../assets/images/circle_out@2x.png");
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
    }
  }
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .boxSet(3.08rem, 2.12rem);
  }
  li {
    position: absolute;
    z-index: 8;
    .boxSet(1.4rem, 1.4rem);
    background-size: 100%;
    &:nth-of-type(1) {
      top: 0.87rem;
      left: 3.07rem;
      background-image: url("../assets/images/0@2x.png");
    }
    &:nth-of-type(2) {
      top: 2.3rem;
      right: 0.96rem;
      background-image: url("../assets/images/26@2x.png");
    }
    &:nth-of-type(3) {
      bottom: 1.25rem;
      right: 1.78rem;
      background-image: url("../assets/images/37@2x.png");
    }
    &:nth-of-type(4) {
      bottom: 1.25rem;
      left: 1.78rem;
      background-image: url("../assets/images/60@2x.png");
    }
    &:nth-of-type(5) {
      top: 2.3rem;
      left: 0.96rem;
      background-image: url("../assets/images/100@2x.png");
    }
  }
}
</style>