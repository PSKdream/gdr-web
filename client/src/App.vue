<template>
  <div>
    <!-- Nav bar -->  
    <nav class="navbar navbar-dark bg-secondary justify-content-between flex-nowrap flex-row">
      <div class="container">
        <router-link to="/" class="navbar-brand float-left">Graduate Degree Recommender System</router-link>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link to="/model" class="nav-link pe-3">Model</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link">test2</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Router view -->
    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>
