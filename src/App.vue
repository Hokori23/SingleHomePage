<template>
  <v-app>
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid style="height: 100%;">
        <calendar></calendar>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    drawer: true
  })
};
</script>
