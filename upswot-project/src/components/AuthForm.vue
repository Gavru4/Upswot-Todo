<template>
    <div class="auth-form__wrapper">
        <form class="auth-form" @submit.prevent="onUserLogin">
            <div class="input__wrapper">
                <label class="auth-form__label" for="name">Name</label>
                <input v-model.trim="name" class="auth-form__input" @focus="validationNameError = false"
                    v-bind:class="{ error: validationNameError }" id="name" type="text" name="name">
                <p v-if="validationNameError" class="error__input-text">
                    <img class="error-svg" src="../../public/images/Vector.svg" alt="error logo" height="11" width="11">

                    Enter name
                </p>

            </div>
            <div class="input__wrapper">
                <label class="auth-form__label" for="password">Password</label>
                <input v-model.trim="password" class="auth-form__input"
                    v-bind:class="{ error: validationPasswordError }" @focus="validationPasswordError = false"
                    id="password" type="password" name="password">
                <p v-if="validationPasswordError" class="error__input-text">
                    <img class="error-svg" src="../../public/images/Vector.svg" alt="error logo" height="11" width="11">
                    Enter password
                </p>
            </div>
            <button class="btn__login">LOGIN</button>
            <button class="btn__forgot-password">Forgot Password</button>
        </form>
        <button class="btn__register">Register now</button>
    </div>
</template>

<script>

import { mapMutations, mapGetters } from "vuex";
export default {
    data() {
        return {
            name: "",
            password: "",
            validationNameError: false,
            validationPasswordError: false
        }
    },
    computed: {
        ...mapGetters({
            userLoginInfo: "userLoginInfo"
        })
       
    },
 methods: {
     ...mapMutations({
         loginUser: "loginUser"
     }),

     async onUserLogin() {
     if(this.password === "" && this.name === ""){
            this.validationPasswordError = true
            this.validationNameError = true
        }else  if (this.name === "") {
            this.validationNameError = true
            
         } else if (this.password === ""){
             this.validationPasswordError = true

         } 
         else {
             await this.loginUser({ login: this.name, password: this.password })
             this.name = "",
                this.password = ""

             this.userLoginInfo ? this.$router.push('/todo') : this.$router.push('/login')
         }
     }
            
    },
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
.input__wrapper {
    display: flex;
    flex-direction: column;
 margin-bottom: 40px;
}
.auth-form__input {
    height: 53px; 
   margin-bottom: 5px;
    padding: 15px;

    font-family: 'Roboto';
    font-size: 18px;
    line-height: 21px;

    color: #333333;

    background: #FFFFFF;
    border: 1px solid #9A9A9A;
}
.auth-form__input:hover,
.auth-form__input:focus {
    border-color:  #101010;
}
.error__input-text {
    font-family: 'Roboto';
   
    font-size: 16px;
    line-height: 19px;
    color: #D60000;
}
.error {
    border-color: #D60000;
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