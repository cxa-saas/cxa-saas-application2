<style lang="scss">
@font-face {
  font-family: "SourceHanSansCN-Medium";
  src: url("/media/yintai/font/SourceHanSansSC-Medium.otf") format("opentype");
}
@font-face {
  font-family: "SourceHanSansCN-Bold";
  src: url("/media/yintai/font/SourceHanSansSC-Bold.otf") format("opentype");
}
@font-face {
  font-family: "SourceHanSansSC-Normal";
  src: url("/media/yintai/font/SourceHanSansSC-Bold.otf") format("opentype");
}

@media screen and (min-width: 55rem) {
  .membershipbannerpath-container {
    margin-top: 5rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .membershipbannerpath {
      max-width: 1080px;
      width: 80%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      background-color: white;
      .membershipbannerpath-top {
        width: 100%;
        height: 10rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        .membershipbannerpath-top-subtitle {
          font-size: 1rem;
          font-family: SourceHanSansCN-Medium;
          font-weight: 500;
          color: #e5004f;
          line-height: 3.25rem;
          text-transform: uppercase;
        }
        .membershipbannerpath-top-title {
          font-size: 2rem;
          font-family: SourceHanSansSC-Bold;
          font-weight: bold;
          color: #4b4b4b;
        }
        .membershipbannerpath-top-line {
          width: 2rem;
          height: 0.25rem;
          background-color: #e5004f;
          margin-top: 1rem;
        }
      }
      .membershipbannerpath-bottom {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        .membershipbannerpath-list {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-content: center;
          .membershipbannerpath-list-item-1 {
            width: 100%;
            height: 25rem;
            margin-top: 2rem;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            .membershipbannerpath-list-item-text {
              width: 40%;
              height: 100%;
              display: flex;
              flex-direction: column;
              align-items: flex-end;
              padding-right: 1rem;
              .membershipbannerpath-list-item-title {
                margin-top: 3rem;

                font-size: 1.6rem;
                font-family: SourceHanSansSC-Bold;
                font-weight: bold;
                color: #4b4b4b;
                line-height: 20px;
              }
              .membershipbannerpath-list-item-line {
                width: 1.5rem;
                height: 0.2rem;
                background-color: #e5004f;
                margin-top: 1rem;
                margin-bottom: 1rem;
              }
              .membershipbannerpath-list-item-span {
                font-size: 10px;
                font-family: SourceHanSansSC-Normal;
                font-weight: 400;
                color: #4b4b4b;
                line-height: 20px;
                margin-bottom: 1rem;
              }
            }

            .membershipbannerpath-list-item-image {
              width: 45%;
              height: 100%;
              background-image: url("/media/yintai/cloudstore-path-1.png");
              background-size: 100% 100%;
            }
          }
          .membershipbannerpath-list-item-2 {
            width: 100%;
            height: 25rem;
            margin-top: 2rem;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            .membershipbannerpath-list-item-text {
              width: 45%;
              height: 100%;
              display: flex;
              flex-direction: column;
              margin-left: 2%;

              .membershipbannerpath-list-item-title {
                margin-top: 3rem;

                font-size: 1.6rem;
                font-family: SourceHanSansSC-Bold;
                font-weight: bold;
                color: #4b4b4b;
                line-height: 20px;
              }
              .membershipbannerpath-list-item-line {
                width: 1.5rem;
                height: 0.2rem;
                background-color: #e5004f;
                margin-top: 1rem;
                margin-bottom: 1rem;
              }
              .membershipbannerpath-list-item-span {
                font-size: 10px;
                font-family: SourceHanSansSC-Bold;
                font-weight: 400;
                color: #4b4b4b;
                line-height: 20px;
                margin-bottom: 1rem;
              }
            }

            .membershipbannerpath-list-item-image {
              width: 45%;
              height: 100%;
              background-image: url("/media/yintai/cloudstore-path-2.png");
              background-size: 100% 100%;
            }
          }
          .membershipbannerpath-list-item-3 {
            width: 100%;
            height: 25rem;
            margin-top: 2rem;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            .membershipbannerpath-list-item-text {
              width: 40%;
              height: 100%;
              display: flex;
              flex-direction: column;
              align-items: flex-end;
              padding-right: 1rem;

              .membershipbannerpath-list-item-title {
                margin-top: 3rem;

                font-size: 1.6rem;
                font-family:SourceHanSansSC-Bold;
                font-weight: bold;
                color: #4b4b4b;
                line-height: 20px;
              }
              .membershipbannerpath-list-item-line {
                width: 1.5rem;
                height: 0.2rem;
                background-color: #e5004f;
                margin-top: 1rem;
                margin-bottom: 1rem;
              }
              .membershipbannerpath-list-item-span {
                font-size: 10px;
                font-family: SourceHanSansSC-Normal;
                font-weight: 400;
                color: #4b4b4b;
                line-height: 20px;
                margin-bottom: 1rem;
              }
            }

            .membershipbannerpath-list-item-image {
              width: 45%;
              height: 100%;
              background-image: url("/media/yintai/cloudstore-path-3.png");
              background-size: 100% 100%;
            }
          }
          .membershipbannerpath-list-item-4 {
            width: 100%;
            height: 25rem;
            margin-top: 2rem;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            .membershipbannerpath-list-item-text {
              width: 45%;
              height: 100%;
              display: flex;
              flex-direction: column;
              margin-left: 2%;

              .membershipbannerpath-list-item-title {
                margin-top: 3rem;

                font-size: 1.6rem;
                font-family:SourceHanSansSC-Bold;
                font-weight: bold;
                color: #4b4b4b;
                line-height: 20px;
              }
              .membershipbannerpath-list-item-line {
                width: 1.5rem;
                height: 0.2rem;
                background-color: #e5004f;
                margin-top: 1rem;
                margin-bottom: 1rem;
              }
              .membershipbannerpath-list-item-span {
                font-size: 10px;
                font-family: SourceHanSansSC-Normal;
                font-weight: 400;
                color: #4b4b4b;
                line-height: 20px;
                margin-bottom: 1rem;
              }
            }

            .membershipbannerpath-list-item-image {
              width: 45%;
              height: 100%;
              background-image: url("/media/yintai/cloudstore-path-4.png");
              background-size: 100% 100%;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 55rem) {
  .membershipbannerpath-container {
    margin-top: 5rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .membershipbannerpath {
      max-width: 1080px;
      width: 80%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      background-color: white;
      .membershipbannerpath-top {
        width: 100%;
        height: 10rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        .membershipbannerpath-top-subtitle {
          font-size: 1rem;
          font-family: SourceHanSansCN-Medium;
          font-weight: 500;
          color: #e5004f;
          line-height: 3.25rem;
          text-transform: uppercase;
        }
        .membershipbannerpath-top-title {
          font-size: 2rem;
          font-family: SourceHanSansSC-Bold;
          font-weight: bold;
          color: #4b4b4b;
        }
        .membershipbannerpath-top-line {
          width: 2rem;
          height: 0.25rem;
          background-color: #e5004f;
          margin-top: 1rem;
        }
      }
      .membershipbannerpath-bottom {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        .membershipbannerpath-list {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-content: center;
          .membershipbannerpath-list-item-1 {
            width: 100%;
            margin-top: 2rem;
            display: flex;
            flex-direction: column-reverse;
            justify-content: center;
            align-items: flex-end;
            .membershipbannerpath-list-item-text {
              width: 40%;
              height: 100%;
              display: flex;
              flex-direction: column;
              align-items: flex-end;
              padding-right: 1rem;
              .membershipbannerpath-list-item-title {
                margin-top: 3rem;

                font-size: 1.6rem;
                font-family: SourceHanSansSC-Bold;
                font-weight: bold;
                color: #4b4b4b;
                line-height: 20px;
              }
              .membershipbannerpath-list-item-line {
                width: 1.5rem;
                height: 0.2rem;
                background-color: #e5004f;
                margin-top: 1rem;
                margin-bottom: 1rem;
              }
              .membershipbannerpath-list-item-span {
                font-size: 10px;
                font-family: SourceHanSansSC-Normal;
                font-weight: 400;
                color: #4b4b4b;
                line-height: 20px;
                margin-bottom: 1rem;
              }
            }

            .membershipbannerpath-list-item-image {
              width: 100%;
              height: 25rem;
              background-image: url("/media/yintai/cloudstore-path-1.png");
              background-size: cover;
              background-position: center center;
            }
          }
          .membershipbannerpath-list-item-2 {
            width: 100%;
            margin-top: 2rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            .membershipbannerpath-list-item-text {
              width: 45%;
              height: 100%;
              display: flex;
              flex-direction: column;
              margin-left: 2%;

              .membershipbannerpath-list-item-title {
                margin-top: 3rem;

                font-size: 1.6rem;
                font-family: SourceHanSansSC-Bold;
                font-weight: bold;
                color: #4b4b4b;
                line-height: 20px;
              }
              .membershipbannerpath-list-item-line {
                width: 1.5rem;
                height: 0.2rem;
                background-color: #e5004f;
                margin-top: 1rem;
                margin-bottom: 1rem;
              }
              .membershipbannerpath-list-item-span {
                font-size: 10px;
                font-family: SourceHanSansSC-Normal;
                font-weight: 400;
                color: #4b4b4b;
                line-height: 20px;
                margin-bottom: 1rem;
              }
            }

            .membershipbannerpath-list-item-image {
              width: 100%;
              height: 25rem;
              background-image: url("/media/yintai/cloudstore-path-2.png");
              background-size: cover;
              background-position: center center;
            }
          }
          .membershipbannerpath-list-item-3 {
            width: 100%;
            margin-top: 2rem;
            display: flex;
            flex-direction: column-reverse;
            justify-content: center;
            align-items: flex-end;
            .membershipbannerpath-list-item-text {
              width: 100%;
              height: 100%;
              display: flex;
              flex-direction: column;
              align-items: flex-end;
              padding-right: 1rem;
              .membershipbannerpath-list-item-title {
                margin-top: 3rem;

                font-size: 1.6rem;
                font-family: SourceHanSansSC-Bold;
                font-weight: bold;
                color: #4b4b4b;
                line-height: 20px;
              }
              .membershipbannerpath-list-item-line {
                width: 1.5rem;
                height: 0.2rem;
                background-color: #e5004f;
                margin-top: 1rem;
                margin-bottom: 1rem;
              }
              .membershipbannerpath-list-item-span {
                font-size: 10px;
                font-family: SourceHanSansSC-Normal;
                font-weight: 400;
                color: #4b4b4b;
                line-height: 20px;
                margin-bottom: 1rem;
                text-align: right;
              }
            }

            .membershipbannerpath-list-item-image {
              width: 100%;
              height: 25rem;
              background-image: url("/media/yintai/cloudstore-path-3.png");
              background-size: cover;
              background-position: center center;
            }
          }
          .membershipbannerpath-list-item-4 {
            width: 100%;
            margin-top: 2rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            .membershipbannerpath-list-item-text {
              width: 45%;
              height: 100%;
              display: flex;
              flex-direction: column;
              margin-left: 2%;

              .membershipbannerpath-list-item-title {
                margin-top: 3rem;

                font-size: 1.6rem;
                font-family: SourceHanSansSC-Bold;
                font-weight: bold;
                color: #4b4b4b;
                line-height: 20px;
              }
              .membershipbannerpath-list-item-line {
                width: 1.5rem;
                height: 0.2rem;
                background-color: #e5004f;
                margin-top: 1rem;
                margin-bottom: 1rem;
              }
              .membershipbannerpath-list-item-span {
                font-size: 10px;
                font-family: SourceHanSansSC-Normal;
                font-weight: 400;
                color: #4b4b4b;
                line-height: 20px;
                margin-bottom: 1rem;
                text-align: left;
              }
            }

            .membershipbannerpath-list-item-image {
              width: 100%;
              height: 25rem;
              background-image: url("/media/yintai/cloudstore-path-4.png");
              background-size: cover;
              background-position: center center;
            }
          }
        }
      }
    }
  }
}
</style>

<template>
  <div class="membershipbannerpath-container">
    <div class="membershipbannerpath">
      <div class="membershipbannerpath-top">
        <div class="membershipbannerpath-top-subtitle">development path</div>
        <div class="membershipbannerpath-top-title">发展历程</div>
        <div class="membershipbannerpath-top-line"></div>
      </div>
      <div class="membershipbannerpath-bottom">
        <div class="membershipbannerpath-list">
          <div class="membershipbannerpath-list-item-1">
            <div class="membershipbannerpath-list-item-text">
              <div class="membershipbannerpath-list-item-title">雏形</div>
              <div class="membershipbannerpath-list-item-line"></div>
              <div class="membershipbannerpath-list-item-span">2018.9</div>
              <div class="membershipbannerpath-list-item-span">云货架墙</div>

              <div class="membershipbannerpath-list-item-span">临平店</div>
            </div>
            <div class="membershipbannerpath-list-item-image"></div>
          </div>
          <div class="membershipbannerpath-list-item-2">
            <div class="membershipbannerpath-list-item-image"></div>

            <div class="membershipbannerpath-list-item-text">
              <div class="membershipbannerpath-list-item-title">云店1.0</div>
              <div class="membershipbannerpath-list-item-line"></div>
              <div class="membershipbannerpath-list-item-span">2018.10.19</div>
              <div class="membershipbannerpath-list-item-span">美妆店</div>

              <div class="membershipbannerpath-list-item-span">中大店</div>
            </div>
          </div>
          <div class="membershipbannerpath-list-item-3">
            <div class="membershipbannerpath-list-item-text">
              <div class="membershipbannerpath-list-item-title">云店2.0</div>
              <div class="membershipbannerpath-list-item-line"></div>
              <div class="membershipbannerpath-list-item-span">
                2019.6.29 厦门国贸 、厦门集美、孝感店、荆门、柳州
              </div>
              <div class="membershipbannerpath-list-item-span">
                临平、蚌埠、龙游、金华、芜湖、海宁、合肥
              </div>
              <div class="membershipbannerpath-list-item-span">
                湖州、宝鸡、富阳.....
              </div>
            </div>

            <div class="membershipbannerpath-list-item-image"></div>
          </div>
          <div class="membershipbannerpath-list-item-4">
            <div class="membershipbannerpath-list-item-image"></div>

            <div class="membershipbannerpath-list-item-text">
              <div class="membershipbannerpath-list-item-title">云店3.0</div>
              <div class="membershipbannerpath-list-item-line"></div>
              <div class="membershipbannerpath-list-item-span">2020.6.1</div>
              <div class="membershipbannerpath-list-item-span">校园店</div>

              <div class="membershipbannerpath-list-item-span">
                浙江传媒学院、浙江大学城市学院、杭州师范大学、
              </div>
              <div class="membershipbannerpath-list-item-span">
                浙江外国语学院、浙江工业大学、芜湖职业技术学院、
              </div>
              <div class="membershipbannerpath-list-item-span">
                中国地质大学
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "membershipbannerpath",
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
