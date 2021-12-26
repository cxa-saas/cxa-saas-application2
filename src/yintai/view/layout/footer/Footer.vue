<style lang="scss">
@media screen and (min-width: 55rem) {
  .foot-container {
    width: 100%;
    background-color: #222222;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .footer {
      width: 80%;
      height: 342px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      position: relative;
      .contact {
        width: 50%;
        height: 17.43rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-around;
        .phone {
          color: #ffffffff;
        }
        .email {
          color: #ffffffff;
        }
        .copyright {
          color: #ffffffff;
        }
        .logo {
          img {
            height: 7rem;
            width: 9rem;
          }
        }
      }
      .nav-container {
        width: 50%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        .nav-list {
          display: flex;
          flex-direction: column;
          li {
            color: #2ea3f2;
            margin-top: 1rem;
          }
          .nav-list-item {
            line-height: 1rem;
            font-size: 2rem;

            a {
              display: inline-block;
              color: white;
              font-size: 1rem;
              font-weight: 800;
            }
          }
        }
      }
      .bake {
        position: absolute;
        width: 100%;
        left: 20%;
        bottom: 2rem;
        color: #ffffffff;
        .bake-img {
          width: 1rem;
          height: 1rem;
          background-image: url("/media/yintai/beiantubiao.png");
          background-size: 100% 100%;
          display: inline-block;
        }
      }
    }
  }
}
@media screen and (max-width: 55rem) {
  .foot-container {
    width: 100%;
    background-color: #222222;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 450px;

    .footer {
      height: 100%;
      width: 80%;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-around;
      .contact {
        width: 50%;
        height: 50%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-around;
        margin-top: 5rem;
        .phone {
          color: #ffffffff;
        }
        .email {
          color: #ffffffff;
        }
        .copyright {
          color: #ffffffff;
        }
        .logo {
          img {
            height: 7rem;
            width: 9rem;
          }
        }
      }
      .nav-container {
        width: 50%;
        height: 50%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-top: 5rem;
        .nav-list {
          display: flex;
          flex-direction: column;
          li {
            color: #2ea3f2;
            margin-top: 1rem;
          }
          .nav-list-item {
            line-height: 1rem;
            font-size: 2rem;

            a {
              display: inline-block;
              color: white;
              font-size: 1rem;
              font-weight: 800;
            }
          }
        }
      }
      .bake {
        position: absolute;
        width: 80%;
        bottom: 1rem;
        color: #ffffffff;
        .bake-img {
          width: 1rem;
          height: 1rem;
          background-image: url("/media/yintai/beiantubiao.png");
          background-size: 100% 100%;
          display: inline-block;
        }
      }
    }
  }
}
</style>


<template>
  <!-- begin:: Footer -->
  <div class="foot-container">
    <div class="footer">
      <div class="contact">
        <div class="logo"><img src="/media/yintai/logowhite.png" /></div>
        <div class="phone">电话：021-8888-8888</div>
        <div class="email">邮箱：intime@intime.com.cn</div>
        <div class="copyright">Copyright@2021 银泰百货</div>
      </div>
      <div class="nav-container">
        <div class="nav-list">
          <li class="nav-list-item"><a href="#/about"> 关于银泰</a></li>
          <li class="nav-list-item"><a href="#/about">品牌故事</a></li>
          <li class="nav-list-item"><a href="#/contact">合作</a></li>
          <li class="nav-list-item"><a href="#/school">人才</a></li>
          <li class="nav-list-item"><a href="#/contact">联系我们</a></li>
        </div>
        <div class="nav-list">
          <li class="nav-list-item"><a href="#/privacy"> 隐私声明和合规保护</a></li>
          <li class="nav-list-item"><a href="#/legal">法律声明</a></li>
          <li class="nav-list-item">
            <a
              href="https://ai.alimebot.taobao.com/intl/index.htm?from=intime_miaojie"
              target="_blank"
              >意见与反馈</a
            >
          </li>
        </div>
      </div>
      <div class="bake">
        浙ICP备09077766号
        <div class="bake-img"></div>
        浙公网安备 33010302001621号 INTIME.COM.CN All Rights Reserved 版权所有
        ©2010 银泰百货
      </div>
    </div>
  </div>
  <!-- end:: Footer -->
</template>

<script>
export default {
  name: "Header",
  components: {},
  mounted() {},
  computed: {},
};
</script>
