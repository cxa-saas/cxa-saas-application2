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
  .MembershipStoreRequire-container {
    margin-top: 5rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .MembershipStoreRequire-list {
      max-width: 1080px;
      width: 80%;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      background-color: white;
      .MembershipStoreRequire-item {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        .MembershipStoreRequire-top {
          width: 100%;
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
            text-transform: uppercase;
          }
          .membershipbannercard-top-title {
            font-size: 2rem;
            font-family: SourceHanSansSC-Bold;
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
        .MembershipStoreRequire-Merchants {
          width: 100%;
          height: 25rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          .MembershipStoreRequire-Merchants-title {
            font-size: 1.2rem;
            font-family: SourceHanSansSC-Bold;
            font-weight: bold;
            color: #7f7f7f;
          }
          .MembershipStoreRequire-Merchants-list {
            margin-top: 2rem;
            width: 50%;
            height: 24rem;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;

            .MembershipStoreRequire-Merchants-item {
              width: 45%;
              height: 100%;
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
              align-items: center;
              .MembershipStoreRequire-Merchants-item-logo {
                width: 6rem;
                height: 6rem;
                background-image: url("/media/yintai/cloudstore-require-1.png");
                background-size: 100% 100%;
              }
              .MembershipStoreRequire-Merchants-item-title {
                margin-top: 1rem;
                font-size: 1.4rem;
                font-family: SourceHanSansSC-Bold;
                font-weight: bold;
                color: #7f7f7f;
              }
              .MembershipStoreRequire-Merchants-item-list {
                display: flex;
                flex-direction: column;
                width: 100%;
                padding-left: 1.4rem;
                .MembershipStoreRequire-Merchants-item-contact-item {
                  display: flex;
                  flex-direction: row;
                  justify-content: flex-start;
                  margin-top: 0.8rem;
                  .MembershipStoreRequire-Merchants-item-contact-item-icon {
                    width: 1rem;
                    height: 1rem;
                    background-image: url("/media/yintai/cloudstore-require-1.png");
                    background-size: 100% 100%;
                  }
                  .MembershipStoreRequire-Merchants-item-contact-item-text {
                    margin-left: 8px;
                    font-size: 8px;
                    font-family: SourceHanSansSC-Regular;
                    font-weight: 400;
                    color: #7f7f7f;
                    line-height: 11px;
                  }
                }
              }
            }
          }
        }
        .MembershipStoreRequire-Recruitment {
          width: 100%;
          height: 25rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          .MembershipStoreRequire-Merchants-title {
            font-size: 1.2rem;
            font-family: SourceHanSansSC-Bold;
            font-weight: bold;
            color: #7f7f7f;
          }
          .MembershipStoreRequire-Merchants-list {
            margin-top: 2rem;
            width: 50%;
            height: 20rem;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: flex-start;

            .MembershipStoreRequire-Merchants-item {
              width: 45%;
              height: 100%;
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
              align-items: center;
              .MembershipStoreRequire-Merchants-item-logo {
                width: 6rem;
                height: 6rem;
                background-image: url("/media/yintai/cloudstore-require-1.png");
                background-size: 100% 100%;
              }
              .MembershipStoreRequire-Merchants-item-title {
                margin-top: 1rem;
                font-size: 1.4rem;
                font-family: SourceHanSansSC-Bold;
                font-weight: bold;
                color: #7f7f7f;
              }
              .MembershipStoreRequire-Merchants-item-list {
                display: flex;
                flex-direction: column;
                width: 100%;
                padding-left: 1.4rem;
                .MembershipStoreRequire-Merchants-item-contact-item {
                  display: flex;
                  flex-direction: row;
                  justify-content: flex-start;
                  margin-top: 0.8rem;
                  .MembershipStoreRequire-Merchants-item-contact-item-icon {
                    width: 1rem;
                    height: 1rem;
                    background-image: url("/media/yintai/cloudstore-require-1.png");
                    background-size: 100% 100%;
                  }
                  .MembershipStoreRequire-Merchants-item-contact-item-text {
                    margin-left: 8px;
                    font-size: 8px;
                    font-family: SourceHanSansSC-Regular;
                    font-weight: 400;
                    color: #7f7f7f;
                    line-height: 11px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 55rem) {
  .MembershipStoreRequire-container {
    margin-top: 5rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .MembershipStoreRequire-list {
      max-width: 1080px;
      width: 80%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      background-color: white;
      .MembershipStoreRequire-item {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        .MembershipStoreRequire-top {
          width: 100%;
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
            text-transform: uppercase;
          }
          .membershipbannercard-top-title {
            font-size: 2rem;
            font-family: SourceHanSansSC-Bold;
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
        .MembershipStoreRequire-Merchants {
          width: 100%;
          height: 25rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          .MembershipStoreRequire-Merchants-title {
            font-size: 1.2rem;
            font-family: SourceHanSansSC-Bold;
            font-weight: bold;
            color: #7f7f7f;
          }
          .MembershipStoreRequire-Merchants-list {
            margin-top: 2rem;
            width: 50%;
            height: 20rem;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;

            .MembershipStoreRequire-Merchants-item {
              width: 45%;
              height: 100%;
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
              align-items: center;
              .MembershipStoreRequire-Merchants-item-logo {
                width: 6rem;
                height: 6rem;
                background-image: url("/media/yintai/cloudstore-require-1.png");
                background-size: 100% 100%;
              }
              .MembershipStoreRequire-Merchants-item-title {
                margin-top: 1rem;
                font-size: 1.4rem;
                font-family: SourceHanSansSC-Bold;
                font-weight: bold;
                color: #7f7f7f;
              }
              .MembershipStoreRequire-Merchants-item-list {
                display: flex;
                flex-direction: column;
                width: 100%;
                .MembershipStoreRequire-Merchants-item-contact-item {
                  display: flex;
                  flex-direction: row;
                  justify-content: center;
                  margin-top: 0.8rem;
                  .MembershipStoreRequire-Merchants-item-contact-item-icon {
                    width: 1rem;
                    height: 1rem;
                    background-image: url("/media/yintai/cloudstore-require-1.png");
                    background-size: 100% 100%;
                  }
                  .MembershipStoreRequire-Merchants-item-contact-item-text {
                    font-size: 8px;
                    font-family: SourceHanSansSC-Regular;
                    font-weight: 400;
                    color: #7f7f7f;
                    line-height: 11px;
                    text-align: center;
                  }
                }
              }
            }
          }
        }
        .MembershipStoreRequire-Recruitment {
          width: 100%;
          height: 25rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          .MembershipStoreRequire-Merchants-title {
            font-size: 1.2rem;
            font-family: SourceHanSansSC-Bold;
            font-weight: bold;
            color: #7f7f7f;
          }
          .MembershipStoreRequire-Merchants-list {
            margin-top: 2rem;
            width: 50%;
            height: 20rem;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: flex-start;

            .MembershipStoreRequire-Merchants-item {
              width: 45%;
              height: 100%;
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
              align-items: center;
              .MembershipStoreRequire-Merchants-item-logo {
                width: 6rem;
                height: 6rem;
                background-image: url("/media/yintai/cloudstore-require-1.png");
                background-size: 100% 100%;
              }
              .MembershipStoreRequire-Merchants-item-title {
                margin-top: 1rem;
                font-size: 1.4rem;
                font-family: SourceHanSansSC-Bold;
                font-weight: bold;
                color: #7f7f7f;
              }
              .MembershipStoreRequire-Merchants-item-list {
                display: flex;
                flex-direction: column;
                width: 100%;
                .MembershipStoreRequire-Merchants-item-contact-item {
                  display: flex;
                  flex-direction: row;
                  justify-content: center;
                  margin-top: 0.8rem;
                  .MembershipStoreRequire-Merchants-item-contact-item-icon {
                    width: 1rem;
                    height: 1rem;
                    background-image: url("/media/yintai/cloudstore-require-1.png");
                    background-size: 100% 100%;
                  }
                  .MembershipStoreRequire-Merchants-item-contact-item-text {
                    font-size: 8px;
                    font-family: SourceHanSansSC-Regular;
                    font-weight: 400;
                    color: #7f7f7f;
                    line-height: 11px;
                    text-align: center;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>

<template>
  <div class="MembershipStoreRequire-container">
    <div class="MembershipStoreRequire-list">
      <div class="MembershipStoreRequire-item">
        <div class="MembershipStoreRequire-top">
          <div class="membershipbannercard-top-subtitle">Merchants</div>
          <div class="membershipbannercard-top-title">招商</div>
          <div class="membershipbannercard-top-line"></div>
        </div>
        <div class="MembershipStoreRequire-Merchants">
          <div class="MembershipStoreRequire-Merchants-title">
            诚邀云店合伙人
          </div>
          <div class="MembershipStoreRequire-Merchants-list">
            <div class="MembershipStoreRequire-Merchants-item">
              <div class="MembershipStoreRequire-Merchants-item-logo"></div>
              <div class="MembershipStoreRequire-Merchants-item-title">
                直营渠道
              </div>
              <div class="MembershipStoreRequire-Merchants-item-list">
                <div class="MembershipStoreRequire-Merchants-item-contact-item">
                  <div
                    class="
                      MembershipStoreRequire-Merchants-item-contact-item-icon
                    "
                    style="
                      background-image: url('/media/yintai/cloudstore-require-people.png');
                    "
                  ></div>
                  <div
                    class="
                      MembershipStoreRequire-Merchants-item-contact-item-text
                    "
                  >
                    李先生
                  </div>
                </div>
                <div class="MembershipStoreRequire-Merchants-item-contact-item">
                  <div
                    class="
                      MembershipStoreRequire-Merchants-item-contact-item-icon
                    "
                    style="
                      background-image: url('/media/yintai/cloudstore-require-phone.png');
                    "
                  ></div>
                  <div
                    class="
                      MembershipStoreRequire-Merchants-item-contact-item-text
                    "
                  >
                    15001358158
                  </div>
                </div>
              </div>
            </div>
            <div class="MembershipStoreRequire-Merchants-item">
              <div class="MembershipStoreRequire-Merchants-item-logo"></div>
              <div class="MembershipStoreRequire-Merchants-item-title">
                加盟渠道
              </div>
              <div class="MembershipStoreRequire-Merchants-item-list">
                <div class="MembershipStoreRequire-Merchants-item-contact-item">
                  <div
                    class="
                      MembershipStoreRequire-Merchants-item-contact-item-icon
                    "
                    style="
                      background-image: url('/media/yintai/cloudstore-require-people.png');
                    "
                  ></div>
                  <div
                    class="
                      MembershipStoreRequire-Merchants-item-contact-item-text
                    "
                  >
                    阮女士
                  </div>
                </div>
                <div class="MembershipStoreRequire-Merchants-item-contact-item">
                  <div
                    class="
                      MembershipStoreRequire-Merchants-item-contact-item-icon
                    "
                    style="
                      background-image: url('/media/yintai/cloudstore-require-phone.png');
                    "
                  ></div>
                  <div
                    class="
                      MembershipStoreRequire-Merchants-item-contact-item-text
                    "
                  >
                    18062019577
                  </div>
                </div>
              </div>
              <div class="MembershipStoreRequire-Merchants-item-list">
                <div class="MembershipStoreRequire-Merchants-item-contact-item" style="margin-top:1.5rem">
                  <div
                    class="
                      MembershipStoreRequire-Merchants-item-contact-item-icon
                    "
                    style="
                      background-image: url('/media/yintai/cloudstore-require-people.png');
                    "
                  ></div>
                  <div
                    class="
                      MembershipStoreRequire-Merchants-item-contact-item-text
                    "
                  >
                    潘先生
                  </div>
                </div>
                <div class="MembershipStoreRequire-Merchants-item-contact-item">
                  <div
                    class="
                      MembershipStoreRequire-Merchants-item-contact-item-icon
                    "
                    style="
                      background-image: url('/media/yintai/cloudstore-require-phone.png');
                    "
                  ></div>
                  <div
                    class="
                      MembershipStoreRequire-Merchants-item-contact-item-text
                    "
                  >
                    13675828959
                  </div>
                </div>
              </div>
              <div class="MembershipStoreRequire-Merchants-item-list">
                <div class="MembershipStoreRequire-Merchants-item-contact-item" style="margin-top:1.5rem">
                  <div
                    class="
                      MembershipStoreRequire-Merchants-item-contact-item-icon
                    "
                    style="
                      background-image: url('/media/yintai/cloudstore-require-people.png');
                    "
                  ></div>
                  <div
                    class="
                      MembershipStoreRequire-Merchants-item-contact-item-text
                    "
                  >
                    周先生
                  </div>
                </div>
                <div class="MembershipStoreRequire-Merchants-item-contact-item">
                  <div
                    class="
                      MembershipStoreRequire-Merchants-item-contact-item-icon
                    "
                    style="
                      background-image: url('/media/yintai/cloudstore-require-phone.png');
                    "
                  ></div>
                  <div
                    class="
                      MembershipStoreRequire-Merchants-item-contact-item-text
                    "
                  >
                    15157101337
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="MembershipStoreRequire-item">
        <div class="MembershipStoreRequire-top">
          <div class="membershipbannercard-top-subtitle">recruitment</div>
          <div class="membershipbannercard-top-title">招聘</div>
          <div class="membershipbannercard-top-line"></div>
        </div>
        <div class="MembershipStoreRequire-Recruitment">
          <div class="MembershipStoreRequire-Merchants-title">招兵买马</div>
          <div class="MembershipStoreRequire-Merchants-list">
            <div class="MembershipStoreRequire-Merchants-item">
              <div class="MembershipStoreRequire-Merchants-item-logo"></div>
              <div class="MembershipStoreRequire-Merchants-item-title">
                销售顾问
              </div>
              <div class="MembershipStoreRequire-Merchants-item-list">
                <div class="MembershipStoreRequire-Merchants-item-contact-item">
                  <div
                    class="
                      MembershipStoreRequire-Merchants-item-contact-item-icon
                    "
                    style="
                      background-image: url('/media/yintai/cloudstore-require-people.png');
                    "
                  ></div>
                  <div
                    class="
                      MembershipStoreRequire-Merchants-item-contact-item-text
                    "
                  >
                    王女士
                  </div>
                </div>
                <div class="MembershipStoreRequire-Merchants-item-contact-item">
                  <div
                    class="
                      MembershipStoreRequire-Merchants-item-contact-item-icon
                    "
                    style="
                      background-image: url('/media/yintai/cloudstore-require-phone.png');
                    "
                  ></div>
                  <div
                    class="
                      MembershipStoreRequire-Merchants-item-contact-item-text
                    "
                  >
                    15268751140
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MembershipStoreRequire",
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
