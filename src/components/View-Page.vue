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
                <img src="../assets/297_637631439534858179SAO_Small_RU.jpg" alt="Sword Art ONline">
            </div>
            <div class="serie__header__right"> 
                <div class="serie__header__minimizeContent">
                    <img src="../assets/295_SAO_Logo_ENG_V1.webp" alt="">
                </div>
                <p class="serie__header__title">Доступно онлайн и в цифровой коллекции</p>
                <div class="serie__header__buttons">
                    <button class="serie__header__btnPlay">Воспроизвести</button>
                    <button class="serie__header__btnBuy">Купить</button>
                </div>
            </div>
        </div>
        <hr class="serie__line">
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