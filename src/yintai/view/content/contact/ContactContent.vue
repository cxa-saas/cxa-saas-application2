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
  font-family:SourceHanSansSC-Bold;
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
  .contactcontent {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 3rem;
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
          height: 43rem;
          border-radius: 1.2rem;
          box-shadow: 0px 3px 5px #a3a0a0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          .new-contact-1-top {
            width: 100%;
            height: 22rem;
            background-size: cover;
            background-image: url("/media/yintai/contact-4.png");

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
          height: 42rem;
          border-radius: 1.2rem;
          box-shadow: 0px 3px 5px #a3a0a0;
          display: flex;
          flex-direction: column;
          align-items: center;
          .new-contact-2-top {
            width: 100%;
            height: 22rem;
            background-size: cover;

            background-image: url("/media/yintai/contact-6.png");
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
          height: 89rem;
          border-radius: 1.2rem;
          box-shadow: 0px 3px 5px #a3a0a0;
          display: flex;
          flex-direction: column;
          align-items: center;
          .new-contact-3-top {
            width: 100%;
            height: 22rem;
            background-size: cover;
            background-image: url("/media/yintai/contact-5.png");

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
      }
    }
  }
}

@media screen and (max-width: 55rem) {
  .contactcontent {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 3rem;
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
          height: 43rem;
          border-radius: 1.2rem;
          box-shadow: 0px 3px 5px #a3a0a0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          .new-contact-1-top {
            width: 100%;
            height: 22rem;
            background-size: cover;
            background-image: url("/media/yintai/contact-4.png");

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
          height: 42rem;
          border-radius: 1.2rem;
          box-shadow: 0px 3px 5px #a3a0a0;
          display: flex;
          flex-direction: column;
          align-items: center;
          .new-contact-2-top {
            width: 100%;
            height: 22rem;
            background-size: cover;

            background-image: url("/media/yintai/contact-6.png");
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
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-top: 5rem;
        .new-contact-3 {
          width: 100%;
          height: 89rem;
          border-radius: 1.2rem;
          box-shadow: 0px 3px 5px #a3a0a0;
          display: flex;
          flex-direction: column;
          align-items: center;
          .new-contact-3-top {
            width: 100%;
            height: 22rem;
            background-size: cover;
            background-image: url("/media/yintai/contact-5.png");

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
      }
    }
  }
}
</style>

<template>
  <div class="contactcontent">
    <div class="joincontact">
      <div class="joincontact-left">
        <div class="new-contact-1">
          <div class="new-contact-1-top"></div>
          <div class="new-contact-1-bottom">
            <div class="card-title">商户</div>
            <div class="card-subtitle">SOCIAL RECRUITMENT</div>
            <div class="card-content">
              &nbsp;&nbsp;
              &nbsp;面对新零售的快速发展，我们秉承“以客为先，关爱员工，创新变革”的经营理念，为培养更多新零售人才。学员通过大学生训练营，轮岗学习，企业大学阶梯式培训，项目历练而追逐渐成长为银泰新零售业务骨干！
            </div>
          </div>
        </div>
        <div class="new-contact-2">
          <div class="new-contact-2-top"></div>
          <div class="new-contact-2-bottom">
            <div class="card-title">媒体</div>
            <div class="card-subtitle">SCHOOL RECRUITMENT</div>
            <div class="card-content">
              &nbsp;&nbsp;&nbsp;面对新零售的快速发展，我们秉承“以客为先，关爱员工，创新变革”的经营理念，为培养更多新零售人才。学员通过大学生训练营，轮岗学习，企业大学阶梯式培训，项目历练而追逐渐成长为银泰新零售业务骨干！
            </div>
          </div>
        </div>
      </div>
      <div class="joincontact-right">
        <div class="new-contact-3">
          <div class="new-contact-3-top"></div>
          <div class="new-contact-3-bottom">
            <div class="card-title">达人</div>
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "contactcontent",
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
