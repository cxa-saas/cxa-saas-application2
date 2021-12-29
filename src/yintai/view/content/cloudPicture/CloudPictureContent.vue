<style lang="scss">
@media screen and (min-width: 55rem) {
  .CloudPictureContent {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    min-height: 50rem;
    .CloudPictureContent-list {
      width: 80%;
      max-width: 1080px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      height: auto;
    }
  }
}
@media screen and (max-width: 55rem) {
  .CloudPictureContent {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    min-height: 50rem;
    .CloudPictureContent-list {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      height: auto;
    }
  }
}
</style>

<template>
  <div class="CloudPictureContent">
    <div class="CloudPictureContent-list">
      <vue-waterfall-easy
        :imgsArr="imgsArr"
        :imgWidth="200"
        @scrollReachBottom="getData"
      ></vue-waterfall-easy>
    </div>
  </div>
</template>

<script>
import vueWaterfallEasy from "vue-waterfall-easy";

export default {
  name: "CloudPictureContent",
  components: {
    vueWaterfallEasy,
  },
  data() {
    return {
      imgsArr: [
        {
          src: "/media/yintai/cloudimage-demo1.png",
          href: "https://www.baidu.com",
          info: "一些图片描述文字",
        },
        {
          src: "/media/yintai/cloudimage-demo2.png",
          href: "https://www.baidu.com",
          info: "一些图片描述文字",
        },
        {
          src: "/media/yintai/cloudimage-demo3.png",
          href: "https://www.baidu.com",
          info: "一些图片描述文字",
        },
        {
          src: "/media/yintai/cloudimage-demo4.png",
          href: "https://www.baidu.com",
          info: "一些图片描述文字",
        },
        {
          src: "/media/yintai/cloudimage-demo5.png",
          href: "https://www.baidu.com",
          info: "一些图片描述文字",
        },
        {
          src: "/media/yintai/cloudimage-demo6.png",
          href: "https://www.baidu.com",
          info: "一些图片描述文字",
        },
        {
          src: "/media/yintai/cloudimage-demo7.png",
          href: "https://www.baidu.com",
          info: "一些图片描述文字",
        },
        {
          src: "/media/yintai/cloudimage-demo8.png",
          href: "https://www.baidu.com",
          info: "一些图片描述文字",
        },
        {
          src: "/media/yintai/cloudimage-demo9.png",
          href: "https://www.baidu.com",
          info: "一些图片描述文字",
        },
        {
          src: "/media/yintai/cloudimage-demo10.png",
          href: "https://www.baidu.com",
          info: "一些图片描述文字",
        },
        {
          src: "/media/yintai/cloudimage-demo11.png",
          href: "https://www.baidu.com",
          info: "一些图片描述文字",
        },
        {
          src: "/media/yintai/cloudimage-demo12.png",
          href: "https://www.baidu.com",
          info: "一些图片描述文字",
        },
        {
          src: "/media/yintai/cloudimage-demo13.png",
          href: "https://www.baidu.com",
          info: "一些图片描述文字",
        },
        {
          src: "/media/yintai/cloudimage-demo14.png",
          href: "https://www.baidu.com",
          info: "一些图片描述文字",
        },
        {
          src: "/media/yintai/cloudimage-demo1.png",
          href: "https://www.baidu.com",
          info: "一些图片描述文字",
        },
        {
          src: "/media/yintai/cloudimage-demo2.png",
          href: "https://www.baidu.com",
          info: "一些图片描述文字",
        },
        {
          src: "/media/yintai/cloudimage-demo3.png",
          href: "https://www.baidu.com",
          info: "一些图片描述文字",
        },
        {
          src: "/media/yintai/cloudimage-demo4.png",
          href: "https://www.baidu.com",
          info: "一些图片描述文字",
        },
        {
          src: "/media/yintai/cloudimage-demo5.png",
          href: "https://www.baidu.com",
          info: "一些图片描述文字",
        },
        {
          src: "/media/yintai/cloudimage-demo6.png",
          href: "https://www.baidu.com",
          info: "一些图片描述文字",
        },
        {
          src: "/media/yintai/cloudimage-demo7.png",
          href: "https://www.baidu.com",
          info: "一些图片描述文字",
        },
        {
          src: "/media/yintai/cloudimage-demo8.png",
          href: "https://www.baidu.com",
          info: "一些图片描述文字",
        },
        {
          src: "/media/yintai/cloudimage-demo9.png",
          href: "https://www.baidu.com",
          info: "一些图片描述文字",
        },
        {
          src: "/media/yintai/cloudimage-demo10.png",
          href: "https://www.baidu.com",
          info: "一些图片描述文字",
        },
        {
          src: "/media/yintai/cloudimage-demo11.png",
          href: "https://www.baidu.com",
          info: "一些图片描述文字",
        },
        {
          src: "/media/yintai/cloudimage-demo12.png",
          href: "https://www.baidu.com",
          info: "一些图片描述文字",
        },
        {
          src: "/media/yintai/cloudimage-demo13.png",
          href: "https://www.baidu.com",
          info: "一些图片描述文字",
        },
        {
          src: "/media/yintai/cloudimage-demo14.png",
          href: "https://www.baidu.com",
          info: "一些图片描述文字",
        },
      ],
      group: 0, // request param
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      // In the real environment,the backend will return a new image array based on the parameter group.
      // Here I simulate it with a stunned json file.
      // axios.get("./static/mock/data.json?group=" + this.group).then((res) => {
      //   this.imgsArr = this.imgsArr.concat(res.data);
      //   this.group++;
      // });
      this.imgsArr = this.imgsArr.concat([
        {
          src: "/media/yintai/cloudpicture-1.png",
          href: "https://www.baidu.com",
          info: "一些图片描述文字",
        },
        {
          src: "/media/yintai/cloudpicture-1.png",
          href: "https://www.baidu.com",
          info: "一些图片描述文字",
        },
        {
          src: "/media/yintai/cloudimage-demo1.png",
          href: "https://www.baidu.com",
          info: "一些图片描述文字",
        },
        {
          src: "/media/yintai/cloudimage-demo2.png",
          href: "https://www.baidu.com",
          info: "一些图片描述文字",
        },
        {
          src: "/media/yintai/cloudimage-demo3.png",
          href: "https://www.baidu.com",
          info: "一些图片描述文字",
        },
        {
          src: "/media/yintai/cloudimage-demo4.png",
          href: "https://www.baidu.com",
          info: "一些图片描述文字",
        },
        {
          src: "/media/yintai/cloudimage-demo5.png",
          href: "https://www.baidu.com",
          info: "一些图片描述文字",
        },
        {
          src: "/media/yintai/cloudimage-demo6.png",
          href: "https://www.baidu.com",
          info: "一些图片描述文字",
        },
        {
          src: "/media/yintai/cloudimage-demo7.png",
          href: "https://www.baidu.com",
          info: "一些图片描述文字",
        },
        {
          src: "/media/yintai/cloudimage-demo8.png",
          href: "https://www.baidu.com",
          info: "一些图片描述文字",
        },
        {
          src: "/media/yintai/cloudimage-demo9.png",
          href: "https://www.baidu.com",
          info: "一些图片描述文字",
        },
        {
          src: "/media/yintai/cloudimage-demo10.png",
          href: "https://www.baidu.com",
          info: "一些图片描述文字",
        },
        {
          src: "/media/yintai/cloudimage-demo11.png",
          href: "https://www.baidu.com",
          info: "一些图片描述文字",
        },
        {
          src: "/media/yintai/cloudimage-demo12.png",
          href: "https://www.baidu.com",
          info: "一些图片描述文字",
        },
        {
          src: "/media/yintai/cloudimage-demo13.png",
          href: "https://www.baidu.com",
          info: "一些图片描述文字",
        },
        {
          src: "/media/yintai/cloudimage-demo14.png",
          href: "https://www.baidu.com",
          info: "一些图片描述文字",
        },
      ]);
    },
  },
};
</script>
