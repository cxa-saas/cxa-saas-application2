<template>
  <div>
    <ContactBanner></ContactBanner>
    <ContactTitle1></ContactTitle1>
    <JoinContent></JoinContent>
    <ContactTitle2></ContactTitle2>
    <ContactContent></ContactContent>
    <ContactBottom></ContactBottom>
    <ContactBanner3></ContactBanner3>
  </div>
</template>

<script>
import ContactBanner from "@/yintai/view/content/contact/ContactBanner.vue";
import ContactTitle1 from "@/yintai/view/content/contact/ContactTitle1.vue";
import ContactTitle2 from "@/yintai/view/content/contact/ContactTitle2.vue";
import ContactContent from "@/yintai/view/content/contact/ContactContent.vue";
import JoinContent from "@/yintai/view/content/contact/JoinContent.vue";
import ContactBottom from "@/yintai/view/content/contact/ContactBottom.vue";

import ContactBanner3 from "@/yintai/view/content/contact/ContactBanner3.vue";

export default {
  name: "contact",
  components: {
    ContactBanner,
    ContactTitle1,
    ContactTitle2,
    ContactContent,
    ContactBanner3,
    ContactBottom,
    JoinContent,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
