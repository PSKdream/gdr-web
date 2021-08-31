<template>
  <div class="container">
    <h2 class="text-center mt-4">Criteria Preferences</h2>
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
        <a href="#" class="text-success text-decoration-none">
          Next
          <i class="bi bi-arrow-right-square-fill"></i>
        </a>
      </h6>
    </div>
  </div>
  <p>{{ criteria_matrix }}</p>
  <p>{{ criteria_choose }}</p>
  <p>{{ university_choose }}</p>
</template>

<script>
import nj from "numjs";
export default {
  //props: ["criteria", "criteriaSize"],
  data() {
    return {
      criteria_choose: null,
      criteria_matrix:  null,
    };
  },

  methods: {
    change_matrix(indexRow, indexCol, data) {
      this.criteria_matrix.set(indexRow, indexCol, data);
      this.criteria_matrix.set(indexCol, indexRow, 1 / data);
      //console.log(this.criteria_matrix.get(indexRow, indexCol));
    },
    onClickNext () {
      this.$emit('onSubmit', this.criteria_matrix)
    }
    },beforeMount() {
      this.criteria_choose = this.$store.getters.getCriteria
      this.university_choose = this.$store.getters.getUniversity
      this.criteria_matrix = nj.ones([this.criteria_choose.length,this.criteria_choose.length])
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