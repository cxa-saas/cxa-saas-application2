<template>
  <div
    class="card card-custom card-stretch gutter-b card-shadowless bg-light-danger"
  >
    <!--begin::Header-->
    <div class="card-header border-0">
      <h3 class="card-title font-weight-bolder text-dark">Active Employees</h3>
      <div class="card-toolbar">
        <Dropdown5></Dropdown5>
      </div>
    </div>
    <!--end::Header-->
    <!--begin::Body-->
    <div class="card-body pt-0">
      <template v-for="(item, i) in list">
        <div class="d-flex align-items-center flex-wrap mb-10" v-bind:key="i">
          <!--begin::Symbol-->
          <div class="symbol symbol-50 symbol-light mr-5">
            <span class="symbol-label">
              <img :src="item.img" class="h-50 align-self-center" alt="" />
            </span>
          </div>
          <!--end::Symbol-->
          <!--begin::Text-->
          <div class="d-flex flex-column flex-grow-1 mr-2">
            <a
              href="#"
              class="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1"
              >{{ item.title }}</a
            >
            <span class="text-muted font-weight-bold">{{ item.desc }}</span>
          </div>
          <!--end::Text-->
          <span
            class="label label-xl label-light label-inline my-lg-0 my-2 text-dark-50 font-weight-bolder"
            >{{ item.profit }}</span
          >
        </div>
      </template>
    </div>
    <!--end::Body-->
  </div>
</template>

<script>
import Dropdown5 from "@/view/content/dropdown/Dropdown5.vue";

export default {
  name: "widget-2",
  components: {
    Dropdown5
  },
  data() {
    return {
      list: [
        {
          title: "Chovy Qiu",
          desc: "Purchase Insurance",
          profit: "+82$",
          img:"media/svg/avatars/004-boy-1.svg"
          // img: "media/svg/misc/006-plurk.svg"
        },
        {
          title: "Wilson Wu",
          desc: "Purchase Inspection",
          profit: "+280$",
          img:"media/svg/avatars/002-girl.svg"
          // img: "media/svg/misc/015-telegram.svg"
        },
        {
          title: "Jeckie Xue",
          desc: "Purchase Inspection",
          profit: "+4500$",
          img:"media/svg/avatars/007-boy-2.svg"
          // img: "media/svg/misc/003-puzzle.svg"
        },
        {
          title: "Cain Liang",
          desc: "Purchase Shop Items",
          profit: "+4500$",
          img:"media/svg/avatars/008-boy-3.svg"
          // img: "media/svg/misc/005-bebo.svg"
        },
        {
          title: "Mike Liu",
          desc: "Purchase Items",
          profit: "+4500$",
          img:"media/svg/avatars/008-boy-3.svg"
          // img: "media/svg/misc/014-kickstarter.svg"
        }
      ]
    };
  }
};
</script>
