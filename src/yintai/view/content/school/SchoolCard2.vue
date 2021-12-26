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
  font-family: "SourceHanSansCN-Medium";
  src: url("/media/yintai/font/SourceHanSansCN-Medium.otf") format("opentype");
}
@font-face {
  font-family: "SourceHanSansCN-Bold";
  src: url("/media/yintai/font/SourceHanSansCN-Bold.otf") format("opentype");
}
@media screen and (min-width: 55rem) {
  .schoolcard4-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
    height: 20rem;

    .schoolcard4 {
      width: 80%;
      max-width: 1080px;
      box-shadow: 0px 0px 5px #e2dfdfdc;
      border-radius: 1rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      height: 100%;
      .schoolcard4-image-container {
        height: 100%;
        width: 20%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .schoolcard4-image-logo {
          width: 6rem;
          height: 6rem;
          background-image: url("/media/yintai/school-card-1.png");
          background-size: 100% 100%;
        }
        .schoolcard4-image-text {
          font-size: 16px;
          font-family: SourceHanSansSC-Medium;
          font-weight: 500;
          color: #333333;
          margin-top: 1rem;
        }
      }
      .schoolcard4-text-container {
        height: 18rem;
        width: 60%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        .schoolcard4-text-list {
          height: 60%;
          display: flex;
          flex-direction: column;

          .schoolcard4-text-list-item {
            margin-top: 0.4rem;
            font-size: 1rem;
            font-family: SourceHanSansCN-Regular;
            font-weight: 400;
            color: #7f7f7f;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 55rem) {
  .schoolcard4-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;

    .schoolcard4 {
      width: 80%;
      max-width: 1080px;
      box-shadow: 0px 3px 5px #e2dfdfdc;
      border-radius: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .schoolcard4-image-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 2rem;

        .schoolcard4-image-logo {
          width: 4rem;
          height: 4rem;
          background-image: url("/media/yintai/school-card-1.png");
          background-size: 100% 100%;
        }
        .schoolcard4-image-text {
          font-size: 12px;
          font-family: SourceHanSansSC-Medium;
          font-weight: 500;
          color: #333333;
          margin-top: 1rem;
          white-space: nowrap;
        }
      }
      .schoolcard4-text-container {
        margin-bottom: 2rem;
        width: 80%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        .schoolcard4-text-list {
          width: 100%;
          display: flex;
          flex-direction: column;

          .schoolcard4-text-list-item {
            width: 100%;
            margin-top: 0.4rem;
            font-size: 1rem;
            font-family: SourceHanSansCN-Regular;
            font-weight: 400;
            color: #7f7f7f;
          }
        }
      }
    }
  }
}
</style>

<template>
  <div class="schoolcard4-container">
    <div class="schoolcard4">
      <div class="schoolcard4-image-container">
        <div class="schoolcard4-image-logo"></div>
        <div class="schoolcard4-image-text">投递方式</div>
      </div>
      <div class="schoolcard4-text-container">
        <div class="schoolcard4-text-list">
          <div class="schoolcard4-text-list-item">◆ 官网投递简历</div>
          <div class="schoolcard4-text-list-item">https://app.mokahr.com</div>
          <div class="schoolcard4-text-list-item">
            ◆
            内部推荐内部推荐，找到身边银泰的师兄or师姐，请TA在【银泰商业招聘】公众号
          </div>
          <div class="schoolcard4-text-list-item">
            点击右下角【招聘】-【内部推荐】，按系统提示完成身份认证并生成内推海报，
          </div>
          <div class="schoolcard4-text-list-item">
            ◆
            扫描“专属的内推二维码“即可投递简历，或让师兄/师姐直接上传简历，完成内推
          </div>
          <div class="schoolcard4-text-list-item">
            ◆线下宣讲会、双选会现场扫码投递
          </div>
        </div>
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
