<template>
  <div>
    <div class="row">
      <div
        v-for="item in this.insuranceList"
        :key="item.bid"
        class="col-xl-4 col-lg-6 col-md-6 col-sm-6"
      >
        <div class="card card-custom card-stretch gutter-b">
          <!--begin::Body-->
          <div class="card-body text-center pt-4">
            <!--begin::Toolbar-->
            <div class="d-flex justify-content-end">
              <div
                class="dropdown dropdown-inline"
                data-toggle="tooltip"
                title="Quick actions"
                data-placement="left"
              >
                <a
                  href="#"
                  class="btn btn-clean btn-hover-light-primary btn-sm btn-icon"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="ki ki-bold-more-hor"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-md dropdown-menu-right">
                  <!--begin::Navigation-->
                  <ul class="navi navi-hover">
                    <li class="navi-header font-weight-bold py-4">
                      <span class="font-size-lg">Choose Label:</span>
                      <i
                        class="flaticon2-information icon-md text-muted"
                        data-toggle="tooltip"
                        data-placement="right"
                        title="Click to learn more..."
                      ></i>
                    </li>
                    <li class="navi-separator mb-3 opacity-70"></li>
                    <li class="navi-item">
                      <a href="#" class="navi-link">
                        <span class="navi-text">
                          <span
                            class="
                              label label-xl label-inline label-light-success
                            "
                            >Customer</span
                          >
                        </span>
                      </a>
                    </li>
                    <li class="navi-item">
                      <a href="#" class="navi-link">
                        <span class="navi-text">
                          <span
                            class="
                              label label-xl label-inline label-light-danger
                            "
                            >Partner</span
                          >
                        </span>
                      </a>
                    </li>
                    <li class="navi-item">
                      <a href="#" class="navi-link">
                        <span class="navi-text">
                          <span
                            class="
                              label label-xl label-inline label-light-warning
                            "
                            >Suplier</span
                          >
                        </span>
                      </a>
                    </li>
                    <li class="navi-item">
                      <a href="#" class="navi-link">
                        <span class="navi-text">
                          <span
                            class="
                              label label-xl label-inline label-light-primary
                            "
                            >Member</span
                          >
                        </span>
                      </a>
                    </li>
                    <li class="navi-item">
                      <a href="#" class="navi-link">
                        <span class="navi-text">
                          <span
                            class="label label-xl label-inline label-light-dark"
                            >Staff</span
                          >
                        </span>
                      </a>
                    </li>
                    <li class="navi-separator mt-3 opacity-70"></li>
                    <li class="navi-footer py-4">
                      <a class="btn btn-clean font-weight-bold btn-sm" href="#">
                        <i class="ki ki-plus icon-sm"></i>Add new</a
                      >
                    </li>
                  </ul>
                  <!--end::Navigation-->
                </div>
              </div>
            </div>
            <!--end::Toolbar-->
            <!--begin::User-->
            <div class="mt-7">
              <div class="symbol symbol-circle symbol-lg-90">
                <img src="media/logos/logo-cxa-1.png" alt="image" />
              </div>
            </div>
            <!--end::User-->
            <!--begin::Name-->
            <div class="my-4">
              <a
                href="#"
                class="
                  text-dark
                  font-weight-bold
                  text-hover-primary
                  font-size-h4
                "
                >{{ item.name }}</a
              >
            </div>
            <!--end::Name-->

            <!--begin::Progress-->
            <div class="flex-row-fluid mb-7">
              <div class="d-flex align-items-center pt-2">
                <div class="progress progress-xs mt-2 mb-2 w-100">
                  <div
                    class="progress-bar bg-danger"
                    role="progressbar"
                    style="width: 0%"
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <span class="ml-3 font-weight-bolder">0%</span>
              </div>
            </div>
            <!--end::Progress-->

            <!--begin::Content-->
            <div class="d-flex flex-wrap justify-content-between mt-5">
              <div class="mr-5 d-flex flex-column mb-5">
                <span class="d-block font-weight-bold mb-5">Start Date</span>
                <span
                  class="
                    btn btn-light-danger btn-sm
                    font-weight-bold
                    btn-upper btn-text
                  "
                  >{{ item.regBeginTime.substring(0, 10) }}</span
                >
              </div>
              <div class="mr-5 d-flex flex-column mb-5">
                <span class="d-block font-weight-bold mb-5">Due Date</span>
                <span
                  class="
                    btn btn-light-danger btn-sm
                    font-weight-bold
                    btn-upper btn-text
                  "
                  >{{ item.regEndTime.substring(0, 10) }}</span
                >
              </div>
              <div class="d-flex flex-column mb-5">
                <span class="d-block font-weight-bold mb-5">Status</span>
                <span
                  class="btn btn-text btn-light-danger btn-sm font-weight-bold"
                  >{{ item.status }}</span
                >
              </div>
            </div>
            <!--end::Content-->

            <!--begin::Buttons-->
            <div class="mt-9">
              <a
                @click="goToProjectDetail(item.bid)"
                class="
                  btn btn-light-primary
                  font-weight-bolder
                  btn-sm
                  py-3
                  px-6
                  text-uppercase
                  btn-light-info
                "
                >view project</a
              >
            </div>
            <!--end::Buttons-->
          </div>
          <!--end::Body-->
        </div>
      </div>
    </div>
    <!--end::Column-->
    <div class="d-flex justify-content-between align-items-center flex-wrap">
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
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "project-list",
  mounted() {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["insuranceList"]),
  },
  components: {},
  methods: {
    goToProjectDetail(bid) {
      this.$router.push({ name: "plan-list" ,query:{bid}});
    },
  },
};
</script>
