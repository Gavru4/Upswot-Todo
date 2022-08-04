<template>
    <!-- <li>
 
            <input type="checkbox" v-on:change="todo.completed = !todo.completed">
            <strong>{{ index + 1 }}</strong> -->
    <!-- {{ todo.title | uppercase }}
        <button class="rm" v-on:click="$emit('remove-todo', todo.id)">&times;</button>
    </li> -->


    <li class="todo-item" v-for="todo in todoList">
        <div v-bind:class="{ done: todo.completed }">
            <input class="todo-checkbox" type="checkbox" v-on:change="todo.completed = !todo.completed">
            {{ todo.title }}
        </div>
        <div>
            <button class="update__btn">Update todo</button>
            <button class="del__btn" v-on:click="delete">Delete todo</button>
        </div>
    </li>
</template>
<!-- v-on:click="$emit('delete', todo.id)" -->
<script>

import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
    computed: mapGetters(["todoList"]),
    methods: {
        ...mapMutations(["deleteTodo"]),

        delete() {
            console.log('id :>> ');
            // this.deleteTodo(id)
        }
    }
}
</script>

<style scoped>











.todo-item {
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-family: 'Roboto';
    font-size: 25px;
    line-height: 29px;
    color: #333333;
    
    padding: 15px 19px;
    margin-bottom: 20px;

    border: 1px solid #ccc;
 
}

.update__btn {
    padding:10px;
    border-radius: 10px;

    font-family: 'Roboto';
    font-size: 20px;
    line-height: 20px;

    border: none;
    background: #00A9E7;;
    color: #fff;
  
}
.del__btn {
    padding:10px;
    margin-left: 20px;
    border-radius: 10px;

    font-family: 'Roboto';
    font-size: 20px;
    line-height: 20px;

    border: none;
    background: red;
    color: #fff;
  
}

.todo-checkbox {
width: 20px;
height: 20px;
margin-right: 15px;   
}

.done {
    text-decoration: line-through;
}
</style>