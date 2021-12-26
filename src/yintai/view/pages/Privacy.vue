<style lang="scss">
.privacy-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  
  .privacy {
    margin-top: 10rem;
    margin-bottom: 10rem;
    width: 60%;
    max-width: 680px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .privacy-title {
    font-size: 1.6rem;
    margin-bottom: 5rem;
    font-weight: bolder;
  }

  .privacy-text {
    font-size: 1.2rem;
  }
}
</style>
<template>
  <div class="privacy-container">
    <div class="privacy">
      <div class="privacy-title">隐私声明</div>
      <div class="privacy-text-container">
        <div class="privacy-text">
          银泰非常重视用户的信息安全，为了保障用户隐私数据的安全，按照法律法规的要求，银泰一直努力采取各种符合业界标准、合理可行的安全防护措施来保护用户信息。防止用户信息遭到未经授权访问、公开披露、使用、修改、损坏或丢失。银泰使用加密技术提高用户信息的安全性；使用受信赖的保护机制防止用户信息遭到恶意攻击；部署访问控制机制，尽力确保只有授权人员才可访问用户信息；同时银泰会对员工进行数据安全和隐私保护方面的培训教育，以加强员工对保护用户数据的安全意识。未经合法授权的情况下，其他客户无法访问其存储数据，银泰亦无权利无途径查看用户存储的数据信息。
        </div>
        <br />
        <div class="privacy-text">
          如在不幸发生用户信息安全时间后，银泰将按照法律法规的要求，及时向您告知：安全事件的基本情况和可能的影响、银泰已采取或将要采取的处置措施、用户可自主防范和降低风险的建议、对用户的补救措施等。银泰将及时将时间相关情况以邮件、信函、电话、推送通知等方式告知您，难以逐一告知用户时，银泰将会采取合理、有效的方式发布公告。
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "privacy",
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
