
<style lang="scss">
@font-face {
  font-family: "SourceHanSansCN-Regular";
  src: url("/media/yintai/font/SourceHanSansCN-Regular.otf") format("opentype");
}
@media screen and (min-width: 55rem) {
  .catcontent {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 10rem;
    margin-bottom: 10rem;
    .catcontent-container {
      width: 65%;
      max-width: 680px;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      .catcontent-text {
        font-size: 14px;
        font-family: SourceHanSansCN-Regular;
        font-weight: 400;
        color: #7f7f7f;
        line-height: 23px;
        text-align: center;
      }
    }
  }
}

@media screen and (max-width: 55rem) {
  .catcontent {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 10rem;
    margin-bottom: 10rem;
    .catcontent-container {
      width: 65%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      .catcontent-text {
        font-size: 1rem;
        font-family: SourceHanSansCN-Regular;
        font-weight: 400;
        color: #7f7f7f;
        line-height: 23px;
        text-align: center;
      }
    }
  }
}
</style>

<template>
  <div class="catcontent">
    <div class="catcontent-container">
      <div class="catcontent-text">
        不止于卖货，为品牌提供品牌宣传、整合营销和内容营销阵地；
      </div>
      <div class="catcontent-text">
        创造具有潮流调性的高品质和高转化内容，并被消费者喜爱和传播；
      </div>
      <div class="catcontent-text">
        通过一站式体验服务（品牌+银泰），提升消费者消费品质；
      </div>
      <div class="catcontent-text">
        增强用户粘性和消费体感，形成对于银泰及品牌的强心智；
      </div>
      <div class="catcontent-text">
        截至2020年9月，银泰百货数字化会员突破2000万。
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "aboutBanner3",
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
