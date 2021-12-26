<template>
  <div>
    <AboutBanner></AboutBanner>
    <Title></Title>
    <AboutOverview></AboutOverview>
    <Target></Target>
    <AboutBanner3></AboutBanner3>
  </div>
</template>

<script>
import AboutBanner from "@/yintai/view/content/about/AboutBanner.vue";
import AboutOverview from "@/yintai/view/content/about/AboutOverview.vue";
import Title from "@/yintai/view/content/about/Title.vue";
import Target from "@/yintai/view/content/about/Target.vue";

import AboutBanner3 from "@/yintai/view/content/about/AboutBanner3.vue";

export default {
  name: "about",
  components: {
    AboutBanner,
    AboutOverview,
    Title,
    Target,
    AboutBanner3,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
