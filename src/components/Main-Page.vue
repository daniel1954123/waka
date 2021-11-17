<template>
  <div class="main-page">
    <div class="main-page__header">
      <div class="main-page__header__inner">
        <a class="main-page__header__logo" href="#/wakanim">
          <img src="../assets/Logo_Wakanim.png" alt="" />
        </a>
        <!-- <div class="main-page__header__logo">
          <img src="../assets/Logo_Wakanim.png" alt="#" />
        </div> -->
        <div class="main-page__header__authorization">
          <div class="main-page__header__registration">
            <router-link to="/registration" style="text-decoration: none">
              <button class="main-page__header__btn-reg">Регистрация</button>
            </router-link>
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
              <ul v-for="(anime,idx) in animes.popular" :key="idx" class="slider__card">
                <li>
                  <div class="slider__image">
                    <img
                      :src="getImgUrl(anime.image)"
                      alt="wakanim-image"
                    />
                    <div class="slider__description">
                      <span class="slider__item__title">
                        <strong>{{anime.title}}</strong>
                        <br />
                       {{anime.description}}
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

    <div class="ongoings">
      <div class="ongoings__container">
        <div class="ongoings__content">
          <div class="ongoings__header">
            <h2 class="ongoings__title">Онгоинги</h2>
          </div>
          <div class="ongoings__cards">
            <div class="ongoings__item">
              <ul class="ongoings__card">
                <li>
                  <div class="ongoings__image">
                    <img
                      src="../assets/21_637452035668594122Mushoku-Tensei_Small_RU.jpg"
                      alt=""
                    />
                    <div class="ongoings__description">
                      <span class="ongoings__item__title">
                        <strong>Ranking of Kings</strong>
                        <br />
                        Сезон 1 -дубляж , озвучка
                      </span>
                    </div>
                  </div>
                </li>
              </ul>

              <ul class="ongoings__card">
                <li>
                  <div class="ongoings__image">
                    <img
                      src="../assets/410_637689400324212767PE_Platinum_end.webp"
                      alt=""
                    />
                    <div class="ongoings__description">
                      <span class="ongoings__item__title">
                        <strong> Платиновый Исход / Platinum End</strong>
                        <br />
                        Сезон 1 -Русская озвучка
                      </span>
                    </div>
                  </div>
                </li>
              </ul>

              <ul class="ongoings__card">
                <li>
                  <div class="ongoings__image">
                    <img
                      src="../assets/3235_4_DemonSlayer_MT_RU_small.jpg"
                      alt=""
                    />
                    <div class="ongoings__description">
                      <span class="ongoings__item__title">
                        <strong> Истребитель Демонов</strong>
                        <br />
                        Поезд бесконечный: Русская озвучка
                      </span>
                    </div>
                  </div>
                </li>
              </ul>

              <ul class="ongoings__card">
                <li>
                  <div class="ongoings__image">
                    <img
                      src="../assets/21_637452035668594122Mushoku-Tensei_Small_RU.jpg"
                      alt=""
                    />
                    <div class="ongoings__description">
                      <span class="ongoings__item__title">
                        <strong>Mishoku Tensei</strong>
                        <br />
                        Сезон 1 (часть 2): Субтитры
                      </span>
                    </div>
                  </div>
                </li>
              </ul>

              <ul class="ongoings__card">
                <li>
                  <div class="ongoings__image">
                    <img
                      src="../assets/510_637690378506416294VP_Visual_pr.jpg"
                      alt=""
                    />
                    <div class="ongoings__description">
                      <span class="ongoings__item__title">
                        <strong> Визуальнвя тюрьма </strong>
                        <br />
                        Сезон 1 : Русская озвучка
                      </span>
                    </div>
                  </div>
                </li>
              </ul>

              <ul class="ongoings__card">
                <li>
                  <div class="ongoings__image">
                    <img
                      src="../assets/110_637687050481227614MC_Small_RU.webp"
                      alt=""
                    />
                    <div class="ongoings__description">
                      <span class="ongoings__item__title">
                        <strong
                          >Девочка которая видит это / Mieruko-chan</strong
                        >
                        <br />
                        Сезон 1 : Субтитры
                      </span>
                    </div>
                  </div>
                </li>
              </ul>

              <ul class="ongoings__card">
                <li>
                  <div class="ongoings__image">
                    <img
                      src="../assets/96_637588530794572057OP_One_piece.jpg"
                      alt=""
                    />
                    <div class="ongoings__description">
                      <span class="ongoings__item__title">
                        <strong> One-Piece </strong>
                        <br />
                        Land Of Wano: Русская озвучка
                      </span>
                    </div>
                  </div>
                </li>
              </ul>

              <ul class="ongoings__card">
                <li>
                  <div class="ongoings__image">
                    <img
                      src="../assets/266_636971806813555727Overlord_II_Small_RU.webp"
                      alt=""
                    />
                    <div class="ongoings__description">
                      <span class="ongoings__item__title">
                        <strong>Повелитель / Overlord</strong>
                        <br />
                        Сезон 4: Русская озвучка
                      </span>
                    </div>
                  </div>
                </li>
              </ul>

              <ul class="ongoings__card">
                <li>
                  <div class="ongoings__image">
                    <img
                      src="../assets/71_637140090934491997Orphen_Small_RU.webp"
                      alt=""
                    />
                    <div class="ongoings__description">
                      <span class="ongoings__item__title">
                        <strong>Волшебник Воин Орфен</strong>
                        <br />
                        2020: 50 Серий
                      </span>
                    </div>
                  </div>
                </li>
              </ul>

              <ul class="ongoings__card">
                <li>
                  <div class="ongoings__image">
                    <img
                      src="../assets/210_637687645576241955VDNT_Small_RU.jpg"
                      alt=""
                    />
                    <div class="ongoings__description">
                      <span class="ongoings__item__title">
                        <strong>Этот вампир постоянно умирает!</strong>
                        <br />
                        Сезон 1: Русская озвучка
                      </span>
                    </div>
                  </div>
                </li>
              </ul>

              <ul class="ongoings__card">
                <li>
                  <div class="ongoings__image">
                    <img
                      src="../assets/410_637689617503092479KN_Kaginado_o.jpg"
                      alt=""
                    />
                    <div class="ongoings__description">
                      <span class="ongoings__item__title">
                        <strong>Kaginadoo</strong>
                        <br />
                        Season 1: Rissian voiceover
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
                <img
                  style=""
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
            <div class="collection__shelf2">
              <img src="../assets/shelf.webp" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="romantic">
      <div class="romantic__container">
        <div class="romantic__content">
          <div class="romantic__header">
            <h2 class="romantic__title">РОМАНТИЧЕСКОЕ АНИМЕ</h2>
          </div>
          <div class="romantic__cards">
            <div class="romantic__item">
              <ul class="romantic__card">
                <li>
                  <div class="romantic__image">
                    <img
                      src="../assets/266_636971785287141459Fruits-Basket_Small_RU.webp"
                      alt=""
                    />
                    <div class="romantic__description">
                      <span class="romantic__item__title">
                        <strong>Fruits Basket / Корзинка Фруктов</strong>
                        <br />
                        2019 - 126 серий
                      </span>
                    </div>
                  </div>
                </li>
              </ul>

              <ul class="romantic__card">
                <li>
                  <div class="romantic__image">
                    <img
                      src="../assets/268_637655773528679656Horimiya_Small_RU.webp"
                      alt=""
                    />
                    <div class="romantic__description">
                      <span class="romantic__item__title">
                        <strong>Хоримия / Horimiya</strong>
                        <br />
                        2021 -26 серий
                      </span>
                    </div>
                  </div>
                </li>
              </ul>

              <ul class="romantic__card">
                <li>
                  <div class="romantic__image">
                    <img
                      src="../assets/210_637372514932019783Adachi-Shimamura_Small_RU.webp"
                      alt=""
                    />
                    <div class="romantic__description">
                      <span class="romantic__item__title">
                        <strong>Адати и Симамура</strong>
                        <br />
                        2020 - 24 серий
                      </span>
                    </div>
                  </div>
                </li>
              </ul>

              <ul class="romantic__card">
                <li>
                  <div class="romantic__image">
                    <img
                      src="../assets/310_637056891452091804Oresuki_Small_RU.jpg"
                      alt=""
                    />
                    <div class="romantic__description">
                      <span class="romantic__item__title">
                        <strong>Oresuki Да как можешь меня любить...</strong>
                        <br />
                        2019 - 26 серий
                      </span>
                    </div>
                  </div>
                </li>
              </ul>

              <ul class="romantic__card">
                <li>
                  <div class="romantic__image">
                    <img
                      src="../assets/266_636971786130468367Kaguya_Small_RU.webp"
                      alt=""
                    />
                    <div class="romantic__description">
                      <span class="romantic__item__title">
                        <strong>Госпожа Кагуя: в лбви как на войне</strong>
                        <br />
                        2019 - 48 серий
                      </span>
                    </div>
                  </div>
                </li>
              </ul>

              <ul class="romantic__card">
                <li>
                  <div class="romantic__image">
                    <img
                      src="../assets/24_637214145097593930SPZC-2_Small_RU.jpg"
                      alt=""
                    />
                    <div class="romantic__description">
                      <span class="romantic__item__title">
                        <strong>Shironeko Project: Нулевая хроника</strong>
                        <br />
                        2020 - 24 серий
                      </span>
                    </div>
                  </div>
                </li>
              </ul>

              <ul class="romantic__card">
                <li>
                  <div class="romantic__image">
                    <img
                      src="../assets/218_637019960226177675YN_Small.webp"
                      alt=""
                    />
                    <div class="romantics__description">
                      <span class="romantic__item__title">
                        <strong>Твое имя: Your Name </strong>
                        <br />
                        2016 - 2 серии
                      </span>
                    </div>
                  </div>
                </li>
              </ul>

              <ul class="romantic__card">
                <li>
                  <div class="romantic__image">
                    <img
                      src="../assets/262_637499281341960524BTC_Small_RU.jpg"
                      alt=""
                    />
                    <div class="romantic__description">
                      <span class="romantic__item__title">
                        <strong>Низкоуровневый Томодзаки</strong>
                        <br />
                        2021 - 28 серий
                      </span>
                    </div>
                  </div>
                </li>
              </ul>

              <ul class="romantic__card">
                <li>
                  <div class="romantic__image">
                    <img
                      src="../assets/86_637587530131979749TB_Small_RU.jpg"
                      alt=""
                    />
                    <div class="romantic__description">
                      <span class="romantic__item__title">
                        <strong>Туалетный Мальчик Ханако</strong>
                        <br />
                        2020 - 24 Серий
                      </span>
                    </div>
                  </div>
                </li>
              </ul>

              <ul class="romantic__card">
                <li>
                  <div class="romantic__image">
                    <img
                      src="../assets/276_636972434611119565WNL_Small_RU.webp"
                      alt=""
                    />
                    <div class="romantic__description">
                      <span class="romantic__item__title">
                        <strong>Мы не можем учится!</strong>
                        <br />
                        2019 - 52 серии
                      </span>
                    </div>
                  </div>
                </li>
              </ul>

              <ul class="romantic__card">
                <li>
                  <div class="romantic__image">
                    <img
                      src="../assets/256_636970679099985707Date_A_Live_1_Small_RU.webp"
                      alt=""
                    />
                    <div class="romantic__description">
                      <span class="romantic__item__title">
                        <strong>Рандеву с жизнью</strong>
                        <br />
                        2013 - 74 серии
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

    <div class="romantic">
      <div class="romantic__container">
        <div class="romantic__content">
          <div class="romantic__header">
            <h2 class="romantic__title">НЕОЖИДАННЫЕ ГЕРОИ</h2>
          </div>
          <div class="romantic__cards">
            <div class="romantic__item">
              <ul class="romantic__card">
                <li>
                  <div class="romantic__image">
                    <img
                      src="../assets/284_637236908064238590SMH_Small_RU.webp"
                      alt=""
                    />
                    <div class="romantic__description">
                      <span class="romantic__item__title">
                        <strong>Фрагмент Истины</strong>
                        <br />
                        2019 - 24 серий
                      </span>
                    </div>
                  </div>
                </li>
              </ul>

              <ul class="romantic__card">
                <li>
                  <div class="romantic__image">
                    <img
                      src="../assets/266_636971810258146331Fate-Stay-Night-Heavens-Feel_Small_RU.webp"
                      alt=""
                    />
                    <div class="romantic__description">
                      <span class="romantic__item__title">
                        <strong>Судьба/Ночь Схватки </strong>
                        <br />
                        2017 - 6 серий
                      </span>
                    </div>
                  </div>
                </li>
              </ul>

              <ul class="romantic__card">
                <li>
                  <div class="romantic__image">
                    <img
                      src="../assets/2310_637074399522132404RUAR_Small_RU.jpg"
                      alt=""
                    />
                    <div class="romantic__description">
                      <span class="romantic__item__title">
                        <strong>За дело! Звериная тропа</strong>
                        <br />
                        2019 - 24 серий
                      </span>
                    </div>
                  </div>
                </li>
              </ul>

              <ul class="romantic__card">
                <li>
                  <div class="romantic__image">
                    <img
                      src="../assets/266_636971805856282082Persona_5_The_Animation_Small_RU.webp"
                      alt=""
                    />
                    <div class="romantic__description">
                      <span class="romantic__item__title">
                        <strong>Персона 5 Анимация</strong>
                        <br />
                        2018 - 56 серий
                      </span>
                    </div>
                  </div>
                </li>
              </ul>

              <ul class="romantic__card">
                <li>
                  <div class="romantic__image">
                    <img
                      src="../assets/266_637603053220960394TCH_Small_RU.jpg"
                      alt=""
                    />
                    <div class="romantic__description">
                      <span class="romantic__item__title">
                        <strong>Осторожный Герой</strong>
                        <br />
                        2019 - 24 серий
                      </span>
                    </div>
                  </div>
                </li>
              </ul>

              <ul class="romantic__card">
                <li>
                  <div class="romantic__image">
                    <img
                      src="../assets/262_637499281341960524BTC_Small_RU.jpg"
                      alt=""
                    />
                    <div class="romantic__description">
                      <span class="romantic__item__title">
                        <strong>Сакура собирательница карт</strong>
                        <br />
                        2018 - 46 серий
                      </span>
                    </div>
                  </div>
                </li>
              </ul>

              <ul class="romantic__card">
                <li>
                  <div class="romantic__image">
                    <img
                      src="../assets/127_636985205988438208Okasaan_Small_RU.webp"
                      alt=""
                    />
                    <div class="romantic__description">
                      <span class="romantic__item__title">
                        <strong>Ты же любишь мамочку, удары...</strong>
                        <br />
                        2019 - 26 Серий
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

    <div class="aboutUs">
      <section class="aboutUs__container">
        <span class="aboutUs__title">О НАС</span>
        <p class="aboutUs__subtitle">Что такое Wakanim?</p>
        <p class="aboutUs__text">
          Wakanim - первый в Европе легальный сервис показа аниме на основе
          потокового мультимедиа. Наша цель – предоставлять пользователям
          качественные аниме на удобной и эффективной стриминговой платформе.
          Wakanim – лучшее место для того, чтобы смотреть онлайн все ваши
          любимые сериалы, такие как: «Мастер меча онлайн», One Piece, «Атака
          титанов» и многие другие!
        </p>

        <p class="aboutUs__subtitle">
          Больше, чем просто стриминговая платформа!
        </p>
        <p class="aboutUs__text">
          Wakanim не только прекрасное место для просмотра аниме, это ещё и
          сообщество единомышленников, организатор мероприятий, почитатель и
          спонсор японской анимации. Каждый в нашей команде искренне любит
          аниме, и одна из наших основных задач заключается в том, чтобы
          помогать аниме успешно развиваться в качестве одного из направлений
          художественного творчества. Поэтому, будучи подписчиком или
          пользователем услуги «Моя коллекция», вы напрямую поддерживаете
          создателей аниме-сериалов, которыми вы наслаждаетесь.
        </p>

        <p class="aboutUs__subtitle">Постоянный рост и развитие!</p>
        <p class="aboutUs__text">
          Несмотря на то, что история компании насчитывает уже десять лет,
          Wakanim не прекращает расти и развиваться. После того как трансляции
          онгоингов завоевали популярность во Франции, Wakanim вступил в период
          бурного роста и порадовал возможностью легального просмотра аниме
          жителей таких стран как Германия, Россия, Швеция, Дания и многих
          других. Кроме того, мы постоянно работаем над совершенствованием
          нашего сервиса, добавляя инновационные функции, разрабатывая новые
          приложения и так далее.
        </p>
      </section>
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
  data() {
    return {
      animes: {
        popular:[
          {
            image:'21_637452035668594122Mushoku-Tensei_Small_RU.jpg',
            title:'Реинкарнация безработного',
            description:'2021 -34 серий'
          },
          {
            image:'266_636971768416132314SNK_S1_Small_RU.webp',
            title:'Атака Титанов / Attack on Titan',
            description:'2013 -150 серий'
          },
          {
            image:'57_637610730095636733CaseStudyofVanitas_small_RU.jpg',
            title:'Мемуары Ванитаса',
            description:'2021 -24 серий'
          },
          {
            image:'297_637631439534858179SAO_Small_RU.jpg',
            title:'Мастера Меча Онлайн',
            description:'2012 -98 серий'
          },
          {
            image:'124_636906541255693530Demon_Slayer_Small_RU.webp',
            title:'Истребитель Демонов / Demon Slayer: Kimetsu no Yaiba',
            description:'2021 -34 серий'
          },
          {
            image:'110_637687050481227614MC_Small_RU.webp',
            title:'Девочка которая видит это / Mieruko-chan',
            description:'2021 -12 серий'
          },
          {
            image:'210_637687629782938190BHP_Small_RU.webp',
            title:'Изгнан из партии героев / Banished from the Heros Party',
            description:'2021 -12 серий'
          },
          {
            image:'266_636971806813555727Overlord_II_Small_RU.webp',
            title:'Повелитель / Overlord',
            description:'2015 -39 серий'
          }
        ],
        ongoing:[
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {}
        ],
        romantic:[
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {}
        ],
        unexpected:[
          {},
          {},
          {},
          {},
          {},
          {},
          {}
        ]
      },
    };
  },
  methods: {
    getImgUrl: function (imagePath) {
      return require('../assets/' + imagePath);
    }
  }
});
</script>

<style scoped>
.q-pa-md {
  padding: 0;
}
</style>
