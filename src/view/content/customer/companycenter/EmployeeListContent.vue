<template>
  <!--begin::Advance Table Widget 2-->
  <div class="card card-custom card-stretch gutter-b">
    <b-tabs pills card>
      <b-tab
        v-for="item in this.currentEnterpriseDepartments"
        :key="item.nodeId"
        :title="item.name"
        @click="changeTab(item.nodeId)"
      >
        <!--begin::Header-->
        <div class="card-header border-0 pt-5">
          <h3 class="card-title align-items-start flex-column">
            <span class="card-label font-weight-bolder text-dark">
              Employee List
            </span>
            <span class="text-muted mt-3 font-weight-bold font-size-sm">
              More than 400+ employees
            </span>
          </h3>
          <div class="card-toolbar">
            <div class="row">
              <!--begin::Desktop Search-->
              <div
                class="quick-search quick-search-inline ml-20 w-300px"
                id="kt_quick_search_inline"
              >
                <!--begin::Form-->
                <form method="get" class="quick-search-form">
                  <div class="input-group rounded bg-light">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <span class="svg-icon svg-icon-lg">
                          <!--begin::Svg Icon | path:assets/media/svg/icons/General/Search.svg-->
                          <inline-svg
                            src="media/svg/icons/General/Search.svg"
                          />
                          <!--end::Svg Icon-->
                        </span>
                      </span>
                    </div>
                    <input
                      type="text"
                      class="form-control h-45px"
                      placeholder="Search..."
                    />
                    <div class="input-group-append">
                      <span class="input-group-text">
                        <i
                          class="
                            quick-search-close
                            ki ki-close
                            icon-sm
                            text-muted
                          "
                        ></i>
                      </span>
                    </div>
                  </div>
                </form>
                <!--end::Form-->
                <!--begin::Search Toggle-->
                <div
                  id="kt_quick_search_toggle"
                  data-toggle="dropdown"
                  data-offset="0px,1px"
                ></div>
                <!--end::Search Toggle-->
                <!--begin::Dropdown-->
                <div
                  class="
                    dropdown-menu
                    dropdown-menu-left
                    dropdown-menu-lg
                    dropdown-menu-anim-up
                  "
                >
                  <div
                    class="quick-search-wrapper scroll"
                    data-scroll="true"
                    data-height="350"
                    data-mobile-height="200"
                  ></div>
                </div>
                <!--end::Dropdown-->
              </div>
              <!--end::Desktop Search-->
              <create-employee></create-employee>

              <!-- <a
                href="#"
                class="btn btn-sm btn-info font-weight-bolder text-uppercase"
                >Import</a -->
              <!-- > -->
              <!-- <a
          href="#"
          class="btn btn-sm btn-info font-weight-bolder text-uppercase"
          >Create</a
        > -->
              <create-employee></create-employee>
            </div>
            <!-- <ul class="nav nav-pills nav-pills-sm nav-dark-75">
          <li class="nav-item">
            <a
              class="nav-link py-2 px-4"
              :class="{ active: this.show === 'month' }"
              data-toggle="tab"
              href="#kt_tab_pane_3_1"
              @click="show = 'month'"
            >
              Month
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link py-2 px-4"
              data-toggle="tab"
              :class="{ active: this.show === 'week' }"
              href="#kt_tab_pane_2_1"
              @click="show = 'week'"
            >
              Week
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link py-2 px-4"
              data-toggle="tab"
              :class="{ active: this.show === 'day' }"
              href="#kt_tab_pane_1_1"
              @click="show = 'day'"
            >
              Day
            </a>
          </li>
        </ul> -->
          </div>
        </div>
        <!--end::Header-->
        <!--begin::Body-->
        <div class="card-body pt-3 pb-0">
          <!--begin::Table-->
          <div class="table-responsive">
            <table class="table table-borderless table-vertical-center">
              <thead>
                <tr>
                  <th class="pl-0" style="width: 50px">
                    <label class="checkbox checkbox-lg checkbox-single">
                      <input
                        type="checkbox"
                        @input="setCheck($event.target.checked)"
                      />
                      <span></span>
                    </label>
                  </th>
                  <th class="p-0" style="width: 50px">Avatar</th>
                  <th class="p-0" style="min-width: 110px">Name</th>
                  <th class="p-0" style="min-width: 100px">Email</th>
                  <th class="p-0" style="min-width: 125px">Mobile</th>
                  <th class="p-0" style="min-width: 125px">Location</th>
                  <th class="p-0" style="min-width: 125px">Entry Date</th>
                  <th class="p-0" style="min-width: 110px">Marital Status</th>
                  <th class="p-0" style="min-width: 150px">Action</th>
                </tr>
              </thead>
              <tbody>
                <template v-for="(item, i) in dataToShow">
                  <tr v-bind:key="i">
                    <td class="pl-0">
                      <label class="checkbox checkbox-lg checkbox-single">
                        <input type="checkbox" value="1" :checked="checked" />
                        <span></span>
                      </label>
                    </td>
                    <td class="pl-0 py-4">
                      <div class="symbol symbol-50 symbol-light mr-1">
                        <span class="symbol-label">
                          <img
                            :src="item.avatar"
                            class="h-50 align-self-center"
                            alt=""
                          />
                        </span>
                      </div>
                    </td>
                    <td class="pl-0">
                      <a
                        class="
                          text-dark-75
                          font-weight-bolder
                          text-hover-primary
                          mb-1
                          font-size-lg
                        "
                      >
                        {{ item.name }}
                      </a>
                      <div>
                        <a
                          class="text-muted font-weight-bold text-hover-primary"
                        >
                          {{ item.sex == 1 ? "male" : "female" }}
                        </a>
                      </div>
                    </td>
                    <td class="text-left">
                      <span
                        class="
                          text-dark-75
                          font-weight-bolder
                          d-block
                          font-size-lg
                        "
                      >
                        {{ item.email || "1061773869@qq.com" }}
                      </span>
                    </td>
                    <td class="text-left">
                      <span
                        class="
                          text-dark-75
                          font-weight-bolder
                          d-block
                          font-size-lg
                        "
                      >
                        {{ item.mobile }}
                      </span>
                    </td>
                    <td class="text-left">
                      <span
                        class="
                          text-dark-75
                          font-weight-bolder
                          d-block
                          font-size-lg
                        "
                      >
                        {{ item.location }}
                      </span>
                    </td>
                                        <td class="text-left">
                      <span
                        class="
                          text-dark-75
                          font-weight-bolder
                          d-block
                          font-size-lg
                        "
                      >
                        {{ item.entrytime.substring(0,10) }}
                      </span>
                    </td>
                    <td class="text-left">
                      <span
                        class="label label-lg label-inline"
                        v-bind:class="`label-light-${item.class}`"
                      >
                        {{ item.maritalStatus==3?'unmarried':'married'}}
                      </span>
                    </td>
                    <td class="text-left pr-0">
                      <a class="btn btn-icon btn-light btn-sm">
                        <span class="svg-icon svg-icon-md svg-icon-primary">
                          <!--begin::Svg Icon-->
                          <inline-svg
                            src="media/svg/icons/General/Settings-1.svg"
                          ></inline-svg>
                          <!--end::Svg Icon-->
                        </span>
                      </a>
                      <a class="btn btn-icon btn-light btn-sm mx-3">
                        <span class="svg-icon svg-icon-md svg-icon-primary">
                          <!--begin::Svg Icon-->
                          <inline-svg
                            src="media/svg/icons/Communication/Write.svg"
                          ></inline-svg>
                          <!--end::Svg Icon-->
                        </span>
                      </a>
                      <a class="btn btn-icon btn-light btn-sm">
                        <span class="svg-icon svg-icon-md svg-icon-primary">
                          <!--begin::Svg Icon-->
                          <inline-svg
                            src="media/svg/icons/General/Trash.svg"
                          ></inline-svg>
                          <!--end::Svg Icon-->
                        </span>
                      </a>
                    </td>
                  </tr>
                </template>
              </tbody>
            </table>
          </div>
          <!--end::Table-->
        </div>
        <!-- <div class="text-center" style="margin-left: 10px">
          <v-pagination
            v-model="employeesPageConfig.current"
            :length="employeesPageConfig.pages"
          ></v-pagination>
        </div> -->
        <!--end::Body-->
        <!--end::Advance Table Widget 2-->
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CreateEmployee from "@/view/content/customer/CreateEmployee";
import { FETCH_ENTERPRISE_DEPARTMENT } from "@/core/services/store/enterprise.module";
import { FETCH_EMPLOYEE_LIST } from "@/core/services/store/employee.module";

