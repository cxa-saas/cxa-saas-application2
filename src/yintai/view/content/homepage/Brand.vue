<style lang="scss">
.brand-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .brand {
    width: 80%;
    margin-top: 10rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    height: auto;

    @media screen and (max-width: 55rem) {
      flex-direction: column;
    }

    .brand-img {
      @media screen and (min-width: 55rem) {
        width: 50%;

        .brand-img-content {
          box-shadow: 0px 3px 5px #444444;
          width: 100%;
          height: 0;
          padding: 0;
          padding-bottom: 75%;
          background-size: cover;
          background-image: url("/media/yintai/homepage-1.jpeg");
          background-repeat: no-repeat;
          background-position: 50%;
        }
        min-height: 22rem;
      }

      @media screen and (max-width: 55rem) {
        width: 100%;
        .brand-img-content {
          box-shadow: 0px 12px 80px -6px rgb(0 0 0 / 30%);

          width: 100%;
          height: 0;
          padding: 0;
          padding-bottom: 75%;
          background-size: 100% 100%;
          background-image: url("/media/yintai/homepage-1.jpeg");
          background-repeat: no-repeat;
          background-position: top center;
        }
      }
    }
    .brand-text {
      @media screen and (min-width: 55rem) {
        width: 40%;
        margin-left: 3rem;
        min-height: 10rem;
        margin-top: 3rem;
      }
      @media screen and (max-width: 55rem) {
        width: 100%;
        min-height: 10rem;
        margin-top: 3rem;
      }

      .brand-tip {
        @media screen and (min-width: 55rem) {
          font-family: "Karla", Helvetica, Arial, Lucida, sans-serif;
          font-weight: 700;
          text-transform: uppercase;
          font-size: 1.2rem;
          font-family: Source Han Sans SC;
          color: #e02b20;
        }
        @media screen and (max-width: 55rem) {
          font-family: "Karla", Helvetica, Arial, Lucida, sans-serif;
          font-weight: 700;
          text-transform: uppercase;
          font-size: 1.2rem;
          font-family: Source Han Sans SC;
          color: #e02b20;
          margin-top: 3rem;
        }
      }
      .brand-line {
        // z-index: 3;
        @media screen and (min-width: 55rem) {
          height: 0.1rem;
          width: 15rem;
          border-top: solid #e02b20 0.2rem;
          margin-top: 1rem;
          margin-left: -6rem;
        }

        @media screen and (max-width: 55rem) {
          height: 0.1rem;
          width: 12rem;
          border-top: solid #e02b20 0.2rem;
          margin-top: 2rem;
        }
      }
      .brand-title {
        @media screen and (min-width: 55rem) {
          font-family: "Cormorant Garamond", Georgia, "Times New Roman", serif;
          font-size: 2.8rem;
          line-height: 1.4em;
          margin-top: 3rem;
          font-weight: 500;
        }
        @media screen and (max-width: 55rem) {
          font-family: "Cormorant Garamond", Georgia, "Times New Roman", serif;
          font-size: 3.2rem;
          line-height: 1.4em;
          margin-top: 3rem;
          font-weight: 500;
        }
      }
      .brand-introduction {
        font-size: 1.5rem;
        font-family: "Karla", Helvetica, Arial, Lucida, sans-serif;
        font-weight: 500;
        color: #666666;
        margin-top: 1.5rem;
      }
    }
  }
}
</style>

<template>
  <div class="brand-container">
    <div class="brand">
      <div class="brand-img"><div class="brand-img-content"></div></div>
      <div class="brand-text">
        <div class="brand-tip">BRAND INTRODUCTION</div>
        <div class="brand-line"></div>
        <div class="brand-title">银泰概况</div>
        <div class="brand-introduction">里程碑大事件，银泰新闻</div>
        <div class="brand-introduction">官方媒体定调，行业领先地位</div>
        <a href="#/about"><ButtonRight style="margin-top: 2rem"></ButtonRight></a>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonRight from "@/yintai/view/component/ButtonRight";

export default {
  name: "brand",
  components: { ButtonRight },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
