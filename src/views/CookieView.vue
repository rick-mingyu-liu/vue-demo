<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { useCookieStore } from '../stores/cookie.ts'
import cookie from '../assets/cookie.png'

const store = useCookieStore()

//websocket
let ws: WebSocket

function handleClick() {
  store.increment()
  if (ws.readyState === WebSocket.OPEN) {
    ws.send(JSON.stringify({ type: 'cookieClick', count: store.clickCount }))
  }
}

onMounted(() => {
  ws = new WebSocket('https://demoserver-54oa.onrender.com') // Replace with your WebSocket server URL

  ws.addEventListener('open', () => {
    ws.send(JSON.stringify({ type: 'init', count: store.clickCount }))
  })

  ws.addEventListener('message', evt => {
    const msg = JSON.parse(evt.data)
    if (msg.type === 'init' || msg.type === 'update') {
      store.clickCount = msg.count
    }
  })
})

onUnmounted(() => {
  if (ws && ws.readyState === WebSocket.OPEN) ws.close()
})
</script>

<template>
  <v-app>
    <v-main class="d-flex flex-column justify-center align-center">
      <v-container fluid class="d-flex justify-center align-center">
        <v-img class="cookie-image" :src="cookie" alt="Cookie Image" max-width="300" @click="handleClick" />
      </v-container>
      <div>
        Cookie has been clicked
        <strong>{{ store.clickCount }}</strong> times!
      </div>
    </v-main>
  </v-app>
</template>

<style scoped></style>