export default {
  name: "widget-2",
  data() {
    return {
      employeeList: [],
      show: "day",
      month: [
        {
          text0: "media/users/100_1.jpg",
          text1: "Application Development",
          text2: "app@dev.com",
          text3: "$4,600,000",
          text4: "Python, MySQL",
          text5: "In Progress",
          text6: "warning",
        },
        {
          text0: "media/svg/misc/006-plurk.svg",
          text1: "Sant Outstanding",
          text2: "bprow@bnc.cc",
          text3: "$2,000,000",
          text4: "ReactJs, HTML",
          text5: "Approved",
          text6: "primary",
        },
        {
          text0: "media/svg/misc/003-puzzle.svg",
          text1: "Payrol Application",
          text2: "company@dev.com",
          text3: "$560,000",
          text4: "Laravel, Metronic",
          text5: "Success",
          text6: "success",
        },
        {
          text0: "media/svg/misc/005-bebo.svg",
          text1: "HR Management System",
          text2: "hr@demo.com",
          text3: "$57,000",
          text4: "AngularJS, C#",
          text5: "Rejected",
          text6: "danger",
        },
        {
          text0: "media/svg/misc/014-kickstarter.svg",
          text1: "KTR Mobile Application",
          text2: "ktr@demo.com",
          text3: "$45,200,000",
          text4: "ReactJS, Ruby",
          text5: "In Progress",
          text6: "warning",
        },
      ],
      week: [
        {
          text0: "media/svg/misc/014-kickstarter.svg",
          text1: "KTR Mobile Application",
          text2: "ktr@demo.com",
          text3: "$45,200,000",
          text4: "ReactJS, Ruby",
          text5: "In Progress",
          text6: "warning",
        },
        {
          text0: "media/svg/misc/006-plurk.svg",
          text1: "Sant Outstanding",
          text2: "bprow@bnc.cc",
          text3: "$2,000,000",
          text4: "ReactJs, HTML",
          text5: "Approved",
          text6: "primary",
        },
        {
          text0: "media/svg/misc/015-telegram.svg",
          text1: "Application Development",
          text2: "app@dev.com",
          text3: "$4,600,000",
          text4: "Python, MySQL",
          text5: "In Progress",
          text6: "warning",
        },
        {
          text0: "media/svg/misc/003-puzzle.svg",
          text1: "Payrol Application",
          text2: "company@dev.com",
          text3: "$560,000",
          text4: "Laravel, Metronic",
          text5: "Success",
          text6: "success",
        },
        {
          text0: "media/svg/misc/005-bebo.svg",
          text1: "HR Management System",
          text2: "hr@demo.com",
          text3: "$57,000",
          text4: "AngularJS, C#",
          text5: "Rejected",
          text6: "danger",
        },
      ],
      day: [
        {
          avatar: "media/users/100_1.jpg",
          tenantId: 1002,
          tenantName: "XXX公司",
          eid: "1457960784107048961",
          code: "1231231231",
          name: "赵六",
          status: 1,
          certificateType: 1,
          certificateNo: "33221135112333",
          birthday: "1990-01-01",
          sex: 1,
          maritalStatus: 3,
          entrytime: "2021-01-01",
          type: 1,
          point: 200,
          grade: "Devops",
          email: "131231231@qq.com",
          mobile: "12345678901",
          deptId: 1,
          deptName: "北京分部",
          location: "北京",
          class: "success",
        },
        {
          avatar: "media/users/100_1.jpg",
          tenantId: 1002,
          tenantName: "XXX公司",
          eid: "1457960784107048961",
          code: "1231231231",
          name: "赵六",
          status: 1,
          certificateType: 1,
          certificateNo: "33221135112333",
          birthday: "1990-01-01",
          sex: 1,
          maritalStatus: 3,
          entrytime: "2021-01-01",
          type: 1,
          point: 200,
          grade: "Devops",
          email: "131231231@qq.com",
          mobile: "12345678901",
          deptId: 1,
          deptName: "北京分部",
          location: "北京",
          class: "success",
        },
        {
          avatar: "media/users/100_1.jpg",
          tenantId: 1002,
          tenantName: "XXX公司",
          eid: "1457960784107048961",
          code: "1231231231",
          name: "赵六",
          status: 1,
          grade: "Devops",
          certificateType: 1,
          certificateNo: "33221135112333",
          birthday: "1990-01-01",
          sex: 1,
          maritalStatus: 3,
          entrytime: "2021-01-01",
          point: 200,
          type: 1,
          email: "131231231@qq.com",
          mobile: "12345678901",
          deptId: 1,
          deptName: "北京分部",
          location: "北京",
          class: "success",
        },
        {
          avatar: "media/users/100_1.jpg",
          tenantId: 1002,
          tenantName: "XXX公司",
          eid: "1457960784107048961",
          code: "1231231231",
          name: "赵六",
          status: 1,
          grade: "Devops",
          certificateType: 1,
          certificateNo: "33221135112333",
          birthday: "1990-01-01",
          sex: 1,
          maritalStatus: 3,
          entrytime: "2021-01-01",
          type: 1,
          email: "131231231@qq.com",
          mobile: "12345678901",
          deptId: 1,
          point: 200,
          deptName: "北京分部",
          location: "北京",
          class: "success",
        },
        {
          avatar: "media/users/100_1.jpg",
          tenantId: 1002,
          tenantName: "XXX公司",
          eid: "1457960784107048961",
          code: "1231231231",
          name: "赵六",
          status: 1,
          grade: "Devops",
          certificateType: 1,
          certificateNo: "33221135112333",
          birthday: "1990-01-01",
          sex: 1,
          maritalStatus: 3,
          entrytime: "2021-01-01",
          type: 1,
          email: "131231231@qq.com",
          mobile: "12345678901",
          deptId: 1,
          point: 200,
          deptName: "北京分部",
          location: "北京",
          class: "success",
        },
      ],
    };
  },
  components: { CreateEmployee },
  methods: {
    setCheck(checked) {
      this.checked = checked;
    },
    async changeTab(nodeId) {
      const employeeList = await this.$store.dispatch(FETCH_EMPLOYEE_LIST, {
        enterpriseId: this.$store.state.enterprise.currentEnterpriseId,
        nodeId,
      });
      this.employeeList = employeeList;
    },
  },
  async mounted() {
    await this.$store.dispatch(
      FETCH_ENTERPRISE_DEPARTMENT,
      this.$store.state.enterprise.currentEnterpriseId
    );
    await this.changeTab(this.currentEnterpriseDepartments[0].nodeId)
  },
  computed: {
    ...mapGetters([
      "layoutConfig",
      "employeesPageConfig",
      "currentEnterpriseDepartments",
    ]),

    dataToShow() {
      return this.employeeList;
    },
  },
  created() {},
};
</script>
