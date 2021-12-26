<style lang="scss">
.future {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  .future-title {
    font-size: 6rem;
    font-family: Source Han Sans SC;
    font-weight: bold;
    color: #000000;
    opacity: 0.96;
    background: linear-gradient(0deg, #f43b47 0%, #453a94 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .future-subtitle {
    font-size: 2rem;
    font-family: Source Han Sans SC;
    font-weight: bold;
    color: #e5004f;
  }
  .future-content {
    display: flex;
    flex-direction: row;
    align-items: center;

    .future-content-right {
      margin-left: 1rem;
      width: 40rem;
      height: 80rem;
      background-size: 100% 100%;
      background-image: url("/media/yintai/event-4.png");
    }

    .future-content-left {
      width: 40rem;
      height: 80rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      .future-content-left-subtitle {
        font-size: 1rem;
        font-family: Source Han Sans SC;
        font-weight: 500;
        color: #e5004f;
        line-height: 3rem;
      }
      .future-content-left-title {
        font-size: 2rem;
        font-family: Source Han Sans SC;
        font-weight: bold;
        color: #e5004f;
      }
      .future-content-left-introduction {
        font-size: 1.2rem;
        font-family: Source Han Sans SC;
        font-weight: 400;
        color: #717171;
        line-height: 1.5rem;
        text-indent: 2rem;
        margin-bottom: 3rem;
        margin-top: 3rem;
      }
      .future-content-left-item {
        display: flex;
        flex-direction: row;
        margin-top: 3rem;
        .future-content-left-item-left {
          // width: 155px;
          // height: 250px;
          // background: rgba(0, 0, 0, 0);
          // border: 3px solid #e5004f;
          // border-radius: 25px;
          .future-content-left-item-left-top {
            width: 9.9375rem;
            height: 7.375rem;
            background-color: #e5004f;
            border-radius: 1rem;
            // .future-content-left-item-left-top-title {
            //   display: inline-block;
            //   font-size: 1.5625rem;
            //   font-family: Source Han Sans SC;
            //   font-weight: 500;
            //   color: #ffffff;
            // }
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: flex-start;
            .future-content-left-item-left-top-text {
              font-size: 1.5625rem;
              font-family: Source Han Sans SC;
              font-weight: 500;
              color: #ffffff;
              display: inline-block;
              margin-top: 0.3rem;
            }
          }
          .future-content-left-item-left-bottom {
            width: 9.9375rem;
            height: 9.9375rem;
            background-color: white;
            border: #e5004f 0.1rem solid;
            border-radius: 1rem;
            margin-top: -4.5rem;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            .future-content-left-item-left-botto-logo {
              width: 60%;
              height: 60%;
              background-size: 100% 100%;
            }
          }
        }

        .future-content-left-item-right {
          margin-left: 1rem;
          font-size: 1.1875rem;
          font-family: Source Han Sans SC;
          font-weight: 400;
          color: #717171;
          line-height: 1.875rem;
        }
      }
      .future-content-left-line {
        width: 37.875rem;
        height: 0.125rem;
        background-color: #e5004f;
        margin-top: 3rem;
      }
    }
  }
}
</style>

<template>
  <div class="future">
    <!-- <div class="future-title">未来可期</div>
    <div class="future-subtitle">Collection of essential oi</div>
    <div class="future-content">
      <div class="future-content-left">
        <div class="future-content-left-subtitle">FUTURE GOALS</div>
        <div class="future-content-left-title">未来目标</div>
        <div class="future-content-left-introduction">
          2019年宣布，未来五年将再造一个银泰百货。“打造1000个坪效翻番的新零售品牌”“打造100个年销千万的新零售商品”“打造100个年薪百万的导购”，作为实现这一战略目标的抓手。
        </div>
        <div class="future-content-left-item">
          <div class="future-content-left-item-left">
            <div class="future-content-left-item-left-top">
              <span class="future-content-left-item-left-top-text"
                >新零售战略</span
              >
            </div>
            <div class="future-content-left-item-left-bottom">
              <div
                class="future-content-left-item-left-botto-logo"
                style="background-image: url('/media/yintai/event-1.png')"
              ></div>
            </div>
          </div>
          <div class="future-content-left-item-right">
            2017-2020年，银泰百货在由内到外的数字化转型升级过程中，呈现出高于行业的商业活力，以及与其他百货公司截然不同的成长动力。通过阿里商业操作系统的赋能，银泰正在系统重构人——数字化会员破千万、货——商品和品牌全面数字化、场——通过云计算提升运营效率、创新服务方式，成为领先的“新零售百货”。
          </div>
        </div>
        <div class="future-content-left-line"></div>

        <div class="future-content-left-item">
          <div class="future-content-left-item-left">
            <div class="future-content-left-item-left-top">
              <span class="future-content-left-item-left-top-text"
                >深层变化</span
              >
            </div>
            <div class="future-content-left-item-left-bottom">
              <div
                class="future-content-left-item-left-botto-logo"
                style="background-image: url('/media/yintai/event-2.png')"
              ></div>
            </div>
          </div>
          <div class="future-content-left-item-right">
            2017-2020年，银泰百货在由内到外的数字化转型升级过程中，呈现出高于行业的商业活力，以及与其他百货公司截然不同的成长动力。通过阿里商业操作系统的赋能，银泰正在系统重构人——数字化会员破千万、货——商品和品牌全面数字化、场——通过云计算提升运营效率、创新服务方式，成为领先的“新零售百货”。
          </div>
        </div>
        <div class="future-content-left-line"></div>
        <div class="future-content-left-item">
          <div class="future-content-left-item-left">
            <div class="future-content-left-item-left-top">
              <span class="future-content-left-item-left-top-text"
                >全面上云</span
              >
            </div>
            <div class="future-content-left-item-left-bottom">
              <div
                class="future-content-left-item-left-botto-logo"
                style="background-image: url('/media/yintai/event-3.png')"
              ></div>
            </div>
          </div>
          <div class="future-content-left-item-right">
            2017-2020年，银泰百货在由内到外的数字化转型升级过程中，呈现出高于行业的商业活力，以及与其他百货公司截然不同的成长动力。通过阿里商业操作系统的赋能，银泰正在系统重构人——数字化会员破千万、货——商品和品牌全面数字化、场——通过云计算提升运营效率、创新服务方式，成为领先的“新零售百货”。
          </div>
        </div>
      </div>
      <div class="future-content-right"></div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "future",
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
