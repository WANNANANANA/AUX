<template>
  <div class="visition">
    <div></div>
    <div class="center" :class="className">
      <img :src="twoLine" alt class="two-line" />
      <img :src="fourLine" alt class="four-line" />
      <img :src="sixLine" alt class="six-line" />
      <div class="text"></div>
      <div class="location"></div>
      <span class="bg"></span>
    </div>
    <div class="button left" @click="minus">
      <arrow></arrow>
    </div>
    <div class="button right" @click="add">
      <arrow></arrow>
    </div>
  </div>
</template>
<script>
import dial from "../components/dial";
import arrow from "../components/arrow";
import twoLine from "../assets/images/20min@2x.gif";
import fourLine from "../assets/images/40min@2x.gif";
import sixLine from "../assets/images/60min@2x.gif";
export default {
  name: "visition",
  data() {
    return {
      index: 0,
      classArr: ["zero", "one", "two"],
      twoLine,
      fourLine,
      sixLine
    };
  },
  computed: {
    className() {
      return this.classArr[this.index];
    }
  },
  components: { arrow },
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
    img {
      position: absolute;
      display: none;
      &.two-line {
        top: 0.08rem;
        left: -1.52rem;
        width: 4.28rem;
      }
      &.four-line {
        width: 4.5rem;
        left: -1.52rem;
        top: .04rem;
      }
      &.six-line {
        width: 4.5rem;
        left: -1.52rem;
        top: .08rem;
      }
    }
    div {
      position: absolute;
      background-size: 100%;
      &.text {
        top: 2rem;
        left: -1.4rem;
        .boxSet(2rem, 0.84rem);
        z-index: 11;
        background-size: 98%;
        background-repeat: no-repeat;
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
      display: inline-block;
      .boxSet();
      background-image: url("../assets/images/visition_bg@2x.png");
      background-size: 100%;
      background-repeat: no-repeat;
    }

    &.zero {
      .two-line {
        display: inline-block;
      }
      .text {
        background-position: center 0.02rem;
        background-image: url("../assets/images/min_text@2x.png");
      }
    }
    &.one {
      .four-line {
        display: inline-block;
      }
      .text {
        background-position: center -0.8rem;
        background-image: url("../assets/images/min_text@2x.png");
      }
    }
    &.two {
      .six-line {
        display:inline-block;
      }
      .text {
        background-position: center -1.62rem;
        background-image: url("../assets/images/min_text@2x.png");
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