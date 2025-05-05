<script setup lang="ts">
import isaac from '../assets/isaac.jpg'
import raj from '../assets/raj.jpg'
import rick from '../assets/rick.jpg'
import { RouterLink } from 'vue-router'
import { ref, onMounted } from 'vue'

const coins = ['BTC', 'ETH', 'DOGE']
const prices = ref({})
const isLoading = ref(true)

const fetchPrices = async () => {
  isLoading.value = true
  for (const coin of coins) {
    try {
      const res = await fetch(`https://api.coinbase.com/v2/prices/${coin}-USD/spot`)
      const data = await res.json()
      prices.value[coin] = parseFloat(data.data.amount).toFixed(2)
    } catch (error) {
      prices.value[coin] = 'Error'
    }
  }
  isLoading.value = false
}

onMounted(fetchPrices)
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
                <RouterLink :to="person.route">
                  <v-avatar
                    class="outlined-avatar mx-auto mb-4"
                    size="200"
                    :image="person.image"
                    :alt="`${person.name}'s profile picture`"
                  />
                </RouterLink>
                <div class="names">{{ person.name }}</div>
              </div>
            </v-col>
          </v-row>

          <div class="crypto-prices pa-4 mb-6 mx-auto" style="max-width: 600px">
            <h2 class="mb-4">📈 Live Crypto Prices</h2>
            <ul class="mb-4">
              <li v-for="coin in coins" :key="coin" class="price-item">
                {{ coin }}: {{ prices[coin] || 'Loading...' }} USD
              </li>
            </ul>
            <v-btn @click="fetchPrices" color="primary" class="mb-2" :disabled="isLoading">
              {{ isLoading ? 'Refreshing...' : 'Refresh' }}
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
  -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */
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

.v-container {
  padding-top: 2rem !important;
  padding-bottom: 2rem !important;
}

.crypto-prices {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  text-align: center;
  will-change: transform; /* Optimize animations */
}

.price-item {
  height: 2.2rem; /* Fixed height for price items */
}

ul {
  list-style: none;
  padding: 0;
}

li {
  font-size: 1.2rem;
  margin: 0.5rem 0;
}

.container-avatar {
  width: 100%;
  padding: 1.5rem;
  background-color: #ffffff;
  border-radius: 30px;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  will-change: transform; /* Optimize animations */
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

.outlined-avatar.thick {
  border-width: 10px;
}

.outlined-avatar.round {
  border-radius: 50%;
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
</style>
