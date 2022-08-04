<template>
    <form class="todo-form" action="submit">
        <input class="todo-form__input" type="text" placeholder="Enter your todo">
        <button class="btn__add-todo">Add Todo</button>
    </form>
</template>

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
}
</style>