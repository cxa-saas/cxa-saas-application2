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
  font-family: "SourceHanSansCN-Bold";
  src: url("/media/yintai/font/SourceHanSansCN-Bold.otf") format("opentype");
}
@media screen and (min-width: 55rem) {
  .consultTitle1 {
    margin-top: 5rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    .consultTitle1-container {
      max-width: 1080px;
      width: 80%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      .consult-left {
        width: 40%;
        display: flex;
        flex-direction: column;
        justify-items: flex-start;
        align-items: center;
        .consult-title {
          font-size: 1.8rem;
          font-family: SourceHanSansSC-Bold;
          font-weight: bold;
          color: #353535;
        }
        .consult-subtitle {
          font-size: 0.9375rem;
          font-family: SourceHanSansSC-Medium;
          font-weight: 400;
          color: #7d7d7d;
        }
        .consult-block-list {
          display: flex;
          flex-direction: row;
          justify-items: center;
          align-items: center;
          margin-top: 1rem;
          .consult-block-item {
            width: 43px;
            height: 7px;
            background: #e5004f;
            margin-left: 0.2rem;
          }
        }
      }
      .consult-right {
        margin-right: -20rem;
        margin-left: 12rem;
        width: 8rem;
        height: 8rem;
        background-image: url("/media/yintai/consult-3.png");
        background-size: 100% 100%;
      }
    }
  }
}
@media screen and (max-width: 55rem) {
  .consultTitle1 {
    margin-top: 5rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    .consultTitle1-container {
      max-width: 1080px;
      width: 80%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .consult-left {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-items: flex-start;
        align-items: center;
        .consult-title {
          font-size: 1.65rem;
          font-family: SourceHanSansSC-Bold;
          font-weight: bold;
          color: #353535;
        }
        .consult-subtitle {
          font-size: 0.6375rem;
          font-family: SourceHanSansSC-Medium;
          font-weight: 400;
          color: #7d7d7d;
          text-align: center;
        }
        .consult-block-list {
          display: flex;
          flex-direction: row;
          justify-items: center;
          align-items: center;
          margin-top: 1rem;
          .consult-block-item {
            width: 43px;
            height: 7px;
            background: #e5004f;
            margin-left: 0.2rem;
          }
        }
      }
      .consult-right {
        margin-top: 3rem;
        width: 8rem;
        height: 8rem;
        background-image: url("/media/yintai/consult-3.png");
        background-size: 100% 100%;
      }
    }
  }
}
</style>

<template>
  <div class="consultTitle1">
    <div class="consultTitle1-container">
      <div class="consult-left">
        <div class="consult-title">银泰百货杭州武林总店</div>
        <div class="consult-subtitle">
          "Intime Department Store Hangzhou Wulin Main Store"
        </div>
        <div class="consult-block-list">
          <div class="consult-block-item"></div>
          <div class="consult-block-item"></div>
          <div class="consult-block-item"></div>
        </div>
      </div>
      <div class="consult-right"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "title",
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
