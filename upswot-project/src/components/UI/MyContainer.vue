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

<style>
.container {
    width: 1200px;
    margin: 0 auto;
    padding-left: 20px;
    padding-right: 20px;
}
</style>