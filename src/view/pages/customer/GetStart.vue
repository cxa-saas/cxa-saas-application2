<template>
  <!--begin::Card-->
  <div class="card">
    <!--begin::Card body-->
    <div class="card-body p-0">
      <!--begin::Heading-->
      <div class="card-px text-center py-20 my-10">
        <!--begin::Title-->
        <h2 class="fs-2x fw-bolder mb-10">{{ title }}</h2>
        <!--end::Title-->

        <!--begin::Description-->
        <p class="text-gray-400 fs-5 fw-bold mb-13">
          <span v-html="description"></span>
        </p>
        <!--end::Description-->

        <!--begin::Action-->
        <button
          type="button"
          class="btn btn-primary er fs-6 px-8 py-4"
          data-bs-toggle="modal"
          @click="addEnterprise()"
        >
          {{ buttonText }}
        </button>
        <!--end::Action-->
      </div>
      <!--end::Heading-->

      <!--begin::Illustration-->
      <div class="text-center px-5">
        <img :src="image" alt="" class="mw-100 mh-200px" />
      </div>
      <!--end::Illustration-->
    </div>
    <!--end::Card body-->
  </div>
  <!--end::Card-->
</template>

<script>
export default {
  data() {
    return {
      title: "Welcome!",
      description:
        "There are no organization added yet. <br/>Kickstart your organization by adding a your first organization",
      image: "media/svg/illustrations/2.png",
      buttonText: "Add Origanization"
    };
  },
  props: {},
  components: {},
  mounted() {},
  methods: {
    addEnterprise() {
      this.$router.push({ name: "customer-add-enterprise" });
    }
  }
};
</script>
