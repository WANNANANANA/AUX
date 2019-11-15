<template>
  <div id="app">
    <header></header>
    <main>
      <router-view />
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
  background-image: url("./assets/images/bg@2x.png");
  background-size: cover;
  background-position: center bottom;
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
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 0;
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
            background-image: url("./assets/images/introduction_logo@2x.png");
          }
          .text {
            .boxSet(2rem, 0.5rem);
            background-image: url("./assets/images/introduction_text@2x.png");
          }
          &.router-link-active {
            .logo {
              background-image: url("./assets/images/introduction_logo_a@2x.png");
            }
            .text {
              .boxSet(2.4rem, 0.5rem);
              background-image: url("./assets/images/introduction_text_a@2x.png");
            }
          }
        }

        &:nth-of-type(2) {
          .logo {
            background-image: url("./assets/images/visition_logo@2x.png");
          }
          .text {
            .boxSet(1.06rem, 0.44rem);
            background-image: url("./assets/images/visition_text@2x.png");
          }
          &.router-link-active {
            .logo {
              background-image: url("./assets/images/visition_logo_a@2x.png");
            }
            .text {
              .boxSet(1.2rem, 0.5rem);
              background-image: url("./assets/images/visition_text_a@2x.png");
            }
          }
        }

        &:nth-of-type(3) {
          .logo {
            background-image: url("./assets/images/exhibition_logo@2x.png");
          }
          .text {
            .boxSet(1.16rem, 0.44rem);
            background-image: url("./assets/images/exhibition_text@2x.png");
          }
          &.router-link-active {
            .logo {
              background-image: url("./assets/images/exhibition_logo_a@2x.png");
            }
            .text {
              .boxSet(1.4rem, 0.5rem);
              background-image: url("./assets/images/exhibition_text_a@2x.png");
            }
          }
        }
      }
    }
  }
}
</style>
