<template>
    <section class="about-us">
        <my-container>
            <div class="wrapper">
                <p class="about-us__description">Business Analytics — a new, convenient tool for managing and
                    forecasting your
                    business performance, which will
                    help analyze your own finances and cash flows, visualize your reporting, business processes,
                    KPI's
                </p>

                <ul class="benefits">

                    <li class="benefits__item">
                        <svg class="benefits__icon" width="23" height="17" viewBox="0 0 23 17" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M19.9584 0L23 2.99416L8.77173 17L0 8.36558L3.04162 5.37142L8.77173 11.0118L19.9584 0Z"
                                fill="#0076C0" />
                        </svg>
                        <div class="benefits__wrapper">

                            <h2 class="benefits__heading"><strong>Interactive Reporting</strong></h2>

                            <p class="benefits__description">In just a few clicks, you can connect your data from 1C,
                                CRM (Bitrix24, AmoCRM, ZohoCRM),
                                E-commerce
                                (PROM.UA, Rozetka, ebay), Logistic (Nova Poshta), Google Analytics and many more systems
                                that reflect
                                different aspects of business activities.</p>
                        </div>
                    </li>
                    <li class="benefits__item">
                        <svg class="benefits__icon" width="23" height="17" viewBox="0 0 23 17" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M19.9584 0L23 2.99416L8.77173 17L0 8.36558L3.04162 5.37142L8.77173 11.0118L19.9584 0Z"
                                fill="#0076C0" />
                        </svg>
                        <div class="benefits__wrapper">

                            <h2 class="benefits__heading"><strong>Automated data updates</strong></h2>

                            <p class="benefits__description">The application automatically updates and structures the
                                data in just 60 seconds, saving
                                you time and
                                money.</p>
                        </div>
                    </li>
                    <li class="benefits__item">
                        <svg class="benefits__icon" width="23" height="17" viewBox="0 0 23 17" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M19.9584 0L23 2.99416L8.77173 17L0 8.36558L3.04162 5.37142L8.77173 11.0118L19.9584 0Z"
                                fill="#0076C0" />
                        </svg>
                        <div class="benefits__wrapper">

                            <h2 class="benefits__heading"><strong>Data Security</strong></h2>

                            <p class="benefits__description">The Bank guarantees the safety of your personal data,
                                ensuring their integrity and
                                confidentiality.</p>
                        </div>
                    </li>
                </ul>

                <AuthForm/>

            </div>
        </my-container>
    </section>
</template>

<script>

import AuthForm from "@/components/AuthForm.vue"
export default {

    components: { AuthForm, AuthForm }
}
</script>

<style lang="scss" scoped>


@import "@/assets/variables.scss";

// $main-text-color: #333333;

.about-us__description {
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 10px;

    color: $main-text-color;

    @media screen and (min-width: 480px) {
        max-width:none;
    }
    
    @media screen and (min-width: 768px) {
    width: 400px;
    
    font-size: 16px;
    line-height: 25px;
    
    margin-bottom: 15px;
    }
    
    @media screen and (min-width: 1280px) {
    width: 664px;
    }
}

.about-us {
    padding: 40px 0 40px 0;
}

.benefits {
    list-style: none;

    display: flex;
    flex-direction: column;
    align-items: stretch;
}

.benefits__heading {
    margin-bottom: 5px;

    font-family: 'Roboto';
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
   
    color: $main-text-color;
    
    @media screen and (min-width: 768px) {
        font-size: 16px;
        line-height: 25px;
        
        margin-bottom: 10px;
    }
}

.benefits__item {
    display: flex;
    margin-bottom: 10px;

        @media screen and (min-width: 768px) {
            width: 370px;
            margin-bottom: 15px;
        }
        
         @media screen and (min-width: 1280px) {
            width: 670px;
        }
}
.benefits__description {
    font-family: 'Roboto';
 
    font-size: 10px;
    line-height: 12px;
    
    color: $main-text-color;
    
    @media screen and (min-width: 768px) {
        font-size: 14px;
        line-height: 22px;
    }
    
}

.benefits__item:last-child {
    margin-bottom: 0;
}

.benefits__icon {
    margin-right: 15px;
}

.benefits__wrapper {
    width: 630px;
}

.wrapper {
    position: relative;
}

</style>