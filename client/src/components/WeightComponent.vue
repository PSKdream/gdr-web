<template>
  <div class="row justify-content-center mt-5">
    <!-- Progress Bar -->
    <div class="position-relative m-4 mb-5 col-md-6">
      <div class="progress" style="height: 1px">
        <div
          class="progress-bar"
          role="progressbar"
          v-bind:style="{ width: progress + '%' }"
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <button
        type="button"
        class="
          position-absolute
          top-0
          start-0
          translate-middle
          btn btn-sm btn-primary
          rounded-pill
        "
        style="width: 2rem; height: 2rem"
        @click="onClickChangeProgress(1)"
      >
        1
      </button>
      <button
        type="button"
        :class="
          'position-absolute top-0 start-50 translate-middle btn btn-sm rounded-pill ' +
          [progress < 50 ? 'btn-secondary' : 'btn-primary']
        "
        style="width: 2rem; height: 2rem"
        :disabled="progress < 50"
        @click="onClickChangeProgress(2)"
      >
        2
      </button>
      <button
        type="button"
        :class="
          'position-absolute top-0 start-100 translate-middle btn btn-sm rounded-pill ' +
          [progress < 100 ? 'btn-secondary' : 'btn-success']
        "
        style="width: 2rem; height: 2rem"
        :disabled="progress < 50"
      >
        3
      </button>
    </div>

    <div class="col-md-10 card pb-3 mt-5 mb-5">
      <CriteriaWeight
        @onSubmit="CriteriaWeightReturn"
        v-if="criteria_eigenvector === null"
      ></CriteriaWeight>
      <Universityweight
        @onSubmit="UniversityWeightReturn"
        v-if="criteria_eigenvector !== null && university_eigenvector == null"
      ></Universityweight>
      <div
        class="summary mt-4 mb-2"
        v-if="criteria_eigenvector !== null && university_eigenvector != null"
      >
        <div class="ms-5 me-5 mt-3">
          <h2 class="text-center" style="margin-top: 20px">My decision</h2>
          <bar-chart
            :data="chart_decision"
            height="230px"
            :colors="colors"
            :round="4"
            :max="1"
          >
          </bar-chart>
        </div>
        <div class="ms-5 me-5 mt-5">
          <h2 class="text-center" style="margin-top: 100px">
            Criteria importance
          </h2>
          <bar-chart
            class="mb-5"
            :data="chart_criteria_importance"
            :colors="colors"
            height="230px"
            :round="4"
            :max="1"
          >
          </bar-chart>
        </div>
        <div class="m-5">
          <h2 class="text-center" style="margin-top: 100px">
            Alternatives rankings with structure
          </h2>
          <div
            class="mt-3"
            v-for="(uni, index) in university_choose"
            :key="index"
          >
            <h5>{{ uni }}</h5>
            <bar-chart
              :data="chart_alternatives[index]"
              :colors="colors"
              height="230px"
              :round="4"
              :max="1"
            >
            </bar-chart>
          </div>
        </div>
      </div>
    </div>
    <!-- 
    <p>{{ criteria_choose }}</p>
    <p>{{ university_choose }}</p>

    <p>c_eigen : {{ criteria_eigenvector }}</p>
    <p>u_eigen : {{ university_eigenvector }}</p>
    <p>summary : {{ summary }}</p>
    -->
  </div>
</template>

<script>
import CriteriaWeight from "./Weight/CriteriaWeight.vue";
import Universityweight from "./Weight/UniversityWeight.vue";
export default {
  data() {
    return {
      progress: 0,

      criteria_eigenvector: null,
      university_eigenvector: null,

      summary: null,
      chart_decision: [],
      chart_criteria_importance: [],
      chart_alternatives: [],
      colors: [
        "#c6dbda",
        "#fee1e8",
        "#fed7c3",
        "#f6eac2",
        "#ecd5e3",
        "#8fcaca",
        "#ff968a",
        "#cbaacb",
        "#abdee6",
        "#fffb5",
      ],

      criteria_choose: this.$store.getters.getCriteria, //["c1", "c2", "c5"],
      university_choose: this.$store.getters.getUniversity, //["u1", "u2", "u5"],
    };
  },
  components: {
    CriteriaWeight,
    Universityweight,
  },
  methods: {
    CriteriaWeightReturn(value) {
      this.criteria_eigenvector = value;
      this.progress = 50;
    },
    UniversityWeightReturn(value) {
      this.progress = 100;
      this.university_eigenvector = value;

      //summary
      this.summary = new Array(this.university_choose.length);
      for (let uni = 0; uni < this.university_choose.length; uni++) {
        for (let cri = 0; cri < this.criteria_eigenvector.length; cri++) {
          if (this.summary[uni] == null) {
            this.summary[uni] = 0;
          }
          this.summary[uni] +=
            this.university_eigenvector[cri][uni] *
            this.criteria_eigenvector[cri];
        }
      }

      //-----Part Chart----
      this.chart_criteria_importance = [];
      for (let index = 0; index < this.criteria_eigenvector.length; index++) {
        //chart_criteria_importance
        this.chart_criteria_importance.push([
          this.criteria_choose[index],
          this.criteria_eigenvector[index],
        ]);
      }

      this.chart_decision = [];
      this.chart_alternatives = [];
      for (let uni = 0; uni < this.university_choose.length; uni++) {
        //chart_decision
        this.chart_decision.push([
          this.university_choose[uni],
          this.summary[uni],
        ]);
      }
      for (let uni = 0; uni < this.university_eigenvector.length; uni++) {
        //chart_alternatives
        let arr = [];
        for (let cri = 0; cri < this.criteria_eigenvector.length; cri++) {
          arr.push([
            this.criteria_choose[cri],
            this.university_eigenvector[cri][uni] *
              this.criteria_eigenvector[uni],
          ]);
        }
        //console.log(arr);
        this.chart_alternatives.push(arr);
      }
      //console.log(this.university_eigenvector);
      //console.log(this.chart_alternatives);
    },
    onClickChangeProgress(State) {
      switch (State) {
        case 1:
          this.criteria_eigenvector = null;
          this.university_eigenvector = null;
          this.summary = null;
          this.progress = 0;
          break;
        case 2:
          this.university_eigenvector = null;
          this.summary = null;
          this.progress = 50;
          break;
      }
    },
  },
};
</script>