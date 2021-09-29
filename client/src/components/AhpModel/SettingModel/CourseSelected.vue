<template>
  <div>
    <div class="input-group">
      <div class="input-group-prepend">
        <label class="input-group-text" for="inputCourseSelect">Program</label>
      </div>

      <select
        class="form-select"
        aria-label="Course select"
        @change="onChange($event)"
        placeholder="Please choose the program"
      >
        <option>Choose...</option>
        <option
          v-for="(name, index) in course"
          :key="index"
          v-bind:value="name"
        >
          {{ name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
//import PostService from "../../PostService.js";
export default {
  props: ["state_setting"],
  data() {
    return {
      course: [],
      error: null,
    };
  },
  async created() {
    try {
      await this.$store.dispatch("postCourse");
      this.course = this.$store.getters.getCourse;
      //console.log(this.course);
    } catch (err) {
      this.error = err;
      //console.log(err);
    }
  },
  methods: {
    async onChange(event) {
      console.log(event.target.value);
      await this.$store.dispatch("postCourseDetail", event.target.value);
      this.$emit("Changed");
    },
  },
};
</script>

