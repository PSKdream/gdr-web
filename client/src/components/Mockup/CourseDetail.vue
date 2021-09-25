<template>
  <div class="row justify-content-center mt-5 mb-5">
    <div class="col-md-9">
      <div class="text-left border-dark border-bottom border-2">
        <h2 class="pb-2">Doctoral study experience</h2>
      </div>
      <div class="mt-3 ms-4 me-4">
        <div class="row">
          <p>
            <img
              alt="PhD student"
              class="one-third right"
              src="../../assets/doc.jpg"
              style="
                width: 250px;
                margin: 5px 0 16px 16px;
                padding-right: 0;
                float: right;
              "
            />As a Doctoral student, you will be embarking on one of the most
            intensive study experiences of your academic career so far.&nbsp;
            <br />
            <br />
            You are likely to work with a smaller cohort of fellow students,
            which often leads to a greater sense of community with other
            research students and staff in your department.&nbsp;
          </p>
          <p>
            You will also have close, professional interaction with your main
            supervisor and others officially associated with your study, as well
            as many more informal working interactions. &nbsp;
          </p>
          <h2>Getting started</h2>
          <p>
            The process of searching and applying for funding and preparing a
            research application can be a long one so give yourself plenty of
            time to do a good job – ideally at least a year before you intend to
            start your studies.
          </p>
          <p>
            Whether you're applying for a studentship (a defined research
            project that comes with funding) or you have your own idea for
            research that you would like to undertake, it's important to check
            whether you need to identify a potential supervisor before making a
            formal application to the College; many departments expect you to do
            this before submitting your application and will not consider your
            application without it.
          </p>
        </div>
        <div v-for="(item, index) in data" :key="index">
          <div class="card mt-3">
            <div class="card-body">
              <h5 class="mb-0">
                <a
                  class="
                    d-flex
                    p-2
                    justify-content-between
                    link-dark
                    item-header
                  "
                  @click="topicVisit(index)"
                >
                  {{ item.topic }}
                  <i class="bi bi-plus"></i>
                </a>
              </h5>
            </div>
          </div>
          <div
            class="card-detail ps-4 pt-2 pe-4 mb-5"
            v-if="item.disable == true"
          >
            <p>{{ item.detail }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [
        { topic: "Popularity", detail: "detail" },
        { topic: "Scholarship opportunities", detail: "detail" },
        { topic: "State/Private university", detail: "detail" },
        { topic: "Education language", detail: "detail" },
        { topic: "Technological facilities", detail: "detail" },
        { topic: "Connection with foreign universities", detail: "detail" },
        { topic: "Academic staff", detail: "detail" },
        { topic: "Location of university", detail: "detail" },
        { topic: "Cost of program", detail: "detail" },
        { topic: "Entry requirements", detail: "detail" },
        { topic: "English scores", detail: "detail" },
        { topic: "Condition of publications", detail: "detail" },
        { topic: "Length of study", detail: "detail" },
        { topic: "Application fee", detail: "detail" },
      ],
    };
  },
  methods: {
    topicVisit(index) {
      //console.log(!this.data[index].disable)
      this.data[index].disable = !this.data[index].disable;
    },
  },
};
</script>


<style scoped>
.card-body {
  padding: 0rem 0rem;
}
.item-header {
  background: #ebeeee;
  color: #161515;
  text-decoration: none;
}
.item-header:hover {
  cursor: pointer;
}
</style>