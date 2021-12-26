<template>
  <div class="card card-custom">
    <div class="card-body p-0">
      <!--begin: Wizard-->
      <div
        class="wizard wizard-1"
        id="kt_wizard_v1"
        data-wizard-state="step-first"
        data-wizard-clickable="true"
      >
        <!--begin: Wizard Nav-->
        <div class="wizard-nav border-bottom">
          <div class="wizard-steps p-8 p-lg-10">
            <div
              class="wizard-step"
              data-wizard-type="step"
              data-wizard-state="current"
            >
              <div class="wizard-label">
                <i class="wizard-icon flaticon-bus-stop"></i>
                <h3 class="wizard-title">1. Create Project</h3>
              </div>
              <i class="wizard-arrow flaticon2-next"></i>
            </div>
            <div class="wizard-step" data-wizard-type="step">
              <div class="wizard-label">
                <i class="wizard-icon flaticon-list"></i>
                <h3 class="wizard-title">2. Choose Plans</h3>
              </div>
              <i class="wizard-arrow flaticon2-next"></i>
            </div>
            <div class="wizard-step" data-wizard-type="step">
              <div class="wizard-label">
                <i class="wizard-icon flaticon-responsive"></i>
                <h3 class="wizard-title">3. Choose Employee</h3>
              </div>
              <i class="wizard-arrow flaticon2-next"></i>
            </div>

            <div class="wizard-step" data-wizard-type="step">
              <div class="wizard-label">
                <i class="wizard-icon flaticon-globe"></i>
                <h3 class="wizard-title">4. Review and Submit</h3>
              </div>
              <i class="wizard-arrow last flaticon2-next"></i>
            </div>
          </div>
        </div>
        <!--end: Wizard Nav-->

        <!--begin: Wizard Body-->
        <div class="row justify-content-center my-10 px-8 my-lg-15 px-lg-10">
          <div class="col-xl-12">
            <!--begin: Wizard Form-->
            <form class="form" id="kt_form">
              <!--begin: Wizard Step 1-->
              <div
                class="pb-5"
                data-wizard-type="step-content"
                data-wizard-state="current"
              >
                <h3 class="mb-10 font-weight-bold text-dark">
                  Choose an insurance plan
                </h3>
                <div class="form-group">
                  <label>Project Name</label>
                  <input
                    type="text"
                    class="form-control form-control-solid form-control-lg"
                    name="projectName"
                    placeholder="Project Name"
                    v-model="form.name"
                  />

                  <span class="form-text text-muted"
                    >Please enter project name.</span
                  >
                </div>
                <div class="row">
                  <div class="col-xl-6">
                    <div class="form-group">
                      <v-dialog
                        v-model="dialog.effectTimeDialog"
                        persistent
                        width="290px"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <label>Effective Time</label>
                          <input
                            v-model="form.effectTime"
                            class="
                              form-control form-control-lg form-control-solid
                            "
                            label="Picker in dialog"
                            prepend-icon="mdi-calendar"
                            v-bind="attrs"
                            v-on="on"
                          />
                        </template>
                        <v-date-picker v-model="form.effectTime" scrollable>
                          <v-spacer></v-spacer>

                          <v-btn
                            text
                            color="primary"
                            @click="dialog.effectTimeDialog = false"
                          >
                            OK
                          </v-btn>
                        </v-date-picker>
                      </v-dialog>
                      <span class="form-text text-muted"
                        >Please choose effective Time.</span
                      >
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="form-group">
                      <v-dialog
                        v-model="dialog.expireTimeDialog"
                        persistent
                        width="290px"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <label>Expire Date</label>
                          <input
                            v-model="form.expireTime"
                            class="
                              form-control form-control-lg form-control-solid
                            "
                            label="Picker in dialog"
                            prepend-icon="mdi-calendar"
                            v-bind="attrs"
                            v-on="on"
                          />
                        </template>
                        <v-date-picker v-model="form.expireTime" scrollable>
                          <v-spacer></v-spacer>

                          <v-btn
                            text
                            color="primary"
                            @click="dialog.expireTimeDialog = false"
                          >
                            OK
                          </v-btn>
                        </v-date-picker>
                      </v-dialog>
                      <span class="form-text text-muted"
                        >Please enter expire date.</span
                      >
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xl-6">
                    <div class="form-group">
                      <v-dialog
                        v-model="dialog.regBeginTimeDialog"
                        persistent
                        width="290px"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <label>Register Begin Date</label>
                          <input
                            v-model="form.regBeginTime"
                            class="
                              form-control form-control-lg form-control-solid
                            "
                            label="Picker in dialog"
                            prepend-icon="mdi-calendar"
                            v-bind="attrs"
                            v-on="on"
                          />
                        </template>
                        <v-date-picker v-model="form.regBeginTime" scrollable>
                          <v-spacer></v-spacer>

                          <v-btn
                            text
                            color="primary"
                            @click="dialog.regBeginTimeDialog = false"
                          >
                            OK
                          </v-btn>
                        </v-date-picker>
                      </v-dialog>
                      <span class="form-text text-muted"
                        >Please select register begin date.</span
                      >
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="form-group">
                      <v-dialog
                        v-model="dialog.regEndTimeDialog"
                        persistent
                        width="290px"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <label>Register End Date</label>
                          <input
                            v-model="form.regEndTime"
                            class="
                              form-control form-control-lg form-control-solid
                            "
                            label="Picker in dialog"
                            prepend-icon="mdi-calendar"
                            v-bind="attrs"
                            v-on="on"
                          />
                        </template>
                        <v-date-picker v-model="form.regEndTime" scrollable>
                          <v-spacer></v-spacer>

                          <v-btn
                            text
                            color="primary"
                            @click="dialog.regEndTimeDialog = false"
                          >
                            OK
                          </v-btn>
                        </v-date-picker>
                      </v-dialog>
                      <span class="form-text text-muted"
                        >Please select register end date.</span
                      >
                    </div>
                  </div>
                </div>
              </div>
              <!--end: Wizard Step 1-->

              <!--begin: Wizard Step 2-->
              <div class="pb-5" data-wizard-type="step-content">
                <h4 class="mb-10 font-weight-bold text-dark">
                  Choose Project Plans
                </h4>

                <b-container>
                  <b-row>
                    <b-col
                      v-for="item in insuranceTemplatePlan.plans"
                      :key="item.bid"
                    >
                      <b-card
                        :title="item.nameAlias"
                        img-src="https://picsum.photos/600/300/?image=25"
                        img-alt="Image"
                        img-top
                        tag="article"
                        class="mb-2"
                      >
                        <div
                          v-for="o in item.options"
                          :key="o.nameAlias"
                          class="row"
                        >
                          <div class="col">{{ o.nameAlias }}</div>
                          <div class="col">{{ o.price }}</div>
                        </div>
                        <b-row>
                          <b-col sm>
                            <b-button href="#" variant="primary"
                              >Detail</b-button
                            >
                          </b-col>
                          <b-col>
                            <b-form-checkbox @change="choosePlan(item.bid)">
                              choose
                            </b-form-checkbox>
                          </b-col>
                        </b-row>
                      </b-card>
                    </b-col>
                  </b-row>
                </b-container>
              </div>
              <!--end: Wizard Step 2-->

              <!--begin: Wizard Step 3-->
              <div class="pb-5" data-wizard-type="step-content">
                <h4 class="mb-10 font-weight-bold text-dark">
                  Select your employees
                </h4>
                <v-data-table
                  v-model="selected"
                  :headers="headers"
                  :items="desserts"
                  item-key="name"
                  show-select
                  class="elevation-1"
                  @item-selected="chooseEmployee"
                >
                </v-data-table>
              </div>
              <!--end: Wizard Step 3-->

              <!--begin: Wizard Step 5-->
              <div class="pb-5" data-wizard-type="step-content">
                <h4 class="mb-10 font-weight-bold text-dark">
                  Review your Details and Submit
                </h4>
                <div class="border-bottom mb-5 pb-5">
                  <div class="font-weight-bold mb-3">Current Address:</div>
                  <div class="line-height-md">
                    Address Line 1
                    <br />
                    Address Line 2 <br />
                    Melbourne 3000, VIC, Australia
                  </div>
                </div>
                <div class="border-bottom mb-5 pb-5">
                  <div class="font-weight-bold mb-3">Delivery Details:</div>
                  <div class="line-height-md">
                    Package: Complete Workstation (Monitor, Computer, Keyboard &
                    Mouse)
                    <br />
                    Weight: 25kg <br />
                    Dimensions: 110cm (w) x 90cm (h) x 150cm (L)
                  </div>
                </div>
                <div class="border-bottom mb-5 pb-5">
                  <div class="font-weight-bold mb-3">
                    Delivery Service Type:
                  </div>
                  <div class="line-height-md">
                    Overnight Delivery with Regular Packaging
                    <br />
                    Preferred Morning (8:00AM - 11:00AM) Delivery
                  </div>
                </div>
                <div class="mb-5">
                  <div class="font-weight-bold mb-3">Delivery Address:</div>
                  <div class="line-height-md">
                    Address Line 1
                    <br />
                    Address Line 2 <br />
                    Preston 3072, VIC, Australia
                  </div>
                </div>
              </div>
              <!--end: Wizard Step 5-->

              <!--begin: Wizard Actions -->
              <div class="d-flex justify-content-between border-top pt-10">
                <div class="mr-2">
                  <button
                    class="
                      btn btn-light-primary
                      font-weight-bold
                      text-uppercase
                      px-9
                      py-4
                    "
                    data-wizard-type="action-prev"
                  >
                    Previous
                  </button>
                </div>
                <div>
                  <button
                    v-on:click="submit"
                    class="
                      btn btn-success
                      font-weight-bold
                      text-uppercase
                      px-9
                      py-4
                    "
                    data-wizard-type="action-submit"
                  >
                    Submit
                  </button>
                  <button
                    class="
                      btn btn-primary
                      font-weight-bold
                      text-uppercase
                      px-9
                      py-4
                    "
                    data-wizard-type="action-next"
                  >
                    Next Step
                  </button>
                </div>
              </div>
              <!--end: Wizard Actions -->
            </form>
            <!--end: Wizard Form-->
          </div>
        </div>
        <!--end: Wizard Body-->
      </div>
    </div>
    <!--end: Wizard-->
  </div>
