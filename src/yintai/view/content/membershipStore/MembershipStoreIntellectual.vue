<style lang="scss">
@font-face {
  font-family: "SourceHanSansCN-Medium";
  src: url("/media/yintai/font/SourceHanSansSC-Medium.otf") format("opentype");
}
@font-face {
  font-family: "SourceHanSansSC-Normal";
  src: url("/media/yintai/font/SourceHanSansSC-Normal.otf") format("opentype");
}

@font-face {
  font-family: "SourceHanSansCN-Bold";
  src: url("/media/yintai/font/SourceHanSansSC-Bold.otf") format("opentype");
}
@media screen and (min-width: 55rem) {
  .MembershipStoreIntellectual-container {
    margin-top: 5rem;

    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    .MembershipStoreIntellectual {
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
        width: 30%;
        .membershipbannercontent-list-item {
          display: flex;
          flex-direction: column;
          align-items: center;

          .membershipbannercontent-item-title {
            font-size: 14px;
            font-family: SourceHanSansSC-Bold;
            font-weight: bold;
            color: #7f7f7f;
            margin-top: 1rem;
            margin-bottom: 0.4rem;
          }

          .membershipbannercontent-item-span {
            font-size: 8px;
            font-family: SourceHanSansSC-Normal;
            font-weight: 400;
            color: #7f7f7f;
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
      .membershipbannercontent-list-2 {
        margin-top: 5rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 50%;
        .membershipbannercontent-list-item {
          display: flex;
          flex-direction: column;
          align-items: center;

          .membershipbannercontent-item-title {
            font-size: 14px;
            font-family: SourceHanSansSC-Bold;
            font-weight: bold;
            color: #7f7f7f;
            margin-top: 1rem;
            margin-bottom: 0.4rem;
          }

          .membershipbannercontent-item-span {
            font-size: 8px;
            font-family: SourceHanSansSC-Normal;
            font-weight: 400;
            color: #7f7f7f;
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
  .MembershipStoreIntellectual-container {
    margin-top: 5rem;

    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    .MembershipStoreIntellectual {
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
        margin-top: 2rem;
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
            font-size: 14px;
            font-family: SourceHanSansSC-Bold;
            font-weight: bold;
            color: #7f7f7f;
            margin-top: 1rem;
            margin-bottom: 0.4rem;
          }

          .membershipbannercontent-item-span {
            font-size: 8px;
            font-family: SourceHanSansSC-Normal;
            font-weight: 400;
            color: #7f7f7f;
          }

          .membershipbannercontent-item-image {
            width: 4rem;
            height: 4rem;
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
      .membershipbannercontent-list-2 {
        margin-top: 2rem;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: flex-start;

        width: 100%;
        .membershipbannercontent-list-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          .membershipbannercontent-item-title {
            font-size: 14px;
            font-family: SourceHanSansSC-Bold;
            font-weight: bold;
            color: #7f7f7f;
            margin-top: 1rem;
            margin-bottom: 0.4rem;
          }

          .membershipbannercontent-item-span {
            width: 5rem;
            font-size: 8px;
            font-family: SourceHanSansSC-Normal;
            font-weight: 400;
            color: #7f7f7f;
            text-align: center;
          }

          .membershipbannercontent-item-image {
            width: 4rem;
            height: 4rem;
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
  <div class="MembershipStoreIntellectual-container">
    <div class="MembershipStoreIntellectual">
      <div class="membershipbannercard-top">
        <div class="membershipbannercard-top-subtitle">
          Continuous intellectual support
        </div>
        <div class="membershipbannercard-top-title">持续的智力支持</div>
        <div class="membershipbannercard-top-line"></div>
      </div>
      <div class="tip-container">
        <div class="tip-text">
          云店·依托大数据为顾客提供消费解决方案，打造数字化实体店
        </div>
      </div>

      <div class="membershipbannercontent-list">
        <div class="membershipbannercontent-list-item">
          <div class="membershipbannercontent-item-image"></div>
          <div
            class="membershipbannercontent-item-title"
            style="margin-top: 1rem"
          >
            购物折扣
          </div>
          <div class="membershipbannercontent-item-span">购物享折上9折</div>
        </div>
        <div class="membershipbannercontent-list-item">
          <div
            class="membershipbannercontent-item-image"
            style="
              background-image: url('/media/yintai/cloudstore-intellectual-2.png');
            "
          ></div>
          <div
            class="membershipbannercontent-item-title"
            style="margin-top: 1rem"
          >
            365福利包
          </div>
          <div class="membershipbannercontent-item-span">每月1-8日</div>
        </div>
      </div>
      <div class="membershipbannercontent-list-2">
        <div class="membershipbannercontent-list-item">
          <div
            class="membershipbannercontent-item-image"
            style="
              background-image: url('/media/yintai/cloudstore-intellectual-3.png');
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
        </div>
        <div class="membershipbannercontent-list-item">
          <div
            class="membershipbannercontent-item-image"
            style="
              background-image: url('/media/yintai/cloudstore-intellectual-4.png');
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
        </div>
        <div class="membershipbannercontent-list-item">
          <div
            class="membershipbannercontent-item-image"
            style="
              background-image: url('/media/yintai/cloudstore-intellectual-5.png');
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
  name: "MembershipStoreIntellectual",
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
