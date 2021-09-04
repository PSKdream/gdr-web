<template>
  <div class="container">
    <h2 id="topic" class="text-center mt-4">Criteria Preferences</h2>
    <div
      class="Criteria-Preferences"
      v-for="(cri1, index1) in criteria_choose"
      :key="index1"
    >
      <div
        class="position-relative row justify-content-center"
        v-for="(cri2, index2) in criteria_choose.slice(
          index1 + 1,
          criteria_choose.length
        )"
        :key="index2"
      >
        <!--p>{{ index1 }} {{ index2 + index1 + 1 }}</!--p-->
        <div class="row mt-5">
          <h6 class="col text-start ms-5">{{ cri1 }}</h6>
          <h6 class="col text-end me-5">{{ cri2 }}</h6>
        </div>
        <div class="input-group justify-content-center">
          <button
            type="button"
            :class="
              'btn btn-sm rounded-pill ms-1  ' +
              [
                criteria_matrix.get(index1, index2 + index1 + 1) == 10 - n
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
            @click="change_matrix(index1, index2 + index1 + 1, 10 - n)"
          >
            {{ 10 - n }}
          </button>
          <button
            type="button"
            :class="
              'btn btn-sm rounded-pill ms-1  ' +
              [
                criteria_matrix.get(index1, index2 + index1 + 1) == 1
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
            @click="change_matrix(index1, index2 + index1 + 1, 1)"
          >
            {{ 1 }}
          </button>
          <button
            type="button"
            :class="
              'btn btn-sm rounded-pill ms-1  ' +
              [
                criteria_matrix.get(index1, index2 + index1 + 1) == 1 / (n + 1)
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
            @click="change_matrix(index1, index2 + index1 + 1, 1 / (n + 1))"
          >
            {{ n + 1 }}
          </button>
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
    <p>{{ criteria_matrix }}</p>
    <p>eigenvector {{ criteria_eigenvector }}</p>
    <p>c {{ text_c }}</p>
    <p>d {{ text_d }}</p>
  </div>
</template>

<script>
import nj from "numjs";
// import ndarray from 'ndarray'
export default {
  //props: ["criteria", "criteriaSize"],
  data() {
    return {
      criteria_choose: null,
      criteria_matrix: null,
      criteria_eigenvector: null,
      text_c: null,
      text_d: null,
    };
  },

  methods: {
    change_matrix(indexRow, indexCol, data) {
      this.criteria_matrix.set(indexRow, indexCol, data);
      this.criteria_matrix.set(indexCol, indexRow, 1 / data);
      //console.log(this.criteria_matrix.get(indexRow, indexCol));
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
      // console.log("n : ", n);
      eigenvector = nj.array([eigenvector]).T;
      let c = nj.dot(matrixValue, eigenvector);
      this.text_c = c;
      let d = nj.divide(c.T, eigenvector.T);
      this.text_d = d;
      let ramda_max = nj.sum(d) / n;
      // console.log("ramda_max : ", ramda_max);
      let ci = (ramda_max - n) / (n - 1);
      // console.log("cr : ", ci);
      let cr = ci / ri[n - 1];
      //  console.log("cr : ", cr);
      return cr;
    },
    onClickNext() {
      if (this.checkZero(this.criteria_matrix) === true) return;

      this.criteria_eigenvector = this.eigenvector(this.criteria_matrix);

      let cr = this.consistencyRatio(
        this.criteria_matrix,
        this.criteria_eigenvector
      );

      if (cr >= 0.1) {
        alert("Consistency Ratio is unacceptable.\n" + "C.R. : " + cr);
        return;
      }

      this.$emit("onSubmit", this.criteria_eigenvector);
    },
  },
  beforeMount() {
    this.criteria_choose = this.$store.getters.getCriteria;
    this.university_choose = this.$store.getters.getUniversity;
    this.criteria_matrix = nj.identity(this.criteria_choose.length);
    /* this.criteria_matrix = nj.ones([
      this.criteria_choose.length,
      this.criteria_choose.length,
    ]);*/
  },
  /* computed: {
    courseDetail() {
      return this.$store.state.courseDetail;
    },
    criteria_choose() {
      return this.$store.state.criteria_choose;
    },
    university_choose() {
      return this.$store.state.university_choose;
    },
  },*/
};
</script>