<template>
  <div>
    <NewsInnerBanner></NewsInnerBanner>
    <NewsInnerTitle></NewsInnerTitle>
    <NewsInnerContent></NewsInnerContent>
    <NewsInnerBanner3></NewsInnerBanner3>
  </div>
</template>

<script>
import NewsInnerBanner from "@/yintai/view/content/newsInner/NewsInnerBanner.vue";
import NewsInnerTitle from "@/yintai/view/content/newsInner/NewsInnerTitle.vue";
import NewsInnerContent from "@/yintai/view/content/newsInner/NewsInnerContent.vue";
import NewsInnerBanner3 from "@/yintai/view/content/newsInner/NewsInnerBanner3.vue";

export default {
  name: "news-inner",
  components: {
    NewsInnerBanner,
    NewsInnerTitle,
    NewsInnerContent,
    NewsInnerBanner3,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
