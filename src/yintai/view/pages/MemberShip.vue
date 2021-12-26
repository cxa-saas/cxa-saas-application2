<template>
  <div>
    <MemberShipBanner></MemberShipBanner>
    <MemberShipTitle></MemberShipTitle>
    <MemberShipBannerContent></MemberShipBannerContent>
    <MemberShipRight></MemberShipRight>
    <MemberShipBanner2></MemberShipBanner2>
    <MemberShipCard></MemberShipCard>
    <MemberShipBenefits></MemberShipBenefits>
    <MemberShipComparison></MemberShipComparison>
    <MemberShipBrand></MemberShipBrand>
    <MemberShipBanner3></MemberShipBanner3>
  </div>
</template>

<script>
import MemberShipBanner from "@/yintai/view/content/memberShip/MemberShipBanner.vue";
import MemberShipTitle from "@/yintai/view/content/memberShip/MemberShipTitle.vue";
import MemberShipBannerContent from "@/yintai/view/content/memberShip/MemberShipBannerContent.vue";
import MemberShipRight from "@/yintai/view/content/memberShip/MemberShipRight.vue";
import MemberShipCard from "@/yintai/view/content/memberShip/MemberShipCard.vue";
import MemberShipBenefits from "@/yintai/view/content/memberShip/MemberShipBenefits.vue";
import MemberShipComparison from "@/yintai/view/content/memberShip/MemberShipComparison.vue";
import MemberShipBrand from "@/yintai/view/content/memberShip/MemberShipBrand.vue";
import MemberShipBanner2 from "@/yintai/view/content/memberShip/MemberShipBanner2.vue";
import MemberShipBanner3 from "@/yintai/view/content/memberShip/MemberShipBanner3.vue";

export default {
  name: "memberShip",
  components: {
    MemberShipBanner,
    MemberShipTitle,
    MemberShipCard,
    MemberShipBannerContent,
    MemberShipRight,
    MemberShipBenefits,
    MemberShipComparison,
    MemberShipBrand,
    MemberShipBanner2,
    MemberShipBanner3,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
