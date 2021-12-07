<template>
  <!--begin::Card-->
  <div class="card card-custom">
    <!--begin::Header-->
    <div class="card-header py-3">
      <div class="card-title align-items-start flex-column">
        <h3 class="card-label font-weight-bolder text-dark">
          Company Information
        </h3>
        <span class="text-muted font-weight-bold font-size-sm mt-1"
          >Update your personal informaiton</span
        >
      </div>
      <div class="card-toolbar">
        <button
          type="reset"
          class="btn btn-success mr-2"
          @click="save()"
          ref="kt_save_changes"
        >
          Save Changes
        </button>
        <button type="reset" class="btn btn-secondary" @click="cancel()">
          Cancel
        </button>
      </div>
    </div>
    <!--end::Header-->
    <!--begin::Form-->
    <form class="form">
      <!--begin::Body-->
      <div class="card-body">
        <div class="row">
          <label class="col-xl-3"></label>
          <div class="col-lg-9 col-xl-6">
            <h5 class="font-weight-bold mb-6">Customer Info</h5>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-xl-3 col-lg-3 col-form-label text-right"
            >Logo</label
          >
          <div class="col-lg-9 col-xl-6">
            <div class="image-input image-input-outline" id="kt_profile_avatar">
              <div
                class="image-input-wrapper"
                :style="{
                  backgroundImage: `url(${currentEnterpriseInfo.currentEnterPhoto})`,
                }"
              ></div>
              <label
                class="
                  btn
                  btn-xs
                  btn-icon
                  btn-circle
                  btn-white
                  btn-hover-text-primary
                  btn-shadow
                "
                data-action="change"
                data-toggle="tooltip"
                title=""
                data-original-title="Change avatar"
              >
                <i class="fa fa-pen icon-sm text-muted"></i>
                <input
                  type="file"
                  name="profile_avatar"
                  accept=".png, .jpg, .jpeg"
                  @change="onFileChange($event)"
                />
                <input type="hidden" name="profile_avatar_remove" />
              </label>
              <span
                class="
                  btn
                  btn-xs
                  btn-icon
                  btn-circle
                  btn-white
                  btn-hover-text-primary
                  btn-shadow
                "
                data-action="cancel"
                data-toggle="tooltip"
                title="Cancel avatar"
              >
                <i class="ki ki-bold-close icon-xs text-muted"></i>
              </span>
              <span
                class="
                  btn
                  btn-xs
                  btn-icon
                  btn-circle
                  btn-white
                  btn-hover-text-primary
                  btn-shadow
                "
                data-action="remove"
                data-toggle="tooltip"
                title="Remove avatar"
                @click="current_photo = null"
              >
                <i class="ki ki-bold-close icon-xs text-muted"></i>
              </span>
            </div>
            <span class="form-text text-muted"
              >Allowed file types: png, jpg, jpeg.</span
            >
          </div>
        </div>
        <div class="form-group row">
          <label class="col-xl-3 col-lg-3 col-form-label text-right"
            >Company Name</label
          >
          <div class="col-lg-9 col-xl-6">
            <input
              ref="name"
              class="form-control form-control-lg form-control-solid"
              type="text"
              v-bind:value="currentEnterpriseInfo.name"
            />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-xl-3 col-lg-3 col-form-label text-right"
            >Address</label
          >
          <div class="col-lg-9 col-xl-6">
            <input
              ref="address"
              class="form-control form-control-lg form-control-solid"
              type="text"
              v-bind:value="currentEnterpriseInfo.address"
            />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-xl-3 col-lg-3 col-form-label text-right"
            >Introduction</label
          >
          <div class="col-lg-9 col-xl-6">
            <input
              ref="introduction"
              class="form-control form-control-lg form-control-solid"
              type="text"
              v-bind:value="currentEnterpriseInfo.introduction"
            />
            <span class="form-text text-muted"
              >If you want your invoices addressed to a company. Leave blank to
              use your full name.</span
            >
          </div>
        </div>
        <div class="form-group row">
          <label class="col-xl-3 col-lg-3 col-form-label text-right"
            >Company Size Type</label
          >
          <div class="col-lg-9 col-xl-6">
            <input
              ref="sizeType"
              class="form-control form-control-lg form-control-solid"
              type="text"
              value="small(0-99)"
            />
          </div>
        </div>
        <div class="row">
          <label class="col-xl-3"></label>
          <div class="col-lg-9 col-xl-6">
            <h5 class="font-weight-bold mt-10 mb-6">Contact Info</h5>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-xl-3 col-lg-3 col-form-label text-right"
            >Contact Phone</label
          >
          <div class="col-lg-9 col-xl-6">
            <div class="input-group input-group-lg input-group-solid">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="la la-phone"></i>
                </span>
              </div>
              <input
                ref="mobile"
                type="text"
                class="form-control form-control-lg form-control-solid"
                placeholder="Mobile"
                v-bind:value="currentEnterpriseInfo.mobile"
              />
            </div>
            <span class="form-text text-muted"
              >We'll never share your email with anyone else.</span
            >
          </div>
        </div>
        <div class="form-group row">
          <label class="col-xl-3 col-lg-3 col-form-label text-right"
            >Email Address</label
          >
          <div class="col-lg-9 col-xl-6">
            <div class="input-group input-group-lg input-group-solid">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="la la-at"></i>
                </span>
              </div>
              <input
                ref="email"
                type="text"
                class="form-control form-control-lg form-control-solid"
                placeholder="Email"
                v-bind:value="currentEnterpriseInfo.email"
              />
            </div>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-xl-3 col-lg-3 col-form-label text-right"
            >Company Site</label
          >
          <div class="col-lg-9 col-xl-6">
            <div class="input-group input-group-lg input-group-solid">
              <input
                ref="company_site"
                type="text"
                class="form-control form-control-lg form-control-solid"
                placeholder="Username"
                value="www.cxagroup"
              />
              <div class="input-group-append">
                <span class="input-group-text">.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--end::Body-->
    </form>
    <!--end::Form-->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { UPDATE_ENTERPRISE_DETAIL } from "@/core/services/store/enterprise.module";

