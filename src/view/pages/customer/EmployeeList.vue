<template>
  <div>
    <create-employee></create-employee>
    <!--begin::Card-->
    <div class="card card-custom gutter-b">
      <div class="card-body">
        <!--begin::Details-->
        <div class="d-flex mb-9">
          <!--begin: Pic-->
          <div class="flex-shrink-0 mr-7 mt-lg-0 mt-3">
            <div class="symbol symbol-50 symbol-lg-120">
              <img :src="currentEnterpriseInfo.currentEnterPhoto" alt="image" />
            </div>

            <div class="symbol symbol-50 symbol-lg-120 symbol-primary d-none">
              <span class="font-size-h3 symbol-label font-weight-boldest"
                >JM</span
              >
            </div>
          </div>
          <!--end::Pic-->

          <!--begin::Info-->
          <div class="flex-grow-1">
            <!--begin::Title-->
            <div class="d-flex justify-content-between flex-wrap mt-1">
              <div class="d-flex mr-3">
                <a
                  href="#"
                  class="
                    text-dark-75 text-hover-primary
                    font-size-h5 font-weight-bold
                    mr-3
                  "
                  >{{ this.currentEnterpriseInfo.name }}</a
                >
                <a href="#"
                  ><i class="flaticon2-correct text-success font-size-h5"></i
                ></a>
              </div>

              <div class="my-lg-0 my-3">
                <a
                  href="#/customer/point-recharge"
                  class="
                    btn btn-sm btn-light-success
                    font-weight-bolder
                    text-uppercase
                    mr-3
                  "
                  >Recharge Point</a
                >
                <!-- <a
                  href="#"
                  class="btn btn-sm btn-info font-weight-bolder text-uppercase"
                  >Upgrade package</a
                > -->
              </div>
            </div>
            <!--end::Title-->

            <!--begin::Content-->
            <div class="d-flex flex-wrap justify-content-between mt-1">
              <div class="d-flex flex-column flex-grow-1 pr-8">
                <div class="d-flex flex-wrap mb-4">
                  <a
                    href="#"
                    class="
                      text-dark-50 text-hover-primary
                      font-weight-bold
                      mr-lg-8 mr-5
                      mb-lg-0 mb-2
                    "
                    ><i class="flaticon2-new-email mr-2 font-size-lg"></i
                    >{{ this.currentEnterpriseInfo.email }}</a
                  >
                  <a
                    href="#"
                    class="
                      text-dark-50 text-hover-primary
                      font-weight-bold
                      mr-lg-8 mr-5
                      mb-lg-0 mb-2
                    "
                    ><i class="flaticon2-calendar-3 mr-2 font-size-lg"></i
                    >{{
                      this.currentEnterpriseInfo.enterprise_size_type == 0
                        ? "中小型企业"
                        : "大型企业"
                    }}
                  </a>
                  <a
                    href="#"
                    class="text-dark-50 text-hover-primary font-weight-bold"
                    ><i class="flaticon2-placeholder mr-2 font-size-lg"></i
                    >{{ this.currentEnterpriseInfo.address }}</a
                  >
                </div>

                <span class="font-weight-bold text-dark-50">{{
                  this.currentEnterpriseInfo.introduction
                }}</span>
                <!-- <span class="font-weight-bold text-dark-50"
                  >A second could be persuade people.You want people to bay
                  objective</span
                > -->
              </div>

              <!-- <div
                class="
                  d-flex
                  align-items-center
                  w-25
                  flex-fill
                  float-right
                  mt-lg-12 mt-8
                "
              >
                <span class="font-weight-bold text-dark-75">Progress</span>
                <div class="progress progress-xs mx-3 w-100">
                  <div
                    class="progress-bar bg-success"
                    role="progressbar"
                    style="width: 63%"
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <span class="font-weight-bolder text-dark">78%</span>
              </div> -->
            </div>
            <!--end::Content-->
          </div>
          <!--end::Info-->
        </div>
        <!--end::Details-->

        <div class="separator separator-solid"></div>

        <!--begin::Items-->
        <div class="d-flex align-items-center flex-wrap mt-8">
          <!--begin::Item-->
          <div class="d-flex align-items-center flex-lg-fill mr-5 mb-2">
            <span class="mr-4">
              <i
                class="
                  flaticon-piggy-bank
                  display-4
                  text-muted
                  font-weight-bold
                "
              ></i>
            </span>
            <div class="d-flex flex-column text-dark-75">
              <span class="font-weight-bolder font-size-sm">Point Balance</span>
              <span class="font-weight-bolder font-size-h5"
                ><span class="text-dark-50 font-weight-bold">$</span
                >{{ currentEnterpriseInfo.points_balance }}</span
              >
            </div>
          </div>
          <!--end::Item-->

          <!--begin::Item-->
          <div class="d-flex align-items-center flex-lg-fill mr-5 mb-2">
            <span class="mr-4">
              <i
                class="flaticon-confetti display-4 text-muted font-weight-bold"
              ></i>
            </span>
            <div class="d-flex flex-column text-dark-75">
              <span class="font-weight-bolder font-size-sm">Employee</span>
              <span class="font-weight-bolder font-size-h5"
                ><span class="text-dark-50 font-weight-bold"></span
                >{{ currentEnterpriseInfo.freeze_points }}</span
              >
            </div>
          </div>
          <!--end::Item-->

          <!--begin::Item-->
          <div class="d-flex align-items-center flex-lg-fill mr-5 mb-2">
            <span class="mr-4">
              <i
                class="flaticon-pie-chart display-4 text-muted font-weight-bold"
              ></i>
            </span>
            <div class="d-flex flex-column text-dark-75">
              <span class="font-weight-bolder font-size-sm">Billing</span>
              <span class="font-weight-bolder font-size-h5"
                ><span class="text-dark-50 font-weight-bold">$</span
                >{{ currentEnterpriseInfo.billing || 0}}</span
              >
            </div>
          </div>
          <!--end::Item-->

          <!--begin::Item-->
          <div class="d-flex align-items-center flex-lg-fill mr-5 mb-2">
            <span class="mr-4">
              <i
                class="flaticon-file-2 display-4 text-muted font-weight-bold"
              ></i>
            </span>
            <div class="d-flex flex-column flex-lg-fill">
              <span class="text-dark-75 font-weight-bolder font-size-sm"
                >{{ currentEnterpriseInfo.project  || 0}}</span
              >
              <a href="#/customer/project-center/project-list" class="text-primary font-weight-bolder">View</a>
            </div>
          </div>
          <!--end::Item-->

          <!--begin::Item-->
          <!-- <div class="d-flex align-items-center flex-lg-fill mr-5 mb-2">
            <span class="mr-4">
              <i
                class="flaticon-chat-1 display-4 text-muted font-weight-bold"
              ></i>
            </span>
            <div class="d-flex flex-column">
              <span class="text-dark-75 font-weight-bolder font-size-sm"
                >648 Comments</span
              >
              <a href="#" class="text-primary font-weight-bolder">View</a>
            </div>
          </div> -->
          <!--end::Item-->

          <!--begin::Item-->
          <div class="d-flex align-items-center flex-lg-fill mb-2 float-left">
            <span class="mr-4">
              <i
                class="flaticon-network display-4 text-muted font-weight-bold"
              ></i>
            </span>
            <div class="symbol-group symbol-hover">
              <div
                class="symbol symbol-30 symbol-circle"
                data-toggle="tooltip"
                title="Mark Stone"
              >
                <img alt="Pic" src="media/users/300_25.jpg" />
              </div>
              <div
                class="symbol symbol-30 symbol-circle"
                data-toggle="tooltip"
                title="Charlie Stone"
              >
                <img alt="Pic" src="media/users/300_19.jpg" />
              </div>
              <div
                class="symbol symbol-30 symbol-circle"
                data-toggle="tooltip"
                title="Luca Doncic"
              >
                <img alt="Pic" src="media/users/300_22.jpg" />
              </div>
              <div
                class="symbol symbol-30 symbol-circle"
                data-toggle="tooltip"
                title="Nick Mana"
              >
                <img alt="Pic" src="media/users/300_23.jpg" />
              </div>
              <div
                class="symbol symbol-30 symbol-circle"
                data-toggle="tooltip"
                title="Teresa Fox"
              >
                <img alt="Pic" src="media/users/300_18.jpg" />
              </div>
              <div class="symbol symbol-30 symbol-circle symbol-light">
                <span class="symbol-label font-weight-bold">5+</span>
              </div>
            </div>
          </div>
          <!--end::Item-->
        </div>
        <!--begin::Items-->
      </div>
    </div>

    <div>
      <b-card no-body>
        <b-tabs pills card>
          <b-tab title="Company Information" active>
            <!--end::Card-->
            <!-- <div class="row"> -->
            <!-- <div class="col-lg-8">
                <PointDistributeContent></PointDistributeContent>
              </div>
              <div class="col-lg-4">
                <ListWidget11></ListWidget11>
              </div> -->
            <company-information></company-information>
            <!-- </div> -->
          </b-tab>
          <b-tab title="Department Manage">
            <!--begin::Row-->
            <!--begin::Row-->
            <department></department>
            <!--end::Row-->
          </b-tab>
          <b-tab title="Administrator Manage">
            <adminstrator></adminstrator>
          </b-tab>
          <b-tab title="Employee Manage">
            <!--begin::Row-->
            <div class="row">
              <div class="col-lg-12">
                <EmployeeListContent></EmployeeListContent>
              </div>
            </div>
            <!--end::Row-->
            </b-tab
          >
          <!-- <b-tab title="Order Records">

            <div class="row">
              <div class="col-lg-8">
                <EmployeeCharts></EmployeeCharts>
              </div>
              <div class="col-lg-4">
                <Widget13></Widget13>
              </div>
            </div>
          </b-tab> -->
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import EmployeeListContent from "@/view/content/customer/companycenter/EmployeeListContent";
// import PointDistributeContent from "@/view/content/customer/PointDistributeContent";

