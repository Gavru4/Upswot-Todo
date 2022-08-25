<template>
  <button
    :class="type"
    v-bind:class="{ button_size_full: fullWidth }"
    @click="click"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "my-button",
  props: {
    text: {
      type: String,
      require: true,
    },
    type: {
      type: String,
      require: true,
    },
    fullWidth: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    click() {
      this.$emit("click");
    },
  },
};
</script>
<!-- 
//   Тут немного не правильно, по сути стили кнопки должны быть инкапсулированны в самом компоненте
  
//   Как лучше сделать, добавляешь новый пропс "type" или "variant" и это будет какая-то строка, которыю ты будешь передавать из вне
//   Если тебе нужна кнопка, которая выглядит по другому, добавляешь новый тип, допустим type="outline"
//   После в самой кнопке прокидываешь этот тип как класс
//   <button class="my-button button_type_outline" @click="click">{{ text }}</button>
//   и в зависимости от класса меняешь стилистику
  
//   Еще например у тебя есть кнопка, сделанная через падинги, но в каком-то кейсе тебе нужно чтобы кнопка занимала всю ширину
//   Создаешь пропс fullWidth, если он true - прокидываешь новый класс button_size_full
//   И по этому классу делаешь 
//   .button_size_full {
//     width: 100%
//   }

//   Это я все к тому, что нужно учиться инкапсулировать все что касается компонента, внутри самого компонента, а иначе какой в этом смысл
//  -->

<style lang="scss" scoped>
@import "@/assets/variables.scss";

.button_size_full {
  width: 100%;
}

.btn__login {
  padding: 5px;
  box-sizing: border-box;

  font-family: $main-font-family;
  font-size: 20px;
  line-height: 25px;

  color: $login-btn-color;
  background: $login-btn-bgc;

  @media screen and (min-width: 768px) {
    padding: 12px 10px 12px;

    font-size: 25px;
    line-height: 29px;
  }
  &:hover {
    color: $login-btn-hover-border-color;
    background: $login-btn-hover-bgc;
    border: 2px solid $login-btn-hover-border-color;
    cursor: pointer;
  }
}

.btn__forgot-password {
  margin-top: 15px;
  border: none;

  font-family: $main-font-family;
  font-size: 20px;
  line-height: 23px;

  background-color: $forgot-btn-bgc;
  color: $forgot-btn-text-color;

  @media screen and (min-width: 768px) {
    margin-top: 20px;
  }

  &:hover {
    color: $forgot-btn-hover-color;
    cursor: pointer;
  }
}

.btn__register {
  height: 50px;
  padding: 10px 0;
  border: none;

  font-family: "Roboto";
  font-size: 20px;
  line-height: 25px;

  color: $register-btn-text-color;
  background: $register-btn-bgc;

  @media screen and (min-width: 768px) {
    height: 63px;
    padding: 17px 0;

    font-size: 25px;
  }
  &:hover {
    color: $register-btn-hover-border-color;
    background: $register-btn-hover-bgc;
    border: 2px solid $register-btn-hover-border-color;
    cursor: pointer;
  }
}
</style>
