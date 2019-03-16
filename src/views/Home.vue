<template>
  <div class="home">
    <h1>Home</h1>
    <BaseButton :loading="isLoading">First Button</BaseButton>
  </div>
</template>

<script>
  import BaseButton from '@/components/BaseButton.vue';
  import BaseInput from '@/components/BaseInput.vue';
  
  
export default {
  name: "Home",
  data: () => {
    return {
      isLoading: false
    }
  },
  components: {
    BaseButton,
    BaseInput
  },
  mounted() {
    console.log(this.$listeners);
  }
};
</script>
