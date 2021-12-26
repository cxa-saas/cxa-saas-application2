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
  font-family: "SourceHanSansCN-Bold";
  src: url("/media/yintai/font/SourceHanSansCN-Bold.otf") format("opentype");
}

@font-face {
  font-family: "SourceHanSansCN-Medium";
  src: url("/media/yintai/font/SourceHanSansCN-Medium.otf") format("opentype");
}
@media screen and (min-width: 55rem) {
  .consultcards {
    margin-top: 5rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    .consultcards-container {
      width: 80%;
      max-width: 1080px;
      .cards-item {
        margin-left: 2rem;
        width: 2rem;
        height: 20rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        border-radius: 1rem;
        box-shadow: 0px 2px 4px rgb(0 0 0 / 10%);
        .cards-item-conatiner {
          width: 80%;
          height: 80%;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;

          .cards-item-logo {
            width: 4rem;
            height: 4rem;
            background-image: url("/media/yintai/consult-4.png");
            background-size: 100% 100%;
          }
          .cards-item-title {
            font-size: 1.2rem;
            font-family: SourceHanSansSC-Medium;
            font-weight: 500;
            color: #333333;
            margin-top: 1rem;
            margin-bottom: 1rem;
          }
          .cards-item-span {
            font-size: 1rem;
            font-family: SourceHanSansSC-Regular;
            font-weight: 400;
            color: #7f7f7f;
            line-height: 1.4rem;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 55rem) {
  .consultcards {
    margin-top: 5rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    .consultcards-container {
      width: 80%;
      max-width: 1080px;
      .cards-item {
        width: 2rem;
        height: 20rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        border-radius: 1rem;
        box-shadow: 0px 2px 4px rgb(0 0 0 / 10%);
        margin-top: 2rem;
        .cards-item-conatiner {
          width: 80%;
          height: 80%;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;

          .cards-item-logo {
            width: 4rem;
            height: 4rem;
            background-image: url("/media/yintai/consult-4.png");
            background-size: 100% 100%;
          }
          .cards-item-title {
            font-size: 1.2rem;
            font-family: SourceHanSansSC-Medium;
            font-weight: 500;
            color: #333333;
            margin-top: 1rem;
            margin-bottom: 1rem;
          }
          .cards-item-span {
            font-size: 1rem;
            font-family: SourceHanSansSC-Regular;
            font-weight: 400;
            color: #7f7f7f;
            line-height: 1.4rem;
          }
        }
      }
    }
  }
}
</style>

<template>
  <div class="consultcards">
    <div class="consultcards-container">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 cards-item">
            <div class="cards-item-conatiner">
              <div class="cards-item-logo"></div>
              <div class="cards-item-title">营业时间</div>
              <div class="cards-item-span">周一-周四：10:00 至 22:00</div>
              <div class="cards-item-span">周五：10:00 至 22:30</div>
              <div class="cards-item-span">周六：9:30 至 22:30</div>
              <div class="cards-item-span">周日：9:30 至 22:00</div>
            </div>
          </div>
          <div class="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 cards-item">
            <div class="cards-item-conatiner">
              <div
                class="cards-item-logo"
                style="background-image: url('/media/yintai/consult-5.png')"
              ></div>
              <div class="cards-item-title">配套设施</div>
              <div class="cards-item-span">星巴克咖啡馆</div>
              <div class="cards-item-span">COSTA咖啡</div>
              <div class="cards-item-span">纤指绘美甲沙龙</div>
              <div class="cards-item-span">服装织补、裁剪</div>
              <div class="cards-item-span">九楼风味美食城</div>
              <div class="cards-item-span">面包新语</div>
            </div>
          </div>
          <div class="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 cards-item">
            <div class="cards-item-conatiner">
              <div
                class="cards-item-logo"
                style="background-image: url('/media/yintai/consult-6.png');"
              ></div>
              <div class="cards-item-title">联系方式</div>
              <div class="cards-item-span">地址：杭州市延安路530号</div>
              <div class="cards-item-span">邮编：310006</div>
              <div class="cards-item-span">总机：0571-85069888</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "consult-card",
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
