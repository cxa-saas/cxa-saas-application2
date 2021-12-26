<style lang="scss">
@media screen and (min-width: 55rem) {
  .cloud-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    .cloud {
      width: 80%;
      // max-width: 1080px;
      margin-top: 10rem;
      display: flex;
      flex-direction: row;
      justify-content: space-around;

      .cloud-img {
        @media screen and (min-width: 55rem) {
          width: 60%;
          margin-left: -1rem;
          position: relative;
          min-height: 40rem;
        }

        .cloud-img-1 {
          @media screen and (min-width: 55rem) {
            width: 100%;
            height: 100%;
            background-image: linear-gradient(
                rgba(33, 33, 33, 0.5) 0%,
                rgb(33, 33, 33) 100%
              ),
              url("/media/yintai/homepage-2.jpeg");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            background-position: top center;
            // filter: grayscale(70%);
          }
        }

        .cloud-img-2 {
          @media screen and (min-width: 55rem) {
            background-size: 100% 100%;
            background-image: url("/media/yintai/homepage-2.jpeg");
            background-repeat: no-repeat;
            background-position: top center;
            float: left;
            position: absolute;
            box-shadow: 0px 12px 80px -6px rgb(0 0 0 / 30%);
            left: -4rem;
            top: 7rem;
            width: 100%;
            height: 70%;
            z-index: 99;
            max-width: 50.5rem;
          }
        }
      }
      .cloud-text-container {
        width: 40%;
        // background-color: darkmagenta;
        .cloud-text {
          min-height: 20rem;
          margin-top: 5rem;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          margin-right: 7rem;
          .cloud-tip {
            font-family: "Karla", Helvetica, Arial, Lucida, sans-serif;
            font-weight: 700;
            text-transform: uppercase;
            font-size: 1.2rem;
            font-family: Source Han Sans SC;
            color: #e02b20;
          }

          .cloud-line {
            height: 0.1rem;
            width: 20rem;
            border-top: solid #e02b20 0.2rem;
            margin-top: 1rem;
            margin-right: -8rem;
          }
          .cloud-title {
            font-family: "Cormorant Garamond", Georgia, "Times New Roman", serif;
            font-size: 2.8rem;
            line-height: 1.4em;
            margin-top: 3rem;
            font-weight: 500;
          }
          .cloud-introduction {
            text-align: right;
            font-size: 1.5rem;
            font-family: "Karla", Helvetica, Arial, Lucida, sans-serif;
            font-weight: 500;
            color: #666666;
            margin-top: 1.5rem;
            white-space: nowrap;
            overflow: hidden;
          }
          .cloud-button {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 6rem;
            height: 3rem;
            border: solid 0.2rem #e02b20;
            margin-top: 2rem;
            .cloud-button-text {
              margin-top: 0.9rem;
              color: #e02b20;
              font-weight: 800;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 55rem) {
  .cloud-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .cloud {
      width: 100%;
      margin-top: 10rem;
      display: flex;
      justify-content: space-around;
      height: auto;
      flex-direction: column;
      align-items: flex-end;
      .cloud-text-container {
        width: 80%;
        .cloud-text {
          width: 100%;
          margin-left: -3rem;
          min-height: 20rem;
          margin-top: 3rem;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          .cloud-tip {
            font-family: "Karla", Helvetica, Arial, Lucida, sans-serif;
            font-weight: 700;
            text-transform: uppercase;
            font-size: 1.2rem;
            font-family: Source Han Sans SC;
            color: #e02b20;
            margin-top: 3rem;
          }

          .cloud-line {
            height: 0.1rem;
            width: 12rem;
            border-top: solid #e02b20 0.2rem;
            margin-top: 3rem;
          }
          .cloud-title {
            font-family: "Cormorant Garamond", Georgia, "Times New Roman", serif;
            font-size: 2.8rem;
            line-height: 1.4em;
            margin-top: 3rem;
            font-weight: 500;
          }
          .cloud-introduction {
            text-align: right;
            font-size: 1.5rem;
            font-family: "Karla", Helvetica, Arial, Lucida, sans-serif;
            font-weight: 500;
            color: #666666;
            margin-top: 1.5rem;
          }
          .cloud-button {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 6rem;
            height: 3rem;
            border: solid 0.2rem #e02b20;
            margin-top: 2rem;
            .cloud-button-text {
              margin-top: 0.9rem;
              color: #e02b20;
              font-weight: 800;
            }
          }
        }
      }
      .cloud-img {
        width: 100%;
        position: relative;
        margin-top: 5rem;
        .cloud-img-1 {
          width: 100%;
          .cloud-img-1-content {
            width: 100%;
            height: 0;
            padding: 0;
            padding-bottom: 75%;
            background-image: linear-gradient(
                rgba(33, 33, 33, 0.5) 0%,
                rgb(33, 33, 33) 100%
              ),
              url("/media/yintai/homepage-2.jpeg");
            background-repeat: no-repeat;
            background-size: cover;
            background-position: top center;
          }
        }

        .cloud-img-2 {
          float: left;
          box-shadow: 0px 12px 80px -6px rgb(0 0 0 / 30%);
          position: absolute;
          left: 10%;
          top: 10%;
          width: 80%;
          z-index: 99;
          .cloud-img-2-content {
            width: 100%;
            height: 0;
            padding: 0;
            padding-bottom: 75%;
            background-size: cover;
            background-image: url("/media/yintai/homepage-2.jpeg");
            background-repeat: no-repeat;
            background-position: top center;
          }
        }
      }
    }
  }
}
</style>

<template>
  <div class="cloud-container">
    <div class="cloud">
      <div class="cloud-text-container">
        <div class="cloud-text">
          <div class="cloud-tip">INTIME SERVICE</div>
          <div class="cloud-line"></div>
          <div class="cloud-title">银泰服务</div>
          <div class="cloud-introduction">
            通过一站式体验服务，提升消费者消费品质，
          </div>
          <div class="cloud-introduction">
            增强用户粘性和消费体感，形成对于银泰及品牌的强心智。
          </div>
          <a @click="gotoLocation"
            ><ButtonLeft style="margin-top: 2rem"></ButtonLeft
          ></a>
        </div>
      </div>
      <div class="cloud-img">
        <div class="cloud-img-1"><div class="cloud-img-1-content"></div></div>
        <div class="cloud-img-2"><div class="cloud-img-2-content"></div></div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonLeft from "@/yintai/view/component/ButtonLeft";

export default {
  name: "cloud",
  components: { ButtonLeft },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    gotoLocation() {
      document.getElementById("buesiness-container").scrollIntoView();
    },
  },
};
</script>
