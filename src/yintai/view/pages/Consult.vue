<template>
  <div>
    <ConsultBanner></ConsultBanner>
    <ConsultTitle1></ConsultTitle1>
    <ConsultCards></ConsultCards>
    <ConsultIntroduction></ConsultIntroduction>

    <ConsultGuide></ConsultGuide>
    <ConsultBanner3></ConsultBanner3>
  </div>
</template>

<script>
import ConsultBanner from "@/yintai/view/content/consult/ConsultBanner.vue";
import ConsultTitle1 from "@/yintai/view/content/consult/ConsultTitle1.vue";
import ConsultBanner3 from "@/yintai/view/content/consult/ConsultBanner3.vue";
import ConsultCards from "@/yintai/view/content/consult/ConsultCards.vue";
import ConsultIntroduction from "@/yintai/view/content/consult/ConsultIntroduction.vue";
import ConsultGuide from "@/yintai/view/content/consult/ConsultGuide.vue";

export default {
  name: "Consult",
  components: {
    ConsultBanner,
    ConsultTitle1,
    ConsultCards,
    ConsultIntroduction,
    ConsultBanner3,
    ConsultGuide,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
