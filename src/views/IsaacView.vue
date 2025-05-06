<script setup lang="ts">
import avatar from '../assets/isaac.jpg'
</script>

<template>
  <v-app>
    <v-main class="about-hero-wrapper d-flex justify-center align-center pa-4">
      <v-card title="About Isaac" class="about-hero text-white text-center">
        <v-avatar
          class="mx-auto mt-3"
          size="100"
          color="grey darken-3"
          :image="avatar"
          alt="Isaac's profile picture"
        ></v-avatar>
        <v-card-text class="text-white">
          <h1>Hi, I'm Isaac!</h1>
          <p>
            I'm a co-op student at the University of Waterloo, currently working with Vue and
            TypeScript.
          </p>
        </v-card-text>
        <v-card-actions class="justify-center">
          <v-btn
            class="ma-2"
            prepend-icon="mdi-web"
            variant="elevated"
            href="https://isaacjiang.ca"
            target="_blank"
            color="grey-darken-3"
          >
            Website</v-btn
          >
        </v-card-actions>

        <v-card-text class="text-white">
          <h2>Projects</h2>
          <v-card class="my-5" max-width="400">
            <v-card-title>The Bigger Picture.</v-card-title>
            <v-card-text>
              <p>
                An online photo mosaic generator that allows users to collaboratively prepare and
                render stunning mosaics.
              </p>
            </v-card-text>
          </v-card>
          <v-card class="my-5" max-width="400">
            <v-card-title>StudyLock</v-card-title>
            <v-card-text>
              <p>
                A 3-in-1 studying application that detects distractions and sends text message
                alerts if you are caught scrolling on your phone, a plushie that shouts at you when
                you stray off task, and an integrated to-do list.
              </p>
            </v-card-text>
          </v-card>
        </v-card-text>
      </v-card>
    </v-main>
  </v-app>
</template>

<style scoped>
.speed-dial-wrapper {
  position: fixed;
  bottom: 20px;
  right: 20px;
}

.about-hero {
  background: #272727;
  border-radius: 20px;
  max-width: 400px;
}

.about-hero-wrapper {
  /* ensure it’s at least the full viewport, but can grow bigger */
  min-height: 100vh;
  overflow-y: auto; /* let it scroll when content overflows */
}
.about-hero {
  background: #272727;
  border-radius: 20px;
  max-width: 400px;
  margin: 2rem; /* give it some breathing room */
}
</style>
