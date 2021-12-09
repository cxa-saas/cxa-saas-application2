<template>
  <!--begin::Advance Table Widget 10-->
  <div class="card card-custom gutter-b">
    <!--begin::Header-->
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark"
          >Plan Employees</span
        >
        <span class="text-muted mt-3 font-weight-bold font-size-sm"
          >More than 400+ employees</span
        >
      </h3>
      <div class="card-toolbar">
        <a href="#" class="btn btn-info font-weight-bolder font-size-sm"
          >Export</a
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
              <th class="pl-0" style="min-width: 120px">Employee id</th>
              <th class="pl-0" style="min-width: 120px">Name</th>
              <th class="pl-0" style="min-width: 120px">ID Card</th>
              <th style="min-width: 110px">
                <span class="text-primary">Date</span>
                <span class="svg-icon svg-icon-sm svg-icon-primary">
                  <!--begin::Svg Icon | path:assets/media/svg/icons/Navigation/Down-2.svg-->
                  <inline-svg
                    src="media/svg/icons/Navigation/Down-2.svg"
                  ></inline-svg>
                  <!--end::Svg Icon-->
                </span>
              </th>
              <th style="min-width: 110px">Marital Status</th>
              <th style="min-width: 110px">Gender</th>
              <th style="min-width: 120px">Addition</th>
              <th style="min-width: 120px">Age</th>
              <th class="pr-0 text-right" style="min-width: 160px">Action</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="(item, i) in employees">
              <tr v-bind:key="i">
                <td class="pl-0 py-6">
                  <label class="checkbox checkbox-lg checkbox-single">
                    <input type="checkbox" :value="i" :checked="checked" />
                    <span></span>
                  </label>
                </td>
                <td>
                  <span
                    class="text-dark-75 font-weight-bolder d-block font-size-lg"
                    >{{ item.code }}</span
                  >
                  <!-- <span class="text-muted font-weight-bold">{{
                    item.country_desc
                  }}</span> -->
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
                    >{{ item.name }}</a
                  >
                </td>
                <td>
                  <span
                    class="text-dark-75 font-weight-bolder d-block font-size-lg"
                    >{{ item.certificateNo }}</span
                  >
                  <!-- <span class="text-muted font-weight-bold">{{
                    item.country_desc
                  }}</span> -->
                </td>

                <td>
                  <span
                    class="text-dark-75 font-weight-bolder d-block font-size-lg"
                    >{{ item.entryTime.substring(0, 10) }}</span
                  >
                  <!-- <span class="text-muted font-weight-bold">{{
                    item.company_desc
                  }}</span> -->
                </td>
                <td>
                  <span
                    class="text-primary font-weight-bolder d-block font-size-lg"
                    >{{ item.date }}</span
                  >
                  <!-- <span class="text-muted font-weight-bold">{{
                    item.date_desc
                  }}</span> -->
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
                    >{{ item.maritalStatus===3?'married':'unmarried' }}</a
                  >
                </td>
                    <!-- v-bind:class="`label-light-${item.class}`" -->

                <td>
                  <span
                    class="label label-lg label-inline"
                    >{{ item.sex==1?'male':'female' }}</span
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
                    >{{ item.orders }}</a
                  >
                </td>
                <!-- <td class="pl-0">
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
                </td> -->

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
    <!-- <div class="text-center" style="margin-left: 10px">
      <v-pagination
        v-model="employeesPageConfig.current"
        :length="employeesPageConfig.pages"
      ></v-pagination>
    </div>
    -->
  </div> 
  <!--end::Advance Table Widget 10-->
</template>

<script>
import { FETCH_INSPECTION_EMPLOYEE_LIST } from "@/core/services/store/project.module";

export default {
  name: "plan-employee-list",
  data() {
    return {
      employeesPageConfig: {
        current: 1,
        pages: 1,
      },
      checked: false,
      employees: [],
    };
  },
  async mounted() {
    const result = await this.$store.dispatch(FETCH_INSPECTION_EMPLOYEE_LIST, {
      enterpriseId: this.$store.state.enterprise.currentEnterpriseId,
      projectBid: this.$route.query.projectBid,
      planBid: this.$route.query.planBid,
    });
    this.employees = result;
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
