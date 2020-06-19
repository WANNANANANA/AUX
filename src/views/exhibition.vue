<template>
  <div class="exhibition">
    <ul class="icon">
      <li v-for="(item, index) in 7" :key="index" @click="onShowPart(item)"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "exhibition",
  data() {
    return {};
  },
  beforeRouteLeave(to, from, next) {
    this.$emit("hidePart");
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

.exhibition {
  position: relative;
  .boxSet(7.4rem, 7.4rem);
  background-image: url("../assets/images/exhibition_bg.png");
  background-size: 80%;
  background-position: center center;
  background-repeat: no-repeat;
  .icon {
    li {
      position: absolute;
      z-index: 15;
      .boxSet(3.6rem, 0.52rem);
      background-image: url("../assets/images/part_text.png");
      background-size: 100%;
      background-position-x: center;
      background-repeat: no-repeat;
      &:nth-of-type(1) {
        top: 1.12rem;
        left: 0.92rem;
        background-position-y: -0.16rem;
      }
      &:nth-of-type(2) {
        bottom: 0.4rem;
        left: 2rem;
        background-position-y: -0.85rem;
      }
      &:nth-of-type(3) {
        bottom: 1.8rem;
        left: 0.32rem;
        background-position-y: -1.53rem;
      }
      &:nth-of-type(4) {
        top: 0.4rem;
        left: 0.12rem;
        background-position-y: -2.21rem;
      }
      &:nth-of-type(5) {
        top: 1.6rem;
        left: 3.42rem;
        background-position-y: -2.9rem;
      }
      &:nth-of-type(6) {
        top: 2.22rem;
        left: 5.5rem;
        width: 1.6rem;
        background-size: 232%;
        background-position-y: -3.68rem;
      }
      &:nth-of-type(7) {
        top: 150px;
        right: 40px;
        width: 76px;
        height: 106px;
        background: none;
      }
    }
  }
}
</style>