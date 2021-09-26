<template>
  <div class="container">
    <h4 class="text-center mt-4">Program : {{ program[0] }}</h4>
    <div class="row mt-4">
      <div class="col-6 text-center">
        <h5 class="mb-3"><u>Criteria</u></h5>
        <p class="mb-2" v-for="item in criteria_choose" :key="item">
          {{ item }}
        </p>
      </div>

      <div class="col-6 text-center">
        <h5 class="mb-3"><u>Alternatives</u></h5>
        <p class="mb-2" v-for="item in alternatives_choose" :key="item">
          {{ item }}
        </p>
      </div>
    </div>
    <div class="form-check d-flex justify-content-center  mt-3">
      <input
        class="form-check-input"
        type="checkbox"
        v-model="CrChecked"
        id="flexCheckDefault"
      />
      <label class="ms-2 form-check-label" for="flexCheckDefault">
          Enable Consistency Ratio(CR) in AHP Model (Optional)
      </label>
    </div>
    <div class="d-flex justify-content-center mt-4 mb-3">
        <button type="button" class="btn btn-success"  @click="onClickNext">Start</button>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
        CrChecked : false,
        criteria_choose: null,
        alternatives_choose: null,
        program: null,
    };
  },
  methods: {
      onClickNext() {
          this.$emit("onSubmit", this.CrChecked);
      }
  },
  beforeMount() {
    this.program = this.$store.getters.getCourse;
    this.criteria_choose = this.$store.getters.getCriteria;
    this.alternatives_choose = this.$store.getters.getUniversity;
  },
};
</script>