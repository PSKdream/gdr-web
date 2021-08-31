<template>
  <div class="container">
    <h2 class="text-center mt-4">University Preferences</h2>
    <div
      class="University-Preferences mt-5"
      v-for="(cri, index) in criteria_choose"
      :key="index"
    >
      <h3>Criteria : {{ cri }}</h3>
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
        <a href="#" class="text-success text-decoration-none">
          Next
          <i class="bi bi-arrow-right-square-fill"></i>
        </a>
      </h6>
    </div>
  </div>
      <p>{{ university_matrix }}</p>
  <p>{{ criteria_choose }}</p>
  <p>{{ university_choose }}</p>
</template>

<script>
import nj from "numjs";
export default {
  //props: ["university", "universitySize", "criteria", "criteriaSize"],
  data() {
    return {
      criteria_choose: this.$store.getters.getCriteria,//["c1", "c2", "c5"],
      university_choose: this.$store.getters.getUniversity,//["u1", "u2", "u5"],
      university_matrix: null,
    };
  },

  methods: {
    change_matrix(arrIndex, indexRow, indexCol, data) {
      this.university_matrix[arrIndex].set(indexRow, indexCol, data);
      this.university_matrix[arrIndex].set(indexCol, indexRow, 1 / data);
      //console.log(this.university_matrix[arrIndex].get(indexRow, indexCol));
    },
    onClickNext() {
      this.$emit("onSubmit", this.university_matrix);
    },
  },
  beforeMount() {
    console.log('---------------')
    console.log(this.criteria_choose.length)
    this.university_matrix = new Array(this.criteria_choose.length);
    for (let i = 0; i < this.criteria_choose.length; i++) {
      this.university_matrix[i] = nj.ones([
        this.university_choose.length,
        this.university_choose.length,
      ]);
    }
    console.log(this.university_matrix)
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