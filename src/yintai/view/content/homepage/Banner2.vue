<style lang="scss">
@media screen and (min-width: 55rem) {
  .banner2 {
    margin-top: 10rem;
    width: 100%;
    background-image: linear-gradient(
        rgba(0, 0, 0, 0.12) 0%,
        rgba(0, 0, 0, 0.1) 100%
      ),
      url("/media/yintai/banner2.jpeg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center top;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 10%;
    padding-bottom: 10%;
    .context {
      max-width: 1080px;
      width: 80%;
      height: 15rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .title {
        h1 {
          color: #ffffff;
          font-size: 4.6rem;
        }
      }
      .sub-title {
        margin-top: 1rem;
        margin-bottom: 1.6rem;
        h3 {
          color: #ffffff;
          font-size: 1.8rem;
        }
      }
    }
  }
}

@media screen and (max-width: 55rem) {
  .banner2 {
    margin-top: 10rem;
    width: 100%;
    background-image: linear-gradient(
        rgba(0, 0, 0, 0.12) 0%,
        rgba(0, 0, 0, 0.1) 100%
      ),
      url("/media/yintai/banner2.jpeg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center top;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 10%;
    padding-bottom: 10%;
    .context {
      max-width: 1080px;
      width: 80%;
      height: 15rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .title {
        h1 {
          color: #ffffff;
          font-size: 3.4rem;
        }
      }
      .sub-title {
        margin-top: 1rem;
        margin-bottom: 1.6rem;
        h3 {
          color: #ffffff;
          font-size: 1.8rem;
        }
      }
    }
  }
}
</style>

<template>
  <div class="banner2" ref="homepage_banner2">
    <transition name="fade-in-up">
      <div v-show="this.active" class="context">
        <div class="title"><h1>银泰活动</h1></div>
        <div class="sub-title"><h3>我们本业最新的活动,详情在这里</h3></div>
       <a href="#/cloudPicture"> <GetMore></GetMore></a>
      </div>
    </transition>
  </div>
</template>

<script>
import GetMore from "@/yintai/view/component/GetMore";

export default {
  name: "banner2",
  components: { GetMore },
  data() {
    return {
      active: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.getDistance); //绑定页面滚动事件
    this.distance = this.$refs.homepage_banner2.getBoundingClientRect().bottom;
  },
  methods: {
    getDistance() {
      this.distance =
        this.$refs.homepage_banner2.getBoundingClientRect().bottom;

      if (this.distance < 1000 && this.active == false) {
        this.active = true;
      }
    },
  },
};
</script>
