<template>
  <!-- begin:: Header Topbar -->
  <div class="topbar">
    <nav class="top-menu-nav">
      <ul class="top-menu">
        <li><a>首页</a></li>
        <li><a>银泰新闻</a></li>
        <li><a>银泰云图</a></li>
        <li><a>银泰服务</a></li>
        <li><a>关于银泰</a></li>
        <li><a>联系我们</a></li>
      </ul>
    </nav>

    <!--begin: Search -->
    <!-- <KTSearchDefault></KTSearchDefault> -->

    <!--begin: Quick panel toggle -->
    <!-- <KTQuickPanel></KTQuickPanel> -->
    <!--end: Quick panel toggle -->

    <!--begin: Quick panel toggle -->
    <!-- <KTQuickActions></KTQuickActions> -->
    <!--end: Quick panel toggle -->

    <!--begin: User Bar -->
    <!-- <KTQuickUser></KTQuickUser> -->
    <!--end: User Bar -->

    <!-- <KTQuickNotifications></KTQuickNotifications> -->
  </div>
  <!-- end:: Header Topbar -->
</template>

<style lang="scss">
.topbar {
  .top-menu-nav {
    .top-menu {
      float: left;

      li {
        line-height: 1em;
        display: inline-block;
        font-size: 14px;
        padding-right: 22px;
        padding-top: 33px;

        a {
          font-family: Open Sans, Arial, sans-serif;
          font-size: 14px;
          color: #666;
          background-color: #fff;
          line-height: 1.7em;
          font-weight: 500;
          -webkit-font-smoothing: antialiased;
        }
      }
    }
  }
  .dropdown-toggle {
    padding: 0;
    &:hover {
      text-decoration: none;
    }

    &.dropdown-toggle-no-caret {
      &:after {
        content: none;
      }
    }
  }

  .dropdown-menu {
    margin: 0;
    padding: 0;
    outline: none;
    .b-dropdown-text {
      padding: 0;
    }
  }
}
</style>

<script>
// import KTSearchDefault from "@/view/layout/extras/dropdown/DropdownCreate.vue";
// import KTQuickUser from "@/view/layout/extras/offcanvas/QuickUser.vue";
// import KTQuickPanel from "@/view/layout/extras/offcanvas/QuickPanel.vue";
// import KTQuickActions from "@/view/layout/extras/offcanvas/QuickActions.vue";
// import KTQuickNotifications from "@/view/layout/extras/offcanvas/QuickNotifications.vue";

export default {
  name: "KTTopbar",
  data() {
    return {};
  },
  components: {
    // KTSearchDefault,
    // KTQuickUser,
    // KTQuickPanel,
    // KTQuickActions,
    // KTQuickNotifications
  },
  methods: {},
  computed: {
    getLanguageFlag() {
      return this.onLanguageChanged();
    },
  },
};
</script>
