<template>
  <div class="col-md-11 mt-5">
    <div class="border-dark border-bottom border-2">
      <h3 class="md-0">Not sure what you want to study?</h3>
    </div>
    <div class="mt-3 d-flex" style="justify-content: space-between">
      <!-- Left button -->
      <button
        class="text-start bi bi-arrow-left-circle"
        type="button"
        style="border: none; background: none"
      ></button>

      <!-- Card -->
      <div class="d-flex slide-card">
        <div class="slide-card-content">
          <div
            class="m-3 border image-card"
            style="background-size: cover; filter: blur(1.5px)"
            :style="{
              backgroundImage:
                'url(' + require('@/assets/programmer.jpg') + ')',
            }"
          ></div>
          <div class="content-card">
            <div
              class="container d-flex align-items-center"
              style="height: 200px"
            >
              <div class="text-center">
                <h5 class="text-light">Computing and information technology</h5>
                <button type="button" class="btn btn-warning btn-sm">
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="slide-card-content">
          <div
            class="m-3 border image-card"
            style="background-size: cover; filter: blur(1.5px)"
            :style="{
              backgroundImage:
                'url(' + require('@/assets/programmer.jpg') + ')',
            }"
          ></div>
          <div class="content-card">
            <div
              class="container d-flex align-items-center"
              style="height: 200px"
            >
              <div class="text-center">
                <h5 class="text-light">Computing and information technology</h5>
                <button type="button" class="btn btn-warning btn-sm">
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="slide-card-content">
          <div
            class="m-3 border image-card"
            style="background-size: cover; filter: blur(1.5px)"
            :style="{
              backgroundImage:
                'url(' + require('@/assets/programmer.jpg') + ')',
            }"
          ></div>
          <div class="content-card">
            <div
              class="container d-flex align-items-center"
              style="height: 200px"
            >
              <div class="text-center">
                <h5 class="text-light">Computing and information technology</h5>
                <button type="button" class="btn btn-warning btn-sm">
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right button -->
      <button
        class="text-end bi bi-arrow-right-circle"
        type="button"
        style="border: none; background: none"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        content : this.$refs
    };
  },
  methods: {
    changeContentScroll(pos) {
      let currentPos = this.content.scrollTop();
      this.content.scrollTop(currentPos + pos);
    },
  },
};
</script>


<style scoped>
.slide-card {
  justify-content: space-between;
  width: 90%;
  overflow-x: auto;
}
/* Hide scrollbar for Chrome, Safari and Opera */
.slide-card::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.slide-card {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.slide-card-content {
  position: relative;
}
.image-card {
  width: 200px;
  height: 200px;
}
.content-card {
  margin: 1rem;
  width: 200px;
  height: 200px;
  position: absolute;
  top: 0px;
}
</style>