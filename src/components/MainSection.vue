<template>
    <section class="main">
        <my-container>
            <h1 class="heading">Welcome to <br /> Business Analytics Online</h1>
        </my-container>
    </section>
</template>

<style lang="scss" scoped>



$main-header-color: #FFFFFF;


.main {
    background-image: url('../../public/images/Фон-1x.jpg');
    background-position: center;
    background-size: cover;
}

.heading {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    
    font-size: 20px;
    line-height: 35px;
    text-align: right;

    padding-top: 30px;
    padding-bottom: 30px;

    color: $main-header-color;

    @media screen and (min-width: 480px) {
        font-size: 25px;
        line-height: 40px;

        padding-top: 35px;
        padding-bottom: 35px;          
    }
        @media screen and (min-width: 768px) {
            font-size: 30px;
            line-height: 44px;
            text-align: left;

            padding-top: 80px;
            padding-bottom: 80px;
        }
    
        @media screen and (min-width: 1280px) {
            font-size: 55px;
            line-height: 86px;
            padding-top: 215px;
            padding-bottom: 70px;
        
        }
}
</style>