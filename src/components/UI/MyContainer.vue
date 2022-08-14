<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "my-container",
};
</script>

<style lang="scss">
.container {
  width: 100%;
  margin: 0 auto;
  padding-left: 10px;
  padding-right: 10px;

  @media screen and (min-width: 480px) {
    width: 480px;
    padding-left: 20px;
    padding-right: 20px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1280px) {
    width: 1200px;
  }
}
</style>
