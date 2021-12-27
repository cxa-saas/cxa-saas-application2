<style lang="scss">
@font-face {
  font-family: "SourceHanSansCN-Regular";
  src: url("/media/yintai/font/SourceHanSansCN-Regular.otf") format("opentype");
}
@font-face {
  font-family: "SourceHanSansCN-Medium";
  src: url("/media/yintai/font/SourceHanSansSC-Medium.otf") format("opentype");
}
@font-face {
  font-family: "SourceHanSansCN-Bold";
  src: url("/media/yintai/font/SourceHanSansSC-Bold.otf") format("opentype");
}
@media screen and (min-width: 55rem) {
  .membershipstoremarket-container {
    margin-top: 5rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .membershipstoremarket {
      max-width: 1080px;
      width: 80%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      background-color: white;

      .membershipstoremarket-top {
        width: 100%;
        height: 10rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        .membershipstoremarket-top-subtitle {
          font-size: 1rem;
          font-family: SourceHanSansCN-Medium;
          font-weight: 500;
          color: #e5004f;
          line-height: 3.25rem;
          text-transform: uppercase;
        }
        .membershipstoremarket-top-title {
          font-size: 2rem;
          font-family: SourceHanSansSC-Bold;
          font-weight: bold;
          color: #4b4b4b;
        }
        .membershipstoremarket-top-line {
          width: 2rem;
          height: 0.25rem;
          background-color: #e5004f;
          margin-top: 1rem;
        }
      }
      .membershipstoremarket-bottom {
        width: 100%;
        height: 30rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        .membershipstoremarket-bottom-title {
          margin-top: 2rem;
          margin-bottom: 2rem;
          font-size: 1.5625rem;
          font-family: SourceHanSansSC-Bold;
          font-weight: bold;
          color: #7f7f7f;
          line-height: 17px;
        }
        .membershipstoremarket-bottom-list {
          height: 32rem;
          position: relative;
          width: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          .membershipstoremarket-bottom-list-left {
            position: relative;
            width: 40%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            .membershipstoremarket-bottom-list-left-item-1 {
              position: relative;
              height: 33.3%;
              width: 100%;
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              right: -18%;
              .membershipstoremarket-bottom-list-left-item-text {
                margin-top: -1rem;

                width: 75%;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                border-radius: 1rem;
                border: #ecc292 0.2rem solid;
                .membershipstoremarket-bottom-list-left-item-text-title {
                  font-size: 1rem;
                  font-family: SourceHanSansSC-Medium;
                  font-weight: 500;
                  color: #4b4b4b;
                  margin-top: 0.4rem;
                  margin-bottom: 0.4rem;
                  margin-right: 0.4rem;
                }

                .membershipstoremarket-bottom-list-left-item-text-description {
                  width: 95%;
                  padding-right: 0.4rem;
                  text-align: left;
                  font-family: SourceHanSansSC-Regular;
                  font-weight: 400;
                  color: #7f7f7f;
                  font-size: 0.8rem;
                  line-height: 1.4rem;
                }
              }
              .membershipstoremarket-bottom-list-left-item-line {
                width: 2.2rem;
                height: 0.4rem;
                background-color: #ecc292;
              }
              .membershipstoremarket-bottom-list-left-item-logo {
                width: 6rem;
                height: 6rem;
                background-image: url("/media/yintai/cloudstore-market-left-1.png");
                background-size: 100% 100%;
              }
            }
            .membershipstoremarket-bottom-list-left-item-2 {
              position: relative;
              height: 33.3%;
              width: 100%;
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              right: 0%;
              .membershipstoremarket-bottom-list-left-item-text {
                width: 75%;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                border-radius: 1rem;
                border: #ecc292 0.2rem solid;
                .membershipstoremarket-bottom-list-left-item-text-title {
                  font-size: 1rem;
                  font-family: SourceHanSansSC-Medium;
                  font-weight: 500;
                  color: #4b4b4b;
                  margin-top: 0.4rem;
                  margin-bottom: 0.4rem;
                  margin-right: 0.4rem;
                }

                .membershipstoremarket-bottom-list-left-item-text-description {
                  width: 95%;
                  padding-right: 0.4rem;
                  text-align: left;
                  font-family: SourceHanSansSC-Regular;
                  font-weight: 400;
                  color: #7f7f7f;
                  font-size: 0.8rem;
                  line-height: 1.4rem;
                }
              }
              .membershipstoremarket-bottom-list-left-item-line {
                width: 2.2rem;
                height: 0.4rem;
                background-color: #ecc292;
              }
              .membershipstoremarket-bottom-list-left-item-logo {
                width: 6rem;
                height: 6rem;
                background-image: url("/media/yintai/cloudstore-market-left-2.png");
                background-size: 100% 100%;
              }
            }
            .membershipstoremarket-bottom-list-left-item-3 {
              position: relative;
              height: 33.3%;
              width: 100%;
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              right: -18%;
              .membershipstoremarket-bottom-list-left-item-text {
                width: 75%;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                border-radius: 1rem;
                border: #ecc292 0.2rem solid;
                margin-top: 1rem;

                .membershipstoremarket-bottom-list-left-item-text-title {
                  font-size: 1rem;
                  font-family: SourceHanSansSC-Medium;
                  font-weight: 500;
                  color: #4b4b4b;
                  margin-top: 0.4rem;
                  margin-bottom: 0.4rem;
                  margin-right: 0.4rem;
                }

                .membershipstoremarket-bottom-list-left-item-text-description {
                  width: 95%;

                  padding-right: 0.4rem;
                  text-align: left;
                  font-family: SourceHanSansSC-Regular;
                  font-weight: 400;
                  color: #7f7f7f;
                  font-size: 0.8rem;
                  line-height: 1.4rem;
                }
              }
              .membershipstoremarket-bottom-list-left-item-line {
                width: 2.2rem;
                height: 0.4rem;
                background-color: #ecc292;
              }
              .membershipstoremarket-bottom-list-left-item-logo {
                width: 6rem;
                height: 6rem;
                background-image: url("/media/yintai/cloudstore-market-left-3.png");
                background-size: 100% 100%;
              }
            }
          }

          .membershipstoremarket-bottom-list-block {
            width: 12rem;
            height: 12rem;
            background-image: url("/media/yintai/cloudstore-market-1.png");
            background-size: 100% 100%;
          }
          .membershipstoremarket-bottom-list-right {
            position: relative;
            width: 40%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            .membershipstoremarket-bottom-list-right-item-1 {
              position: relative;
              height: 33.3%;
              width: 100%;
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              left: -18%;
              .membershipstoremarket-bottom-list-right-item-text {
                width: 75%;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                border-radius: 1rem;
                border: #ecc292 0.2rem solid;
                margin-top: -1rem;

                .membershipstoremarket-bottom-list-right-item-text-title {
                  font-size: 1rem;
                  font-family: SourceHanSansSC-Medium;
                  font-weight: 500;
                  color: #4b4b4b;
                  margin-top: 0.4rem;
                  margin-bottom: 0.4rem;
                  margin-left: 0.4rem;
                }

                .membershipstoremarket-bottom-list-right-item-text-description {
                  width: 95%;
                  padding-left: 0.4rem;
                  text-align: left;
                  font-family: SourceHanSansSC-Regular;
                  font-weight: 400;
                  color: #7f7f7f;
                  font-size: 0.8rem;
                  line-height: 1.4rem;
                }
              }
              .membershipstoremarket-bottom-list-right-item-line {
                width: 2.2rem;
                height: 0.4rem;
                background-color: #ecc292;
              }
              .membershipstoremarket-bottom-list-right-item-logo {
                width: 6rem;
                height: 6rem;
                background-image: url("/media/yintai/cloudstore-market-right-1.png");
                background-size: 100% 100%;
              }
            }
            .membershipstoremarket-bottom-list-right-item-2 {
              position: relative;
              height: 33.3%;
              width: 100%;
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              .membershipstoremarket-bottom-list-right-item-text {
                width: 75%;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                border-radius: 1rem;
                border: #ecc292 0.2rem solid;
                .membershipstoremarket-bottom-list-right-item-text-title {
                  font-size: 1rem;
                  font-family: SourceHanSansSC-Medium;
                  font-weight: 500;
                  color: #4b4b4b;
                  margin-top: 0.4rem;
                  margin-bottom: 0.4rem;
                  margin-left: 0.4rem;
                }

                .membershipstoremarket-bottom-list-right-item-text-description {
                  width: 95%;
                  padding-left: 0.4rem;
                  text-align: left;
                  font-family: SourceHanSansSC-Regular;
                  font-weight: 400;
                  color: #7f7f7f;
                  font-size: 0.8rem;
                  line-height: 1.4rem;
                }
              }
              .membershipstoremarket-bottom-list-right-item-line {
                width: 2.2rem;
                height: 0.4rem;
                background-color: #ecc292;
              }
              .membershipstoremarket-bottom-list-right-item-logo {
                width: 6rem;
                height: 6rem;
                background-image: url("/media/yintai/cloudstore-market-right-2.png");
                background-size: 100% 100%;
              }
            }
            .membershipstoremarket-bottom-list-right-item-3 {
              position: relative;
              height: 33.3%;
              width: 100%;
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              left: -18%;
              .membershipstoremarket-bottom-list-right-item-text {
                margin-top: 1rem;

                width: 75%;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                border-radius: 1rem;
                border: #ecc292 0.2rem solid;
                .membershipstoremarket-bottom-list-right-item-text-title {
                  font-size: 1rem;
                  font-family: SourceHanSansSC-Medium;
                  font-weight: 500;
                  color: #4b4b4b;
                  margin-top: 0.4rem;
                  margin-bottom: 0.4rem;
                  margin-left: 0.4rem;
                }

                .membershipstoremarket-bottom-list-right-item-text-description {
                  width: 95%;
                  padding-left: 0.4rem;
                  text-align: left;
                  font-family: SourceHanSansSC-Regular;
                  font-weight: 400;
                  color: #7f7f7f;
                  font-size: 0.8rem;
                  line-height: 1.4rem;
                }
              }
              .membershipstoremarket-bottom-list-right-item-line {
                width: 2.2rem;
                height: 0.4rem;
                background-color: #ecc292;
              }
              .membershipstoremarket-bottom-list-right-item-logo {
                width: 6rem;
                height: 6rem;
                background-image: url("/media/yintai/cloudstore-market-right-3.png");
                background-size: 100% 100%;
              }
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 55rem) {
  .membershipstoremarket-container {
    margin-top: 5rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    display: none;
    .membershipstoremarket {
      max-width: 1080px;
      width: 80%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      background-color: white;

      .membershipstoremarket-top {
        width: 100%;
        height: 10rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        .membershipstoremarket-top-subtitle {
          font-size: 1rem;
          font-family: SourceHanSansCN-Medium;
          font-weight: 500;
          color: #e5004f;
          line-height: 3.25rem;
          text-transform: uppercase;
        }
        .membershipstoremarket-top-title {
          font-size: 2rem;
          font-family: SourceHanSansSC-Bold;
          font-weight: bold;
          color: #4b4b4b;
        }
        .membershipstoremarket-top-line {
          width: 2rem;
          height: 0.25rem;
          background-color: #e5004f;
          margin-top: 1rem;
        }
      }
      .membershipstoremarket-bottom {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        .membershipstoremarket-bottom-title {
          margin-top: 2rem;
          margin-bottom: 2rem;
          font-size: 1rem;
          font-family: SourceHanSansSC-Bold;
          font-weight: bold;
          color: #7f7f7f;
          line-height: 17px;
        }
        .membershipstoremarket-bottom-list {
          position: relative;
          width: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          .membershipstoremarket-bottom-list-left {
            position: relative;
            width: 40%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            .membershipstoremarket-bottom-list-left-item-1 {
              position: relative;
              height: 33.3%;
              width: 100%;
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              right: -18%;
              .membershipstoremarket-bottom-list-left-item-text {
                margin-top: -1rem;

                width: 75%;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                border-radius: 1rem;
                border: #ecc292 0.2rem solid;
                .membershipstoremarket-bottom-list-left-item-text-title {
                  font-size: 1rem;
                  font-family: SourceHanSansSC-Medium;
                  font-weight: 500;
                  color: #4b4b4b;
                  margin-top: 0.4rem;
                  margin-bottom: 0.4rem;
                  margin-right: 0.4rem;
                }

                .membershipstoremarket-bottom-list-left-item-text-description {
                  width: 95%;

                  padding-right: 0.4rem;
                  text-align: left;
                  font-family: SourceHanSansSC-Regular;
                  font-weight: 400;
                  color: #7f7f7f;
                  font-size: 0.8rem;
                  line-height: 1.4rem;
                }
              }
              .membershipstoremarket-bottom-list-left-item-line {
                width: 2.2rem;
                height: 0.4rem;
                background-color: #ecc292;
              }
              .membershipstoremarket-bottom-list-left-item-logo {
                width: 3rem;
                height: 3rem;
                background-image: url("/media/yintai/cloudstore-market-left-1.png");
                background-size: 100% 100%;
              }
            }
            .membershipstoremarket-bottom-list-left-item-2 {
              position: relative;
              height: 33.3%;
              width: 100%;
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              right: 0%;
              .membershipstoremarket-bottom-list-left-item-text {
                width: 75%;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                border-radius: 1rem;
                border: #ecc292 0.2rem solid;
                .membershipstoremarket-bottom-list-left-item-text-title {
                  font-size: 1rem;
                  font-family: SourceHanSansSC-Medium;
                  font-weight: 500;
                  color: #4b4b4b;
                  margin-top: 0.4rem;
                  margin-bottom: 0.4rem;
                  margin-right: 0.4rem;
                }

                .membershipstoremarket-bottom-list-left-item-text-description {
                  width: 95%;

                  padding-right: 0.4rem;
                  text-align: left;
                  font-family: SourceHanSansSC-Regular;
                  font-weight: 400;
                  color: #7f7f7f;
                  font-size: 0.8rem;
                  line-height: 1.4rem;
                }
              }
              .membershipstoremarket-bottom-list-left-item-line {
                width: 2.2rem;
                height: 0.4rem;
                background-color: #ecc292;
              }
              .membershipstoremarket-bottom-list-left-item-logo {
                width: 3rem;
                height: 3rem;
                background-image: url("/media/yintai/cloudstore-market-left-2.png");
                background-size: 100% 100%;
              }
            }
            .membershipstoremarket-bottom-list-left-item-3 {
              position: relative;
              height: 33.3%;
              width: 100%;
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              right: -18%;
              .membershipstoremarket-bottom-list-left-item-text {
                width: 75%;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                border-radius: 1rem;
                border: #ecc292 0.2rem solid;
                margin-top: 1rem;

                .membershipstoremarket-bottom-list-left-item-text-title {
                  font-size: 1rem;
                  font-family: SourceHanSansSC-Medium;
                  font-weight: 500;
                  color: #4b4b4b;
                  margin-top: 0.4rem;
                  margin-bottom: 0.4rem;
                  margin-right: 0.4rem;
                }

                .membershipstoremarket-bottom-list-left-item-text-description {
                  width: 95%;

                  padding-right: 0.4rem;
                  text-align: left;
                  font-family: SourceHanSansSC-Regular;
                  font-weight: 400;
                  color: #7f7f7f;
                  font-size: 0.8rem;
                  line-height: 1.4rem;
                }
              }
              .membershipstoremarket-bottom-list-left-item-line {
                width: 2.2rem;
                height: 0.4rem;
                background-color: #ecc292;
              }
              .membershipstoremarket-bottom-list-left-item-logo {
                width: 3rem;
                height: 3rem;
                background-image: url("/media/yintai/cloudstore-market-left-3.png");
                background-size: 100% 100%;
              }
            }
          }

          .membershipstoremarket-bottom-list-block {
            width: 7rem;
            height: 7rem;
            background-image: url("/media/yintai/cloudstore-market-1.png");
            background-size: 100% 100%;
          }
          .membershipstoremarket-bottom-list-right {
            position: relative;
            width: 40%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            .membershipstoremarket-bottom-list-right-item-1 {
              position: relative;
              height: 33.3%;
              width: 100%;
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              left: -18%;
              .membershipstoremarket-bottom-list-right-item-text {
                width: 75%;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                border-radius: 1rem;
                border: #ecc292 0.2rem solid;
                margin-top: -1rem;

                .membershipstoremarket-bottom-list-right-item-text-title {
                  font-size: 1rem;
                  font-family: SourceHanSansSC-Medium;
                  font-weight: 500;
                  color: #4b4b4b;
                  margin-top: 0.4rem;
                  margin-bottom: 0.4rem;
                  margin-left: 0.4rem;
                }

                .membershipstoremarket-bottom-list-right-item-text-description {
                  width: 95%;
                  padding-left: 0.4rem;
                  text-align: left;

                  font-family: SourceHanSansSC-Regular;
                  font-weight: 400;
                  color: #7f7f7f;
                  font-size: 0.8rem;
                  line-height: 1.4rem;
                }
              }
              .membershipstoremarket-bottom-list-right-item-line {
                width: 2.2rem;
                height: 0.4rem;
                background-color: #ecc292;
              }
              .membershipstoremarket-bottom-list-right-item-logo {
                width: 3rem;
                height: 3rem;
                background-image: url("/media/yintai/cloudstore-market-right-1.png");
                background-size: 100% 100%;
              }
            }
            .membershipstoremarket-bottom-list-right-item-2 {
              position: relative;
              height: 33.3%;
              width: 100%;
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              .membershipstoremarket-bottom-list-right-item-text {
                width: 75%;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                border-radius: 1rem;
                border: #ecc292 0.2rem solid;
                .membershipstoremarket-bottom-list-right-item-text-title {
                  font-size: 1rem;
                  font-family: SourceHanSansSC-Medium;
                  font-weight: 500;
                  color: #4b4b4b;
                  margin-top: 0.4rem;
                  margin-bottom: 0.4rem;
                  margin-left: 0.4rem;
                }

                .membershipstoremarket-bottom-list-right-item-text-description {
                  width: 95%;
                  padding-left: 0.4rem;
                  text-align: left;
                  font-family: SourceHanSansSC-Regular;
                  font-weight: 400;
                  color: #7f7f7f;
                  font-size: 0.8rem;
                  line-height: 1.4rem;
                }
              }
              .membershipstoremarket-bottom-list-right-item-line {
                width: 2.2rem;
                height: 0.4rem;
                background-color: #ecc292;
              }
              .membershipstoremarket-bottom-list-right-item-logo {
                width: 3rem;
                height: 3rem;
                background-image: url("/media/yintai/cloudstore-market-right-2.png");
                background-size: 100% 100%;
              }
            }
            .membershipstoremarket-bottom-list-right-item-3 {
              position: relative;
              height: 33.3%;
              width: 100%;
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              left: -18%;
              .membershipstoremarket-bottom-list-right-item-text {
                margin-top: 1rem;

                width: 75%;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                border-radius: 1rem;
                border: #ecc292 0.2rem solid;
                .membershipstoremarket-bottom-list-right-item-text-title {
                  font-size: 1rem;
                  font-family: SourceHanSansSC-Medium;
                  font-weight: 500;
                  color: #4b4b4b;
                  margin-top: 0.4rem;
                  margin-bottom: 0.4rem;
                  margin-left: 0.4rem;
                }

                .membershipstoremarket-bottom-list-right-item-text-description {
                  width: 95%;
                  padding-left: 0.4rem;
                  text-align: left;
                  font-family: SourceHanSansSC-Regular;
                  font-weight: 400;
                  color: #7f7f7f;
                  font-size: 0.8rem;
                  line-height: 1.4rem;
                }
              }
              .membershipstoremarket-bottom-list-right-item-line {
                width: 2.2rem;
                height: 0.4rem;
                background-color: #ecc292;
              }
              .membershipstoremarket-bottom-list-right-item-logo {
                width: 3rem;
                height: 3rem;
                background-image: url("/media/yintai/cloudstore-market-right-3.png");
                background-size: 100% 100%;
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
  <div class="membershipstoremarket-container">
    <div class="membershipstoremarket">
      <div class="membershipstoremarket-top">
        <div class="membershipstoremarket-top-subtitle">
          Broad market prospects
        </div>
        <div class="membershipstoremarket-top-title">广阔的市场前景</div>
        <div class="membershipstoremarket-top-line"></div>
      </div>
      <div class="membershipstoremarket-bottom">
        <div class="membershipstoremarket-bottom-title">
          云店，是快速渗透中国下沉市场的新零售利器
        </div>
        <div class="membershipstoremarket-bottom-list">
          <div class="membershipstoremarket-bottom-list-left">
            <div class="membershipstoremarket-bottom-list-left-item-1">
              <div class="membershipstoremarket-bottom-list-left-item-text">
                <div
                  class="membershipstoremarket-bottom-list-left-item-text-title"
                >
                  消费力
                </div>
                <div
                  class="
                    membershipstoremarket-bottom-list-left-item-text-description
                  "
                >
                  由“为家庭消费”向“为个人消费”过渡，即在满足家庭生活必需品消费的情况下，人们开始有意识地去追求个性化、品牌化、高端化、体验式
                </div>
              </div>
              <div
                class="membershipstoremarket-bottom-list-left-item-line"
              ></div>
              <div
                class="membershipstoremarket-bottom-list-left-item-logo"
              ></div>
            </div>
            <div class="membershipstoremarket-bottom-list-left-item-2">
              <div class="membershipstoremarket-bottom-list-left-item-text">
                <div
                  class="membershipstoremarket-bottom-list-left-item-text-title"
                >
                  新群体
                </div>
                <div
                  class="
                    membershipstoremarket-bottom-list-left-item-text-description
                  "
                >
                  •小镇青年不容小觑 <br />•回流人口将在一线城市无法释放的<br />
                  购物欲释放在了下沉市场
                </div>
              </div>
              <div
                class="membershipstoremarket-bottom-list-left-item-line"
              ></div>
              <div
                class="membershipstoremarket-bottom-list-left-item-logo"
              ></div>
            </div>
            <div class="membershipstoremarket-bottom-list-left-item-3">
              <div class="membershipstoremarket-bottom-list-left-item-text">
                <div
                  class="membershipstoremarket-bottom-list-left-item-text-title"
                >
                  人群属性
                </div>
                <div
                  class="
                    membershipstoremarket-bottom-list-left-item-text-description
                  "
                >
                  •熟人社会属性：基于信任的“小圈子”裂变<br />
                  •价格敏感属性：好东西不贵<br />
                  •闲暇娱乐属性：大把时间去体验→购买→传播
                </div>
              </div>
              <div
                class="membershipstoremarket-bottom-list-left-item-line"
              ></div>
              <div
                class="membershipstoremarket-bottom-list-left-item-logo"
              ></div>
            </div>
          </div>
          <div class="membershipstoremarket-bottom-list-block"></div>
          <div class="membershipstoremarket-bottom-list-right">
            <div class="membershipstoremarket-bottom-list-right-item-1">
              <div
                class="membershipstoremarket-bottom-list-right-item-logo"
              ></div>

              <div
                class="membershipstoremarket-bottom-list-right-item-line"
              ></div>

              <div class="membershipstoremarket-bottom-list-right-item-text">
                <div
                  class="
                    membershipstoremarket-bottom-list-right-item-text-title
                  "
                >
                  面积广人口多
                </div>
                <div
                  class="
                    membershipstoremarket-bottom-list-right-item-text-description
                  "
                >
                  •幅员辽阔，覆盖了我国近95%的土地<br />
                  •人口众多，总规模将近10亿，占比7成<br />
                </div>
              </div>
            </div>

            <div class="membershipstoremarket-bottom-list-right-item-2">
              <div
                class="membershipstoremarket-bottom-list-right-item-logo"
              ></div>

              <div
                class="membershipstoremarket-bottom-list-right-item-line"
              ></div>

              <div class="membershipstoremarket-bottom-list-right-item-text">
                <div
                  class="
                    membershipstoremarket-bottom-list-right-item-text-title
                  "
                >
                  供给需求
                </div>
                <div
                  class="
                    membershipstoremarket-bottom-list-right-item-text-description
                  "
                >
                  •优质供给欠缺，弥补品牌商品力不足
                  <br />
                  •满足居民需求远未被满足
                </div>
              </div>
            </div>

            <div class="membershipstoremarket-bottom-list-right-item-3">
              <div
                class="membershipstoremarket-bottom-list-right-item-logo"
              ></div>

              <div
                class="membershipstoremarket-bottom-list-right-item-line"
              ></div>

              <div class="membershipstoremarket-bottom-list-right-item-text">
                <div
                  class="
                    membershipstoremarket-bottom-list-right-item-text-title
                  "
                >
                  互联网化程度
                </div>
                <div
                  class="
                    membershipstoremarket-bottom-list-right-item-text-description
                  "
                >
                  发展潜力巨大，下沉人群才刚刚“触网”不久，而他们的背后，正是移动互联网时代最后一块流量红利洼地
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
  name: "membershipstoremarket",
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
