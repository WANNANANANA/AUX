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
          <router-link tag="li" class="part" to="exhibition/part/37"></router-link>
          <router-link tag="li" class="part" to="exhibition/part/60"></router-link>
          <router-link tag="li" class="part" to="exhibition/part/26"></router-link>
          <router-link tag="li" class="part" to="exhibition/part/0"></router-link>
          <router-link tag="li" class="part" to="exhibition/part/100"></router-link>
          <li class="building"></li>
          <li class="hall"></li>
          <li class="reception"></li>
          <li class="aisle"></li>
        </ul>
        <div class="location"></div>
        <span class="bg"></span>
      </div>
    </div>
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
  components: { arrow },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.id !== undefined) {
        vm.showKey = true;
      } else {
        vm.showKey = false;
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
      .boxSet(2.76rem, 7.6rem);
      .text {
        li {
          position: absolute;
          z-index: 15;
          background-image: url("../assets/images/part_text@2x.png");
          background-repeat: no-repeat;
        }
        .part {
          .boxSet(3rem, 0.6rem);
          background-size: 100%;
          &:nth-of-type(1) {
            top: 0.2rem;
            left: -1.48rem;
            background-position: 0px 0px;
          }
          &:nth-of-type(2) {
            top: 1.34rem;
            left: 1.92rem;
            background-position: 0 -0.74rem;
          }
          &:nth-of-type(3) {
            top: 1.52rem;
            left: -1.76rem;
            background-position: 0 -1.42rem;
          }
          &:nth-of-type(4) {
            top: 2.18rem;
            left: -1.18rem;
            background-position: 0 -2.14rem;
          }
          &:nth-of-type(5) {
            top: 2.2rem;
            left: 1.92rem;
            background-position: 0 -2.85rem;
          }
        }
        .building {
          top: 3.4rem;
          left: 2.4rem;
          background-size: 148%;
          background-position: -0.52rem -5.56rem;
          .boxSet(2rem, 0.6rem);
        }
        .hall {
          top: 3.6rem;
          left: -1.4rem;
          background-size: 148%;
          background-position: -0.52rem -3.52rem;
          .boxSet(2rem, 0.6rem);
        }
        .reception {
          top: 6rem;
          left: -1.24rem;
          background-size: 148%;
          background-position: -0.48rem -4.88rem;
          .boxSet(2rem, 0.6rem);
        }
        .aisle {
          top: 5.2rem;
          left: 1.56rem;
          background-size: 148%;
          background-position: -0.52rem -4.16rem;
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
      display: inline-block;
      .boxSet();
      background-image: url("../assets/images/exhibition_bg@2x.png");
      background-size: 100%;
      background-repeat: no-repeat;
    }
  }
}
</style>