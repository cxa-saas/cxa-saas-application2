<template>
  <div>
    <NewsBanner></NewsBanner>
    <NewsTitle></NewsTitle>
    <NewsContent></NewsContent>
    <NewsBanner3></NewsBanner3>
  </div>
</template>

<script>
import NewsBanner from "@/yintai/view/content/news/NewsBanner.vue";
import NewsTitle from "@/yintai/view/content/news/NewsTitle.vue";
import NewsContent from "@/yintai/view/content/news/NewsContent.vue";
import NewsBanner3 from "@/yintai/view/content/news/NewsBanner3.vue";

export default {
  name: "about",
  components: {
    NewsBanner,
    NewsTitle,
    NewsContent,
    NewsBanner3,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
