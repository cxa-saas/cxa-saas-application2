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
@font-face {
  font-family: "SourceHanSansSC-Light";
  src: url("/media/yintai/font/SourceHanSansCN-Light.otf") format("opentype");
}

@media screen and (min-width: 55rem) {
  .membershipcomparison {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: white;
    margin-top: 5rem;

    .membershipbannercard-top {
      width: 80%;
      max-width: 1080px;
      height: 10rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      .membershipbannercard-top-subtitle {
        font-size: 1rem;
        font-family: SourceHanSansCN-Medium;
        font-weight: 500;
        color: #e5004f;
        line-height: 3.25rem;
      }
      .membershipbannercard-top-title {
        font-size: 2rem;
        font-family: SourceHanSansCN-Bold;
        font-weight: bold;
        color: #4b4b4b;
      }
      .membershipbannercard-top-line {
        width: 2rem;
        height: 0.25rem;
        background-color: #e5004f;
        margin-top: 1rem;
      }
    }
    .membershipcomparison-table {
      width: 80%;
      max-width: 1080px;

      display: flex;
      flex-direction: column;
      margin-top: 5rem;
      .membershipcomparison-table-header {
        height: 3.8rem;
        width: 100%;
        background-color: rgba(150, 142, 142, 0.587);
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;

        .membershipcomparison-table-header-left {
          text-align: right;
          width: 62%;
          font-size: 1.4375rem;
          font-family: SourceHanSansSC-Medium;
          font-weight: 500;
          color: #000000;
        }
        .membershipcomparison-table-header-middle {
          text-align: center;
          width: 14%;
          font-size: 1.4375rem;
          font-family: SourceHanSansSC-Medium;
          font-weight: 500;
          color: #000000;
        }
        .membershipcomparison-table-header-right {
          text-align: left;
          width: 24%;
          font-size: 1.4375rem;
          font-family: SourceHanSansSC-Medium;
          font-weight: 500;
          color: #000000;
        }
      }
      .membershipcomparison-table-shop {
        width: 100%;
        height: 15.2rem;
        border-bottom: 2px #000000 solid;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;

        .membershipcomparison-table-shop-left {
          width: 20%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 15.2rem;
          .membershipcomparison-table-shop-left-title {
            font-size: 1.18rem;
            font-family: SourceHanSansCN-Regular;
            font-weight: 400;
            color: #000000;
            line-height: 2.31rem;
          }
        }
        .membershipcomparison-table-shop-right {
          width: 80%;
          height: 100%;
          display: flex;
          flex-direction: column;
          .membershipcomparison-table-shop-item {
            width: 100%;
            height: 3.8rem;
            border-bottom: 1px #000000 solid;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            .membershipcomparison-table-shop-item-title {
              width: 32%;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              margin-right: 25%;
              .membershipcomparison-table-shop-item-title-item {
                font-family: SourceHanSansSC-Light;
              }
            }
            .membershipcomparison-table-shop-item-member {
              width: 32%;
              font-family: SourceHanSansSC-Light;
            }
            .membershipcomparison-table-shop-item-intime365 {
              width: 32%;
              font-family: SourceHanSansSC-Light;
            }
          }
        }
      }
      .membershipcomparison-table-arrive {
        width: 100%;
        height: 19rem;
        border-bottom: 2px #000000 solid;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;

        .membershipcomparison-table-arrive-left {
          width: 20%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 19rem;
          .membershipcomparison-table-arrive-left-title {
            font-size: 1.18rem;
            font-family: SourceHanSansCN-Regular;
            font-weight: 400;
            color: #000000;
            line-height: 2.31rem;
          }
        }
        .membershipcomparison-table-arrive-right {
          width: 80%;
          height: 100%;
          display: flex;
          flex-direction: column;
          .membershipcomparison-table-arrive-item {
            width: 100%;
            height: 3.8rem;
            border-bottom: 1px #000000 solid;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            .membershipcomparison-table-arrive-item-title {
              width: 32%;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              margin-right: 25%;
              .membershipcomparison-table-arrive-item-title-item {
                font-family: SourceHanSansSC-Light;
              }
            }
            .membershipcomparison-table-arrive-item-member {
              
              width: 32%;
              font-family: SourceHanSansSC-Light;
            }
            .membershipcomparison-table-arrive-item-intime365 {
              font-family: SourceHanSansSC-Light;
              width: 32%;
            }
          }
        }
      }
      .membershipcomparison-table-serve {
        width: 100%;
        height: 7.6rem;
        border-bottom: 2px #000000 solid;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;

        .membershipcomparison-table-serve-left {
          width: 20%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 7.6rem;
          .membershipcomparison-table-serve-left-title {
            font-size: 1.18rem;
            font-family: SourceHanSansSC-Regular;
            font-weight: 400;
            color: #000000;
            line-height: 2.31rem;
          }
        }
        .membershipcomparison-table-serve-right {
          width: 80%;
          height: 100%;
          display: flex;
          flex-direction: column;
          .membershipcomparison-table-serve-item {
            width: 100%;
            height: 3.8rem;
            border-bottom: 1px #000000 solid;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            .membershipcomparison-table-serve-item-title {
              width: 32%;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              margin-right: 25%;
              .membershipcomparison-table-serve-item-title-item {
                font-family: SourceHanSansSC-Light;
              }
            }
            .membershipcomparison-table-serve-item-member {
              width: 32%;
              font-family: SourceHanSansSC-Light;
            }
            .membershipcomparison-table-serve-item-intime365 {
              width: 32%;
              font-family: SourceHanSansSC-Light;
            }
          }
        }
      }
    }
    .membershipcomparison-bottom {
      width: 80%;
      max-width: 1080px;

      margin-top: 1rem;
      .membershipcomparison-bottom-item {
        font-family: SourceHanSansSC-Regular;
        color: #7f7f7f;
        font-size: 1.3125rem;
        font-weight: 400;
      }
    }
  }
}
@media screen and (max-width: 55rem) {
  .membershipcomparison {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: white;
    margin-top: 2rem;

    .membershipbannercard-top {
      width: 80%;
      height: 10rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      .membershipbannercard-top-subtitle {
        font-size: 1rem;
        font-family: SourceHanSansCN-Medium;
        font-weight: 500;
        color: #e5004f;
        line-height: 3.25rem;
      }
      .membershipbannercard-top-title {
        font-size: 2rem;
        font-family: SourceHanSansCN-Bold;
        font-weight: bold;
        color: #4b4b4b;
      }
      .membershipbannercard-top-line {
        width: 2rem;
        height: 0.25rem;
        background-color: #e5004f;
        margin-top: 1rem;
      }
    }
    .membershipcomparison-table {
      width: 80%;
      display: flex;
      flex-direction: column;
      margin-top: 2rem;
      .membershipcomparison-table-header {
        height: 3.8rem;
        width: 100%;
        background-color: rgba(150, 142, 142, 0.587);
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;

        .membershipcomparison-table-header-left {
          text-align: right;
          width: 70%;
          font-size: 1rem;
          font-family: SourceHanSansSC-Medium;
          font-weight: 500;
          color: #000000;
        }
        .membershipcomparison-table-header-middle {
          text-align: center;
          width: 5%;
          font-size: 1rem;
          font-family: SourceHanSansSC-Medium;
          font-weight: 500;
          color: #000000;
        }
        .membershipcomparison-table-header-right {
          text-align: center;
          width: 25%;
          font-size: 1rem;
          font-family: SourceHanSansSC-Medium;
          font-weight: 500;
          color: #000000;
        }
      }
      .membershipcomparison-table-shop {
        width: 100%;
        height: 15.2rem;
        border-bottom: 2px #000000 solid;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;

        .membershipcomparison-table-shop-left {
          width: 10%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 15.2rem;
          .membershipcomparison-table-shop-left-title {
            width: 2rem;
            font-size: 1.18rem;
            font-family: SourceHanSansCN-Regular;
            font-weight: 400;
            color: #000000;
            line-height: 2.31rem;
          }
        }
        .membershipcomparison-table-shop-right {
          width: 90%;
          height: 100%;
          display: flex;
          flex-direction: column;
          .membershipcomparison-table-shop-item {
            width: 100%;
            height: 3.8rem;
            border-bottom: 1px #000000 solid;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            .membershipcomparison-table-shop-item-title {
              width: 60%;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              .membershipcomparison-table-shop-item-title-item {
                font-family: SourceHanSansSC-Light;
              }
            }
            .membershipcomparison-table-shop-item-member {
              width: 20%;
              font-family: SourceHanSansSC-Light;
            }
            .membershipcomparison-table-shop-item-intime365 {
              width: 20%;
              font-family: SourceHanSansSC-Light;
            }
          }
        }
      }
      .membershipcomparison-table-arrive {
        width: 100%;
        height: 19rem;
        border-bottom: 2px #000000 solid;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;

        .membershipcomparison-table-arrive-left {
          width: 10%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 19rem;
          .membershipcomparison-table-arrive-left-title {
            width: 2rem;
            font-size: 1.18rem;
            font-family: SourceHanSansCN-Regular;
            font-weight: 400;
            color: #000000;
            line-height: 2.31rem;
          }
        }
        .membershipcomparison-table-arrive-right {
          width: 90%;
          height: 100%;
          display: flex;
          flex-direction: column;
          .membershipcomparison-table-arrive-item {
            width: 100%;
            height: 3.8rem;
            border-bottom: 1px #000000 solid;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            .membershipcomparison-table-arrive-item-title {
              width: 60%;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              .membershipcomparison-table-arrive-item-title-item {
                font-family: SourceHanSansSC-Light;
              }
            }
            .membershipcomparison-table-arrive-item-member {
              width: 20%;
              font-family: SourceHanSansSC-Light;
            }
            .membershipcomparison-table-arrive-item-intime365 {
              width: 20%;
              font-family: SourceHanSansSC-Light;
            }
          }
        }
      }
      .membershipcomparison-table-serve {
        width: 100%;
        height: 9rem;
        border-bottom: 2px #000000 solid;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;

        .membershipcomparison-table-serve-left {
          width: 10%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 9rem;
          .membershipcomparison-table-serve-left-title {
            width: 2rem;
            font-size: 1.18rem;
            font-family: SourceHanSansSC-Regular;
            font-weight: 400;
            color: #000000;
            line-height: 2.31rem;
          }
        }
        .membershipcomparison-table-serve-right {
          width: 90%;
          height: 100%;
          display: flex;
          flex-direction: column;
          .membershipcomparison-table-serve-item {
            width: 100%;
            height: 3.8rem;
            border-bottom: 1px #000000 solid;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            .membershipcomparison-table-serve-item-title {
              width: 60%;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              .membershipcomparison-table-serve-item-title-item {
                font-family: SourceHanSansSC-Light;
              }
            }
            .membershipcomparison-table-serve-item-member {
              font-family: SourceHanSansSC-Light;
              width: 20%;
            }
            .membershipcomparison-table-serve-item-intime365 {
              width: 20%;
              font-family: SourceHanSansSC-Light;
            }
          }
        }
      }
    }
    .membershipcomparison-bottom {
      width: 80%;
      margin-top: 1rem;
      .membershipcomparison-bottom-item {
        font-family: SourceHanSansSC-Regular;
        color: #7f7f7f;
        font-size: 1.3125rem;
        font-weight: 400;
      }
    }
  }
}
</style>

