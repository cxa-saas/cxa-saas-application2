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
                  Choose an inspection plan
                </h3>
                <div class="form-group">
                  <label>Project Name</label>
                  <input
                    type="text"
                    class="form-control form-control-solid form-control-lg"
                    name="projectName"
                    placeholder="Project Name"
                    v-model="form.nameI18n.en"
                  />

                  <span class="form-text text-muted"
                    >Please enter project name.</span
                  >
                </div>
                <div class="row">
                  <div class="col-xl-6">
                    <div class="form-group">
                      <v-dialog
                        v-model="dialog.bookBeginDateDialog"
                        persistent
                        width="290px"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <label>Book Begin Date</label>
                          <input
                            v-model="form.bookBeginDate"
                            class="
                              form-control form-control-lg form-control-solid
                            "
                            label="Picker in dialog"
                            prepend-icon="mdi-calendar"
                            v-bind="attrs"
                            v-on="on"
                          />
                        </template>
                        <v-date-picker v-model="form.bookBeginDate" scrollable>
                          <v-spacer></v-spacer>

                          <v-btn
                            text
                            color="primary"
                            @click="dialog.bookBeginDateDialog = false"
                          >
                            OK
                          </v-btn>
                        </v-date-picker>
                      </v-dialog>
                      <span class="form-text text-muted"
                        >Please choose book begin date.</span
                      >
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="form-group">
                      <v-dialog
                        v-model="dialog.bookEndDateDialog"
                        persistent
                        width="290px"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <label>Book End Date</label>
                          <input
                            v-model="form.bookEndDate"
                            class="
                              form-control form-control-lg form-control-solid
                            "
                            label="Picker in dialog"
                            prepend-icon="mdi-calendar"
                            v-bind="attrs"
                            v-on="on"
                          />
                        </template>
                        <v-date-picker v-model="form.bookEndDate" scrollable>
                          <v-spacer></v-spacer>

                          <v-btn
                            text
                            color="primary"
                            @click="dialog.bookEndDateDialog = false"
                          >
                            OK
                          </v-btn>
                        </v-date-picker>
                      </v-dialog>
                      <span class="form-text text-muted"
                        >Please enter book end date.</span
                      >
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xl-6">
                    <div class="form-group">
                      <v-dialog
                        v-model="dialog.healthBeginDateDialog"
                        persistent
                        width="290px"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <label>Register Begin Date</label>
                          <input
                            v-model="form.healthBeginDate"
                            class="
                              form-control form-control-lg form-control-solid
                            "
                            label="Picker in dialog"
                            prepend-icon="mdi-calendar"
                            v-bind="attrs"
                            v-on="on"
                          />
                        </template>
                        <v-date-picker
                          v-model="form.healthBeginDate"
                          scrollable
                        >
                          <v-spacer></v-spacer>

                          <v-btn
                            text
                            color="primary"
                            @click="dialog.healthBeginDateDialog = false"
                          >
                            OK
                          </v-btn>
                        </v-date-picker>
                      </v-dialog>
                      <span class="form-text text-muted"
                        >Please select health begin date.</span
                      >
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="form-group">
                      <v-dialog
                        v-model="dialog.healthEndDateDialog"
                        persistent
                        width="290px"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <label>Health End Date</label>
                          <input
                            v-model="form.healthEndDate"
                            class="
                              form-control form-control-lg form-control-solid
                            "
                            label="Picker in dialog"
                            prepend-icon="mdi-calendar"
                            v-bind="attrs"
                            v-on="on"
                          />
                        </template>
                        <v-date-picker v-model="form.healthEndDate" scrollable>
                          <v-spacer></v-spacer>

                          <v-btn
                            text
                            color="primary"
                            @click="dialog.healthEndDateDialog = false"
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
                      v-for="item in inspectionTemplatePlan.packages"
                      :key="item.bid"
                    >
                      <b-card
                        :title="item.name"
                        img-src="https://picsum.photos/600/300/?image=25"
                        img-alt="Image"
                        img-top
                        tag="article"
                        class="mb-2"
                        style="min-height: 500px"
                      >
                        <div
                          v-for="o in item.additionGroups"
                          :key="o.name"
                          class="row"
                        >
                          <div
                            v-for="t in o.additions"
                            :key="t.name"
                            class="row"
                          >
                            <div class="col">{{ t.name }}</div>
                            <div class="col">{{ t.price }}</div>
                          </div>
                        </div>
                        <template v-slot:footer>
                          <b-row>
                            <b-col sm>
                              <b-button href="#" variant="primary"
                                >Detail</b-button
                              >
                            </b-col>
                            <b-col style="margin-bottom: 10px">
                              <b-form-checkbox @change="choosePlan(item.bid)">
                                choose
                              </b-form-checkbox>
                            </b-col>
                          </b-row>
                        </template>
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
  FETCH_INSPECTION_TEMPLATE,
  CREATE_INSPECTION,
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
        bookBeginDateDialog: false,
        bookEndDateDialog: false,
        healthBeginDateDialog: false,
        healthEndDateDialog: false,
      },
      form: {
        enterpriseId: 19,
        nameI18n: { en: "", zh: "" },
        bookBeginDate: "",
        bookEndDate: "",
        healthBeginDate: "",
        healthEndDate: "",
        employeeIds: [],
        packages: [],
      },
    };
  },
  computed: {
    ...mapGetters(["currentEnterpriseInfo", "inspectionTemplatePlan"]),
  },
  async mounted() {
    await this.$store.dispatch(
      FETCH_INSPECTION_TEMPLATE,
      this.$store.state.enterprise.currentEnterpriseId
    );
    console.log(9999);
    console.log(this.inspectionTemplatePlan);
    await this.$store.dispatch(FETCH_EMPLOYEE_LIST, {
      enterpriseId: this.$store.state.enterprise.currentEnterpriseId,
    });
    this.desserts = this.$store.state.employee.employees;
    this.form.nameI18n.en = this.inspectionTemplatePlan.name;
    this.form.bookBeginDate = moment(
      this.inspectionTemplatePlan.bookBeginDate
    ).format("yyyy-MM-DD");
    this.form.bookEndDate = moment(
      this.inspectionTemplatePlan.bookEndDate
    ).format("yyyy-MM-DD");
    this.form.healthBeginDate = moment(
      this.inspectionTemplatePlan.healthBeginDate
    ).format("yyyy-MM-DD");
    this.form.healthEndDate = moment(
      this.inspectionTemplatePlan.healthEndDate
    ).format("yyyy-MM-DD");
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
      this.form.bookBeginDate = moment(this.form.bookBeginDate).format(
        "yyyy-MM-DD HH:mm:ss"
      );
      this.form.bookEndDate = moment(this.form.bookEndDate).format(
        "yyyy-MM-DD HH:mm:ss"
      );
      this.form.healthBeginDate = moment(this.form.healthBeginDate).format(
        "yyyy-MM-DD HH:mm:ss"
      );
      this.form.healthEndDate = moment(this.form.healthEndDate).format(
        "yyyy-MM-DD HH:mm:ss"
      );
      await this.$store.dispatch(CREATE_INSPECTION, this.form);
      Swal.fire({
        title: "",
        text: "The project has been successfully submitted!",
        icon: "success",
        confirmButtonClass: "btn btn-secondary",
      });
    },
    choosePlan: function (value) {
      console.log(999)
      console.log(value)
      if (_.indexOf(this.form.packages, value) == -1) {
        this.form.packages.push(value);
      } else {
        this.form.packages = _.without(this.form.packages, value);
      }
    },
    chooseEmployee: function (payload) {
      if (
        _.indexOf(this.form.employeeIds, payload.item.eid) == -1 &&
        payload.value == true
      ) {
        this.form.employeeIds.push(payload.item.eid);
      } else {
        this.form.employeeIds = _.without(
          this.form.employeeIds,
          payload.item.eid
        );
      }
    },
  },
};
</script>
