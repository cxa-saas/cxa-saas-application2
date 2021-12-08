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
                <h3 class="wizard-title">1.Basic Info</h3>
              </div>
              <i class="wizard-arrow flaticon2-next"></i>
            </div>
            <div class="wizard-step" data-wizard-type="step">
              <div class="wizard-label">
                <i class="wizard-icon flaticon-list"></i>
                <h3 class="wizard-title">2.Advanced Info(Optional)</h3>
              </div>
              <i class="wizard-arrow flaticon2-next"></i>
            </div>
            <div class="wizard-step" data-wizard-type="step">
              <div class="wizard-label">
                <i class="wizard-icon flaticon-responsive"></i>
                <h3 class="wizard-title">3. Invite Employee(Optional)</h3>
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
          <div class="col-xl-12 col-xxl-7">
            <!--begin: Wizard Form-->
            <form class="form" id="kt_form">
              <!--begin: Wizard Step 1-->
              <div
                class="pb-5"
                data-wizard-type="step-content"
                data-wizard-state="current"
              >
                <h3 class="mb-10 font-weight-bold text-dark">
                  Setup Your Basic Information
                </h3>
                <div class="form-group">
                  <label>Company Name</label>
                  <input
                    v-model="form.name"
                    type="text"
                    class="form-control form-control-solid form-control-lg"
                    name="address1"
                    placeholder="Company Name"
                    value="CXA Group"
                  />
                  <span class="form-text text-muted"
                    >Please enter company name.</span
                  >
                </div>
                <div class="form-group">
                  <label>Unified Social Credit Code</label>
                  <input
                    type="text"
                    v-model="form.secialCode"
                    class="form-control form-control-solid form-control-lg"
                    name="secialCode"
                    placeholder="Secial Code"
                    value="91310000MA1FY7W6XM"
                  />
                  <span class="form-text text-muted"
                    >Please enter your unified social credit code.</span
                  >
                </div>
                <div class="row">
                  <div class="col-xl-6">
                    <div class="form-group">
                      <label>Corporate</label>
                      <input
                        v-model="form.username"
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        name="address2"
                        placeholder="Corporate"
                        value="Rosaline Chow Koo"
                      />
                      <span class="form-text text-muted"
                        >Please enter corporate.</span
                      >
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="form-group">
                      <label>Email</label>
                      <input
                        v-model="form.email"
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        name="email"
                        placeholder="Email"
                        value="chovy.qiu@cxagroup.com"
                      />
                      <span class="form-text text-muted"
                        >Please enter your Email.</span
                      >
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xl-6">
                    <div class="form-group">
                      <label>Mobile</label>
                      <input
                        v-model="form.mobile"
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        name="mobile"
                        placeholder="mobile"
                        value="021-654351234"
                      />
                      <span class="form-text text-muted"
                        >Please enter your mobile.</span
                      >
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="form-group">
                      <label>Address</label>
                      <input
                        v-model="form.address"
                        type="text"
                        class="form-control form-control-solid form-control-lg"
                        name="state"
                        placeholder="Address"
                      />
                      <span class="form-text text-muted"
                        >Please enter your address.</span
                      >
                    </div>
                  </div>
                </div>
              </div>
              <!--end: Wizard Step 1-->

              <!--begin: Wizard Step 2-->
              <div class="pb-5" data-wizard-type="step-content">
                <h4 class="mb-10 font-weight-bold text-dark">
                  Enter Advanced Info of Your Enterprise
                </h4>
                <div class="form-group">
                  <label>Company Website</label>
                  <input
                    type="text"
                    v-model="form.website"
                    class="form-control form-control-solid form-control-lg"
                    name="package"
                    placeholder="Website URL"
                    value="www.cxagroup.com"
                  />
                  <span class="form-text text-muted"
                    >Please enter your company website.</span
                  >
                </div>
                <div class="form-group">
                  <label>Select an Language Option</label>
                  <select
                    name="preferreddelivery"
                    class="form-control form-control-solid form-control-lg"
                  >
                    <option value="ZH_CN" selected>中文</option>
                    <option value="KO_KR">한국어</option>
                    <option value="JA_JP">日本語</option>
                  </select>
                  <span class="form-text text-muted"
                    >Please select your language.</span
                  >
                </div>

                <div class="form-group">
                  <label>Select an Enterprise Size Option</label>
                  <select
                    v-model="form.enterpriseSizeType"
                    name="preferreddelivery"
                    class="form-control form-control-solid form-control-lg"
                  >
                    <option value="0" selected>0~50</option>
                    <option value="1">51-100</option>
                    <option value="2">101-500</option>
                    <option value="3">500-1000</option>
                    <option value="4">>1000</option>
                  </select>
                  <span class="form-text text-muted"
                    >Please select your enterprise size.</span
                  >
                </div>
              </div>
              <!--end: Wizard Step 2-->

              <!--begin: Wizard Step 3-->
              <div class="pb-5" data-wizard-type="step-content">
                <h4 class="mb-10 font-weight-bold text-dark">
                  Invite Hr And Finance
                </h4>
                <div class="form-group">
                  <label>Hr Email</label>
                  <input
                    type="text"
                    v-model="form.hrEmail"
                    class="form-control form-control-solid form-control-lg"
                    name="hrEmail"
                    placeholder="Hr Email"
                    value="ziyan@cxagroup.com"
                  />
                </div>
                <div class="form-group">
                  <label>Finance Email</label>
                  <input
                    type="text"
                    v-model="form.financeEmail"
                    class="form-control form-control-solid form-control-lg"
                    name="financeEmail"
                    placeholder="Finance Email"
                    value="ziyan@cxagroup.com"
                  />
                </div>
              </div>
              <!--end: Wizard Step 3-->

              <!--begin: Wizard Step 4-->
              <div class="pb-5" data-wizard-type="step-content">
                <h4 class="mb-10 font-weight-bold text-dark">
                  Review and Submit
                </h4>
                <div class="form-group">
                  <label>Company Name</label>
                  <input
                    v-model="form.name"
                    type="text"
                    class="form-control form-control-solid form-control-lg"
                    disabled
                  />
                </div>
                <div class="form-group">
                  <label>Corporate</label>
                  <input
                    v-model="form.username"
                    disabled
                    type="text"
                    class="form-control form-control-solid form-control-lg"
                  />
                </div>
                <div class="row">
                  <div class="col-xl-6">
                    <div class="form-group">
                      <label>Unified Social Credit Code</label>
                      <input
                        v-model="form.secialCode"
                        type="text"
                        disabled
                        class="form-control form-control-solid form-control-lg"
                      />
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="form-group">
                      <label>Email</label>
                      <input
                        v-model="form.email"
                        type="text"
                        disabled
                        class="form-control form-control-solid form-control-lg"
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xl-6">
                    <div class="form-group">
                      <label>mobile</label>
                      <input
                        v-model="form.mobile"
                        type="text"
                        disabled
                        class="form-control form-control-solid form-control-lg"
                      />
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="form-group">
                      <label>Address</label>
                      <input
                        v-model="form.address"
                        type="text"
                        disabled
                        class="form-control form-control-solid form-control-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <!--end: Wizard Step 4-->

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

