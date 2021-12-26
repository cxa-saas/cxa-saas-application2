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
@media screen and (min-width: 55rem) {
  .schooljob-container {
    margin-top: 5rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    .schooljob {
      width: 80%;
      max-width: 1080px;
      display: flex;
      flex-direction: row;
      justify-content: center;

      .schooljob-img {
        width: 40%;
        background-image: url("/media/yintai/school-3.png");
        background-size: cover;
      }
      .schooljob-text {
        width: 40%;
        margin-top: 5%;
        display: flex;
        flex-direction: column;
        .schooljob-tip {
          font-size: 0.8rem;
          font-family: SourceHanSansCN-Medium;
          font-weight: 500;
          color: #e5004f;
          line-height: 28px;
          text-transform: uppercase;
        }

        .schooljob-title {
          font-size: 1.4rem;
          font-family: SourceHanSansCN-Bold;
          font-weight: 400;
          color: #333333;
        }
        .schooljob-line2 {
          width: 2rem;
          height: 0.2rem;
          margin-top: 0.8rem;
          margin-bottom: 0.8rem;
          background: #e5004f;
        }
        .schooljob-introduction {
          font-size: 1rem;
          font-family: SourceHanSansCN-Regular;
          font-weight: 400;
          color: #7f7f7f;
          line-height: 1.8rem;
        }
      }
    }
  }
}
@media screen and (max-width: 55rem) {
  .schooljob-container {
    margin-top: 5rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    .schooljob {
      width: 80%;
      max-width: 1080px;
      display: flex;
      flex-direction: column-reverse;
      justify-content: center;

      .schooljob-img {
        width: 100%;
        height: 25rem;
        background-image: url("/media/yintai/school-3.png");
        background-size: cover;
        background-position: center center;
      }
      .schooljob-text {
        width: 100%;
        height: 60%;
        margin-top: 5%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        .schooljob-tip {
          font-size: 0.8rem;
          font-family: SourceHanSansCN-Medium;
          font-weight: 500;
          color: #e5004f;
          line-height: 28px;
          text-transform: uppercase;
        }
        .schooljob-line {
          height: 0.1rem;
          width: 15rem;
          border-top: solid #e02b20 0.2rem;
          margin-top: 1rem;
          margin-left: -6rem;
        }
        .schooljob-title {
          font-size: 1.4rem;
          font-family: SourceHanSansCN-Bold;
          font-weight: 400;
          color: #333333;
        }
        .schooljob-line2 {
          width: 2rem;
          height: 0.4rem;
          margin-top: 0.8rem;
          margin-bottom: 0.8rem;
          background-color: #e5004f;
        }
        .schooljob-introduction {
          font-size: 1rem;
          font-family: SourceHanSansCN-Regular;
          font-weight: 400;
          color: #7f7f7f;
          line-height: 1.4rem;
        }
      }
    }
  }
}
</style>

<template>
  <div class="schooljob-container">
    <div class="schooljob">
      <div class="schooljob-text">
        <div class="schooljob-tip">Campus Recruitment in 2022</div>
        <div class="schooljob-title">2022年招聘</div>
        <div class="schooljob-line2"></div>
        <div class="schooljob-introduction">
          面对新零售的快速发展，我们秉承“以客为先，关爱员工，创新变革”的经营理念，为培养更多新零售人才。学员通过大学生训练营，轮岗学习，企业大学阶梯式培训，项目历练而追逐渐成长为银泰新零售业务骨干！
          <br />
          <br />
          银泰百货2022年校招职位覆盖全国10大区域，24座城市，包括产品技术岗（JAVA、测试、算法、前端开发）、银泰星储备店总岗、门店营运管理岗、服务运营岗、新媒体运营岗、喵街运营岗、商品业务岗、物流运营岗、体验设计岗、工程管理岗、物业管理岗等相关岗位。
          <br />
          <br />
          加入银泰，成为业界领先的新零售解决方案缔造者，打造最优的消费体验！300+offer等你来~~
        </div>
      </div>
      <div class="schooljob-img"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "schooljob",
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
