<template>
  <div id="app">
    <header :style="{animationPlayState: aniState}"></header>
    <main>
      <dial></dial>
      <keep-alive>
        <router-view @showPart="onShowPart" @hidePart="onHidePart" />
      </keep-alive>
      <transition>
        <div class="part" v-show="partKey">
          <ul>
            <li
              v-for="item in partArr"
              :key="item.id"
              v-show="item.id == partId"
              :class="['content' + item.id]"
            >
              <div class="title"></div>
              <div class="img">
                <div class="icon" v-if="item.id == 7" @click="onShowPart({id: 8})"></div>
                <img :src="item.imgSrc" alt />
              </div>
              <div class="text">{{item.text}}</div>
            </li>
          </ul>
          <div class="button" @click="onHidePart">
            <div class="button-bg"></div>
          </div>
        </div>
      </transition>
    </main>
    <footer>
      <ul>
        <router-link to="/introduction" tag="li"></router-link>
        <router-link to="/exhibition" tag="li"></router-link>
        <li>
          <a
            href="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzIyNjk3MTY5Mg==&scene=124#wechat_redirect"
          ></a>
        </li>
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
      aniState: "paused",
      partKey: false,
      partId: 1,
      partArr: [
        {
          id: 1,
          imgSrc: require("./assets/images/part_img1.png"),
          text:
            "奥克斯集团从0开始，打破界限，抢抓机遇，崛起于阡陌，成长于自强，腾飞于转型，快速实现从0到亿的跨越，到达一个全新的维度和高度。序厅影片以数字串联讲述奥克斯集团的品牌印象，5大业务板块，5个研发中心，10大制造基地，位列中国企业500强，全面展示奥克斯集团综合实力。"
        },
        {
          id: 2,
          imgSrc: require("./assets/images/part_img2.png"),
          text:
            "奥克斯从1986年开始创业、1989年三星电表、1994年空调问世，时至今日，已历经三十四载时光淬炼和品牌沉淀。弘扬和传承拓荒牛精神，坚守初心结合创新，开启奥克斯空调发展之路，引领技术发展产业升级，匠心调控26°一个懂你的温度，开创有温度的智能生活。"
        },
        {
          id: 3,
          imgSrc: require("./assets/images/part_img3.png"),
          text:
            "奥克斯空调深耕国内，布局全球。在坚守中创新，在创新中坚守，以创新科技为驱动力，创造有品质的产品。精选家享舒适、海外精选、商知冷暖、厨电精品、智慧家居五大板块匠心产品进行展示，提供多种智慧解决方案，满足不同领域不同用户需求，致力于让每一位用户以积极的态度面对生活，享受品质美好生活。"
        },
        {
          id: 4,
          imgSrc: require("./assets/images/part_img4.png"),
          text:
            "奥克斯集团斥资23.9亿元，打造全球领先智能工厂，实现塑胶、两器、钣金、电子、总装、物流全自动化生产线。累计获得专利5437件，专利申请量每年保持50%以上递增；压缩机多目标控制、励磁电流独立控制等多项技术国际领先；率先推出“互联网直卖空调”营销服务模式； 成为世界品牌的眼界视度，掌控全产业生态链的云上视度。"
        },
        {
          id: 5,
          imgSrc: require("./assets/images/part_img5.png"),
          text:
            "奥克斯坚持打造高颜值、高品质、高体验的空调，为消费者带去超高性价比的产品和优质服务。以100%的研发速度冲刺，布局稳健长远的发展战略，迈向全新的智能空调时代，加速实现“千亿市值、千亿规模、百亿利润”目标，打造世界级的空调品牌。"
        },
        {
          id: 6,
          imgSrc: require("./assets/images/part_img6.png"),
          text:
            "人对了，企业就对了。企去人则止，企高人为峰！奥克斯集团党委始终坚持以人为本，积极探索实施“人本党建”模式。30余年前3名党员艰苦创业，到30年后900多名党员引领企业转型发展，坚守初心传承、奥创光辉历程、铸就党建堡垒、荟聚招才引智、先锋服务引航、使命社会担当，带领奥克斯成为非公企业党建强、发展强的生动范本。"
        },
        {
          id: 7,
          imgSrc: require("./assets/images/part_img7.png")
        },
        {
          id: 8,
          imgSrc: require("./assets/images/part_img8.png"),
          text:
            "测试中心总面积5.8万余㎡，总投资4.2亿余元，拥有专业技术检测人员280余人，国内外先进检测设备、仪器300余套，覆盖产品性能、噪音、可靠性、应力、舒适性等实验，处于行业领先水平。本创研中心的实验室面积1.3万㎡，投资1亿元，由46个国际领先的专业检测室组成。"
        }
      ]
    };
  },
  mounted() {
    window.onload = () => {
      document.getElementById("page-loading").className = "hide";
      this.aniState = "running";
    };
  },
  methods: {
    onShowPart(params) {
      this.partKey = true;
      this.partId = params.id;
    },
    onHidePart() {
      this.partKey = false;
    }
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
@keyframes shine {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
#app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .boxSet();
  header {
    .boxSet(100%, 10%);
    background-image: url("./assets/images/header.png");
    background-size: 100%;
    background-repeat: no-repeat;
    animation: showHeader 0.5s ease-in-out;
  }
  main {
    position: relative;
    font-size: 0;
    .dial {
      position: absolute;
      .boxSet();
    }
    .part {
      .topLeft(@top:50%, @left:50%, @index: 20);
      transform: translate(-50%, -50%);
      width: 88%;
      padding: 6%;
      background-image: url("./assets/images/part_bg.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      ul {
        .boxSet();
        li {
          display: flex;
          flex-direction: column;
          align-items: center;
          .title {
            .boxSet(3.9rem, 0.72rem);
            background-image: url("./assets/images/part_title.png");
            background-size: 100%;
          }
          .img {
            position: relative;
            width: 100%;
            img {
              width: 100%;
              padding: 8%;
              background-image: url("./assets/images/part_frame.png");
              background-size: 100% 100%;
              background-repeat: no-repeat;
            }
          }
          .text {
            padding: 2% 4%;
            line-height: 0.32rem;
            .font(0.2rem, #fff);
          }
          &.content1 {
            .title {
              background-position: 0.2rem -0.2rem;
            }
          }
          &.content2 {
            .title {
              background-position: 0.2rem -1.12rem;
            }
          }
          &.content3 {
            .title {
              background-position: 0.2rem -2.04rem;
            }
          }
          &.content4 {
            .title {
              background-position: 0.2rem -2.96rem;
            }
          }
          &.content5 {
            .title {
              background-position: 0.2rem -3.88rem;
            }
          }
          &.content6 {
            .title {
              background-position: 0.2rem -4.68rem;
            }
          }
          &.content7 {
            .title {
              display: none;
            }
            .img {
              position: relative;
              img {
                padding: 0;
                background: none;
              }
              .icon {
                position: absolute;
                top: 0;
                right: .6rem;
                content: "";
                z-index: 22;
                .boxSet(1.6rem, .52rem);
                background-image: url("./assets/images/part_text.png");
                background-size: 230%;
                background-position: center -4.37rem;
                background-repeat: no-repeat;
              }
            }
          }
          &.content8 {
            .title {
              background-position: 0.2rem -5.36rem;
            }
          }
        }
      }
      .button {
        position: absolute;
        bottom: 0px;
        left: 50%;
        z-index: 21;
        transform: translate(-50%, 50%);
        .boxSet(0.8rem, 0.8rem);
        border-radius: 50%;
        background-image: url("./assets/images/other_icon.png");
        background-size: 100%;
        .button-bg {
          .boxSet();
          background-image: url("./assets/images/other_icon.png");
          background-position: 0 -0.8rem;
          background-size: 100%;
          animation: shine 1s linear infinite alternate;
        }
      }
    }
  }
  footer {
    width: 100%;
    height: 20%;
    padding: 0px 2%;
    ul {
      display: flex;
      justify-content: space-around;
      align-items: center;
      li {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .boxSet(1.08rem, 1.08rem);
        background-image: url("./assets/images/icon_sprite.png");
        background-size: 145%;
        background-repeat: no-repeat;
        background-position-x: center;
        &:after {
          content: "";
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translate(-50%, 0);
          background-image: url("./assets/images/footer_text.png");
          background-position-x: center;
        }
        &.router-link-active {
          transform: scale(1.15);
        }
        &:nth-of-type(1) {
          background-position-y: -11.04rem;
          &:after {
            .boxSet(2.4rem, 0.5rem);
            background-size: 100%;
            background-position-y: -0.2rem;
          }
          &.router-link-active {
            background-position-y: -13.14rem;
            &::after {
              background-position-y: -1.2rem;
            }
          }
        }
        &:nth-of-type(2) {
          background-position-y: -15.28rem;
          &:after {
            .boxSet(1.6rem, 0.5rem);
            background-size: 150%;
            background-position-y: -2.24rem;
          }
          &.router-link-active {
            background-position-y: -17.36rem;
            &:after {
              background-position-y: -3.24rem;
            }
          }
        }
        &:nth-of-type(3) {
          background-position-y: -19.48rem;
          &::after {
            display: none;
          }
          a {
            position: relative;
            .boxSet();
            &:after {
              content: "";
              position: absolute;
              top: 100%;
              left: 50%;
              transform: translate(-50%, 0);
              background-image: url("./assets/images/footer_text.png");
              background-position: center -4.12rem;
              .boxSet(1.6rem, 0.5rem);
              background-size: 145%;
            }
          }
        }
      }
    }
  }
}
</style>
