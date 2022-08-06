<template>
    <div v-if="userLoginInfo">
        <div class="wrapper" :style="{ backgroundImage: createBackgroundString }">
            <my-container class="todo-position">
                <img class="logo" src="../../public/images/logo.png" alt="my-logo" />
                <div class="todo-wrapper">
                    <h2 class="todo-header">Thank you {{userName}}!</h2>
                    <TodoForm />
                    <div class="additional-features">
                        <TodoFilter />
                        <SortedTodo class="sorted__todo" />

                    </div>

                    <TodoList />

                </div>
                <my-barrier class="barrier__my-style"></my-barrier>
            </my-container>
        </div>

        <div class="bottom-wrapper"></div>
    </div>
    <div v-else>
        <p class="redirect__text">You are not registered, at first register pleas</p>
        <router-link to="/login" class="redirect__btn">
            To Register page
        </router-link>
    </div>

</template>

<script>
import TodoForm from "@/components/TodoForm.vue";
import TodoFilter from "@/components/TodoFilter.vue";
import TodoList from "@/components/TodoList.vue";
import SortedTodo from "../components/SortedTodo.vue";

import { mapGetters,mapState } from "vuex";
export default {
    data() {
        return {
            angle: "180",
            color1: "#00A9E7",
            color2: "#005B9F"
        };
    },
    computed: {
        ...mapState({
            userName: state=>state.userName
        }),
        ...mapGetters({
            userLoginInfo: "userLoginInfo"
        }),
        createBackgroundString() {
            return `linear-gradient(${this.angle}deg, ${this.color1}, ${this.color2})`;
        }
    },
    components: { TodoForm, TodoFilter, TodoList, SortedTodo }
}
</script>

<style scoped>







.wrapper {
    height: 797px;
    padding-top: 65px;

    /* background: linear-gradient(180deg, #00AFED, #00569A); */
}

.logo {
    display: block;
    width: 186px;
    height: 119px;
    margin: 0 auto 65px;
}
.todo-position {
    position: relative;
}
.todo-wrapper {
    min-height: 660px;
    padding: 30px;
    /* position: absolute;
    top: 0;
    left: 0; */

    background: #FFFFFF;
}
.bottom-wrapper {
    height: 100vh;
    background-color: #E5E5E5;
}
.todo-header {
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 60px;
    line-height: 94px;
    /* identical to box height, or 94px */

    text-align: center;

    color: #333333;
}
.additional-features {
    display: flex;
    justify-content: space-around;
}
.sorted__todo{
    width: 200px;
    height: 60px;
    padding: 15px;
    
    font-family: 'Roboto';
    font-size: 22px;
    line-height: 20px;
    
    border-radius: 5px;
        
    background-color: #00A9E7;
}
.barrier__my-style {
width: 1160px;
position: absolute;
top: 440px;
border: 1px solid #000000;
}

.redirect__btn {
    display: flex;
    font-family: 'Roboto';
    font-weight: 700;
    Font-size: 40px;
    line-height: 94px;     
    justify-content: center;
    text-decoration: none;
}
.redirect__text {
    font-family: 'Roboto';
    font-weight: 700;
    Font-size: 40px;
    line-height: 94px;
    text-align: center;
}

</style>