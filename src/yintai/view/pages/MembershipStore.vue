<template>
  <div>
    <MembershipStoreBanner></MembershipStoreBanner>
    <MembershipStoreNew></MembershipStoreNew>
    <MembershipStorePath></MembershipStorePath>
    <MembershipStoreBanner2></MembershipStoreBanner2>
    <MembershipStoreMarket></MembershipStoreMarket>
    <MembershipStoreBrand></MembershipStoreBrand>
    <MembershipStoreIntellectual></MembershipStoreIntellectual>
    <MembershipStoreSystem></MembershipStoreSystem>
    <MembershipStoreOperation></MembershipStoreOperation>
    <MembershipStoreRequire></MembershipStoreRequire>
    <MembershipStoreConnect></MembershipStoreConnect>
  </div>
</template>

<script>
import MembershipStoreBanner from "@/yintai/view/content/membershipStore/MembershipStoreBanner.vue";
import MembershipStoreNew from "@/yintai/view/content/membershipStore/MembershipStoreNew.vue";
import MembershipStorePath from "@/yintai/view/content/membershipStore/MembershipStorePath.vue";
import MembershipStoreBanner2 from "@/yintai/view/content/membershipStore/MembershipStoreBanner2.vue";
import MembershipStoreMarket from "@/yintai/view/content/membershipStore/MembershipStoreMarket.vue";
import MembershipStoreBrand from "@/yintai/view/content/membershipStore/MembershipStoreBrand.vue";
import MembershipStoreIntellectual from "@/yintai/view/content/membershipStore/MembershipStoreIntellectual.vue";
import MembershipStoreSystem from "@/yintai/view/content/membershipStore/MembershipStoreSystem.vue";
import MembershipStoreOperation from "@/yintai/view/content/membershipStore/MembershipStoreOperation.vue";
import MembershipStoreRequire from "@/yintai/view/content/membershipStore/MembershipStoreRequire.vue";

import MembershipStoreConnect from "@/yintai/view/content/membershipStore/MembershipStoreConnect.vue";

export default {
  name: "memberShipStore",
  components: {
    MembershipStoreBanner,
    MembershipStoreNew,
    MembershipStorePath,
    MembershipStoreMarket,
    MembershipStoreIntellectual,
    MembershipStoreSystem,
    MembershipStoreOperation,
    MembershipStoreRequire,
    MembershipStoreConnect,
    MembershipStoreBanner2,
    MembershipStoreBrand,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
