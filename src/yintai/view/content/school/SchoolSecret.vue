<style lang="scss">
@font-face {
  font-family: "SourceHanSansCN-Medium";
  src: url("/media/yintai/font/SourceHanSansSC-Medium.otf") format("opentype");
}
@font-face {
  font-family: "SourceHanSansCN-Bold";
  src: url("/media/yintai/font/SourceHanSansSC-Bold.otf") format("opentype");
}
@font-face {
  font-family: "SourceHanSansSC-Regular";
  src: url("/media/yintai/font/SourceHanSansSC-Regular.otf") format("opentype");
}

@media screen and (min-width: 55rem) {
  .schoolsecret-container {
    margin-top: 5rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .schoolsecret {
      max-width: 1080px;
      width: 80%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      background-color: white;

      .schoolsecret-top {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        .schoolsecret-top-subtitle {
          font-size: 1rem;
          font-family: SourceHanSansCN-Medium;
          font-weight: 500;
          color: #e5004f;
          line-height: 3.25rem;
          text-transform: uppercase;
        }
        .schoolsecret-top-title {
          font-size: 2rem;
          font-family: SourceHanSansSC-Bold;
          font-weight: bold;
          color: #4b4b4b;
        }
        .schoolsecret-top-line {
          width: 2rem;
          height: 0.25rem;
          background-color: #e5004f;
          margin-top: 1rem;
        }
      }
      .schoolsecret-list {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        .schoolsecret-list-item {
          margin-top: 5rem;
          .schoolsecret-list-item-title {
            font-size: 1.6rem;
            font-family: SourceHanSansSC-Bold;
            font-weight: bold;
            color: #7f7f7f;
            line-height: 23px;
            margin-bottom: 1rem;
          }
          .schoolsecret-list-item-text {
            font-size: 1rem;
            font-family: SourceHanSansSC-Regular;
            font-weight: bold;
            color: #7f7f7f;
            line-height: 23px;
          }
        }
      }
      .schoolsecret-qrcode-container {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-top: 10rem;
        .schoolsecret-qrcode-list {
          width: 80%;
          height: 20rem;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          align-items: center;
          .schoolsecret-qrcode-item {
            width: 15rem;
            height: 17rem;
            display: flex;
            flex-direction: column;
            align-items: center;

            .schoolsecret-qrcode-item-pic {
              width: 13rem;
              height: 13rem;
              background-image: url("/media/yintai/school-secret-1.png");
              background-size: 100% 100%;
            }
            .schoolsecret-qrcode-item-span {
              font-size: 20px;
              font-family: SourceHanSansSC-Regular;
              font-weight: 400;
              color: #7f7f7f;
              line-height: 33px;
              margin-top: 0.5rem;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 55rem) {
  .schoolsecret-container {
    margin-top: 5rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .schoolsecret {
      max-width: 1080px;
      width: 80%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      background-color: white;

      .schoolsecret-top {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        .schoolsecret-top-subtitle {
          font-size: 1rem;
          font-family: SourceHanSansCN-Medium;
          font-weight: 500;
          color: #e5004f;
          line-height: 3.25rem;
          text-transform: uppercase;
        }
        .schoolsecret-top-title {
          font-size: 2rem;
          font-family: SourceHanSansSC-Bold;
          font-weight: bold;
          color: #4b4b4b;
        }
        .schoolsecret-top-line {
          width: 2rem;
          height: 0.25rem;
          background-color: #e5004f;
          margin-top: 1rem;
        }
      }
      .schoolsecret-list {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        .schoolsecret-list-item {
          margin-top: 5rem;
          .schoolsecret-list-item-title {
            font-size: 1.6rem;
            font-family: SourceHanSansSC-Bold;
            font-weight: bold;
            color: #7f7f7f;
            line-height: 23px;
            margin-bottom: 1rem;
          }
          .schoolsecret-list-item-text {
            font-size: 1rem;
            font-family: Source Han Sans SC;
            font-weight: bold;
            color: #7f7f7f;
            line-height: 23px;
          }
        }
      }
      .schoolsecret-qrcode-container {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-top: 5rem;
        .schoolsecret-qrcode-list {
          width: 80%;
          height: 20rem;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          align-items: center;
          .schoolsecret-qrcode-item {
            width: 15rem;
            height: 17rem;
            display: flex;
            flex-direction: column;
            align-items: center;

            .schoolsecret-qrcode-item-pic {
              width: 13rem;
              height: 13rem;
              background-image: url("/media/yintai/school-secret-1.png");
              background-size: 100% 100%;
            }
            .schoolsecret-qrcode-item-span {
              font-size: 20px;
              font-family: Source Han Sans SC;
              font-weight: 400;
              color: #7f7f7f;
              line-height: 33px;
              margin-top: 0.5rem;
            }
          }
        }
      }
    }
  }
}
</style>

<template>
  <div class="schoolsecret-container">
    <div class="schoolsecret">
      <div class="schoolsecret-top">
        <div class="schoolsecret-top-subtitle">Job secret</div>
        <div class="schoolsecret-top-title">职位揭秘</div>
        <div class="schoolsecret-top-line"></div>
      </div>
      <div class="schoolsecret-list">
        <div class="schoolsecret-list-item">
          <div class="schoolsecret-list-item-title">银泰星（硕)</div>
          <div class="schoolsecret-list-item-text">
            ◆项目介绍：“银泰星“管理培训生项目
            是银泰百货自主培养新时代新零售店总的人才工程，是银泰百货未来店总团队“年轻化、专业化、知识化”的战略性人才储备项目。通过系统化的培训、实践、锻炼、培养成银泰未来新零售店总的重要力量。银泰星营运管培生将立足于银泰多区域、多门店、线上线下多场景的工作环境，运营最新的新零售营销工具及方法，开展营销、营运、服务等管理工作。
          </div>
          <div class="schoolsecret-list-item-text">◆专业：不限专业</div>
          <div class="schoolsecret-list-item-text">
            ◆工作城市：杭州、宁波、温州、合肥、武汉、西安等地
          </div>
        </div>
        <div class="schoolsecret-list-item">
          <div class="schoolsecret-list-item-title">银泰星（硕)</div>
          <div class="schoolsecret-list-item-text">
            ◆项目介绍：“银泰星“管理培训生项目
            是银泰百货自主培养新时代新零售店总的人才工程，是银泰百货未来店总团队“年轻化、专业化、知识化”的战略性人才储备项目。通过系统化的培训、实践、锻炼、培养成银泰未来新零售店总的重要力量。银泰星营运管培生将立足于银泰多区域、多门店、线上线下多场景的工作环境，运营最新的新零售营销工具及方法，开展营销、营运、服务等管理工作。
          </div>
          <div class="schoolsecret-list-item-text">◆专业：不限专业</div>
          <div class="schoolsecret-list-item-text">
            ◆工作城市：杭州、宁波、温州、合肥、武汉、西安等地
          </div>
        </div>
        <div class="schoolsecret-list-item">
          <div class="schoolsecret-list-item-title">银泰星（硕)</div>
          <div class="schoolsecret-list-item-text">
            ◆项目介绍：“银泰星“管理培训生项目
            是银泰百货自主培养新时代新零售店总的人才工程，是银泰百货未来店总团队“年轻化、专业化、知识化”的战略性人才储备项目。通过系统化的培训、实践、锻炼、培养成银泰未来新零售店总的重要力量。银泰星营运管培生将立足于银泰多区域、多门店、线上线下多场景的工作环境，运营最新的新零售营销工具及方法，开展营销、营运、服务等管理工作。
          </div>
          <div class="schoolsecret-list-item-text">◆专业：不限专业</div>
          <div class="schoolsecret-list-item-text">
            ◆工作城市：杭州、宁波、温州、合肥、武汉、西安等地
          </div>
        </div>
        <div class="schoolsecret-list-item">
          <div class="schoolsecret-list-item-title">银泰星（硕)</div>
          <div class="schoolsecret-list-item-text">
            ◆项目介绍：“银泰星“管理培训生项目
            是银泰百货自主培养新时代新零售店总的人才工程，是银泰百货未来店总团队“年轻化、专业化、知识化”的战略性人才储备项目。通过系统化的培训、实践、锻炼、培养成银泰未来新零售店总的重要力量。银泰星营运管培生将立足于银泰多区域、多门店、线上线下多场景的工作环境，运营最新的新零售营销工具及方法，开展营销、营运、服务等管理工作。
          </div>
          <div class="schoolsecret-list-item-text">◆专业：不限专业</div>
          <div class="schoolsecret-list-item-text">
            ◆工作城市：杭州、宁波、温州、合肥、武汉、西安等地
          </div>
        </div>
      </div>
      <div class="schoolsecret-qrcode-container">
        <div class="schoolsecret-qrcode-list">
          <div class="schoolsecret-qrcode-item">
            <div class="schoolsecret-qrcode-item-pic"></div>
            <div class="schoolsecret-qrcode-item-span">官方B站账号</div>
          </div>
          <div class="schoolsecret-qrcode-item">
            <div
              class="schoolsecret-qrcode-item-pic"
              style="background-image: url('/media/yintai/school-secret-2.png')"
            ></div>
            <div class="schoolsecret-qrcode-item-span">招聘公众号</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "schoolsecret",
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