export default {
  name: "Wizard-1",
  data() {
    return {
      form: {
        mobile: "",
        name: "",
        username: "",
        address: "",
        email: "",
        enterpriseSizeType: "0",
        languageList: "",
        secialCode: "",
        website: "",
        hrEmail: "",
        financeEmail: "",
        adminId: this.$store.state.auth.user.adminId
      }
    };
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Wizard" },
      { title: "Wizard-1" }
    ]);

    // Initialize form wizard
    const wizard = new KTWizard("kt_wizard_v1", {
      startStep: 1, // initial active step number
      clickableSteps: true // allow step clicking
    });

    // Validation before going to next page
    wizard.on("beforeNext", function(/*wizardObj*/) {
      // validate the form and use below function to stop the wizard's step
      // wizardObj.stop();
    });

    // Change event
    wizard.on("change", function(/*wizardObj*/) {
      setTimeout(() => {
        KTUtil.scrollTop();
      }, 500);
    });
  },
  methods: {
    submit: function(e) {
      e.preventDefault();
      this.$store.dispatch("submitEnterprise", this.form);
      Swal.fire({
        title: "",
        text: "The application has been successfully submitted!",
        icon: "success",
        confirmButtonClass: "btn btn-secondary"
      }).then(() => {
        this.$router.push({ name: 'dashboard' });
      });
    }
  }
};
</script>
