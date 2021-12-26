<style lang="scss">
.news {
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  .brand-title {
    width: 589px;
    height: 43px;
    font-size: 45px;
    font-family: Source Han Sans SC;
    font-weight: bold;
    color: #353535;
  }
  .brand-subtitle {
    width: 623px;
    height: 21px;
    font-size: 20px;
    font-family: Source Han Sans SC;
    font-weight: 400;
    color: #7d7d7d;
  }
  .brand-block-list {
    display: flex;
    flex-direction: row;
    justify-items: center;
    align-items: center;
    margin-top: 1rem;
    .brand-block-item {
      width: 43px;
      height: 7px;
      background: #E5004F;
      margin-left: 0.2rem;
    }
  }
}
</style>

<template>
  <div class="news">
    <!-- <div class="brand-title">让天下商场没有难做的生意</div>
    <div class="brand-subtitle">
      "Let the world shopping malls have no difficult business"
    </div> -->
    <div class="brand-block-list">
      <div class="brand-block-item"></div>
      <div class="brand-block-item"></div>
      <div class="brand-block-item"></div>
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
