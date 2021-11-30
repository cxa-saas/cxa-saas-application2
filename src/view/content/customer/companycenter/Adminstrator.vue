<template>
  <div class="card card-custom card-stretch gutter-b">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark"
          >Platform Adminstrator</span
        >
      </h3>
      <div class="card-toolbar">
        <ul class="nav nav-pills nav-pills-sm nav-dark-75">
          <div>
            <b-button
              class="btn btn-info font-weight-bolder font-size-sm"
              v-b-modal.modal-scoped
              >NEW</b-button
            >

            <!-- <b-modal id="modal-scoped" size="lg">
              <template #modal-header="{}">
                <h5>Add New Department</h5>
              </template>
              <div class="form-group row">
                <label class="col-xl-3 col-lg-3 col-form-label text-right">
                  Name</label
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
                <b-button
                  size="sm"
                  variant="success"
                  @click="submitDepartment()"
                >
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
            </b-modal> -->
          </div>
        </ul>
      </div>
    </div>
    <!--end::Header-->
    <!--begin::Body-->
    <div class="card-body pt-2 pb-0">
      <!--begin::Table-->
      <div class="table-responsive">
        <table class="table table-borderless table-vertical-center">
          <thead>
            <tr>
              <th class="p-0" style="min-width: 150px">name</th>
              <th class="p-0" style="min-width: 150px">email</th>
              <th class="p-0" style="min-width: 140px">mobile</th>
              <th class="p-0" style="min-width: 120px">adminstrator type</th>
              <th class="p-0" style="min-width: 40px">is activited</th>
              <th class="p-0" style="min-width: 40px">action</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="(item, i) in this.currentEnterpriseAdministrators">
              <tr v-bind:key="i">
                <!-- <td class="pl-0 py-5">
                  <div class="symbol symbol-50 symbol-light mr-2">
                    <span class="symbol-label">
                      <img
                        :src="`${item.img}`"
                        class="h-50 align-self-center"
                        alt=""
                      />
                    </span>
                  </div>
                </td> -->

                <td class="pl-0 py-5">
                  <span class="text-muted font-weight-bold">{{
                    item.name
                  }}</span>
                </td>

                <td class="pl-0 py-5">
                  <span class="text-muted font-weight-bold">{{
                    item.email
                  }}</span>
                </td>

                <td class="pl-0 py-5">
                  <span class="text-muted font-weight-bold">{{
                    item.mobile
                  }}</span>
                </td>
                <td class="pl-0 py-5">
                  <span class="text-muted font-weight-bold">{{
                    item.adminstrator_type
                  }}</span>
                </td>
                <td class="pl-0 py-5">
                  <span class="text-muted font-weight-bold">{{
                    item.is_activited
                  }}</span>
                </td>

                <td class="pl-0 py-5">
                  <a href="#" class="btn btn-icon btn-light btn-sm">
                    <span class="svg-icon svg-icon-md svg-icon-success">
                      <!--begin::Svg Icon | path:assets/media/svg/icons/Navigation/Arrow-right.svg-->
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
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { FETCH_ENTERPRISE_ADMINISTRATOR } from "@/core/services/store/enterprise.module";

export default {
  name: "widget-12",
  data() {
    return {
      show: "day",
    };
  },
  computed: {
    ...mapGetters(["layoutConfig", "currentEnterpriseAdministrators"]),
  },
  async mounted() {
    const result = await this.$store.dispatch(
      FETCH_ENTERPRISE_ADMINISTRATOR,
      this.$store.state.enterprise.currentEnterpriseId
    );
    console.log(4567);
    console.log(result);
  },
};
</script>
