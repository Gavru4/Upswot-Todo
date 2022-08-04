<template>
    <form class="todo-form" @submit.prevent="addNewTodo">
        <input class="todo-form__input" type="text" placeholder="Enter your todo" v-model="title">
        <button class="btn__add-todo">Add Todo</button>
    </form>
</template>
<script>

import { mapActions,mapMutations } from "vuex";
export default {

    data() {
        return {
            title:"",
        }
    },
    methods: {
        // ...mapActions(["addNewTodo"]),
        ...mapMutations(["addTodo"]),
        addNewTodo() {
            if (this.title === "") {
                alert("Pleas fill the field")
            } else {
                this.addTodo({
                    title: this.title,
                    id: Date.now(),
                    completed: false,
                })
                this.title = ""
            }
           
        }
    },

    async mounted() {
        // this.addNewTodo({
        //     id: 7,
        //     title: "tttttt",
        //     completed: true,
        // })
    }
}
</script>

<style>


.todo-form {
    width: 700px;
    padding: 20px;
    margin: 20px auto 50px;
    background-color: #00A9E7;


    border-radius: 5px;
}

.todo-form__input {
    height: 40px;
    padding: 5px;

    font-family: 'Roboto';
    font-size: 25px;
    line-height: 29px;

    color: #333333;
    /* border: 2px solid #9A9A9A; */
}

.btn__add-todo {
    margin-left: 70px;
    padding: 10px;
    border-radius: 10px;
    
    font-family: 'Roboto';
    font-size: 20px;
    line-height: 20px;
    
    border: none;
        
    color: #333333;;
}
</style>