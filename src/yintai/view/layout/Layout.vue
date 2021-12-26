<style lang="scss">
@import "~animate.css";
@font-face {
  font-family: "SourceHanSansCN-Regular";
  src: url("/media/yintai/font/SourceHanSansCN-Regular.otf") format("opentype");
}
* {
  font-family: SourceHanSansCN-Regular;
}
</style>
<template>
  <div>
    <YTHeader></YTHeader>
    <router-view></router-view>
    <YTFooter></YTFooter>
  </div>
</template>

<script>
import YTHeader from "@/yintai/view/layout/header/Header.vue";
import YTFooter from "@/yintai/view/layout/footer/Footer.vue";

export default {
  name: "Layout",
  components: {
    YTHeader,
    YTFooter,
  },
  beforeMount() {},
  mounted() {},
  methods: {},
  computed: {},
};
</script>
