<template>
  <div id="app">
    <header>
      <h3>导览系统</h3>
      <h4>NAVIGATION STSTEM</h4>
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
  header {
    position: fixed;
    top: 0px;
    left: 0px;
    .boxSet(100%, 60px);
    //   background-image: url();
    //   background-size: 100%;
    background: red;
    h3 {
      width: 100%;
      .fontSet(22px, #000);
      text-align: center;
    }
    h4 {
      width: 100%;
      text-align: center;
      .fontSet(12px, #000);
    }
  }
  main {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    // .boxSet();
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
