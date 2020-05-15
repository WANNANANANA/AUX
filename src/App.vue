<template>
  <div id="app">
    <header :style="{animationPlayState: aniState}"></header>
    <main>
      <dial></dial>
      <keep-alive exclude="visition">
        <router-view />
      </keep-alive>
    </main>
    <footer>
      <ul>
        <router-link to="/introduction" tag="li">
          <div class="logo"></div>
          <div class="text"></div>
        </router-link>
        <router-link to="/visition" tag="li">
          <div class="logo"></div>
          <div class="text"></div>
        </router-link>
        <router-link to="/exhibition" tag="li">
          <div class="logo"></div>
          <div class="text"></div>
        </router-link>
      </ul>
    </footer>
  </div>
</template>
<script>
import dial from "./components/dial";
export default {
  name: "App",
  components: { dial },
  data() {
    return {
      aniState: 'paused'
    }
  },
  mounted() {
    window.onload = () => {
      document.getElementById("page-loading").className = "hide";
      this.aniState = 'running';
    };
  }
};
</script>

<style lang="less">
@import "./assets/style/common.less";
@keyframes showHeader {
  0% {
    transform: translate(0, -100%);
    opacity: 0;
  }
  100% {
    transform: translate(0, 0);
    opacity: 1;
  }
}
#app {
  position: relative;
  .boxSet();
  header {
    position: fixed;
    top: 0px;
    left: 0px;
    .boxSet(100%, 10%);
    background-image: url("./assets/images/header@2x.png");
    background-size: 100%;
    background-repeat: no-repeat;
    animation: showHeader 0.5s ease-in-out;
  }
  main {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 0;
    .dial {
      position: absolute;
      .boxSet();
    }
  }
  footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 22%;
    ul {
      display: flex;
      justify-content: space-around;
      li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 30%;
        .logo,
        .text {
          background-size: 100%;
          background-position: center center;
          background-repeat: no-repeat;
          margin: 0 auto;
        }

        &.router-link-active {
          .logo {
            .boxSet(1.57rem, 1.43rem);
          }
        }

        .logo {
          .boxSet(1.08rem, 1.06rem);
        }

        &:nth-of-type(1) {
          .logo {
            background-image: url("./assets/images/logo_icon@2x.png");
            background-size: 140%;
            background-position: center -10.8rem;
          }
          .text {
            .boxSet(2rem, 0.5rem);
            background-image: url("./assets/images/footer_text@2x.png");
            background-size: 96%;
            background-position: center -0.06rem;
          }
          &.router-link-active {
            .logo {
              background-image: url("./assets/images/logo_icon@2x.png");
              background-size: 100%;
              background-position: center -15.8rem;
            }
            .text {
              .boxSet(100%, 0.5rem);
              background-image: url("./assets/images/footer_text@2x.png");
              background-position: center -0.92rem;
            }
          }
        }

        &:nth-of-type(2) {
          .logo {
            background-image: url("./assets/images/logo_icon@2x.png");
            background-size: 140%;
            background-position: center -9.3rem;
          }
          .text {
            .boxSet(1.06rem, 0.44rem);
            background-image: url("./assets/images/footer_text@2x.png");
            background-size: 130%;
            background-position: center -0.96rem;
          }
          &.router-link-active {
            .logo {
              background-image: url("./assets/images/logo_icon@2x.png");
              background-size: 100%;
              background-position: center -14.2rem;
            }
            .text {
              .boxSet(1.2rem, 0.5rem);
              background-image: url("./assets/images/footer_text@2x.png");
              background-size: 110%;
              background-position: center -1.36rem;
            }
          }
        }

        &:nth-of-type(3) {
          .logo {
            background-image: url("./assets/images/logo_icon@2x.png");
            background-size: 140%;
            background-position: center -7.8rem;
          }
          .text {
            .boxSet(1.16rem, 0.44rem);
            background-image: url("./assets/images/footer_text@2x.png");
            background-size: 120%;
            background-position: center -1.92rem;
          }
          &.router-link-active {
            .logo {
              background-image: url("./assets/images/logo_icon@2x.png");
              background-size: 100%;
              background-position: center -12.6rem;
            }
            .text {
              .boxSet(1.4rem, 0.5rem);
              background-image: url("./assets/images/footer_text@2x.png");
              background-size: 100%;
              background-position: center -2.4rem;
            }
          }
        }
      }
    }
  }
}
</style>
