<template>
  <div class="main-page">
    <div class="main-page__header">
      <div class="main-page__header__inner">
        <!-- <div class="header-main__nav-button">
            <button class="menu__btn"></button>
          </div> -->
        <div class="main-page__header__logo">
          <img src="../assets/Logo_Wakanim.png" alt="#" />
        </div>
        <div class="main-page__header__authorization">
          <div class="main-page__header__registration">
            <router-link to="/registration" style="text-decoration: none"
              ><button class="main-page__header__btn-reg">
                Регистрация
              </button></router-link
            >
          </div>
          <div class="main-page__header__login">
            <button class="main-page__header__btn-log">Войти</button>
          </div>
        </div>
      </div>
    </div>

    <div class="q-pa-md">
      <q-carousel
        style="height: 276px"
        animated
        v-model="slide"
        navigation
        infinite
        :autoplay="autoplay"
        arrows
        transition-prev="slide-right"
        transition-next="slide-left"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
      >
        <q-carousel-slide
          :name="1"
          img-src="https://d2y6mqrpjbqoe6.cloudfront.net/image/upload/f_auto,q_auto/cdn1/sliders/99/637667883044908658slide_main%20(3).jpg"
        />
        <q-carousel-slide
          :name="2"
          img-src="https://d2y6mqrpjbqoe6.cloudfront.net/image/upload/f_auto,q_auto/cdn1/sliders/2110/637704242149271518slide_main (7).jpg"
        />
        <q-carousel-slide
          :name="3"
          img-src="https://d2y6mqrpjbqoe6.cloudfront.net/image/upload/f_auto,q_auto/cdn1/sliders/211/637714454813557890slide_main (7).jpg"
        />
        <q-carousel-slide
          :name="4"
          img-src="https://d2y6mqrpjbqoe6.cloudfront.net/image/upload/f_auto,q_auto/cdn1/sliders/211/637714460448305809slide_main (10).jpg"
        />
        <q-carousel-slide
          :name="5"
          img-src="https://d2y6mqrpjbqoe6.cloudfront.net/image/upload/f_auto,q_auto/cdn1/sliders/611/637718100222309826slide_main (21).jpg"
        />
      </q-carousel>
    </div>

    <div class="subscription">
      <div class="subscription__container">
        <div class="subscription__content">
          <div class="subscription__title">
            ЛУЧШИЕ ВПЕЧАТЛЕНИЯ
            <br />
            ОТ АНИМЕ
            <strong>С ПОДПИСКОЙ НА WAKANIM.</strong>
          </div>
          <div class="subscription__line"></div>
          <p class="subscription__text">
            Подпишитесь на Wakanim, чтобы получить доступ к новым и классическим
            аниме в высоком качестве и без рекламы когда угодно и где угодно.
          </p>
          <router-link to="/registration">
            <div class="subscription__btnWrapper">
              <button class="subscription__btn">
                НАЧАТЬ БЕСПЛАТНЫЙ ПРОБНЫЙ ПЕРИОД
              </button>
            </div>
          </router-link>
        </div>
        <div class="subscription__image">
          <img src="../assets/offers_svod_devices_new.webp" alt="" />
        </div>
      </div>
      <div class="subscription__bottom">
        <div class="subscription__sponsors">
          <div class="subscription__sponsors-img">
            <img src="../assets/icon_android.webp" alt="" />
          </div>

          <div class="subscription__sponsors-img">
            <img src="../assets/../assets/icon_windows.webp" alt="" />
          </div>

          <div class="subscription__sponsors-img">
            <img src="../assets/icon_amazon.webp" alt="" />
          </div>

          <div class="subscription__sponsors-img">
            <img src="../assets/icon_chromecast.webp" alt="" />
          </div>

          <div class="subscription__sponsors-img">
            <img src="../assets/icon_xbox.png" alt="" />
          </div>

          <div class="subscription__sponsors-img">
            <img src="../assets/icon_androidtv.png" alt="" />
          </div>

          <div class="subscription__sponsors-img">
            <img src="../assets/icon_ps4.webp" alt="" />
          </div>

          <div class="subscription__sponsors-img">
            <img src="../assets/icon_nvidiashield.webp" alt="" />
          </div>
        </div>
      </div>
    </div>

    <div class="slider">
      <div class="slider__container">
        <div class="slider__content">
          <div class="slider__header">
            <h2 class="slider__title">ПОПУЛЯРНЫЕ АНИМЕ</h2>
          </div>
          <div class="slider__cards">
            <div class="slider__item">
              <ul class="slider__card">
                <li>
                  <div class="slider__image">
                    <img
                      src="../assets/21_637452035668594122Mushoku-Tensei_Small_RU.jpg"
                      alt=""
                    />
                    <div class="slider__description">
                      <span class="slider__item__title">
                        <strong>Реинкарнация безработного</strong>
                        <br />
                        2021 -34 серий
                      </span>
                    </div>
                  </div>
                </li>
              </ul>

              <ul class="slider__card">
                <li>
                  <div class="slider__image">
                    <img
                      src="../assets/266_636971768416132314SNK_S1_Small_RU.webp"
                      alt=""
                    />
                    <div class="slider__description">
                      <span class="slider__item__title">
                        <strong> Атака Титанов / Attack on Titan</strong>
                        <br />
                        2013 -150 серий
                      </span>
                    </div>
                  </div>
                </li>
              </ul>

              <ul class="slider__card">
                <li>
                  <div class="slider__image">
                    <img
                      src="../assets/57_637610730095636733CaseStudyofVanitas_small_RU.jpg"
                      alt=""
                    />
                    <div class="slider__description">
                      <span class="slider__item__title">
                        <strong> Мемуары Ванитаса</strong>
                        <br />
                        2021 -24 серий
                      </span>
                    </div>
                  </div>
                </li>
              </ul>

              <ul class="slider__card">
                <li>
                  <div class="slider__image">
                    <img
                      src="../assets/297_637631439534858179SAO_Small_RU.jpg"
                      alt=""
                    />
                    <div class="slider__description">
                      <span class="slider__item__title">
                        <strong>Мастера Меча Онлайн</strong>
                        <br />
                        2012 -98 серий
                      </span>
                    </div>
                  </div>
                </li>
              </ul>

              <ul class="slider__card">
                <li>
                  <div class="slider__image">
                    <img
                      src="../assets/124_636906541255693530Demon_Slayer_Small_RU.webp"
                      alt=""
                    />
                    <div class="slider__description">
                      <span class="slider__item__title">
                        <strong
                          >Истребитель Демонов / Demon Slayer: Kimetsu no
                          Yaiba</strong
                        >
                        <br />
                        2019 -60 серий
                      </span>
                    </div>
                  </div>
                </li>
              </ul>

              <ul class="slider__card">
                <li>
                  <div class="slider__image">
                    <img
                      src="../assets/110_637687050481227614MC_Small_RU.webp"
                      alt=""
                    />
                    <div class="slider__description">
                      <span class="slider__item__title">
                        <strong
                          >Девочка которая видит это / Mieruko-chan</strong
                        >
                        <br />
                        2021 -12 серий
                      </span>
                    </div>
                  </div>
                </li>
              </ul>

              <ul class="slider__card">
                <li>
                  <div class="slider__image">
                    <img
                      src="../assets/210_637687629782938190BHP_Small_RU.webp"
                      alt=""
                    />
                    <div class="slider__description">
                      <span class="slider__item__title">
                        <strong
                          >Изгнан из партии героев / Banished from the Hero's
                          Party</strong
                        >
                        <br />
                        2021 -12 серий
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
              <ul class="slider__card">
                <li>
                  <div class="slider__image">
                    <img
                      src="../assets/266_636971806813555727Overlord_II_Small_RU.webp"
                      alt=""
                    />
                    <div class="slider__description">
                      <span class="slider__item__title">
                        <strong>Повелитель / Overlord</strong>
                        <br />
                        2015 -39 серий
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="collection">
      <div class="collection__section">
        <div class="collection__headerLeft">
          <span class="collection__title">
            <strong>«Моя коллекция»</strong>
            <br />
            <span>смотрите аниме так, как вам удобно</span>
          </span>
        </div>
        <div class="collection__content">
          <div class="collection__contentLeft">
            <p>
              Начните собирать свою цифровую коллекцию аниме с функцией
              «Мояколлекция».
            </p>
            <span class="collection__textPrice">
              Платите только за то, что нужно вам - покупайте любимые аниме
              <strong>всего за 1 евро за серию! *</strong>
            </span>
            <div class="collection__conditions">
              <div class="collection__contentC">
                <div class="collection__imgWrapper">
                  <img src="../assets/infinitive.png" alt="" />
                  <p class="collection__imgTitle">
                    Неограниченный
                    <br />
                    доступ
                  </p>
                </div>

                <div class="collection__imgWrapper">
                  <img src="../assets/monitor.png" alt="" />
                  <p class="collection__imgTitle">
                    Загрузка или просмотр онлайн
                    <br />
                    по выбору
                  </p>
                </div>
              </div>
            </div>
            <div class="collection__buttonWrap">
              <button>ЗАРЕГИСТРИРОВАТЬСЯ И ПОЛУЧИТЬ ВАКОЙНЫ</button>
              <p>*1 вакойн = 1 евро = 1 серия</p>
            </div>
          </div>
          <div class="collection__seriesTop">
            <div class="collection__advantages">
              <div class="collection__image1">
                <img style=""
                  src="../assets/124_636906541255693530Demon_Slayer_Small_RU.webp"
                  alt=""
                />
              </div>

              <div class="collection__image1">
                <img
                  src="../assets/266_636971768416132314SNK_S1_Small_RU.webp"
                  alt=""
                />
              </div>

              <div class="collection__image1">
                <img
                  src="../assets/266_636971803841833624TPN_Small_RU.webp"
                  alt=""
                />
              </div>

              <div class="collection__image1">
                <img
                  src="../assets/297_637631439534858179SAO_Small_RU.jpg"
                  alt=""
                />
              </div>
            </div>
            <div class="collection__advantages-bottom">
              <div class="collection__item2">
                <div class="collection__image2">
                  <img
                    src="../assets/297_637631439534858179SAO_Small_RU.jpg"
                    alt=""
                  />
                </div>
              </div>

              <div class="collection__image2">
                <img
                  src="../assets/297_637631439534858179SAO_Small_RU.jpg"
                  alt=""
                />
              </div>

              <div class="collection__image2">
                <img
                  src="../assets/297_637631439534858179SAO_Small_RU.jpg"
                  alt=""
                />
              </div>

              <div class="collection__image2">
                <img
                  src="../assets/297_637631439534858179SAO_Small_RU.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<!-- <div class="collection__advantages">
              <img src="../assets/266_636971806813555727Overlord_II_Small_RU.webp" alt="">
          </div> -->


<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Main-Page.vue",
  setup() {
    return {
      slide: ref(1),
      autoplay: ref(true),
    };
  },
});
</script>

<style scoped>
.q-pa-md {
  padding: 0;
}
</style>
