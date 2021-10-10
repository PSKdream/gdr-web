<template>
  <div class="row justify-content-center mt-5">
    <div class="col-lg-6 col-10">
      <!-- Content goes here -->
      <h1 class="text-center">Graduate Degree Recommender System</h1>
      <form class="mt-5">
        <!-- Course select -->
        <course-component @Changed="onChange"></course-component>

        <!-- crteria select -->
        <CriteriaComponent
          v-if="state_setting >= 1"
          @Changed="changeState"
          state_setting="state_setting"
        ></CriteriaComponent>

        <!-- university select -->
        <UniversityComponent v-if="state_setting >= 2"></UniversityComponent>
      </form>
    </div>
  </div>
</template>

<script>
//import PostService from "../PostService.js";
import CourseComponent from "./SettingModel/CourseSelected.vue";
import CriteriaComponent from "./SettingModel/CriteriaSelected.vue";
import UniversityComponent from "./SettingModel/UniversitySelected.vue";
export default {
  data() {
    return {
      state_setting: 0,
      error: "",
    };
  },
  components: {
    CourseComponent,
    CriteriaComponent,
    UniversityComponent,
  },

  methods: {
    async onChange() {
      this.state_setting = 0;
      this.$nextTick(() => {
        this.state_setting = 1;
        console.log("re-render cri");
      });
    },
    changeState() {
      this.state_setting = 1;
      this.$nextTick(() => {
        this.state_setting = 2;
        console.log("re-render uni");
      });
    },
    /*async handleSubmitForm() {
      this.$store.commit('SetUniversity',this.university_choose)
      this.$router.push("/weight")
    },*/
  },
};
</script>