<style lang="scss">
@font-face {
  font-family: "SourceHanSansCN-Regular";
  src: url("/media/yintai/font/SourceHanSansCN-Regular.otf") format("opentype");
}
@font-face {
  font-family: "SourceHanSansCN-Medium";
  src: url("/media/yintai/font/SourceHanSansSC-Medium.otf") format("opentype");
}
@font-face {
  font-family: "SourceHanSansCN-Bold";
  src: url("/media/yintai/font/SourceHanSansSC-Bold.otf") format("opentype");
}
@media screen and (min-width: 55rem) {
  .membershipstorebrand-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;

    .membershipstorebrand {
      max-width: 1080px;
      width: 80%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      background-color: white;

      .membershipstorebrand-top {
        width: 100%;
        height: 10rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        .membershipstorebrand-top-subtitle {
          font-size: 1rem;
          font-family: SourceHanSansCN-Medium;
          font-weight: 500;
          color: #e5004f;
          line-height: 3.25rem;
          text-transform: uppercase;
        }
        .membershipstorebrand-top-title {
          font-size: 2rem;
          font-family: SourceHanSansCN-Bold;
          font-weight: bold;
          color: #4b4b4b;
        }
        .membershipstorebrand-top-line {
          width: 2rem;
          height: 0.25rem;
          background-color: #e5004f;
          margin-top: 1rem;
        }
      }
      .membershipstorebrand-content {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        margin-top: 5rem;
        .membershipstorebrand-content-subtitle {
          font-size: 1.5625rem;
          font-family: SourceHanSansSC-Bold;
          font-weight: bold;
          color: #7f7f7f;
        }
        .membershipstorebrand-content-brand {
          margin-top: 1rem;
          width: 100%;
          height: 35.125rem;
          background-size: 100% 100%;
          background-image: url("/media/yintai/cloudstore-brand.png");
          border: 2px #ecc292 solid;
        }
        .membershipstorebrand-content-tip {
          margin-top: 1rem;
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-content: center;
          .membershipstorebrand-content-tiptext {
            font-family: SourceHanSansSC-Medium;
            font-weight: 500;
            color: #7f7f7f;
          }
        }
        .membershipstorebrand-content-download {
          width: 16rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 5rem;
          margin-bottom: 5rem;
          .membershipstorebrand-content-qrcode {
            margin-top: 5rem;
            width: 16rem;
            height: 16rem;
            background-size: 100% 100%;
            background-image: url("/media/yintai/membership-brand-2.png");
            margin-bottom: 1rem;
          }
          .membershipstorebrand-content-text {
            font-size: 1.2rem;
            font-family: SourceHanSansSC-Medium;
            font-weight: 400;
            color: #333333;
            line-height: 1.9375rem;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 55rem) {
  .membershipstorebrand-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;

    .membershipstorebrand {
      max-width: 1080px;
      width: 80%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      background-color: white;

      .membershipstorebrand-top {
        width: 100%;
        height: 10rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        .membershipstorebrand-top-subtitle {
          font-size: 1rem;
          font-family: SourceHanSansCN-Medium;
          font-weight: 500;
          color: #e5004f;
          line-height: 3.25rem;
          text-transform: uppercase;
        }
        .membershipstorebrand-top-title {
          font-size: 2rem;
          font-family: SourceHanSansCN-Bold;
          font-weight: bold;
          color: #4b4b4b;
        }
        .membershipstorebrand-top-line {
          width: 2rem;
          height: 0.25rem;
          background-color: #e5004f;
          margin-top: 1rem;
        }
      }
      .membershipstorebrand-content {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        margin-top: 2rem;
        .membershipstorebrand-content-subtitle {
          font-size: 1.5625rem;
          font-family:SourceHanSansSC-Bold;
          font-weight: bold;
          color: #7f7f7f;
        }
        .membershipstorebrand-content-brand {
          margin-top: 1rem;
          width: 100%;
          height: 16.125rem;
          background-size: 100% 100%;
          background-image: url("/media/yintai/cloudstore-brand.png");
          border: 2px #ecc292 solid;
        }
        .membershipstorebrand-content-tip {
          margin-top: 1rem;
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-content: center;
          .membershipstorebrand-content-tiptext {
            font-family: SourceHanSansSC-Medium;
            font-weight: 500;
            color: #7f7f7f;
          }
        }
        .membershipstorebrand-content-download {
          width: 16rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 5rem;
          margin-bottom: 5rem;
          .membershipstorebrand-content-qrcode {
            margin-top: 5rem;
            width: 16rem;
            height: 16rem;
            background-size: 100% 100%;
            background-image: url("/media/yintai/membership-brand-2.png");
            margin-bottom: 1rem;
          }
          .membershipstorebrand-content-text {
            font-size: 1.2rem;
            font-family: SourceHanSansSC-Medium;
            font-weight: 400;
            color: #333333;
            line-height: 1.9375rem;
          }
        }
      }
    }
  }
}
</style>

<template>
  <div class="membershipstorebrand-container">
    <div class="membershipstorebrand">
      <div class="membershipstorebrand-top">
        <div class="membershipstorebrand-top-subtitle">
          Strong brand endorsement
        </div>
        <div class="membershipstorebrand-top-title">强大的品牌背书</div>
        <div class="membershipstorebrand-top-line"></div>
      </div>
      <div class="membershipstorebrand-content">
        <div class="membershipstorebrand-content-subtitle">
          一站式打包4500+专柜维度的品牌
        </div>
        <div class="membershipstorebrand-content-brand"></div>
        <div class="membershipstorebrand-content-tip">
          <div class="membershipstorebrand-content-tiptext">
            （排名不分先后，持续更新中……）
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "membershipstorebrand",
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
