<template>
  <div class="col-12 my-3">
    <nav aria-label="...">
      <ul class="pagination">
        <li class="page-item disabled">
          <a class="page-link" href="#" tabindex="-1" aria-disabled="true"
            >Previous</a
          >
        </li>
        <li class="page-item">
          <a @click="loadBooksByPage(1)" class="page-link" href="#">1</a>
        </li>
        <li class="page-item" aria-current="page">
          <a @click="loadBooksByPage(2)" class="page-link" href="#">2</a>
        </li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#">Next</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["fetchBooks"]),
    loadBooksByPage(page) {
      this.fetchBooks({ page: page });
    },
  },
};
</script>

<style scoped>
</style>