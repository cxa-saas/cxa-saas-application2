<style lang="scss">
@font-face {
  font-family: "SourceHanSansCN-Medium";
  src: url("/media/yintai/font/SourceHanSansSC-Medium.otf") format("opentype");
}
@font-face {
  font-family: "SourceHanSansCN-Bold";
  src: url("/media/yintai/font/SourceHanSansSC-Bold.otf") format("opentype");
}
@media screen and (min-width: 55rem) {
  .ConsultGuide-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 10rem;
    height: 40rem;
    position: relative;
    .ConsultGuide-content-bg {
      position: absolute;
      left: 0%;
      top: 35%;
      width: 100%;
      height: 20rem;
      background-image: url("/media/yintai/consult-2.png");
      z-index: 2;
    }

    .ConsultGuide {
      max-width: 1080px;
      width: 80%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      z-index: 10;

      .ConsultGuide-top {
        width: 100%;
        height: 10rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        .ConsultGuide-top-subtitle {
          font-size: 1rem;
          font-family: SourceHanSansCN-Medium;
          font-weight: 500;
          color: #e5004f;
          line-height: 3.25rem;
          text-transform: uppercase;
        }
        .ConsultGuide-top-title {
          font-size: 2rem;
          font-family: SourceHanSansCN-Bold;
          font-weight: bold;
          color: #4b4b4b;
        }
        .ConsultGuide-top-line {
          width: 2rem;
          height: 0.25rem;
          background-color: #e5004f;
          margin-top: 1rem;
        }
      }
      .ConsultGuide-content {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 40rem;

        .guide-list {
          width: 80%;
          height: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          .guide-item {
            width: 30%;
            height: 100%;
            background-color: #fff;
            border-radius: 1rem;
            box-shadow: 0px 2px 4px rgb(0 0 0 / 10%);
            display: flex;
            flex-direction: column;
            align-items: center;
            .guide-item-logo {
              margin-top: 1rem;
              background-color: #e5004f;
              width: 5rem;
              height: 5rem;
              border-radius: 50%;
              font-size: 17px;
              font-family: Source Han Sans SC;
              font-weight: 400;
              color: #ffffff;
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              .guide-item-logo-a {
                font-size: 36px;
                font-family: SourceHanSansSC-Regular;
                font-weight: 700;
                color: #ffffff;
              }
              .guide-item-logo-b {
                font-size: 17px;
                font-family: SourceHanSansSC-Regular;
                font-weight: 400;
                color: #ffffff;
                margin-top: 1rem;
              }
            }
            .guide-item-title {
              margin-top: 1rem;
              margin-bottom: 1rem;
              font-size: 1.6rem;
              font-family: SourceHanSansSC-Regular;
              font-weight: 400;
              color: #4b4b4b;
            }
            .guide-item-span-list {
              display: flex;
              flex-direction: column;
              width: 80%;
              align-items: flex-start;
              .guide-item-span-item {
                width: 100%;
                height: 3.6rem;
                display: flex;
                flex-direction: row;
                .guide-item-span-item-left {
                  width: 30%;
                  height: 100%;
                  font-size: 1rem;
                  font-family: Source Han Sans SC;
                  font-weight: 500;
                  color: #4b4b4b;
                  margin-top: -0.4rem;
                }
                .guide-item-span-item-right {
                  width: 70%;
                  display: flex;
                  flex-direction: column;
                  height: 100%;
                  .guide-item-span-item-right-top {
                    font-size: 1rem;
                    font-family: Source Han Sans SC;
                    font-weight: 500;
                    color: #4b4b4b;
                    line-height: 11px;
                  }
                  .guide-item-span-item-right-bottom {
                    margin-top: 0.6rem;
                    font-size: 0.6rem;
                    font-family: Source Han Sans SC;
                    font-weight: 500;
                    color: #7f7f7f;
                    line-height: 11px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 55rem) {
  .ConsultGuide-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 10rem;
    position: relative;
    .ConsultGuide-content-bg {
      // position: absolute;
      // left: 0%;
      // top: 35%;
      // width: 100%;
      // height: 20rem;
      // background-image: url("/media/yintai/consult-2.png");
      // z-index: 2;

      display: none;

    }

    .ConsultGuide {
      max-width: 1080px;
      width: 80%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      z-index: 10;

      .ConsultGuide-top {
        width: 100%;
        height: 10rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        .ConsultGuide-top-subtitle {
          font-size: 1rem;
          font-family: SourceHanSansCN-Medium;
          font-weight: 500;
          color: #e5004f;
          line-height: 3.25rem;
          text-transform: uppercase;
        }
        .ConsultGuide-top-title {
          font-size: 2rem;
          font-family: SourceHanSansCN-Bold;
          font-weight: bold;
          color: #4b4b4b;
        }
        .ConsultGuide-top-line {
          width: 2rem;
          height: 0.25rem;
          background-color: #e5004f;
          margin-top: 1rem;
        }
      }
      .ConsultGuide-content {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .guide-list {
          width: 80%;
          height: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          .guide-item {
            margin-top: 5rem;
            width: 30%;
            height: 100%;
            background-color: #fff;
            border-radius: 1rem;
            box-shadow: 0px 2px 4px rgb(0 0 0 / 10%);
            display: flex;
            flex-direction: column;
            align-items: center;
            .guide-item-logo {
              margin-top: 1rem;
              background-color: #e5004f;
              width: 5rem;
              height: 5rem;
              border-radius: 50%;
              font-size: 17px;
              font-family: Source Han Sans SC;
              font-weight: 400;
              color: #ffffff;
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              .guide-item-logo-a {
                font-size: 36px;
                font-family: SourceHanSansSC-Regular;
                font-weight: 700;
                color: #ffffff;
              }
              .guide-item-logo-b {
                font-size: 17px;
                font-family: SourceHanSansSC-RegularC;
                font-weight: 400;
                color: #ffffff;
                margin-top: 1rem;
              }
            }
            .guide-item-title {
              margin-top: 1rem;
              margin-bottom: 1rem;
              font-size: 1.6rem;
              font-family: SourceHanSansSC-Regular;
              font-weight: 400;
              color: #4b4b4b;
            }
            .guide-item-span-list {
              display: flex;
              flex-direction: column;
              width: 80%;
              align-items: flex-start;
              .guide-item-span-item {
                width: 100%;
                height: 3.6rem;
                display: flex;
                flex-direction: row;
                .guide-item-span-item-left {
                  width: 30%;
                  height: 100%;
                  font-size: 1rem;
                  font-family: Source Han Sans SC;
                  font-weight: 500;
                  color: #4b4b4b;
                  margin-top: -0.4rem;
                }
                .guide-item-span-item-right {
                  width: 70%;
                  display: flex;
                  flex-direction: column;
                  height: 100%;
                  .guide-item-span-item-right-top {
                    font-size: 1rem;
                    font-family: Source Han Sans SC;
                    font-weight: 500;
                    color: #4b4b4b;
                    line-height: 11px;
                  }
                  .guide-item-span-item-right-bottom {
                    margin-top: 0.6rem;
                    font-size: 0.6rem;
                    font-family: Source Han Sans SC;
                    font-weight: 500;
                    color: #7f7f7f;
                    line-height: 11px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>

<template>
  <div class="ConsultGuide-container">
    <div class="ConsultGuide-content-bg"></div>
    <div class="ConsultGuide">
      <div class="ConsultGuide-top">
        <div class="ConsultGuide-top-subtitle">Floor guide</div>
        <div class="ConsultGuide-top-title">楼层指南</div>
        <div class="ConsultGuide-top-line"></div>
      </div>
      <div class="ConsultGuide-content">
        <div class="row guide-list">
          <div class="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 guide-item">
            <div class="guide-item-logo">
              <div class="guide-item-logo-a">A</div>
              <div class="guide-item-logo-b">馆</div>
            </div>
            <div class="guide-item-title">武林店</div>
            <div class="guide-item-span-list">
              <div class="guide-item-span-item">
                <div class="guide-item-span-item-left">BF</div>
                <div class="guide-item-span-item-right">
                  <div class="guide-item-span-item-right-top">履程·魅力</div>
                  <div class="guide-item-span-item-right-bottom">女鞋/烘焙</div>
                </div>
              </div>
              <div class="guide-item-span-item">
                <div class="guide-item-span-item-left">BF</div>
                <div class="guide-item-span-item-right">
                  <div class="guide-item-span-item-right-top">履程·魅力</div>
                  <div class="guide-item-span-item-right-bottom">女鞋/烘焙</div>
                </div>
              </div>
              <div class="guide-item-span-item">
                <div class="guide-item-span-item-left">BF</div>
                <div class="guide-item-span-item-right">
                  <div class="guide-item-span-item-right-top">履程·魅力</div>
                  <div class="guide-item-span-item-right-bottom">女鞋/烘焙</div>
                </div>
              </div>
              <div class="guide-item-span-item">
                <div class="guide-item-span-item-left">BF</div>
                <div class="guide-item-span-item-right">
                  <div class="guide-item-span-item-right-top">履程·魅力</div>
                  <div class="guide-item-span-item-right-bottom">女鞋/烘焙</div>
                </div>
              </div>
              <div class="guide-item-span-item">
                <div class="guide-item-span-item-left">BF</div>
                <div class="guide-item-span-item-right">
                  <div class="guide-item-span-item-right-top">履程·魅力</div>
                  <div class="guide-item-span-item-right-bottom">女鞋/烘焙</div>
                </div>
              </div>
              <div class="guide-item-span-item">
                <div class="guide-item-span-item-left">BF</div>
                <div class="guide-item-span-item-right">
                  <div class="guide-item-span-item-right-top">履程·魅力</div>
                  <div class="guide-item-span-item-right-bottom">女鞋/烘焙</div>
                </div>
              </div>
              <div class="guide-item-span-item">
                <div class="guide-item-span-item-left">BF</div>
                <div class="guide-item-span-item-right">
                  <div class="guide-item-span-item-right-top">履程·魅力</div>
                  <div class="guide-item-span-item-right-bottom">女鞋/烘焙</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 guide-item">
            <div class="guide-item-logo">
              <div class="guide-item-logo-a">B</div>
              <div class="guide-item-logo-b">馆</div>
            </div>
            <div class="guide-item-title">武林店</div>
            <div class="guide-item-span-list">
              <div class="guide-item-span-item">
                <div class="guide-item-span-item-left">BF</div>
                <div class="guide-item-span-item-right">
                  <div class="guide-item-span-item-right-top">履程·魅力</div>
                  <div class="guide-item-span-item-right-bottom">女鞋/烘焙</div>
                </div>
              </div>
              <div class="guide-item-span-item">
                <div class="guide-item-span-item-left">BF</div>
                <div class="guide-item-span-item-right">
                  <div class="guide-item-span-item-right-top">履程·魅力</div>
                  <div class="guide-item-span-item-right-bottom">女鞋/烘焙</div>
                </div>
              </div>
              <div class="guide-item-span-item">
                <div class="guide-item-span-item-left">BF</div>
                <div class="guide-item-span-item-right">
                  <div class="guide-item-span-item-right-top">履程·魅力</div>
                  <div class="guide-item-span-item-right-bottom">女鞋/烘焙</div>
                </div>
              </div>
              <div class="guide-item-span-item">
                <div class="guide-item-span-item-left">BF</div>
                <div class="guide-item-span-item-right">
                  <div class="guide-item-span-item-right-top">履程·魅力</div>
                  <div class="guide-item-span-item-right-bottom">女鞋/烘焙</div>
                </div>
              </div>
              <div class="guide-item-span-item">
                <div class="guide-item-span-item-left">BF</div>
                <div class="guide-item-span-item-right">
                  <div class="guide-item-span-item-right-top">履程·魅力</div>
                  <div class="guide-item-span-item-right-bottom">女鞋/烘焙</div>
                </div>
              </div>
              <div class="guide-item-span-item">
                <div class="guide-item-span-item-left">BF</div>
                <div class="guide-item-span-item-right">
                  <div class="guide-item-span-item-right-top">履程·魅力</div>
                  <div class="guide-item-span-item-right-bottom">女鞋/烘焙</div>
                </div>
              </div>
              <div class="guide-item-span-item">
                <div class="guide-item-span-item-left">BF</div>
                <div class="guide-item-span-item-right">
                  <div class="guide-item-span-item-right-top">履程·魅力</div>
                  <div class="guide-item-span-item-right-bottom">女鞋/烘焙</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 guide-item">
            <div class="guide-item-logo">
              <div class="guide-item-logo-a">C</div>
              <div class="guide-item-logo-b">馆</div>
            </div>
            <div class="guide-item-title">武林店</div>
            <div class="guide-item-span-list">
              <div class="guide-item-span-item">
                <div class="guide-item-span-item-left">BF</div>
                <div class="guide-item-span-item-right">
                  <div class="guide-item-span-item-right-top">履程·魅力</div>
                  <div class="guide-item-span-item-right-bottom">女鞋/烘焙</div>
                </div>
              </div>
              <div class="guide-item-span-item">
                <div class="guide-item-span-item-left">BF</div>
                <div class="guide-item-span-item-right">
                  <div class="guide-item-span-item-right-top">履程·魅力</div>
                  <div class="guide-item-span-item-right-bottom">女鞋/烘焙</div>
                </div>
              </div>
              <div class="guide-item-span-item">
                <div class="guide-item-span-item-left">BF</div>
                <div class="guide-item-span-item-right">
                  <div class="guide-item-span-item-right-top">履程·魅力</div>
                  <div class="guide-item-span-item-right-bottom">女鞋/烘焙</div>
                </div>
              </div>
              <div class="guide-item-span-item">
                <div class="guide-item-span-item-left">BF</div>
                <div class="guide-item-span-item-right">
                  <div class="guide-item-span-item-right-top">履程·魅力</div>
                  <div class="guide-item-span-item-right-bottom">女鞋/烘焙</div>
                </div>
              </div>
              <div class="guide-item-span-item">
                <div class="guide-item-span-item-left">BF</div>
                <div class="guide-item-span-item-right">
                  <div class="guide-item-span-item-right-top">履程·魅力</div>
                  <div class="guide-item-span-item-right-bottom">女鞋/烘焙</div>
                </div>
              </div>
              <div class="guide-item-span-item">
                <div class="guide-item-span-item-left">BF</div>
                <div class="guide-item-span-item-right">
                  <div class="guide-item-span-item-right-top">履程·魅力</div>
                  <div class="guide-item-span-item-right-bottom">女鞋/烘焙</div>
                </div>
              </div>
              <div class="guide-item-span-item">
                <div class="guide-item-span-item-left">BF</div>
                <div class="guide-item-span-item-right">
                  <div class="guide-item-span-item-right-top">履程·魅力</div>
                  <div class="guide-item-span-item-right-bottom">女鞋/烘焙</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConsultGuide",
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
