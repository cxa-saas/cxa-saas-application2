<template>
  <div>
    <CloudPictureBanner></CloudPictureBanner>
    <CloudPictureTitle></CloudPictureTitle>
    <CloudPictureContent></CloudPictureContent>
    <CloudPictureBanner3></CloudPictureBanner3>
  </div>
</template>

<script>
import CloudPictureBanner from "@/yintai/view/content/cloudPicture/CloudPictureBanner.vue";
import CloudPictureTitle from "@/yintai/view/content/cloudPicture/CloudPictureTitle.vue";
import CloudPictureContent from "@/yintai/view/content/cloudPicture/CloudPictureContent.vue";
import CloudPictureBanner3 from "@/yintai/view/content/cloudPicture/CloudPictureBanner3.vue";

export default {
  name: "cloud-picture",
  components: {
    CloudPictureBanner,
    CloudPictureTitle,
    CloudPictureContent,
    CloudPictureBanner3,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
