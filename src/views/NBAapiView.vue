<script setup lang="ts">
import { ref, onMounted } from 'vue'

const games = ref([])

const fetchNBAGames = async () => {
  const today = new Date().toISOString().split('T')[0] // YYYY-MM-DD
  const res = await fetch(`https://www.balldontlie.io/api/v1/games?start_date=${today}&end_date=${today}`)
  const data = await res.json()
  games.value = data.data
}

const formatTime = (datetime) => {
  return new Date(datetime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

onMounted(fetchNBAGames)
</script>

<template>
  <div class="nba-games">
    <h2>🏀 NBA Games Today</h2>
    <ul v-if="games.length">
      <li v-for="game in games" :key="game.id">
        {{ game.home_team.full_name }} vs {{ game.visitor_team.full_name }} – {{ formatTime(game.date) }}
      </li>
    </ul>
    <p v-else>Loading games...</p>
  </div>
</template>

<style scoped>
.nba-games {
  background-color: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 500px;
  text-align: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  margin: 2rem auto;
}
</style>
