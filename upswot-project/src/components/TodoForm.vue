<template>

    <form class="todo-form" @submit.prevent="addNewTodo">
        <input v-model.trim="searchField" class="todo-form__input" type="text" placeholder="Enter your todo">
        <button class="btn__add-todo">Add Todo</button>

    </form>

</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
 
data: () => ({
        searchField:'',
    }),
    computed: {
    ...mapState({
        updatedTodo: state => state.todo.updatedTodo,
    })
    },
    methods: {
        ...mapMutations({
            addTodo: "todo/addTodo"
        }),
        addNewTodo() { 
            if (this.searchField === "") {
                alert("Pleas fill the field")
            } else {
                this.addTodo({
                    title: this.searchField,
                    id: Date.now(),
                    completed: false,
                })
                this.searchField = ""
            }
           
        }
    },
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