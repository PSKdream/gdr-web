<template>
  <div class="container">
    <h2 id="topic" class="text-center mt-4">University Preferences</h2>
    <p class="fw-light fst-italic mb-0">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Use the scale from 1 to 9
      to define the importance of the universities by each criterion. (1 = Equal
      importance, 3 = Moderate importance, 5 = Strong importance, 7 = Very
      strong or demonstrated importance, 9 = Extreme importance and 2,4,6,8 =
      Intermediate values). Click on the Next step to get results.
    </p>
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
            <h5 class="modal-title" id="exampleModalLabel">New message</h5>
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

    <div
      class="University-Preferences mt-4"
      v-for="(cri, index) in criteria_choose"
      :key="index"
    >
      <div class="row">
        <h6>
          Criteria : {{ cri }}
          <a
            class="bi bi-file-earmark-text"
            href="#topic"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            :data-bs-whatever="cri"
          >More Detail</a>
        </h6>
      </div>

      <div
        class="University-Weight"
        v-for="(uni1, index1) in alternatives_choose"
        :key="index1"
      >
        <div
          class="position-relative row justify-content-center"
          v-for="(uni2, index2) in alternatives_choose.slice(
            index1 + 1,
            alternatives_choose.length
          )"
          :key="index2"
        >
          <div class="row mt-2">
            <h6 class="col text-start ms-5">{{ uni1 }}</h6>
            <h6 class="col text-end me-5">{{ uni2 }}</h6>
          </div>
          <div class="input-group justify-content-center">
            <button
              type="button"
              :class="
                'btn btn-sm rounded-pill ms-1  ' +
                [
                  alternatives_matrix[index].get(index1, index2 + index1 + 1) ==
                  10 - n
                    ? 'btn-success'
                    : 'btn-primary',
                ]
              "
              v-for="n in 8"
              :key="n"
              v-bind:id="
                index1 + '-' + (index2 + index1 + 1) + '-' + (10 - n) + '-S'
              "
              v-bind:style="{
                width: 3 - n * 0.1 + 'rem',
                height: 3 - n * 0.1 + 'rem',
              }"
              @click="change_matrix(index, index1, index2 + index1 + 1, 10 - n)"
            >
              {{ 10 - n }}
            </button>
            <button
              type="button"
              :class="
                'btn btn-sm rounded-pill ms-1  ' +
                [
                  alternatives_matrix[index].get(index1, index2 + index1 + 1) ==
                  1
                    ? 'btn-success'
                    : 'btn-primary',
                ]
              "
              v-bind:style="{
                width: 3 - 9 * 0.1 + 'rem',
                height: 3 - 9 * 0.1 + 'rem',
              }"
              v-bind:id="
                index1 + '-' + (index2 + index1 + 1) + '-' + (10 - n) + '-C'
              "
              @click="change_matrix(index, index1, index2 + index1 + 1, 1)"
            >
              {{ 1 }}
            </button>
            <button
              type="button"
              :class="
                'btn btn-sm rounded-pill ms-1  ' +
                [
                  alternatives_matrix[index].get(index1, index2 + index1 + 1) ==
                  1 / (n + 1)
                    ? 'btn-success'
                    : 'btn-primary',
                ]
              "
              v-for="n in 8"
              :key="n"
              v-bind:id="
                index1 + '-' + (index2 + index1 + 1) + '-' + (10 - n) + '-E'
              "
              v-bind:style="{
                width: 3 - 8 * 0.1 + n * 0.1 + 'rem',
                height: 3 - 8 * 0.1 + n * 0.1 + 'rem',
              }"
              @click="
                change_matrix(index, index1, index2 + index1 + 1, 1 / (n + 1))
              "
            >
              {{ n + 1 }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="text-end mt-5 me-3">
      <h6 class="" @click="onClickNext" v-if="next === false">
        <a href="#topic" class="text-success text-decoration-none">
          Next
          <i class="bi bi-arrow-right-square-fill"></i>
        </a>
      </h6>
      <div
        class="spinner-border text-secondary"
        role="status"
        v-if="next === true"
      ></div>
    </div>
    <!-- 
    <p>{{ alternatives_matrix }}</p>
    <p>{{ criteria_choose }}</p>
    <p>{{ alternatives_choose }}</p>
    <p>c {{ text_c }}</p>
    <p>d {{ text_d }}</p>
    -->
  </div>
</template>

<script>
import nj from "numjs";
import PostService from "../../../PostService";

export default {
  //props: ["university", "universitySize", "criteria", "criteriaSize"],
  props: ["CrSelected"],
  data() {
    return {
      cr_change: null,

      criteria_choose: this.$store.getters.getCriteria, //["c1", "c2", "c5"],
      alternatives_choose: this.$store.getters.getUniversity, //["u1", "u2", "u5"],
      alternatives_matrix: null,
      alternatives_eigenvector: null,
      course_detail: null,
      text_c: null,
      text_d: null,

      next: false,
    };
  },

  methods: {
    change_matrix(arrIndex, indexRow, indexCol, data) {
      this.alternatives_matrix[arrIndex].set(indexRow, indexCol, data);
      this.alternatives_matrix[arrIndex].set(indexCol, indexRow, 1 / data);
      //console.log(this.alternatives_matrix[arrIndex].get(indexRow, indexCol));
    },
    checkZero(matrix) {
      let size = matrix.shape[0];
      for (let index = 0; index < size; index++) {
        for (let index2 = index + 1; index2 < size; index2++) {
          if (matrix.get(index, index2) === 0) {
            alert("Please check the information.");
            return true;
          }
        }
      }
    },
    eigenvector(matrix) {
      let size = matrix.shape[0];
      let sumArr = new Array(size);
      for (let col = 0; col < size; col++) {
        for (let row = 0; row < size; row++) {
          if (sumArr[col] == null) sumArr[col] = 0;
          sumArr[col] += matrix.get(row, col);
        }
      }
      let eigen = new Array(size);
      for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
          if (eigen[row] == null) eigen[row] = 0;
          eigen[row] += matrix.get(row, col) / sumArr[col];
        }
        eigen[row] /= size;
      }
      return eigen;
    },
    consistencyRatio(matrixValue, eigenvector) {
      let ri = [
        0, 0, 0.58, 0.9, 1.12, 1.24, 1.32, 1.14, 1.45, 1.49, 1.51, 1.48, 1.56,
        1.57, 1.59,
      ];
      let n = eigenvector.length;
      //console.log("n : ", n);
      eigenvector = nj.array([eigenvector]).T;
      let c = nj.dot(matrixValue, eigenvector);
      this.text_c = c;
      let d = nj.divide(c.T, eigenvector.T);
      this.text_d = d;
      let ramda_max = nj.sum(d) / n;
      //console.log("ramda_max : ", ramda_max);
      let ci = (ramda_max - n) / (n - 1);
      //console.log("cr : ", ci);
      let cr = ci / ri[n - 1];
      //console.log("cr : ", cr);
      return cr;
    },
    async onClickNext() {
      let size = this.criteria_choose.length;
      let textConfrimCR = "";

      for (let i = 0; i < size; i++) {
        if (this.checkZero(this.alternatives_matrix[i]) === true) return;
        this.next = true;
        //convert nj to array
        let matrix = this.alternatives_matrix[i];
        let size = matrix.shape[0];
        let dataset = new Array(size);
        for (let index = 0; index < size; index++) {
          dataset[index] = new Array(size);
          for (let index2 = 0; index2 < size; index2++) {
            dataset[index][index2] = matrix.get(index, index2);
          }
        }

        // post fuzzy asp
        var fahp_var = null;
        try {
          fahp_var = await PostService.FuzzyAhp(dataset);
          fahp_var = fahp_var.data;
        } catch (err) {
          alert(err);
          return;
        }
        this.alternatives_eigenvector[i] = fahp_var["normalized_weights"];

        let cr = this.consistencyRatio(
          this.alternatives_matrix[i],
          this.alternatives_eigenvector[i]
        );

        if (cr >= 0.1 && cr != Infinity) {
          textConfrimCR +=
            "   Criteria : " +
            this.criteria_choose[i] +
            "\n   C.R. : " +
            cr +
            "\n";
        }
      }
      if (textConfrimCR != "" && this.CrSelected === true) {
        let confirmCR = confirm(
          "Consistency Ratio is unacceptable.\n" +
            textConfrimCR +
            "\n\nClick OK to skip C.R. values and go to the next step.\nClick Cancel to backward with comparison again."
        );
        if (confirmCR === false) {
          this.next = false;
          return;
        }
        this.cr_change = false;
        //this.CrSelected = false
      }
      this.$emit("onSubmit", {
        matrix: this.alternatives_matrix,
        eigenvector: this.alternatives_eigenvector,
        cr_change: this.cr_change,
      });
      // this.$emit("onSubmit", this.alternatives_eigenvector);
    },
  },
  beforeMount() {
    this.alternatives_matrix = new Array(this.criteria_choose.length);
    this.alternatives_eigenvector = new Array(this.criteria_choose.length);
    for (let i = 0; i < this.criteria_choose.length; i++) {
      this.alternatives_matrix[i] = nj.identity(
        this.alternatives_choose.length
      );
      /*this.alternatives_matrix[i] = nj.ones([
        this.alternatives_choose.length,
        this.alternatives_choose.length,
      ]);*/
    }
  },
  async mounted() {
    this.course_detail = await PostService.getDetailCourse(
      this.$store.getters.getCourseDetail[0]['course']
    );

    var course_detail = this.course_detail;
    var alternatives_choose = this.alternatives_choose;
    var exampleModal = document.getElementById("exampleModal");
    exampleModal.addEventListener("show.bs.modal", function (event) {
      var button = event.relatedTarget;
      var recipient = button.getAttribute("data-bs-whatever");
      var modalTitle = exampleModal.querySelector(".modal-title");
      var modalBodyParagraph = exampleModal.querySelector(".modal-body");
      
      modalTitle.textContent = recipient;
      let textParagraph = "";


      for (let index = 0; index < course_detail.length; index++) {
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
      }
      //console.log(textParagraph);
      modalBodyParagraph.innerHTML = textParagraph;
    });
  },
};
</script>