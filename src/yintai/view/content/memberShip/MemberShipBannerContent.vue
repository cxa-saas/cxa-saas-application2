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
  .membershipbannercontent-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    .membershipbannercontent {
      width: 80%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: white;

      .membershipbannercontent-img {
        width: 100%;
        height: 18rem;
        background-size: 100% 100%;
        background-image: url("/media/yintai/membership-2.png");
        // box-shadow: 0px 3px 4px #a3a0a0;
        margin-top: 5rem;
        max-width: 1080px;
        .membershipbannercontent-img-container {
          display: none;
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
        // background-color: cyan;
        .membershipbannercontent-list-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          .membershipbannercontent-item-span {
            font-size: 1.3125rem;
            font-family: SourceHanSansSC-Medium;
            font-weight: 500;
            color: #333333;
            line-height: 1.5625rem;
          }
          .membershipbannercontent-item-qrcode {
            width: 10rem;
            height: 10rem;
            background-image: url("/media/yintai/membership-3.png");
            background-size: 100% 100%;
          }
          .membershipbannercontent-item-mobile {
            width: 5rem;
            height: 8rem;
            background-image: url("/media/yintai/membership-4.png");
            background-size: 100% 100%;
          }
          .membershipbannercontent-item-gift {
            width: 6rem;
            height: 8rem;
            background-image: url("/media/yintai/membership-5.png");
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
  .membershipbannercontent {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 5rem;

    .membershipbannercontent-img {
      width: 100%;
      height: 16rem;
      background-size: 100% 100%;
      margin-top: 5rem;
      display: flex;
      flex-direction: row;
      justify-content: center;

      .membershipbannercontent-img-container {
        width: 80%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        box-shadow: 0px 1px 1px #a3a0a0;
        border-radius: 1rem;

        .membershipbannercontent-imgleft {
          width: 60%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          margin-left: 5%;
          margin-top: 10%;

          .membershipbannercontent-imgleft-top {
            display: flex;
            flex-direction: row;
            width: 100%;
            .membershipbannercontent-imgleft-top-left {
              min-width: 4rem;
              height: 3rem;
              background-image: url("/media/yintai/svg/chat.png");
              background-size: 100% 100%;
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              .register-test {
                font-size: 1.5rem;
                font-weight: 500;

                color: #fff;
                display: inline-block;
              }
            }
            .membershipbannercontent-imgleft-top-right {
              margin-left: 1rem;
              min-width: 4rem;
              height: 3rem;

              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              .register-membership {
                font-size: 1.5rem;
                font-weight: 500;
                display: inline-block;
              }
            }
          }

          .membershipbannercontent-imgleft-bottom {
            width: 100%;
            height: 30%;
            font-size: 2.4rem;
            font-weight: 800;
            margin-top: 1rem;
            white-space: nowrap;
          }
        }
        .membershipbannercontent-imgright {
          width: 40%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          .membershipbannercontent-imgright-top {
            width: 100%;
            height: 30%;
            background-color: #fff;
            background-image: url("/media/yintai/membership-11.png");
            background-size: 100% 100%;
          }
          .membershipbannercontent-imgright-bottom {
            width: 100%;
            height: 70%;
          }
        }
      }
    }
    .membershipbannercontent-list {
      margin-top: 5rem;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 10rem;

      .membershipbannercontent-list-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        .membershipbannercontent-item-span {
          font-size: 1.3125rem;
          font-family: SourceHanSansSC-Medium;
          font-weight: 500;
          color: #333333;
          line-height: 1.5625rem;
        }
        .membershipbannercontent-item-qrcode {
          width: 8rem;
          height: 8rem;
          background-image: url("/media/yintai/membership-3.png");
          background-size: 100% 100%;
          margin-bottom: 1rem;
          margin-top: 1rem;
        }
        .membershipbannercontent-item-mobile {
          margin-top: 1rem;
          width: 4rem;
          height: 6rem;
          background-image: url("/media/yintai/membership-4.png");
          background-size: 100% 100%;
          margin-bottom: 1rem;
          margin-left: 1rem;
          margin-right: 1rem;
        }
        .membershipbannercontent-item-gift {
          margin-top: 1rem;
          margin-left: 1rem;
          width: 6rem;
          height: 6rem;
          background-image: url("/media/yintai/membership-5.png");
          background-size: 100% 100%;
          margin-bottom: 1rem;
        }
      }

      .membershipbannercontent-icon {
        width: 2rem;
        height: 2rem;
        background-image: url("/media/yintai/membership-left.png");
        background-size: 100% 100%;
        margin-bottom: 2.2rem;
      }
    }
  }
}
</style>

<template>
  <div class="membershipbannercontent-container">
    <div class="membershipbannercontent">
      <div class="membershipbannercontent-img">
        <div class="membershipbannercontent-img-container">
          <div class="membershipbannercontent-imgleft">
            <div class="membershipbannercontent-imgleft-top">
              <div class="membershipbannercontent-imgleft-top-left">
                <span class="register-test">免费注册</span>
              </div>
              <div class="membershipbannercontent-imgleft-top-right">
                <span class="register-membership">银泰会员</span>
              </div>
            </div>
            <div class="membershipbannercontent-imgleft-bottom">
              新手赢百元礼包
            </div>
          </div>
          <div class="membershipbannercontent-imgright">
            <div class="membershipbannercontent-imgright-top"></div>
            <div class="membershipbannercontent-imgright-bottom"></div>
          </div>
        </div>
      </div>
      <div class="membershipbannercontent-list">
        <div class="membershipbannercontent-list-item">
          <div class="membershipbannercontent-item-qrcode"></div>
          <div class="membershipbannercontent-item-span">扫码注册</div>
          <div class="membershipbannercontent-item-span">银泰会员</div>
        </div>
        <div class="membershipbannercontent-icon"></div>
        <div
          class="membershipbannercontent-list-item"
          style="padding-top: 1rem"
        >
          <div class="membershipbannercontent-item-mobile"></div>
          <div
            class="membershipbannercontent-item-span"
            style="margin-top: 1rem"
          >
            下载登录
          </div>
          <div class="membershipbannercontent-item-span">喵街APP</div>
        </div>
        <div class="membershipbannercontent-icon"></div>
        <div
          class="membershipbannercontent-list-item"
          style="padding-top: 1rem"
        >
          <div class="membershipbannercontent-item-gift"></div>
          <div
            class="membershipbannercontent-item-span"
            style="margin-top: 1rem"
          >
            新手赢取
          </div>
          <div class="membershipbannercontent-item-span">百元礼包</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "membershipbannercontent",
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
