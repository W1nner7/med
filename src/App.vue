<template>
  <Layout>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </Layout>
</template>

<script>
import Layout from "./components/Layout.vue";

export default {
  components: {
    Layout,
  },
  mounted() {},
};
</script>