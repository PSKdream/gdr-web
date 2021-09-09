<template>
  <div class="row justify-content-center">
    <SearchComponent></SearchComponent>
    <CardComponent></CardComponent>
    <MemberComponent></MemberComponent>
    <div class="text-center footer">
      <p>© 2021 Graduate Degree Recommender System</p>
    </div>
  </div>
</template>

<script>
import SearchComponent from "./Home/SearchComponent.vue";
import CardComponent from "./Home/CardComponent.vue";
import MemberComponent from "./Home/MemberComponent.vue";
export default {
  data() {
    return {};
  },
  components: {
    SearchComponent,
    CardComponent,
    MemberComponent,
  },
};
</script>

<style scoped>
.footer {
  width: 100vw;
  max-width: 100vw;
  height: 1.5em;
  background: #e6e6e6;
}
</style>



