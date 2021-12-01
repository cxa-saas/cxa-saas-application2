<template>
  <div>
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
                  >{{ currentEnterpriseInfo.name || "CXA GROUP" }}</a
                >
                <a href="#"
                  ><i class="flaticon2-correct text-success font-size-h5"></i
                ></a>
              </div>

              <!-- <div class="my-lg-0 my-3">
                <a
                  href="#"
                  class="
                    btn btn-sm btn-light-success
                    font-weight-bolder
                    text-uppercase
                    mr-3
                  "
                  >Update</a
                >
                <a
                  href="#"
                  class="btn btn-sm btn-info font-weight-bolder text-uppercase"
                  >Upgrade package</a
                >
              </div> -->
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
                    >{{
                      currentEnterpriseInfo.email || "market@cxagroup.com"
                    }}</a
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
                      currentEnterpriseInfo.enterprise_size_type == 0
                        ? "中小型企业"
                        : "大型企业"
                    }}
                  </a>
                  <a
                    href="#"
                    class="text-dark-50 text-hover-primary font-weight-bold"
                    ><i class="flaticon2-placeholder mr-2 font-size-lg"></i
                    >{{
                      currentEnterpriseInfo.address || " 上海市 长宁区 天山SOHU"
                    }}</a
                  >
                </div>

                <span class="font-weight-bold text-dark-50">{{
                  currentEnterpriseInfo.introduction
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
              <span class="font-weight-bolder font-size-sm">Account</span>
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
                >782,300</span
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
                >73 Projects</span
              >
              <a href="#" class="text-primary font-weight-bolder">View</a>
            </div>
          </div>
          <!--end::Item-->

          <!--begin::Item-->
          <div class="d-flex align-items-center flex-lg-fill mr-5 mb-2">
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
          </div>
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
    <!--end::Card-->

    <div>
      <b-card no-body>
        <b-tabs card>
          <b-tab title="Insurance" active>
            <router-view :key="tabIndex"></router-view>
          </b-tab>
          <b-tab title="Inspection">
            <router-view></router-view>
          </b-tab>
          <b-tab title="Benefit">
            <router-view></router-view>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
// import EmployeeList from "@/view/content/customer/projectcenter/insurance/EmployeeList";
// import ProjectList from "@/view/content/customer/projectcenter/insurance/ProjectList";
import { FETCH_USER_INFO } from "@/core/services/store/auth.module";
import { FETCH_INSURANCE_LIST } from "@/core/services/store/project.module";

export default {
  name: "Profile-2",
  data() {
    return {
      tabIndex: 0,
    };
  },
  components: {
    // DataDashboard,
    // EmployeeList,
    // ProjectList,
    // Widget14
  },
  async mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Profile 2" }]);
    await this.$store.dispatch(FETCH_USER_INFO);
    await this.$store.dispatch(
      FETCH_INSURANCE_LIST,
      this.$store.state.enterprise.currentEnterpriseId
    );
  },
  methods: {
    /**
     * Set current active on click
     * @param event
     */
    setActiveTab(event) {
      let target = event.target;
      const tab = target.closest('[role="tablist"]');
      const links = tab.querySelectorAll('[data-toggle="tab"]');
      // remove active tab links
      for (let i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
      }

      // set clicked tab index to bootstrap tab
      this.tabIndex = parseInt(target.getAttribute("data-tab"));

      // set current active tab
      target.classList.add("active");
    },
  },
  computed: {
    ...mapGetters(["currentUserPhoto", "currentUser", "currentEnterpriseInfo"]),
  },
};
</script>
