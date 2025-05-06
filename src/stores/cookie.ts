import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCookieStore = defineStore('cookie', () => {
  const clickCount = ref(0)

  function increment() {
    clickCount.value++
  }

  return { clickCount, increment }
})
