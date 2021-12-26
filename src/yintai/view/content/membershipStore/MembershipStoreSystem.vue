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
  src: url("/media/yintai/font/SourceHanSansSC-Regular.otf") format("opentype");
}


@media screen and (min-width: 55rem) {
  .MembershipStoreSystem-container {
    margin-top: 5rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .MembershipStoreSystem {
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
      .tip-container {
        width: 100%;
        max-width: 1080px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-content: center;
        .tip-text {
          font-size: 1.6rem;
          font-family: SourceHanSansSC-Bold;
          font-weight: bold;
          color: #7f7f7f;
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
            margin-top: 1rem;
            margin-bottom: 1rem;
            font-size: 1.2rem;
            font-family: SourceHanSansSC-Bold;
            font-weight: bold;
            color: #7f7f7f;
          }
          .membershipbannercontent-item-span {
            text-align: left;
            font-size: 0.8rem;
            font-family: SourceHanSansSC-Regular;
            font-weight: 400;
            color: #7f7f7f;
            line-height: 15px;
          }
          .membershipbannercontent-item-image {
            width: 6rem;
            height: 6rem;
            border-radius: 50%;
            border: #ecc292 0.2rem solid;
            background-image: url("/media/yintai/cloudstore-intellectual-1.png");
            background-size: 60% 60%;
            background-position: center;
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
  .MembershipStoreSystem-container {
    margin-top: 5rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .MembershipStoreSystem {
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
      .tip-container {
        width: 100%;
        max-width: 1080px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-content: center;
        .tip-text {
          font-size: 1.6rem;
          font-family: SourceHanSansSC-Bold;
          font-weight: bold;
          color: #7f7f7f;
        }
      }
      .membershipbannercontent-list {
        margin-top: 5rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        width: 100%;
        .membershipbannercontent-list-item {
          display: flex;
          flex-direction: column;
          align-items: center;

          .membershipbannercontent-item-title {
            margin-top: 1rem;
            margin-bottom: 1rem;
            font-size: 1.2rem;
            font-family: SourceHanSansSC-Bold;
            font-weight: bold;
            color: #7f7f7f;
          }
          .membershipbannercontent-item-span {
            width: 5rem;
            text-align: center;
            font-size: 0.8rem;
            font-family: SourceHanSansSC-Regular;
            font-weight: 400;
            color: #7f7f7f;
            line-height: 15px;
          }
          .membershipbannercontent-item-image {
            width: 6rem;
            height: 6rem;
            border-radius: 50%;
            border: #ecc292 0.2rem solid;
            background-image: url("/media/yintai/cloudstore-intellectual-1.png");
            background-size: 60% 60%;
            background-position: center;
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
  <div class="MembershipStoreSystem-container">
    <div class="MembershipStoreSystem">
      <div class="membershipbannercard-top">
        <div class="membershipbannercard-top-subtitle">
          Perfect supply chain & logistics system
        </div>
        <div class="membershipbannercard-top-title">完善的供应链&物流体系</div>
        <div class="membershipbannercard-top-line"></div>
      </div>
      <div class="tip-container">
        <div class="tip-text">云店·顾客消费的放心店</div>
      </div>
      <div class="membershipbannercontent-list">
        <div class="membershipbannercontent-list-item">
          <div
            class="membershipbannercontent-item-image"
            style="
              background-image: url('/media/yintai/cloudstore-system-1.png');
            "
          ></div>
          <div class="membershipbannercontent-item-title">品牌货源</div>
          <div class="membershipbannercontent-item-span">货源有保障</div>
          <div class="membershipbannercontent-item-span">商品可溯源</div>
          <div class="membershipbannercontent-item-span">银泰&开元供应链</div>
        </div>
        <div class="membershipbannercontent-list-item">
          <div
            class="membershipbannercontent-item-image"
            style="
              background-image: url('/media/yintai/cloudstore-system-2.png');
            "
          ></div>
          <div class="membershipbannercontent-item-title">价格优势</div>
          <div class="membershipbannercontent-item-span">整合优化供货端</div>
          <div class="membershipbannercontent-item-span">好东西，不贵</div>
          <div class="membershipbannercontent-item-span">100元积分可抵1元</div>
        </div>
        <div class="membershipbannercontent-list-item">
          <div
            class="membershipbannercontent-item-image"
            style="
              background-image: url('/media/yintai/cloudstore-system-3.png');
            "
          ></div>
          <div class="membershipbannercontent-item-title">阿里体系</div>
          <div class="membershipbannercontent-item-span">携手菜鸟联盟</div>
          <div class="membershipbannercontent-item-span">
            与阿里物流体系打通
          </div>
          <div class="membershipbannercontent-item-span">
            订单实时同步到大仓
          </div>
        </div>
        <div class="membershipbannercontent-list-item">
          <div
            class="membershipbannercontent-item-image"
            style="
              background-image: url('/media/yintai/cloudstore-system-4.png');
            "
          ></div>
          <div class="membershipbannercontent-item-title">极速物流</div>
          <div class="membershipbannercontent-item-span">全国包邮</div>
          <div class="membershipbannercontent-item-span">定时达</div>
          <div class="membershipbannercontent-item-span">
            365会员延迟发货赔付
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MembershipStoreSystem",
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
