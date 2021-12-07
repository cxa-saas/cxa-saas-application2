<template>
  <div>
    <div class="row">
      <div class="col-lg-12">
        <DataDashboard></DataDashboard>
      </div>
    </div>
    <div class="d-flex flex-column-fluid">
      <!--begin::Container-->
      <div class="container">
        <!--begin::Row-->
        <div class="row">
          <div v-for="item in this.plan" :key="item.bid" class="col-xl-6">
            <!--begin::Card-->
            <div class="card card-custom gutter-b card-stretch">
              <!--begin::Body-->
              <div class="card-body">
                <!--begin::Section-->
                <div class="d-flex align-items-center">
                  <!--begin::Pic-->
                  <div
                    class="flex-shrink-0 mr-4 symbol symbol-65 symbol-circle"
                  >
                    <img src="media/logos/logo-cxa-1.png" alt="image" />
                  </div>
                  <!--end::Pic-->
                  <!--begin::Info-->
                  <div class="d-flex flex-column mr-auto">
                    <!--begin: Title-->
                    <a
                      href="#"
                      class="
                        card-title
                        text-hover-primary
                        font-weight-bolder font-size-h5
                        text-dark
                        mb-1
                      "
                      >{{item.nameAlias}}</a
                    >
                    <span class="text-muted font-weight-bold"
                      >Creates Limitless possibilities</span
                    >
                    <!--end::Title-->
                  </div>
                  <!--end::Info-->
                  <!--begin::Toolbar-->
                  <div class="card-toolbar mb-auto">
                    <div
                      class="dropdown dropdown-inline"
                      data-toggle="tooltip"
                      title="Quick actions"
                      data-placement="left"
                    >
                      <a
                        href="#"
                        class="
                          btn btn-clean btn-hover-light-primary btn-sm btn-icon
                        "
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="ki ki-bold-more-hor"></i>
                      </a>
                      <div
                        class="
                          dropdown-menu dropdown-menu-sm dropdown-menu-right
                        "
                      >
                        <!--begin::Navigation-->
                        <ul class="navi navi-hover">
                          <li class="navi-header pb-1">
                            <span
                              class="
                                text-primary text-uppercase
                                font-weight-bold font-size-sm
                              "
                              >Add new:</span
                            >
                          </li>
                          <li class="navi-item">
                            <a href="#" class="navi-link">
                              <span class="navi-icon">
                                <i class="flaticon2-shopping-cart-1"></i>
                              </span>
                              <span class="navi-text">Order</span>
                            </a>
                          </li>
                          <li class="navi-item">
                            <a href="#" class="navi-link">
                              <span class="navi-icon">
                                <i class="flaticon2-calendar-8"></i>
                              </span>
                              <span class="navi-text">Event</span>
                            </a>
                          </li>
                          <li class="navi-item">
                            <a href="#" class="navi-link">
                              <span class="navi-icon">
                                <i class="flaticon2-graph-1"></i>
                              </span>
                              <span class="navi-text">Report</span>
                            </a>
                          </li>
                          <li class="navi-item">
                            <a href="#" class="navi-link">
                              <span class="navi-icon">
                                <i class="flaticon2-rocket-1"></i>
                              </span>
                              <span class="navi-text">Post</span>
                            </a>
                          </li>
                          <li class="navi-item">
                            <a href="#" class="navi-link">
                              <span class="navi-icon">
                                <i class="flaticon2-writing"></i>
                              </span>
                              <span class="navi-text">File</span>
                            </a>
                          </li>
                        </ul>
                        <!--end::Navigation-->
                      </div>
                    </div>
                  </div>
                  <!--end::Toolbar-->
                </div>
                <!--end::Section-->
                <!--begin::Content-->
                <div class="d-flex flex-wrap justify-content-between mt-5">
                  <div class="mr-5 d-flex flex-column mb-5">
                    <span class="d-block font-weight-bold mb-5"
                      >Start Date</span
                    >
                    <span
                      class="
                        btn btn-light-success btn-sm
                        font-weight-bold
                        btn-upper btn-text
                      "
                      >{{item.effectTime.substring(0,10)}}</span
                    >
                  </div>
                  <div class="mr-5 d-flex flex-column mb-5">
                    <span class="d-block font-weight-bold mb-5">Due Date</span>
                    <span
                      class="
                        btn btn-light-success btn-sm
                        font-weight-bold
                        btn-upper btn-text
                      "
                      >{{item.expireTime.substring(0,10)}}</span
                    >
                  </div>
                  <div class="d-flex flex-column mb-5">
                    <span class="d-block font-weight-bold mb-5">Status</span>
                    <span
                      class="
                        btn btn-text btn-light-success btn-sm
                        font-weight-bold
                      "
                      >Success</span
                    >
                  </div>
                </div>
                <!--end::Content-->
                <!--begin::Text-->
                <p class="mb-7 mt-3">
                  I distinguish three main text objectives.First, your objective
                  could be merely to inform people.A second be to persuade
                  people.
                </p>
                <!--end::Text-->
                <!--begin::Blog-->
                <div class="d-flex flex-wrap">
                  <!--begin: Item-->
                  <div class="mr-12 d-flex flex-column mb-7">
                    <span class="font-weight-bolder mb-4">Plan</span>
                    <span class="font-weight-bolder font-size-h5 pt-1">
                      <span class="font-weight-bold text-dark-50"></span
                      >99</span
                    >
                  </div>
                  <!--end::Item-->
                  <!--begin::Item-->
                  <div class="mr-12 d-flex flex-column mb-7">
                    <span class="font-weight-bolder mb-4">Cost</span>
                    <span class="font-weight-bolder font-size-h5 pt-1">
                      <span class="font-weight-bold text-dark-50">$</span
                      >439,500</span
                    >
                  </div>
                  <!--end::Item-->
                  <!--begin::Item-->
                  <div class="d-flex flex-column flex-lg-fill float-left mb-7">
                    <span class="font-weight-bolder mb-4">Members</span>
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
                <!--end::Blog-->
              </div>
              <!--end::Body-->
              <!--begin::Footer-->
              <div class="card-footer d-flex align-items-center">
                <button
                  @click="goToEmployeeList(item.bid)"
                  type="button"
                  class="
                    btn btn-primary btn-sm
                    text-uppercase
                    font-weight-bolder
                    mt-5 mt-sm-0
                    mr-auto mr-sm-0
                    ml-sm-auto
                  "
                >
                  details
                </button>
              </div>
              <!--end::Footer-->
            </div>
            <!--end::Card-->
          </div>
        </div>
        <!--end::Row-->
        <!--begin::Pagination-->
        <div
          class="d-flex justify-content-between align-items-center flex-wrap"
        >
          <div class="d-flex flex-wrap mr-3">
            <a
              href="#"
              class="
                btn
                btn-icon
                btn-sm
                btn-light-primary
                btn-light-success
                btn-light-info
                mr-2
                my-1
              "
            >
              <i class="ki ki-bold-double-arrow-back icon-xs"></i>
            </a>
            <a
              href="#"
              class="
                btn
                btn-icon
                btn-sm
                btn-light-primary
                btn-light-success
                btn-light-info
                mr-2
                my-1
              "
            >
              <i class="ki ki-bold-arrow-back icon-xs"></i>
            </a>
            <a href="#" class="btn btn-icon btn-sm border-0 mr-2 my-1">...</a>
            <a
              href="#"
              class="btn btn-icon btn-sm border-0 mr-2 my-1"
              style="color: #7e8299"
              >23</a
            >
            <a
              href="#"
              class="
                btn btn-icon btn-sm
                border-0
                btn-light-success btn-light-info
                active
                mr-2
                my-1
              "
              >24</a
            >
            <a
              href="#"
              class="btn btn-icon btn-sm border-0 mr-2 my-1"
              style="color: #7e8299"
              >25</a
            >
            <a
              href="#"
              class="btn btn-icon btn-sm border-0 mr-2 my-1"
              style="color: #7e8299"
              >26</a
            >
            <a
              href="#"
              class="btn btn-icon btn-sm border-0 mr-2 my-1"
              style="color: #7e8299"
              >27</a
            >
            <a
              href="#"
              class="btn btn-icon btn-sm border-0 mr-2 my-1"
              style="color: #7e8299"
              >28</a
            >
            <a href="#" class="btn btn-icon btn-sm border-0 mr-2 my-1">...</a>
            <a
              href="#"
              class="
                btn
                btn-icon
                btn-sm
                btn-light-primary
                btn-light-success
                btn-light-info
                mr-2
                my-1
              "
            >
              <i class="ki ki-bold-arrow-next icon-xs"></i>
            </a>
            <a
              href="#"
              class="
                btn
                btn-icon
                btn-sm
                btn-light-primary
                btn-light-success
                btn-light-info
                mr-2
                my-1
              "
            >
              <i class="ki ki-bold-double-arrow-next icon-xs"></i>
            </a>
          </div>
          <div class="d-flex align-items-center">
            <select
              class="
                form-control form-control-sm
                font-weight-bold
                mr-4
                border-0
                bg-light-info
              "
              style="width: 75px; color: #7e8299"
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            <span class="text-muted">Displaying 10 of 230 records</span>
          </div>
        </div>
        <!--end::Pagination-->
      </div>
      <!--end::Container-->
    </div>
  </div>
</template>

<script>
import DataDashboard from "@/view/content/customer/projectcenter/insurance/DataDashboard";
import { FETCH_INSURANCE_DETAIL } from "@/core/services/store/project.module";

export default {
  name: "plan-list",
  async mounted() {
    const result = await this.$store.dispatch(FETCH_INSURANCE_DETAIL, {
      enterpriseId: this.$store.state.enterprise.currentEnterpriseId,
      projectBid: this.$route.query.bid,
    });
    this.plan = result.plans
  },
  data() {
    return{
      plan: []
    }
  },
  components: { DataDashboard },
  methods: {
    goToEmployeeList(planBid) {
      this.$router.push({ name: "plan-employee-list",query:{projectBid:this.$route.query.bid,planBid:planBid} });
    },
  },
};
</script>
