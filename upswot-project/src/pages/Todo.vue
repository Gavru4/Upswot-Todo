<template>
    <div class="wrapper" :style=" { backgroundImage: createBackgroundString}">
        <my-container class="todo-position">
            <img class="logo" src="../../public/images/logo.png" alt="my-logo" />
            <div class="todo-wrapper">
                <h2 class="todo-header">Thank you ${name}!</h2>
                <TodoForm></TodoForm>

                <!-- <form class="todo-form" action="submit">
                    <input class="todo-form__input" type="text" placeholder="Enter your todo">
                    <button class="btn__add-todo">Add Todo</button>
                </form> -->
                <TodoFilter></TodoFilter>
                 </div>
                    <my-barrier class="barrier__my-style"></my-barrier>
        </my-container>
    </div>
    <div class="bottom-wrapper">

    </div>
</template>

<script>
import TodoForm from "../components/TodoForm.vue";
import TodoFilter from "@/components/TodoFilter.vue";
export default {
    data() {
        return {
            angle: "180",
            color1: "#00A9E7",
            color2: "#005B9F"
        };
    },
    computed: {
        createBackgroundString() {
            return `linear-gradient(${this.angle}deg, ${this.color1}, ${this.color2})`;
        }
    },
    components: { TodoForm, TodoFilter }
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

.barrier__my-style {
width: 1160px;
position: absolute;
top: 440px;
border: 1px solid #000000;
}
</style>