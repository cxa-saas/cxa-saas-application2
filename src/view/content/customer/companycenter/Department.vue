<template>
  <!--begin::Advance Table Widget 10-->
  <div class="card card-custom gutter-b">
    <!--begin::Header-->
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark"
          >Department List</span
        >
        <!-- <span class="text-muted mt-3 font-weight-bold font-size-sm"
          >More than 400+ employees</span
        > -->
      </h3>
      <div class="card-toolbar">
        <a href="#" class="btn btn-info font-weight-bolder font-size-sm"
          >New</a
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
          id="kt_advance_table_widget_4"
        >
          <thead>
            <tr class="text-left">
              <th class="pl-0" style="width: 30px">
                <label class="checkbox checkbox-lg checkbox-single mr-2">
                  <input
                    type="checkbox"
                    @input="setCheck($event.target.checked)"
                  />
                  <span></span>
                </label>
              </th>
              <th class="pl-0" style="min-width: 120px">Department id</th>
              <th class="pl-0" style="min-width: 120px">Name</th>
              <th class="pl-0" style="min-width: 120px">ID Card</th>
              <th style="min-width: 110px">Status</th>
              <th class="pr-0 text-right" style="min-width: 160px">Action</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="(item, i) in list">
              <tr v-bind:key="i">
                <td class="pl-0 py-6">
                  <label class="checkbox checkbox-lg checkbox-single">
                    <input type="checkbox" :value="i" :checked="checked" />
                    <span></span>
                  </label>
                </td>
                <td class="pl-0">
                  <a
                    href="#"
                    class="
                      text-dark-75
                      font-weight-bolder
                      text-hover-primary
                      font-size-lg
                    "
                    >{{ item.order_id }}</a
                  >
                </td>
                <td>
                  <span
                    class="text-dark-75 font-weight-bolder d-block font-size-lg"
                    >{{ item.country }}</span
                  >
                  <span class="text-muted font-weight-bold">{{
                    item.country_desc
                  }}</span>
                </td>

                <td>
                  <span
                    class="text-dark-75 font-weight-bolder d-block font-size-lg"
                    >{{ item.company }}</span
                  >
                  <span class="text-muted font-weight-bold">{{
                    item.company_desc
                  }}</span>
                </td>
                <td>
                  <span
                    class="text-primary font-weight-bolder d-block font-size-lg"
                    >{{ item.date }}</span
                  >
                  <span class="text-muted font-weight-bold">{{
                    item.date_desc
                  }}</span>
                </td>

                <td class="pl-0">
                  <a
                    href="#"
                    class="
                      text-dark-75
                      font-weight-bolder
                      text-hover-primary
                      font-size-lg
                    "
                    >{{ item.job_grade }}</a
                  >
                </td>

                <td>
                  <span
                    class="label label-lg label-inline"
                    v-bind:class="`label-light-${item.class}`"
                    >{{ item.status }}</span
                  >
                </td>
                <td class="pl-0">
                  <a
                    href="#"
                    class="
                      text-dark-75
                      font-weight-bolder
                      text-hover-primary
                      font-size-lg
                    "
                    >{{ item.additional_group }}</a
                  >
                </td>
                <td class="pl-0">
                  <a
                    href="#"
                    class="
                      text-dark-75
                      font-weight-bolder
                      text-hover-primary
                      font-size-lg
                    "
                    >{{ item.birthday }}</a
                  >
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
                      ></inline-svg>
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
                      ></inline-svg>
                      <!--end::Svg Icon-->
                    </span>
                  </a>
                  <a
                    href="#"
                    class="btn btn-icon btn-light btn-hover-primary btn-sm"
                  >
                    <span class="svg-icon svg-icon-md svg-icon-primary">
                      <!--begin::Svg Icon | path:assets/media/svg/icons/General/Trash.svg-->
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
    <!--end::Body-->
    <div class="text-center" style="margin-left: 10px">
      <v-pagination
        v-model="employeesPageConfig.current"
        :length="employeesPageConfig.pages"
      ></v-pagination>
    </div>
  </div>
  <!--end::Advance Table Widget 10-->
</template>

<script>
export default {
  name: "widget-2",
  data() {
    return {
      employeesPageConfig: {
        current: 1,
        pages: 1,
      },
      checked: false,
      list: [
        {
          order_id: "56037-XDER",
          country: "Chovy Qiu",
          country_desc: "Male",
          date: "05/28/2020",
          date_desc: "Paid",
          company: "320923199607136035",
          company_desc: "ID Card",
          class: "primary",
          birthday: "1996-07-13",
          job_grade: "Developer",
          status: "Approved",
          additional_group: "血常规",
        },
        {
          order_id: "05822-FXSP",
          country: "Cain Liang",
          country_desc: "Male",
          birthday: "1996-07-13",

          date: "02/04/2020",
          date_desc: "Rejected",
          company: "320923199607136035",
          company_desc: "ID Card",
          class: "warning",
          status: "In Progress",
          job_grade: "Developer",
          additional_group: "血常规",
        },
        {
          order_id: "00347-BCLQ",
          country: "Alvin Li",
          country_desc: "Male",
          date: "23/12/2020",
          date_desc: "Paid",
          company: "320923199607136035",
          birthday: "1996-07-13",

          company_desc: "ID Card",
          class: "success",
          status: "Success",
          job_grade: "Developer",
          additional_group: "血常规",
        },
        {
          order_id: "4472-QREX",
          country: "Wind",
          country_desc: "Male",
          date: "17/09/2021",
          date_desc: "Pending",
          company: "320923199607136035",
          birthday: "1996-07-13",

          company_desc: "ID Card",
          class: "danger",
          status: "Danger",
          job_grade: "Developer",
          additional_group: "血常规",
        },
      ],
    };
  },
  components: {},
  methods: {
    setCheck(check) {
      if (check) {
        this.checked = check;
      } else {
        this.checked = false;
      }
    },
  },
};
</script>
