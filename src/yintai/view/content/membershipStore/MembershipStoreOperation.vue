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
  font-family: "SourceHanSansSC-Normal";
  src: url("/media/yintai/font/SourceHanSansSC-Bold.otf") format("opentype");
}
@media screen and (min-width: 55rem) {
  .MembershipStoreOperation-container {
    margin-top: 5rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .MembershipStoreOperation {
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
          font-family: SourceHanSansSC-Medium;
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
            font-family:SourceHanSansSC-Bold;
            font-weight: bold;
            color: #7f7f7f;
          }
          .membershipbannercontent-item-span {
            text-align: left;
            font-size: 8px;
            font-family: Source Han Sans SC;
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
  .MembershipStoreOperation-container {
    margin-top: 5rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .MembershipStoreOperation {
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
          font-family: SourceHanSansSC-Medium;
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
            text-align: center;
            font-size: 8px;
            font-family: Source Han Sans SC;
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
  <div class="MembershipStoreOperation-container">
    <div class="MembershipStoreOperation">
      <div class="membershipbannercard-top">
        <div class="membershipbannercard-top-subtitle">
          All-round operation empowerment
        </div>
        <div class="membershipbannercard-top-title">全方位运营赋能</div>
        <div class="membershipbannercard-top-line"></div>
      </div>
      <div class="tip-container">
        <div class="tip-text">云店·以人为本的强运营</div>
      </div>
      <div class="membershipbannercontent-list">
        <div class="membershipbannercontent-list-item">
          <div
            class="membershipbannercontent-item-image"
            style="
              background-image: url('/media/yintai/cloudstore-operation-1.png');
            "
          ></div>
          <div class="membershipbannercontent-item-title">品牌货源</div>
        </div>
        <div class="membershipbannercontent-list-item">
          <div
            class="membershipbannercontent-item-image"
            style="
              background-image: url('/media/yintai/cloudstore-operation-2.png');
            "
          ></div>
          <div class="membershipbannercontent-item-title">产品培训</div>
        </div>
        <div class="membershipbannercontent-list-item">
          <div
            class="membershipbannercontent-item-image"
            style="
              background-image: url('/media/yintai/cloudstore-operation-3.png');
            "
          ></div>
          <div class="membershipbannercontent-item-title">销售技能</div>
        </div>
        <div class="membershipbannercontent-list-item">
          <div
            class="membershipbannercontent-item-image"
            style="
              background-image: url('/media/yintai/cloudstore-operation-4.png');
            "
          ></div>
          <div class="membershipbannercontent-item-title">美丽课堂</div>
        </div>
      </div>
      <div class="membershipbannercontent-list">
        <div class="membershipbannercontent-list-item">
          <div
            class="membershipbannercontent-item-image"
            style="
              background-image: url('/media/yintai/cloudstore-operation-5.png');
            "
          ></div>
          <div class="membershipbannercontent-item-title">社群营销</div>
        </div>
        <div class="membershipbannercontent-list-item">
          <div
            class="membershipbannercontent-item-image"
            style="
              background-image: url('/media/yintai/cloudstore-operation-6.png');
            "
          ></div>
          <div class="membershipbannercontent-item-title">顾客维护</div>
        </div>
        <div class="membershipbannercontent-list-item">
          <div
            class="membershipbannercontent-item-image"
            style="
              background-image: url('/media/yintai/cloudstore-operation-7.png');
            "
          ></div>
          <div class="membershipbannercontent-item-title">会员服务</div>
        </div>
        <div class="membershipbannercontent-list-item">
          <div
            class="membershipbannercontent-item-image"
            style="
              background-image: url('/media/yintai/cloudstore-operation-8.png');
            "
          ></div>
          <div class="membershipbannercontent-item-title">产研迭代</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MembershipStoreOperation",
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
