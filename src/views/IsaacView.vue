<script setup lang="ts">
import avatar from '../assets/isaac.jpg'
</script>

<template>
  <v-app>
    <v-main class="about-hero-wrapper d-flex justify-center align-center">
      <v-card title="Introduction" class="about-hero text-center">
        <v-avatar
          class="mx-auto mt-3"
          size="150"
          color="grey darken-3"
          :image="avatar"
          alt="Isaac's profile picture"
        ></v-avatar>
        <v-card-text class="intro-text">
          <h1>Hi, I'm Isaac!</h1>
          <br />
          <p>
            I'm a Computer Science student at the University of Waterloo, currently working with Vue
            and TypeScript. Feel free to check out my projects and connect with me on LinkedIn!
          </p>
        </v-card-text>

        <v-card-actions class="justify-center">
          <v-btn
            class="website-btn ma-2"
            prepend-icon="mdi-web"
            variant="elevated"
            href="https://isaacjiang.ca"
            target="_blank"
          >
            Website</v-btn
          >
        </v-card-actions>

        <v-divider class="my-4"></v-divider>

        <v-card-text class="text-white">
          <h2 class="project-heading">Projects</h2>
          <v-card
            class="project my-5"
            max-width="500"
            href="https://dorahacks.io/buidl/21598"
            target="_blank"
          >
            <v-card-title>The Bigger Picture.</v-card-title>
            <v-card-text>
              <p>
                An online photo mosaic generator that allows users to collaboratively prepare and
                render stunning mosaics.
              </p>
            </v-card-text>
          </v-card>
          <v-card
            class="project my-5"
            max-width="500"
            href="https://devpost.com/software/focuslock-d7iajx"
            target="_blank"
          >
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
.dark-theme .about-hero {
  background: #1e1e1e;
}

.about-hero {
  background: #ffffff;
  border-radius: 50px;
  max-width: 500px;
  margin: 2rem; /* give it some breathing room */
}

.dark-theme .intro-text {
  color: #ffffff;
}

.website-btn {
  border-radius: 20px;
  padding: 0.5rem 1rem;
}

.intro-text {
  color: #000000;
}

.dark-theme .project-heading {
  color: #ffffff;
}

.project-heading {
  color: #000;
}

.project {
  border-radius: 30px;
  padding: 0.5rem;
  background-color: rgb(250, 250, 250);
}

.dark-theme .project {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  background-color: rgb(26, 26, 26);
}

.project:hover {
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  background-color: rgb(255, 255, 255);
}

.dark-theme .project:hover {
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  background-color: rgb(14, 14, 14);
}
</style>
