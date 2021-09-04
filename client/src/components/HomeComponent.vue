<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h1 class="text-center">Home page</h1>
      <div class="mt-4 text-center">
        <button type="button" class="btn btn-warning" @click="this.$router.push('/model')">model</button>
      </div>
      <div class="mt-4 text-center">
        <button type="button" class="btn btn-info" @click="this.$router.push('/course')">
          course management
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>




