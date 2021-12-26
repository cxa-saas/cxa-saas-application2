<style lang="scss">
@media screen and (min-width: 55rem) {
  .membershipbanner2-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .membershipbanner2 {
      margin-top: 5rem;
      width: 100%;
      height: 21rem;
      background-color: #181a1d;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      .membershipbanner2-text {
        width: 40%;
        height: 40%;
        max-width: 780px;
        background-image: url("/media/yintai/membership-10.png");
        background-size: 100% 100%;
      }
    }
  }
}
@media screen and (max-width: 55rem) {
  .membershipbanner2-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .membershipbanner2 {
      margin-top: 2rem;
      width: 100%;
      height: 21rem;
      background-color: #181a1d;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
    .membershipbanner2-text {
      width: 60%;
      height: 30%;
      max-width: 780px;
      background-image: url("/media/yintai/membership-10.png");
      background-size: 100% 100%;
    }
  }
}
</style>

<template>
  <div class="membershipbanner2-container">
    <div class="membershipbanner2">
      <div class="membershipbanner2-text"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "aboutBanner",
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
