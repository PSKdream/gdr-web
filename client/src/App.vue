<template>
  <div>
    <!-- Nav bar bg-opacity-75-->
    <nav
      class="
        navbar navbar-dark
        bg-dark 
        justify-content-between
        flex-nowrap flex-row
      "
    >
      <div class="container">
        <router-link to="/" class="navbar-brand float-left"
          >Graduate Degree Recommender System</router-link
        >
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link to="/model" class="nav-link pe-3 text-white"
              >Model</router-link
            >
          </li>

          <li class="nav-item">
            <router-link to="/course" class="nav-link text-white">Course(Admin)</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Router view -->
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

