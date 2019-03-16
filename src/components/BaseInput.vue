<template>
  <label class="input">
    <span class="input-label">{{ label }}</span>
    <input
      v-validate
      :type="type"
      :value="value"
      :placeholder="placeholder"
      v-bind="$attrs"
      @input="emitInput"
      v-on="listeners"
    />
  </label>
</template>

<script>
export default {
  name: "BaseInput",
  inheritProps: false,
  props: {
    type: {
      type: String,
      required: false,
      default: "text"
    },
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
      const { input, ...listeners } = this.$listeners;
      return listeners;
    }
  },
  methods: {
    emitInput(e) {
      this.$emit("input", e.target.value);
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
    font-size: 0.8rem;
    line-height: 0.9rem;
  }
}
.invalid {
  color: red;
  bordercolor: red;
}
</style>
