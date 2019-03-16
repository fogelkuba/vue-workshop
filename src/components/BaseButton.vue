<template>
  <button class="button" :class="{'disabled': loading}">
    <slot></slot>
    <span v-if="loading" class="loading">
      <img src="@/assets/refresh.png" alt="Loading" class="loading-icon">
    </span>
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    loading: {
      type: Boolean,
      required: false,
      default: false
}
  }
};
</script>

<style lang="scss" scoped>
  .button {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 15px;
    border-radius: 3px;
  }
  .disabled {
    opacity: .5;
    pointer-events: none;
  }
  .loading {
    margin-left: .5rem;
    &-icon {
        max-height: 15px;
        animation: loader 1s infinite;
      
      @keyframes loader {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(359deg);
        }
        }
     }
  }
</style>
