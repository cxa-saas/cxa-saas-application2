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
  .schoolcards {
    margin-top: 5rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    .schoolcards-container {
      width: 80%;
      max-width: 1080px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      .cards-item {
        height: 110%;
        width: 25%;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: center;
        border-radius: 1rem;
        box-shadow: 0px 2px 4px rgb(0 0 0 / 10%);
        .cards-item-conatiner {
          margin-top: 2rem;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;

          .cards-item-logo {
            width: 4rem;
            height: 4rem;
            background-image: url("/media/yintai/school-4.png");
            background-size: 100% 100%;
          }
          .cards-item-title {
            font-size: 1rem;
            font-family: SourceHanSansSC-Medium;
            font-weight: 500;
            color: #333333;
            margin-top: 1rem;
            margin-bottom: 1rem;
          }
          .cards-item-qr-container {
            width: 13rem;
            height: 8rem;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            .cards-item-left {
              display: flex;
              flex-direction: column;
              align-content: center;
              .cards-item-left-top {
                width: 6rem;
                height: 6rem;
                background-image: url("/media/yintai/school-card1-qr1.png");
                background-size: 100% 100%;
              }
              .cards-item-left-bottom {
                text-align: center;
              }
            }

            .cards-item-right {
              display: flex;
              flex-direction: column;
              align-content: center;
              .cards-item-right-top {
                width: 6rem;
                height: 6rem;
                background-size: 100% 100%;
                background-image: url("/media/yintai/school-card1-qr2.png");
              }
              .cards-item-right-bottom {
                text-align: center;
              }
            }
          }
          .cards-item-span {
            width: 90%;
            text-align: left;
            font-size: 0.8rem;
            font-family: SourceHanSansSC-Regular;
            font-weight: 400;
            color: #7f7f7f;
            line-height: 1.4rem;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 55rem) {
  .schoolcards {
    margin-top: 5rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    .schoolcards-container {
      width: 65%;
      max-width: 1080px;
      .cards-item {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 1rem;
        box-shadow: 0px 2px 4px rgb(0 0 0 / 10%);
        margin-top: 2rem;
        .cards-item-conatiner {
          width: 60%;
          height: 80%;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
        padding-bottom: 2rem;
          .cards-item-logo {
            margin-top: 2rem;
            width: 4rem;
            height: 4rem;
            background-image: url("/media/yintai/school-4.png");
            background-size: 100% 100%;
          }
          .cards-item-title {
            font-size: 1rem;
            font-family: SourceHanSansSC-Medium;
            font-weight: 500;
            color: #333333;
            margin-top: 1rem;
            margin-bottom: 1rem;
          }
          .cards-item-qr-container {
            width: 13rem;
            height: 8rem;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            .cards-item-left {
              display: flex;
              flex-direction: column;
              align-content: center;
              .cards-item-left-top {
                width: 6rem;
                height: 6rem;
                background-image: url("/media/yintai/school-card1-qr1.png");
                background-size: 100% 100%;
              }
              .cards-item-left-bottom {
                text-align: center;
              }
            }

            .cards-item-right {
              display: flex;
              flex-direction: column;
              align-content: center;
              .cards-item-right-top {
                width: 6rem;
                height: 6rem;
                background-size: 100% 100%;
                background-image: url("/media/yintai/school-card1-qr2.png");
              }
              .cards-item-right-bottom {
                text-align: center;
              }
            }
          }
          .cards-item-span {
            width: 80%;
            text-align: start;
            font-size: 0.8rem;
            font-family: SourceHanSansSC-Regular;
            font-weight: 400;
            color: #7f7f7f;
            line-height: 1.4rem;
          }
        }
      }
    }
  }
}
</style>

<template>
  <div class="schoolcards">
    <div class="schoolcards-container">
      <div class="cards-item">
        <div class="cards-item-conatiner">
          <div
            class="cards-item-logo"
            style="background-image: url('/media/yintai/school-card1-1.png')"
          ></div>
          <div class="cards-item-title">福利介绍</div>
          <div class="cards-item-span">◆ 餐饮住宿：餐费补贴、住宿补贴</div>
          <div class="cards-item-span">
            ◆ 健康保险：提供补充医疗保险、年度健康体检
          </div>
          <div class="cards-item-span">
            ◆ 其他福利：节日礼金、团建基金、带薪情绪假、INTIME365福利等
          </div>
        </div>
      </div>
      <div class="cards-item">
        <div class="cards-item-conatiner">
          <div
            class="cards-item-logo"
            style="background-image: url('/media/yintai/school-card1-2.png')"
          ></div>
          <div class="cards-item-title">培养体系</div>
          <div class="cards-item-span">◆ 入职“初恋部门”，自选“轮岗套餐”</div>
          <div class="cards-item-span">◆ 玩转运营和管理，初探行业模式</div>
          <div class="cards-item-span">◆ 项目式培养体系，打造时尚新人</div>
          <div class="cards-item-span">◆ 专属训练营，磨练意志挑战极限</div>
          <div class="cards-item-span">◆ 企业大学阶梯式培训，开阔视野</div>
          <div class="cards-item-span">◆ 开放式竞岗晋升，勇攀职业高峰</div>
        </div>
      </div>
      <div class="cards-item">
        <div class="cards-item-conatiner">
          <div
            class="cards-item-logo"
            style="background-image: url('/media/yintai/school-card1-3.png')"
          ></div>
          <div class="cards-item-title">动态关注</div>
          <div class="cards-item-qr-container">
            <div class="cards-item-left">
              <div class="cards-item-left-top"></div>
              <div class="cards-item-left-bottom">官方B站账号</div>
            </div>

            <div class="cards-item-right">
              <div class="cards-item-right-top"></div>
              <div class="cards-item-right-bottom">招聘公众号</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "school-card",
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
