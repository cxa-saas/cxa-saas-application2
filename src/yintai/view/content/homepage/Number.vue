<style lang="scss">
@font-face {
  font-family: "Montserrat";
  src: url("/media/yintai/font/Montserrat-Medium.ttf");
}
@media screen and (min-width: 55rem) {
  .number {
    margin-top: 6rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .numfont {
      margin-top: 5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      .num {
        color: #e02b20 !important;
        font-size: 4rem;
        font-weight: 500;
        font-family: "Montserrat", Helvetica, Arial, Lucida, sans-serif;
      }
      .numhidden {
        color: #666666 !important;
        font-size: 1.3rem;
        font-weight: 700;
      }
    }
  }
}
@media screen and (max-width: 55rem) {
  .number {
    margin-top: 6rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .numfont {
      margin-top: 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      .num {
        color: #e02b20 !important;
        font-size: 4rem;
        font-weight: 500;
        font-family: "Montserrat", Helvetica, Arial, Lucida, sans-serif;
      }
      .numhidden {
        color: #666666 !important;
        font-size: 1.3rem;
        font-weight: 700;
      }
    }
  }
}
</style>

<template>
  <div class="number">
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-6 col-md-6 col-lg-3 numfont">
          <div class="num">1998</div>
          <div class="numhidden">第一家店杭州武林银泰开业</div>
        </div>
        <div class="col-12 col-sm-6 col-md-6 col-lg-3 numfont">
          <div class="num">500</div>
          <div class="numhidden">中国服务企业500强</div>
        </div>
        <div class="col-12 col-sm-6 col-md-6 col-lg-3 numfont">
          <div class="num">2000亿</div>
          <div class="numhidden">年销售额</div>
        </div>
        <div class="col-12 col-sm-6 col-md-6 col-lg-3 numfont">
          <div class="num">2000W+</div>
          <div class="numhidden">万银泰百货数字化会员</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
