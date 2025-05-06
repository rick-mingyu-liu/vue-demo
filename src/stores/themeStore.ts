import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    darkMode: false // Start in light mode
  }),
  actions: {
    toggleTheme() {
      this.darkMode = !this.darkMode
    }
  }
})
