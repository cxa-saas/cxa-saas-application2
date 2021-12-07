<template>
  <ul class="menu-nav">
    <li class="menu-section">
      <h4 class="menu-text">Companys</h4>
      <i class="menu-icon flaticon-more-v2"></i>
    </li>
    <router-link
      v-for="item in this.enterpriseList"
      :key="item.enterpriseId"
      :to="`/dashboard/${item.enterpriseId}`"
      v-slot="{ href, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active',
        ]"
      >
        <a
          :href="href"
          class="menu-link"
          @click="setEnterprise(item.enterpriseId)"
        >
          <i class="menu-icon flaticon2-architecture-and-city"></i>
          <span class="menu-text">{{ item.name }}</span>
        </a>
      </li>
    </router-link>
  </ul>
</template>

<script>
import { mapGetters } from "vuex";
import {
  SET_CURRENT_ENTERPRISE,
  FETCH_ENTERPRISE_DETAIL,
} from "@/core/services/store/enterprise.module";
export default {
  name: "KTMenu",
  computed: {
    ...mapGetters(["enterpriseList"]),
  },
  mounted() {
    console.log(this.enterpriseList);
  },
  methods: {
    async setEnterprise(enterpriseId) {
      await this.$store.commit(SET_CURRENT_ENTERPRISE, enterpriseId);
      await this.$store.dispatch(FETCH_ENTERPRISE_DETAIL, {
        email: this.$store.state.auth.user.email,
        enterpriseId: this.$store.state.enterprise.currentEnterpriseId,
      });
    },
    hasActiveChildren(match) {
      return this.$route["path"].indexOf(match) !== -1;
    },
  },
};
</script>
