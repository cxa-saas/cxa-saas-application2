<style lang="scss">
.legal-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;

  .legal {
    margin-top: 10rem;
    margin-bottom: 10rem;
    width: 60%;
    max-width: 680px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .legal-title {
      font-size: 1.6rem;
      margin-bottom: 5rem;
      font-weight: bolder;
    }
    .legal-text-container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      .legal-subtitle {
        font-size: 1.4rem;
        margin-bottom: 1rem;
        font-weight: bolder;
      }
      .legal-text {
        font-size: 1.2rem;
      }
    }
  }
}
</style>
<template>
  <div class="legal-container">
    <div class="legal">
      <div class="legal-title">法律声明</div>
      <div class="legal-text-container">
        <div class="legal-subtitle">权利归属</div>
        <div class="legal-text">
          除非银泰另行声明，银泰推出的所有官方产品、技术、软件、程序、数据及其他信息（包括文字、图标、图片、照片、音频、视频、图表、色彩组合、版面设计等）的所有权利（包括著作权、商标权、专利权、商业秘密及其他相关权利）均归银泰及/或其关联公司所有。未经银泰及/或其关联公司事先许可，任何人擅自使用上述内容和信息，可能会侵犯银泰及/或其关联公司的权利，银泰将会追究侵权者的法律责任
        </div>
        <br />
        <div class="legal-text">
          “银泰百货”等文字及/或标识，以及银泰百货的其他标识、徽记、产品和服务名称均为银泰及/或其关联公司在中国和其他国家的商标，如有宣传、展示等任何使用需要，务必取得银泰及/或其关联公司事先书面授权。
        </div>
        <br />
        <div class="legal-subtitle">信息限制</div>
        <div class="legal-text">
          为维护银泰平台的正常运行秩序及效率，未经银泰及/或其关联公司许可，任何人不得自行、授权或协助第三方对银泰百货官方网站及其系统进行地址扫描、网络端口扫描、操作系统探测等扫描及/或探测，或以包括通过机器人、蜘蛛等程序或设备监视、复制、传播、展示、镜像、上载、下载等方式擅自获取、使用银泰平台内的任何内容。
        </div>
        <br />
        <div class="legal-subtitle">责任限制</div>
        <div class="legal-text">
          银泰转载的作品（包括论坛内容）出于传递更多信息之目的，并不意味我们赞同其观点或已经证实其内容的真实性。
        </div>
        <br />
        <div class="legal-subtitle">知识产权保护</div>
        <div class="legal-text">
          银泰尊重知识产权，反对并打击侵犯知识产权的行为。知识产权权利人若认为银泰内容（包括但不限于银泰用户发布的商品信息）侵犯其合法权益的，可以通过阿里巴巴知识产权保护平台（<a
            href="https://ipp.alibabagroup.com/"
            >https://ipp.alibabagroup.com/</a
          >)进行投诉，我们将在收到知识产权权利人合格通知后依据相应的法律法规以及平台规则及时处理。
        </div>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "legal",
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
