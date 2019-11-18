<template>
  <div class="exhibition">
    <div class="children" v-show="showKey">
      <transition>
        <router-view></router-view>
      </transition>
    </div>
    <div class="parent" v-show="!showKey">
      <div class="center">
        <ul class="text">
          <router-link tag="li" class="part" to="exhibition/part/0"></router-link>
          <router-link tag="li" class="part" to="exhibition/part/26"></router-link>
          <router-link tag="li" class="part" to="exhibition/part/37"></router-link>
          <router-link tag="li" class="part" to="exhibition/part/60"></router-link>
          <router-link tag="li" class="part" to="exhibition/part/100"></router-link>
          <li class="hall"></li>
          <li class="reception"></li>
          <li class="aisle"></li>
        </ul>
        <div class="location"></div>
        <img class="bg" src="../assets/images/exhibition_bg@2x.png" alt />
      </div>
    </div>
    <dial></dial>
  </div>
</template>
<script>
import dial from "../components/dial";
import arrow from "../components/arrow";
export default {
  name: "exhibition",
  data() {
    return {
      showKey: false
    };
  },
  components: { dial, arrow },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.id !== undefined) {
        vm.showKey = true;
      }
    });
  },
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

.exhibition {
  position: relative;
  .boxSet(7.4rem, 7.4rem);
  .children {
    position: absolute;
    z-index: 20;
  }
  .parent {
    .center {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 8;
      .boxSet(2.76rem, 8.24rem);
      .text {
        li {
          position: absolute;
          z-index: 15;
          background-repeat: no-repeat;
        }
        .part {
          .boxSet(3rem, 0.6rem);
          background-size: 100%;
          &:nth-of-type(1) {
            top: 0.2rem;
            left: -1.48rem;
            background-image: url("../assets/images/part_text@2x.png");
            background-position: 0px 0px;
          }
          &:nth-of-type(2) {
            top: 1.32rem;
            left: 1.92rem;
            background-image: url("../assets/images/part_text@2x.png");
            background-position: 0 -0.6rem;
          }
          &:nth-of-type(3) {
            top: 1.52rem;
            left: -1.76rem;
            background-image: url("../assets/images/part_text@2x.png");
            background-position: 0 -1.16rem;
          }
          &:nth-of-type(4) {
            top: 2.18rem;
            left: -1.18rem;
            background-image: url("../assets/images/part_text@2x.png");
            background-position: 0 -1.8rem;
          }
          &:nth-of-type(5) {
            top: 2.2rem;
            left: 1.92rem;
            background-image: url("../assets/images/part_text@2x.png");
            background-position: 0 -2.4rem;
          }
        }
        .hall {
          top: 3.6rem;
          left: -1.4rem;
          background-size: 148%;
          background-image: url("../assets/images/part_text@2x.png");
          background-position: -0.46rem -2.94rem;
          .boxSet(2rem, 0.6rem);
        }
        .reception {
          top: 6rem;
          left: -1.24rem;
          background-size: 148%;
          background-image: url("../assets/images/part_text@2x.png");
          background-position: -0.48rem -4.12rem;
          .boxSet(2rem, 30px);
        }
        .aisle {
          top: 5.2rem;
          left: 1.56rem;
          background-size: 148%;
          background-image: url("../assets/images/part_text@2x.png");
          background-position: -0.52rem -3.52rem;
          .boxSet(2rem, 0.6rem);
        }
      }
      .location {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -1rem;
        margin-left: -0.5rem;
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
  }
}
</style>