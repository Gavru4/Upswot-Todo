<template>
    <section class="about-us">
        <my-container>
            <div class="wrapper">

                <p class="about-us__description">Business Analytics — a new, convenient tool for managing and
                    forecasting your
                    business performance, which will
                    help analyze your own finances and cash flows, visualize your reporting, business processes, KPI's
                </p>
                <ul class="benefits">

                    <li class="benefits__item">
                        <svg class="benefits__icon" width="23" height="17" viewBox="0 0 23 17" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M19.9584 0L23 2.99416L8.77173 17L0 8.36558L3.04162 5.37142L8.77173 11.0118L19.9584 0Z"
                                fill="#0076C0" />
                        </svg>
                        <div class="benefits__description">

                            <h2 class="benefits__heading"><strong>Interactive Reporting</strong></h2>

                            <p>In just a few clicks, you can connect your data from 1C, CRM (Bitrix24, AmoCRM, ZohoCRM),
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
                        <div class="benefits__description">

                            <h2 class="benefits__heading"><strong>Automated data updates</strong></h2>

                            <p>The application automatically updates and structures the data in just 60 seconds, saving
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
                        <div class="benefits__description">

                            <h2 class="benefits__heading"><strong>Data Security</strong></h2>

                            <p>The Bank guarantees the safety of your personal data, ensuring their integrity and
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

<style scoped>

.about-us__description {
    width: 664px;

    font-family: 'Roboto';
    font-weight: 500;
    font-size: 16px;
    line-height: 1.6;

    margin-bottom: 15px;

    color: #333333;
}

.about-us {

    padding: 40px 0 40px 0;
}

.benefits {
    list-style: none
}

.benefits__heading {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.6;

    margin-bottom: 10px;


    color: #333333;
}

.benefits__item {
    width: 670px;
    display: flex;
    margin-bottom: 15px;
}

.benefits__item:last-child {
    margin-bottom: 0;
}

.benefits__icon {
    margin-right: 15px;
}

.benefits__description {
    width: 630px;
}

.wrapper {
    position: relative;
}

</style>