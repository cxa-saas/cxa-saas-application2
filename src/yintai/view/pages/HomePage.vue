<template>
  <div>
    <Banner></Banner>
    <Number></Number>
    <Brand></Brand>
    <Cloud></Cloud>
    <Service></Service>
    <Banner2></Banner2>
    <Business></Business>
    <Banner3></Banner3>
  </div>
</template>

<script>
import Banner from "@/yintai/view/content/homepage/Banner.vue";
import Number from "@/yintai/view/content/homepage/Number.vue";
import Brand from "@/yintai/view/content/homepage/Brand.vue";
import Cloud from "@/yintai/view/content/homepage/Cloud.vue";
import Service from "@/yintai/view/content/homepage/Service.vue";
import Banner2 from "@/yintai/view/content/homepage/Banner2.vue";
import Business from "@/yintai/view/content/homepage/Business.vue";
import Banner3 from "@/yintai/view/content/homepage/Banner3.vue";

export default {
  name: "home",
  components: {
    Banner,
    Number,
    Brand,
    Cloud,
    Service,
    Banner2,
    Business,
    Banner3,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
