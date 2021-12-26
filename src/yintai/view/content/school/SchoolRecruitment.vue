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
  .schoolrecruitment {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: white;
    margin-top: 5rem;

    .schoolrecruitment-top {
      width: 80%;
      max-width: 1080px;
      height: 10rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      .schoolrecruitment-top-subtitle {
        font-size: 0.8rem;
        font-family: SourceHanSansCN-Medium;
        font-weight: 500;
        color: #e5004f;
        line-height: 3.25rem;
        text-transform: uppercase;
      }
      .schoolrecruitment-top-title {
        font-size: 1.6rem;
        font-family: SourceHanSansCN-Bold;
        font-weight: bold;
        color: #4b4b4b;
      }
      .schoolrecruitment-top-line {
        width: 2rem;
        height: 0.25rem;
        background-color: #e5004f;
        margin-top: 1rem;
      }
    }
    .schoolrecruitment-table {
      width: 80%;
      max-width: 1080px;
      display: flex;
      flex-direction: column;
      margin-top: 5rem;
      .schoolrecruitment-table-header {
        height: 3.8rem;
        width: 100%;
        background-color: rgba(150, 142, 142, 0.587);
        display: flex;
        flex-direction: row;
        align-items: center;

        .schoolrecruitment-table-header-type {
          width: 10%;
          text-align: center;
          font-size: 12px;
          font-family: Source Han Sans SC;
          font-weight: 500;
          color: #000000;
          line-height: 20px;
        }
        .schoolrecruitment-table-header-position {
          width: 15%;
          text-align: center;
          font-size: 12px;
          font-family: Source Han Sans SC;
          font-weight: 500;
          color: #000000;
          line-height: 20px;
        }
        .schoolrecruitment-table-header-duty {
          width: 60%;
          text-align: center;
          font-size: 12px;
          font-family: Source Han Sans SC;
          font-weight: 500;
          color: #000000;
          line-height: 20px;
        }
        .schoolrecruitment-table-header-city {
          width: 15%;
          text-align: center;
          font-size: 12px;
          font-family: Source Han Sans SC;
          font-weight: 500;
          color: #000000;
          line-height: 20px;
        }
      }
      .schoolrecruitment-table-product {
        display: flex;
        flex-direction: row;
        width: 100%;
        border-bottom: 0.2rem #000000 solid;
        height: 20rem;
        .schoolrecruitment-table-product-type {
          height: 100%;
          width: 10%;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          .schoolrecruitment-table-product-type-title {
            font-size: 10px;
            font-family: Source Han Sans SC;
            font-weight: 400;
            color: #000000;
            line-height: 20px;
          }
        }
        .schoolrecruitment-table-product-position {
          width: 15%;
          height: 100%;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          .schoolrecruitment-table-product-position-item-list {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100%;
            width: 100%;
            .schoolrecruitment-table-product-position-item {
              height: 50%;
              width: 100%;
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              &:not(:first-of-type) {
                border-top: 0.1rem #000000 solid;
              }
              .schoolrecruitment-table-product-position-item-title {
                font-size: 10px;
                font-family: Source Han Sans SC;
                font-weight: 300;
                color: #000000;
                line-height: 20px;
              }
            }
          }
        }
        .schoolrecruitment-table-product-duty {
          width: 60%;
          height: 100%;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          .schoolrecruitment-table-product-duty-list {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 50%;
            width: 100%;
            &:not(:first-of-type) {
              border-top: 0.1rem #000000 solid;
            }
            .schoolrecruitment-table-product-duty-item {
              text-align: start;
            }
          }
        }
        .schoolrecruitment-table-product-city {
          height: 100%;
          width: 15%;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          .schoolrecruitment-table-product-city-title {
            font-size: 10px;
            font-family: Source Han Sans SC;
            font-weight: 400;
            color: #000000;
            line-height: 20px;
          }
        }
      }
      .schoolrecruitment-table-business {
        display: flex;
        flex-direction: row;
        width: 100%;
        border-bottom: 0.2rem #000000 solid;
        height: 28rem;
        .schoolrecruitment-table-product-type {
          height: 100%;
          width: 10%;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          .schoolrecruitment-table-product-type-title {
            font-size: 10px;
            font-family: Source Han Sans SC;
            font-weight: 400;
            color: #000000;
            line-height: 20px;
          }
        }
        .schoolrecruitment-table-product-position {
          width: 15%;
          height: 100%;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          .schoolrecruitment-table-product-position-item-list {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100%;
            width: 100%;
            .schoolrecruitment-table-product-position-item {
              height: 33.33%;
              width: 100%;
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              &:not(:first-of-type) {
                border-top: 0.1rem #000000 solid;
              }
              .schoolrecruitment-table-product-position-item-title {
                font-size: 10px;
                font-family: Source Han Sans SC;
                font-weight: 300;
                color: #000000;
                line-height: 20px;
              }
            }
          }
        }
        .schoolrecruitment-table-product-duty {
          width: 60%;
          height: 100%;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          .schoolrecruitment-table-product-duty-list {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 33.33%;
            width: 100%;
            &:not(:first-of-type) {
              border-top: 0.1rem #000000 solid;
            }
            .schoolrecruitment-table-product-duty-item {
              text-align: start;
            }
          }
        }
        .schoolrecruitment-table-product-city {
          width: 15%;
          height: 100%;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          .schoolrecruitment-table-product-city-item-list {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100%;
            width: 100%;
            .schoolrecruitment-table-product-city-item {
              height: 33.33%;
              width: 100%;
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              &:not(:first-of-type) {
                border-top: 0.1rem #000000 solid;
              }
              .schoolrecruitment-table-product-city-item-title {
                font-size: 10px;
                font-family: Source Han Sans SC;
                font-weight: 400;
                color: #000000;
                line-height: 20px;
              }
            }
          }
        }
      }
      .schoolrecruitment-table-project {
        display: flex;
        flex-direction: row;
        width: 100%;
        border-bottom: 0.2rem #000000 solid;
        height: 20rem;
        .schoolrecruitment-table-product-type {
          height: 100%;
          width: 10%;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          .schoolrecruitment-table-product-type-title {
            font-size: 10px;
            font-family: Source Han Sans SC;
            font-weight: 400;
            color: #000000;
            line-height: 20px;
          }
        }
        .schoolrecruitment-table-product-position {
          width: 15%;
          height: 100%;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          .schoolrecruitment-table-product-position-item-list {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100%;
            width: 100%;
            .schoolrecruitment-table-product-position-item {
              height: 33.33%;
              width: 100%;
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              &:not(:first-of-type) {
                border-top: 0.1rem #000000 solid;
              }
              .schoolrecruitment-table-product-position-item-title {
                font-size: 10px;
                font-family: Source Han Sans SC;
                font-weight: 300;
                color: #000000;
                line-height: 20px;
              }
            }
          }
        }
        .schoolrecruitment-table-product-duty {
          width: 60%;
          height: 100%;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          .schoolrecruitment-table-product-duty-list {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100%;
            width: 100%;
            &:not(:first-of-type) {
              border-top: 0.1rem #000000 solid;
            }
            .schoolrecruitment-table-product-duty-item {
              text-align: start;
            }
          }
        }
        .schoolrecruitment-table-product-city {
          width: 15%;
          height: 100%;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          .schoolrecruitment-table-product-city-item-list {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100%;
            width: 100%;
            .schoolrecruitment-table-product-city-item {
              height: 33.33%;
              width: 100%;
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              &:not(:first-of-type) {
                border-top: 0.1rem #000000 solid;
              }
              .schoolrecruitment-table-product-city-item-title {
                font-size: 10px;
                font-family: Source Han Sans SC;
                font-weight: 400;
                color: #000000;
                line-height: 20px;
              }
            }
          }
        }
      }
      .schoolrecruitment-table-buy {
        display: flex;
        flex-direction: row;
        width: 100%;
        border-bottom: 0.2rem #000000 solid;
        height: 8rem;
        .schoolrecruitment-table-product-type {
          height: 100%;
          width: 10%;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          .schoolrecruitment-table-product-type-title {
            font-size: 10px;
            font-family: Source Han Sans SC;
            font-weight: 400;
            color: #000000;
            line-height: 20px;
          }
        }
        .schoolrecruitment-table-product-position {
          width: 15%;
          height: 100%;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          .schoolrecruitment-table-product-position-item-list {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100%;
            width: 100%;
            .schoolrecruitment-table-product-position-item {
              height: 100%;
              width: 100%;
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              &:not(:first-of-type) {
                border-top: 0.1rem #000000 solid;
              }
              .schoolrecruitment-table-product-position-item-title {
                font-size: 10px;
                font-family: Source Han Sans SC;
                font-weight: 300;
                color: #000000;
                line-height: 20px;
              }
            }
          }
        }
        .schoolrecruitment-table-product-duty {
          width: 60%;
          height: 100%;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          .schoolrecruitment-table-product-duty-list {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100%;
            width: 100%;
            &:not(:first-of-type) {
              border-top: 0.1rem #000000 solid;
            }
            .schoolrecruitment-table-product-duty-item {
              text-align: start;
            }
          }
        }
        .schoolrecruitment-table-product-city {
          height: 100%;
          width: 15%;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          .schoolrecruitment-table-product-city-title {
            font-size: 10px;
            font-family: Source Han Sans SC;
            font-weight: 400;
            color: #000000;
            line-height: 20px;
          }
        }
      }
      .schoolrecruitment-table-type {
        display: flex;
        flex-direction: row;
        width: 100%;
        border-bottom: 0.2rem #000000 solid;
        height: 20rem;
        .schoolrecruitment-table-product-type {
          height: 100%;
          width: 10%;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          .schoolrecruitment-table-product-type-title {
            font-size: 10px;
            font-family: Source Han Sans SC;
            font-weight: 400;
            color: #000000;
            line-height: 20px;
          }
        }
        .schoolrecruitment-table-product-position {
          width: 15%;
          height: 100%;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          .schoolrecruitment-table-product-position-item-list {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100%;
            width: 100%;
            .schoolrecruitment-table-product-position-item {
              height: 20%;
              width: 100%;
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              &:not(:first-of-type) {
                border-top: 0.1rem #000000 solid;
              }
              .schoolrecruitment-table-product-position-item-title {
                font-size: 10px;
                font-family: Source Han Sans SC;
                font-weight: 300;
                color: #000000;
                line-height: 20px;
              }
            }
          }
        }
        .schoolrecruitment-table-product-duty {
          width: 60%;
          height: 100%;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          .schoolrecruitment-table-product-duty-list {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100%;
            width: 100%;
            &:not(:first-of-type) {
              border-top: 0.1rem #000000 solid;
            }
            .schoolrecruitment-table-product-duty-item {
              text-align: start;
            }
          }
        }
        .schoolrecruitment-table-product-city {
          width: 15%;
          height: 100%;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          .schoolrecruitment-table-product-city-item-list {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100%;
            width: 100%;
            .schoolrecruitment-table-product-city-item {
              height: 100%;
              width: 100%;
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              &:not(:first-of-type) {
                border-top: 0.1rem #000000 solid;
              }
              .schoolrecruitment-table-product-city-item-title {
                font-size: 10px;
                font-family: Source Han Sans SC;
                font-weight: 400;
                color: #000000;
                line-height: 20px;
              }
            }
          }
        }
      }
    }
    .schoolrecruitment-bottom {
      width: 80%;
      max-width: 1080px;

      margin-top: 1rem;
      .schoolrecruitment-bottom-item {
        font-family: SourceHanSansSC-Regular;
        color: #7f7f7f;
        font-size: 1.3125rem;
        font-weight: 400;
      }
    }
  }
}
@media screen and (max-width: 55rem) {
  .schoolrecruitment {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: white;
    margin-top: 5rem;

    .schoolrecruitment-top {
      width: 80%;
      max-width: 1080px;
      // height: 10rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      .schoolrecruitment-top-subtitle {
        font-size: 0.8rem;
        font-family: SourceHanSansCN-Medium;
        font-weight: 500;
        color: #e5004f;
        line-height: 3.25rem;
        text-transform: uppercase;
      }
      .schoolrecruitment-top-title {
        font-size: 1.6rem;
        font-family: SourceHanSansCN-Bold;
        font-weight: bold;
        color: #4b4b4b;
      }
      .schoolrecruitment-top-line {
        width: 2rem;
        height: 0.25rem;
        background-color: #e5004f;
        margin-top: 1rem;
      }
    }
    .schoolrecruitment-table {
      width: 80%;
      max-width: 1080px;
      display: flex;
      flex-direction: column;
      margin-top: 5rem;
      .schoolrecruitment-table-header {
        height: 3.8rem;
        width: 100%;
        background-color: rgba(150, 142, 142, 0.587);
        display: flex;
        flex-direction: row;
        align-items: center;

        .schoolrecruitment-table-header-type {
          width: 10%;
          text-align: center;
          font-size: 12px;
          font-family: Source Han Sans SC;
          font-weight: 500;
          color: #000000;
          line-height: 20px;
        }
        .schoolrecruitment-table-header-position {
          width: 15%;
          text-align: center;
          font-size: 12px;
          font-family: Source Han Sans SC;
          font-weight: 500;
          color: #000000;
          line-height: 20px;
        }
        .schoolrecruitment-table-header-duty {
          width: 60%;
          text-align: center;
          font-size: 12px;
          font-family: Source Han Sans SC;
          font-weight: 500;
          color: #000000;
          line-height: 20px;
        }
        .schoolrecruitment-table-header-city {
          width: 15%;
          text-align: center;
          font-size: 12px;
          font-family: Source Han Sans SC;
          font-weight: 500;
          color: #000000;
          line-height: 20px;
        }
      }
      .schoolrecruitment-table-product {
        display: flex;
        flex-direction: row;
        width: 100%;
        border-bottom: 0.2rem #000000 solid;
        height: 55rem;
        .schoolrecruitment-table-product-type {
          height: 100%;
          width: 10%;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          .schoolrecruitment-table-product-type-title {
            font-size: 10px;
            font-family: Source Han Sans SC;
            font-weight: 400;
            color: #000000;
            line-height: 20px;
          }
        }
        .schoolrecruitment-table-product-position {
          width: 15%;
          height: 100%;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          .schoolrecruitment-table-product-position-item-list {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100%;
            width: 100%;
            .schoolrecruitment-table-product-position-item {
              height: 50%;
              width: 100%;
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              &:not(:first-of-type) {
                border-top: 0.1rem #000000 solid;
              }
              .schoolrecruitment-table-product-position-item-title {
                font-size: 10px;
                font-family: Source Han Sans SC;
                font-weight: 300;
                color: #000000;
                line-height: 20px;
              }
            }
          }
        }
        .schoolrecruitment-table-product-duty {
          width: 60%;
          height: 100%;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          .schoolrecruitment-table-product-duty-list {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 50%;
            width: 100%;
            &:not(:first-of-type) {
              border-top: 0.1rem #000000 solid;
            }
            .schoolrecruitment-table-product-duty-item {
              text-align: start;
            }
          }
        }
        .schoolrecruitment-table-product-city {
          height: 100%;
          width: 15%;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          .schoolrecruitment-table-product-city-title {
            font-size: 10px;
            font-family: Source Han Sans SC;
            font-weight: 400;
            color: #000000;
            line-height: 20px;
          }
        }
      }
      .schoolrecruitment-table-business {
        display: flex;
        flex-direction: row;
        width: 100%;
        border-bottom: 0.2rem #000000 solid;
        height: 70rem;
        .schoolrecruitment-table-product-type {
          height: 100%;
          width: 10%;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          .schoolrecruitment-table-product-type-title {
            font-size: 10px;
            font-family: Source Han Sans SC;
            font-weight: 400;
            color: #000000;
            line-height: 20px;
          }
        }
        .schoolrecruitment-table-product-position {
          width: 15%;
          height: 100%;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          .schoolrecruitment-table-product-position-item-list {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100%;
            width: 100%;
            .schoolrecruitment-table-product-position-item {
              height: 33.33%;
              width: 100%;
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              &:not(:first-of-type) {
                border-top: 0.1rem #000000 solid;
              }
              .schoolrecruitment-table-product-position-item-title {
                font-size: 10px;
                font-family: Source Han Sans SC;
                font-weight: 300;
                color: #000000;
                line-height: 20px;
              }
            }
          }
        }
        .schoolrecruitment-table-product-duty {
          width: 60%;
          height: 100%;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          .schoolrecruitment-table-product-duty-list {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 33.33%;
            width: 100%;
            &:not(:first-of-type) {
              border-top: 0.1rem #000000 solid;
            }
            .schoolrecruitment-table-product-duty-item {
              text-align: start;
            }
          }
        }
        .schoolrecruitment-table-product-city {
          width: 15%;
          height: 100%;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          .schoolrecruitment-table-product-city-item-list {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100%;
            width: 100%;
            .schoolrecruitment-table-product-city-item {
              height: 33.33%;
              width: 100%;
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              &:not(:first-of-type) {
                border-top: 0.1rem #000000 solid;
              }
              .schoolrecruitment-table-product-city-item-title {
                font-size: 10px;
                font-family: Source Han Sans SC;
                font-weight: 400;
                color: #000000;
                line-height: 20px;
              }
            }
          }
        }
      }
      .schoolrecruitment-table-project {
        display: flex;
        flex-direction: row;
        width: 100%;
        border-bottom: 0.2rem #000000 solid;
        height: 45rem;
        .schoolrecruitment-table-product-type {
          height: 100%;
          width: 10%;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          .schoolrecruitment-table-product-type-title {
            font-size: 10px;
            font-family: Source Han Sans SC;
            font-weight: 400;
            color: #000000;
            line-height: 20px;
          }
        }
        .schoolrecruitment-table-product-position {
          width: 15%;
          height: 100%;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          .schoolrecruitment-table-product-position-item-list {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100%;
            width: 100%;
            .schoolrecruitment-table-product-position-item {
              height: 33.33%;
              width: 100%;
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              &:not(:first-of-type) {
                border-top: 0.1rem #000000 solid;
              }
              .schoolrecruitment-table-product-position-item-title {
                font-size: 10px;
                font-family: Source Han Sans SC;
                font-weight: 300;
                color: #000000;
                line-height: 20px;
              }
            }
          }
        }
        .schoolrecruitment-table-product-duty {
          width: 60%;
          height: 100%;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          .schoolrecruitment-table-product-duty-list {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100%;
            width: 100%;
            &:not(:first-of-type) {
              border-top: 0.1rem #000000 solid;
            }
            .schoolrecruitment-table-product-duty-item {
              text-align: start;
            }
          }
        }
        .schoolrecruitment-table-product-city {
          width: 15%;
          height: 100%;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          .schoolrecruitment-table-product-city-item-list {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100%;
            width: 100%;
            .schoolrecruitment-table-product-city-item {
              height: 33.33%;
              width: 100%;
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              &:not(:first-of-type) {
                border-top: 0.1rem #000000 solid;
              }
              .schoolrecruitment-table-product-city-item-title {
                font-size: 10px;
                font-family: Source Han Sans SC;
                font-weight: 400;
                color: #000000;
                line-height: 20px;
              }
            }
          }
        }
      }
      .schoolrecruitment-table-buy {
        display: flex;
        flex-direction: row;
        width: 100%;
        border-bottom: 0.2rem #000000 solid;
        height: 23rem;
        .schoolrecruitment-table-product-type {
          height: 100%;
          width: 10%;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          .schoolrecruitment-table-product-type-title {
            font-size: 10px;
            font-family: Source Han Sans SC;
            font-weight: 400;
            color: #000000;
            line-height: 20px;
          }
        }
        .schoolrecruitment-table-product-position {
          width: 15%;
          height: 100%;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          .schoolrecruitment-table-product-position-item-list {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100%;
            width: 100%;
            .schoolrecruitment-table-product-position-item {
              height: 100%;
              width: 100%;
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              &:not(:first-of-type) {
                border-top: 0.1rem #000000 solid;
              }
              .schoolrecruitment-table-product-position-item-title {
                font-size: 10px;
                font-family: Source Han Sans SC;
                font-weight: 300;
                color: #000000;
                line-height: 20px;
              }
            }
          }
        }
        .schoolrecruitment-table-product-duty {
          width: 60%;
          height: 100%;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          .schoolrecruitment-table-product-duty-list {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100%;
            width: 100%;
            &:not(:first-of-type) {
              border-top: 0.1rem #000000 solid;
            }
            .schoolrecruitment-table-product-duty-item {
              text-align: start;
            }
          }
        }
        .schoolrecruitment-table-product-city {
          height: 100%;
          width: 15%;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          .schoolrecruitment-table-product-city-title {
            font-size: 10px;
            font-family: Source Han Sans SC;
            font-weight: 400;
            color: #000000;
            line-height: 20px;
          }
        }
      }
      .schoolrecruitment-table-type {
        display: flex;
        flex-direction: row;
        width: 100%;
        border-bottom: 0.2rem #000000 solid;
        height: 45rem;
        .schoolrecruitment-table-product-type {
          height: 100%;
          width: 10%;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          .schoolrecruitment-table-product-type-title {
            font-size: 10px;
            font-family: Source Han Sans SC;
            font-weight: 400;
            color: #000000;
            line-height: 20px;
          }
        }
        .schoolrecruitment-table-product-position {
          width: 15%;
          height: 100%;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          .schoolrecruitment-table-product-position-item-list {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100%;
            width: 100%;
            .schoolrecruitment-table-product-position-item {
              height: 20%;
              width: 100%;
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              &:not(:first-of-type) {
                border-top: 0.1rem #000000 solid;
              }
              .schoolrecruitment-table-product-position-item-title {
                font-size: 10px;
                font-family: Source Han Sans SC;
                font-weight: 300;
                color: #000000;
                line-height: 20px;
              }
            }
          }
        }
        .schoolrecruitment-table-product-duty {
          width: 60%;
          height: 100%;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          .schoolrecruitment-table-product-duty-list {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100%;
            width: 100%;
            &:not(:first-of-type) {
              border-top: 0.1rem #000000 solid;
            }
            .schoolrecruitment-table-product-duty-item {
              text-align: start;
            }
          }
        }
        .schoolrecruitment-table-product-city {
          width: 15%;
          height: 100%;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          .schoolrecruitment-table-product-city-item-list {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100%;
            width: 100%;
            .schoolrecruitment-table-product-city-item {
              height: 100%;
              width: 100%;
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              &:not(:first-of-type) {
                border-top: 0.1rem #000000 solid;
              }
              .schoolrecruitment-table-product-city-item-title {
                font-size: 10px;
                font-family: Source Han Sans SC;
                font-weight: 400;
                color: #000000;
                line-height: 20px;
              }
            }
          }
        }
      }
    }
    .schoolrecruitment-bottom {
      width: 80%;
      max-width: 1080px;

      margin-top: 1rem;
      .schoolrecruitment-bottom-item {
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
  <div class="schoolrecruitment">
    <div class="schoolrecruitment-top">
      <div class="schoolrecruitment-top-subtitle">
        22nd School Recruitment Position
      </div>
      <div class="schoolrecruitment-top-title">22年招聘职位</div>
      <div class="schoolrecruitment-top-line"></div>
    </div>

    <div class="schoolrecruitment-table">
      <div class="schoolrecruitment-table-header">
        <div class="schoolrecruitment-table-header-type">类型</div>
        <div class="schoolrecruitment-table-header-position">职位</div>
        <div class="schoolrecruitment-table-header-duty">职位职责</div>
        <div class="schoolrecruitment-table-header-city">工作城市</div>
      </div>
      <div class="schoolrecruitment-table-product">
        <div class="schoolrecruitment-table-product-type">
          <div class="schoolrecruitment-table-product-type-title">
            产品技术类
          </div>
        </div>
        <div class="schoolrecruitment-table-product-position">
          <div class="schoolrecruitment-table-product-position-item-list">
            <div class="schoolrecruitment-table-product-position-item">
              <div class="schoolrecruitment-table-product-position-item-title">
                产品专家-供应链
              </div>
            </div>
            <div class="schoolrecruitment-table-product-position-item">
              <div class="schoolrecruitment-table-product-position-item-title">
                产品专家-财务
              </div>
            </div>
          </div>
        </div>
        <div class="schoolrecruitment-table-product-duty">
          <div class="schoolrecruitment-table-product-duty-list">
            <div class="schoolrecruitment-table-product-duty-item">
              1.至少5年以上供应链或电商inbound/outbound产品设计经验，熟悉供应链计划、补货、库存、业务财务、商货品、权限管理等业务；
            </div>
            <div class="schoolrecruitment-table-product-duty-item">
              2.能够构建品类供应链计划体系，并通过跨部门跨公司间，销售体系和供应链的体系的深度协同，实现整个供应链全链路的成本的节约以及效率的提升，提高整体供应链的响应速度和弹性；
            </div>
            <div class="schoolrecruitment-table-product-duty-item">
              3.具有商业敏感度，能对行业发展趋势做出准确的判断，能以平台化的思维处理不同业务线的产品建设；
            </div>
            <div class="schoolrecruitment-table-product-duty-item">
              4.良好的跨团队合作和组织协调能力,有激情、有责任感。
            </div>
          </div>
          <div class="schoolrecruitment-table-product-duty-list">
            <div class="schoolrecruitment-table-product-duty-item">
              1.负责与参与银泰集团业财一体化、合同履约、计费结算、应收应付、关联交易等业务的产品规划和设计；
            </div>
            <div class="schoolrecruitment-table-product-duty-item">
              2.对产品负责，推进技术团队完成产品技术方案和计划并落地实施，确保产品的开发进度和质量，保证产品功能顺利发布上线；
            </div>
            <div class="schoolrecruitment-table-product-duty-item">
              3.结合公司管理和业务发展，洞察企业经营管理产品发展趋势，从产品视角抽象业务需求，与业务、财务、技术深入合作，协同上下游，推动集团经营管理所需的产品能力建设，协助优化管理流程；
            </div>
            <div class="schoolrecruitment-table-product-duty-item">
              4.通过数据在产品设计中的应用，支撑业务经营分析进行产品优化提升。
            </div>
          </div>
        </div>
        <div class="schoolrecruitment-table-product-city">
          <div class="schoolrecruitment-table-product-city-title">杭州</div>
        </div>
      </div>
      <div class="schoolrecruitment-table-business">
        <div class="schoolrecruitment-table-product-type">
          <div class="schoolrecruitment-table-product-type-title">招商类</div>
        </div>
        <div class="schoolrecruitment-table-product-position">
          <div class="schoolrecruitment-table-product-position-item-list">
            <div class="schoolrecruitment-table-product-position-item">
              <div class="schoolrecruitment-table-product-position-item-title">
                招商专家（餐饮辅营）
              </div>
            </div>
            <div class="schoolrecruitment-table-product-position-item">
              <div class="schoolrecruitment-table-product-position-item-title">
                招商专家（女装）
              </div>
            </div>
            <div class="schoolrecruitment-table-product-position-item">
              <div class="schoolrecruitment-table-product-position-item-title">
                商品运营专家- 儿童内衣家居
              </div>
            </div>
          </div>
        </div>
        <div class="schoolrecruitment-table-product-duty">
          <div class="schoolrecruitment-table-product-duty-list">
            <div class="schoolrecruitment-table-product-duty-item">
              1.参与所辖品类招商招调目标和计划制定，落实目标商家的联系、看场、商务洽谈、合同签订等事宜；
            </div>
            <div class="schoolrecruitment-table-product-duty-item">
              2.能够构建品类供应链计划体系，并通过跨部门跨公司间，销售体系和供应链的体系的深度协同，实现整个供应链全链路的成本的节约以及效率的提升，提高整体供应链的响应速度和弹性；
            </div>
            <div class="schoolrecruitment-table-product-duty-item">
              2.根据招调计划，充分做好市调工作，及时储备品牌资源库，确保有铺可谈，谈必有果；
            </div>
            <div class="schoolrecruitment-table-product-duty-item">
              3.关注行业潮流趋势，把握市场方向，及时捕获首店信息。
            </div>
          </div>
          <div class="schoolrecruitment-table-product-duty-list">
            <div class="schoolrecruitment-table-product-duty-item">
              1.参与所辖品类招商招调目标和计划制定，落实目标商家的联系、看场、商务洽谈、合同签订等事宜；
            </div>
            <div class="schoolrecruitment-table-product-duty-item">
              2.根据招调计划，充分做好市调工作，及时储备品牌资源库，确保有铺可谈，谈必有果；
            </div>
            <div class="schoolrecruitment-table-product-duty-item">
              3.关注行业潮流趋势，把握市场方向，及时捕获首店信息。
            </div>
          </div>
          <div class="schoolrecruitment-table-product-duty-list">
            <div class="schoolrecruitment-table-product-duty-item">
              1.负责所有联营合作品牌全年营销活动洽谈及落地。其中包括商品、营销、力益点等，在重大营销节点和竞对战中，取得明显优势；
            </div>
            <div class="schoolrecruitment-table-product-duty-item">
              2.负责头部品牌的大货管理，包含抢货要货、采货订货、对货品管理的各项核心健康指标(货密度，畅销品占比，缺货率)负责；
            </div>
            <div class="schoolrecruitment-table-product-duty-item">
              3.负责产业链源头探索，孵化出银泰定制商品的能力；
            </div>
            <div class="schoolrecruitment-table-product-duty-item">
              4.负责商务模式的迭代落地、创新业务模式（如30模式）的构建、推进和复制。
            </div>
          </div>
        </div>
        <div class="schoolrecruitment-table-product-city">
          <div class="schoolrecruitment-table-product-city-item-list">
            <div class="schoolrecruitment-table-product-city-item">
              <div class="schoolrecruitment-table-product-city-item-title">
                北京/上海/金华 武汉/杭州/唐山
              </div>
            </div>
            <div class="schoolrecruitment-table-product-city-item">
              <div class="schoolrecruitment-table-product-city-item-title">
                杭州/武汉/厦门
              </div>
            </div>
            <div class="schoolrecruitment-table-product-city-item"></div>
          </div>
        </div>
      </div>
      <div class="schoolrecruitment-table-project">
        <div class="schoolrecruitment-table-product-type">
          <div class="schoolrecruitment-table-product-type-title">
            工程物业类
          </div>
        </div>
        <div class="schoolrecruitment-table-product-position">
          <div class="schoolrecruitment-table-product-position-item-list">
            <div class="schoolrecruitment-table-product-position-item">
              <div class="schoolrecruitment-table-product-position-item-title">
                门店工程主管/经理
              </div>
            </div>
            <div class="schoolrecruitment-table-product-position-item">
              <div class="schoolrecruitment-table-product-position-item-title">
                门店物业主管/经理
              </div>
            </div>
            <div class="schoolrecruitment-table-product-position-item">
              <div class="schoolrecruitment-table-product-position-item-title">
                门店工程物业专家
              </div>
            </div>
          </div>
        </div>
        <div class="schoolrecruitment-table-product-duty">
          <div class="schoolrecruitment-table-product-duty-list">
            <div class="schoolrecruitment-table-product-duty-item">
              全面负责门店所有设备的保养、维修、更新改造等工作的组织、指导和管理工作，确保大厦工程设备的正常运行。
            </div>
            <div class="schoolrecruitment-table-product-duty-item">
              1.根据实际情况，制定部门的管理目标、各项规章制度、工程设备、设施的整体管理安排；
            </div>
            <div class="schoolrecruitment-table-product-duty-item">
              2.建立健全部门岗位职责及工作标准程序和规范，确保部门的正常运行；
            </div>
            <div class="schoolrecruitment-table-product-duty-item">
              3.制定节能、降低消耗的措施，并督导员工贯彻执行，以减少开支，提高经济效益；
            </div>
            <div class="schoolrecruitment-table-product-duty-item">
              4.负责二次装修方案的审批，施工过程中的监察，竣工后的验收；
            </div>
            <div class="schoolrecruitment-table-product-duty-item">
              5.负责各种设备.设施的对外委托管理工作（资质审核、合同签订、服务评估）；
            </div>
            <div class="schoolrecruitment-table-product-duty-item">
              6.负责消防及监控设备.设施的维修工作，与保安部协作完成设备的管理工作；
            </div>
            <div class="schoolrecruitment-table-product-duty-item">
              7.负责对内、对外的协调工作；
            </div>
            <div class="schoolrecruitment-table-product-duty-item">
              8.及时组织人力处理重大事故及问题，并及时总结经验教训，尽量减少事故造成的损失；
            </div>
            <div class="schoolrecruitment-table-product-duty-item">
              9.负责核定工程维修、改造费用，审批设备改造计划、购置计划，设备保养计划；
            </div>
            <div class="schoolrecruitment-table-product-duty-item">
              10.负责完成各种上级领导交办的其他工作。
            </div>
          </div>
        </div>
        <div class="schoolrecruitment-table-product-city">
          <div class="schoolrecruitment-table-product-city-item-list">
            <div class="schoolrecruitment-table-product-city-item">
              <div class="schoolrecruitment-table-product-city-item-title">
                北京/上海/金华 武汉/杭州/唐山
              </div>
            </div>
            <div class="schoolrecruitment-table-product-city-item">
              <div class="schoolrecruitment-table-product-city-item-title">
                杭州/武汉/厦门
              </div>
            </div>
            <div class="schoolrecruitment-table-product-city-item"></div>
          </div>
        </div>
      </div>
      <div class="schoolrecruitment-table-buy">
        <div class="schoolrecruitment-table-product-type">
          <div class="schoolrecruitment-table-product-type-title">
            团购业务类
          </div>
        </div>
        <div class="schoolrecruitment-table-product-position">
          <div class="schoolrecruitment-table-product-position-item-list">
            <div class="schoolrecruitment-table-product-position-item">
              <div class="schoolrecruitment-table-product-position-item-title">
                大客户销售
              </div>
            </div>
          </div>
        </div>
        <div class="schoolrecruitment-table-product-duty">
          <div class="schoolrecruitment-table-product-duty-list">
            <div class="schoolrecruitment-table-product-duty-item">
              1.负责企业、事业单位、政府机构等客户开发工作，执行预付卡销售计划并完成相应的业绩指标（主要针对企业福利礼品方面的销售工作）。
            </div>
            <div class="schoolrecruitment-table-product-duty-item">
              2.挖掘大中型企业客户的采购需求，负责销售服务方案的前期筹备及执行。
            </div>
            <div class="schoolrecruitment-table-product-duty-item">
              3.围绕预付卡特性，建设或引进各类产品、合作。
            </div>
            <div class="schoolrecruitment-table-product-duty-item">
              4.制定新老客户的开发与维护方案，不断加强客情建设，提升持续销售。
            </div>
          </div>
        </div>
        <div class="schoolrecruitment-table-product-city">
          <div class="schoolrecruitment-table-product-city-title">
            杭州/合肥 温州/金华/宁波
          </div>
        </div>
      </div>
      <div class="schoolrecruitment-table-type">
        <div class="schoolrecruitment-table-product-type">
          <div class="schoolrecruitment-table-product-type-title">
            品类运营类
          </div>
        </div>
        <div class="schoolrecruitment-table-product-position">
          <div class="schoolrecruitment-table-product-position-item-list">
            <div class="schoolrecruitment-table-product-position-item">
              <div class="schoolrecruitment-table-product-position-item-title">
                买手专家-男装
              </div>
            </div>
            <div class="schoolrecruitment-table-product-position-item">
              <div class="schoolrecruitment-table-product-position-item-title">
                买手专家-名品
              </div>
            </div>
            <div class="schoolrecruitment-table-product-position-item">
              <div class="schoolrecruitment-table-product-position-item-title">
                买手专家-母婴家居
              </div>
            </div>
            <div class="schoolrecruitment-table-product-position-item">
              <div class="schoolrecruitment-table-product-position-item-title">
                买手专家-服饰
              </div>
            </div>
            <div class="schoolrecruitment-table-product-position-item">
              <div class="schoolrecruitment-table-product-position-item-title">
                买手专家-皮具珠宝
              </div>
            </div>
          </div>
        </div>
        <div class="schoolrecruitment-table-product-duty">
          <div class="schoolrecruitment-table-product-duty-list">
            <div class="schoolrecruitment-table-product-duty-item">
              1.负责新商场包括天猫、喵街等各方渠道资源的行业运营工作，包括行业整体规划、行业心智打造、营销、推广、客户关系管理等系统经营性工作，对行业成交和持续发展负责；
            </div>
            <div class="schoolrecruitment-table-product-duty-item">
              2.负责该品类的品牌运营，商家运营，与商家做整体的生意规划和全域线上销售执行落地方案并跟踪执行；配合品牌进行线上活动和专题的策划，线上推广创意及效果优化，有多次参加线上活动经验者优先；
            </div>
            <div class="schoolrecruitment-table-product-duty-item">
              3.负责该品类的商品管理，包括商品规划，优化在线商品结构和库存管理，完成整店SKU规划，配合完成搜索流量优化，持续运营商品生命周期，推动线上成交转化；
            </div>
            <div class="schoolrecruitment-table-product-duty-item">
              4.承担该品类的线上活动平台运营工作，包括活动组织，资源位分配，流量配置，转化率和成交率提升；
            </div>
            <div class="schoolrecruitment-table-product-duty-item">
              5.对数据敏感，对渠道店铺相关的数据进行分析，并根据结果提出店铺运营的改进方案，优化店铺及商品排名；
            </div>
            <div class="schoolrecruitment-table-product-duty-item">
              6.对资源敏感，争取各类线上线下活动资源，整合撬动各方资源推动行业成交。
            </div>
          </div>
        </div>
        <div class="schoolrecruitment-table-product-city">
          <div class="schoolrecruitment-table-product-city-item-list">
            <div class="schoolrecruitment-table-product-city-item">
              <div class="schoolrecruitment-table-product-city-item-title">
                杭州
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
  name: "schoolrecruitment",
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
