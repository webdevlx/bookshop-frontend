<template>
  <div
    v-if="getCategories.length > 0"
    class="list-group my-3"
    id="list-tab"
    role="tablist"
  >
    <a
      class="list-group-item list-group-item-action active"
      id="list-home-list"
      data-bs-toggle="list"
      href="#list-home"
      role="tab"
      aria-controls="list-home"
      @click="loadBooksByCategoryId(undefined)"
      >Barchasi</a
    >
    <a
      v-for="category in getCategories"
      :key="category.id"
      class="list-group-item list-group-item-action"
      id="list-profile-list"
      data-bs-toggle="list"
      href="#list-profile"
      role="tab"
      aria-controls="list-profile"
      @click="loadBooksByCategoryId(category.id)"
      >{{ category.name }}</a
    >
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["getCategories"]),
  },
  methods: {
    ...mapActions(["fetchCategories", "fetchBooks"]),
    loadBooksByCategoryId(categoryId) {
      this.fetchBooks({ category: categoryId });
    },
  },
  mounted() {
    this.fetchCategories()
      .then(() => {
        console.log("Kategoriyalar yangilandi");
      })
      .catch(() => {
        console.log("Kategoriyalarni yangilashda xatolik yuz berdi");
      });
  },
};
</script>

<style scoped>
</style>