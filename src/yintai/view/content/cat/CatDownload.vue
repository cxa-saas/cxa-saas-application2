<style lang="scss">
@font-face {
  font-family: "SourceHanSansCN-Regular";
  src: url("/media/yintai/font/SourceHanSansCN-Regular.otf") format("opentype");
}
.catlogodownload {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;

  .catlogo-top {
    width: 100%;
    height: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .catlog-top-logo {
      width: 7rem;
      height: 7rem;
      background-image: url("/media/yintai/cat-2.png");
      background-size: 100% 100%;
      border: 1px solid white;
      border-radius: 1rem;
      box-shadow: 0px 1px 1px 0px #cccccc;
      margin-bottom: 1rem;
    }
    .catlog-top-text {
      font-size: 1.625rem;
      font-family: Source Han Sans SC;
      font-weight: 400;
      color: #212121;
      line-height: 2.625rem;
    }
    .catlog-top-button {
      margin-top: 1rem;
      width: 6.75rem;
      height: 3.06rem;
      border: #e8004c 0.1rem solid;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      :hover {
        cursor: pointer;
      }
      .catlog-top-button-text {
        font-size: 1rem;
        font-family: SourceHanSansCN-Regular;
        font-weight: 500;
        color: #e5004f;
      }
    }
  }
}
</style>

<template>
  <div class="catlogodownload">
    <div class="catlogo-top">
      <div class="catlog-top-logo"></div>
      <div class="catlog-top-text">喵街APP在手</div>
      <div class="catlog-top-text">专柜货 上喵街</div>
      <div class="catlog-top-button">
        <div class="catlog-top-button-text">立即下载</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "catlogodownload",
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
