<script setup lang="ts">
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
  <v-app>
    <v-main class="d-flex justify-center align-center crypto-page pa-4">
      <v-container>
        <h1 class="text-h3 font-weight-bold text-center mb-6">Crypto Prices</h1>
        
        <div class="crypto-prices pa-5 mb-6 mx-auto">
          <h2 class="mb-4">Live Crypto Price Tracker</h2>
          <ul class="mb-5">
            <li v-for="coin in coins" :key="coin" class="price-item">
              <a
                :href="`https://www.coinbase.com/price/${coin.toLowerCase()}`"
                target="_blank"
                rel="noopener"
                class="coin-link"
              >
                <v-icon class="mr-2">mdi-currency-btc</v-icon>{{ coin }}
              </a>: 
              <span class="price-value">${{ prices[coin] || 'Loading...' }}</span> USD
            </li>
          </ul>
          <v-btn 
            @click="fetchPrices" 
            color="primary" 
            class="mb-2" 
            :disabled="isLoading"
            size="large"
          >
            <v-icon class="mr-2">mdi-refresh</v-icon>
            {{ isLoading ? 'Refreshing...' : 'Refresh Prices' }}
          </v-btn>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
.crypto-page {
  min-height: 100vh;
  font-family: 'DM Sans', sans-serif;
}

.crypto-prices {
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  will-change: transform;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.crypto-prices:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.price-item {
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.price-value {
  font-weight: bold;
  font-size: 1.3rem;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  font-size: 1.2rem;
  margin: 1rem 0;
}

.coin-link {
  color: #000000;
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
}

.coin-link:hover {
  color: #1976d2;
}

.dark-theme .crypto-prices {
  background-color: #1e1e1e;
  color: #ffffff;
}

.dark-theme .crypto-prices .coin-link {
  color: #ffffff;
}

.dark-theme .crypto-prices .coin-link:hover {
  color: #64b5f6;
}
</style>