<template>
  <div>
    <CatBanner></CatBanner>
    <CatLogo></CatLogo>
    <CatBannerApp></CatBannerApp>
    <CatContent></CatContent>
    <CatContentView></CatContentView>
    <CatDownload></CatDownload>
    <CatBanner3></CatBanner3>
  </div>
</template>

<script>
import CatBanner from "@/yintai/view/content/cat/CatBanner.vue";
import CatLogo from "@/yintai/view/content/cat/CatLogo.vue";
import CatBannerApp from "@/yintai/view/content/cat/CatBannerApp.vue";
import CatContent from "@/yintai/view/content/cat/CatContent.vue";
import CatContentView from "@/yintai/view/content/cat/CatContentView.vue";
import CatDownload from "@/yintai/view/content/cat/CatDownload.vue";

import CatBanner3 from "@/yintai/view/content/cat/CatBanner3.vue";

export default {
  name: "contact",
  components: {
    CatBanner,
    CatLogo,
    CatBannerApp,
    CatContent,
    CatContentView,
    CatDownload,
    CatBanner3,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
