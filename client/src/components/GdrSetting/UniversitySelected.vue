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
          v-for="(name, index) in university"
          :key="index"
          v-bind:value="name"
        >
          {{ name }}
        </option>
      </select>
    </div>
    <div class="text-center mt-3">
      <button
        type="button"
        class="btn btn-success"
        v-on:click="submit()"
      >
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
      university_count: 0,
      university_choose: new Array(),
      criteria_choose: null,
    };
  },
  methods: {
    universityCount(num) {
      if (num == 1 && this.university_count < this.university.length) {
        this.university_count += 1;
        this.university_choose.push("Choose...");
      } else if (num == -1 && this.university_count > 1) {
        this.university_count -= 1;
        this.university_choose.pop();
      }
    },
    submit(){
      this.$store.commit('SetUniversity',this.university_choose)
      // console.log('-------------')
      // console.log(this.$store.getters.getCriteria)
      // console.log(this.$store.getters.getUniversity)
      this.$router.push("/weight")
    }
  },
  beforeMount() {
    this.university_count = 1;
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

