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
        <div>
          <b-button
            class="btn btn-info font-weight-bolder font-size-sm"
            v-b-modal.modal-scoped
            >NEW</b-button
          >

          <b-modal id="modal-scoped" size="lg">
            <template #modal-header="{}">
              <!-- Emulate built in modal header close button action -->
              <h5>Add New Department</h5>
            </template>
            <div class="form-group row">
              <label class="col-xl-3 col-lg-3 col-form-label text-right"
                > Name</label
              >
              <div class="col-lg-9 col-xl-6">
                <div class="input-group input-group-lg input-group-solid">
                  <input
                    type="text"
                    class="form-control form-control-lg form-control-solid"
                    placeholder="Name"
                    v-model="form.name"
                  />
                </div>
              </div>
            </div>
            <template #modal-footer="{}">
              <b-button size="sm" variant="success" @click="submitDepartment()">
                OK
              </b-button>
              <b-button
                size="sm"
                variant="danger"
                @click="cancelSubmitDepartment()"
              >
                Cancel
              </b-button>
            </template>
          </b-modal>
        </div>
        <!-- <a href="#" class="btn btn-info font-weight-bolder font-size-sm">New</a> -->
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
              <th class="pr-0 text-right" style="min-width: 160px">Action</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="(item, i) in this.currentEnterpriseDepartments">
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
                    >{{ item.nodeId }}</a
                  >
                </td>

                <td>
                  <span
                    class="text-dark-75 font-weight-bolder d-block font-size-lg"
                    >{{ item.name }}</span
                  >
                </td>
                <td class="pr-0 text-right">
                  <a
                    href="#"
                    class="btn btn-icon btn-light btn-hover-primary btn-sm"
                    @click="deleteDepartment(item.nodeId)"
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
    </div> -->
  </div>
  <!--end::Advance Table Widget 10-->
</template>

<script>
import {
  DELETE_ENTERPRISE_DEPARTMENT,
  ADD_ENTERPRISE_DEPARTMENT,
} from "@/core/services/store/enterprise.module";
import { mapGetters } from "vuex";

export default {
  name: "widget-2",
  data() {
    return {
      form: {
        name: "",
      },
      employeesPageConfig: {
        current: 1,
        pages: 1,
      },
      checked: false,
    };
  },
  computed: {
    ...mapGetters(["currentEnterpriseDepartments"]),
  },
  mounted() {},
  components: {},
  methods: {
    setCheck(check) {
      if (check) {
        this.checked = check;
      } else {
        this.checked = false;
      }
    },
    deleteDepartment(nodeId) {
      this.$store.dispatch(DELETE_ENTERPRISE_DEPARTMENT, {
        enterpriseId: this.$store.state.enterprise.currentEnterpriseId,
        nodeId,
      });
    },
    addDepartment(name) {
      this.$store.dispatch(ADD_ENTERPRISE_DEPARTMENT, {
        enterpriseId: this.$store.state.enterprise.currentEnterpriseId,
        name,
      });
    },
    submitDepartment() {
      this.$store.dispatch(ADD_ENTERPRISE_DEPARTMENT, {
        enterpriseId: this.$store.state.enterprise.currentEnterpriseId,
        name: this.form.name,
      });
      this.$bvModal.hide("modal-scoped");
      this.form.name = "";
    },
    cancelSubmitDepartment() {
      this.form.name = "";
      this.$bvModal.hide("modal-scoped");
    },
  },
};
</script>
