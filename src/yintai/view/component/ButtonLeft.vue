<style lang="scss">
@font-face {
  font-family: "SourceHanSansCN-Heavy";
  src: url("/media/yintai/font/SourceHanSansCN-Heavy.otf") format("opentype");
}
@font-face {
  font-family: "SourceHanSansCN-Regular";
  src: url("/media/yintai/font/SourceHanSansCN-Regular.otf") format("opentype");
}
@font-face {
  font-family: "SourceHanSansCN-Medium";
  src: url("/media/yintai/font/SourceHanSansCN-Medium.otf") format("opentype");
}
@font-face {
  font-family: "SourceHanSansCN-Bold";
  src: url("/media/yintai/font/SourceHanSansCN-Bold.otf") format("opentype");
}
.getmore-left {
  display: none;
}
@keyframes buttonShowInLeft {
  0% {
    opacity: 0;
    transform: translateX(0);
  }
  100% {
    opacity: 1;
    transform: translateX(-1rem);
  }
}

.buttonLeft {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  width: 10rem;

  .getmore-button {
    width: 8rem;
    height: 4rem;
    background-color: white;
    border: solid 0.3rem #e02b20;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    .getmore-title {
      font-family: SourceHanSansSC-Medium;
      font-weight: 600;
      color: #e02b20;
      font-size: 1.2rem;
    }
    &:hover {
      width: 10rem;
      cursor: pointer;
      transition: all 0.2s;

      .getmore-left {
        animation: buttonShowInLeft 1s 1;
        display: inline-block;
        font-family: SourceHanSansSC-Medium;
        font-weight: 500;
        color: #e02b20;
        font-size: 1.2rem;
        margin-left: 1rem;
      }
    }
  }
}
</style>

<template>
  <div class="buttonLeft">
    <div class="getmore-button">
      <div class="getmore-title">
        <span class="getmore-left"> &lt;</span>查看更多
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "buttonLeft",
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
