 <template>
  <div class="page-registration">
    <div class="page-registration__header">
      <div class="main-page__header__inner">
        <!-- <div class="header-main__nav-button">
            <button class="menu__btn"></button>
          </div> -->
        <div class="page-registration__header__logo">
          <img src="../assets/Logo_Wakanim.png" alt="#" />
        </div>
        <div class="page-registration__header__authorization">
          <div class="page-registration__header__registration">
            <router-link to="/registration" style="text-decoration: none"
              ><button class="page-registration__header__btn-reg">
                Регистрация
              </button></router-link
            >
          </div>
          <div class="page-registration__header__login">
            <button class="main-page__header__btn-log">Войти</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 
 <script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Registration.vue",
});
</script>
 
 <style>
</style>