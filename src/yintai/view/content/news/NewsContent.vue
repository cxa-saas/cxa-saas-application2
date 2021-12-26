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

@media screen and (min-width: 55rem) {
  .newscontainer {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    .newcontent-list {
      width: 80%;
      max-width: 1080px;
      display: flex;
      flex-direction: column;
      .newcontent-item {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        height: 30rem;
        margin-top: 4rem;

        .newcontent-item-left {
          width: 70%;
          background-image: url("/media/yintai/newslist-3.png");
          background-size: 100% 100%;
          height: 100%;
        }
        .newcontent-item-right {
          width: 30%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          margin-left: 1rem;
          .newcontent-item-title {
            font-size: 25px;
            font-family: SourceHanSansSC-Bold;
            font-weight: bold;
            color: #000000;
            margin-bottom: 1rem;
          }
          .newcontent-item-subtitle {
            font-size: 14px;
            font-family: SourceHanSansCN-Medium;
            color: #000000;
          }
          .newcontent-item-text {
            width: 100%;
            font-size: 10px;
            font-family: SourceHanSansCN-Normal;
            font-weight: 400;
            color: #000000;
            text-align: left;
            margin-top: 2rem;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 55rem) {
  .newscontainer {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    .newcontent-list {
      width: 80%;
      max-width: 1080px;
      display: flex;
      flex-direction: column;
      .newcontent-item {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        margin-top: 5rem;

        .newcontent-item-left {
          width: 100%;
          height: 25rem;

          background-image: url("/media/yintai/newslist-3.png");
          background-size: cover;
          background-position: center center;
        }
        .newcontent-item-right {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          margin-left: 1rem;
          .newcontent-item-title {
            font-size: 25px;
            font-family: SourceHanSansSC-Bold;
            font-weight: bold;
            color: #000000;
            margin-bottom: 1rem;
          }
          .newcontent-item-subtitle {
            font-size: 14px;
            font-family: SourceHanSansCN-Medium;
            color: #000000;
          }
          .newcontent-item-text {
            width: 100%;
            font-size: 10px;
            font-family: SourceHanSansCN-Normal;
            font-weight: 400;
            color: #000000;
            text-align: left;
            margin-top: 2rem;
          }
        }
      }
    }
  }
}
</style>

<template>
  <div class="newscontainer">
    <div class="newcontent-list">
      <a href="#/news-inner"
        ><div class="newcontent-item">
          <div class="newcontent-item-left"></div>
          <div class="newcontent-item-right">
            <div class="newcontent-item-title">浙江首店</div>
            <div class="newcontent-item-subtitle">
              彩妆大师同名品牌Charlotte Tilbury入驻杭州，10月28日开业
            </div>
            <div class="newcontent-item-text">
              《2021颜值经济新消费报告》指出，Z世代对颜值消费的观念正从满足温饱转向体验和服务。
            </div>
            <div class="newcontent-item-text">
              从近期来看，银泰百货迎来高端品牌扎堆入驻潮，成为“城市首店收割机”。同时，多个品牌入驻形成了品牌矩阵，也极大程度上丰富了消费者购物体验。
            </div>
          </div>
        </div>
      </a>

      <a href="#/news-inner">
        <div class="newcontent-item">
          <div class="newcontent-item-left"></div>
          <div class="newcontent-item-right">
            <div class="newcontent-item-title">浙江首店</div>
            <div class="newcontent-item-subtitle">
              彩妆大师同名品牌Charlotte Tilbury入驻杭州，10月28日开业
            </div>
            <div class="newcontent-item-text">
              《2021颜值经济新消费报告》指出，Z世代对颜值消费的观念正从满足温饱转向体验和服务。
            </div>
            <div class="newcontent-item-text">
              从近期来看，银泰百货迎来高端品牌扎堆入驻潮，成为“城市首店收割机”。同时，多个品牌入驻形成了品牌矩阵，也极大程度上丰富了消费者购物体验。
            </div>
          </div>
        </div>
      </a>
      <a href="#/news-inner">
        <div class="newcontent-item">
          <div class="newcontent-item-left"></div>
          <div class="newcontent-item-right">
            <div class="newcontent-item-title">浙江首店</div>
            <div class="newcontent-item-subtitle">
              彩妆大师同名品牌Charlotte Tilbury入驻杭州，10月28日开业
            </div>
            <div class="newcontent-item-text">
              《2021颜值经济新消费报告》指出，Z世代对颜值消费的观念正从满足温饱转向体验和服务。
            </div>
            <div class="newcontent-item-text">
              从近期来看，银泰百货迎来高端品牌扎堆入驻潮，成为“城市首店收割机”。同时，多个品牌入驻形成了品牌矩阵，也极大程度上丰富了消费者购物体验。
            </div>
          </div>
        </div>
      </a>
      <a href="#/news-inner">
        <div class="newcontent-item">
          <div class="newcontent-item-left"></div>
          <div class="newcontent-item-right">
            <div class="newcontent-item-title">浙江首店</div>
            <div class="newcontent-item-subtitle">
              彩妆大师同名品牌Charlotte Tilbury入驻杭州，10月28日开业
            </div>
            <div class="newcontent-item-text">
              《2021颜值经济新消费报告》指出，Z世代对颜值消费的观念正从满足温饱转向体验和服务。
            </div>
            <div class="newcontent-item-text">
              从近期来看，银泰百货迎来高端品牌扎堆入驻潮，成为“城市首店收割机”。同时，多个品牌入驻形成了品牌矩阵，也极大程度上丰富了消费者购物体验。
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "newsContent",
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
