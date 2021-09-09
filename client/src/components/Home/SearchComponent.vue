<template>
    <div
      class="container d-flex align-items-center justify-content-center"
      :style="{
        'background-image': 'url(' + require('../../assets/bg-search.jpg') + ')',
        'background-size': '100%',
      }"
      style="width: 100vw; max-width: 100vw; height: 250px"
    >
      <div class="input-group m-5" style="width: 70%">
        <input
          type="text"
          class="form-control"
          placeholder="Search for courses in marketing, engineering, business, nursing"
          aria-label="Search for courses"
          aria-describedby="button-addon2"
        />
        <button class="btn btn-warning" type="button" id="button-addon2" v-on:click="$router.push('/search')">
          Search
        </button>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
};
</script>