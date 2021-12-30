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
@media screen and (min-width: 55rem) {
  .milestore {
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    .milestore-subtitle {
      font-size: 1.187rem;
      font-family: SourceHanSansCN-Regular;
      font-weight: 400;
      color: #e5004f;
      margin-bottom: 2rem;
    }
    .milestore-title {
      font-size: 1.9375rem;
      font-family: SourceHanSansCN-Regular;
      font-weight: 400;
      color: #000000;
    }
    .content {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: start;
      width: 80%;
      .left {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        width: 40%;
        // background-color: brown;
        .left-block {
          width: 100%;
          height: 25rem;
          margin-top: 10rem;
          .left-block-container {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-end;
            .left-block-top {
              display: flex;
              flex-direction: row;
              align-items: center;
              .year {
                font-size: 3rem;
                font-family: SourceHanSansCN-Heavy;
                font-weight: bold;
                color: #000000;
                opacity: 0.96;
                background: linear-gradient(0deg, #e5004f 0%, #453a94 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              }
              .year-line {
                width: 122px;
                height: 5px;
                background: #e5004f;
                border-radius: 3px;
                margin-left: 1rem;
                margin-right: -2px;
              }
              .year-point {
                width: 20px;
                height: 20px;
                background: #e5004f;
                border-radius: 50%;
                margin-right: -1rem;
              }
            }
            .left-block-event-list {
              display: flex;
              flex-direction: column;
              justify-content: flex-end;
              align-items: flex-end;
              margin-right: 9rem;
              .left-block-event-item {
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                font-size: 1.5625rem;
                font-family: SourceHanSansSC-Heavy;
                font-weight: 800;
                color: #4a4a4a;
                line-height: 3.125rem;
                white-space: nowrap;
                .left-point {
                  margin-top: 1rem;
                  margin-right: 1rem;
                  margin-left: 1rem;
                  width: 1rem;
                  height: 1rem;
                  background-color: #e5004f;
                  border-radius: 50%;
                }
              }
            }
          }
          &:nth-child(2) {
            margin-top: -3rem;
          }
          &:nth-child(3) {
            margin-top: -3rem;
          }
          &:nth-child(4) {
            margin-top: -3rem;
          }
        }
        .left-block:first-child {
          margin-top: 0rem;
        }
        .left-block:last-child {
          margin-top: 3.5rem;
        }
      }
      .line {
        width: 5px;
        height: 1700px;
        background: #e5004f;
      }
      .right {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        width: 40%;
        // background-color: brown;
        .right-block {
          height: 25rem;

          width: 100%;
          margin-top: 10rem;
          .right-block-container {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            .right-block-top {
              display: flex;
              flex-direction: row;
              align-items: center;
              .year {
                font-size: 3rem;
                font-family: SourceHanSansCN-Heavy;
                font-weight: bold;
                color: #000000;
                opacity: 0.96;
                background: linear-gradient(0deg, #e5004f 0%, #453a94 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              }
              .year-line {
                width: 122px;
                height: 5px;
                background: #e5004f;
                border-radius: 3px;
                margin-left: -1rem;
              }
              .year-point {
                width: 22px;
                height: 22px;
                background: #e5004f;
                border-radius: 50%;
                margin-left: -1rem;
              }
            }
            .right-block-event-list {
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
              margin-left: 9rem;
              .right-block-event-item {
                display: flex;
                flex-direction: row;
                align-items: center;
                font-size: 1.5625rem;
                font-family: SourceHanSansSC-Heavy;
                font-weight: 800;
                color: #4a4a4a;
                line-height: 3.125rem;
                white-space: nowrap;
                .point {
                  margin-left: 1rem;
                  margin-right: 1rem;
                  width: 1rem;
                  height: 1rem;
                  background: #e5004f;
                  border-radius: 50%;
                }
              }
            }
          }
          .left-block:first-child {
            margin-top: 0rem;
          }
          &:nth-child(2) {
            margin-top: -3rem;
          }
          &:nth-child(3) {
            margin-top: -3rem;
          }
          &:nth-child(4) {
            margin-top: 5rem;
          }
        }
        .right-block:first-child {
          margin-top: 11rem;
        }
      }
    }
  }

  .left-block-event-item2 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .left-block-event-item2-left {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      font-size: 1.5625rem;
      font-family: SourceHanSansSC-Heavy;
      font-weight: 800;
      color: #4a4a4a;
      line-height: 3.125rem;
      white-space: nowrap;
    }

    .left-block-event-item2-right {
      margin-right: 1rem;
      margin-left: 1rem;
      width: 1rem;
      height: 1rem;
      background-color: #e5004f;
      border-radius: 50%;
    }
  }
}
@media screen and (max-width: 55rem) {
  .milestore {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    .milestore-subtitle {
      font-size: 0.8rem;
      font-family: SourceHanSansCN-Regular;
      font-weight: 400;
      color: #e5004f;
      margin-bottom: 1rem;
    }
    .milestore-title {
      font-size: 1.6rem;
      font-family: SourceHanSansCN-Regular;
      font-weight: 400;
      color: #000000;
    }
    .content {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: start;
      width: 80%;
      // max-width: 1080px;
      .left {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        width: 40%;
        // background-color: brown;
        .left-block {
          width: 100%;
          height: 18rem;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-end;
          width: 100%;
          margin-top: 2.5rem;
          .left-block-top {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-end;
            width: 100%;

            .year {
              font-size: 1.4rem;
              font-family: SourceHanSansCN-Heavy;
              font-weight: bold;
              color: #000000;
              opacity: 0.96;
              background: linear-gradient(0deg, #e5004f 0%, #453a94 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              white-space: nowrap;
            }
            .year-line {
              width: 50px;
              height: 2px;
              background: #e5004f;
              border-radius: 3px;
              margin-left: 1rem;
              margin-right: -2px;
            }
            .year-point {
              width: 10px;
              height: 10px;
              background: #e5004f;
              border-radius: 50%;
              margin-right: -0.5rem;
            }
          }
          .left-block-event-list {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: flex-end;
            margin-right: 1rem;
            .left-block-event-item {
              width: 100%;
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: flex-end;
              font-size: 0.8rem;
              font-family: SourceHanSansSC-Heavy;
              font-weight: 800;
              color: #4a4a4a;
              line-height: 1.5rem;
              .left-point {
                flex-shrink: 0;
                margin-top: 0.5rem;
                margin-right: 0.5rem;
                margin-left: 0.5rem;
                width: 0.5rem;
                height: 0.5rem;
                background-color: #e5004f;
                border-radius: 50%;
              }
            }
          }
          &:nth-child(2) {
            margin-top: -8rem;
          }
          &:nth-child(3) {
            margin-top: -8rem;
          }
          &:nth-child(4) {
            margin-top: -8rem;
          }
          &:nth-child(5) {
            margin-top: 16rem;
          }
        }
        .left-block:first-child {
          margin-top: 0rem;
        }
        .left-block:last-child {
          margin-top: -4rem;
        }
      }
      .line {
        width: 3px;
        height: 940px;

        background: #e5004f;
      }
      .right {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 40%;
        .right-block {
          height: 18rem;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          width: 100%;
          margin-top: 2.5rem;

          .right-block-top {
            display: flex;
            flex-direction: row;
            align-items: center;
            .year {
              font-size: 1.4rem;
              font-family: SourceHanSansCN-Heavy;
              font-weight: bold;
              color: #000000;
              opacity: 0.96;
              background: linear-gradient(0deg, #e5004f 0%, #453a94 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              white-space: nowrap;
            }
            .year-line {
              width: 50px;
              height: 2px;
              background: #e5004f;
              border-radius: 3px;
              margin-left: -0.5rem;
            }
            .year-point {
              width: 10px;
              height: 10px;
              background: #e5004f;
              border-radius: 50%;
              margin-left: -0.5rem;
            }
          }
          .right-block-event-list {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            margin-left: 0.5rem;
            .right-block-event-item {
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              font-size: 0.8rem;
              font-family: SourceHanSansSC-Heavy;
              font-weight: 800;
              color: #4a4a4a;
              line-height: 1.5rem;

              .point {
                flex-shrink: 0;
                margin-left: 0.5rem;
                margin-right: 0.5rem;
                width: 0.5rem;
                height: 0.5rem;
                background: #e5004f;
                border-radius: 50%;
              }
            }
          }
          .left-block:first-child {
            margin-top: 0rem;
          }
          &:nth-child(2) {
            margin-top: -8rem;
          }
          &:nth-child(3) {
            margin-top: -8rem;
          }
          &:nth-child(4) {
            margin-top: 4rem;
          }
        }
        .right-block:first-child {
          margin-top: 5rem;
        }
      }
    }
  }
  .left-block-event-item2 {
    width: 100%;
    float: left;

    .left-block-event-item2-left {
      width: 100%;
      float: left;
      font-size: 0.8rem;
      font-family: SourceHanSansSC-Heavy;
      font-weight: 800;
      color: #4a4a4a;
      line-height: 1.5rem;
    }

    .left-block-event-item2-right {
      float: right;
      flex-shrink: 0;
      margin-right: 0.5rem;
      margin-left: 0.5rem;
      margin-top: -1rem;
      width: 0.5rem;
      height: 0.5rem;
      background-color: #e5004f;
      border-radius: 50%;
    }
  }
}
</style>

<template>
  <div class="milestore">
    <div class="milestore-subtitle">MILESTONE</div>
    <div class="milestore-title">银泰大事件</div>
    <div class="content">
      <div class="left">
        <div ref="left_1" class="left-block">
          <transition name="fade-in-up2">
            <div v-show="this.active_left_1" class="left-block-container">
              <div class="left-block-top">
                <div class="year">1998年</div>
                <div class="year-line"></div>
                <div class="year-point"></div>
              </div>
              <div key="2" class="left-block-event-list">
                <div class="left-block-event-item">
                  初创 第一家店杭州武林银泰开业
                  <div class="left-point"></div>
                </div>
              </div>
            </div>
          </transition>
        </div>

        <div ref="left_2" class="left-block">
          <transition name="fade-in-up2">
            <div v-show="this.active_left_2" class="left-block-container">
              <div class="left-block-top">
                <div class="year">2007年</div>
                <div class="year-line"></div>
                <div class="year-point"></div>
              </div>
              <div class="left-block-event-list">
                <div class="left-block-event-item">
                  港股上市
                  <div class="left-point"></div>
                </div>
              </div>
            </div>
          </transition>
        </div>

        <div ref="left_3" class="left-block">
          <transition name="fade-in-up2">
            <div v-show="this.active_left_3" class="left-block-container">
              <div class="left-block-top">
                <div class="year">2014-2015年</div>
                <div class="year-line"></div>
                <div class="year-point"></div>
              </div>
              <div class="left-block-event-list">
                <div class="left-block-event-item">
                  阿里战略投资
                  <div class="left-point"></div>
                </div>
              </div>
            </div>
          </transition>
        </div>

        <div ref="left_4" class="left-block">
          <transition name="fade-in-up2">
            <div v-show="this.active_left_3" class="left-block-container">
              <div class="left-block-top">
                <div class="year">2019年</div>
                <div class="year-line"></div>
                <div class="year-point"></div>
              </div>
              <div class="left-block-event-list">
                <div class="left-block-event-item">
                  启动私有化，探索新商业体系建设
                  <div class="left-point"></div>
                </div>
                <div class="left-block-event-item2">
                  <div class="left-block-event-item2-left">中国连锁百强</div>

                  <div class="left-block-event-item2-right"></div>
                </div>
                <div class="left-block-event-item">
                  中国服务业企业500强
                  <div class="left-point"></div>
                </div>
                <div class="left-block-event-item">
                  联合国工业发展组织全球科技创新大会战略合作伙伴
                  <div class="left-point"></div>
                </div>
                <div class="left-block-event-item">
                  蝉联中国连锁业员工最喜爱公司
                  <div class="left-point"></div>
                </div>
              </div>
            </div>
          </transition>
        </div>

        <div ref="left_5" class="left-block">
          <transition name="fade-in-up2">
            <div v-show="this.active_left_5" class="left-block-container">
              <div class="left-block-top">
                <div class="year">2021年</div>
                <div class="year-line"></div>
                <div class="year-point"></div>
              </div>
              <div class="left-block-event-list">
                <div class="left-block-event-item">
                  武林银泰诞生31个美妆“全国第一柜”
                  <div class="left-point"></div>
                </div>
                <div class="left-block-event-item">
                  蝉联“中国卓越管理公司”大奖
                  <div class="left-point"></div>
                </div>
              </div>
            </div>
          </transition>
        </div>
        <div ref="left_6" class="left-block">
          <transition name="fade-in-up2">
            <div v-show="this.active_left_6" class="left-block-container">
              <div v-show="this.active_left_6" class="left-block-top">
                <div class="year-point"></div>
              </div>
            </div>
          </transition>
        </div>
      </div>
      <div class="line"></div>
      <div class="right">
        <div ref="right_1" class="right-block">
          <transition name="fade-in-up2">
            <div v-show="this.active_right_1" class="right-block-container">
              <div class="right-block-top">
                <div class="year-point"></div>
                <div class="year-line"></div>
                <div class="year">2000-2006年</div>
              </div>
              <div class="right-block-event-list">
                <div class="right-block-event-item">
                  <span class="point"></span>密布浙江发展战略
                </div>
              </div>
            </div>
          </transition>
        </div>

        <div ref="right_2" class="right-block">
          <transition name="fade-in-up2">
            <div v-show="this.active_right_2" class="right-block-container">
              <div class="right-block-top">
                <div class="year-point"></div>
                <div class="year-line"></div>
                <div class="year">2010-2013年</div>
              </div>
              <div class="right-block-event-list">
                <div class="right-block-event-item">
                  <span class="point"></span>全国布局
                </div>
              </div>
            </div>
          </transition>
        </div>

        <div ref="right_3" class="right-block">
          <transition name="fade-in-up2">
            <div v-show="this.active_right_3" class="right-block-container">
              <div class="right-block-top">
                <div class="year-point"></div>
                <div class="year-line"></div>
                <div class="year">2017年</div>
              </div>
              <div class="right-block-event-list">
                <div class="right-block-event-item">
                  <span class="point"></span>启动私有化，探索新商业体系建设
                </div>
              </div>
            </div>
          </transition>
        </div>

        <div ref="right_4" class="right-block">
          <transition name="fade-in-up2">
            <div v-show="this.active_right_4" class="right-block-container">
              <div class="right-block-top">
                <div class="year-point"></div>
                <div class="year-line"></div>
                <div class="year">2020年</div>
              </div>
              <div class="right-block-event-list">
                <div class="right-block-event-item">
                  <span class="point"></span>疫情下率先复苏恢复增长
                </div>
                <div class="right-block-event-item">
                  <span class="point"></span>长三角服务企业100强
                </div>
                <div class="right-block-event-item">
                  <span class="point"></span>浙江省成长性最快百强企业
                </div>
                <div class="right-block-event-item">
                  <span class="point"></span>浙江省服务业百强企业
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "milestore",
  components: {},
  data() {
    return {
      active_left_1: false,
      active_left_2: false,
      active_left_3: false,
      active_left_4: false,
      active_left_5: false,
      active_left_6: false,
      active_right_1: false,
      active_right_2: false,
      active_right_3: false,
      active_right_4: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.getDistance); //绑定页面滚动事件

    this.distance_left_1 =
      this.$refs.left_1.getBoundingClientRect().top - window.innerHeight;
    if (this.distance_left_1 < 0 && this.active_left_1 == false) {
      this.active_left_1 = true;
    }

    this.distance_left_2 =
      this.$refs.left_2.getBoundingClientRect().top - window.innerHeight;
    if (this.distance_left_2 < 0 && this.active_left_2 == false) {
      this.active_left_2 = true;
    }

    this.distance_left_3 =
      this.$refs.left_3.getBoundingClientRect().top - window.innerHeight;
    if (this.distance_left_3 < 0 && this.active_left_3 == false) {
      this.active_left_3 = true;
    }

    this.distance_left_4 =
      this.$refs.left_4.getBoundingClientRect().top - window.innerHeight;
    if (this.distance_left_4 < 0 && this.active_left_4 == false) {
      this.active_left_4 = true;
    }

    this.distance_left_5 =
      this.$refs.left_5.getBoundingClientRect().top - window.innerHeight;
    if (this.distance_left_5 < 0 && this.active_left_5 == false) {
      this.active_left_5 = true;
    }

    this.distance_left_6 =
      this.$refs.left_6.getBoundingClientRect().top - window.innerHeight;
    if (this.distance_left_6 < 0 && this.active_left_6 == false) {
      this.active_left_6 = true;
    }

    this.distance_right_1 =
      this.$refs.right_1.getBoundingClientRect().top - window.innerHeight;
    if (this.distance_right_1 < 0 && this.active_right_1 == false) {
      this.active_right_1 = true;
    }

    this.distance_right_2 =
      this.$refs.right_2.getBoundingClientRect().top - window.innerHeight;
    if (this.distance_right_2 < 0 && this.active_right_2 == false) {
      this.active_right_2 = true;
    }

    this.distance_right_3 =
      this.$refs.right_3.getBoundingClientRect().top - window.innerHeight;
    if (this.distance_right_3 < 0 && this.active_right_3 == false) {
      this.active_right_3 = true;
    }

    this.distance_right_4 =
      this.$refs.right_4.getBoundingClientRect().top - window.innerHeight;
    if (this.distance_right_4 < 0 && this.active_right_4 == false) {
      this.active_right_4 = true;
    }
  },
  methods: {
    getDistance() {
      this.distance_left_1 =
        this.$refs.left_1.getBoundingClientRect().top - window.innerHeight;

      if (this.distance_left_1 < 0 && this.active_left_1 == false) {
        this.active_left_1 = true;
      }
      if (this.distance_left_1 > 0 && this.active_left_1 == true) {
        this.active_left_1 = false;
      }

      this.distance_left_2 =
        this.$refs.left_2.getBoundingClientRect().top - window.innerHeight;

      if (this.distance_left_2 < 0 && this.active_left_2 == false) {
        this.active_left_2 = true;
      }
      if (this.distance_left_2 > 0 && this.active_left_2 == true) {
        this.active_left_2 = false;
      }

      this.distance_left_3 =
        this.$refs.left_3.getBoundingClientRect().top - window.innerHeight;

      if (this.distance_left_3 < 0 && this.active_left_3 == false) {
        this.active_left_3 = true;
      }
      if (this.distance_left_3 > 0 && this.active_left_3 == true) {
        this.active_left_3 = false;
      }

      this.distance_left_4 =
        this.$refs.left_4.getBoundingClientRect().top - window.innerHeight;

      if (this.distance_left_4 < 0 && this.active_left_4 == false) {
        this.active_left_4 = true;
      }
      if (this.distance_left_4 > 0 && this.active_left_4 == true) {
        this.active_left_4 = false;
      }

      this.distance_left_5 =
        this.$refs.left_5.getBoundingClientRect().top - window.innerHeight;

      if (this.distance_left_5 < 0 && this.active_left_5 == false) {
        this.active_left_5 = true;
      }
      if (this.distance_left_5 > 0 && this.active_left_5 == true) {
        this.active_left_5 = false;
      }

      this.distance_left_6 =
        this.$refs.left_6.getBoundingClientRect().top - window.innerHeight;

      if (this.distance_left_6 < 0 && this.active_left_6 == false) {
        this.active_left_6 = true;
      }
      if (this.distance_left_6 > 0 && this.active_left_6 == true) {
        this.active_left_6 = false;
      }

      this.distance_right_1 =
        this.$refs.right_1.getBoundingClientRect().top - window.innerHeight;

      if (this.distance_right_1 < 0 && this.active_right_1 == false) {
        this.active_right_1 = true;
      }
      if (this.distance_right_1 > 0 && this.active_right_1 == true) {
        this.active_right_1 = false;
      }

      this.distance_right_2 =
        this.$refs.right_2.getBoundingClientRect().top - window.innerHeight;

      if (this.distance_right_2 < 0 && this.active_right_2 == false) {
        this.active_right_2 = true;
      }
      if (this.distance_right_2 > 0 && this.active_right_2 == true) {
        this.active_right_2 = false;
      }

      this.distance_right_3 =
        this.$refs.right_3.getBoundingClientRect().top - window.innerHeight;

      if (this.distance_right_3 < 0 && this.active_right_3 == false) {
        this.active_right_3 = true;
      }
      if (this.distance_right_3 > 0 && this.active_right_3 == true) {
        this.active_right_3 = false;
      }

      this.distance_right_4 =
        this.$refs.right_4.getBoundingClientRect().top - window.innerHeight;

      if (this.distance_right_4 < 0 && this.active_right_4 == false) {
        this.active_right_4 = true;
      }
      if (this.distance_right_4 > 0 && this.active_right_4 == true) {
        this.active_right_4 = false;
      }
    },
  },
};
</script>
