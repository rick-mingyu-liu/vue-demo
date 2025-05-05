<script setup lang="ts"></script>

<template>
  <v-app class="app">
    <v-app-bar app color="grey-darken-3" dark>
      <v-toolbar-title class="text-h6">Portal Co-op Team Summer 2025</v-toolbar-title>

      <v-spacer />

      <v-btn to="/" variant="text" class="text-white" exact :ripple="false"> Home </v-btn>
      <v-btn to="/isaac" variant="text" class="text-white" exact :ripple="false"> Isaac </v-btn>
      <v-btn to="/raj" variant="text" class="text-white" exact :ripple="false"> Raj </v-btn>
      <v-btn to="/rick" variant="text" class="text-white" exact :ripple="false"> Rick </v-btn>
    </v-app-bar>

    <v-main class="mainpage align-center justify-center">
      <RouterView />
    </v-main>
  </v-app>
</template>

<style scoped>
.mainpage {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}
</style>
