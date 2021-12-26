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
  .schoolprocess-container {
    margin-top: 5rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .schoolprocess {
      max-width: 1080px;
      width: 80%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      background-color: white;
      height: 25rem;

      .schoolprocess-top {
        width: 100%;
        height: 10rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        .schoolprocess-top-subtitle {
          font-size: 0.8rem;
          font-family: SourceHanSansCN-Medium;
          font-weight: 500;
          color: #e5004f;
          line-height: 3.25rem;
          text-transform: uppercase;
        }
        .schoolprocess-top-title {
          font-size: 1.6rem;
          font-family: SourceHanSansSC-Bold;
          font-weight: bold;
          color: #4b4b4b;
        }
        .schoolprocess-top-line {
          width: 2rem;
          height: 0.25rem;
          background-color: #e5004f;
          margin-top: 1rem;
        }
      }
      .schoolprocess-list {
        margin-top: 2rem;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width: 80%;
        height: 10rem;
        // background-color: #e5004f;
        .schoolprocess-list-item {
          width: 6rem;
          height: 8rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          .schoolprocess-icon {
            width: 4rem;
            height: 4rem;
            border-radius: 50%;
            background-image: url("/media/yintai/school-process-1.png");
            background-size: 50% 50%;
            background-position: center;
            background-color: #e5004f;
          }
          .schoolprocess-text {
            margin-top: 0.5rem;
            width: 6rem;
            height: 1rem;
            text-align: center;
            white-space: nowrap;
            font-size: 1rem;
            font-family: SourceHanSansSC-Medium;
            font-weight: 500;
            color: #333333;
          }
        }
        .schoolprocess-line {
          width: 2rem;
          height: 0.25rem;
          background-color: #e5004f;
          margin-top: -3rem;
        }
      }
    }
  }
}

@media screen and (max-width: 55rem) {
  .schoolprocess-container {
    margin-top: 5rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .schoolprocess {
      max-width: 1080px;
      width: 80%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      background-color: white;
      height: 25rem;

      .schoolprocess-top {
        width: 100%;
        height: 10rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        .schoolprocess-top-subtitle {
          font-size: 0.8rem;
          font-family: SourceHanSansCN-Medium;
          font-weight: 500;
          color: #e5004f;
          line-height: 3.25rem;
          text-transform: uppercase;
        }
        .schoolprocess-top-title {
          font-size: 1.6rem;
          font-family: SourceHanSansSC-Bold;
          font-weight: bold;
          color: #4b4b4b;
        }
        .schoolprocess-top-line {
          width: 2rem;
          height: 0.25rem;
          background-color: #e5004f;
          margin-top: 1rem;
        }
      }
      .schoolprocess-list {
        margin-top: 2rem;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        
        align-items: center;
        width: 100%;
        height: 10rem;
        // background-color: #e5004f;
        .schoolprocess-list-item {
          width: 6rem;
          height: 8rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          .schoolprocess-icon {
            width: 4rem;
            height: 4rem;
            border-radius: 50%;
            background-image: url("/media/yintai/school-process-1.png");
            background-size: 50% 50%;
            background-position: center;
            background-color: #e5004f;
          }
          .schoolprocess-text {
            margin-top: 0.5rem;
            width: 6rem;
            height: 1rem;
            text-align: center;
            white-space: nowrap;
            font-size: 1rem;
            font-family: SourceHanSansSC-Medium;
            font-weight: 500;
            color: #333333;
          }
        }
        .schoolprocess-line {
          width: 2rem;
          height: 0.25rem;
          background-color: #e5004f;
          margin-top: -3rem;
        }
      }
    }
  }
}
</style>

<template>
  <div class="schoolprocess-container">
    <div class="schoolprocess">
      <div class="schoolprocess-top">
        <div class="schoolprocess-top-subtitle">Application process</div>
        <div class="schoolprocess-top-title">应聘流程</div>
        <div class="schoolprocess-top-line"></div>
      </div>
      <div class="schoolprocess-list">
        <div class="schoolprocess-list-item">
          <div class="schoolprocess-icon"></div>
          <div class="schoolprocess-text">网申/内推</div>
        </div>
        <div class="schoolprocess-line"></div>
        <div class="schoolprocess-list-item">
          <div
            class="schoolprocess-icon"
            style="background-image: url('/media/yintai/school-process-2.png')"
          ></div>
          <div class="schoolprocess-text">简历筛选</div>
        </div>
        <div class="schoolprocess-line"></div>
        <div class="schoolprocess-list-item">
          <div
            class="schoolprocess-icon"
            style="background-image: url('/media/yintai/school-process-3.png')"
          ></div>
          <div class="schoolprocess-text">笔试（技术类）</div>
        </div>
        <div class="schoolprocess-line"></div>
        <div class="schoolprocess-list-item">
          <div
            class="schoolprocess-icon"
            style="background-image: url('/media/yintai/school-process-4.png')"
          ></div>
          <div class="schoolprocess-text">面试</div>
        </div>
        <div class="schoolprocess-line"></div>
        <div class="schoolprocess-list-item">
          <div
            class="schoolprocess-icon"
            style="background-image: url('/media/yintai/school-process-5.png')"
          ></div>
          <div class="schoolprocess-text">发放Offer</div>
        </div>
        <div class="schoolprocess-line"></div>
        <div class="schoolprocess-list-item">
          <div
            class="schoolprocess-icon"
            style="background-image: url('/media/yintai/school-process-6.png')"
          ></div>
          <div class="schoolprocess-text">正式入职</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "schoolprocess",
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
