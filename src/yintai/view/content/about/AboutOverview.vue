<style lang="scss">
@font-face {
  font-family: "SourceHanSansCN-Bold";
  src: url("/media/yintai/font/SourceHanSansCN-Bold.otf") format("opentype");
}
@font-face {
  font-family: "SourceHanSansCN-Regular";
  src: url("/media/yintai/font/SourceHanSansCN-Regular.otf") format("opentype");
}
@font-face {
  font-family: "SourceHanSansCN-Heavy";
  src: url("/media/yintai/font/SourceHanSansCN-Heavy.otf") format("opentype");
}
@media screen and (min-width: 55rem) {
  .aboutoverview-container {
    margin-top: 5rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 35rem;
    .aboutoverview {
      width: 80%;
      max-width: 1080px;
      display: flex;
      flex-direction: row;
      justify-content: center;

      .aboutoverview-img {
        width: 40%;
        height: 90%;
        background-image: url("/media/yintai/about-1.png");
        background-size: cover;
      }
      .aboutoverview-text {
        width: 40%;
        height: 60%;
        margin-top: 5%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 3rem;
        .aboutoverview-tip {
          font-size: 1rem;
          font-family: SourceHanSansSC-Medium;
          font-weight: 500;
          color: #e5004f;
          line-height: 28px;
          text-transform: uppercase;
        }
        .aboutoverview-line {
          height: 0.1rem;
          width: 15rem;
          border-top: solid #e02b20 0.2rem;
          margin-top: 1rem;
          margin-left: -6rem;
        }
        .aboutoverview-title {
          font-size: 2rem;
          font-family: SourceHanSansSC-Regular;
          font-weight: 400;
          color: #333333;
        }
        .aboutoverview-line2 {
          width: 2rem;
          height: 0.2rem;
          margin-top: 1rem;
          margin-bottom: 1rem;
          background-color: #e5004f;
        }
        .aboutoverview-introduction {
          font-size: 1.1rem;
          font-family: SourceHanSansSC-Regular;
          font-weight: 400;
          color: #7f7f7f;
          line-height: 1.6rem;
        }
      }
    }
  }
}
@media screen and (max-width: 55rem) {
  .aboutoverview-container {
    margin-top: 2rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    .aboutoverview {
      width: 80%;
      max-width: 1080px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;

      .aboutoverview-img {
        width: 100%;
        height: 30rem;
        background-image: url("/media/yintai/about-1.png");
        background-size: cover;
      }
      .aboutoverview-text {
        width: 100%;
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        .aboutoverview-tip {
          font-size: 1rem;
          font-family: SourceHanSansSC-Medium;
          font-weight: 500;
          color: #e5004f;
          line-height: 28px;
          text-transform: uppercase;
        }
        .aboutoverview-line {
          height: 0.1rem;
          width: 15rem;
          border-top: solid #e02b20 0.2rem;
          margin-top: 0.6rem;
          margin-bottom: 0.4rem;
        }
        .aboutoverview-title {
          font-size: 2rem;
          font-family: SourceHanSansSC-Regular;
          font-weight: 400;
          color: #333333;
        }
        .aboutoverview-line2 {
          width: 2rem;
          height: 0.2rem;
          margin-top: 1rem;
          margin-bottom: 1rem;
          background-color: #e5004f;
        }
        .aboutoverview-introduction {
          font-size: 1.1rem;
          font-family: SourceHanSansCN-Regular;
          font-weight: 400;
          color: #7f7f7f;
          line-height: 1.4rem;
        }
      }
    }
  }
}
</style>

<template>
  <div class="aboutoverview-container">
    <div class="aboutoverview">
      <div class="aboutoverview-img"></div>
      <div class="aboutoverview-text">
        <div class="aboutoverview-tip">Intime Overview</div>
        <div class="aboutoverview-line"></div>
        <div class="aboutoverview-title">银泰</div>
        <div class="aboutoverview-line2"></div>
        <div class="aboutoverview-introduction">
          银泰商业（集团）有限公司成立于1998年，是一家全面架构在云上的互联网百货公司，位居中国百货零售业前列。
          银泰百货立足全国，以创新为血脉，线上线下齐头并进，以“让天下商场没有难做的生意”为使命，致力于成为大数据驱动的消费解决方案提供商。
          银泰商业作为阿里巴巴新零售战略中的重要一员，持续引领百货行业的新零售变革。通过“人、货、场”的数字化重构，实现会员通、商品通和服务通。
          银泰百货致力于建立数字化会员系统和全国首个百货业付费会员体系INTIME365，整合优化供应链，银泰创新新零售，推出喵街等多个互联网+产品，着力打造智能化新商场，开创了线上线下相融合的购物场景和营运模式。
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "aboutoverview",
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
