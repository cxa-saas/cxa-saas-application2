<template>
  <div
    class="
      card card-custom card-shadowless
      gutter-b
      card-stretch card-shadowless
      p-0
    "
  >
    <!--begin::Nav Tabs-->
    <ul
      class="
        dashboard-tabs
        nav nav-pills nav-danger
        row row-paddingless
        m-0
        p-0
        flex-column flex-sm-row
      "
      role="tablist"
    >
      <!--begin::Item-->
      <li
        class="nav-item d-flex col flex-grow-1 flex-shrink-0 mr-3 mb-3 mb-lg-0"
      >
        <a
          class="
            nav-link
            border
            py-10
            d-flex
            flex-grow-1
            rounded
            flex-column
            align-items-center
          "
          data-toggle="pill"
          :href="userCenterUrl"
        >
          <span class="nav-icon py-2 w-auto">
            <span class="svg-icon svg-icon-3x">
              <!--begin::Svg Icon | path:assets/media/svg/icons/Media/Equalizer.svg-->
              <inline-svg src="media/svg/icons/Media/Equalizer.svg" />
              <!--end::Svg Icon-->
            </span>
          </span>
          <span
            class="nav-text font-size-lg py-2 font-weight-bolder text-center"
            >Company Manage</span
          >
        </a>
      </li>
      <!--end::Item-->
      <!--begin::Item-->
      <li
        class="nav-item d-flex col flex-grow-1 flex-shrink-0 mr-3 mb-3 mb-lg-0"
      >
        <a
          class="
            nav-link
            border
            py-10
            d-flex
            flex-grow-1
            rounded
            flex-column
            align-items-center
          "
          data-toggle="pill"
          :href="createPointRechargeUrl"
        >
          <span class="nav-icon py-2 w-auto">
            <span class="svg-icon svg-icon-3x">
              <inline-svg src="media/svg/icons/Media/Movie-Lane2.svg" />
            </span>
          </span>
          <span
            class="nav-text font-size-lg py-2 font-weight-bolder text-center"
            >Points Recharge</span
          >
        </a>
      </li>
      <!--end::Item-->
      <!--begin::Item-->
      <li
        class="nav-item d-flex col flex-grow-1 flex-shrink-0 mr-3 mb-3 mb-lg-0"
      >
        <a
          class="
            nav-link
            border
            py-10
            d-flex
            flex-grow-1
            rounded
            flex-column
            align-items-center
          "
          data-toggle="pill"
          :href="createInsuranceProjectUrl"
        >
          <span class="nav-icon py-2 w-auto">
            <span class="svg-icon svg-icon-3x">
              <!--begin::Svg Icon | path:assets/media/svg/icons/Home/Library.svg-->
              <inline-svg src="media/svg/icons/Home/Library.svg" />
              <!--end::Svg Icon-->
            </span>
          </span>
          <span class="nav-text font-size-lg py-2 font-weight-bold text-center"
            >Group Insurance</span
          >
        </a>
      </li>
      <!--end::Item-->
      <!--begin::Item-->
      <li
        class="nav-item d-flex col flex-grow-1 flex-shrink-0 mr-3 mb-3 mb-lg-0"
      >
        <a
          class="
            nav-link
            border
            py-10
            d-flex
            flex-grow-1
            rounded
            flex-column
            align-items-center
          "
          data-toggle="pill"
          :href="createInspectionProjectUrl"
        >
          <span class="nav-icon py-2 w-auto">
            <span class="svg-icon svg-icon-3x">
              <!--begin::Svg Icon | path:assets/media/svg/icons/Layout/Layout-4-blocks.svg-->
              <inline-svg src="media/svg/icons/Layout/Layout-4-blocks.svg" />
              <!--end::Svg Icon-->
            </span>
          </span>
          <span
            class="nav-text font-size-lg py-2 font-weight-bolder text-center"
            >Group Inspection</span
          >
        </a>
      </li>
      <!--end::Item-->

      <!--begin::Item-->
      <li class="nav-item d-flex col flex-grow-1 flex-shrink-0 mr-3">
        <a
          class="
            nav-link
            border
            py-10
            d-flex
            flex-grow-1
            rounded
            flex-column
            align-items-center
          "
          data-toggle="pill"
          :href="projectCenterUrl"
        >
          <span class="nav-icon py-2 w-auto">
            <span class="svg-icon svg-icon-3x">
              <inline-svg src="media/svg/icons/General/Shield-check.svg" />
            </span>
          </span>
          <span
            class="nav-text font-size-lg py-2 font-weight-bolder text-center"
            >Project Center</span
          >
        </a>
      </li>
      <!--end::Item-->
      <!--begin::Item-->
      <!-- <li
        class="nav-item d-flex col flex-grow-1 flex-shrink-0 mr-0 mb-3 mb-lg-0"
      >
        <a
          class="
            nav-link
            border
            py-10
            d-flex
            flex-grow-1
            rounded
            flex-column
            align-items-center
          "
          data-toggle="pill"
          :href="employeeOrderUrl"
        >
          <span class="nav-icon py-2 w-auto">
            <span class="svg-icon svg-icon-3x">
              <inline-svg src="media/svg/icons/Communication/Group.svg" />
            </span>
          </span>
          <span
            class="nav-text font-size-lg py-2 font-weight-bolder text-center"
            >Employee Order</span
          >
        </a>
      </li> -->
      <!--end::Item-->
    </ul>
    <!--end::Nav Tabs-->
    <!--begin::Nav Content-->
    <div class="tab-content m-0 p-0">
      <div
        class="tab-pane active"
        id="forms_widget_tab_1"
        role="tabpanel"
      ></div>
      <div class="tab-pane" id="forms_widget_tab_2" role="tabpanel"></div>
      <div class="tab-pane" id="forms_widget_tab_3" role="tabpanel"></div>
      <div class="tab-pane" id="forms_widget_tab_4" role="tabpanel"></div>
      <div class="tab-pane" id="forms_widget_tab_6" role="tabpanel"></div>
    </div>
    <!--end::Nav Content-->
  </div>
</template>

<script>
export default {
  name: "widget-1",
  data() {
    return {
      createInsuranceProjectUrl: `${window.location.origin}#/customer/create-insurance`,
      createInspectionProjectUrl: `${window.location.origin}#/customer/create-inspection`,
      createPointRechargeUrl: `${window.location.origin}#/customer/point-recharge`,
      userCenterUrl: `${window.location.origin}#/customer/employee-list`,
      projectCenterUrl: `${window.location.origin}#/customer/project-center`,
      employeeOrderUrl: `${window.location.origin}#/customer/order-center`,

      list: [
        {
          title: "Top Authors",
          desc: "Mark, Rowling, Esther",
          profit: "+82$",
          img: "media/svg/misc/006-plurk.svg",
        },
        {
          title: "Popular Authors",
          desc: "Randy, Steve, Mike",
          profit: "+280$",
          img: "media/svg/misc/015-telegram.svg",
        },
        {
          title: "New Users",
          desc: "John, Pat, Jimmy",
          profit: "+4500$",
          img: "media/svg/misc/003-puzzle.svg",
        },
        {
          title: "Active Customers",
          desc: "Sandra, Tim, Louis",
          profit: "+4500$",
          img: "media/svg/misc/005-bebo.svg",
        },
        {
          title: "Bestseller Theme",
          desc: "Sandra, Tim, Louis",
          profit: "+4500$",
          img: "media/svg/misc/014-kickstarter.svg",
        },
      ],
    };
  },
};
</script>
