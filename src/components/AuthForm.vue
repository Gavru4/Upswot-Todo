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
            <my-button class=" btn__login" text="LOGIN" />
            <my-button class="btn__forgot-password" text="Forgot Password" />
        </form>
        <my-button class="btn__register" text="Register now" />
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
        console.log('this.name :>> ', this.name);
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
        //  this.$router.push('/todo')
         }
     }

            
    },
}
</script>


<style lang="scss" scoped >





@import "@/assets/variables.scss";

// $main-text-color: #333333;
// $background-color: #FFFFFF;
// $login-btn-color: #FFFFFF;
// $login-btn-hover-bgc: #FFFFFF;
// $login-btn-hover-border-color: #0076C0;
// $register-btn-hover-bgc: #FFFFFF;
// $register-btn-hover-border-color: #0076C0;
// $forgot-btn-bgc: #FFFFFF;
// $login-btn-bgc:  #0076C0;
// $forgot-btn-text-color: #056DAE;
// $forgot-btn-hover-color: #056DAE;
// $register-btn-text-color: #333333;
// $register-btn-bgc: #F6F6F6;

.auth-form__wrapper {
    margin: 20px auto 0;

    background: $auth-form-background-color;
    box-shadow: 2px 2px 15px 2px rgba(0, 0, 0, 0.1);

        @media screen and (min-width: 768px) {
            width: 335px;
            margin: 0;
            position: absolute;
            right: -5px;
            bottom: 170px;
        }

        @media screen and (min-width: 1280px) {
            width: 480px;
            right: 0;
        }
}

.auth-form {
    display: flex;
    flex-direction: column;

    padding: 40px 30px 25px;

}

.auth-form__label {
    margin-bottom: 7px;

    font-family: 'Roboto';
    font-weight: 300;
    font-size: 15px;
    line-height: 10px;
   
    color: $main-text-color;
    
    @media screen and (min-width: 768px) {
        font-size: 18px;
        line-height: 21px;
    }
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
    color: $error-input-border-text;
}
.error {
    border-color:$error-input-border-text;
}

.btn__login {
    padding: 5px;
    box-sizing: border-box;

    font-family: 'Roboto';
    font-size: 20px;
    line-height: 25px;

    color:$login-btn-color;
    background:$login-btn-bgc;
   
        @media screen and (min-width: 768px) {
            padding: 12px 10px 12px;
            
            font-size: 25px;
            line-height: 29px;
            
        }
&:hover {
    color:$login-btn-hover-border-color;
    background:$login-btn-hover-bgc;
    border: 2px solid $login-btn-hover-border-color;
    cursor: pointer;
    
}
}

.btn__forgot-password {
    font-family: 'Roboto';

    font-size: 20px;
    line-height: 23px;
    border: none;
    margin-top: 15px;
    background-color: $forgot-btn-bgc;


    color:$forgot-btn-text-color #056DAE;

    
        @media screen and (min-width: 768px) {
            margin-top: 20px;
        }

    &:hover {
        color: $forgot-btn-hover-color;
        cursor: pointer;
    }
}

.btn__register {
    width: 100%;
    height: 50px;
    padding: 10px 0;

    font-family: 'Roboto';
    font-size: 20px;
    line-height: 25px;

    color: $register-btn-text-color;
    border: none;
    background:$register-btn-bgc;

    @media screen and (min-width: 480px) {}
    
        @media screen and (min-width: 768px) {
            width: 100%;
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