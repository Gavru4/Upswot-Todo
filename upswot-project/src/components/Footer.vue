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
           <my-barrier class="barrier-color"></my-barrier>
            <p class="copyright">Copyright © 2020 Citigroup Inc. Citibank,
                N.A. Member FDIC. Equal Opportunity Lender.</p>
        </my-container>
    </section>
</template>



<style scoped>




.footer {
    padding: 30px 0 35px 0;
    background: #333333;
}

.footer-logo {
    width: 55.99px;
    height: 35px;

    color: #fff;
}

.footer-nav__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
}

.footer-nav__link {
    margin-right: 20px;

    font-family: 'Roboto';

    font-weight: 500;
    font-size: 16px;
    line-height: 25px;
    text-decoration: none;



    color: #FFFFFF;
}

.footer-nav__link:last-child {
    margin-right: 0;
}

.barrier__my-style {
    width: 100%;
    margin-bottom: 30px;
    
    border: 1px solid #FFFFFF;
}
.copyright {
    font-family: 'Roboto';

    font-weight: 500;
    font-size: 12px;
    line-height: 19px;

    color: #FFFFFF;
}
</style>