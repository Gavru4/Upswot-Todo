<template>
  <section class="about-us">
    <div class="container">
      <div class="wrapper">
        <p class="about-us__description">
          Business Analytics — a new, convenient tool for managing and
          forecasting your business performance, which will help analyze your
          own finances and cash flows, visualize your reporting, business
          processes, KPI's
        </p>

        <ul class="benefits">
          <li class="benefits__item" v-for="item in customBenefitsItem">
            <my-icon
              class="benefits__icon"
              width="23"
              height="17"
              iconColor="#0076C0"
              ><TickMark />
            </my-icon>
            <div class="benefits__wrapper">
              <h2 class="benefits__heading">
                <strong>{{ item.title }}</strong>
              </h2>

              <p class="benefits__description">
                {{ item.description }}
              </p>
            </div>
          </li>
        </ul>

        <AuthForm />
      </div>
    </div>
  </section>
</template>

<script>
import AuthForm from "@/components/AuthForm.vue";
import benefitsItem from "@/components/BenefitsItem";
import TickMark from "@/components/icons/TickMark.vue";

export default {
  data() {
    return {
      customBenefitsItem: benefitsItem,
    };
  },
  components: {
    AuthForm,
    TickMark,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

.about-us__description {
  margin-bottom: 10px;

  font-family: $main-font-family;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;

  color: $main-text-color;

  @media screen and (min-width: 480px) {
    max-width: none;
  }

  @media screen and (min-width: 768px) {
    width: 400px;
    margin-bottom: 15px;

    font-size: 16px;
    line-height: 25px;
  }

  @media screen and (min-width: 1280px) {
    width: 664px;
  }
}

.about-us {
  padding: 40px 0 40px 0;
}

.benefits {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  list-style: none;
}

.benefits__heading {
  margin-bottom: 5px;

  font-family: $main-font-family;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;

  color: $main-text-color;

  @media screen and (min-width: 768px) {
    margin-bottom: 10px;

    font-size: 16px;
    line-height: 25px;
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
  font-family: $main-font-family;

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
