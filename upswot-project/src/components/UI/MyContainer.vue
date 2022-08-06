<template>
<div class="container">
    <slot></slot>
</div>
</template>

<script>


export default {
    name: "my-container"
}
</script>

<style lang="scss">



.container {
    width: 1200px;
    margin: 0 auto;
    padding-left: 20px;
    padding-right: 20px;

    @media (max-width: 480px) {
            
        width: 1200px;
        margin: 0 auto;
        padding-left: 20px;
        padding-right: 20px;
          
    }
    @media (max-width: 480px) {
            
        width: 1200px;
        margin: 0 auto;
        padding-left: 20px;
        padding-right: 20px;
          
    }
    @media (min-width: 480px) {
            
        width: 1200px;
        margin: 0 auto;
        padding-left: 20px;
        padding-right: 20px;
          
    }
}


</style>