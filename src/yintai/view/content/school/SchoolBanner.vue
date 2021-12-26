<style lang="scss">
@font-face {
  font-family: "SourceHanSansCN-Heavy";
  src: url("/media/yintai/font/SourceHanSansCN-Heavy.otf") format("opentype");
}
@font-face {
  font-family: "SourceHanSansCN-Regular";
  src: url("/media/yintai/font/SourceHanSansCN-Regular.otf") format("opentype");
}
@media screen and (min-width: 55rem) {
  .storebanner {
    margin-top: 4.5rem;
    width: 100%;
    background-image: url("/media/yintai/school-1.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 10.5%;
    padding-bottom: 10.5%;
    padding-left: 5%;

    .context {
      max-width: 1080px;
      width: 80%;
      height: 15rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      .storebanner-title {
        h1 {
          font-family: "SourceHanSansCN-Heavy", "Lato", Helvetica, Arial, Lucida,
            sans-serif !important;
          font-weight: 900 !important;
          text-transform: uppercase !important;
          font-size: 5rem !important;
          letter-spacing: 2px !important;
          line-height: 1.2em !important;
          text-shadow: 0em 0.1em 0.6em rgba(0, 0, 0, 0.24) !important;
          // font-size: 4.56rem;
          // font-family: Source Han Sans SC;
          // font-weight: 800;
          color: #ffffff;
          // text-shadow: 0px 2px 3px rgba(4, 0, 0, 0.93);
        }
      }
      .sub-title {
        margin-top: 1.187rem;
        margin-bottom: 1.187rem;
        h3 {
          font-size: 22px;
          font-family: "SourceHanSansCN-Regular", "Lato", Helvetica, Arial,
            Lucida, sans-serif !important;
          font-weight: 500;
          color: #ffffff;
          // text-shadow: 0px 2px 3px rgba(4, 0, 0, 0.93);
          line-height: 1.187rem;
        }
      }
      .button {
        width: 8rem;
        height: 4rem;
        background-color: white;
        border-radius: 0.4rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-top: 1rem;
        padding-top: 1rem;

        p {
          font-family: Source Han Sans SC;
          font-weight: 500;
          color: #000000;
          font-size: 1.4rem;
        }
        &:hover {
          width: 10rem;
          cursor: pointer;
          transition: all 0.2s;
          p {
            // margin-left: -0.5rem;
            transition: all 0.2s;

            .left {
              animation: showInLeft 1s 1;
              display: inline-block;
              font-family: Source Han Sans SC;
              font-weight: 500;
              color: #000000;
              font-size: 1.6rem;
              margin-left: 1rem;
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 55rem) {
  .storebanner {
    margin-top: 4.5rem;
    width: 100%;
    background-image: url("/media/yintai/school-1.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 10.5%;
    padding-bottom: 10.5%;
    .context {
      max-width: 1080px;
      width: 80%;
      height: 15rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      .storebanner-title {
        h1 {
          font-family: "Lato", Helvetica, Arial, Lucida, sans-serif !important;
          font-weight: 900 !important;
          text-transform: uppercase !important;
          font-size: 4rem !important;
          letter-spacing: 2px !important;
          line-height: 1.2em !important;
          text-shadow: 0em 0.1em 0.6em rgba(0, 0, 0, 0.24) !important;
          // font-size: 4.56rem;
          // font-family: Source Han Sans SC;
          // font-weight: 800;
          color: #ffffff;
          // text-shadow: 0px 2px 3px rgba(4, 0, 0, 0.93);
        }
      }
      .sub-title {
        margin-top: 1.187rem;
        margin-bottom: 1.187rem;
        h3 {
          font-size: 22px;
          font-family: "Lato", Helvetica, Arial, Lucida, sans-serif !important;
          font-weight: 500;
          color: #ffffff;
          // text-shadow: 0px 2px 3px rgba(4, 0, 0, 0.93);
          line-height: 1.187rem;
        }
      }
      .button {
        width: 8rem;
        height: 4rem;
        background-color: white;
        border-radius: 0.4rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-top: 1rem;
        padding-top: 1rem;

        p {
          font-family: Source Han Sans SC;
          font-weight: 500;
          color: #000000;
          font-size: 1.4rem;
        }
        &:hover {
          width: 10rem;
          cursor: pointer;
          transition: all 0.2s;
          p {
            // margin-left: -0.5rem;
            transition: all 0.2s;

            .left {
              animation: showInLeft 1s 1;
              display: inline-block;
              font-family: Source Han Sans SC;
              font-weight: 500;
              color: #000000;
              font-size: 1.6rem;
              margin-left: 1rem;
            }
          }
        }
      }
    }
  }
}
</style>

<template>
  <div class="storebanner" ref="cat_banner">
    <transition name="fade-in-up">
      <div v-show="this.active" class="context">
        <!-- <div class="storebanner-title"><h1>银泰新闻</h1></div>
        <div class="sub-title"><h3>对外传播阵地</h3></div>
        <GetMore></GetMore> -->
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "catbanner",
  components: {},
  data() {
    return {
      active: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.getDistance); //绑定页面滚动事件
    this.distance = this.$refs.cat_banner.getBoundingClientRect().bottom;
    if (this.distance > 0 && this.active == false) {
      this.active = true;
    }
  },
  methods: {
    getDistance() {
      this.distance = this.$refs.cat_banner.getBoundingClientRect().bottom;

      if (this.distance > 0 && this.active == false) {
        this.active = true;
      }
      if (this.distance < 0 && this.active == true) {
        this.active = false;
      }
    },
  },
};
</script>

