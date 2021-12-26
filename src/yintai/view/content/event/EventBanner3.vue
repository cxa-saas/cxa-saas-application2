<style lang="scss">
.eventbanner3 {
  margin-top: 5rem;
  width: 100%;
  background-image: url("/media/yintai/banner3.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: left 40%  top 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 7.5%;
  padding-bottom: 7.5%;
  .context {
    width: 80%;
    height: 16rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .eventbanner3-title {
      h1 {
        color: #ffffff;
        font-size: 4.6rem;
        font-family: "Lato", Helvetica, Arial, Lucida, sans-serif !important;
        font-weight: 900 !important;
        text-transform: uppercase !important;
        font-size: 48px !important;
        letter-spacing: 2px !important;
        line-height: 1.2em !important;
        text-shadow: 0em 0.1em 0.6em rgba(0, 0, 0, 0.24) !important;
      }
    }
  }
}
</style>

<template>
  <div class="eventbanner3">
    <div class="context">
      <div class="eventbanner3-title"><h1>银泰百货</h1></div>
     <a href="#/about"> <GetMore style="margin-top: 2rem"></GetMore></a>
    </div>
  </div>
</template>

<script>
import GetMore from "@/yintai/view/component/GetMore";

export default {
  name: "eventbanner3",
  components: { GetMore },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
