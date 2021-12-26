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
  .target-container {
    width: 100%;
    margin-top: 5rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .target {
      width: 80%;
      max-width: 1080px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;

      .target-title {
        font-size: 24px;
        font-family: SourceHanSansSC-Regular;
        font-weight: 400;
        color: #e5004f;
      }
      .target-subtitle {
        font-size: 8px;
        font-family: SourceHanSansSC-Medium;
        font-weight: 500;
        color: #7d7d7d;
        line-height: 28px;
        text-transform: uppercase;
      }
      .block {
        margin-top: 1rem;
        width: 43px;
        height: 4px;
        background: #e5004f;
      }
      .video {
        margin-top: 2rem;
        width: 100%;
        height: 600px;
      }
    }
  }
}
@media screen and (max-width: 55rem) {
  .target-container {
    width: 100%;
    margin-top: 5rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .target {
      width: 80%;
      max-width: 1080px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;

      .target-title {
        font-size: 24px;
        font-family: SourceHanSansSC-Regular;
        font-weight: 400;
        color: #e5004f;
      }
      .target-subtitle {
        font-size: 8px;
        font-family: SourceHanSansSC-Medium;
        font-weight: 500;
        color: #7d7d7d;
        line-height: 28px;
        text-transform: uppercase;
      }
      .block {
        margin-top: 1rem;
        margin-bottom: 2rem;
        width: 43px;
        height: 4px;
        background: #e5004f;
      }
      .video {
        width: 100%;
        height: 232px;
      }
    }
  }
}
</style>

<template>
  <div class="target-container">
    <div class="target">
      <div class="target-title">银泰介绍</div>
      <div class="target-subtitle">Intime Introduction</div>
      <div class="block"></div>
      <video src="http://118.25.186.104:9000/yintai/video/1.mov" controls="controls" class="video"></video>
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
