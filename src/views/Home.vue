<template>
  <div class="home">
    <h1>Home</h1>
    <div>
      <BaseButton :loading="isLoading">First Button</BaseButton>
      <BaseInput
        v-model="inputValue"
        label="Test Input"
        placeholder="Type here..."
        :value="inputValue"
      />
      <BaseInput
        v-model="mailValue"
        label="Test Input"
        type="email"
        placeholder="Type here..."
        :value="mailValue"
      />
    </div>
  </div>
</template>

<script>
import BaseButton from "@/components/BaseButton.vue";
import BaseInput from "@/components/BaseInput.vue";

export default {
  name: "Home",
  components: {
    BaseButton,
    BaseInput
  },
  data: () => {
    return {
      inputValue: "test",
      mailValue: "mail here...",
      isLoading: false
    };
  },
  mounted() {
    console.log(this.$listeners);
  }
};
</script>
