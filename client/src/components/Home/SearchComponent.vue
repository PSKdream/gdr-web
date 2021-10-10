<template>
  <div
    class="row d-flex align-item-center justify-content-center"
    :style="{
      'background-image': 'url(' + require('../../assets/bg-search.jpg') + ')',
      'background-size': '100%',
    }"
    style="width: 100vw; max-width: 100vw; height: 250px"
  >
    <div class="row mt-4 ms-5 me-5 mb-0" style="width: 100%">
      <div class="col-5 ps-5 pt-4">
        <div>
          <h class="fs-1 mb-0 ">Find Your Grad</h>
          <p class="fs-1 mt-0">School</p>
        </div>
      </div>

      <div class="col-7 mt-2 pe-5 text-end">
        <h5>Graduate Schools Are Seeking Students Like You</h5>
        <p class="fs-6 mb-2">Find Your Fit with our Featured Schools!</p>
        <button type="button" class="btn btn-light btn-sm" v-on:click="$router.push('/model')">
          Explore Your Matched Schools
        </button>
        
          <div class="input-group mt-5" style="width: 100%">
            <input
              type="text"
              class="form-control"
              placeholder="Search for courses in marketing, engineering, business, nursing"
              aria-label="Search for courses"
              aria-describedby="button-addon2"
            />
            <button
              class="btn btn-warning"
              type="button"
              id="button-addon2"
              v-on:click="$router.push('/search')"
            >
              Search
            </button>
          </div>
        
      </div>
    </div>
    <!-- 
    <div class="input-group m-5 mt-4" style="width: 70%">
      <input
        type="text"
        class="form-control"
        placeholder="Search for courses in marketing, engineering, business, nursing"
        aria-label="Search for courses"
        aria-describedby="button-addon2"
      />
      <button
        class="btn btn-warning"
        type="button"
        id="button-addon2"
        v-on:click="$router.push('/search')"
      >
        Search
      </button>
    </div>
    -->
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>