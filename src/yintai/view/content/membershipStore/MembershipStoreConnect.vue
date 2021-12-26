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
  font-family: "SourceHanSansSC-Regular";
  src: url("/media/yintai/font/SourceHanSansSC-Regular.otf") format("opentype");
}

@media screen and (min-width: 55rem) {
  .MembershipStoreConnect-container {
    margin-top: 5rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .MembershipStoreConnect {
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
          font-family: SourceHanSansSC-Bold;
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
      .membershipbrand-content-download {
        width: 16rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 5rem;
        .membershipbrand-content-qrcode {
          margin-top: 5rem;
          width: 16rem;
          height: 16rem;
          background-size: 100% 100%;
          background-image: url("/media/yintai/cloudstore-download-1.png");
          margin-bottom: 1rem;
        }
        .membershipbrand-content-text {
          font-size: 1.4rem;
          font-family: SourceHanSansSC-Regular;
          font-weight: 400;
          color: #7f7f7f;
          line-height: 33px;
        }
      }
    }
  }
}

@media screen and (max-width: 55rem) {
  .MembershipStoreConnect-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .MembershipStoreConnect {
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
          font-family: SourceHanSansSC-Bold;
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
      .membershipbrand-content-download {
        width: 16rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 5rem;
        .membershipbrand-content-qrcode {
          margin-top: 5rem;
          width: 16rem;
          height: 16rem;
          background-size: 100% 100%;
          background-image: url("/media/yintai/cloudstore-download-1.png");
          margin-bottom: 1rem;
        }
        .membershipbrand-content-text {
          font-size: 1.4rem;
          font-family: SourceHanSansSC-Regular;
          font-weight: 400;
          color: #7f7f7f;
          line-height: 33px;
        }
      }
    }
  }
}
</style>

<template>
  <div class="MembershipStoreConnect-container">
    <div class="MembershipStoreConnect">
      <div class="membershipbannercard-top">
        <div class="membershipbannercard-top-subtitle">Connect with us</div>
        <div class="membershipbannercard-top-title">关注我们</div>
        <div class="membershipbannercard-top-line"></div>
      </div>
      <div class="membershipbrand-content-download">
        <div class="membershipbrand-content-qrcode"></div>
        <div class="membershipbrand-content-text">
          {{ "扫码关注 了解更多" }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MembershipStoreConnect",
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