// import Widget13 from "@/view/pages/profile/profile-comp-3/Widget13";
// import Widget15 from "@/view/pages/profile/profile-comp-3/Widget15";
// import EmployeeCharts from "@/view/content/customer/EmployeeCharts";
// import ListWidget11 from "@/view/content/widgets/list/Widget11.vue";
import {
  FETCH_ENTERPRISE_DETAIL,
  FETCH_ENTERPRISE_DEPARTMENT,
} from "@/core/services/store/enterprise.module";
import { FETCH_EMPLOYEE_LIST } from "@/core/services/store/employee.module";
import CompanyInformation from "@/view/content/customer/companycenter/CompanyInformation";
import Department from "@/view/content/customer/companycenter/Department";
import Adminstrator from "@/view/content/customer/companycenter/Adminstrator";

export default {
  name: "custom-page",
  components: {
    EmployeeListContent,
    // Widget13,
    // Widget15,
    // ListWidget11,
    // EmployeeCharts,
    // PointDistributeContent,
    CompanyInformation,
    Adminstrator,
    Department,
  },
  computed: {
    ...mapGetters(["currentEnterpriseInfo"]),
  },
  data() {
    return {};
  },
  async mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Profile 3" }]);
    await this.$store.dispatch(FETCH_ENTERPRISE_DETAIL, {
      email: this.$store.state.auth.user.email,
      enterpriseId: this.$store.state.enterprise.currentEnterpriseId,
    });
    this.$store.dispatch(FETCH_EMPLOYEE_LIST, {
      enterpriseId: this.$store.state.enterprise.currentEnterpriseId,
    });
    this.$store.dispatch(
      FETCH_ENTERPRISE_DEPARTMENT,
      this.$store.state.enterprise.currentEnterpriseId
    );
  },
};
</script>
