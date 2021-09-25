<template>
  <div class="mt-4 mb-2 container col-md-10">
    <div class="d-flex justify-content-center mb-4">
      <h3>Program : {{ course[0] }}</h3>
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
              class="mt-4"
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
            v-for="(uni, index) in alternatives_choose"
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
    </div>
  </div>
</template>

<script>
export default {
  props: ["criteria_eigenvector", "alternatives_eigenvector"],
  data() {
    return {
      course: this.$store.getters.getCourse,

      summary: null,
      chart_decision: [],
      chart_criteria_importance: [],
      chart_alternatives: [],
      colors_rank: ["#66D2D6"],
      colors: ["#E9679B", "#F8CD4F", "#B9A3D1", "#6EE0E0"],

      criteria_choose: this.$store.getters.getCriteria, //["c1", "c2", "c5"],
      alternatives_choose: this.$store.getters.getUniversity, //["u1", "u2", "u5"],
    };
  },
  methods: {
    ObjectSort(object) {
      object.sort(function (a, b) {
        return a[1] > b[1] ? -1 : a[1] === b[1] ? 0 : 1;
      });
    },
  },
  mounted() {
    // console.log("created");
    // console.log(this.alternatives_choose.length);
    // summary
    this.summary = new Array(this.alternatives_choose.length);
    for (let uni = 0; uni < this.alternatives_choose.length; uni++) {
      for (let cri = 0; cri < this.criteria_eigenvector.length; cri++) {
        if (this.summary[uni] == null) {
          this.summary[uni] = 0;
        }
        this.summary[uni] +=
          this.alternatives_eigenvector[cri][uni] *
          this.criteria_eigenvector[cri];
      }
    }

    //-----Part Chart----
    this.chart_decision = [];
    this.chart_criteria_importance = [];
    this.chart_alternatives = [];

    //color

    //chart_decision
    for (let uni = 0; uni < this.alternatives_choose.length; uni++) {
      this.colors_rank.push("#BD97CB");
      this.chart_decision.push([
        this.alternatives_choose[uni],
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
    for (let uni = 0; uni < this.alternatives_eigenvector.length; uni++) {
      let arr = [];
      for (let cri = 0; cri < this.criteria_eigenvector.length; cri++) {
        arr.push([
          this.criteria_choose[cri],
          this.alternatives_eigenvector[cri][uni] *
            this.criteria_eigenvector[uni],
        ]);
      }
      this.chart_alternatives.push(arr);
    }
    //console.log(this.alternatives_eigenvector);
    //console.log(this.chart_alternatives);
  },
};
</script>

<style scoped>

.item-header {
  color: #161515;
  text-decoration: none;
}
.item-header:hover {
  cursor: pointer;
}

</style>