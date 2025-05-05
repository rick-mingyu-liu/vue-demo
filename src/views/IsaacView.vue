<template>
  <v-app>
    <v-main class="about-hero">
      <v-container class="fill-height d-flex flex-column justify-center align-center text-center">
        <v-card class="pa-8" elevation="10" max-width="800" rounded="xl">
          <v-card-title class="text-h4 font-weight-bold mb-4 text-primary">
            Hi, I'm Isaac!
          </v-card-title>
          <v-card-text class="text-body-1 text-grey-darken-2">
            As a child, I loved math and programming. In elementary school, math was my favorite
            subject, and by high school, that passion evolved into a love for computer science. At
            12, my dad—armed with his math and engineering degrees—introduced me to Python! Since
            then, I’ve been coding projects big and small.
          </v-card-text>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
// No logic needed for now
</script>

<style scoped>
.about-hero {
  background: linear-gradient(145deg, #f8f9fa, #e0e0e0);
}
</style>
