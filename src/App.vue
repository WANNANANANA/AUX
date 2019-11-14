<template>
  <div id="app">
    <header>
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <ul>
        <router-link to="/" tag="li">introduction</router-link>
        <router-link to="/visition" tag="li">visition</router-link>
        <router-link to="/exhibition" tag="li">exhibition</router-link>
      </ul>
    </footer>
  </div>
</template>

<style lang="less">
@import "./assets/style/common.less";
#app {
  position: relative;
  .boxSet();
  background-image: url('./assets/images/bg@2x.png');
  background-size: cover;
  background-position: center bottom;
  header {
    position: fixed;
    top: 0px;
    left: 0px;
    .boxSet(100%, 10%);
    background: red;
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
    height: 20%;
    ul {
      display: flex;
      width: 100%;
      li {
        width: 33%;
        text-align: center;
      }
    }
  }
}
</style>
