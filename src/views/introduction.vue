<template>
  <div class="introduction">
    <!-- 渲染或者销毁这个组件的时候发生动效 -->
    <div class="children" v-show="showKey">
      <transition>
        <router-view></router-view>
      </transition>
    </div>
    <div class="parent" v-show="!showKey">
      <div class="title">
        <arrow></arrow>
        <span class="img"></span>
        <arrow></arrow>
      </div>
      <router-link tag="li" to="introduction/part/0"></router-link>
      <router-link tag="li" to="introduction/part/26"></router-link>
      <router-link tag="li" to="introduction/part/37"></router-link>
      <router-link tag="li" to="introduction/part/60"></router-link>
      <router-link tag="li" to="introduction/part/100"></router-link>
    </div>
  </div>
</template>
<script>
import arrow from "../components/arrow";
export default {
  name: "introduction",
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
      } else { // 当使用了keep-alive的情况下 这个就很重要 因为router离开当前路由组件时该组件不会进行销毁 数据不会重新渲染
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
}
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
  transform: translate(0, -10%);
}

.introduction {
  position: relative;
  .boxSet(7.4rem, 7.4rem);
  overflow: hidden;
  .children {
    position: absolute;
    z-index: 20;
  }
  .parent {
    .title {
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 8;
      transform: translate(-50%, -50%);
      .img {
        display: inline-block;
        .boxSet(3.08rem, 2.12rem);
        background-image: url('../assets/images/title@2x.png');
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
    li {
      position: absolute;
      z-index: 8;
      .boxSet(1.4rem, 1.4rem);
      background-size: 100%;
      &:nth-of-type(1) {
        top: 0.87rem;
        left: 3.07rem;
        background-image: url("../assets/images/logo_icon@2x.png");
        background-position: 0px 0px;
      }
      &:nth-of-type(2) {
        top: 2.3rem;
        right: 0.96rem;
        background-image: url("../assets/images/logo_icon@2x.png");
         background-position: center -1.4rem;
      }
      &:nth-of-type(3) {
        bottom: 1.25rem;
        right: 1.78rem;
        background-image: url("../assets/images/logo_icon@2x.png");
         background-position: center -2.8rem;
      }
      &:nth-of-type(4) {
        bottom: 1.25rem;
        left: 1.78rem;
        background-image: url("../assets/images/logo_icon@2x.png");
         background-position: center -4.2rem;
      }
      &:nth-of-type(5) {
        top: 2.3rem;
        left: 0.96rem;
        background-image: url("../assets/images/logo_icon@2x.png");
         background-position: center -5.6rem;
      }
    }
  }
}
</style>