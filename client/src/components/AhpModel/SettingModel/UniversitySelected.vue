<template>
  <div>
    <div class="mt-5 mb-2 border-bottom btn-toolbar justify-content-between">
      <h3 id="University-Header">University</h3>
      <div>
        <button
          type="button"
          class="btn btn-outline-primary btn-sm"
          style="margin-right: 5px; width: 30px"
          v-on:click="universityCount(1)"
        >
          +
        </button>
        <button
          type="button"
          class="btn btn-outline-primary btn-sm"
          style="width: 30px"
          v-on:click="universityCount(-1)"
        >
          -
        </button>
      </div>
    </div>
    <div class="mt-3">
      <select
        class="form-select mb-2"
        aria-label="crteria select"
        v-for="index in university_count"
        :key="index"
        v-model="university_choose[index - 1]"
      >
        <option selected>Choose...</option>
        <option
          v-for="(name, index) in OptionFilters(index - 1)"
          :key="index"
          v-bind:value="name"
        >
          {{ name }}
        </option>
      </select>
    </div>
    <div>
      <p class="fw-light fst-italic">
      Please choose the University. You can add more universities. Click on the
      Next steps.
    </p>
    </div>
    <div class="text-center mt-3 mb-5">
      <button type="button" class="btn btn-success" v-on:click="submit()">
        Next Steps
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["state_setting"],
  data() {
    return {
      university: new Array(),
      university_choose: new Array(),
      criteria_choose: null,

      university_count: 0,
    };
  },
  methods: {
    universityCount(num) {
      if (num == 1 && this.university_count < this.university.length) {
        this.university_count += 1;
        this.university_choose.push("Choose...");
      } else if (num == -1 && this.university_count > 2) {
        this.university_count -= 1;
        this.university_choose.pop();
      }
    },
    OptionFilters(indexSkip) {
      let arrFilter = [...this.university_choose];
      arrFilter.splice(indexSkip, 1);
      return this.university.filter((word) => arrFilter.indexOf(word) === -1);
    },
    submit() {
      if (this.university_choose.indexOf("Choose...") != -1) {
        if (this.university.length === 0) alert("Please choose criteria.");
        else alert("Please choose university.");
        return;
      }
      this.$store.commit("SetUniversity", this.university_choose);
      // console.log('-------------')
      // console.log(this.$store.getters.getCriteria)
      // console.log(this.$store.getters.getUniversity)
      this.$router.push("/weight");
    },
  },
  beforeMount() {
    this.university_count = 2;
    this.university_choose.push("Choose...");
    this.university_choose.push("Choose...");
    this.criteria_choose = this.$store.getters.getCriteria;
    this.courseDetail = this.$store.getters.getCourseDetail;
    //console.log(this.courseDetail);
    //university Unique
    this.courseDetail.forEach((element) => {
      for (let i = 0; i < this.criteria_choose.length; i++) {
        if (element.criteria.indexOf(this.criteria_choose[i]) == -1) {
          break;
        }
        if (i == this.criteria_choose.length - 1) {
          this.university.push(element.university);
        }
      }
    });
  },
};
</script>

