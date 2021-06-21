<template>
  <div class="row">
    <Book
      v-for="book in getBooks"
      :key="book.id"
      :image="`'${book.id}'`"
      :name="book.name"
      :description="book.text"
    />

    <Pagination />
  </div>
</template>

<script>
import Book from "../components/Book.vue";
import Pagination from "../components/Pagination.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  components: { Pagination, Book },
  computed: {
    ...mapGetters(["getBooks"]),
  },
  methods: {
    ...mapActions(["fetchBooks"]),
  },
  mounted() {
    this.fetchBooks()
      .then(() => {
        console.log("kitoblar yangilandi");
      })
      .catch(() => {
        console.log("Kitoblarni yangilashda xatolik yuz berdi");
      });
  },
};
</script>

<style scoped>
</style>