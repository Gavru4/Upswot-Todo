<template>
  <Header />
  <MainSection />
  <AboutUsSection />
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import MainSection from "@/components/MainSection.vue";
import AboutUsSection from "@/components/AboutUsSection.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Footer,
    Header,
    MainSection,
    AboutUsSection,
  },
};
</script>
