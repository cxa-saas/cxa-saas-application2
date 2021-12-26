<style lang="scss">
.buesiness-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  .buesiness {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    max-width: 1080px;
    .sub-header {
      margin-top: 3rem;
      font-size: 1rem;
      color: rgba(0, 0, 0, 0.25) !important;
      font-weight: 500;
      font-family: "Montserrat", Helvetica, Arial, Lucida, sans-serif;
      text-transform: uppercase;
    }
    .business-header {
      font-family: "Montserrat", Helvetica, Arial, Lucida, sans-serif;
      font-weight: 500;
      font-size: 2.2rem;
      line-height: 1.4em;
      text-align: center;
      color: #333;
      margin-top: 3rem;
    }
    .numfont {
      margin-top: 5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      img {
        width: 11rem;
        height: 11rem;
      }
      .title {
        font-size: 5rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        font-family: "Autour One", display;
        font-weight: 700;
        color: #000000 !important;
        line-height: 1.4em;
      }
      .introduction {
        text-align: center;
        height: 8rem;

        margin-bottom: 1rem;
        overflow: hidden;
        span {
          font-size: 1.3rem;
          font-weight: 500;
          font-family: "Josefin Sans", Helvetica, Arial, Lucida, sans-serif;
          color: #000000 !important;
          display: inline-block;
        }
      }
    }
  }
}
</style>

<template>
  <div class="buesiness-container" id="buesiness-container">
    <div class="buesiness">
      <div class="sub-header">CORE BUSINESS</div>
      <div class="business-header">核心业务</div>
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 numfont">
            <img src="/media/yintai/business-2.png" />
            <div class="title">喵街</div>
            <div class="introduction">
              <span> 不止于卖货，为品牌提供品牌宣传、整合营</span>
              <span> 销和内容营销阵地，创造具有潮流调性的高</span>
              <span> 品质和高转化内容，并被消费者喜爱和传播</span>
            </div>

            <a href="#/cat"
              ><ButtonRight style="margin-left: 2rem"></ButtonRight
            ></a>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 numfont">
            <img src="/media/yintai/business-1.png" />
            <div class="title">INTIME365</div>
            <div class="introduction">
              <span> 在开通该项权益的所有银泰门店及喵街APP</span>
              <span>均可在常规折扣及商场活动的</span>
              <span> 基础上再享受优惠</span>
            </div>
            <a href="#/membership"
              ><ButtonRight style="margin-left: 2rem"></ButtonRight
            ></a>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 numfont">
            <img src="/media/yintai/business-3.png" />
            <div class="title">全门店导览</div>
            <div class="introduction">
              <span> 一站式商城导航，找你想找，玩你想玩</span>
            </div>
            <a href="#/store"
              ><ButtonRight style="margin-left: 2rem"></ButtonRight
            ></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonRight from "@/yintai/view/component/ButtonRight";

export default {
  name: "home",
  components: { ButtonRight },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
