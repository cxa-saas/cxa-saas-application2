<style lang="scss">
@font-face {
  font-family: "SourceHanSansCN-Medium";
  src: url("/media/yintai/font/SourceHanSansSC-Medium.otf") format("opentype");
}
@font-face {
  font-family: "SourceHanSansCN-Bold";
  src: url("/media/yintai/font/SourceHanSansSC-Bold.otf") format("opentype");
}
@font-face {
  font-family: "SourceHanSansCN-Regular";
  src: url("/media/yintai/font/SourceHanSansSC-Bold.otf") format("opentype");
}

@media screen and (min-width: 55rem) {
  .ConsultIntroduction-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;

    .ConsultIntroduction {
      max-width: 1080px;
      width: 80%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      background-color: white;

      .ConsultIntroduction-top {
        width: 100%;
        height: 10rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        .ConsultIntroduction-top-subtitle {
          font-size: 1rem;
          font-family: SourceHanSansCN-Medium;
          font-weight: 500;
          color: #e5004f;
          line-height: 3.25rem;
          text-transform: uppercase;
        }
        .ConsultIntroduction-top-title {
          font-size: 2rem;
          font-family: SourceHanSansCN-Bold;
          font-weight: bold;
          color: #4b4b4b;
        }
        .ConsultIntroduction-top-line {
          width: 2rem;
          height: 0.25rem;
          background-color: #e5004f;
          margin-top: 1rem;
        }
      }
      .ConsultIntroduction-content {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        .ConsultIntroduction-content-brand {
          width: 100%;
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

@media screen and (max-width: 55rem) {
  .ConsultIntroduction-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;

    .ConsultIntroduction {
      max-width: 1080px;
      width: 80%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      background-color: white;

      .ConsultIntroduction-top {
        width: 100%;
        height: 10rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        .ConsultIntroduction-top-subtitle {
          font-size: 1rem;
          font-family: SourceHanSansCN-Medium;
          font-weight: 500;
          color: #e5004f;
          line-height: 3.25rem;
          text-transform: uppercase;
        }
        .ConsultIntroduction-top-title {
          font-size: 2rem;
          font-family: SourceHanSansCN-Bold;
          font-weight: bold;
          color: #4b4b4b;
        }
        .ConsultIntroduction-top-line {
          width: 2rem;
          height: 0.25rem;
          background-color: #e5004f;
          margin-top: 1rem;
        }
      }
      .ConsultIntroduction-content {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        .ConsultIntroduction-content-brand {
          width: 100%;
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
  <div class="ConsultIntroduction-container">
    <div class="ConsultIntroduction">
      <div class="ConsultIntroduction-top">
        <div class="ConsultIntroduction-top-subtitle">Introduction</div>
        <div class="ConsultIntroduction-top-title">简介</div>
        <div class="ConsultIntroduction-top-line"></div>
      </div>
      <div class="ConsultIntroduction-content">
        <div class="ConsultIntroduction-content-brand">
          杭州银泰百货有限公司是一家集百货、休闲、美食于一体的大型综合性百货公司。商场建筑面积5.1万平方米，营业面积2.72万平方米。周边有杭州大厦、杭州百货大楼等大型百货商店。宁波银泰定位中、高档，以年轻、时尚的都市白领和新型家庭为主力客层，力求走在潮流的尖端，及时传递最新的流行资讯。
          <br />
          本公司最新顾客调查结果显示：女性占62.3%，30周岁以下占71.8%，年轻白领已成为本公司的主要顾客。
          <br />
          银泰百货以“传递新的生活美学”为经营理念，内部管理科学、高效、机制灵活，人员精干、队伍年轻、平均素质高。经过三年多的努力，在杭州树立了良好的社会形象，得到了社会各界的广泛认同，日均客流量约为3万人次，周末达到7-8万人次，已成为杭州客流量最大的商场。2001年实现零售10.03亿元，居同类商场之首。
          <br />
          我们正成为一个：富有活力、勇于创新的现代化百货商场；充满都市时尚气息、聚集白领的时髦购物场所；能征善战、不断进取的后起之秀。
          <br />
          银泰百货立足全国，以创新为血脉，线上线下齐头并进，以“让天下商场没有难做的生意”为使命，致力于成为大数据驱动的消费解决方案提供商。
          <br />
          银泰百货作为阿里巴巴集团新零售八大纵队中的重要一员，持续引领百货行业的新零售变革。通过“人、货、场”的数字化重构，实现会员通、商品通和服务通。
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConsultIntroduction",
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
