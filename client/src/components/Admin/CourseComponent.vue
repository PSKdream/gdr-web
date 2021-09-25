<template>
  <div class="container row justify-content-center">
    <div class="col-md-8">
      <div class="mt-5 mb-2 border-bottom btn-toolbar justify-content-between">
        <h3>View for {{ level }}</h3>
        <div>
          <button
            type="button"
            class="btn btn-sm btn-info"
            @click="this.$router.push('/insert-course')"
          >
            Insert Program
          </button>
        </div>
      </div>

      <table class="table mt-4">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Program</th>
            <th scope="col">University</th>
            <th scope="col">Criteria</th>
            <td scope="col" v-if="level === 'admin'">Action</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(data, index) in course" :key="index">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ data.course }}</td>
            <td>{{ data.university }}</td>
            <td>@{{ data.criteria }}</td>
            <td v-if="level === 'admin'">
              <!-- 
            <i
              class="bi bi-pencil-square"
              style="cursor: pointer; color: #89e894"
              @click="onAction('edit', index)"
            ></i> -->
              <i
                class="bi bi-trash ms-3"
                style="cursor: pointer; color: #ff968a"
                @click="onAction('delete', index)"
              ></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import PostService from "../../PostService.js";
export default {
  
  data() {
    return {
      course: null,
      error: null,
      level : 'admin'
    };
  },
  methods: {
    async onAction(action, index) {
      let _id = this.course[index]._id;
      if (action === "edit") {
        console.log(_id);
      } else if (action === "delete") {
        if (confirm("Are you delete course ?") === false) return;
        try {
          await PostService.deleteCourse(_id);
          this.course = this.course
            .slice(0, index)
            .concat(this.course.slice(index + 1, this.course.length));
          console.log(this.course);
        } catch (err) {
          this.error = err;
          console.log(err);
        }
      }
    },
  },
  async mounted() {
    try {
      this.course = await PostService.getCourseData();
      //console.log(this.course);
    } catch (err) {
      this.error = err;
      console.log(err);
    }
  },
};
</script>