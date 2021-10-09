import axios from "axios";

const url = "api/";
//const url = 'http://localhost:4000/api/';

class PostService {
  static getCode(){
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url + "code");
        const data = res.data;
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }

  static FuzzyAhp(text) {
    //console.log(text.email)
    return axios.post(url + "fahp", {
      text,
    });
  }

  static insertCourse(text) {
    //console.log(text.email)
    return axios.post(url + "insert-course", {
      text,
    });
  }

  static insertModelLog(text) {
    //console.log(text.email)
    return axios.post(url + "insert-model-log", {
      text,
    });
  }

  static deleteCourse(id) {
    //console.log(text.email)
    return axios.delete(url + "delete-course/" + id);
  }

  static getCriteriaList() {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url + "get-criteria");
        const data = res.data;
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }
  //get course distinct
  static getCourse() {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url + "get-course");
        const data = res.data;
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }
  //get university distinct
  static getUniversity() {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url + "get-university");
        const data = res.data;
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }
  //get Detail for Course
  static getDetailCourse(course) {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url + "get-detail/" + course);
        const data = res.data;
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }
  //get all course data
  static getCourseData() {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url + "get-course-data");
        const data = res.data;
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }
}

export default PostService;
