<template>
  <label class="input">
    <span class="input-label">{{label}}</span>
    <input type="text"
           :value="value"
           :placeholder="placeholder"
           v-bind="$attrs"
           @input="emitInput"
           v-on="listeners">
  </label>
</template>

<script>
  export default {
    name: "BaseInput",
    inheritProps: false,
    props: {
      label: {
        type: String,
        required: true
      },
      value: {
        type: String,
        required: true
      },
      placeholder: {
        type: String,
        required: true
      }
    },
    computed: {
      listeners() {
        const {input, ...listeners} = this.$listeners;
        return listeners
      }
    },
    methods: {
      emitInput(e) {
        this.$emit('input', e.target.value)
      }
    }
  };
</script>

<style lang="scss">
  .input {
    margin: 0 10px;
    
    &-label {
      display: block;
      text-align: left;
      font-size: .8rem;
      line-height: .9rem;
    }
  }
</style>
