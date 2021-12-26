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
  font-family: "SourceHanSansCN-Medium";
  src: url("/media/yintai/font/SourceHanSansCN-Medium.otf") format("opentype");
}
@font-face {
  font-family: "SourceHanSansCN-Bold";
  src: url("/media/yintai/font/SourceHanSansCN-Bold.otf") format("opentype");
}
@media screen and (min-width: 55rem) {
  .MembershipStoreBanner2-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .membershipbanner2 {
      margin-top: 5rem;
      width: 100%;
      height: 21rem;
      background-image: url("/media/yintai/cloudstore-2.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      display: flex;
      flex-direction: row;
      justify-content:center;
      align-items: center;

      .membershipbanner2-container {
        width: 80%;
        max-width: 1080px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        .membershipbanner2-text {
          font-size: 4rem;
          font-family: SourceHanSansSC-Heavy;
          font-weight: 800;
          color: #ffffff;
          text-shadow: 0px 1px 1px rgba(4, 0, 0, 0.93);
        }
      }
    }
  }
}
@media screen and (max-width: 55rem) {
  .MembershipStoreBanner2-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .membershipbanner2 {
      margin-top: 2rem;
      width: 100%;
      height: 15rem;
      background-image: url("/media/yintai/cloudstore-2.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;

      .membershipbanner2-container {
        width: 50%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        margin-left: 8%;
        .membershipbanner2-text {
          font-size:  3rem;
          font-family: SourceHanSansSC-Heavy;
          font-weight: 800;
          color: #ffffff;
          text-shadow: 0px 1px 1px rgba(4, 0, 0, 0.93);
        }
      }
    }
  }
}
</style>

<template>
  <div class="MembershipStoreBanner2-container">
    <div class="membershipbanner2">
      <div class="membershipbanner2-container">
        <div class="membershipbanner2-text">云店优势</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MembershipStoreBanner2",
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
