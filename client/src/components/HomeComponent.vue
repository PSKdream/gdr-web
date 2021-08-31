<template>
  <div class="row justify-content-center">
    <div class="col-md-6 text-center">
      <h1>Home page</h1>
      <div class="mt-4">
        <button type="button" class="btn btn-warning" @click="this.$router.push('/model')">model</button>
      </div>
      <div class="mt-4">
        <button type="button" class="btn btn-info" @click="this.$router.push('/insert-course')">
          insert data
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["guid"],
  data() {
    return {};
  },
};
</script>

