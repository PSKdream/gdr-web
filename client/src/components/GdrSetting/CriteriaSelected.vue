<template>
  <div v-if="criteria_count !== 0">
    <div class="mt-5 mb-2 border-bottom btn-toolbar justify-content-between">
      <h3 id="Criteria-Header">Criteria</h3>
      <div>
        <button
          type="button"
          class="btn btn-outline-primary btn-sm"
          style="margin-right: 5px; width: 30px"
          v-on:click="criteriaCount(1)"
        >
          +
        </button>
        <button
          type="button"
          class="btn btn-outline-primary btn-sm"
          style="width: 30px"
          v-on:click="criteriaCount(-1)"
        >
          -
        </button>
      </div>
    </div>
    <div class="mt-3">
      <select
        class="form-select mb-2"
        aria-label="crteria select"
        v-for="index in criteria_count"
        :key="index"
        v-model="criteria_choose[index - 1]"
        @change="setCriteria('edit')"
      >
        <option selected>Choose...</option>
        <option
          v-for="(name, index) in criteria"
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
        v-on:click="setCriteria('save')"
        v-if="status===null"
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
      courseDetail: {},
      criteria: new Set(),
      criteria_count: 0,
      criteria_choose: new Array(),
      status: null,
    };
  },
  methods: {
    criteriaCount(num) {
      this.courseDetail = this.$store.getters.getCourseDetail;
      if (num == 1 && this.criteria_count < this.criteria.size) {
        this.criteria_count += 1;
        this.criteria_choose.push("Choose...");
      } else if (num == -1 && this.criteria_count > 1) {
        this.criteria_count -= 1;
        this.criteria_choose.pop();
      }
      if(this.status != null)
        this.setCriteria('edit')
    },
    setCriteria(state) {
      if (state === "save") this.status = 1;
      else if (state === "edit" && this.status != 1) return;
      this.$store.commit("SetCriteria", this.criteria_choose);
      this.$emit("Changed", state);
    },
  },
  beforeMount() {
    this.courseDetail = this.$store.getters.getCourseDetail;
    this.criteria.clear();
    this.courseDetail.forEach((element) => {
      Object.values(element.criteria).forEach((data) => {
        this.criteria.add(data);
      });
    });
    if (this.criteria.size > 0) {
      this.criteria_count = 1;
      this.criteria_choose.push("Choose...");
    } else {
      this.criteria_count = 0;
    }
  },
};
</script>

