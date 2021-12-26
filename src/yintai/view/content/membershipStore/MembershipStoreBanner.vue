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
  .membershipstorebanner {
    margin-top: 4.5rem;
    width: 100%;
    background-image: url("/media/yintai/cloudstore-1.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 12.5%;
    padding-bottom: 12.5%;

    .context {
      max-width: 1080px;
      width: 80%;
      height: 15rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      .membershipstorebanner-title {
        h1 {
          font-size: 4.8rem;
          font-family: SourceHanSansSC-Heavy;
          font-weight: 800;
          color: #ffffff;
          text-shadow: 0px 2px 3px rgba(4, 0, 0, 0.93);
        }
      }
      .sub-title {
        margin-top: 1.187rem;
        margin-bottom: 1.187rem;
        h3 {
          font-size: 22px;
          font-family: SourceHanSansCN-Regular;
          font-weight: 400;
          color: #ffffff;
          text-shadow: 0px 1px 1px rgba(4, 0, 0, 0.93);
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
  .membershipstorebanner {
    margin-top: 4.5rem;
    width: 100%;
    background-image: url("/media/yintai/cloudstore-1.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 20.5%;
    padding-bottom: 20.5%;
    .context {
      max-width: 1080px;
      width: 80%;
      height: 15rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      .membershipstorebanner-title {
        h1 {
          font-size: 3rem;
          font-family: Source Han Sans SC;
          font-weight: 800;
          color: #ffffff;
          text-shadow: 0px 1px 1px rgba(4, 0, 0, 0.93);
        }
      }
      .sub-title {
        margin-top: 1.187rem;
        margin-bottom: 1.187rem;
        h3 {
          font-size: 10px;
          font-family: SourceHanSansSC-Regular;
          font-weight: 400;
          color: #ffffff;
          text-shadow: 0px 1px 1px rgba(4, 0, 0, 0.93);
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
  <div class="membershipstorebanner" ref="membershipbanner">
    <transition name="fade-in-up">
      <div v-show="this.active" class="context">
        <div class="membershipstorebanner-title"><h1>INTIME365会员</h1></div>
        <div class="membershipstorebanner-title"><h1>玩转新零售</h1></div>
        <div class="sub-title"><h3>银泰百货·专柜直供</h3></div>
        <div class="sub-title"><h3>一线大牌｜奢侈不停｜好货一站购</h3></div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "membershipstorebanner",
  components: {},
  data() {
    return {
      active: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.getDistance); //绑定页面滚动事件
    this.distance = this.$refs.membershipbanner.getBoundingClientRect().bottom;
    if (this.distance > 0 && this.active == false) {
      this.active = true;
    }
  },
  methods: {
    getDistance() {
      this.distance =
        this.$refs.membershipbanner.getBoundingClientRect().bottom;

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
