<template>
  <div class="introduction">
    <div class="title">
      <arrow></arrow>
      <span class="img"></span>
      <arrow></arrow>
    </div>
    <ul class="icon">
      <li v-for="(item, index) in 5" :key="index" @click="onShowPart(item)"></li>
    </ul>
  </div>
</template>
<script>
import arrow from "../components/arrow";
export default {
  name: "introduction",
  data() {
    return {};
  },
  components: { arrow },
  beforeRouteLeave(to, from, next) {
    this.$emit('hidePart');
    next();
  },
  methods: {
    onShowPart(id) {
      this.$emit("showPart", { id });
    }
  }
};
</script>
<style lang="less">
@import "../assets/style/common.less";
.v-enter-active,
.v-leave-active {
  transition: all 1s;
}
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translate(-50%, -60%) !important;
}

.introduction {
  .boxSet(7.4rem, 7.4rem);
  .title {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 8;
    transform: translate(-50%, -50%);
    .img {
      display: inline-block;
      .boxSet(3.08rem, 2.12rem);
      background-image: url("../assets/images/title.png");
      background-size: 100%;
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
  ul {
    position: relative;
    .boxSet();
    li {
      position: absolute;
      z-index: 8;
      .boxSet(1.6rem, 1.76rem);
      background-image: url("../assets/images/icon_sprite.png");
      background-size: 100%;
      &:nth-of-type(1) {
        top: 0.7rem;
        left: 2.9rem;
        background-position: center -0.12rem;
      }
      &:nth-of-type(2) {
        top: 2.3rem;
        right: 0.76rem;
        background-position: center -2.28rem;
      }
      &:nth-of-type(3) {
        bottom: 1.25rem;
        right: 1.78rem;
        background-position: center -4.44rem;
      }
      &:nth-of-type(4) {
        bottom: 1.25rem;
        left: 1.78rem;
        background-position: center -6.6rem;
      }
      &:nth-of-type(5) {
        top: 2.3rem;
        left: 0.76rem;
        background-position: center -8.76rem;
      }
    }
  }
}
</style>