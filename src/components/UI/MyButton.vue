<template>
  <button @click="click">{{ text }}</button>
</template>

<script>
export default {
  name: "my-button",
  props: {
    text: {
      type: String,
      require: true,
    },
  },
  methods: {
    click() {
      this.$emit("click");
    },
  },
};
</script>
