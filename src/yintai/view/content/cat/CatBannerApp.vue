<style lang="scss">
@font-face {
  font-family: "SourceHanSansCN-Bold";
  src: url("/media/yintai/font/SourceHanSansCN-Bold.otf") format("opentype");
}
@media screen and (min-width: 55rem) {
  .catbannerapp {
    margin-top: 5rem;
    width: 100%;
    height: 22rem;
    background-image: url("/media/yintai/cat-7.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: top left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .context {
      height: 80%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      width: 23rem;
      margin-left: 20%;
      .cattitle {
        font-size: 1.6rem;
        font-family: "SourceHanSansCN-Bold";
        font-weight: bold;
        color: #ffffff;
        line-height: 30px;
      }
      .catdetail {
        margin-top: 1rem;
        width: 1.8rem;
        height: 1px;
        margin-bottom: 1rem;
        background-color: #ffffff;
      }
      .detail {
        width: 100%;
        font-size: 1.2rem;
        font-family: Source Han Sans SC;
        color: #ffffff;
      }
    }
  }
}
@media screen and (max-width: 55rem) {
  .catbannerapp {
    margin-top: 5rem;
    width: 100%;
    height: 25rem;
    background-image: url("/media/yintai/cat-7.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 32% 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .context {
      height: 80%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      width: 23rem;
      margin-left: 20%;
      .cattitle {
        font-size: 2.4rem;
        color: #fff;
        font-weight: bold;
        font-family: SourceHanSansSC-Regular;
      }
      .catdetail {
        margin-top: 1rem;
        width: 1.8rem;
        height: 1px;
        margin-bottom: 1rem;
        background-color: #ffffff;
      }
      .detail {
        width: 100%;
        font-size: 1.2rem;
        font-family: Source Han Sans SC;
        color: #ffffff;
      }
    }
  }
}
</style>

<template>
  <div class="catbannerapp">
    <div class="context">
      <div class="cattitle">喵 街 A P P</div>
      <div class="catdetail"></div>
      <div class="detail">
        是银泰专柜好货线上购物平台 足不出户享受银泰专柜正品
        大牌、尖货、潮品、轻奢 全方位满足消费者购物需求
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