export default {
  name: "PersonalInformation",
  data() {
    return {
      default_photo: "media/logos/logo-cxa-1.png",
      current_photo: "media/logos/logo-cxa-1.png",
    };
  },
  mounted() {
    // this.current_photo = this.currentUserPersonalInfo.photo;
    this.current_photo = "media/logos/logo-cxa-1.png";
  },
  methods: {
    save() {
      var name = this.$refs.name.value;
      var address = this.$refs.address.value;
      var introduction = this.$refs.introduction.value;
      var mobile = this.$refs.mobile.value;
      var email = this.$refs.email.value;

      // set spinner to submit button
      const submitButton = this.$refs["kt_save_changes"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");

      // dummy delay
      setTimeout(() => {
        // send update request
        this.$store.dispatch(UPDATE_ENTERPRISE_DETAIL, {
          name,
          address,
          introduction,
          mobile,
          email,
          enterpriseId: this.$store.state.enterprise.currentEnterpriseId,
        });

        submitButton.classList.remove(
          "spinner",
          "spinner-light",
          "spinner-right"
        );
      }, 2000);
    },
    cancel() {
      this.$refs.name.value = this.currentEnterpriseInfo.name;
      this.$refs.address.value = this.currentEnterpriseInfo.address;
      this.$refs.introduction.value = this.currentEnterpriseInfo.introduction;
      this.$refs.mobile.value = this.currentEnterpriseInfo.mobile;
      this.$refs.email.value = this.currentEnterpriseInfo.email;
    },
    onFileChange(e) {
      const file = e.target.files[0];

      if (typeof FileReader === "function") {
        const reader = new FileReader();

        reader.onload = (event) => {
          this.current_photo = event.target.result;
        };

        reader.readAsDataURL(file);
      } else {
        alert("Sorry, FileReader API not supported");
      }
    },
  },
  computed: {
    ...mapGetters(["currentUserPersonalInfo", "currentEnterpriseInfo"]),
    photo() {
      return this.current_photo == null
        ? this.default_photo
        : this.current_photo;
    },
  },
};
</script>
