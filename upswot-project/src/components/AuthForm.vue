<template>
    <div class="auth-form__wrapper">
        <form class="auth-form" @submit.prevent="onUserLogin">
            <label class="auth-form__label" for="name">Name:</label>
            <input v-model="name" class="auth-form__input" id="name" type="text" name="name">

            <label class="auth-form__label" for="password">Password:</label>
            <input v-model="password" class="auth-form__input" id="password" type="password" name="password">

            <button class="btn__login">LOGIN</button>
            <button class="btn__forgot-password">Forgot Password</button>
        </form>
        <button class="btn__register">Register now</button>
    </div>
</template>

<script>

import { computed } from "@vue/reactivity";
import { mapMutations, mapGetters } from "vuex";
export default {
    data() {
        return {
            name: "",
            password: ""
        }
    },
    computed: {
        ...mapGetters({
            isAuth: "isAuth"
        })
       
    },
 methods: {
     ...mapMutations({
         loginUser: "loginUser"
     }),

    onUserLogin() {
        this.loginUser({ login: this.name, password: this.password })
        this.name = "",
        this.password= ""
    }
    }

}
</script>


<style>



.auth-form__wrapper {
    width: 480px;
    position: absolute;
    right: 0;
    bottom: 170px;

    background: #FFFFFF;
    box-shadow: 2px 2px 15px 2px rgba(0, 0, 0, 0.1);
}

.auth-form {
    display: flex;
    flex-direction: column;

    padding: 40px 30px 25px;

}

.auth-form__label {
    margin-bottom: 7px;
}

.auth-form__input {
    height: 53px;
    margin-bottom: 40px;
    padding: 15px;

    font-family: 'Roboto';
    font-size: 18px;
    line-height: 21px;

    color: #333333;

    background: #FFFFFF;
    border: 1px solid #9A9A9A;
}

.btn__login {
    padding: 12px 10px 12px;
    font-family: 'Roboto';

    font-size: 25px;
    line-height: 29px;

    color: #FFFFFF;

    background: #0076C0;
}

.btn__forgot-password {
    font-family: 'Roboto';

    font-size: 20px;
    line-height: 23px;
    border: none;
    margin-top: 20px;
    background-color: #fff;


    color: #056DAE;
}

.btn__register {
    width: 100%;
    height: 63px;
    padding: 17px 0;

    font-family: 'Roboto';
    font-size: 25px;
    line-height: 29px;

    color: #333333;
    border: none;



    background: #F6F6F6;
}
</style>