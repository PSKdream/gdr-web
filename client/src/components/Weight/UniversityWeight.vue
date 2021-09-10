<template>
  <div class="container">
    <h2 id="topic" class="text-center mt-4">University Preferences</h2>
    <div
      class="University-Preferences mt-5"
      v-for="(cri, index) in criteria_choose"
      :key="index"
    >
      <h5>Criteria : {{ cri }}</h5>
      <div
        class="University-Weight"
        v-for="(uni1, index1) in university_choose"
        :key="index1"
      >
        <div
          class="position-relative row justify-content-center"
          v-for="(uni2, index2) in university_choose.slice(
            index1 + 1,
            university_choose.length
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
                  university_matrix[index].get(index1, index2 + index1 + 1) ==
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
                  university_matrix[index].get(index1, index2 + index1 + 1) == 1
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
                  university_matrix[index].get(index1, index2 + index1 + 1) ==
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
      <h6 class="" @click="onClickNext">
        <a href="#topic" class="text-success text-decoration-none">
          Next
          <i class="bi bi-arrow-right-square-fill"></i>
        </a>
      </h6>
    </div>
    <!-- 
    <p>{{ university_matrix }}</p>
    <p>{{ criteria_choose }}</p>
    <p>{{ university_choose }}</p>
    <p>c {{ text_c }}</p>
    <p>d {{ text_d }}</p>
    -->
  </div>
</template>

<script>
import nj from "numjs";
export default {
  //props: ["university", "universitySize", "criteria", "criteriaSize"],
  data() {
    return {
      criteria_choose: this.$store.getters.getCriteria, //["c1", "c2", "c5"],
      university_choose: this.$store.getters.getUniversity, //["u1", "u2", "u5"],
      university_matrix: null,
      university_eigenvector: null,
      text_c: null,
      text_d: null,
    };
  },

  methods: {
    change_matrix(arrIndex, indexRow, indexCol, data) {
      this.university_matrix[arrIndex].set(indexRow, indexCol, data);
      this.university_matrix[arrIndex].set(indexCol, indexRow, 1 / data);
      //console.log(this.university_matrix[arrIndex].get(indexRow, indexCol));
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
    onClickNext() {
      let size = this.criteria_choose.length;
      for (let i = 0; i < size; i++) {
        if (this.checkZero(this.university_matrix[i]) === true) return;

        this.university_eigenvector[i] = this.eigenvector(
          this.university_matrix[i]
        );

        let cr = this.consistencyRatio(
          this.university_matrix[i],
          this.university_eigenvector[i]
        );

        if (cr >= 0.1) {
          alert(
            "Consistency Ratio is unacceptable.\n" +
              "Criteria :" + this.criteria_choose[i]+
              "\nC.R. : " +
              cr
          );
          return;
        }
      }
      this.$emit("onSubmit", this.university_eigenvector);
    },
  },
  beforeMount() {
    this.university_matrix = new Array(this.criteria_choose.length);
    this.university_eigenvector = new Array(this.criteria_choose.length);
    for (let i = 0; i < this.criteria_choose.length; i++) {
      this.university_matrix[i] = nj.identity(this.university_choose.length);
      /*this.university_matrix[i] = nj.ones([
        this.university_choose.length,
        this.university_choose.length,
      ]);*/
    }
  },
};
</script>