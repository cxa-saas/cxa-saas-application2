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
  .membershipbrand-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;

    .membershipbrand {
      max-width: 1080px;
      width: 80%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      background-color: white;

      .membershipbannercard-top {
        width: 100%;
        height: 10rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        .membershipbannercard-top-subtitle {
          font-size: 1rem;
          font-family: SourceHanSansCN-Medium;
          font-weight: 500;
          color: #e5004f;
          line-height: 3.25rem;
          text-transform: uppercase;
        }
        .membershipbannercard-top-title {
          font-size: 2rem;
          font-family: SourceHanSansCN-Bold;
          font-weight: bold;
          color: #4b4b4b;
        }
        .membershipbannercard-top-line {
          width: 2rem;
          height: 0.25rem;
          background-color: #e5004f;
          margin-top: 1rem;
        }
      }
      .membershipbrand-content {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        margin-top: 5rem;
        .membershipbrand-content-subtitle {
          font-size: 1.5625rem;
          font-family: SourceHanSansSC-Bold;
          font-weight: bold;
          color: #7f7f7f;
        }
        .membershipbrand-content-brand {
          margin-top: 1rem;
          width: 80%;
          height: 40.125rem;
          background-size: 100% 100%;
          background-image: url("/media/yintai/membership-brand-1.png");
          border: 2px #ecc292 solid;
        }
        .membershipbrand-content-download {
          width: 16rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 5rem;
          margin-bottom: 5rem;
          .membershipbrand-content-qrcode {
            margin-top: 5rem;
            width: 16rem;
            height: 16rem;
            background-size: 100% 100%;
            background-image: url("/media/yintai/membership-brand-2.png");
            margin-bottom: 1rem;
          }
          .membershipbrand-content-text {
            font-size: 1.2rem;
            font-family: SourceHanSansCN-Regular;
            font-weight: 400;
            color: #333333;
            line-height: 1.9375rem;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 55rem) {
  .membershipbrand-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .membershipbrand {
      width: 80%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      background-color: white;
      margin-top: 2rem;

      .membershipbannercard-top {
        width: 100%;
        height: 10rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        .membershipbannercard-top-subtitle {
          font-size: 1rem;
          font-family: SourceHanSansCN-Medium;
          font-weight: 500;
          color: #e5004f;
          line-height: 3.25rem;
          text-transform: uppercase;
        }
        .membershipbannercard-top-title {
          font-size: 2rem;
          font-family: SourceHanSansCN-Bold;
          font-weight: bold;
          color: #4b4b4b;
        }
        .membershipbannercard-top-line {
          width: 2rem;
          height: 0.25rem;
          background-color: #e5004f;
          margin-top: 1rem;
        }
      }
      .membershipbrand-content {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        margin-top: 2rem;
        .membershipbrand-content-subtitle {
          font-size: 1.5625rem;
          font-family:SourceHanSansSC-Bold;
          font-weight: bold;
          color: #7f7f7f;
        }
        .membershipbrand-content-brand {
          margin-top: 1rem;
          width: 120%;
          height: 25.125rem;
          background-size: 100% 100%;
          background-image: url("/media/yintai/membership-brand-1.png");
          border: 2px #ecc292 solid;
        }
        .membershipbrand-content-download {
          width: 16rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 5rem;
          .membershipbrand-content-qrcode {
            width: 16rem;
            height: 16rem;
            background-size: 100% 100%;
            background-image: url("/media/yintai/membership-brand-2.png");
            margin-bottom: 1rem;
          }
          .membershipbrand-content-text {
            font-size: 1rem;
            font-family:SourceHanSansCN-Regular;
            font-weight: 400;
            color: #333333;
            line-height: 1.9375rem;
          }
        }
      }
    }
  }
}
</style>

<template>
  <div class="membershipbrand-container">
    <div class="membershipbrand">
      <div class="membershipbannercard-top">
        <div class="membershipbannercard-top-subtitle">COVERING THE BRAND</div>
        <div class="membershipbannercard-top-title">覆盖品牌</div>
        <div class="membershipbannercard-top-line"></div>
      </div>
      <div class="membershipbrand-content">
        <div class="membershipbrand-content-subtitle">
          62家门店 14000+专柜尊享
        </div>
        <div class="membershipbrand-content-brand"></div>
        <div class="membershipbrand-content-download">
          <div class="membershipbrand-content-qrcode"></div>
          <div class="membershipbrand-content-text">下载喵街app</div>
          <div class="membershipbrand-content-text">绑定银泰会员</div>
          <div class="membershipbrand-content-text">即刻体验</div>
          <div class="membershipbrand-content-text" >INTIME365</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "membershipbrand",
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
