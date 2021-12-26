<style lang="scss">
@font-face {
  font-family: "SourceHanSansCN-Heavy";
  src: url("/media/yintai/font/SourceHanSansCN-Heavy.otf") format("opentype");
}
@font-face {
  font-family: "SourceHanSansCN-Regular";
  src: url("/media/yintai/font/SourceHanSansCN-Regular.otf") format("opentype");
}
@font-face {
  font-family: "SourceHanSansCN-Medium";
  src: url("/media/yintai/font/SourceHanSansCN-Medium.otf") format("opentype");
}
@font-face {
  font-family: "SourceHanSansCN-Bold";
  src: url("/media/yintai/font/SourceHanSansCN-Bold.otf") format("opentype");
}
@media screen and (min-width: 55rem) {
  .SchoolIntroduction-container {
    margin-top: 5rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    .SchoolIntroduction {
      width: 80%;
      max-width: 1080px;
      display: flex;
      flex-direction: row;
      justify-content: center;

      .SchoolIntroduction-img {
        width: 40%;
        height: 90%;
        background-image: url("/media/yintai/school-2.png");
        background-size: cover;
      }
      .SchoolIntroduction-text {
        width: 40%;
        margin-top: 5%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 2rem;
        .SchoolIntroduction-tip {
          font-size: 0.8rem;
          font-family: SourceHanSansCN-Medium;
          font-weight: 500;
          color: #e5004f;
          line-height: 28px;
          text-transform: uppercase;
        }
        .SchoolIntroduction-title {
          font-size: 1.4rem;
          font-family: SourceHanSansCN-Bold;
          font-weight: 400;
          color: #333333;
        }
        .SchoolIntroduction-line2 {
          width: 2rem;
          height: 0.2rem;
          margin-top: 0.8rem;
          margin-bottom: 0.8rem;
          background-color: #e5004f;
        }
        .SchoolIntroduction-introduction {
          font-size: 1rem;
          font-family: SourceHanSansCN-Regular;
          font-weight: 400;
          color: #7f7f7f;
          line-height: 1.8rem;
        }
      }
    }
  }
}
@media screen and (max-width: 55rem) {
  .SchoolIntroduction-container {
    margin-top: 5rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    .SchoolIntroduction {
      width: 80%;
      max-width: 1080px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .SchoolIntroduction-img {
        width: 100%;
        height: 25rem;
        background-image: url("/media/yintai/school-2.png");
        background-size:cover;
        background-position: center center;
        
      }
      .SchoolIntroduction-text {
        width: 100%;
        margin-top: 5%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        .SchoolIntroduction-tip {
          font-size: 0.8rem;
          font-family: SourceHanSansCN-Medium;
          font-weight: 500;
          color: #e5004f;
          line-height: 28px;
          text-transform: uppercase;
        }
        .SchoolIntroduction-line {
          height: 0.1rem;
          width: 15rem;
          border-top: solid #e02b20 0.2rem;
          margin-top: 1rem;
          margin-left: -6rem;
        }
        .SchoolIntroduction-title {
          font-size: 1.4rem;
          font-family: SourceHanSansCN-Bold;
          font-weight: 400;
          color: #333333;
        }
        .SchoolIntroduction-line2 {
          width: 2rem;
          height: 0.4rem;
          margin-top: 1rem;
          margin-bottom: 1rem;
          background-color: #e5004f;
        }
        .SchoolIntroduction-introduction {
          font-size: 1rem;
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
  <div class="SchoolIntroduction-container">
    <div class="SchoolIntroduction">
      <div class="SchoolIntroduction-img"></div>
      <div class="SchoolIntroduction-text">
        <div class="SchoolIntroduction-tip">Group Introduction</div>
        <div class="SchoolIntroduction-title">集团介绍</div>
        <div class="SchoolIntroduction-line2"></div>
        <div class="SchoolIntroduction-introduction">
          银泰商业（集团）有限公司「银泰商业」于1998年成立，是一家以百货零售、购物中心和互联网+为核心的大型商业连锁集团，旗下拥有65家门店，营业面积、经营业绩和业务创新能力皆位居中国零售业前茅。银泰商业立足全国，以“让天下没有难做的生意”为使命，以成为大数据驱动的消费解决方案提供商为愿景。银泰商业作为阿里巴巴新零售战略中的重要一员，引领百货行业的新零售重构——通过“人、货、场”的数字化重构，实现会员通、商品通和服务通。银泰商业致力于建立数字化会员系统和全国首个百货业付费会员体INTIME365，整合优化供应链，银泰创新新零售，着力打造智能化新商场，开创了线上线下相融合的购物场景和营运模式。
          <br />
          <br />
          银泰从传统百货到互联网商场，完成了自我的颠覆。在银泰百货数字化改造两年间，最为业内津津乐道的便是其对“人、货、场”的数字化改造，重构人货场链路。而数字化改造也为银泰带来销售额大幅度提升，银泰百货2020年美妆类目诞生了13个全球第一柜，18个全国第一柜。
          银接未来，泰而不凡，银泰百货2022届校园招聘正式启动，加入INTIME，一起智造新零售。
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SchoolIntroduction",
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
