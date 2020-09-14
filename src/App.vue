<template>
  <v-app>
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid style="height: 100%;">
        <!-- <calendar></calendar> -->
        <home></home>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  // import calendar from '@/components/calendar';
  import home from '@/components/home';
  export default {
    name: 'App',
    components: {
      //   calendar,
      home
    }
  };
</script>
