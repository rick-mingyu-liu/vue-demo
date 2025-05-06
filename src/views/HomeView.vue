<script setup lang="ts">
import isaac from '../assets/isaac.jpg'
import raj from '../assets/raj.jpg'
import rick from '../assets/rick.jpg'
import { RouterLink } from 'vue-router'
import { ref, onMounted } from 'vue'

const coins = ['BTC', 'ETH', 'DOGE']
const prices = ref<Record<string, string | number>>({})
const isLoading = ref(true)

const fetchPrices = async () => {
  isLoading.value = true
  for (const coin of coins) {
    try {
      const res = await fetch(`https://api.coinbase.com/v2/prices/${coin}-USD/spot`)
      const data = await res.json()
      prices.value[coin] = parseFloat(data.data.amount).toFixed(2)
    } catch {
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

          <div class="crypto-prices pa-4 mb-6 mx-auto" style="max-width: 600px">
            <h2 class="mb-4">Live Crypto Prices</h2>
            <ul class="mb-4">
              <li v-for="coin in coins" :key="coin" class="price-item">
                <a
                  :href="`https://www.coinbase.com/price/${coin.toLowerCase()}`"
                  target="_blank"
                  rel="noopener"
                  class="coin-link"
                >
                  {{ coin }} </a
                >: ${{ prices[coin] || 'Loading...' }} USD
              </li>
            </ul>
            <v-btn @click="fetchPrices" color="white" class="mb-2" :disabled="isLoading">
              {{ isLoading ? 'Refreshing...' : 'Refresh' }}
            </v-btn>
          </div>
        </v-container>
      </main>
    </div>
  </div>
</template>

<style scoped>
.coin-link {
  color: #000000; /* your desired font color */
  text-decoration: none; /* optional: remove underline */
}

.coin-link:hover {
  color: #333333; /* slightly lighter on hover */
}

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

.crypto-prices {
  background-color: white;
  border-radius: 30px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  text-align: center;
  will-change: transform;
}

.price-item {
  height: 2.2rem;
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

.dark-theme .crypto-prices {
  background-color: #1e1e1e;
  color: #ffffff;
}

.dark-theme .crypto-prices .coin-link {
  color: #ffffff;
}

.dark-theme .crypto-prices .coin-link:hover {
  color: #ffffff;
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
