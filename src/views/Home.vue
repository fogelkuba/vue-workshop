<template>
  <div class="home">
    <h1>Home</h1>
    <div>
      <BaseButton :loading="isLoading">First Button</BaseButton>
      <BaseInput label="Test Input"
                 placeholder="Type here..."
                 :value="inputValue"
                 v-model="inputValue"/>
    </div>
  </div>
</template>

<script>
  import BaseButton from '@/components/BaseButton.vue';
  import BaseInput from '@/components/BaseInput.vue';
  
  export default {
    name: "Home",
    data: () => {
      return {
        inputValue: 'test',
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
