<template>
  <div class="row justify-content-center">
    <SearchComponent></SearchComponent>
    <div>
      <div class="d-flex justify-content-center mt-3">
        <div>
          <a href="/model">
            <div class="m-3 image-card" style="background: #bae1ff">
              <h4
                class="text-center text-dark"
                style="text-decoration: none; padding-top: 32px"
              >
                Model
              </h4>
            </div>
          </a>
        </div>

        <div>
          <a href="/ads">
            <div class="m-3 image-card" style="background: #baffc9">
              <h4
                class="text-center text-dark"
                style="text-decoration: none; padding-top: 32px"
              >
                Ads
              </h4>
            </div>
          </a>
        </div>

        <div>
          <a href="/events">
            <div class="m-3 image-card" style="background: #ffdfba">
              <h4
                class="text-center text-dark"
                style="text-decoration: none; padding-top: 32px"
              >
                Events
              </h4>
            </div>
          </a>
        </div>

        <div>
          <a href="/forum">
            <div class="m-3 image-card" style="background: #ffffba">
              <h4
                class="text-center text-dark"
                style="text-decoration: none; padding-top: 32px"
              >
                Forum
              </h4>
            </div>
          </a>
        </div>
      </div>
    </div>
    <CardComponent></CardComponent>
    <MemberComponent></MemberComponent>
    <div class="text-center footer">
      <p>© 2021 Graduate Degree Recommender System</p>
    </div>
  </div>
</template>

<script>
import SearchComponent from "./SearchComponent.vue";
import CardComponent from "./CardComponent.vue";
import MemberComponent from "./MemberComponent.vue";
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
.image-card {
  width: 100px;
  height: 100px;
}
a {
  text-decoration: none;
}
</style>



