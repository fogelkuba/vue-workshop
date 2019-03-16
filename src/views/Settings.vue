<template>
  <div class="settings">
    <h1>Settings</h1>
    <span> Title: {{ settings && settings.title }}</span>
    <form @submit.prevent="onSubmit()">
      <input v-model="newTitle" type="text" />
      <button class="settings__button" type="submit">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
/* eslint-disable */
  
  export default {
    name: "Settings",
    data: () => {
      return {
        newTitle: ''
      }
    },
    computed: {
      ...mapGetters('settings', [
        'settings',
      ]),
    },
    created() {
      this.$store.dispatch('settings/getSettings');
    },
    methods: {
      ...mapActions('settings', [
        'getSettings',
      ]),
      onSubmit() {
        console.log(this.$store);
        this.$store.dispatch('settings/updateSettings', { ...this.settings, title: this.newTitle });
      },
    },
    beforeRouteEnter(to, from, next) {
      const auth = localStorage.getItem("isAdmin") === "true";
      if (auth) {
        next();
      } else {
        alert(`Access to ${to.path} is restricted.`);
        next({
          path: from.path
        });
      }
    }
  };
</script>

<style scoped></style>
