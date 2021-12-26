<template>
  <div>
    <StoreBanner></StoreBanner>
    <StoreTitle></StoreTitle>
    <StoreList></StoreList>
    <StoreBanner3></StoreBanner3>
  </div>
</template>

<script>
import StoreBanner from "@/yintai/view/content/store/StoreBanner.vue";
import StoreTitle from "@/yintai/view/content/store/StoreTitle.vue";
import StoreList from "@/yintai/view/content/store/StoreList.vue";

import StoreBanner3 from "@/yintai/view/content/store/StoreBanner3.vue";

export default {
  name: "store",
  components: {
    StoreBanner,
    StoreTitle,
    StoreList,
    StoreBanner3,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
