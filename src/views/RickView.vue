<script setup lang="ts">
import avatar from '../assets/rick.jpg'
</script>

<template>
  <v-app>
    <v-main class="about-hero-wrapper d-flex justify-center align-center pa-4">
      <v-card class="intro">
        <v-avatar
          class="mx-auto mt-3"
          size="150"
          color="grey darken-3"
          :image="avatar"
          alt="Rick's profile picture"
        >
      </v-avatar>
        <h1>Hi, I'm Rick <span class="wave">👋</span></h1>
        <p>
          I'm a second year Computational Mathematics student at the University of Waterloo.
          I've committed to learning deeply, working hard, and building cool projects! 💻
        </p>
        <p>
          With curiosity and determination, I believe we can create applications that make a real impact.
          I'm especially grateful for the opportunity to pursue an AI developer role, and I'm ready to
          give my full effort to be part of that journey! 🌈
        </p>
        <p>
          Feel free to check out my website and get in touch! 🤝
        </p>
        <v-btn
          variant="outlined"
          href="https://rick-mingyu-liu.github.io/personal-web/"
          target="_blank"
          class="mt-4 custom-btn"
        >
          Personal Website
        </v-btn>
      </v-card>
    </v-main>
  </v-app>
</template>

<style scoped>
/* animation for waving hand */
@keyframes wave-animation {
  0% {
    transform: rotate(0deg);
  }
  15% {
    transform: rotate(14deg);
  }
  30% {
    transform: rotate(-8deg);
  }
  45% {
    transform: rotate(14deg);
  }
  60% {
    transform: rotate(-4deg);
  }
  75% {
    transform: rotate(10deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.wave {
  display: inline-block;
  transform-origin: 70% 70%;
  animation: wave-animation 1.5s ease-in-out 1;
}

/* font setting */
h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: semi-bold;
  color: rgb(27, 252, 91);
}

p {
  font-size: 1.2rem;
  line-height: 1.6;
}

/* light theme */
.intro {
  padding: 2rem 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  max-width: 700px;
  text-align: center;
  transition: box-shadow 0.3s ease;
}

.intro:hover {
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.25);
}

.custom-btn {
  color: #ffffff;
  background-color: #1976d2;
  border: 1px solid #1976d2;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.custom-btn:hover {
  background-color: #00050b;
  color: #e3f2fd;
}

/* dark theme  */
.dark-theme .intro{
  background-color: #323232;
  color: #ffffff;
  box-shadow: 0 10px 25px rgba(255, 255, 255, 0.1);
  transition: background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
}

.dark-theme .intro:hover {
  box-shadow: 0 12px 35px rgba(255, 255, 255, 0.25);
}

.dark-theme .custom-btn {
  background-color: #424242;
  border: 1px solid #424242;
}

.dark-theme .custom-btn:hover {
  background-color: #616161;
  color: #ffffff;
}
</style>
