<style lang="scss">
.catcontentview {
  @media screen and (min-width: 55rem) {
    width: 100%;
    background-color: #f5f5f5;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
  }

  @media screen and (max-width: 55rem) {
    width: 100%;
    background-color: #f5f5f5;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .catcontentview-left {
    @media screen and (min-width: 55rem) {
      background-size: 100% 100%;
      width: 2.75rem;
      height: 5rem;
      &:hover {
        cursor: pointer;
      }
    }
    @media screen and (max-width: 55rem) {
      display: none;
    }
  }

  .catcontentview-right {
    @media screen and (min-width: 55rem) {
      background-size: 100% 100%;
      width: 2.75rem;
      height: 5rem;
      &:hover {
        cursor: pointer;
      }
    }
    @media screen and (max-width: 55rem) {
      display: none;
    }
  }
  .catcontentview-list {
    @media screen and (min-width: 55rem) {
      margin-top: 5rem;
      margin-bottom: 5rem;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 55rem;
      .catcontentview-item {
        width: 18.3rem;
        height: 32.75rem;
        background-size: 100% 100%;
      }
    }

    @media screen and (max-width: 55rem) {
      width: 100%;
      .catcontentview-item {
        width: 100%;
        height: 52.75rem;
        background-size: 100% 100%;
      }
    }
  }
}
</style>

<template>
  <div class="catcontentview">
    <div
      class="catcontentview-left"
      style="background-image: url('/media/yintai/app-left.png')"
    ></div>

    <div class="catcontentview-list">
      <div class="container">
        <div class="row">
          <div
            class="col-12 col-sm-12 col-md-4 col-lg-4 catcontentview-item"
            style="background-image: url('/media/yintai/app-1.png')"
          ></div>

          <div
            class="col-12 col-sm-12 col-md-4 col-lg-4 catcontentview-item"
            style="background-image: url('/media/yintai/app-2.png')"
          ></div>
          <div
            class="col-12 col-sm-12 col-md-4 col-lg-4 catcontentview-item"
            style="background-image: url('/media/yintai/app-3.png')"
          ></div>
        </div>
      </div>
    </div>

    <div
      class="catcontentview-right"
      style="background-image: url('/media/yintai/app-right.png')"
    ></div>
  </div>
</template>

<script>
export default {
  name: "catcontentview",
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
