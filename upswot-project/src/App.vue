<template>

  <section class="header">
    <div class="container">
      <div class="wrap"></div>
      <div class="logo-wrap">
        <img class="logo" src="../public/images/logo.png" alt="my-logo" />
      </div>
    </div>
  </section>
  <section class="main">
    <div class="container">
      <h1>Welcome to
        Business Analytics Online</h1>
    </div>
  </section>

</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
   
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  width: 1200px;
  margin:  0 auto;
  padding-left: 20px;
  padding-right: 20px;
}
.header {
  width: 100vw;
}
.wrap {
  height: 53px;
width: 100vw;
  background-color: #000;
}
.logo-wrap {
height: 149px;
  width: 100vw;
background-color: #00AFED;
}
.logo { 
  height: 66px;
  width: 103px;

  margin-left: 377px;
  padding: 15px;

  color: #fff;
 
}
.main {
  height:  457px;
  width: 100vw;
background-image: url('../public/images/Фон-1x.jpg');
}
</style>
