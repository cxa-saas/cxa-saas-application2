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
  font-family: "SourceHanSansCN-Heavy";
  src: url("/media/yintai/font/SourceHanSansCN-Heavy.otf") format("opentype");
}
@font-face {
  font-family: "SourceHanSansSC-Medium";
  src: url("/media/yintai/font/SourceHanSansCN-Medium.otf") format("opentype");
}

.card-title {
  font-size: 1.94rem;
  font-family: SourceHanSansSC-Bold;
  font-weight: bold;
  color: #4b4b4b;
  margin-top: 2rem;
}
.card-subtitle {
  font-size: 1rem;
  font-family: SourceHanSansSC-Medium;
  font-weight: 500;
  color: #e5004f;
  margin-top: -2rem;
  margin-bottom: 2rem;
}
.card-content {
  font-size: 1.18rem;
  font-family: SourceHanSansSC-Regular;
  font-weight: 400;
  color: #7f7f7f;
  line-height: 1.94rem;
}
.card-content-title {
  font-size: 1.8rem;
  font-family: SourceHanSansCN-Bold;
  font-weight: 400;
  color: #7f7f7f;
  line-height: 1.94rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

@media screen and (min-width: 55rem) {
  .content {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;

    .joincontact {
      width: 80%;
      max-width: 1080px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      .joincontact-left {
        width: 50%;
        display: flex;
        flex-direction: column;
        .new-contact-1 {
          width: 100%;
          height: 50rem;
          border-radius: 1.2rem;
          box-shadow: 0px 3px 5px #cdcacabe;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          .new-contact-1-top {
            width: 100%;
            height: 22rem;
            background-size: 100% 100%;
            background-image: url("/media/yintai/contact-1.png");
            // margin-left: -1rem;
          }
          .new-contact-1-bottom {
            width: 90%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            text-align: center;
          }
        }
        .new-contact-2 {
          margin-top: 4rem;
          width: 100%;
          height: 52rem;
          border-radius: 1.2rem;
          box-shadow: 0px 3px 5px #cdcacabe;
          display: flex;
          flex-direction: column;
          align-items: center;
          .new-contact-2-top {
            width: 100%;
            height: 22rem;
            background-size: 100% 100%;
            background-image: url("/media/yintai/contact-2.png");
            // margin-left: -1rem;
          }
          .new-contact-2-bottom {
            width: 90%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            text-align: center;
          }
        }
      }
      .joincontact-right {
        width: 45%;
        display: flex;
        flex-direction: column;
        .new-contact-3 {
          width: 100%;
          height: 85rem;
          border-radius: 1.2rem;
          box-shadow: 0px 3px 5px #cdcacabe;
          display: flex;
          flex-direction: column;
          align-items: center;
          .new-contact-3-top {
            width: 100%;
            height: 22rem;
            background-size: 100% 100%;
            background-image: url("/media/yintai/contact-3.png");
            // margin-left: -1rem;
          }
          .new-contact-3-bottom {
            width: 90%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            text-align: center;
          }
        }
        .new-contact-4 {
          margin-top: 1rem;
          width: 100%;
          height: 20rem;
          border-radius: 1.2rem;
          box-shadow: 0px 3px 5px #cdcacabe;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          .qrcode {
            width: 16rem;
            height: 16rem;
            background-image: url("/media/yintai/contact-qrcode.png");
            background-size: 100% 100%;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 55rem) {
  .content {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;

    .joincontact {
      width: 80%;
      max-width: 1080px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .joincontact-left {
        width: 100%;
        display: flex;
        flex-direction: column;
        .new-contact-1 {
          width: 100%;
          height: 50rem;
          border-radius: 1.2rem;
          box-shadow: 0px 3px 5px #cdcacabe;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          .new-contact-1-top {
            width: 100%;
            height: 22rem;
            background-size: 100% 100%;
            background-image: url("/media/yintai/contact-1.png");
            // margin-left: -1rem;
          }
          .new-contact-1-bottom {
            width: 90%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            text-align: center;
          }
        }
        .new-contact-2 {
          margin-top: 4rem;
          width: 100%;
          height: 52rem;
          border-radius: 1.2rem;
          box-shadow: 0px 3px 5px #cdcacabe;
          display: flex;
          flex-direction: column;
          align-items: center;
          .new-contact-2-top {
            width: 100%;
            height: 22rem;
            background-size: 100% 100%;
            background-image: url("/media/yintai/contact-2.png");
            // margin-left: -1rem;
          }
          .new-contact-2-bottom {
            width: 90%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            text-align: center;
          }
        }
      }
      .joincontact-right {
        margin-top: 5rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        .new-contact-3 {
          width: 100%;
          height: 85rem;
          border-radius: 1.2rem;
          box-shadow: 0px 3px 5px #cdcacabe;
          display: flex;
          flex-direction: column;
          align-items: center;
          .new-contact-3-top {
            width: 100%;
            height: 22rem;
            background-size: 100% 100%;
            background-image: url("/media/yintai/contact-3.png");
            // margin-left: -1rem;
          }
          .new-contact-3-bottom {
            width: 90%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            text-align: center;
          }
        }
        .new-contact-4 {
          margin-top: 1rem;
          width: 100%;
          height: 20rem;
          border-radius: 1.2rem;
          box-shadow: 0px 3px 5px #cdcacabe;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          .qrcode {
            width: 16rem;
            height: 16rem;
            background-image: url("/media/yintai/contact-qrcode.png");
            background-size: 100% 100%;
          }
        }
      }
    }
  }
}
</style>

<template>
  <div class="content">
    <div class="joincontact">
      <div class="joincontact-left">
        <div class="new-contact-1">
          <div class="new-contact-1-top"></div>
          <div class="new-contact-1-bottom">
            <div class="card-title">社招</div>
            <div class="card-subtitle">SOCIAL RECRUITMENT</div>
            <div class="card-content">
              &nbsp;&nbsp;
              &nbsp;面对新零售的快速发展，我们秉承“以客为先，关爱员工，创新变革”的经营理念，为培养更多新零售人才。学员通过大学生训练营，轮岗学习，企业大学阶梯式培训，项目历练而追逐渐成长为银泰新零售业务骨干！
              <br />
              &nbsp;&nbsp;
              &nbsp;银泰百货2022年校招职位覆盖全国10大区域，24座城市，包括产品技术岗（JAVA、测试、算法、前端开发）、银泰星储备店总岗、门店营运管理岗、服务运营岗、新媒体运营岗、喵街运营岗、商品业务岗、物流运营岗、体验设计岗、工程管理岗、物业管理岗等相关岗位。
            </div>
          </div>
        </div>
        <div class="new-contact-2">
          <div class="new-contact-2-top"></div>
          <div class="new-contact-2-bottom">
            <div class="card-title">校招</div>
            <div class="card-subtitle">SCHOOL RECRUITMENT</div>
            <div class="card-content">
              &nbsp;&nbsp;&nbsp;面对新零售的快速发展，我们秉承“以客为先，关爱员工，创新变革”的经营理念，为培养更多新零售人才。学员通过大学生训练营，轮岗学习，企业大学阶梯式培训，项目历练而追逐渐成长为银泰新零售业务骨干！
              <br />
              &nbsp;&nbsp;&nbsp;银泰百货2022年校招职位覆盖全国10大区域，24座城市，包括产品技术岗（JAVA、测试、算法、前端开发）、银泰星储备店总岗、门店营运管理岗、服务运营岗、新媒体运营岗、喵街运营岗、商品业务岗、物流运营岗、体验设计岗、工程管理岗、物业管理岗等相关岗位。
              加入银泰，成为业界领先的新零售解决方案缔造者，打造最优的消费体验！300+offer等你来~~
            </div>
          </div>
        </div>
      </div>
      <div class="joincontact-right">
        <div class="new-contact-3">
          <div class="new-contact-3-top"></div>
          <div class="new-contact-3-bottom">
            <div class="card-title">人才观</div>
            <div class="card-subtitle">TALENT VIEW</div>
            <div class="card-content">
              <div class="card-content-title">重视人才</div>
              银泰百货深知，卓越的企业离不开优秀的员工。人才是企业发展之源、成功之本。因此，银泰百货坚持推行“吸纳人才、培育人才、善用人才、善待人才”的人力资源策略，营造“关心人、重视人”的良好氛围，努力为优秀人才提供富有挑战性的事业机会，为他们的成长与进步创造优越的条件。通过打造高素质的专业人才队伍，不断为银泰百货的长远发展注入强大的生命力。
            </div>
            <div class="card-content">
              <div class="card-content-title">吸引</div>
              通过建立银泰雇主品牌以吸引高质素人才，通过员工建立良好的内部品牌，通过科学客观的工具进行筛选，将合适的人放在合适的职位上。
            </div>
            <div class="card-content">
              <div class="card-content-title">培育人才</div>
              根据组织的发展需要，设计合适的培训体系和项目并成立了银泰百货企业大学，为各层级职位设计培训学院课程。
            </div>
            <div class="card-content">
              <div class="card-content-title">善用人才</div>
              鼓励内部提拔和内部应聘。
            </div>
            <div class="card-content">
              <div class="card-content-title">善待人才</div>
              通过有效的员工沟通，营造良好的组织氛围；
              表彰优秀员工，认可和激励员工的优秀表现。
            </div>
          </div>
        </div>
        <div class="new-contact-4">
          <div class="qrcode"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "newsContent",
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
