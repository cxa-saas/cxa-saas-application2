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
  .membershipbenefit-container {
    margin-top: 5rem;

    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    .membershipbenefit {
      width: 80%;
      max-width: 1080px;
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
      .membershipbannercontent-list {
        margin-top: 5rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 80%;
        .membershipbannercontent-list-item {
          display: flex;
          flex-direction: column;
          align-items: center;

          .membershipbannercontent-item-title {
            font-size: 1.3125rem;
            font-family: Source Han Sans SC;
            font-weight: 500;
            color: #333333;
            line-height: 1.5625rem;
            margin-top: 1rem;
            margin-bottom: 1rem;
          }

          .membershipbannercontent-item-span {
            font-size: 1rem;
            font-family: Source Han Sans SC;
            font-weight: 400;
            color: #0d131a;
          }

          .membershipbannercontent-item-qrcode {
            width: 6rem;
            height: 6rem;
            background-image: url("/media/yintai/membershipcard-1.png");
            background-size: 100% 100%;
          }
          .membershipbannercontent-item-mobile {
            width: 6rem;
            height: 6rem;
            background-image: url("/media/yintai/membershipcard-2.png");
            background-size: 100% 100%;
          }
          .membershipbannercontent-item-gift {
            width: 6rem;
            height: 6rem;
            background-image: url("/media/yintai/membershipcard-3.png");
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
      .membershipbannercontent-list-2 {
        margin-top: 5rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 60%;
        .membershipbannercontent-list-item {
          display: flex;
          flex-direction: column;
          align-items: center;

          .membershipbannercontent-item-title {
            font-size: 1.3125rem;
            font-family: Source Han Sans SC;
            font-weight: 500;
            color: #333333;
            line-height: 1.5625rem;
            margin-top: 1rem;
            margin-bottom: 1rem;
          }

          .membershipbannercontent-item-span {
            font-size: 1rem;
            font-family: Source Han Sans SC;
            font-weight: 400;
            color: #0d131a;
          }

          .membershipbannercontent-item-qrcode {
            width: 6rem;
            height: 6rem;
            background-image: url("/media/yintai/membershipcard-1.png");
            background-size: 100% 100%;
          }
          .membershipbannercontent-item-mobile {
            width: 6rem;
            height: 6rem;
            background-image: url("/media/yintai/membershipcard-2.png");
            background-size: 100% 100%;
          }
          .membershipbannercontent-item-gift {
            width: 6rem;
            height: 6rem;
            background-image: url("/media/yintai/membershipcard-3.png");
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
  .membershipbenefit-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    margin-top: 2rem;
    .membershipbenefit {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      background-color: white;
      .membershipbannercard-top {
        width: 80%;
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
      .membershipbannercontent-list {
        margin-top: 3rem;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width: 80%;
        .membershipbannercontent-list-item {
          display: flex;
          flex-direction: column;
          align-items: center;

          .membershipbannercontent-item-title {
            font-size: 1rem;
            font-family: Source Han Sans SC;
            font-weight: 500;
            color: #333333;
            line-height: 1.5625rem;
            margin-top: 1rem;
            margin-bottom: 1rem;
          }

          .membershipbannercontent-item-span {
            display: none;
            // font-size: 1rem;
            // font-family: Source Han Sans SC;
            // font-weight: 400;
            // color: #0d131a;
          }

          .membershipbannercontent-item-qrcode {
            width: 5rem;
            height: 5rem;
            background-image: url("/media/yintai/membershipcard-1.png");
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
      .membershipbannercontent-list-2 {
        margin-top: 1rem;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width: 60%;
        .membershipbannercontent-list-item {
          display: flex;
          flex-direction: column;
          align-items: center;

          .membershipbannercontent-item-title {
            font-size: 1rem;
            font-family: Source Han Sans SC;
            font-weight: 500;
            color: #333333;
            line-height: 1.5625rem;
            margin-top: 1rem;
            margin-bottom: 1rem;
          }

          .membershipbannercontent-item-span {
            // font-size: 1rem;
            // font-family: Source Han Sans SC;
            // font-weight: 400;
            // color: #0d131a;
            display: none;
          }

          .membershipbannercontent-item-qrcode {
            width: 5rem;
            height: 5rem;
            background-image: url("/media/yintai/membershipcard-1.png");
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
  <div class="membershipbenefit-container">
    <div class="membershipbenefit">
      <div class="membershipbannercard-top">
        <div class="membershipbannercard-top-subtitle">
          INTIME365 MEMBERSHIP BENEFITS
        </div>
        <div class="membershipbannercard-top-title">INTIME365会员权益</div>
        <div class="membershipbannercard-top-line"></div>
      </div>
      <div class="membershipbannercontent-list">
        <div class="membershipbannercontent-list-item">
          <div
            class="membershipbannercontent-item-qrcode"
            style="
              background-image: url('/media/yintai/membership-benefit-1.png');
            "
          ></div>
          <div
            class="membershipbannercontent-item-title"
            style="margin-top: 1rem"
          >
            购物折扣
          </div>
          <div class="membershipbannercontent-item-span">购物享折上9折</div>
          <div class="membershipbannercontent-item-span">
            （黄金珠宝等个别品类折上9.8折)
          </div>
        </div>
        <div class="membershipbannercontent-list-item">
          <div
            class="membershipbannercontent-item-qrcode"
            style="
              background-image: url('/media/yintai/membership-benefit-2.png');
            "
          ></div>
          <div
            class="membershipbannercontent-item-title"
            style="margin-top: 1rem"
          >
            365福利包
          </div>
          <div class="membershipbannercontent-item-span">每月1-8日</div>
          <div class="membershipbannercontent-item-span">可领130元优惠劵</div>
        </div>
        <!-- <div class="membershipbannercontent-icon"></div> -->
        <div class="membershipbannercontent-list-item">
          <div
            class="membershipbannercontent-item-qrcode"
            style="
              background-image: url('/media/yintai/membership-benefit-3.png');
            "
          ></div>
          <div
            class="membershipbannercontent-item-title"
            style="margin-top: 1rem"
          >
            365小金库
          </div>
          <div class="membershipbannercontent-item-span">
            订单消费返利可兑换权益
          </div>
        </div>
        <div class="membershipbannercontent-list-item">
          <div
            class="membershipbannercontent-item-qrcode"
            style="
              background-image: url('/media/yintai/membership-benefit-4.png');
            "
          ></div>

          <div
            class="membershipbannercontent-item-title"
            style="margin-top: 1rem"
          >
            专享商品
          </div>
          <div class="membershipbannercontent-item-span">
            定期推出仅供365会员
          </div>
          <div class="membershipbannercontent-item-span">
            购买的精选超值商品
          </div>
        </div>
      </div>
      <div class="membershipbannercontent-list-2">
        <div class="membershipbannercontent-list-item">
          <div
            class="membershipbannercontent-item-qrcode"
            style="
              background-image: url('/media/yintai/membership-benefit-5.png');
            "
          ></div>

          <div
            class="membershipbannercontent-item-title"
            style="margin-top: 1rem"
          >
            会员洗衣
          </div>
          <div class="membershipbannercontent-item-span">
            购买洗衣服务享受5折优惠
          </div>
          <div class="membershipbannercontent-item-span">（特殊商品除外）</div>
        </div>
        <div class="membershipbannercontent-list-item">
          <div
            class="membershipbannercontent-item-qrcode"
            style="
              background-image: url('/media/yintai/membership-benefit-6.png');
            "
          ></div>
          <div
            class="membershipbannercontent-item-title"
            style="margin-top: 1rem"
          >
            会员洗车
          </div>
          <div class="membershipbannercontent-item-span">
            购买洗车服务享受5折优惠
          </div>
          <div class="membershipbannercontent-item-span">（特殊商品除外）</div>
        </div>
        <!-- <div class="membershipbannercontent-icon"></div> -->
        <div class="membershipbannercontent-list-item">
          <div
            class="membershipbannercontent-item-qrcode"
            style="
              background-image: url('/media/yintai/membership-benefit-7.png');
            "
          ></div>
          <div
            class="membershipbannercontent-item-title"
            style="margin-top: 1rem"
          >
            会员停车
          </div>
          <div class="membershipbannercontent-item-span">停车享受9折优惠</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "membershipbenefit",
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
