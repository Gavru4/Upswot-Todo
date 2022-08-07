<template>
    <section class="footer">

        <my-container>
            <div class="footer-nav__wrapper">
                <img class="footer-logo" src="../../public/images/logo.png" alt="my-logo" />

                <nav class="footer-nav">
                    <a class="footer-nav__link" href="">Terms & Conditions</a>
                    <a class="footer-nav__link" href="">Privacy</a>
                    <a class="footer-nav__link" href="">Notice at Collection</a>
                    <a class="footer-nav__link" href="">CA Privacy Hub</a>
                    <a class="footer-nav__link" href="">Contact Us</a>
                    <a class="footer-nav__link" href="">Sitemap</a>
                </nav>
            </div>
            <my-barrier class="barrier__my-style"></my-barrier>
            <p class="copyright">Copyright © 2020 Citigroup Inc. Citibank,
                N.A. Member FDIC. Equal Opportunity Lender.</p>
        </my-container>
    </section>
</template>



<style  lang="scss" scoped>



$copyright-color: #FFFFFF;
 $barrier-border-color: #FFFFFF;
$nav-link-color: #FFFFFF;
$footer-bgc:  #333333;
.footer {
    padding: 30px 0 35px 0;
    background: $footer-bgc;
}

.footer-logo {
        position: absolute;
        right: 50px;
        top: 16px;

        width: 90px;
        height: 90px;
 
    @media screen and (min-width: 480px) {
        position: static;
        margin: 0 auto 20px;
        display: block;

        width: 56px;
        height: 35px;
        }
    
        @media screen and (min-width: 1280px) {
        width: 56px;
        height: 35px;
        margin: 0;
        }
}

.footer-nav__wrapper {
    position: relative;
    margin-bottom: 10px;
   
    @media screen and (min-width: 1280px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    }


}
.footer-nav {
    display: flex; 
    flex-direction: column;

    @media screen and (min-width: 480px) {
        display: block;
    }

}

.footer-nav__link {
    margin-right: 20px;

    font-family: 'Roboto';

    font-weight: 500;
    font-size: 16px;
    line-height: 25px;
    text-decoration: none;

    color:$nav-link-color;
}

.footer-nav__link:last-child {
    margin-right: 0;
}

.barrier__my-style {
    width: 100%;
    margin-bottom: 15px;
    
    border: 1px solid $barrier-border-color;  
    @media screen and (min-width: 1280px) {
    margin-bottom: 30px;
                
}
}
.copyright {
    font-family: 'Roboto';

    font-weight: 500;
    font-size: 12px;
    line-height: 19px;

    color:$copyright-color;
}
</style>