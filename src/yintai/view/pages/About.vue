<template>
  <div>
    <AboutBanner></AboutBanner>
    <Title></Title>
    <AboutOverview></AboutOverview>
    <Target></Target>
    <MileStore></MileStore>
    <Future></Future>
    <AboutBanner3></AboutBanner3>
  </div>
</template>

<script>
import AboutBanner from "@/yintai/view/content/about/AboutBanner.vue";
import AboutOverview from "@/yintai/view/content/about/AboutOverview.vue";
import Title from "@/yintai/view/content/about/Title.vue";
import Target from "@/yintai/view/content/about/Target.vue";
import MileStore from "@/yintai/view/content/event/MileStore.vue";
import Future from "@/yintai/view/content/event/Future.vue";
import AboutBanner3 from "@/yintai/view/content/about/AboutBanner3.vue";

export default {
  name: "about",
  components: {
    AboutBanner,
    AboutOverview,
    Title,
    Target,
    MileStore,
    Future,
    AboutBanner3,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
