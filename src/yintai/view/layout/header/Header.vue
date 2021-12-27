<style lang="scss">
@font-face {
  font-family: "SourceHanSansCN-Bold";
  src: url("/media/yintai/font/SourceHanSansCN-Bold.otf") format("opentype");
}
@media screen and (min-width: 75rem) {
  .header-wrap {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    top: 0;
    box-shadow: 0 1px 0 rgb(0 0 0 / 10%);
    -moz-box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 0 1px 0 rgb(0 0 0 / 10%);
    position: relative;
    z-index: 99999;
    height: 6rem;
    line-height: 1.43rem;
    font-weight: 500;
    background-color: #ffffff;
    .header {
      height: 100%;
      width: 80%;
      max-width: 1080px;
      .logo {
        height: 100%;
        -webkit-transition: all 0.4s ease-in-out;
        transition: all 0.4s ease-in-out;
        margin-bottom: 0;
        display: inline-block;
        float: left;
        vertical-align: middle;
        -webkit-transform: translateZ(0);
        img {
          height: 54%;
          max-width: 100%;
          max-height: 4rem;
          margin-top: 8%;
        }
      }
      .nav-list {
        float: right;
        display: flex;
        align-items: center;
        height: 100%;
        margin-right: 3%;

        .nav-item {
          margin-left: 0.8rem;
          width: 6rem;
          height: 100%;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          position: relative;
          a {
            color: #00000099;
            font-size: 14px;
            text-decoration: none;
            display: block;
            position: relative;
            -webkit-transition: all 0.4s ease-in-out;
            transition: all 0.4s ease-in-out;
            font-family: "SourceHanSansCN-Bold";
            font-weight: bold;
            // color: #333333;
            // font-size: 1.25rem;
            // font-weight: bold;
            // font-family: Source Han Sans SC;
          }

          .nav-service-list {
            position: absolute;
            display: flex;
            flex-direction: column;
            background-color: #fff;
            width: 12rem;
            display: none;

            .nav-service-item {
              background-color: #fff;
              width: 100%;
              color: #00000099;
              font-size: 14px;
              text-decoration: none;
              display: block;
              position: relative;
              -webkit-transition: all 0.4s ease-in-out;
              transition: all 0.4s ease-in-out;
              font-family: "SourceHanSansCN-Bold";
              font-weight: bold;
              padding-top: 1rem;
              height: 3rem;
              border-bottom: 1px whitesmoke solid;
              text-align: center;
              &:hover {
                cursor: pointer;
                background-color: whitesmoke;
              }
            }
          }
        }
        .show-service {
          &:hover {
            .nav-service-list {
              display: flex;
            }
          }
        }
      }
      .icon-menu-container {
        display: none;
      }
    }
  }
  .header-next {
    width: 100%;
    position: fixed;
    height: 4.5rem;
    transition: height 1s;
  }
  .header-before {
    width: 100%;
    position: fixed;
    height: 6rem;
    transition: height 1s;
  }
  .header-top-next {
    top: 4.5rem;
  }
  .header-top-before {
    top: 6rem;
  }
}
@media screen and (max-width: 75rem) {
  .header-wrap {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    top: 0;
    box-shadow: 0 1px 0 rgb(0 0 0 / 10%);
    -moz-box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 0 1px 0 rgb(0 0 0 / 10%);
    position: relative;
    z-index: 99999;
    height: 6rem;
    line-height: 1.43rem;
    font-weight: 500;
    background-color: #ffffff;
    .header {
      height: 100%;
      width: 80%;
      max-width: 1080px;
      .logo {
        height: 100%;
        -webkit-transition: all 0.4s ease-in-out;
        transition: all 0.4s ease-in-out;
        margin-bottom: 0;
        display: inline-block;
        float: left;
        vertical-align: middle;
        -webkit-transform: translateZ(0);
        img {
          height: 54%;
          max-width: 100%;
          max-height: 4rem;
          margin-top: 8%;
        }
      }
      .nav-list {
        position: fixed;
        width: 80%;
        background-color: white;
        top: 4.5rem;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        border-top: #2ea3f2 0.3rem solid;
        .nav-item {
          &:first-child {
            margin-top: 3rem;
          }
          &:last-child {
            margin-bottom: 3rem;
          }

          .nav-service-list {
            display: none;
          }
          width: 90%;
          height: 3rem;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          border-bottom: 1px whitesmoke solid;
          padding: 0px 5%;
          &:nth-child(4) {
            &:hover {
              height: 16rem;
              .nav-service-list {
                position: relative;
                top: 0;
                right: 0;
                display: flex;
                flex-direction: column;
                width: 20rem;
                .nav-service-item {
                  padding-top: 1rem;
                  height: 4rem;
                  text-align: center;
                  width: 100%;
                  &:hover{
                    background-color: #fff;
                  }
                }

              }
            }
          }
          &:hover {
            cursor: pointer;
            background-color: whitesmoke;
          }

          a {
            width: 100%;
            color: #666;
            font-size: 1.2rem;
            text-decoration: none;
            display: block;
            position: relative;
            -webkit-transition: all 0.4s ease-in-out;
            transition: all 0.4s ease-in-out;
            font-family: "SourceHanSansCN-Bold";
            font-weight: bold;
          }
        }
      }
      .icon-menu-container {
        width: 3rem;
        height: 100%;
        float: right;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        .icon-menu {
          height: 60%;
          width: 3rem;
          background-image: url("/media/yintai/svg/menu.svg");
          background-size: 100% 100%;
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
  }
  .header-next {
    width: 100%;
    position: fixed;
    height: 4.5rem;
    transition: height 1s;
  }
  .header-before {
    width: 100%;
    position: fixed;
    height: 4.5rem;
    transition: height 1s;
  }
  .display-nav {
    display: none;
  }
  .no-display-nav {
    display: flex;
  }
}
</style>


<template>
  <!-- begin:: Header -->
  <div
    class="header-wrap"
    v-bind:class="{ 'header-next': cssActive, 'header-before': !cssActive }"
  >
    <div class="header">
      <div class="logo">
        <a href="#/yintai"> <img src="/media/yintai/Logo.png" /></a>
      </div>
      <div class="icon-menu-container">
        <div
          class="icon-menu"
          @click="mobileMenuActive = !mobileMenuActive"
        ></div>
      </div>
      <div
        class="nav-list"
        v-bind:class="{
          'display-nav': !mobileMenuActive,
          'no-display-nav': mobileMenuActive,
        }"
      >
        <div class="nav-item">
          <a href="#/yintai">首页</a>
        </div>
        <div class="nav-item">
          <a href="#/news">银泰新闻</a>
        </div>
        <div class="nav-item"><a href="#/cloudPicture">银泰云图</a></div>
        <div class="nav-item show-service">
          <a href="#">银泰服务</a>
          <div
            class="nav-service-list"
            v-bind:class="{
              'header-top-next': cssActive,
              'header-top-before': !cssActive,
            }"
          >
            <a href="#/cat"><div class="nav-service-item">喵街</div></a>
            <a href="#/membership"
              ><div class="nav-service-item">INTIME365</div></a
            >
            <a href="#/membershipStore"
              ><div class="nav-service-item">云店</div></a
            >
            <a href="#/store"><div class="nav-service-item">全门店导览</div></a>
          </div>
        </div>

        <div class="nav-item"><a href="#/about">关于银泰</a></div>
        <div class="nav-item"><a href="#/contact">联系我们</a></div>
      </div>
    </div>
  </div>

  <!-- end:: Header -->
</template>

<script>
export default {
  name: "Header",
  components: {},
  mounted() {
    window.addEventListener("scroll", this.getDistance); //绑定页面滚动事件
  },
  methods: {
    getDistance() {
      this.distance =
        window.pageYOffset ||
        (document.documentElement || document.body.parentNode || document.body)
          .scrollTop;

      if (this.distance > 20) {
        this.cssActive = true;
      } else {
        this.cssActive = false;
      }
    },
  },
  computed: {},
  data() {
    return {
      distance: 0,
      cssActive: false,
      mobileMenuActive: false,
    };
  },
};
</script>
