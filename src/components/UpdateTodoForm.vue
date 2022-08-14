<template>

    <form class="update-form" @submit.prevent="update">
        <!-- <my-input inputValue={{searchField}}  ref="focusTextarea"
            class="update-form__input" /> -->
        <input v-model.trim="searchField" 
        ref="focusTextarea" 
        class="update-form__input"
        type="text" placeholder="Enter your todo" >
        
        <my-button class="btn__update-todo" text="Update todo" />
        <!-- <button class="btn__update-todo">Update Todo</button> -->

    </form>

</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
    computed: {
        searchField: {
            get() {
                return this.inputValue = this.updatedTodo?.title
            },
            set(value) {
                this.inputValue = value
            }
        },
        ...mapState({
            updatedTodo: state => state.todo.updatedTodo,
        })
    },
    methods: {
        ...mapMutations({
            updateTodo: "todo/updateTodo"
        }),
        update() {
            if (this.inputValue === "") {
                alert("Pleas fill the field")
            } else {
                this.updateTodo({
                    title: this.inputValue,
                    id: this.updatedTodo?.id
                    
                })
            }

        },
        
        
    },
    mounted() {
        this.$refs.focusTextarea.focus()
    }
}
</script>

<style lang="scss"  scoped>




@import "@/assets/variables.scss";


// $main-text0color: #333333;


.update-form {
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin: 20px auto 50px;
    background-color: $update-btn-form-bgc;


    border-radius: 5px;
}

.update-form__input {
    height: 60px;
    padding: 10px;

    font-family: 'Roboto';
    font-size: 25px;
    line-height: 29px;

    color: $main-text-color;
}

.btn__update-todo {
    margin: 30px auto 0 ;
    width: 200px;
    padding: 10px;
    border-radius: 10px;

    font-family: 'Roboto';
    font-size: 20px;
    line-height: 20px;

    border: none;

    color: $main-text-color;
    
}
</style>