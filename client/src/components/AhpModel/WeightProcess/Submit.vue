<template>
  <div class="mt-4 mb-2 col-md-8 card">
    <h4 class="text-center mt-5">Confrim your decision</h4>
    <div class="row justify-content-center ">
      <div class="mt-4 col-10">
        <select
          class="form-select mb-2"
          aria-label="crteria select"
          v-model="alternatives_submit"
        >
          <option selected>Choose...</option>
          <option
            v-for="(name, index) in alternatives_choose"
            :key="index"
            v-bind:value="name"
          >
            {{ name }}
          </option>
        </select>
      </div>
    </div>

    <div class="d-flex justify-content-center mt-3 mb-5">
      <button type="button" class="btn btn-success" @click="onClickNext">
        Submit
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      alternatives_submit: "Choose...",
      alternatives_choose: null,
    };
  },
  methods: {
    onClickNext() {
      this.$emit("onSubmit", this.alternatives_submit);
    },
  },
  beforeMount() {
    this.alternatives_choose = this.$store.getters.getUniversity;
  },
};
</script>