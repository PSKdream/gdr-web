<template>
  <div class="row justify-content-center mt-5 mb-5">
    <!-- Progress Bar -->
    <div class="m-4 col-md-6 col-10">
      <div class="progress ms-2 me-2 " style="height: 1px">
        <div
          class="progress-bar "
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
            class="
              translate-middle
              btn btn-sm btn-primary
              rounded-pill
            "
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
        <div class="col-4 pe-0 text-end ">
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

    <div
      class="col-md-10 card pb-3 mt-5 mb-5"
      v-if="criteria_eigenvector === null || university_eigenvector === null"
    >
      <CriteriaWeight
        @onSubmit="CriteriaWeightReturn"
        v-if="criteria_eigenvector === null"
      ></CriteriaWeight>
      <Universityweight
        @onSubmit="UniversityWeightReturn"
        v-if="criteria_eigenvector !== null && university_eigenvector == null"
      ></Universityweight>
    </div>

    <div
      class="mt-4 mb-2 container  col-md-10"
      v-if="criteria_eigenvector !== null && university_eigenvector != null"
    >
    <div class="d-flex justify-content-center  mb-4">
      <h3>Course : {{course[0]}}</h3>
    </div>
    <div class="row">
         
      <div class="col-md-4 col-12">
        <div class="card p-3" style="background-color: #fffbe5">
          <div class="d-flex justify-content-center mt-2">
            <h4 class="fst-italic">
              <i class="bi bi-bar-chart-line pe-1"></i> Ranking
            </h4>
          </div>
          <div class="d-flex justify-content-center mb-2">
            <h5>
              <ol class="mb-0">
                <li v-for="item in chart_decision" :key="item">
                  {{ item[0] }}
                </li>
              </ol>
            </h5>
          </div>
        </div>
      </div>
      <div class="col-md-8 col-12 card">
        <div class="ms-5 me-5">
          <div class="mt-3 border-dark border-bottom border-2">
            <h5 class="mb-0">
              <a
                class="d-flex p-2 justify-content-between link-dark item-header"
              >
                Summary of decision
              </a>
            </h5>
          </div>
          <div>
            <bar-chart
              class="mt-4 "
              :data="chart_decision"
              height="230px"
              :colors="colors_rank"
              :round="4"
              :max="1"
            >
            </bar-chart>
          </div>
        </div>
        <div class="ms-5 me-5 mt-5">
          <div class="mt-3 border-dark border-bottom border-2">
            <h5 class="mb-0">
              <a
                class="d-flex p-2 justify-content-between link-dark item-header"
              >
                Criteria importance
              </a>
            </h5>
          </div>
          <div>
            <bar-chart
              class="mb-5 mt-4"
              :data="chart_criteria_importance"
              :colors="colors"
              height="230px"
              :round="4"
              :max="1"
            >
            </bar-chart>
          </div>
        </div>
        <div class="m-5">
          <div class="mt-3 border-dark border-bottom border-2">
            <h5 class="mb-0">
              <a
                class="d-flex p-2 justify-content-between link-dark item-header"
              >
                Alternatives rankings with structure
              </a>
            </h5>
          </div>
          <div
            class="mt-3"
            v-for="(uni, index) in university_choose"
            :key="index"
          >
            <h6 class="text-center pt-2">{{ uni }}</h6>
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
    </div></div>
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
      course:this.$store.getters.getCourse,
      criteria_eigenvector: null,
      university_eigenvector: null,

      summary: null,
      chart_decision: [],
      chart_criteria_importance: [],
      chart_alternatives: [],
      colors_rank: ["#66D2D6"],
      colors: [
        "#E9679B",
        "#F8CD4F",
        "#B9A3D1",
      "#6EE0E0",
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
    ObjectSort(object) {
      object.sort(function (a, b) {
        return a[1] > b[1] ? -1 : a[1] === b[1] ? 0 : 1;
      });
    },
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
      this.chart_decision = [];
      this.chart_criteria_importance = [];
      this.chart_alternatives = [];

      //color

      //chart_decision
      for (let uni = 0; uni < this.university_choose.length; uni++) {
        this.colors_rank.push("#BD97CB");
        this.chart_decision.push([
          this.university_choose[uni],
          this.summary[uni],
        ]);
      }
      this.ObjectSort(this.chart_decision);

      //chart_criteria_importance
      for (let index = 0; index < this.criteria_eigenvector.length; index++) {
        this.chart_criteria_importance.push([
          this.criteria_choose[index],
          this.criteria_eigenvector[index],
        ]);
      }
      this.ObjectSort(this.chart_criteria_importance);

      //chart_alternatives
      for (let uni = 0; uni < this.university_eigenvector.length; uni++) {
        let arr = [];
        for (let cri = 0; cri < this.criteria_eigenvector.length; cri++) {
          arr.push([
            this.criteria_choose[cri],
            this.university_eigenvector[cri][uni] *
              this.criteria_eigenvector[uni],
          ]);
        }
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

<style scoped>
.card-body {
  padding: 0rem 0rem;
}
.item-header {
  color: #161515;
  text-decoration: none;
}
.item-header:hover {
  cursor: pointer;
}
.translate-middle {
    transform: translate(1%,-50%)!important;
}
</style>