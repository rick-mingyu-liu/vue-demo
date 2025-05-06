<script setup lang="ts">
import shinong from '../assets/shinong.jpg'
import pavol from '../assets/pavol.jpg'
import james from '../assets/james.jpg'
import joe from '../assets/joe.jpg'
import overlay from '../assets/overlay.png'
</script>

<template>
  <v-app>
    <v-main>
      <v-container class="main-container">
        <p class="title">Meet the Team!</p>
        <v-container class="background">

          <v-row no-gutters>
            <v-col>
              <div class="member-container text-center">
                <a href="https://github.com/JoeRadman" target="_blank" rel="noopener noreferrer">
                  <v-avatar class="mt-3 member" size="150" :image="joe" />
                </a>
                <p>Joe</p>
              </div>
            </v-col>
          </v-row>

          <v-row no-gutters>
            <v-col>
              <div class="member-container text-center">
                <a href="https://github.com/PavolC" target="_blank" rel="noopener noreferrer">
                  <v-avatar class="mt-3 member" size="150" :image="pavol" />
                </a>
                <p>Pavol</p>
              </div>
            </v-col>
          </v-row>

          <v-row no-gutters>
            <v-col>
              <div class="member-container text-center">
                <a href="https://github.com/shinong" target="_blank" rel="noopener noreferrer">
                  <v-avatar class="mt-3 member" size="150" :image="shinong" />
                </a>
                <p>Shinong</p>
              </div>
            </v-col>
          </v-row>

          <v-row no-gutters>
            <v-col>
              <div class="member-container text-center">
                <a href="https://github.com/JamesFrenchUW" target="_blank" rel="noopener noreferrer">
                  <v-avatar class="mt-3 member" size="150" :image="james" />
                </a>
                <p>James</p>
              </div>
            </v-col>
          </v-row>

        </v-container>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
main {
  background-image: url(../assets/overlay.png);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 2rem;
  margin-top: 2rem;
  text-align: center;
}

.main-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'DM Sans', sans-serif;
  font-size: 2rem;
  width: fit-content;
  margin-bottom: 5rem;
}

.main-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'DM Sans', sans-serif;
  font-size: 2rem;
}

.background {
  background-color: rgba(255, 255, 255, 0.01);
  padding: 2rem;
  border-radius: 50px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  max-width: 1200px;
}

.member {
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-bottom: 2rem;
  margin-right: 1rem;
}

.member:hover {
  transform: scale(1.03);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
}

/* Container for avatar + name */
.member-container {
  display: flex;
  flex-direction: row;
  align-items: center;
}

/* Link cleanup: removes unwanted hover background/outline */
.member-container a {
  text-decoration: none;
  background: transparent;
  border-radius: 50%;
  display: inline-block;
}

.member-container a:focus,
.member-container a:hover,
.member-container a:active {
  outline: none;
  box-shadow: none;
  background-color: transparent;
}

/* Optional: hover effect directly on avatar inside link */
.member-container a:hover .member {
  transform: scale(1.05);
  transition: transform 0.2s ease;
}
</style>
