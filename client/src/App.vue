<template>
  <div>
    <!-- Nav bar bg-opacity-75-->
    <nav
      class="navbar navbar-dark bg-dark navbar-expand-lg navbar-light bg-light"
    >
      <div class="container">
        <a class="navbar-brand" href="/">GDR System</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav ms-3 me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link " aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item" v-if="pathname !== '/insert-course'">
              <a class="nav-link " href="/model">Model</a>
            </li>
            <li class="nav-item" v-if="false">
              <a class="nav-link " href="/course" >Program (Admin)</a>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
    <!-- Router view -->
    <div class="container">
      <router-view></router-view>
    </div>
  
  </div>
</template>
<script>
export default {
  data() {
    return {
      pathname :  null
    }
  },
  mounted()   {
    this.pathname = window.location.pathname
    //console.log(window.location.pathname)
  },
}
</script>