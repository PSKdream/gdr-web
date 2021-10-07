<template>
  <div class="row justify-content-center mt-5 mb-5">
    <div class="col-lg-7 col-12 card mb-5 ps-0 pe-0">
      <!-- Content goes here -->
      <div class="card-header">
        <h2 class="text-center pt-2 pb-2">Insert Program</h2>
      </div>

      <form class="mt-5 m-2 card-body" @submit.prevent="onSubmit">
        <div for="course" class="card-body">
          <label for="courseNameList" class="form-label">Program</label>
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
          <p class="mt-3">Information of program</p>
          <div
            v-bind:class="'m-2 mt-0 ms-4 check-' + name"
            v-for="(name, index) in criteriaList"
            :key="index"
          >
            <div>
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
            <div
              class="input-group mt-2 pe-4"
              style="padding-left: 2.6rem"
              v-if="criteriaChoose[index] == true"
            >
              <textarea
                class="form-control"
                v-if="
                  name != 'มหาวิทยาลัยรัฐ / เอกชน (State/Private university)'
                "
                v-model="criteriaDetail[name]"
                placeholder="Please fill in the details"
              ></textarea>
              <select
                class="form-select"
                aria-label="select"
                v-model="criteriaDetail[name]"
                v-if="
                  name == 'มหาวิทยาลัยรัฐ / เอกชน (State/Private university)'
                "
              >
                <option >สถาบันอุดมศึกษาในกำกับของรัฐ</option>
                <option >สถาบันอุดมศึกษาเอกชน</option>
              </select>
            </div>
          </div>
        </div>
        <div class="text-center pt-0 card-body">
          <button type="submit" class="btn btn-success mt-3">Save</button>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
import PostService from "../../PostService.js";
export default {
  data() {
    return {
      course: "",
      university: "",
      criteriaChoose: null,
      criteriaDetail: {},

      courseList: [],
      universityList: [],
      criteriaList: [],
      error: null,

      url_search: null,
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
          //console.log(this.criteriaDetail)
          PostService.insertCourse({
            course: this.course,
            university: this.university,
            criteria: criteria,
            detail: this.criteriaDetail,
          });
          if (this.url_search === "?admin") {
            this.$router.push("/admin");
          } else {
            alert("Thank you...");
            this.$router.push("/");
          }
        } catch (err) {
          alert(err);
        }
      } else {
        alert("Please check input");
      }
    },
  },
  async created() {
    this.url_search = window.location.search;
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

