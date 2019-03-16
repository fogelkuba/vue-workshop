<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/vote">Vote</router-link>
      <router-link to="/score">Score</router-link>
      <router-link to="/settings">Settings</router-link>
      <button @click="toggleAuth">Toggle Admin</button>
    </div>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toggleAuth() {
      const auth = localStorage.getItem("isAdmin") === "true";

      if (auth) {
        localStorage.setItem("isAdmin", "false");
      } else {
        localStorage.setItem("isAdmin", "true");
      }
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-bottom: 1px solid #eee;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
