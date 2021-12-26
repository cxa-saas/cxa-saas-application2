<style lang="scss">
@media screen and (min-width: 55rem) {
  .catlogo {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .catlogo-top {
      width: 100%;
      height: 20rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .catlog-top-logo {
        width: 7rem;
        height: 7rem;
        background-image: url("/media/yintai/cat-2.png");
        background-size: 100% 100%;
        border: 1px solid white;
        border-radius: 0.3rem;
        box-shadow: 0px 1px 1px 0px #cccccc;
      }
      .catlog-top-title {
        font-size: 1.93rem;
        font-family: Source Han Sans SC;
        font-weight: 500;
        color: #333333;
        margin-top: 1rem;
      }
    }
    .catlogo-bottom {
      width: 80%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      .catlogo-bottom-item {
        height: 10rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        .catlog-bottom-logo {
          width: 4.4rem;
          height: 3.8rem;
          background-size: 100% 100%;
          background-repeat: no-repeat;
        }
        .catlog-bottom-name {
          text-align: center;
          // background-color: chartreuse;
          width: 12rem;
          height: 3rem;
          font-size: 1.3125rem;
          font-family: Source Han Sans SC;
          font-weight: 500;
          color: #333333;
        }
      }
    }
  }
}

@media screen and (max-width: 55rem) {
  .catlogo {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .catlogo-top {
      width: 100%;
      height: 20rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .catlog-top-logo {
        width: 7rem;
        height: 7rem;
        background-image: url("/media/yintai/cat-2.png");
        background-size: 100% 100%;
        border: 1px solid white;
        border-radius: 0.3rem;
        box-shadow: 0px 1px 1px 0px #cccccc;
      }
      .catlog-top-title {
        font-size: 1.93rem;
        font-family: Source Han Sans SC;
        font-weight: 500;
        color: #333333;
        margin-top: 1rem;
      }
    }
    .catlogo-bottom {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      .catlogo-bottom-item {
        height: 9rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        .catlog-bottom-logo {
          width: 4rem;
          height: 4rem;
          background-size: 100% 100%;
          background-repeat: no-repeat;
        }
        .catlog-bottom-name {
          text-align: center;
          width: 12rem;
          height: 3rem;
          font-size: 1.3125rem;
          font-family: Source Han Sans SC;
          font-weight: 500;
          color: #333333;
        }
      }
    }
  }
}
</style>

<template>
  <div class="catlogo">
    <div class="catlogo-top">
      <div class="catlog-top-logo"></div>
      <div class="catlog-top-title">喵街</div>
    </div>

    <div class="catlogo-bottom">
      <div class="container">
        <div class="row">
          <div class="col-6 col-sm-6 col-md-3 col-lg-3 catlogo-bottom-item">
            <div
              class="catlog-bottom-logo"
              style="background-image: url('/media/yintai/cat-3.png')"
            ></div>
            <div class="catlog-bottom-name">新零售</div>
          </div>
          <div class="col-6 col-sm-6 col-md-3 col-lg-3 catlogo-bottom-item">
            <div
              class="catlog-bottom-logo"
              style="background-image: url('/media/yintai/cat-4.png')"
            ></div>
            <div class="catlog-bottom-name">品牌宣传与营销阵地</div>
          </div>
          <div class="col-6 col-sm-6 col-md-3 col-lg-3 catlogo-bottom-item">
            <div
              class="catlog-bottom-logo"
              style="background-image: url('/media/yintai/cat-5.png')"
            ></div>
            <div class="catlog-bottom-name">高品质内容</div>
          </div>
          <div class="col-6 col-sm-6 col-md-3 col-lg-3 catlogo-bottom-item">
            <div
              class="catlog-bottom-logo"
              style="background-image: url('/media/yintai/cat-6.png')"
            ></div>
            <div class="catlog-bottom-name">会员突破2000万</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "catlogo",
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
