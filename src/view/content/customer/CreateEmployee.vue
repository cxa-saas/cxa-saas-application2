<template>
  <!--begin::Card-->
  <div class="text-center">
    <v-dialog v-model="dialog.createDialog" width="auto">
      <template v-slot:activator="{ on, attrs }">
        <a
          href="#"
          v-bind="attrs"
          v-on="on"
          class="btn btn-sm btn-info font-weight-bolder text-uppercase ml-10"
          >Create</a
        >
        <!-- <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
          Click Me
        </v-btn> -->
      </template>
      <div class="card card-custom">
        <!--begin::Header-->
        <div class="card-header py-3">
          <div class="card-title align-items-start flex-column">
            <h3 class="card-label font-weight-bolder text-dark">
              Personal Information
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
                >Avatar</label
              >
              <div class="col-lg-9 col-xl-6">
                <div
                  class="image-input image-input-outline"
                  id="kt_profile_avatar"
                >
                  <div
                    class="image-input-wrapper"
                    :style="{ backgroundImage: `url(${photo})` }"
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
                >Name</label
              >
              <div class="col-lg-9 col-xl-6">
                <input
                  ref="name"
                  class="form-control form-control-lg form-control-solid"
                  type="text"
                  v-model="form.name"
                />
              </div>
            </div>

            <div class="form-group row">
              <label class="col-xl-3 col-lg-3 col-form-label text-right"
                >Birthday</label
              >
              <div class="col-lg-9 col-xl-6">
                <v-dialog
                  ref="dialog2"
                  v-model="dialog.birthdayDialog"
                  :return-value.sync="date"
                  persistent
                  width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <input
                      v-model="form.birthday"
                      class="form-control form-control-lg form-control-solid"
                      label="Picker in dialog"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    />
                  </template>
                  <v-date-picker v-model="form.birthday" scrollable>
                    <v-spacer></v-spacer>
                    <v-btn
                      text
                      color="primary"
                      @click="dialog.birthdayDialog = false"
                    >
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-dialog>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-xl-3 col-lg-3 col-form-label text-right"
                >Employee Number</label
              >
              <div class="col-lg-9 col-xl-6">
                <input
                  ref="name"
                  class="form-control form-control-lg form-control-solid"
                  type="text"
                  v-model="form.code"
                />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-xl-3 col-lg-3 col-form-label text-right"
                >ID Card</label
              >
              <div class="col-lg-9 col-xl-6">
                <input
                  ref="surname"
                  class="form-control form-control-lg form-control-solid"
                  type="text"
                  v-bind:value="form.certificateNo"
                />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-xl-3 col-lg-3 col-form-label text-right"
                >department</label
              >
              <div class="col-lg-9 col-xl-6">
                <select
                  v-model="form.deptId"
                  class="form-control form-control-solid form-control-lg"
                >
                  <option
                    v-for="item in this.currentEnterpriseDepartments"
                    :value="item.nodeId"
                    :key="item.nodeId"
                  >
                    {{ item.name }}
                  </option>
                </select>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-xl-3 col-lg-3 col-form-label text-right"
                >ID Type</label
              >
              <div class="col-lg-9 col-xl-6">
                <select
                  v-model="form.certificateType"
                  class="form-control form-control-solid form-control-lg"
                >
                  <option value="1">ID Card</option>
                  <option value="2">Passport</option>
                  <option value="3">保新</option>
                </select>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-xl-3 col-lg-3 col-form-label text-right"
                >Status</label
              >
              <div class="col-lg-9 col-xl-6">
                <select
                  v-model="form.certificateType"
                  class="form-control form-control-solid form-control-lg"
                >
                  <option value="1">Pending</option>
                  <option value="2">On-the-job</option>
                  <option value="3">Resign</option>
                </select>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-xl-3 col-lg-3 col-form-label text-right"
                >Gender</label
              >
              <div class="col-lg-9 col-xl-6">
                <select
                  v-model="form.certificateType"
                  class="form-control form-control-solid form-control-lg"
                >
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                  <option value="3">Secret</option>
                </select>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-xl-3 col-lg-3 col-form-label text-right"
                >Marital Status</label
              >
              <div class="col-lg-9 col-xl-6">
                <select
                  v-model="form.certificateType"
                  class="form-control form-control-solid form-control-lg"
                >
                  <option value="1">Unmarried</option>
                  <option value="2">Married</option>
                  <option value="3">Secret</option>
                </select>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-xl-3 col-lg-3 col-form-label text-right"
                >Entry Date</label
              >
              <div class="col-lg-9 col-xl-6">
                <v-dialog
                  v-model="dialog.entryDayDialog"
                  persistent
                  width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <input
                      v-model="form.entrytime"
                      class="form-control form-control-lg form-control-solid"
                      label="Picker in dialog"
                      prepend-icon="mdi-calendar"
                      v-bind="attrs"
                      v-on="on"
                    />
                  </template>
                  <v-date-picker v-model="form.entrytime" scrollable>
                    <v-spacer></v-spacer>

                    <v-btn
                      text
                      color="primary"
                      @click="dialog.entryDayDialog = false"
                    >
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-dialog>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-xl-3 col-lg-3 col-form-label text-right"
                >Company Name</label
              >
              <div class="col-lg-9 col-xl-6">
                <input
                  ref="company_name"
                  class="form-control form-control-lg form-control-solid"
                  type="text"
                  v-model="form.tenantName"
                />
                <span class="form-text text-muted"
                  >If you want your invoices addressed to a company. Leave blank
                  to use your full name.</span
                >
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
                    ref="phone"
                    type="text"
                    class="form-control form-control-lg form-control-solid"
                    placeholder="Phone"
                    v-model="form.mobile"
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
                    v-model="form.email"
                  />
                </div>
              </div>
            </div>
            <!-- <div class="form-group row">
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
                    v-bind:value="currentUserPersonalInfo.company_site"
                  />
                  <div class="input-group-append">
                    <span class="input-group-text">.com</span>
                  </div>
                </div>
              </div>
            </div> -->
          </div>
          <!--end::Body-->
        </form>
        <!--end::Form-->
      </div>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// import { UPDATE_PERSONAL_INFO } from "@/core/services/store/profile.module";
