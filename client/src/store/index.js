import { createStore } from "vuex";
import PostService from '../PostService.js'
export default createStore({
  state: {
    course: {},
    university_list:{},
    criteria_list:{},
    courseDetail: {},
    criteria_choose: {},
    university_choose: {},
  },
  mutations: {
    SetCourse(state, value) {
      state.course = value;
    },
    SetCourseDetail(state, value) {
      state.courseDetail = value;
    },
    SetCriteria(state, value) {
      state.criteria_choose = value;
    },
    SetUniversity(state, value) {
      state.university_choose = value;
    },
    SetUniversityList(state, value) {
      state.university_list = value;
    },
    SetCriteriaList(state, value) {
      state.criteria_list = value;
    },
  },
  actions: {
    async postCourse(context) {
      try {
        let course = await PostService.getCourse();
        context.commit('SetCourse',course)
        //console.log(this.course);
      } catch (err) {
        this.error = err;
      }
    },
    async postUniversity(context) {
      try {
        let data = await PostService.getUniversity();
        context.commit('SetUniversityList',data)
        //console.log(this.course);
      } catch (err) {
        this.error = err;
      }
    },
    async postCourseDetail(context,value) {
      try {
        let course = await PostService.getDetailCourse(value);     
        context.commit('SetCourseDetail',course)
        //console.log(this.course);
      } catch (err) {
        this.error = err;
      }
    },
    async postCriteriaList(context) {
      try {
        let data = await PostService.getCriteriaList();
        context.commit('SetCriteriaList',data)
        //console.log(this.course);
      } catch (err) {
        this.error = err;
      }
    },
  },
  getters:{
    getCourse(state){
      return state.course;
    },
    getCourseDetail(state){
      return state.courseDetail;
    },
    getCriteria(state){
      return state.criteria_choose;
    },
    getCriteriaList(state){
      return state.criteria_list;
    },
    getUniversity(state){
      return state.university_choose;
    },
    getUniversityList(state){
      return state.university_list;
    },
    
  },
  modules: {},
});
