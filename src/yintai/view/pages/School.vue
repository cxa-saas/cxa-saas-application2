<template>
  <div>
    <SchoolBanner></SchoolBanner>
    <SchoolTitle></SchoolTitle>
    <SchoolIntroduction></SchoolIntroduction>
    <SchoolJob></SchoolJob>
    <SchoolCards></SchoolCards>
    <SchoolTitle2></SchoolTitle2>
    <SchoolCard2></SchoolCard2>
    <SchoolCard3></SchoolCard3>
    <SchoolProcess></SchoolProcess>
    <SchoolRecruitment></SchoolRecruitment>
    <SchoolSecret></SchoolSecret>
    <SchoolBanner3></SchoolBanner3>
  </div>
</template>

<script>
import SchoolBanner from "@/yintai/view/content/school/SchoolBanner.vue";
import SchoolTitle from "@/yintai/view/content/school/SchoolTitle.vue";
import SchoolIntroduction from "@/yintai/view/content/school/SchoolIntroduction.vue";
import SchoolJob from "@/yintai/view/content/school/SchoolJob.vue";
import SchoolCards from "@/yintai/view/content/school/SchoolCards.vue";
import SchoolTitle2 from "@/yintai/view/content/school/SchoolTitle2.vue";
import SchoolCard2 from "@/yintai/view/content/school/SchoolCard2.vue";
import SchoolCard3 from "@/yintai/view/content/school/SchoolCard3.vue";

import SchoolProcess from "@/yintai/view/content/school/SchoolProcess.vue";
import SchoolRecruitment from "@/yintai/view/content/school/SchoolRecruitment.vue";
import SchoolSecret from "@/yintai/view/content/school/SchoolSecret.vue";

import SchoolBanner3 from "@/yintai/view/content/school/SchoolBanner3.vue";

export default {
  name: "school",
  components: {
    SchoolBanner,
    SchoolTitle,
    SchoolIntroduction,
    SchoolJob,
    SchoolCards,
    SchoolTitle2,
    SchoolCard2,
    SchoolCard3,
    SchoolProcess,
    SchoolRecruitment,
    SchoolSecret,
    SchoolBanner3,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
