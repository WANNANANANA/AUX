<template>
  <div class="visition">
    <div class="center" :class="className">
      <div class="line"></div>
      <div class="text"></div>
      <div class="location"></div>
      <img class="bg" src="../assets/images/visition_bg@2x.png" alt />
    </div>
    <div class="button left" @click="minus">
      <arrow></arrow>
    </div>
    <div class="button right" @click="add">
      <arrow></arrow>
    </div>
    <dial></dial>
  </div>
</template>
<script>
import dial from "../components/dial";
import arrow from "../components/arrow";
export default {
  name: "visition",
  data() {
    return {
      index: 0,
      classArr: ['zero', 'one', 'two']
    };
  },
  computed: {
      className() {
        return this.classArr[this.index]
      }
  },
  components: { dial, arrow },
  methods: {
    minus() {
      if (this.index == 0) {
        this.index = 2;
      } else {
        this.index--;
      }
    },
    add() {
      if (this.index == 2) {
        this.index = 0;
      } else {
        this.index++;
      }
    }
  }
};
</script>
<style lang="less">
@import "../assets/style/common.less";

.visition {
  position: relative;
  .boxSet(7.4rem, 7.4rem);
  .center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 8;
    .boxSet(2.76rem, 8.24rem);
    div {
      position: absolute;
      background-size: 100%;
      &.line {
        top: 0.16rem;
        left: -1.28rem;
        z-index: 9;
      }
      &.text {
        top: 2rem;
        left: -1.4rem;
        .boxSet(2rem, 0.8rem);
        z-index: 11;
      }
      &.location {
        top: 50%;
        left: 50%;
        margin-top: -0.8rem;
        margin-left: -0.8rem;
        .boxSet(0.42rem, 0.6rem);
        background-image: url("../assets/images/other_icon@2x.png");
        background-size: 180%;
        background-position: center -1.6rem;
        z-index: 10;
      }
    }
    .bg {
      .boxSet();
    }

    &.zero {
      .line {
        .boxSet(3.72rem, 5.24rem);
        background-image: url("../assets/images/20min@2x.png");
      }
      .text {
        background-image: url("../assets/images/20min_text@2x.png");
      }
    }
    &.one {
      .line {
        .boxSet(3.96rem, 5.2rem);
        background-image: url("../assets/images/40min@2x.png");
      }
      .text {
        background-image: url("../assets/images/40min_text@2x.png");
      }
    }
    &.two {
      .line {
        .boxSet(4.04rem, 6.06rem);
        background-image: url("../assets/images/60min@2x.png");
      }
      .text {
        background-image: url("../assets/images/60min_text@2x.png");
      }
    }
  }
  .button {
    position: absolute;
    z-index: 15;
    width: 1.08rem;
    height: 0.9rem;
    top: 50%;
    transform: translate(0, -50%);
    &.left {
      left: 0.8rem;
      .arrow {
        top: 0;
        left: 0;
        height: 100%;
        transform: rotateZ(-90deg);
      }
    }
    &.right {
      right: 0.8rem;
      .arrow {
        top: 0;
        right: 0;
        height: 100%;
        transform: rotateZ(90deg);
      }
    }
  }
}
</style>