</template>

<style lang="scss">
@import "@/assets/sass/pages/wizard/wizard-1.scss";
</style>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import KTUtil from "@/assets/js/components/util";
import KTWizard from "@/assets/js/components/wizard";
import Swal from "sweetalert2";
import {
  FETCH_INSURANCE_TEMPLATE,
  CREATE_INSURANCE,
} from "@/core/services/store/project.module";
import { FETCH_EMPLOYEE_LIST } from "@/core/services/store/employee.module";
import { mapGetters } from "vuex";
import moment from "moment";
import * as _ from "lodash";
export default {
  name: "Wizard-1",
  data() {
    return {
      selected: [],
      headers: [
        {
          text: "Name",
          align: "left",
          sortable: false,
          value: "name",
        },
        { text: "Employee ID", value: "eid" },
        { text: "Certificate Number", value: "certificateNo" },
        { text: "Certificate Type", value: "certificateType" },
        { text: "Mobile", value: "mobile" },
        { text: "Email", value: "email" },
      ],
      desserts: [],

      dialog: {
        effectTimeDialog: false,
        expireTimeDialog: false,
        regBeginTimeDialog: false,
        regEndTimeDialog: false,
      },
      form: {
        enterpriseId: 19,
        name: "",
        effectTime: "",
        expireTime: "",
        regBeginTime: "",
        regEndTime: "",
        employeeIds: [],
        planBids: [],
      },
    };
  },
  computed: {
    ...mapGetters(["currentEnterpriseInfo", "insuranceTemplatePlan"]),
  },
  async mounted() {
    await this.$store.dispatch(
      FETCH_INSURANCE_TEMPLATE,
      this.$store.state.enterprise.currentEnterpriseId
    );
    await this.$store.dispatch(FETCH_EMPLOYEE_LIST, {
      enterpriseId: this.$store.state.enterprise.currentEnterpriseId,
    });
    console.log(990);
    console.log(this.$store.state.employee.employees);
    this.desserts = this.$store.state.employee.employees;
    this.form.name = this.insuranceTemplatePlan.name;
    this.form.effectTime = moment(this.insuranceTemplatePlan.effectTime).format(
      "yyyy-MM-DD"
    );
    this.form.expireTime = moment(this.insuranceTemplatePlan.expireTime).format(
      "yyyy-MM-DD"
    );
    this.form.regBeginTime = moment(
      this.insuranceTemplatePlan.regBeginTime
    ).format("yyyy-MM-DD");
    this.form.regEndTime = moment(this.insuranceTemplatePlan.regEndTime).format(
      "yyyy-MM-DD"
    );
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Wizard" },
      { title: "Wizard-1" },
    ]);

    // Initialize form wizard
    const wizard = new KTWizard("kt_wizard_v1", {
      startStep: 1, // initial active step number
      clickableSteps: true, // allow step clicking
    });

    // Validation before going to next page
    wizard.on("beforeNext", function (/*wizardObj*/) {
      // validate the form and use below function to stop the wizard's step
      // wizardObj.stop();
    });

    // Change event
    wizard.on("change", function (/*wizardObj*/) {
      setTimeout(() => {
        KTUtil.scrollTop();
      }, 500);
    });
  },
  methods: {
    submit: async function (e) {
      e.preventDefault();
      this.form.enterpriseId = this.$store.state.enterprise.currentEnterpriseId;
      this.form.regBeginTime = moment(this.form.regBeginTime).format(
        "yyyy-MM-DD HH:mm:ss"
      );
      this.form.regEndTime = moment(this.form.regEndTime).format(
        "yyyy-MM-DD HH:mm:ss"
      );
      this.form.effectTime = moment(this.form.effectTime).format(
        "yyyy-MM-DD HH:mm:ss"
      );
      this.form.expireTime = moment(this.form.expireTime).format(
        "yyyy-MM-DD HH:mm:ss"
      );
      await this.$store.dispatch(CREATE_INSURANCE, this.form);
      Swal.fire({
        title: "",
        text: "The project has been successfully submitted!",
        icon: "success",
        confirmButtonClass: "btn btn-secondary",
      });
    },
    choosePlan: function (value) {
      if (_.indexOf(this.form.planBids, value) == -1) {
        this.form.planBids.push(value);
      } else {
        this.form.planBids = _.without(this.form.planBids, value);
      }
    },
    chooseEmployee: function (payload) {

      if (_.indexOf(this.form.employeeIds, payload.item.eid) == -1 && payload.value == true) {
        this.form.employeeIds.push(payload.item.eid);
      } else {
        this.form.employeeIds = _.without(this.form.employeeIds, payload.item.eid);
      }
      console.log(7881);
      console.log(this.form.employeeIds);
    },
  },
};
</script>
