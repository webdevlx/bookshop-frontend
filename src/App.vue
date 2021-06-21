<template>
  <div id="app">
    <NavBar />

    <div class="container-fluid">
      <div class="row">
        <div class="col-3">
          <Category />
        </div>

        <div class="col-9">
          <router-view />
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Category from "./components/Category.vue";
import Footer from "./components/Footer.vue";
import NavBar from "./components/NavBar.vue";
export default {
  components: { NavBar, Category, Footer },
};
</script>

<style>
</style>
