<template>
  <div class="container">
    <div class="row">
      <div class="col mt-5 px-5">
        <form @click.prevent="onSubmit" class="border rounded p-3">
          <input type="text" v-model="user.email" placeholder="Email">
          <br>
          <input type="text" v-model="user.password" placeholder="Password">
          <br>
          <input type="submit" value="Yuborish">
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex"
export default {
  data() {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions(['fetchToken', 'fetchCategories', 'fetchBooks']),
    onSubmit() {
      this.fetchToken(this.user).then(() => {
        this.fetchCategories()
        this.fetchBooks()
        this.$router.push('/')
      })
    }
  }
};
</script>

<style scoped>
</style>