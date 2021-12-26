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
  .schoolcard6-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
    height: 20rem;

    .schoolcard6 {
      width: 80%;
      max-width: 1080px;
      box-shadow: 0px 0px 5px #e2dfdfdc;
      border-radius: 1rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      height: 100%;
      .schoolcard6-image-container {
        height: 100%;
        width: 20%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .schoolcard6-image-logo {
          width: 6rem;
          height: 6rem;
          background-image: url("/media/yintai/school-card-2.png");
          background-size: 100% 100%;
        }
        .schoolcard6-image-text {
          font-size: 16px;
          font-family: SourceHanSansCN-Bold;
          font-weight: 500;
          color: #333333;
          margin-top: 1rem;
        }
      }
      .schoolcard6-text-container {
        height: 18rem;
        width: 60%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        .schoolcard6-text-list {
          height: 60%;
          display: flex;
          flex-direction: column;

          .schoolcard6-text-list-item {
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
  .schoolcard6-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;

    .schoolcard6 {
      width: 80%;
      max-width: 1080px;
      box-shadow: 0px 3px 5px #e2dfdfdc;
      border-radius: 1rem;
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      justify-content: center;
      .schoolcard6-image-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .schoolcard6-image-logo {
          margin-top: 2em;
          width: 4rem;
          height: 4rem;
          background-image: url("/media/yintai/school-card-2.png");
          background-size: 100% 100%;
        }
        .schoolcard6-image-text {
          font-size: 12px;
          font-family: SourceHanSansCN-Bold;
          font-weight: 500;
          color: #333333;
          margin-top: 1rem;
          white-space: nowrap;
        }
      }
      .schoolcard6-text-container {
        width: 80%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-bottom: 2rem;
        .schoolcard6-text-list {
          width: 100%;
          display: flex;
          flex-direction: column;

          .schoolcard6-text-list-item {
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
  <div class="schoolcard6-container">
    <div class="schoolcard6">
      <div class="schoolcard6-text-container">
        <div class="schoolcard6-text-list">
          <div class="schoolcard6-text-list-item">
            ◆ 网申/内推：7月23日-10月31日
          </div>
          <div class="schoolcard6-text-list-item">
            ◆ 笔试（技术类）： 8月-9月
          </div>
          <div class="schoolcard6-text-list-item">
            ◆ 空中宣讲会： 8月27日（其他宣讲行程请关注“银泰商业招聘”公众号）
          </div>
          <div class="schoolcard6-text-list-item">◆ 面试：8月中旬-10月下旬</div>
          <div class="schoolcard6-text-list-item">
            ◆ Offer：系统分批次发放意向书
          </div>
          <div class="schoolcard6-text-list-item">
            ◆ 实习体验：取得毕业证前可参与实习体验
          </div>
        </div>
      </div>
      <div class="schoolcard6-image-container">
        <div class="schoolcard6-image-logo"></div>
        <div class="schoolcard6-image-text">投递方式</div>
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
