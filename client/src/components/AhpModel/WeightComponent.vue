<template>
  <div class="row justify-content-center mt-5 mb-5">
    <!-- CR Form -->
    <div class="row justify-content-center" v-if="CrChecked === null">
      <h2 class="text-center mt-4">AHP Model Information</h2>
      <div class="col-md-8 card pb-3 mt-3 mb-5">
        <CrForm @onSubmit="CrReturn"></CrForm>
      </div>
    </div>
    <div class="row justify-content-center" v-if="CrChecked !== null">
      <!-- Progress Bar -->
      <div class="m-4 col-md-6 col-10">
        <div class="progress ms-2 me-2" style="height: 1px">
          <div
            class="progress-bar"
            role="progressbar"
            v-bind:style="{ width: progress + '%' }"
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <div class="ms-1 me-1 row">
          <div class="col-4 ps-0">
            <button
              type="button"
              class="translate-middle btn btn-sm btn-primary rounded-pill"
              style="width: 2rem; height: 2rem"
              @click="onClickChangeProgress(1)"
            >
              1
            </button>
          </div>
          <div class="col-4 text-center">
            <button
              type="button"
              :class="
                ' translate-middle btn btn-sm rounded-pill ' +
                [progress < 50 ? 'btn-secondary' : 'btn-primary']
              "
              style="width: 2rem; height: 2rem"
              :disabled="progress < 50"
              @click="onClickChangeProgress(2)"
            >
              2
            </button>
          </div>
          <div class="col-4 pe-0 text-end">
            <button
              type="button"
              :class="
                'translate-middle btn btn-sm rounded-pill ' +
                [progress < 100 ? 'btn-secondary' : 'btn-success']
              "
              style="width: 2rem; height: 2rem"
              :disabled="progress < 50"
            >
              3
            </button>
          </div>
        </div>
      </div>
      <!-- Weight -->
      <div
        class="col-md-10 card pb-3 mt-5 mb-5"
        v-if="criteria === null || alternatives === null"
      >
        <CriteriaWeight
          @onSubmit="CriteriaWeightReturn"
          v-if="criteria === null"
          :CrSelected="CrChecked"
        ></CriteriaWeight>
        <AlternativesWeight
          @onSubmit="AlternativesWeightReturn"
          v-if="criteria !== null && alternatives == null"
          :CrSelected="CrChecked"
        ></AlternativesWeight>
      </div>
      <!-- summary -->
      <SummaryWeight
        v-if="criteria != null && alternatives != null"
        :alternatives_eigenvector="alternatives.eigenvector"
        :criteria_eigenvector="criteria.eigenvector"
      ></SummaryWeight>
    </div>
  </div>
</template>

<script>
import PostService from "../../PostService";
import CriteriaWeight from "./WeightProcess/CriteriaWeight.vue";
import AlternativesWeight from "./WeightProcess/AlternativesWeight.vue";
import SummaryWeight from "./WeightProcess/SummaryWeight.vue";
import CrForm from "./WeightProcess/FormCR.vue";
export default {
  data() {
    return {
      CrChecked: null,

      progress: 0,
      criteria: null,
      alternatives: null,

      criteria_choose: this.$store.getters.getCriteria, //["c1", "c2", "c5"],
      alternatives_choose: this.$store.getters.getUniversity, //["u1", "u2", "u5"]
    };
  },
  components: {
    CriteriaWeight,
    AlternativesWeight,
    SummaryWeight,
    CrForm,
  },
  methods: {
    CrReturn(value) {
      this.CrChecked = value;
    },
    CriteriaWeightReturn(value) {
      this.criteria = value;
      this.progress = 50;
      
      
      if(value.cr_change != null)
        this.CrChecked = value.cr_change;
    },
    AlternativesWeightReturn(value) {
      if(value.cr_change != null)
        this.CrChecked = value.cr_change;


      this.progress = 100;
      this.alternatives = value;

      if (this.criteria != null && this.alternatives != null) {
        let obj = {
          course: this.$store.getters.getCourse[0],
          alternatives: this.$store.getters.getUniversity,
          criteria: this.$store.getters.getCriteria,
          criteria_matrix: this.criteria.matrix,
          alternatives_matrix: this.alternatives.matrix,
          cr_selected: this.CrChecked,
        };
        PostService.insertModelLog(obj);
      }
    },
    onClickChangeProgress(State) {
      switch (State) {
        case 1:
          this.criteria = null;
          this.alternatives = null;
          this.summary = null;
          this.progress = 0;
          break;
        case 2:
          this.alternatives = null;
          this.summary = null;
          this.progress = 50;
          break;
      }
    },
  },
};
</script>

<style scoped>
.translate-middle {
  transform: translate(1%, -50%) !important;
}
</style>