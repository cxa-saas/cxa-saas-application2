<template>
  <div class="card card-custom card-stretch gutter-b card-shadowless bg-light">
    <!--begin::Header-->
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark">
          Department List
        </span>
        <span class="text-muted mt-3 font-weight-bold font-size-sm">
          2021 Annual project schedule
        </span>
      </h3>
      <div class="card-toolbar">
        <a href="#" class="btn btn-success font-weight-bolder font-size-sm">
          <span class="svg-icon svg-icon-md svg-icon-white">
            <!--begin::Svg Icon | path:assets/media/svg/icons/Communication/Add-user.svg-->
            <inline-svg src="media/svg/icons/Communication/Add-user.svg" />
            <!--end::Svg Icon--> </span
          >Add New Project</a
        >
      </div>
    </div>
    <!--end::Header-->
    <!--begin::Body-->
    <div class="card-body py-0">
      <!--begin::Table-->
      <div class="table-responsive">
        <table
          class="table table-head-custom table-vertical-center"
          id="kt_advance_table_widget_1"
        >
          <thead>
            <tr class="text-left">
              <th class="pl-0" style="width: 20px">
                <label class="checkbox checkbox-lg checkbox-single">
                  <input
                    type="checkbox"
                    @input="setCheck($event.target.checked)"
                  />
                  <span></span>
                </label>
              </th>
              <th class="pr-0" style="width: 50px">Project</th>
              <th style="min-width: 200px"></th>
              <th style="min-width: 150px">status</th>
              <th style="min-width: 150px">progress</th>
              <th class="pr-0 text-right" style="min-width: 150px">action</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="(item, i) in list">
              <tr v-bind:key="i">
                <td class="pl-0">
                  <label class="checkbox checkbox-lg checkbox-single">
                    <input type="checkbox" value="1" :checked="checked" />
                    <span></span>
                  </label>
                </td>
                <td class="pr-0">
                  <div class="symbol symbol-50 symbol-light mt-1">
                    <span class="symbol-label">
                      <img
                        :src="item.text0"
                        class="h-75 align-self-end"
                        alt=""
                      />
                    </span>
                  </div>
                </td>
                <td class="pl-0">
                  <a
                    href="#"
                    class="
                      text-dark-75
                      font-weight-bolder
                      text-hover-primary
                      mb-1
                      font-size-lg
                    "
                    >{{ item.text1 }}</a
                  >
                  <span
                    class="text-muted font-weight-bold text-muted d-block"
                    >{{ item.text2 }}</span
                  >
                </td>
                <td>
                  <span
                    class="label label-lg label-inline"
                    v-bind:class="`label-light-${item.text3}`"
                  >
                    {{ item.text4 }}
                  </span>
                  <!-- <span
                    class="text-dark-75 font-weight-bolder d-block font-size-lg"
                    >{{ item.text3 }}</span
                  >
                  <span class="text-muted font-weight-bold">{{
                    item.text4
                  }}</span> -->
                </td>
                <td>
                  <div class="d-flex flex-column w-100 mr-2">
                    <div
                      class="
                        d-flex
                        align-items-center
                        justify-content-between
                        mb-2
                      "
                    >
                      <span
                        class="text-muted mr-2 font-size-sm font-weight-bold"
                        >{{ item.text5 }}</span
                      >
                      <span class="text-muted font-size-sm font-weight-bold"
                        >Progress</span
                      >
                    </div>
                    <div class="progress progress-xs w-100">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        :style="{ width: item.text5 }"
                        v-bind:class="`bg-${item.text6}`"
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </td>
                <td class="pr-0 text-right">
                  <a
                    href="#"
                    class="btn btn-icon btn-light btn-hover-primary btn-sm"
                  >
                    <span class="svg-icon svg-icon-md svg-icon-primary">
                      <!--begin::Svg Icon | path:assets/media/svg/icons/General/Settings-1.svg-->
                      <inline-svg
                        src="media/svg/icons/General/Settings-1.svg"
                      />
                      <!--end::Svg Icon-->
                    </span>
                  </a>
                  <a
                    href="#"
                    class="btn btn-icon btn-light btn-hover-primary btn-sm mx-3"
                  >
                    <span class="svg-icon svg-icon-md svg-icon-primary">
                      <!--begin::Svg Icon | path:assets/media/svg/icons/Communication/Write.svg-->
                      <inline-svg
                        src="media/svg/icons/Communication/Write.svg"
                      />
                      <!--end::Svg Icon-->
                    </span>
                  </a>
                  <a
                    href="#"
                    class="btn btn-icon btn-light btn-hover-primary btn-sm"
                  >
                    <span class="svg-icon svg-icon-md svg-icon-primary">
                      <!--begin::Svg Icon | path:assets/media/svg/icons/General/Trash.svg-->
                      <inline-svg src="media/svg/icons/General/Trash.svg" />
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
    <!--end::Body-->
  </div>
</template>

<script>
export default {
  name: "widget-8",
  data() {
    return {
      list: [
        {
          text0: "media/logos/logo-cxa-1.png",
          text1: "Annual Inspection",
          text2: "CXA 2021 Annual Inspection",
          text3: "warning",
          text4: "In Progress",
          text5: "65%",
          text6: "danger",
        },
        {
          text0: "media/logos/logo-cxa-1.png",
          text1: "Annual Insurance",
          text2: "CXA 2021 Annual Insurance",
          text3: "success",
          text4: "Success",
          text5: "100%",
          text6: "success",
        },
        {
          text0: "media/logos/logo-cxa-1.png",
          text1: "Annual Benefits",
          text2: "CXA 2021 Annual Benefits",
          text3: "warning",
          text4: "In Progress",
          text5: "47%",
          text6: "primary",
        },
        {
          text0: "media/logos/logo-cxa-1.png",
          text1: "Annual Inspection",
          text2: "CXA 2019 Annual Inspection",
          text3: "danger",
          text4: "Finish",
          text5: "100%",
          text6: "danger",
        },
      ],
      checked: false,
    };
  },
  components: {},
  methods: {
    setCheck(checked) {
      this.checked = checked;
    },
  },
};
</script>
