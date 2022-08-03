<template>

<Header></Header>
<MainSection></MainSection>
<AboutUsSection></AboutUsSection>
<Footer></Footer>

</template>

<script>
import Footer from "@/components/Footer.vue";
import Header from "./components/Header.vue";
import MainSection from "./components/MainSection.vue";
import AboutUsSection from "./components/AboutUsSection.vue";



export default {
 

  components: {
    Footer,
    Header,
    MainSection,
    AboutUsSection
},

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
</style>
