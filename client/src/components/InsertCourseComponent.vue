<template>
  <div class="row justify-content-center mt-5">
    <div class="col-md-7 card mb-5 ps-0 pe-0">
      <!-- Content goes here -->
      <div class="card-header">
        <h2 class="text-center pt-2 pb-2">Insert Course</h2>
      </div>

      <form class="mt-5 m-2 card-body" @submit.prevent="onSubmit">
        <div for="course" class="card-body">
          <label for="courseNameList" class="form-label">Course</label>
          <input
            class="form-control"
            list="courselistOptions"
            id="courseNameList"
            placeholder="Type to search..."
            v-model="course"
          />
          <datalist id="courselistOptions">
            <option
              v-for="(name, index) in courseList"
              :key="index"
              v-bind:value="name"
            >
              {{ name }}
            </option>
          </datalist>
        </div>
        <div for="university" class="card-body">
          <label for="universityList" class="form-label mt-3">University</label>
          <input
            class="form-control"
            list="universitylistOptions"
            id="universityList"
            placeholder="Type to search..."
            v-model="university"
          />
          <datalist id="universitylistOptions">
            <option
              v-for="(name, index) in universityList"
              :key="index"
              v-bind:value="name"
            >
              {{ name }}
            </option>
          </datalist>
        </div>
        <div for="crireria" class="card-body">
          <p class="mt-3">Crireria</p>
          <div
            v-bind:class="'m-2 mt-0 ms-4 check-' + name"
            v-for="(name, index) in criteriaList"
            :key="index"
          >
            <input
              class="form-check-input ms-2 me-2"
              type="checkbox"
              v-bind:id="name"
              v-model="criteriaChoose[index]"
            />
            <label class="form-check-label ms-2" for="flexCheckDefault">
              {{ name }}
            </label>
          </div>
        </div>
        <div class="text-center card-body">
          <button type="submit" class="btn btn-success mt-3">Save</button>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
import PostService from "../PostService.js";
export default {
  data() {
    return {
      course: "",
      university: "",
      criteriaChoose: null,

      courseList: [],
      universityList: [],
      criteriaList: [],
      error: null,
    };
  },
  methods: {
    onSubmit() {
      let criteria = [];
      for (let i = 0; i < this.criteriaChoose.length; i++) {
        if (this.criteriaChoose[i] == true) criteria.push(this.criteriaList[i]);
      }
      if (this.course != "" && this.university != "" && criteria.length != 0) {
        try {
          PostService.insertCourse({
            course: this.course,
            university: this.university,
            criteria: criteria,
          });
          this.$router.push("/course")
        } catch (err) {
          alert(err);
        }
      } else {
        alert("Please check input");
      }
    },
  },
  async created() {
    try {
      await this.$store.dispatch("postCourse");
      this.courseList = this.$store.getters.getCourse;
      await this.$store.dispatch("postUniversity");
      this.universityList = this.$store.getters.getUniversityList;
      await this.$store.dispatch("postCriteriaList");
      this.criteriaList = this.$store.getters.getCriteriaList;

      this.criteriaChoose = new Array(this.criteriaList.length);
    } catch (err) {
      this.error = err;
    }
  },
};
</script>

