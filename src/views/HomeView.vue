<script setup lang="ts">
import isaac from '../assets/isaac.jpg'
import raj from '../assets/raj.jpg'
import rick from '../assets/rick.jpg'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="page-wrapper">
    <div class="scroll-container">
      <main class="mainpage">
        <v-container class="pt-8 pb-4" fluid>
          <h1 class="title text-h3 font-weight-bold text-center mb-6">Meet the Interns!</h1>

          <v-row class="justify-center mb-8">
            <v-col
              v-for="(person, index) in [
                { name: 'Isaac Jiang', image: isaac, route: '/isaac' },
                { name: 'Raj Shah', image: raj, route: '/raj' },
                { name: 'Rick Liu', image: rick, route: '/rick' },
              ]"
              :key="index"
              cols="12"
              sm="6"
              md="4"
              class="d-flex"
            >
              <div class="container-avatar mx-auto">
                <RouterLink :to="person.route" custom v-slot="{ navigate }">
                  <v-avatar
                    class="outlined-avatar mx-auto mb-4"
                    size="200"
                    :image="person.image"
                    @click="navigate"
                    :alt="`${person.name}'s profile picture`"
                  />
                </RouterLink>
                <div class="names">{{ person.name }}</div>
              </div>
            </v-col>
          </v-row>

          <div class="text-center mb-8">
            <v-btn
              to="/crypto"
              size="x-large"
              color="primary"
              prepend-icon="mdi-currency-btc"
              elevation="2"
              class="crypto-button"
            >
              Check Live Crypto Prices
            </v-btn>
          </div>
        </v-container>
      </main>
    </div>
  </div>
</template>

<style scoped>
.page-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.scroll-container {
  height: 100%;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  scroll-behavior: smooth;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.mainpage {
  font-family: 'DM Sans', sans-serif;
  background: #f5f7fa;
  min-height: 100vh;
  width: 100%;
  position: relative;
}

.container-avatar {
  width: 90%;
  padding: 1rem;
  background-color: #ffffff;
  border-radius: 30px;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  will-change: transform;
}

.container-avatar:hover {
  transform: scale(1.03);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
}

.names {
  font-family: 'DM Sans', sans-serif;
  font-size: large;
  color: #000000;
  text-align: center;
  margin-top: 0.5rem;
}

.title {
  font-family: 'DM Sans', sans-serif;
}

.outlined-avatar {
  display: block;
  transition: transform 0.3s ease;
}

.outlined-avatar:hover {
  cursor: pointer;
}

.outlined-avatar.thick {
  border-width: 10px;
}

.outlined-avatar.round {
  border-radius: 50%;
}

.crypto-button {
  transition: transform 0.3s ease;
}

.crypto-button:hover {
  transform: translateY(-3px);
}

@media (max-width: 600px) {
  h1.title {
    font-size: 1.8rem !important;
    margin-top: 0.5rem;
  }

  .v-avatar {
    max-width: 100%;
    height: auto;
  }
}

.dark-theme {
  background-color: #121212;
  color: #ffffff;
}

.dark-theme .v-app-bar {
  background-color: #1e1e1e !important;
}

.dark-theme .mainpage {
  background-color: #121212;
}

.dark-theme .container-avatar {
  background-color: #1e1e1e;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.dark-theme .names {
  color: #ffffff;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}
</style>
