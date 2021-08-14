<template>
  <section class="home">
    <div class="home__content-holder">
      <div class="home__content">
        <span>Добро пожаловать в игру</span>
        <h1>Помоги <span class="upper">фармацевту</span></h1>
        <div class="justify-center">
          <router-link class="btn btn--light" to="/main">Начать</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Intro",

  components: {},
  computed: {},
  mounted() {},
  methods: {},
};
</script>
