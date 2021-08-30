<template>
  <v-app>
    <v-main>
      <div>
        <v-btn text :to="{ name: 'Home' }" exact>Home</v-btn>
        <v-btn text :to="{ name: 'About' }" exact>About</v-btn>
      </div>

      <router-view />
    </v-main>

    <main-footer />
  </v-app>
</template>

<script>
import MainFooter from '@/components/MainFooter.vue';

export default {
  name: 'Base',
  components: {
    MainFooter,
  },
};
</script>
