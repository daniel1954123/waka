<template>
  <div class="view-page">
    <div class="view-page__header">
      <div class="view-page__header__inner">
        <a class="view-page__header__logo" href="#/wakanim">
          <img src="../assets/Logo_Wakanim.png" alt="" />
        </a>
        <div class="view-page__header__authorization">
          <div class="view-page__header__registration">
            <router-link to="/registration" style="text-decoration: none"
              ><button class="view-page__header__btn-reg">
                Регистрация
              </button></router-link
            >
          </div>
          <div class="view-page__header__login">
            <button class="view-page__header__btn-log">Войти</button>
          </div>
        </div>
      </div>
    </div>

    <div class="serie">
      <div class="serie__header">
        <div class="serie__header__left">
          <img
            src="../assets/297_637631439534858179SAO_Small_RU.jpg"
            alt="Sword Art ONline"
          />
        </div>
        <div class="serie__header__right">
          <div class="serie__header__minimizeContent">
            <img src="../assets/295_SAO_Logo_ENG_V1.webp" alt="" />
          </div>
          <p class="serie__header__title">
            Доступно онлайн и в цифровой коллекции
          </p>
          <div class="serie__header__buttons">
            <button class="serie__header__btnPlay">Воспроизвести</button>
            <button class="serie__header__btnBuy">Купить</button>
          </div>
        </div>
      </div>
      <hr class="serie__hr" />
      <div class="serie__content">
        <ul class="serie__btnActive">
          <li>
            <span class="serie__text">Инфо</span>
          </li>

          <li>
            <span class="serie__text">Серии</span>
          </li>

          <li>
            <span class="serie__text">Отзывы</span>
          </li>
        </ul>
        <div class="serie__infoBlock">
          <ul class="serie__list">
            <li class="serie-list-item">
              <span class="serie-list-text">
                Виртуальный мир, почти неотличимый от настоящего, — новейшая
                VRMMO «Sword Art Online». Однако смерть в этом мире означает
                смерть в мире реальном. Почти десять тысяч человек становятся
                пленниками игры и смогут освободиться, только если пройдут её до
                конца. Главный герой Кирито, один из лучших бета-тестеров,
                узнаёт вместе с другими участниками, что эта новая и безобидная
                на первый взгляд игра на самом деле — игра на выживание. Смогут
                ли они пройти через все многочисленные ловушки и испытания,
                приготовленные жестокой игрой, и остаться в живых?
              </span>
            </li>
            <li class="serie-list-item">
              <span class="serie-list-title"> Дата трансляции </span>
              <span class="serie-list-text">
                <span>10/</span>
                <span>11/</span>
                <span>2017</span>
              </span>
            </li>
            <li class="serie-list-item">
              <span class="serie-list-title"> Оригинальное название </span>
              <span class="serie-list-text">
                Sword Art Online / ソードアート・オンライン
              </span>
            </li>
            <li class="serie-list-item">
              <span class="serie-list-title">Другие названия</span>
              <span class="serie-list-text">Sword Art Online</span>
            </li>
            <li class="serie-list-item">
              <span class="serie-list-title">Классификация</span>
              <span class="serie-list-text">для лиц старше 16 лет</span>
            </li>
            <li class="serie-list-item">
              <span class="serie-list-title">Жанры</span>
              <span class="serie-list-text">
                <a href="https://www.wakanim.tv/ru/v2/catalogue/by/genre/boevik">
                  Боевик,</a>
                <a href="https://www.wakanim.tv/ru/v2/catalogue/by/genre/isekay">
                Исекай,</a>
                <a
                  href="https://www.wakanim.tv/ru/v2/catalogue/by/genre/nauchnaya-fantastika">
                  НАУЧНАЯ ФАНТАСТИКА,</a>
                <a href="https://www.wakanim.tv/ru/v2/catalogue/by/genre/priklyucheniya">ПРИКЛЮЧЕНИЯ,</a>
                <a href="https://www.wakanim.tv/ru/v2/catalogue/by/genre/romantika-">РОМАНТИКА</a>
              </span>
            </li>
            <li class="serie-list-item">
              <span class="serie-list-title">Авторское право</span>
              <span class="serie-list-text">Sword Art Online (C)REKI KAWAHARA／ASCII MEDIA WORKS／SAO Project</span>
            </li>
            <li class="serie-list-item">
              <span class="serie-list-title">Следят</span>
              <span class="serie-list-text">пользователей: 1359</span>
            </li>
            <li class="serie-list-item">
              <span class="serie-list-title">Режиссёр: Томохико Ито / Tomohiko Ito <br> 
                  Аниме студия: A-1 Pictures
              </span>
            </li>
          </ul>
        </div>

          <div class="q-pa-md q-gutter-sm">
    <q-carousel
      animated
      v-model="slide"
      infinite
    >
      <q-carousel-slide name="soft-jazz">
        <q-video
          class="absolute-full"
          src="https://www.youtube.com/embed/k3_tw44QsZQ"
        />
      </q-carousel-slide>

      <q-carousel-slide name="Rihanna">
        <q-video
          class="absolute-full"
          src="https://www.youtube.com/embed/kOkQ4T5WO9E"
        />
      </q-carousel-slide>

      <q-carousel-slide name="ibiza">
        <q-video
          class="absolute-full"
          src="https://www.youtube.com/embed/p87miJIYEEk"
        />
      </q-carousel-slide>
    </q-carousel>

    <div class="row justify-center">
      <q-btn-toggle
        glossy
        v-model="slide"
        :options="[
          { label: 'Soft Jazz', value: 'soft-jazz' },
          { label: 'Rihanna', value: 'Rihanna' },
          { label: 'Ibiza Mix', value: 'ibiza' }
        ]"
      />
    </div>
  </div>

        <div class="serie__slider">
          <div class="serie-slider-header">
            <h2 class="serie-slider-mainTitle">
                Остросюжетные аниме
            </h2>
          </div>
          <div class="serie-slider-carousel">
            <div class="serie-slider-wrap">
              <ul class="serie-slider-list">
                <li class="serie-slider-item">
                  <div class="serie-slider-image">
                    <img src="../assets/14_637213592496454109NGL-C2_guns_hq.webp" alt="">
                  </div>
                  <div class="serie-slider-description">
                    <div class="serie-slider-title">
                      Жизнь без оружия / No Guns Life
                    </div>
                  </div>
                </li>

                <li class="serie-slider-item">
                  <div class="serie-slider-image">
                    <img src="../assets/96_637588530793322270OP_One-Piece22_hq.jpg" alt="">
                  </div>
                  <div class="serie-slider-description">
                    <div class="serie-slider-title">
                      One Piece
                    </div>
                  </div>
                </li>

                <li class="serie-slider-item">
                  <div class="serie-slider-image">
                    <img src="../assets/266_636971795811215073Gurren-Lagann_Small_RU_hq.jpg" alt="">
                  </div>
                  <div class="serie-slider-description">
                    <div class="serie-slider-title">
                      Гуррен Лаганн / Gurren Lagann
                    </div>
                  </div>
                </li>

                <li class="serie-slider-item">
                  <div class="serie-slider-image">
                    <img src="../assets/266_636971795101127175Vanishing_Line_Small_RU_hq.jpg" alt="">
                  </div>
                  <div class="serie-slider-description">
                    <div class="serie-slider-title">
                      Гаро: линия схода / Vanishing Line
                    </div>
                  </div>
                </li>

                <li class="serie-slider-item">
                  <div class="serie-slider-image">
                    <img src="../assets/2510_637076239687271977AL_animat_hq.jpg" alt="">
                  </div>
                  <div class="serie-slider-description">
                    <div class="serie-slider-title">
                      Азур Лейн / Azur Lane 
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer__container">
        <div class="footer-main__grid">
          <div class="footer-main__item">
            <span class="footer-main__title"> Wakanim </span>
            <ul class="footer-main__list">
              <li class="footer-main__list__item">О нас</li>

              <li class="footer-main__list__item">Технический блог</li>

              <li class="footer-main__list__item">Wakanim France</li>

              <li class="footer-main__list__item">Wakanim Nordic</li>

              <li class="footer-main__list__item">Wakanim De</li>

              <li class="footer-main__list__item">Wakanim Ru</li>
            </ul>
          </div>

          <div class="footer-main__item">
            <span class="footer-main__title"> Правовая Информация </span>
            <ul class="footer-main__list">
              <li class="footer-main__list__item">
                Политика конфиденциальности
              </li>

              <li class="footer-main__list__item">
                Пользовательское соглашение
              </li>

              <li class="footer-main__list__item">Правообладатели</li>
            </ul>
          </div>

          <div class="footer-main__item">
            <span class="footer-main__title"> С чего начать? </span>
            <ul class="footer-main__list">
              <li class="footer-main__list__item">Наши предложения</li>

              <li class="footer-main__list__item">Использовать купон</li>

              <li class="footer-main__list__item">Регистрация</li>

              <li class="footer-main__list__item">Приложения</li>
            </ul>
          </div>

          <div class="footer-main__item">
            <span class="footer-main__title"> Поддержка </span>
            <ul class="footer-main__list">
              <li class="footer-main__list__item">Часто задаваемые вопросы</li>

              <li class="footer-main__list__item">Свяжитесь с нами</li>
            </ul>
          </div>

          <div class="footer-main__item">
            <span class="footer-main__title"> Приложения Wakanim </span>
            <ul class="footer-main__list">
              <li class="footer-main__list__item">Android</li>

              <li class="footer-main__list__item">iOS</li>

              <li class="footer-main__list__item">Xbox One</li>

              <li class="footer-main__list__item">Windows</li>

              <li class="footer-main__list__item">FireTV</li>
            </ul>
          </div>

          <div class="footer-main__item">
            <span class="footer-main__title"> Мы в социальных сетях </span>
            <ul class="footer-main__list">
              <li class="footer-main__list__item">Вконтакте</li>

              <li class="footer-main__list__item">Facebook</li>

              <li class="footer-main__list__item">Twitter</li>

              <li class="footer-main__list__item">YouTube</li>

              <li class="footer-main__list__item">Discord</li>
            </ul>
          </div>
        </div>
        <hr class="footer-main__hr" />
        <div class="footer-main__bottom">
          <a class="footer-main__logo" href="#/wakanim">
            <img src="../assets/Logo_Wakanim.png" alt="" />
          </a>
          <p class="footer-main__copy">Â© 2021 Wakanim</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "View-Page.vue",
});
</script>

<style>
</style>