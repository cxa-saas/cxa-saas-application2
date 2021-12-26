<style lang="scss">
@media screen and (min-width: 55rem) {
  .el-carousel__item {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    min-height: 30rem;
  }

  .el-carousel__indicators {
    display: none;
  }
  // .el-carousel__arrow--left {
  //   display: block !important;
  //   right: 10% !important;
  // }
  // .el-carousel__arrow--right {
  //   display: block !important;
  // }
  .catcontentview {
    margin-top: 5rem;
    width: 100%;
    background-color: #f5f5f5;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 34.75rem;
  }
  .content-carousel {
    width: 80%;
    height: 100%;
    top: 8%;
  }

  .el-carousel__item .catcontentview-item {
    width: 100%;
    max-width: 18rem;
    height: 100%;
    // background-image: url("/media/yintai/app-1.png");
    background-size: 100% 100%;
  }
}

@media screen and (max-width: 55rem) {
  .el-carousel__item {
    height: 22.75rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .el-carousel__indicators {
    display: none;
  }
  // .el-carousel__arrow--left {
  //   display: block !important;
  //   right: 10% !important;
  // }
  // .el-carousel__arrow--right {
  //   display: block !important;
  // }
  .catcontentview {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 32.75rem;
  }
  .content-carousel {
    width: 80%;
  }
  .el-carousel__item .catcontentview-item {
    width: 100%;
    max-width: 18rem;
    height: 100%;
    // background-image: url("/media/yintai/app-1.png");
    background-size: 100% 100%;
  }
}
</style>

<template>
  <div class="catcontentview">
    <el-carousel :interval="4000" type="card" class="content-carousel">
      <el-carousel-item v-for="item in imageList" :key="item">
        <div
          class="catcontentview-item"
          :style="`background-image:url('${item}')`"
        ></div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "catcontentview",
  components: {},
  data() {
    return {
      imageList: [
        "/media/yintai/app-4.jpg",
        "/media/yintai/app-1.png",
        "/media/yintai/app-2.png",
        "/media/yintai/app-3.png",
        "/media/yintai/app-5.jpg",
      ],
    };
  },
  mounted() {},
  methods: {},
};
</script>
