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
  .membershipbannerright-container {
    margin-top: 5rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .membershipbannerright {
      max-width: 1080px;
      width: 80%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      background-color: white;
      height: 25rem;

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
      .membershipbannercontent-list {
        margin-top: 5rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 50%;
        height: 10rem;
        .membershipbannercontent-list-item {
          display: flex;
          flex-direction: column;
          align-items: center;

          .membershipbannercontent-item-title {
            font-size: 1.3125rem;
            font-family: SourceHanSansSC-Medium;
            font-weight: 500;
            color: #333333;
            line-height: 1.5625rem;
            margin-top: 1rem;
            margin-bottom: 1rem;
          }
          .membershipbannercontent-item-span {
            font-size: 1rem;
            font-family: SourceHanSansSC-Regular;
            font-weight: 400;
            color: #0d131a;
          }
          .membershipbannercontent-item-qrcode {
            width: 6rem;
            height: 6rem;
            background-image: url("/media/yintai/membership-6.png");
            background-size: 100% 100%;
          }
          .membershipbannercontent-item-mobile {
            width: 6rem;
            height: 6rem;
            background-image: url("/media/yintai/membership-7.png");
            background-size: 100% 100%;
          }
          .membershipbannercontent-item-gift {
            width: 6rem;
            height: 6rem;
            background-image: url("/media/yintai/membership-8.png");
            background-size: 100% 100%;
          }
        }
        .membershipbannercontent-icon {
          width: 2rem;
          height: 2rem;
          background-image: url("/media/yintai/membership-left.png");
          background-size: 100% 100%;
        }
      }
    }
  }
}

@media screen and (max-width: 55rem) {
  .membershipbannerright-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .membershipbannerright {
      width: 80%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      background-color: white;
      height: 25rem;

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
      .membershipbannercontent-list {
        margin-top: 2rem;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: 10rem;
        .membershipbannercontent-list-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          .membershipbannercontent-item-title {
            font-size: 1.3125rem;
            font-family: SourceHanSansSC-Medium;
            font-weight: 500;
            color: #333333;
            line-height: 1.5625rem;
            margin-top: 1rem;
            margin-bottom: 1rem;
          }
          .membershipbannercontent-item-span {
            font-size: 1rem;
            font-family: SourceHanSansSC-Regular;
            font-weight: 400;
            color: #333333;
            line-height: 1.9375rem;

            // font-size: 1rem;
            // font-family: Source Han Sans SC;
            // font-weight: 400;
            // color: #0d131a;
          }
          .membershipbannercontent-item-qrcode {
            width: 5rem;
            height: 5rem;
            background-image: url("/media/yintai/membership-6.png");
            background-size: 100% 100%;
          }
          .membershipbannercontent-item-mobile {
            width: 5rem;
            height: 5rem;
            background-image: url("/media/yintai/membership-7.png");
            background-size: 100% 100%;
          }
          .membershipbannercontent-item-gift {
            width: 5rem;
            height: 5rem;
            background-image: url("/media/yintai/membership-8.png");
            background-size: 100% 100%;
          }
        }
        .membershipbannercontent-icon {
          width: 2rem;
          height: 2rem;
          background-image: url("/media/yintai/membership-left.png");
          background-size: 100% 100%;
        }
      }
    }
  }
}
</style>

<template>
  <div class="membershipbannerright-container">
    <div class="membershipbannerright">
      <div class="membershipbannercard-top">
        <div class="membershipbannercard-top-subtitle">
          Intime member rights
        </div>
        <div class="membershipbannercard-top-title">银泰会员权益</div>
        <div class="membershipbannercard-top-line"></div>
      </div>
      <div class="membershipbannercontent-list">
        <div class="membershipbannercontent-list-item">
          <div class="membershipbannercontent-item-qrcode"></div>
          <div class="membershipbannercontent-item-title">购物积分</div>
          <div class="membershipbannercontent-item-span">积分当钱花</div>
          <div class="membershipbannercontent-item-span">100元积分可抵1元</div>
        </div>
        <!-- <div class="membershipbannercontent-icon"></div> -->
        <div class="membershipbannercontent-list-item">
          <div class="membershipbannercontent-item-mobile"></div>
          <div class="membershipbannercontent-item-title">退货无忧</div>
          <div class="membershipbannercontent-item-span">60天无理由退换货</div>
          <div class="membershipbannercontent-item-span">支持异店退换</div>
        </div>
        <!-- <div class="membershipbannercontent-icon"></div> -->
        <div
          class="membershipbannercontent-list-item"
          style="margin-left: 1.5rem"
        >
          <div class="membershipbannercontent-item-gift"></div>
          <div class="membershipbannercontent-item-title">暖心服务</div>
          <div class="membershipbannercontent-item-span">免费租借</div>
          <div class="membershipbannercontent-item-span">免费包装</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "membershipbannerright",
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
