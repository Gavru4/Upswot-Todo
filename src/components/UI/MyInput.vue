<template>
  <input
    @input="$emit('update:inputValue', $event.target.value)"
    ref="focusTextarea"
    class="update-form__input"
    type="text"
    placeholder="{{inputPlaceholder}}"
  />
</template>

<script>
export default {
  name: "my-input",
  props: {
    inputPlaceholder: {
      type: String,
      default: "",
    },
    inputValue: {
      type: String,
      default: null,
    },
  },
  methods: {
    // click() {
    //     this.$emit("click")
    // }
  },
};
</script>
