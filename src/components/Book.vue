<template>
  <div class="col-4">
    <div class="card my-3 shadow">
      <img
        :src="`https://picsum.photos/1920/1080?' + ${image}`"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">{{ name }}</h5>
        <p class="card-text" style="height: 77px">
          {{ description }}
        </p>
        <div class="d-grid">
          <a href="#" class="btn btn-dark">Ko'proq o'qish</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: "random",
      required: true,
    },
    name: {
      type: String,
      default: "Kitob",
      required: true,
    },
    description: {
      type: String,
      default: "Qizqacha ma'lumot",
      required: true,
    },
  },
};
</script>

<style scoped>
</style>