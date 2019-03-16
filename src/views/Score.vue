<template>
  <div>
    <h1>Score</h1>
    {{user}}
  </div>
</template>

<script>
export default {
  name: "Score",
  computed: {
    user() {
      return this.$store.getters['user/user']
    }
  }
};
</script>

<style scoped></style>
