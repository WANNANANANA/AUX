<template>
  <div class="part">
    <div class="text" :class="indexClass">
      <div class="title">
        <arrow></arrow>
        <arrow></arrow>
      </div>
      <div class="des">
        <div class="change" @click="minus">
          <arrow :move="false"></arrow>
        </div>
        <p>{{text}}</p>
        <div class="change" @click="add">
          <arrow :move="false"></arrow>
        </div>
      </div>
      <div class="button" @click="back"></div>
    </div>
    <dial></dial>
  </div>
</template>
<script>
import dial from "../components/dial";
import arrow from "../components/arrow";
export default {
  components: { dial, arrow },
  data() {
    return {
      index: 0,
      partArr: [
        {
          class: "zero",
          path: "/part/0",
          text:
            "为了更好地满足功能需求，依据空间特性，每层都承载了各自的主要任务及具体功能。首层是品牌形象与新产品、主打产品抛光砖的主要展示场所，表达个性风格是这个空间的关键。利用地面折线风格跑道的表现与背景形象的鲜明颜色相互配合产生强烈视觉冲击效果，令人耳目一新，印象深刻。开阔的顾客休息洽谈区结合墙面产品形象展示，传达出其功能主题。"
        },
        {
          class: "one",
          path: "/part/26",
          text: "这个是第二段"
        },
        {
          class: "two",
          path: "/part/37",
          text: "这个是第三段"
        },
        {
          class: "three",
          path: "/part/60",
          text: "这个是第四段"
        },
        {
          class: "four",
          path: "/part/100",
          text: "这个是第五段"
        }
      ]
    };
  },
  beforeRouteEnter(to, from, next) {
    console.log(from);
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
    });
    if (from.path.indexOf("introduction") == -1) {
      console.log(0);
    } else {
      console.log(1);
    }
  },
  beforeRouteUpdate(to, from, next) {
    console.log(from);
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
      this.$router.replace(this.partArr[this.index].path);
    },
    add() {
      let index = this.index;
      if (index == 4) {
        index = 0;
      } else {
        index++;
      }
      this.index = index;
      this.$router.replace(this.partArr[this.index].path);
    }
  }
};
</script>
<style lang="less">
@import "../assets/style/common.less";
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
      top: 0.42rem;
      left: 50%;
      transform: translate(-50%, 0);
      .boxSet(3.9rem, 0.64rem);
      background-image: url("../assets/images/title_0@2x.png");
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
      p {
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
    .button {
      position: absolute;
      bottom: -0.8rem;
      left: 50%;
      transform: translate(-50%, 0);
      .boxSet(0.8rem, 0.8rem);
      background-image: url("../assets/images/back_icon@2x.png");
      background-size: 100%;
    }
  }
}
</style>
