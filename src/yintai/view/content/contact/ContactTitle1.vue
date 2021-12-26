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
  .contactTitle1 {
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
    align-items: center;
    .contact-title {
      font-size: 45px;
      font-family: SourceHanSansSC-Bold;
      font-weight: bold;
      color: #353535;
    }
    .contact-subtitle {
      font-size: 20px;
      font-family: Source Han Sans SC;
      font-weight: 400;
      color: #7d7d7d;
    }
    .contact-block-list {
      display: flex;
      flex-direction: row;
      justify-items: center;
      align-items: center;
      margin-top: 1rem;
      .contact-block-item {
        width: 43px;
        height: 4px;
        background: #e5004f;
        margin-left: 0.2rem;
      }
    }
  }
}

@media screen and (max-width: 55rem) {
  .contactTitle1 {
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
    align-items: center;
    .contact-title {
      font-size: 25px;
      font-family: SourceHanSansSC-Medium;
      font-weight: bold;
      color: #353535;
    }
    .contact-subtitle {
      font-size: 16px;
      font-family: Source Han Sans SC;
      font-weight: 400;
      color: #7d7d7d;
    }
    .contact-block-list {
      display: flex;
      flex-direction: row;
      justify-items: center;
      align-items: center;
      margin-top: 1rem;
      .contact-block-item {
        width: 43px;
        height: 7px;
        background: #e5004f;
        margin-left: 0.2rem;
      }
    }
  }
}
</style>

<template>
  <div class="contactTitle1">
    <div class="contact-title">加入我们</div>
    <!-- <div class="contact-subtitle">
      "Let the world shopping malls have no difficult business"
    </div> -->
    <div class="contact-block-list">
      <div class="contact-block-item"></div>
      <div class="contact-block-item"></div>
      <div class="contact-block-item"></div>
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
