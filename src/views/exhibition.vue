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
          background-size: 100%;
        }
        .part {
          .boxSet(3rem, 0.6rem);
          &:nth-of-type(1) {
            top: 0.2rem;
            left: -1.48rem;
            background-image: url("../assets/images/37_text@2x.png");
          }
          &:nth-of-type(2) {
            top: 1.32rem;
            left: 1.92rem;
            background-image: url("../assets/images/60_text@2x.png");
          }
          &:nth-of-type(3) {
            top: 1.52rem;
            left: -1.76rem;
            background-image: url("../assets/images/26_text@2x.png");
          }
          &:nth-of-type(4) {
            top: 2.18rem;
            left: -1.18rem;
            background-image: url("../assets/images/0_text@2x.png");
          }
          &:nth-of-type(5) {
            top: 2.2rem;
            left: 1.92rem;
            background-image: url("../assets/images/100_text@2x.png");
          }
        }
        .hall {
          top: 3.6rem;
          left: -1.3rem;
          background-image: url("../assets/images/hall_text@2x.png");
          .boxSet(2rem, 0.6rem);
        }
        .reception {
          top: 6rem;
          left: -1.24rem;
          background-image: url("../assets/images/reception_text@2x.png");
          .boxSet(2rem, 30px);
        }
        .aisle {
          top: 5.2rem;
          left: 1.56rem;
          background-image: url("../assets/images/aisle_text@2x.png");
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
        background-image: url("../assets/images/location@2x.png");
        background-size: 100%;
        z-index: 10;
      }
    }

    .bg {
      .boxSet();
    }
  }
}
</style>