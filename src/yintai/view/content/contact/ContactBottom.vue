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
  font-family: "SourceHanSansCN-Heavy";
  src: url("/media/yintai/font/SourceHanSansCN-Heavy.otf") format("opentype");
}
@font-face {
  font-family: "SourceHanSansSC-Medium";
  src: url("/media/yintai/font/SourceHanSansCN-Medium.otf") format("opentype");
}

@media screen and (min-width: 55rem) {
  .contactBottomContainer {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
    .contactBottomContainer-list {
      width: 80%;
      max-width: 980px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      .contactBottomContainer-list-item-1 {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 30%;
        align-items: center;

        .contactBottomContainer-list-item-title {
          font-size: 1.8rem;
          font-family: SourceHanSansSC-Bold;
          font-weight: bold;
          color: #353535;
          text-align: center;
        }
        .contactBottomContainer-list-item-line-list {
          width: 40%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          height: 4rem;
          .contactBottomContainer-list-item-line-list-item {
            width: 30%;
            height: 0.3rem;
            background-color: #e5004f;
          }
        }
        .contactBottomContainer-list-item-block {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          align-items: center;
          .contactBottomContainer-list-item-block-email {
            width: 40%;
            height: 10rem;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            .email-icon {
              background-color: #ffffff;
              width: 8rem;
              height: 8rem;
              background-image: url("/media/yintai/contact-email.png");
              background-size: 100% 100%;
            }
            .email-title {
              font-size: 1rem;
              font-family: SourceHanSansSC-Medium;
              font-weight: 500;
              color: #333333;
            }
            .email-address {
              font-size: 0.8rem;
              font-family: SourceHanSansSC-Regular;
              font-weight: 400;
              color: #7f7f7f;
              line-height: 14px;
            }
          }
          .contactBottomContainer-list-item-block-report {
            width: 40%;
            height: 10rem;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            .report-icon {
              background-color: #ffffff;
              width: 8rem;
              height: 8rem;
              background-image: url("/media/yintai/contact-report.png");
              background-size: 100% 100%;
            }
            .report-title {
              font-size: 1rem;
              font-family: SourceHanSansSC-Medium;
              font-weight: 500;
              color: #333333;
            }
            .report-address {
              font-size: 0.8rem;
              font-family: SourceHanSansSC-Regular;
              font-weight: 400;
              color: #7f7f7f;
              line-height: 14px;
            }
          }
        }
      }
      .contactBottomContainer-list-item-2 {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 45%;
        align-items: center;

        .contactBottomContainer-list-item-title {
          font-size: 1.8rem;
          font-family: SourceHanSansSC-Bold;
          font-weight: bold;
          color: #353535;
          text-align: center;
        }
        .contactBottomContainer-list-item-line-list {
          width: 40%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          height: 4rem;
          .contactBottomContainer-list-item-line-list-item {
            width: 30%;
            height: 0.3rem;
            background-color: #e5004f;
          }
        }
        .contactBottomContainer-list-item-block {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          align-items: center;
          .contactBottomContainer-list-item-block-email {
            width: 40%;
            height: 10rem;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            .email-icon {
              background-color: #ffffff;
              width: 7rem;
              height: 7rem;
              background-image: url("/media/yintai/contact-qrcode.png");
              background-size: 100% 100%;
            }
            .email-title {
              font-size: 1rem;
              font-family: SourceHanSansSC-Medium;
              font-weight: 500;
              color: #333333;
            }
            .email-address {
              font-size: 0.8rem;
              font-family: SourceHanSansSC-Regular;
              font-weight: 400;
              color: #7f7f7f;
              line-height: 14px;
            }
          }
          .contactBottomContainer-list-item-block-report {
            width: 40%;
            height: 10rem;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            .report-icon {
              background-color: #ffffff;
              width: 7rem;
              height: 7rem;
              background-image: url("/media/yintai/contact-qrcode.png");
              background-size: 100% 100%;
            }
            .report-title {
              font-size: 1rem;
              font-family: SourceHanSansSC-Medium;
              font-weight: 500;
              color: #333333;
            }
            .report-address {
              font-size: 0.8rem;
              font-family: SourceHanSansSC-Regular;
              font-weight: 400;
              color: #7f7f7f;
              line-height: 14px;
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 55rem) {
  .contactBottomContainer {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
    .contactBottomContainer-list {
      width: 80%;
      max-width: 980px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .contactBottomContainer-list-item-1 {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 100%;
        align-items: center;

        .contactBottomContainer-list-item-title {
          font-size: 1.8rem;
          font-family: SourceHanSansSC-Bold;
          font-weight: bold;
          color: #353535;
          text-align: center;
        }
        .contactBottomContainer-list-item-line-list {
          width: 40%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          height: 4rem;
          .contactBottomContainer-list-item-line-list-item {
            width: 30%;
            height: 0.3rem;
            background-color: #e5004f;
          }
        }
        .contactBottomContainer-list-item-block {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          align-items: center;
          .contactBottomContainer-list-item-block-email {
            width: 40%;
            height: 10rem;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            .email-icon {
              background-color: #ffffff;
              width: 8rem;
              height: 8rem;
              background-image: url("/media/yintai/contact-email.png");
              background-size: 100% 100%;
            }
            .email-title {
              font-size: 1rem;
              font-family: SourceHanSansSC-Medium;
              font-weight: 500;
              color: #333333;
            }
            .email-address {
              font-size: 0.8rem;
              font-family: SourceHanSansSC-Regular;
              font-weight: 400;
              color: #7f7f7f;
              line-height: 14px;
            }
          }
          .contactBottomContainer-list-item-block-report {
            width: 40%;
            height: 10rem;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            .report-icon {
              background-color: #ffffff;
              width: 8rem;
              height: 8rem;
              background-image: url("/media/yintai/contact-report.png");
              background-size: 100% 100%;
            }
            .report-title {
              font-size: 1rem;
              font-family: SourceHanSansSC-Medium;
              font-weight: 500;
              color: #333333;
            }
            .report-address {
              font-size: 0.8rem;
              font-family: SourceHanSansSC-Regular;
              font-weight: 400;
              color: #7f7f7f;
              line-height: 14px;
            }
          }
        }
      }
      .contactBottomContainer-list-item-2 {
        margin-top: 5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 100%;
        align-items: center;

        .contactBottomContainer-list-item-title {
          font-size: 1.8rem;
          font-family: SourceHanSansSC-Bold;
          font-weight: bold;
          color: #353535;
          text-align: center;
        }
        .contactBottomContainer-list-item-line-list {
          width: 40%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          height: 4rem;
          .contactBottomContainer-list-item-line-list-item {
            width: 30%;
            height: 0.3rem;
            background-color: #e5004f;
          }
        }
        .contactBottomContainer-list-item-block {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          align-items: center;
          .contactBottomContainer-list-item-block-email {
            width: 40%;
            height: 10rem;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            .email-icon {
              background-color: #ffffff;
              width: 7rem;
              height: 7rem;
              background-image: url("/media/yintai/contact-qrcode.png");
              background-size: 100% 100%;
            }
            .email-title {
              font-size: 1rem;
              font-family: SourceHanSansSC-Medium;
              font-weight: 500;
              color: #333333;
            }
            .email-address {
              font-size: 0.8rem;
              font-family: SourceHanSansSC-Regular;
              font-weight: 400;
              color: #7f7f7f;
              line-height: 14px;
            }
          }
          .contactBottomContainer-list-item-block-report {
            width: 40%;
            height: 10rem;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            .report-icon {
              background-color: #ffffff;
              width: 7rem;
              height: 7rem;
              background-image: url("/media/yintai/contact-qrcode.png");
              background-size: 100% 100%;
            }
            .report-title {
              font-size: 1rem;
              font-family: SourceHanSansSC-Medium;
              font-weight: 500;
              color: #333333;
            }
            .report-address {
              font-size: 0.8rem;
              font-family: SourceHanSansSC-Regular;
              font-weight: 400;
              color: #7f7f7f;
              line-height: 14px;
            }
          }
        }
      }
    }
  }
}
</style>

<template>
  <div class="contactBottomContainer">
    <div class="contactBottomContainer-list">
      <div class="contactBottomContainer-list-item-1">
        <div class="contactBottomContainer-list-item-title">反馈与意见</div>
        <div class="contactBottomContainer-list-item-line-list">
          <div class="contactBottomContainer-list-item-line-list-item"></div>
          <div class="contactBottomContainer-list-item-line-list-item"></div>
          <div class="contactBottomContainer-list-item-line-list-item"></div>
        </div>
        <div class="contactBottomContainer-list-item-block">
          <div class="contactBottomContainer-list-item-block-email">
            <div class="email-icon"></div>
            <div class="email-title">邮箱</div>
            <div class="email-address">yj@intime.com.cn</div>
          </div>
          <div class="contactBottomContainer-list-item-block-report">
            <div class="report-icon"></div>
            <div class="report-title">举报</div>
            <div class="report-address">yj@intime.com.cn</div>
          </div>
        </div>
      </div>
      <div class="contactBottomContainer-list-item-2">
        <div class="contactBottomContainer-list-item-title">了解更多</div>
        <div class="contactBottomContainer-list-item-line-list">
          <div class="contactBottomContainer-list-item-line-list-item"></div>
          <div class="contactBottomContainer-list-item-line-list-item"></div>
          <div class="contactBottomContainer-list-item-line-list-item"></div>
        </div>
        <div class="contactBottomContainer-list-item-block">
          <div class="contactBottomContainer-list-item-block-email">
            <div
              class="email-icon"
              style="background-image: url('/media/yintai/qrcode3.png')"
            ></div>
            <div class="email-title">微博</div>
          </div>
          <div class="contactBottomContainer-list-item-block-report">
            <div
              class="report-icon"
              style="background-image: url('/media/yintai/qrcode4.png')"
            ></div>
            <div class="report-title">微信</div>
          </div>
          <div class="contactBottomContainer-list-item-block-report">
            <div
              class="report-icon"
              style="background-image: url('/media/yintai/qrcode1.png')"
            ></div>
            <div class="report-title">抖音</div>
          </div>
          <div class="contactBottomContainer-list-item-block-report">
            <div
              class="report-icon"
              style="background-image: url('/media/yintai/qrcode2.png')"
            ></div>
            <div class="report-title">小红书</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "contactBottomContainer",
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