import { SUBMIT_EMPLOYEE_LIST } from "@/core/services/store/employee.module";

export default {
  name: "PersonalInformation",
  data() {
    return {
      form: {
        avatar: "media/users/100_1.jpg",
        tenantId: 19,
        tenantName: "XXX公司",
        eid: "1457960784107048961",
        code: "12312341231",
        name: "赵六",
        status: 1,
        certificateType: 1,
        certificateNo: "53042119900803161X",
        birthday: "1990-01-01",
        sex: 1,
        maritalStatus: 3,
        entrytime: "2021-01-01 21:22:00",
        type: 1,
        email: "131231231@qq.com",
        mobile: "15951895115",
        deptId: 1,
        deptName: "北京分部",
        location: "北京",
        point: 200,
        grade: "Devops",
        class: "success",
      },
      dialog: {
        entryDayDialog: false,
        birthdayDialog: false,
        createDialog: false,
      },
      default_photo: "media/users/blank.png",
      current_photo: null,
    };
  },
  mounted() {
    this.current_photo = this.currentUserPersonalInfo.photo;
    console.log("department");
    console.log(this.currentEnterpriseDepartments);
  },
  methods: {
    savebirthday(date) {
      this.form.birthday = date;
      this.dialog.birthdayDialog = false;
    },
    save() {
      // var name = this.$refs.name.value;
      // var surname = this.$refs.surname.value;
      // var company_name = this.$refs.company_name.value;
      // var phone = this.$refs.phone.value;
      // var email = this.$refs.email.value;
      // var company_site = this.$refs.company_site.value;
      // var photo = this.photo;

      // set spinner to submit button
      const submitButton = this.$refs["kt_save_changes"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");

      // dummy delay
      setTimeout(async () => {
        // send update request
        // this.$store.dispatch(UPDATE_PERSONAL_INFO, {
        //   name,
        //   surname,
        //   company_name,
        //   phone,
        //   email,
        //   company_site,
        //   photo
        // });
        const result = await this.$store.dispatch(SUBMIT_EMPLOYEE_LIST, {
          employeeList: [this.form],
        });
        console.log(result);
        this.dialog.createDialog = false;

        submitButton.classList.remove(
          "spinner",
          "spinner-light",
          "spinner-right"
        );
      }, 2000);
    },

    cancel() {
      this.dialog = false;
      this.$refs.name.value = this.currentUserPersonalInfo.name;
      this.$refs.surname.value = this.currentUserPersonalInfo.surname;
      this.$refs.company_name.value = this.currentUserPersonalInfo.company_name;
      this.$refs.phone.value = this.currentUserPersonalInfo.phone;
      this.$refs.email.value = this.currentUserPersonalInfo.email;
      this.$refs.company_site.value = this.currentUserPersonalInfo.company_site;
      this.current_photo = this.currentUserPersonalInfo.photo;
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
    ...mapGetters(["currentUserPersonalInfo", "currentEnterpriseDepartments"]),
    photo() {
      return this.current_photo == null
        ? this.default_photo
        : this.current_photo;
    },
  },
};
</script>
