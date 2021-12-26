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
  .abouttitle {
    margin-top: 5rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    .abouttitle-container {
      width: 80%;
      max-width: 1080px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .abouttitle-title {
        font-size: 2.9rem;
        font-family: SourceHanSansSC-Bold;
        font-weight: bold;
        color: #353535;
      }
      .abouttitle-subtitle {
        font-size: 1.4rem;
        font-family: SourceHanSansSC-Regular;
        font-weight: 400;
        color: #7d7d7d;
      }
      .abouttitle-block-list {
        display: flex;
        flex-direction: row;
        justify-items: center;
        align-items: center;
        margin-top: 2rem;
        .abouttitle-block-item {
          width: 28px;
          height: 5px;
          background: #e5004f;
          margin-left: 0.2rem;
        }
      }
    }
  }
}
@media screen and (max-width: 55rem) {
  .abouttitle {
    margin-top: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    .abouttitle-container {
      width: 80%;
      max-width: 1080px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .abouttitle-title {
        font-size: 2rem;
        font-family: SourceHanSansSC-Bold;
        font-weight: bold;
        color: #353535;
      }
      .abouttitle-subtitle {
        font-size: 11px;
        font-family: SourceHanSansSC-Regular;
        font-weight: 400;
        color: #7d7d7d;
        text-align: center;
        white-space: nowrap;
      }
      .abouttitle-block-list {
        display: flex;
        flex-direction: row;
        justify-items: center;
        align-items: center;
        margin-top: 2rem;
        .abouttitle-block-item {
          width: 28px;
          height: 5px;
          background: #e5004f;
          margin-left: 0.2rem;
        }
      }
    }
  }
}
</style>

<template>
  <div class="abouttitle">
    <div class="abouttitle-container">
      <div class="abouttitle-title">让天下商场没有难做的生意</div>
      <div class="abouttitle-subtitle">
        "Let the world shopping malls have no difficult business"
      </div>
      <div class="abouttitle-block-list">
        <div class="abouttitle-block-item"></div>
        <div class="abouttitle-block-item"></div>
        <div class="abouttitle-block-item"></div>
      </div>
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
