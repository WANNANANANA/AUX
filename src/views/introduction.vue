<template>
  <div class="introduction">
    <div class="children" v-if="showKey">
      <router-view></router-view>
    </div>
    <div class="parent" v-else>
      <div class="title">
        <arrow></arrow>
        <img src="../assets/images/title@2x.png" alt />
        <arrow></arrow>
      </div>
      <router-link tag="li" to="/introduction/part/0"></router-link>
      <router-link tag="li" to="/introduction/part/26"></router-link>
      <router-link tag="li" to="/introduction/part/37"></router-link>
      <router-link tag="li" to="/introduction/part/60"></router-link>
      <router-link tag="li" to="/introduction/part/100"></router-link>
    </div>
    <dial></dial>
  </div>
</template>
<script>
import arrow from "../components/arrow";
import dial from "../components/dial";
export default {
  name: "introduction",
  data() {
    return {
      showKey: false
    };
  },
  components: { arrow, dial },
  beforeRouteUpdate(to, from, next) {
    if (to.params.id) {
      this.showKey = true;
    } else {
      this.showKey = false;
    }
    next();
  }
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
.introduction {
  position: relative;
  .boxSet(7.4rem, 7.4rem);
  overflow: hidden;
  .children {
    position: absolute;
    z-index: 20;
  }
  .title {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 8;
    transform: translate(-50%, -50%);
    img {
      .boxSet(3.08rem, 2.12rem);
    }
    .arrow {
      left: 50%;
      z-index: 10;
      &:nth-of-type(1) {
        top: 0;
        transform: translate(-50%, -50%);
      }
      &:nth-of-type(2) {
        bottom: 0;
        transform: rotateX(180deg);
        margin-left: -0.45rem;
        margin-bottom: -0.25rem;
      }
    }
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