<template>
  <div class="membershipcomparison">
    <div class="membershipbannercard-top">
      <div class="membershipbannercard-top-subtitle">
        MEMBER RIGHTS COMPARISION
      </div>
      <div class="membershipbannercard-top-title">会员权益对比</div>
      <div class="membershipbannercard-top-line"></div>
    </div>

    <div class="membershipcomparison-table">
      <div class="membershipcomparison-table-header">
        <div class="membershipcomparison-table-header-left">会员</div>
        <div class="membershipcomparison-table-header-middle">|</div>
        <div class="membershipcomparison-table-header-right">INTIME365</div>
      </div>
      <div class="membershipcomparison-table-shop">
        <div class="membershipcomparison-table-shop-left">
          <div class="membershipcomparison-table-shop-left-title">购物权益</div>
        </div>
        <div class="membershipcomparison-table-shop-right">
          <div class="membershipcomparison-table-shop-item">
            <div class="membershipcomparison-table-shop-item-title">
              <div class="membershipcomparison-table-shop-item-title-item">
                365福利包
              </div>
              <div class="membershipcomparison-table-shop-item-title-item">
                (1-8号可领）
              </div>
            </div>
            <div class="membershipcomparison-table-shop-item-member">无</div>
            <div class="membershipcomparison-table-shop-item-intime365">√</div>
          </div>
          <div class="membershipcomparison-table-shop-item">
            <div class="membershipcomparison-table-shop-item-title">
              <div class="membershipcomparison-table-shop-item-title-item">
                硬核补贴
              </div>
            </div>
            <div class="membershipcomparison-table-shop-item-member">无</div>
            <div class="membershipcomparison-table-shop-item-intime365">√</div>
          </div>
          <div class="membershipcomparison-table-shop-item">
            <div class="membershipcomparison-table-shop-item-title">
              <div class="membershipcomparison-table-shop-item-title-item">
                购物折扣
              </div>
              <div class="membershipcomparison-table-shop-item-title-item">
                部分商品享受
              </div>
            </div>
            <div class="membershipcomparison-table-shop-item-member">无</div>
            <div class="membershipcomparison-table-shop-item-intime365">
              9折
            </div>
          </div>
          <div
            class="membershipcomparison-table-shop-item"
            style="border-bottom: none"
          >
            <div class="membershipcomparison-table-shop-item-title">
              <div class="membershipcomparison-table-shop-item-title-item">
                小金库
              </div>
            </div>
            <div class="membershipcomparison-table-shop-item-member">无</div>
            <div class="membershipcomparison-table-shop-item-intime365">√</div>
          </div>
        </div>
      </div>
      <div class="membershipcomparison-table-arrive">
        <div class="membershipcomparison-table-arrive-left">
          <div class="membershipcomparison-table-arrive-left-title">
            到店特权
          </div>
        </div>
        <div class="membershipcomparison-table-arrive-right">
          <div class="membershipcomparison-table-arrive-item">
            <div class="membershipcomparison-table-arrive-item-title">
              <div class="membershipcomparison-table-arrive-item-title-item">
                免费停车
              </div>
              <div class="membershipcomparison-table-arrive-item-title-item">
                具体时长见门店说明
              </div>
            </div>
            <div class="membershipcomparison-table-arrive-item-member">
              消费足额抵扣
            </div>
            <div class="membershipcomparison-table-arrive-item-intime365">
              √
            </div>
          </div>
          <div class="membershipcomparison-table-arrive-item">
            <div class="membershipcomparison-table-arrive-item-title">
              <div class="membershipcomparison-table-arrive-item-title-item">
                免费租借
              </div>
            </div>
            <div class="membershipcomparison-table-arrive-item-member">√</div>
            <div class="membershipcomparison-table-arrive-item-intime365">
              √
            </div>
          </div>
          <div class="membershipcomparison-table-arrive-item">
            <div class="membershipcomparison-table-arrive-item-title">
              <div class="membershipcomparison-table-arrive-item-title-item">
                洗衣服务
              </div>
            </div>
            <div class="membershipcomparison-table-arrive-item-member">√</div>
            <div class="membershipcomparison-table-arrive-item-intime365">
              5折
            </div>
          </div>
          <div class="membershipcomparison-table-arrive-item">
            <div class="membershipcomparison-table-arrive-item-title">
              <div class="membershipcomparison-table-arrive-item-title-item">
                洗车服务
              </div>
            </div>
            <div class="membershipcomparison-table-arrive-item-member">√</div>
            <div class="membershipcomparison-table-arrive-item-intime365">
              5折
            </div>
          </div>
          <div
            class="membershipcomparison-table-arrive-item"
            style="border-bottom: none"
          >
            <div class="membershipcomparison-table-arrive-item-title">
              <div class="membershipcomparison-table-arrive-item-title-item">
                礼品包装
              </div>
            </div>
            <div class="membershipcomparison-table-arrive-item-member">√</div>
            <div class="membershipcomparison-table-arrive-item-intime365">
              √
            </div>
          </div>
        </div>
      </div>
      <div class="membershipcomparison-table-serve">
        <div class="membershipcomparison-table-serve-left">
          <div class="membershipcomparison-table-serve-left-title">
            服务承诺
          </div>
        </div>
        <div class="membershipcomparison-table-serve-right">
          <div class="membershipcomparison-table-serve-item">
            <div class="membershipcomparison-table-serve-item-title">
              <div class="membershipcomparison-table-serve-item-title-item">
                服务承诺
              </div>
            </div>
            <div class="membershipcomparison-table-serve-item-member">无</div>
            <div class="membershipcomparison-table-serve-item-intime365">√</div>
          </div>
          <div
            class="membershipcomparison-table-serve-item"
            style="border-bottom: none"
          >
            <div class="membershipcomparison-table-serve-item-title">
              <div class="membershipcomparison-table-serve-item-title-item">
                九项承诺
              </div>
            </div>
            <div class="membershipcomparison-table-serve-item-member">√</div>
            <div class="membershipcomparison-table-serve-item-intime365">√</div>
          </div>
        </div>
      </div>
    </div>

    <div class="membershipcomparison-bottom">
      <div class="membershipcomparison-bottom-item">
        *受硬件条件影响，各门店权益或存在差异，以门店说明为准，敬请谅解
      </div>
      <div class="membershipcomparison-bottom-item">
        *为了向会员提供更好的服务，保障会员的服务体验，银泰商业将根据自身及三方的业务发展情况不时对当前的权益内容进行优选汰换
        、升级迭代，
        并不断开发创新会员权益的类型和内容，持续完善服务内容。权益的更新调整将通过上述服务页面进行通知和公告，请您予以关注。
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "membershipcomparison",
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
