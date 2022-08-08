<template>

    <form class="todo-form" @submit.prevent="addNewTodo">
        <div class="input-wrapper">
            <input v-model.trim="searchField" @focus="todoEnterError = false" class="todo-form__input" type="text"
                placeholder="Enter your todo">
            <p v-if="todoEnterError" class="error__input-text">
                <img class="error-svg" src="../../public/images/Vector.svg" alt="error logo" height="11" width="11">
                Please enter todo
            </p>
        </div>
        <div>
            <button class="btn__add-todo">Add Todo</button>
        </div>

    </form>

</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
 
data: () => ({
        searchField: '',
        todoEnterError: false,
    
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
                this.todoEnterError = true
                // alert("Pleas fill the field")
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

<style lang="scss" scoped>












$btn-hover-bgc: #FFFFFF;
$btn-hover-border-color: #0076C0;
$main-text0color: #333333;
$button-bgc: #45b7ff;
 $todo-gradient-top-bgc: #00AFED;
 $todo-gradient-bottom-bgc: #00569A;

.todo-form { 
    display: flex;
    align-items: stretch;
    flex-direction: column;
    min-height: 135px;

    padding: 15px;
    margin: 15px auto;
           
    background: linear-gradient(180deg, $todo-gradient-top-bgc, $todo-gradient-bottom-bgc );
    border-radius: 5px;

    @media screen and (min-width: 1280px) {
        width: 700px;
        padding: 20px;
        margin: 20px auto 50px;
        background-color: #00A9E7;
        
        border-radius: 5px;
}

   
}
.input-wrapper {
    height: 50px;
    margin-bottom: 15px;
}

.todo-form__input {
    width: 100%;
    height: 30px;
    padding: 5px;
    margin-bottom: 5px;

    font-family: 'Roboto';
    font-size: 20px;
    line-height: 20px;

    color: $main-text0color;
      
    @media screen and (min-width: 1280px) {
    height: 40px;
    padding: 5px;
                        
    font-size: 25px;
    line-height: 29px;                  
}
            
  
}

.btn__add-todo {
    display: block;
    margin: 0 auto ;
    padding: 7px;
    box-sizing: border-box;
    
    font-family: 'Roboto';
    font-size: 15px;
    line-height: 15px;

    border: none;
  
    border-radius: 10px;
    background-color:$button-bgc ;
    color: $main-text0color;
   
    @media screen and (min-width: 1280px) {
    padding: 10px;

    font-size: 20px;
    line-height: 20px;
                
    border: none;        
      
}

 &:hover {
    color: $btn-hover-border-color;
    background: $btn-hover-bgc;

    border-color: $btn-hover-border-color;
    box-sizing: border-box;
    

 }
 .error__input-text {
     font-family: 'Roboto';
     position: absolute;
     z-index: 3;

     font-size: 16px;
     line-height: 19px;
     color: #D60000;
 }

}
</style>