<template>
  <span class="barrier"></span>
</template>

<!-- Не знаю что это, но уверен что это лишнее, выносить 1 строчку кода в компонент-->

<!-- 
  У тебя есть класс .barrier
  Можешь просто юзать его 
  <div></div>
  <span class="barier"></span>
  <div></div>
  <span class="barier"></span>
  <div></div>
  <span class="barier"></span>

  В этом коде все нормально
-->

<script>
export default {
  name: "my-barrier",
};
</script>
<style>
.barrier {
  display: inline-block;
  height: 0px;
}
</style>
