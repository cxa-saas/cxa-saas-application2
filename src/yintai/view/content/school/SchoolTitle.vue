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
  .schooltitle-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 5rem;
    .schooltitle {
      width: 80%;
      max-width: 1080px;
      display: flex;
      flex-direction: column;
      justify-items: center;
      align-items: center;
      .school-title {
        font-size: 25px;
        font-family: SourceHanSansCN-Bold;
        font-weight: bold;
        color: #353535;
      }
      .school-subtitle {
        width: 623px;
        height: 21px;
        font-size: 20px;
        font-family: Source Han Sans SC;
        font-weight: 400;
        color: #7d7d7d;
      }
      .school-block-list {
        display: flex;
        flex-direction: row;
        justify-items: center;
        align-items: center;
        margin-top: 2rem;
        .school-block-item {
          width: 43px;
          height: 4px;
          background: #e5004f;
          margin-left: 0.2rem;
        }
      }
    }
  }
}
@media screen and (max-width: 55rem) {
  .schooltitle-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 5rem;
    .schooltitle {
      width: 80%;
      max-width: 1080px;
      display: flex;
      flex-direction: column;
      justify-items: center;
      align-items: center;
      .school-title {
        font-size: 18px;
        font-family: SourceHanSansCN-Bold;
        font-weight: bold;
        color: #353535;
      }
      .school-subtitle {
        width: 623px;
        height: 21px;
        font-size: 16px;
        font-family: Source Han Sans SC;
        font-weight: 400;
        color: #7d7d7d;
      }
      .school-block-list {
        display: flex;
        flex-direction: row;
        justify-items: center;
        align-items: center;
        margin-top: 2rem;
        .school-block-item {
          width: 20px;
          height: 4px;
          background: #e5004f;
          margin-left: 0.2rem;
        }
      }
    }
  }
}
</style>

<template>
  <div class="schooltitle-container">
    <div class="schooltitle">
      <div class="school-title">“银接未来,泰而不凡”</div>
      <br />
      <div class="school-title">银泰百货2022届校园招聘正式启动</div>

      <!-- <div class="school-subtitle">
      "Let the world shopping malls have no difficult business"
    </div> -->
      <div class="school-block-list">
        <div class="school-block-item"></div>
        <div class="school-block-item"></div>
        <div class="school-block-item"></div>
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
