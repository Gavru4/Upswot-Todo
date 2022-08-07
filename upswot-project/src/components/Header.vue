<template>

    <section class="header">
        <div class="header__top-wrapper"></div>
        <div class="header__logo-wrapper" :style="{ backgroundImage: createBackgroundString}">
            <my-container>
                <img class="logo" src="../../public/images/logo.png" alt="my-logo" />
            </my-container>
        </div>
    </section>

</template>

<script>
export default {

    data() {
        return {
            angle: '180',
            color1: '#00A9E7',
            color2: '#005B9F'
        }
    },
    computed: {
        createBackgroundString() {
            return `linear-gradient(${this.angle}deg, ${this.color1}, ${this.color2})`;
        }
    }
}
</script>

<style lang="scss" scoped>


 $header-top-bgc:  #333333;
 

.header__top-wrapper {
    height: 53px;
    width: 100vw;
    background-color: $header-top-bgc;
    }

.header__logo-wrapper {
    width: 100vw;

    padding: 15px 0;
}

.logo {
    display: block;
    height: 50px;
    width: 80px;
    margin: 0 auto;

        @media screen and (min-width: 480px) {
            height: 66px;
            width: 103px;
        }
    
        @media screen and (min-width: 768px) {
            height: 66px;
            width: 103px;
            margin: 0;
        }
    
        @media screen and (min-width: 1280px) {
            height: 66px;
            width: 103px;
        }
}
</style>