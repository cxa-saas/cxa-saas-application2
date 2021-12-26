<style lang="scss">
@media screen and (min-width: 55rem) {
  .banner3 {
    margin-top: 5rem;
    width: 100%;
    background-image: url("/media/yintai/app-4.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: 48% 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 8%;
    padding-bottom: 8%;
    .context {
      width: 80%;
      height: 16rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .title {
        h1 {
          color: #ffffff;
          font-size: 4.8rem;
          font-family: Source Han Sans SC;
          font-weight: 800;
          color: #ffffff;
          text-shadow: 0px 2px 3px rgba(4, 0, 0, 0.93);
        }
      }
    }
  }
}

@media screen and (max-width: 55rem) {
  .banner3 {
    margin-top: 5rem;
    width: 100%;
    background-image: url("/media/yintai/app-4.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: 48% 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 8%;
    padding-bottom: 8%;
    .context {
      width: 80%;
      height: 16rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .title {
        h1 {
          color: #ffffff;
          font-size: 4.8rem;
          font-family: Source Han Sans SC;
          font-weight: 800;
          color: #ffffff;
          text-shadow: 0px 2px 3px rgba(4, 0, 0, 0.93);
        }
      }
    }
  }
}
</style>

<template>
  <div class="banner3">
    <div class="context">
      <div class="title"><h1>银泰百货</h1></div>
      <GetMore style="margin-top: 2rem"></GetMore>
    </div>
  </div>
</template>

<script>
import GetMore from "@/yintai/view/component/GetMore";

export default {
  name: "catbanner2",
  components: { GetMore },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
