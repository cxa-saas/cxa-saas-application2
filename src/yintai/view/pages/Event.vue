<template>
  <div>
    <EventBanner></EventBanner>
    <MileStore></MileStore>
    <Future></Future>
    <EventBanner3></EventBanner3>
  </div>
</template>

<script>
import EventBanner from "@/yintai/view/content/event/EventBanner.vue";
import MileStore from "@/yintai/view/content/event/MileStore.vue";
import Future from "@/yintai/view/content/event/Future.vue";

import EventBanner3 from "@/yintai/view/content/event/EventBanner3.vue";

export default {
  name: "event",
  components: {
    EventBanner,
    MileStore,
    Future,
    EventBanner3,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
