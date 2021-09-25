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
          v-for="(name, index_option) in OptionFilters(index - 1)"
          :key="index_option"
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
        v-if="status === null"
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
      
      criteria: new Array(),
      criteria_choose: new Array(),

      criteria_count: 0,
      status: null,
    };
  },
  methods: {
    criteriaCount(num) {
      this.courseDetail = this.$store.getters.getCourseDetail;
      if (num == 1 && this.criteria_count < this.criteria.length) {
        this.criteria_count += 1;
        this.criteria_choose.push("Choose...");
      } else if (num == -1 && this.criteria_count > 2) {
        this.criteria_count -= 1;
        this.criteria_choose.pop();
      }
      if (this.status != null) this.setCriteria("edit");
    },
    setCriteria(state) {
      if (state === "save") this.status = 1;
      else if (state === "edit" && this.status != 1) return;

      this.$store.commit("SetCriteria", this.criteria_choose);
      this.$emit("Changed", state);
    },
    OptionFilters(indexSkip) {
      let arrFilter = [...this.criteria_choose]
      arrFilter.splice(indexSkip,1);
      return this.criteria.filter(word => arrFilter.indexOf(word) === -1);
    },
  },
  beforeMount() {
    this.courseDetail = this.$store.getters.getCourseDetail;
    let criteria = new Set();
    this.courseDetail.forEach((element) => {
      Object.values(element.criteria).forEach((data) => {
        criteria.add(data);
      });
    });
    this.criteria = Array.from(criteria);
    if (this.criteria.length > 0) {
      this.criteria_count = 2;
      this.criteria_choose.push("Choose...");
      this.criteria_choose.push("Choose...");
    } else {
      this.criteria_count = 0;
    }
  },
};
</script>

