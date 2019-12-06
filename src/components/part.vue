<template>
  <div class="part">
    <div class="text" :class="indexClass">
      <div class="title">
        <arrow></arrow>
        <arrow></arrow>
      </div>
      <div class="des">
        <div class="change" @click="minus">
          <arrow></arrow>
        </div>
        <ul class="desWord">
          <li v-for="(item, index) in text" :key="index">{{item}}</li>
        </ul>
        <div class="change" @click="add">
          <arrow></arrow>
        </div>
      </div>
      <div class="button" @click="back">
        <div class="button-bg"></div>
      </div>
    </div>
  </div>
</template>
<script>
import arrow from "../components/arrow";
export default {
  components: { arrow },
  data() {
    return {
      parent: "",
      index: 0,
      partArr: [
        {
          class: "zero",
          path: "/part/0",
          text: [
            "打破界限，抢抓机遇，快速实现从0到亿的跨越；",
            "企业高度：崛起于阡陌，成长于自强，腾飞于转型；",
            "战略高度：医疗健康、互联网智能化、国际化三大战略。"
          ]
        },
        {
          class: "one",
          path: "/part/26",
          text: [
            "温度的控制，健康的呵护，开启有温度的智能生活；",
            "健康温度：感知生活最舒适的室温；",
            "智能温度：匠心调控最智能的温度。"
          ]
        },
        {
          class: "two",
          path: "/part/37",
          text: [
            "精选有态度产品，享受品质美好生活；",
            "积极态度：积极的态度面对生活；",
            "品质态度：展有态度的优质产品。"
          ]
        },
        {
          class: "three",
          path: "/part/60",
          text: [
            "看不见的大数据，看得见的创新智能；",
            "眼界视度：全球布局的视野，让奥克斯成为世界品牌；",
            "云上视度：大数据云端管理，掌控全产业生态链。"
          ]
        },
        {
          class: "four",
          path: "/part/100",
          text: [
            "安全的步伐速达未来；",
            "战略速度：“千亿市值、千亿规模、百亿利润”",
            "研发速度：节能、环保、舒适、智能的科研之路。"
          ]
        }
      ]
    };
  },
  beforeRouteEnter(to, from, next) {
    // 注意：这里面没有this 组件实例还没被创建 vm获取
    next(vm => {
      let id = to.params.id;
      switch (id) {
        case "0":
          vm.index = 0;
          break;
        case "26":
          vm.index = 1;
          break;
        case "37":
          vm.index = 2;
          break;
        case "60":
          vm.index = 3;
          break;
        case "100":
          vm.index = 4;
          break;
      }

      if (to.path.indexOf("exhibition") == -1) {
        vm.parent = "/introduction";
      } else {
        vm.parent = "/exhibition";
      }
    });
  },
  beforeRouteUpdate(to, from, next) {
    next();
  },
  computed: {
    indexClass() {
      return this.partArr[this.index].class;
    },
    text() {
      return this.partArr[this.index].text;
    }
  },
  methods: {
    back() {
      this.$router.back();
    },
    minus() {
      let index = this.index;
      if (index == 0) {
        index = 4;
      } else {
        index--;
      }
      this.index = index;
      this.$router.replace(this.parent + this.partArr[this.index].path);
    },
    add() {
      let index = this.index;
      if (index == 4) {
        index = 0;
      } else {
        index++;
      }
      this.index = index;
      this.$router.replace(this.parent + this.partArr[this.index].path);
    }
  }
};
</script>
<style lang="less">
@import "../assets/style/common.less";
@keyframes shine {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.part {
  .boxSet(7.4rem, 7.4rem);
  overflow: hidden;
  z-index: 12;
  .text {
    position: absolute;
    top: 0.88rem;
    left: 50%;
    z-index: 12;
    transform: translate(-50%, 0);
    .boxSet(4.76rem, 4.88rem);
    background-image: url("../assets/images/text_frame@2x.png");
    background-size: 100%;

    .title {
      position: absolute;
      top: 0.4rem;
      left: 50%;
      transform: translate(-50%, 0);
      .boxSet(3.9rem, 0.72rem);
      background-image: url("../assets/images/part_title@2x.png");
      background-position: .2rem 0px;
      background-size: 100%;
      .arrow {
        left: 50%;
        top: -0.8rem;
        margin-left: -0.2rem;
        width: 0.6rem;
        &:nth-of-type(1) {
          top: 0.8rem;
          transform: rotateX(180deg);
        }
      }
    }
    .des {
      position: absolute;
      top: 1.68rem;
      left: 50%;
      transform: translate(-50%, 0);
      .boxSet(4rem, 2.8rem);
      .change {
        position: absolute;
        top: 40%;
        width: 1.06rem;
        .arrow {
          width: 100%;
        }
        &:nth-of-type(1) {
          left: 0%;
          margin-left: -1.2rem;
          .arrow {
            transform: rotateZ(-90deg);
          }
        }
        &:nth-of-type(2) {
          right: 0%;
          margin-right: -1.2rem;
          .arrow {
            transform: rotateZ(90deg);
          }
        }
      }
      .desWord {
        li {
          margin-top: 0.1rem;
          .boxSet();
          .fontSet(0.22rem, #fff);
          line-height: 0.4rem;
          letter-spacing: 0.5px;
          overflow-y: auto;
          &::-webkit-scrollbar {
            width: 0.06rem;
          }
          &::-webkit-scrollbar-thumb {
            border-radius: 10px;
            background: #fff;
          }
          &::-webkit-scrollbar-track {
            border-radius: 10px;
            background: rgb(92, 91, 91);
          }
        }
      }
    }
    .button {
      position: absolute;
      bottom: -0.8rem;
      left: 50%;
      transform: translate(-50%, 0);
      .boxSet(0.8rem, 0.8rem);
      background-image: url("../assets/images/other_icon@2x.png");
      background-size: 100%;
      background-position: 0px 0px;
      border-radius: 50%;
      .button-bg {
        .boxSet();
        background-image: url("../assets/images/other_icon@2x.png");
        background-size: 100%;
        background-position: 0 2rem;
        animation: shine 1s linear infinite alternate;
      }
    }

    &.one .title {
      background-position-y: -0.72rem;
    }
    &.two .title {
      background-position-y: -1.44rem;
    }
    &.three .title {
      background-position-y: -2.16rem;
    }
    &.four .title {
      background-position-y: -2.88rem;
    }
  }
}
</style>
