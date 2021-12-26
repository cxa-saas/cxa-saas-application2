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
  font-family: "SourceHanSansCN-Normal";
  src: url("/media/yintai/font/SourceHanSansCN-Normal.otf") format("opentype");
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
  .storelist-container {
    display: flex;
    width: 100%;
    justify-content: center;

    .storeList {
      width: 80%;
      max-width: 1080px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .store-item {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        margin-top: 7rem;
        .store-item-title {
          font-size: 2rem;
          font-family: SourceHanSansSC-Regular;
          font-weight: 400;
          color: #e5004f;
        }
        .store-item-subtitle {
          margin-top: 0.4rem;
          font-size: 1rem;
          font-family: SourceHanSansSC-Medium;
          font-weight: 500;
          color: #7d7d7d;
          line-height: 1rem;
        }
        .store-item-block {
          margin-top: 2rem;
          margin-bottom: 2rem;
          width: 43px;
          height: 7px;
          background: #e5004f;
        }

        .store-item-list {
          width: 100%;
          height: 32.5rem;
          box-shadow: 0px 0px 4px #dfd9d9a6;
          display: flex;
          flex-direction: row;
          border-radius: 1rem;
          .store-item-list-left {
            height: 100%;
            width: 50%;
            background-position: top 30%;
            background-size: cover;
          }
          .store-item-list-right {
            height: 100%;
            width: 80%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            .store-item-list-right-list {
              display: flex;
              flex-direction: row;
              justify-content: space-around;
              align-items: center;
              width: 100%;
              height: 100%;
              overflow: hidden;

              .store-item-list-right-item {
                width: 30%;
                display: flex;
                flex-direction: column;
                align-items: center;
                font-size: 1.375rem;
                font-family: SourceHanSansSC-Regular;
                font-weight: 400;
                color: #000000;
                line-height: 2.625rem;
                opacity: 0.5;
              }
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 55rem) {
  .storelist-container {
    display: flex;
    width: 100%;
    justify-content: center;
    .storeList {
      width: 80%;
      display: flex;
      flex-direction: column;
      align-items: center;

      .store-item {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        margin-top: 7rem;

        .store-item-title {
          font-size: 2rem;
          font-family: SourceHanSansSC-Regular;
          font-weight: 400;
          color: #e5004f;
        }
        .store-item-subtitle {
          margin-top: 0.4rem;
          font-size: 1rem;
          font-family: SourceHanSansSC-Medium;
          font-weight: 500;
          color: #7d7d7d;
          line-height: 1rem;
        }
        .store-item-block {
          margin-top: 2rem;
          margin-bottom: 1rem;
          width: 43px;
          height: 7px;
          background: #e5004f;
        }

        .store-item-list {
          width: 100%;
          box-shadow: 0px 0px 4px #dfd9d9a6;
          
          display: flex;
          flex-direction: column;
          .store-item-list-left {
            height: 15rem;
            width: 100%;
            background-size: cover;
          }
          .store-item-list-right {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            .store-item-list-right-list {
              display: flex;
              flex-direction: column;
              align-items: center;
              width: 100%;
              overflow: hidden;
              flex-wrap: wrap;

              .store-item-list-right-item {
                min-height: 10rem;
                width: 80%;
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-top: 1rem;
                font-size: 1.375rem;
                font-family: SourceHanSansSC-Regular;
                font-weight: 400;
                color: #000000;
                line-height: 2.625rem;
                opacity: 0.5;
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
  <div class="storelist-container">
    <div class="storeList">
      <div class="store-item">
        <div class="store-item-title">浙江省</div>
        <div class="store-item-subtitle">Zhejiang Province</div>
        <div class="store-item-block"></div>
        <div class="store-item-list">
          <div
            class="store-item-list-left"
            style="background-image: url('/media/yintai/store-1.png')"
          ></div>
          <div class="store-item-list-right">
            <div class="store-item-list-right-list">
              <div class="store-item-list-right-item">
                <a href="#/store_inner"><div class="store-item-list-right-item-text">杭州临平店</div></a>
                <div class="store-item-list-right-item-text">杭州城西店</div>
                <div class="store-item-list-right-item-text">杭州富阳店</div>
                <div class="store-item-list-right-item-text">杭州庆春店</div>
                <div class="store-item-list-right-item-text">杭州武林店</div>
                <div class="store-item-list-right-item-text">杭州下沙店</div>
                <div class="store-item-list-right-item-text">文化广场店</div>
                <div class="store-item-list-right-item-text">西湖银泰城</div>
                <div class="store-item-list-right-item-text">中大银泰城</div>
                <div class="store-item-list-right-item-text">湖州银泰城</div>
                <div class="store-item-list-right-item-text">慈溪银泰城</div>
                <div class="store-item-list-right-item-text">海宁银泰城</div>
              </div>

              <div class="store-item-list-right-item">
                <div class="store-item-list-right-item-text">环球银泰城</div>
                <div class="store-item-list-right-item-text">宁波东门店</div>
                <div class="store-item-list-right-item-text">宁波江东店</div>
                <div class="store-item-list-right-item-text">宁波天一店</div>
                <div class="store-item-list-right-item-text">宁波鄞州店</div>
                <div class="store-item-list-right-item-text">绍兴银泰城</div>
                <div class="store-item-list-right-item-text">舟山临城店</div>
                <div class="store-item-list-right-item-text">绍兴柯桥店</div>
                <div class="store-item-list-right-item-text">嘉善托管项目</div>
                <div class="store-item-list-right-item-text">镇海托管项目</div>
                <div class="store-item-list-right-item-text">滨湖银泰城</div>
                <div class="store-item-list-right-item-text">温州世贸店</div>
              </div>

              <div class="store-item-list-right-item">
                <div class="store-item-list-right-item-text">温州乐清店</div>
                <div class="store-item-list-right-item-text">温州瓯海店</div>
                <div class="store-item-list-right-item-text">金华银泰城</div>
                <div class="store-item-list-right-item-text">金华江南店</div>
                <div class="store-item-list-right-item-text">临海银泰城</div>
                <div class="store-item-list-right-item-text">温岭银泰城</div>
                <div class="store-item-list-right-item-text">杭州之江店</div>
                <div class="store-item-list-right-item-text">杭州新塘项目</div>
                <div class="store-item-list-right-item-text">滨江银泰城</div>
                <div class="store-item-list-right-item-text">海宁鹃湖店</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="store-item">
        <div class="store-item-title">安徽省</div>
        <div class="store-item-subtitle">Anhui Province</div>
        <div class="store-item-block"></div>
        <div class="store-item-list">
          <div
            class="store-item-list-left"
            style="background-image: url('/media/yintai/store-1.png')"
          ></div>
          <div class="store-item-list-right">
            <div class="store-item-list-right-list">
              <div class="store-item-list-right-item">
                <div class="store-item-list-right-item-text">蚌埠银泰城</div>
                <div class="store-item-list-right-item-text">高新银泰城</div>
                <div class="store-item-list-right-item-text">合肥银泰城</div>
                <div class="store-item-list-right-item-text">合肥银泰中心</div>
                <div class="store-item-list-right-item-text">芜湖银泰城</div>
                <div class="store-item-list-right-item-text">金华之心店</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="store-item">
        <div class="store-item-title">陕西省</div>
        <div class="store-item-subtitle">Shanxi Province</div>
        <div class="store-item-block"></div>
        <div class="store-item-list">
          <div
            class="store-item-list-left"
            style="background-image: url('/media/yintai/store-1.png')"
          ></div>
          <div class="store-item-list-right">
            <div class="store-item-list-right-list">
              <div class="store-item-list-right-item">
                <div class="store-item-list-right-item-text">开元安康店</div>
                <div class="store-item-list-right-item-text">开元宝鸡店</div>
                <div class="store-item-list-right-item-text">开元西旺店</div>
                <div class="store-item-list-right-item-text">开元钟楼店</div>
                <div class="store-item-list-right-item-text">开元咸阳店</div>
                <div class="store-item-list-right-item-text">宝鸡银泰城</div>
                <div class="store-item-list-right-item-text">西安小寨店</div>
                <div class="store-item-list-right-item-text">西安钟楼店</div>
                <div class="store-item-list-right-item-text">曲江银泰城</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="store-item">
        <div class="store-item-title">湖北省</div>
        <div class="store-item-subtitle">Hubei Province</div>
        <div class="store-item-block"></div>
        <div class="store-item-list">
          <div
            class="store-item-list-left"
            style="background-image: url('/media/yintai/store-1.png')"
          ></div>
          <div class="store-item-list-right">
            <div class="store-item-list-right-list">
              <div class="store-item-list-right-item">
                <div class="store-item-list-right-item-text">武汉银泰城</div>
                <div class="store-item-list-right-item-text">鄂州国贸店</div>
                <div class="store-item-list-right-item-text">荆门银泰城</div>
                <div class="store-item-list-right-item-text">咸宁咸安店</div>
                <div class="store-item-list-right-item-text">孝感银泰城</div>
                <div class="store-item-list-right-item-text">随州新世纪</div>
                <div class="store-item-list-right-item-text">
                  随州新世纪水西门店
                </div>
                <div class="store-item-list-right-item-text">湖北仙桃商厦</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="store-item">
        <div class="store-item-title">福建省</div>
        <div class="store-item-subtitle">Fujian Province</div>
        <div class="store-item-block"></div>
        <div class="store-item-list">
          <div
            class="store-item-list-left"
            style="background-image: url('/media/yintai/store-1.png')"
          ></div>
          <div class="store-item-list-right">
            <div class="store-item-list-right-list">
              <div class="store-item-list-right-item">
                <div class="store-item-list-right-item-text">厦门集美店</div>
                <div class="store-item-list-right-item-text">
                  厦门国贸中心店
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="store-item">
        <div class="store-item-title">北京市</div>
        <div class="store-item-subtitle">Beijing</div>
        <div class="store-item-block"></div>
        <div class="store-item-list">
          <div
            class="store-item-list-left"
            style="background-image: url('/media/yintai/store-1.png')"
          ></div>
          <div class="store-item-list-right">
            <div class="store-item-list-right-list">
              <div class="store-item-list-right-item">
                <div class="store-item-list-right-item-text">北京大红门店</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="store-item">
        <div class="store-item-title">河北省</div>
        <div class="store-item-subtitle">Hebei Province</div>
        <div class="store-item-block"></div>
        <div class="store-item-list">
          <div
            class="store-item-list-left"
            style="background-image: url('/media/yintai/store-1.png')"
          ></div>
          <div class="store-item-list-right">
            <div class="store-item-list-right-list">
              <div class="store-item-list-right-item">
                <div class="store-item-list-right-item-text">唐山银泰城</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="store-item">
        <div class="store-item-title">广西省</div>
        <div class="store-item-subtitle">Guangxi Province</div>
        <div class="store-item-block"></div>
        <div class="store-item-list">
          <div
            class="store-item-list-left"
            style="background-image: url('/media/yintai/store-1.png')"
          ></div>
          <div class="store-item-list-right">
            <div class="store-item-list-right-list">
              <div class="store-item-list-right-item">
                <div class="store-item-list-right-item-text">柳州银泰城</div>
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
  name: "storeList",
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
