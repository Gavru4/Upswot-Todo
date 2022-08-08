<template>
    <Header/>
    <MainSection/>
    <AboutUsSection/>
    <Footer/>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import MainSection from "@/components/MainSection.vue";
import AboutUsSection from "@/components/AboutUsSection.vue";



export default {


    components: {
        Footer,
        Header,
        MainSection,
        AboutUsSection
    },


}
</script>