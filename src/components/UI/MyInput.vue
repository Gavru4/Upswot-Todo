<template>
  <label for="input" :class="labelClass"><slot></slot></label>
  <!-- <label v-if="label" :for="for" :class="labelClass">{{ label }}</label> -->
  <input
    :class="inputClass"
    v-bind:class="{ error: validationPasswordError }"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    v-bind="$attrs"
    :type="type"
    name="input"
  />
</template>

<script>
export default {
  name: "my-input",

  props: {
    type: {
      type: String,
      default: "text",
    },
    modelValue: {
      type: String,
      default: "",
    },
    inputClass: {
      type: String,
      default: "",
    },
    labelClass: {
      type: String,
      default: "",
    },
    validationNameError: {
      type: Boolean,
      default: false,
    },
    validationPasswordError: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<!-- Лучше поступить также как я описал в кнопке -->

<style lang="scss" scoped>
@import "@/assets/variables.scss";

// .checkbox-wrapper {
//   display: flex;
//   align-items: center;
// }
// .todo-checkbox {
//   width: 20px;
//   height: 20px;
//   margin-right: 15px;
// }
.auth-form__label {
  margin-bottom: 7px;

  font-family: $main-font-family;
  font-weight: 300;
  font-size: 15px;
  line-height: 10px;

  color: $main-text-color;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 21px;
  }
}

.auth-form__input {
  height: 53px;
  margin-bottom: 5px;
  padding: 15px;

  font-family: $main-font-family;
  font-size: 18px;
  line-height: 21px;

  color: $main-text-color;
  background: $auth-form-background-color;
  border: 1px solid #9a9a9a;
}
.auth-form__input:hover,
.auth-form__input:focus {
  border-color: #101010;
}

.todo-form__input {
  width: 100%;
  height: 30px;
  padding: 5px;
  margin-bottom: 5px;

  font-family: $main-font-family;
  font-size: 20px;
  line-height: 20px;

  color: $main-text-color;

  @media screen and (min-width: 1280px) {
    height: 40px;
    padding: 5px;

    font-size: 25px;
    line-height: 29px;
  }
}

.todo-filter__input {
  display: block;
  height: 45px;
  padding: 10px;
  border-radius: 5px;

  font-family: $main-font-family;
  font-size: 20px;
  line-height: 25px;

  background-color: $filter-bgc;

  @media screen and (min-width: 1280px) {
    display: block;
    width: 600px;
    height: 60px;
    padding: 20px;

    font-size: 25px;
    line-height: 29px;
  }
}
.error {
  border-color: $error-input-border-text;
}
</style>
