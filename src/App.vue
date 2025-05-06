<script setup lang="ts">
import { useThemeStore } from '@/stores/themeStore'
import { watch } from 'vue'
import { useTheme } from 'vuetify'

const theme = useThemeStore()
const vuetifyTheme = useTheme()

// Watch for theme changes and apply to Vuetify
watch(
  () => theme.darkMode,
  (newVal) => {
    vuetifyTheme.global.name.value = newVal ? 'dark' : 'light'
  },
  { immediate: true },
)
</script>

<template>
  <v-app :class="{ 'dark-theme': theme.darkMode }">
    <v-app-bar app :color="theme.darkMode ? 'grey-darken-4' : 'white'">
      <RouterLink to="/" custom v-slot="{ navigate }">
        <v-toolbar-title class="navbar-text" @click="navigate">
          <v-icon
            size="40"
            :color="theme.darkMode ? 'white' : 'black'"
            icon="mdi-ufo-outline"
          ></v-icon>
          Portal Co-op Team Summer 2025
        </v-toolbar-title>
      </RouterLink>

      <v-spacer />
      <v-btn
        to="/apipage"
        variant="elevated"
        class="nav-btn text-black ma-5 mr-10"
        exact
        :ripple="false"
      >
        <span :class="{ 'text-white': theme.darkMode, 'text-black': !theme.darkMode }">
          <v-icon class="mr-1" size="small">mdi-currency-btc</v-icon>Crypto
        </span>
      </v-btn>

      <v-btn
        to="/cookies"
        variant="elevated"
        class="nav-btn text-black ma-5 mr-10"
        exact
        :ripple="false"
      >
        <span :class="{ 'text-white': theme.darkMode, 'text-black': !theme.darkMode }">
          Cookies
        </span>
      </v-btn>

      <v-btn to="/isaac" variant="elevated" class="nav-btn text-black ma-5" exact :ripple="false">
        <span :class="{ 'text-white': theme.darkMode, 'text-black': !theme.darkMode }">Isaac</span>
      </v-btn>

      <v-btn to="/raj" variant="elevated" class="nav-btn text-black ma-5" exact :ripple="false">
        <span :class="{ 'text-white': theme.darkMode, 'text-black': !theme.darkMode }">Raj</span>
      </v-btn>

      <v-btn to="/rick" variant="elevated" class="nav-btn text-black ma-5" exact :ripple="false">
        <span :class="{ 'text-white': theme.darkMode, 'text-black': !theme.darkMode }">Rick</span>
      </v-btn>
    </v-app-bar>

    <v-main class="mainpage align-center justify-center">
      <RouterView />
      <v-btn
        @click="theme.toggleTheme"
        class="theme-btn ml-4"
        variant="outlined"
        icon="mdi-theme-light-dark"
      >
      </v-btn>
    </v-main>
  </v-app>
</template>

<style scoped>
body {
  font-family: 'DM Sans', sans-serif;
}

.theme-btn {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 1000;
}

.mainpage {
  font-family: 'DM Sans', sans-serif;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
}

header {
  font-family: 'DM Sans', sans-serif;
  line-height: 1.5;
  max-height: 100vh;
}

.navbar-text {
  font-family: 'DM Sans', sans-serif;
  font-size: 1.5rem;
  color: #000;
}

.navbar-text:hover {
  cursor: pointer;
}

.dark-theme .navbar-text {
  color: #ffffff;
}

.nav-btn {
  font-family: 'DM Sans', sans-serif;
  font-weight: bold;
  color: #000;
  text-decoration: none;
}

.nav-btn:hover {
  color: #ffffff;
}

.dark-theme {
  background-color: #565555;
  color: #ffffff;
}

.dark-theme .v-app-bar {
  background-color: #383737 !important;
}
</style>
