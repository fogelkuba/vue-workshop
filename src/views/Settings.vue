<template>
  <h1>Settings</h1>
</template>

<script>
export default {
  name: "Settings",
  beforeRouteEnter(to, from, next) {
    const auth = localStorage.getItem("isAdmin") === "true";
    console.log(from);
    if (auth) {
      next();
    } else {
      next({
        path: from.path
      });
    }
  }
};
</script>

<style scoped></style>
