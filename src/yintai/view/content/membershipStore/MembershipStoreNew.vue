<style lang="scss">
@font-face {
  font-family: "SourceHanSansCN-Regular";
  src: url("/media/yintai/font/SourceHanSansCN-Regular.otf") format("opentype");
}
@font-face {
  font-family: "SourceHanSansCN-Medium";
  src: url("/media/yintai/font/SourceHanSansSC-Medium.otf") format("opentype");
}
@font-face {
  font-family: "SourceHanSansCN-Bold";
  src: url("/media/yintai/font/SourceHanSansSC-Bold.otf") format("opentype");
}
@media screen and (min-width: 55rem) {
  .membershipstorenew-container {
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

      .membershipbannercontent-list {
        margin-top: 5rem;
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
            font-size: 1.3125rem;
            font-family: SourceHanSansCN-Bold;
            font-weight: 500;
            color: #4b4b4b;
            line-height: 1.5625rem;
            margin-top: 1rem;
            margin-bottom: 1rem;
          }
          .membershipbannercontent-item-span {
            font-size: 10px;
            font-family: SourceHanSansSC-Regular;
            font-weight: 400;
            color: #7f7f7f;
            line-height: 17px;
            width: 150px;
          }
          .membershipbannercontent-item {
            width: 6rem;
            height: 6rem;
            background-image: url("/media/yintai/membership-6.png");
            background-size: 100% 100%;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 55rem) {
  .membershipstorenew-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
    .membershipbannerright {
      width: 80%;
      display: flex;
      flex-direction: column;
      align-items: center;

      .membershipbannercontent-list {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        .membershipbannercontent-list-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          .membershipbannercontent-item-title {
            font-size: 1.3125rem;
            font-family: SourceHanSansCN-Bold;
            font-weight: 500;
            color: #4b4b4b;
            line-height: 1.5625rem;
            margin-top: 1rem;
            margin-bottom: 1rem;
          }
          .membershipbannercontent-item-span {
            font-size: 1rem;
            font-family: SourceHanSansCN-Regular;
            font-weight: 400;
            color: #7f7f7f;
            line-height: 17px;
            width: 121px;
            height: 7rem;

            // font-size: 1rem;
            // font-family: Source Han Sans SC;
            // font-weight: 400;
            // color: #0d131a;
          }
          .membershipbannercontent-item {
            width: 5rem;
            height: 5rem;
            background-image: url("/media/yintai/membership-6.png");
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
  <div class="membershipstorenew-container">
    <div class="membershipbannerright">
      <div class="membershipbannercontent-list">
        <div class="container">
          <div class="row">
            <div
              class="
                col-6 col-sm-6 col-md-3 col-lg-3
                membershipbannercontent-list-item
              "
            >
              <div
                class="membershipbannercontent-item"
                style="
                  background-image: url('/media/yintai//cloudstore-new-1.png');
                "
              ></div>
              <div class="membershipbannercontent-item-title">新工具</div>
              <div class="membershipbannercontent-item-span">
                银泰加入阿里巴巴经济体以来，在新零售上进行的实践和探索
              </div>
            </div>
            <div
              class="
                col-6 col-sm-6 col-md-3 col-lg-3
                membershipbannercontent-list-item
              "
            >
              <div
                class="membershipbannercontent-item"
                style="
                  background-image: url('/media/yintai//cloudstore-new-2.png');
                "
              ></div>
              <div class="membershipbannercontent-item-title">新方法</div>
              <div class="membershipbannercontent-item-span">
                以大数据为驱动来解决下沉市场因商品力分布不均而出现的购物难的问题
              </div>
            </div>
            <div
              class="
                col-6 col-sm-6 col-md-3 col-lg-3
                membershipbannercontent-list-item
              "
            >
              <div
                class="membershipbannercontent-item"
                style="
                  background-image: url('/media/yintai/cloudstore-new-3.png');
                "
              ></div>
              <div class="membershipbannercontent-item-title">新模式</div>
              <div class="membershipbannercontent-item-span">
                云货架、导购员、 实体空间的固定模块 快速落地在多个不同场景
              </div>
            </div>
            <div
              class="
                col-6 col-sm-6 col-md-3 col-lg-3
                membershipbannercontent-list-item
              "
            >
              <div
                class="membershipbannercontent-item"
                style="
                  background-image: url('/media/yintai/cloudstore-new-4.png');
                "
              ></div>
              <div class="membershipbannercontent-item-title">新体系</div>
              <div class="membershipbannercontent-item-span">
                前瞻性地创造了完整的顾客消费心智教育体系
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
  name: "membershipstorenew",
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
