<template>
  <div class="mt-4 mb-5 container col-lg-11 col-12">
    <!-- model pop up-->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-center" id="exampleModalLabel">
              New message
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body ms-2 me-2"></div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>

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
                  <a
                    style="font-size: 60%"
                    href="#topic"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    :data-bs-whatever="item[0]"
                    >Read more</a
                  >
                </li>
              </ol>
            </h5>
          </div>
        </div>
        <div class="mt-4 mb-2 card">
          <h5 class="text-center mt-5">Input University Code</h5>
          <div class="row justify-content-center">
            <div class="mt-4 col-10">
              <input
                type="text"
                class="form-control code-university"
                placeholder="code"
                v-model="code_submit"
              />
              <!-- 
              <select
                class="form-select mb-2"
                aria-label="crteria select"
                v-model="code_submit"
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
              -->
            </div>
          </div>

          <div class="d-flex justify-content-center mt-3 mb-5">
            <button type="button" class="btn btn-success" @click="onClickNext">
              Submit
            </button>
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
            v-for="(item, index) in chart_decision"
            :key="index"
          >
            <h6 class="text-center pt-2">{{ item[0] }}</h6>
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
    alternatives_eigenvector
    {{alternatives_eigenvector}}
    <br><br>
    criteria_eigenvector
    {{criteria_eigenvector}}
    <br><br>
    criteria_choose
    {{ criteria_choose }}
    <br><br>
    alternatives_choose
    {{ alternatives_choose }}
    <br><br>
    chart_decision
    {{ chart_decision }}
    <br><br>
    chart_criteria_importance
    {{ chart_criteria_importance }}
    <br><br>
    chart_alternatives
    {{ chart_alternatives }}
    <br><br>
    chart_alternatives_obj
    {{ chart_alternatives_obj }}
     -->
  </div>
</template>

<script>
import PostService from "../../../PostService";
export default {
  props: ["criteria_eigenvector", "alternatives_eigenvector"],
  data() {
    return {
      course: this.$store.getters.getCourse,

      code_submit: "",
      universityCode: [],

      summary: null,
      chart_decision: [],
      chart_criteria_importance: [],
      chart_alternatives: [],
      chart_alternatives_obj: {},
      colors_rank: ["#66D2D6"],
      colors: ["#E9679B", "#F8CD4F", "#B9A3D1", "#6EE0E0"],

      criteria_choose: this.$store.getters.getCriteria, //["c1", "c2", "c5"],
      alternatives_choose: this.$store.getters.getUniversity, //["u1", "u2", "u5"],
    };
  },
  methods: {
    onClickNext() {
      if(this.universityCode.indexOf(this.code_submit) != -1)
        this.$emit("onSubmit", this.code_submit);
      else
        alert('Code invalid')
    },
    ObjectSort(object) {
      object.sort(function (a, b) {
        return a[1] > b[1] ? -1 : a[1] === b[1] ? 0 : 1;
      });
    },
    Arr3dObjectSort(object) {
      object.sort(function (a, b) {
        let sumA = 0,
          sumB = 0;
        for (let index = 0; index < a.length; index++) {
          sumA += a[index][1];
          sumB += b[index][1];
        }
        return sumA > sumB ? -1 : sumA === sumB ? 0 : 1;
      });
    },
  },
  async mounted() {
    this.universityCode = await PostService.getCode()

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
            this.criteria_eigenvector[cri],
        ]);
      }
      this.chart_alternatives.push(arr);
    }
    this.Arr3dObjectSort(this.chart_alternatives);
    //console.log(this.alternatives_eigenvector);
    //console.log(this.chart_alternatives);

    //model
    //await this.$store.dispatch("postCourseDetail", this.course);
    var course_detail = this.$store.getters.getCourseDetail;
    var exampleModal = document.getElementById("exampleModal");
    exampleModal.addEventListener("show.bs.modal", function (event) {
      // Button that triggered the modal
      var button = event.relatedTarget;
      // Extract info from data-bs-* attributes
      var recipient = button.getAttribute("data-bs-whatever");
      // If necessary, you could initiate an AJAX request here
      // and then do the updating in a callback.
      //
      // Update the modal's content.
      var modalTitle = exampleModal.querySelector(".modal-title");
      var modalBodyParagraph = exampleModal.querySelector(".modal-body");

      modalTitle.textContent = recipient;

      let textParagraph = "";
      for (let index = 0; index < course_detail.length; index++) {
        const element = course_detail[index];
        if (element.university === recipient) {
          //textParagraph = Object.getOwnPropertyNames(element.detail)
          //textParagraph = element.detail[0];
          for (const property in element.detail) {
            // console.log(`${property}: ${object[property]}`);
            //textParagraph += `${property}: ${element.detail[property]}`;
            if (
              element.detail[property] != "None" &&
              element.detail[property] !== ""
            ) {
              textParagraph += `<p class='mb-0'><u>${property}` + "</u></p>";
              textParagraph +=
                `<p class=''>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${element.detail[property]}` +
                "</p>";
            }
          }
        }
      }
      /*for (let index = 0; index < course_detail.length; index++) {
        const element = course_detail[index];
        if (alternatives_choose.indexOf(element.university) === -1) continue;
        textParagraph +=
          "<p class='text-center mb-0'><u>University : " +
          element.university +
          "</u></p>";
        textParagraph +=
          "<p >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
          element.detail[recipient] +
          "</p>";
      }*/
      //console.log(textParagraph);
      modalBodyParagraph.innerHTML = textParagraph;
    });
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