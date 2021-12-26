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
  font-family: "SourceHanSansCN-Normal";
  src: url("/media/yintai/font/SourceHanSansCN-Normal.otf") format("opentype");
}
@font-face {
  font-family: "SourceHanSansCN-Medium";
  src: url("/media/yintai/font/SourceHanSansCN-Medium.otf") format("opentype");
}
@font-face {
  font-family: "SourceHanSansCN-Bold";
  src: url("/media/yintai/font/SourceHanSansCN-Bold.otf") format("opentype");
}
.newsInnerContent {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media screen and (min-width: 55rem) {
    .newsInnerContent-list {
      width: 80%;
      max-width: 1080px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      .newsInnerContent-left {
        box-shadow: 0px 3px 5px #a3a0a0;
        width: 30%;
        height: 20rem;
        display: flex;
        flex-direction: row;
        justify-content: center;
        position: relative;
        .newsInnerContent-left-container {
          width: 98%;
          .newsInnerContent-image {
            width: 100%;
            height: 70%;
            background-image: url("/media/yintai/newsinner.png");
            background-size: 100% 100%;
          }
          .newsInnerContent-title {
            font-size: 1.4rem;
            font-family: SourceHanSansSC-Bold;
            font-weight: bold;
            color: #4b4b4b;
            margin-top: 1rem;
          }
        }
        .newsInnerContent-line {
          position: absolute;
          width: 4rem;
          height: 0.4rem;
          bottom: 0;
          right: 10%;
          background-color: #e5004f;
        }
      }
      .newsInnerContent-right {
        width: 60%;
        height: 20rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        .newsInnerContent-subtitle {
          font-size: 1rem;
          font-family: SourceHanSansSC-Medium;
          font-weight: 500;
          color: #e5004f;
          line-height: 28px;
          text-transform: uppercase;
          margin-top: 2rem;
        }
        .newsInnerContent-title {
          font-size: 1.6rem;
          font-family: SourceHanSansSC-Bold;
          font-weight: bold;
          color: #4b4b4b;
          margin-top: 1rem;
          margin-bottom: 1rem;
        }
        .newsInnerContent-line {
          width: 2rem;
          height: 0.2rem;
          background-color: #e5004f;
          margin-bottom: 2rem;
        }
        .newsInnerContent-text {
          width: 80%;
          font-size: 1rem;
          line-height: 1.6rem;
          font-family: SourceHanSansSC-Regular;
          font-weight: 400;
          color: #7f7f7f;
        }
      }
    }
  }
  @media screen and (max-width: 55rem) {
    .newsInnerContent-list {
      width: 80%;
      max-width: 1080px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .newsInnerContent-left {
        box-shadow: 0px 3px 5px #a3a0a0;
        width: 100%;
        height: 20rem;
        display: flex;
        flex-direction: row;
        justify-content: center;
        position: relative;
        .newsInnerContent-left-container {
          width: 98%;
          .newsInnerContent-image {
            width: 100%;
            height: 70%;
            background-image: url("/media/yintai/newsinner.png");
            background-size: 100% 100%;
          }
          .newsInnerContent-title {
            font-size: 1.4rem;
            font-family: SourceHanSansSC-Bold;
            font-weight: bold;
            color: #4b4b4b;
            margin-top: 1rem;
          }
        }
        .newsInnerContent-line {
          position: absolute;
          width: 4rem;
          height: 0.4rem;
          bottom: 0;
          right: 10%;
          background-color: #e5004f;
        }
      }
      .newsInnerContent-right {
        width: 100%;
        height: 20rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        .newsInnerContent-subtitle {
          font-size: 1rem;
          font-family: SourceHanSansSC-Medium;
          font-weight: 500;
          color: #e5004f;
          line-height: 28px;
          text-transform: uppercase;
          margin-top: 2rem;
        }
        .newsInnerContent-title {
          font-size: 1.6rem;
          font-family: SourceHanSansSC-Bold;
          font-weight: bold;
          color: #4b4b4b;
          margin-top: 1rem;
          margin-bottom: 1rem;
        }
        .newsInnerContent-line {
          width: 2rem;
          height: 0.2rem;
          background-color: #e5004f;
          margin-bottom: 2rem;
        }
        .newsInnerContent-text {
          width: 80%;
          line-height: 1.6rem;
          font-family: SourceHanSansSC-Regular;
          font-weight: 400;
          color: #7f7f7f;
        }
      }
    }
  }
}
</style>

<template>
  <div class="newsInnerContent">
    <div class="newsInnerContent-list">
      <div class="newsInnerContent-left">
        <div class="newsInnerContent-left-container">
          <div class="newsInnerContent-image"></div>
          <div class="newsInnerContent-title">#寄存的老公领不回来了#</div>
        </div>
        <div class="newsInnerContent-line"></div>
      </div>
      <div class="newsInnerContent-right">
        <div class="newsInnerContent-subtitle">Intime News</div>
        <div class="newsInnerContent-title">#寄存的老公领不回来了#</div>
        <div class="newsInnerContent-line"></div>
        <div class="newsInnerContent-text">
          这下没借口不陪老婆逛街了】近日，杭州王先生的一段自拍被晒在网上。视频中，陪老婆逛街的王先生在武林银泰里找到了“好去处”，打游戏、看直播、吃零食，快乐溢于言表。陪逛商场的老公们，是不是也需要这样的一个空间呢？
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "newsInnerContent",
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
