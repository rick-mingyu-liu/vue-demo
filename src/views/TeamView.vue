<script setup lang="ts">
import shinong from '../assets/shinong.jpg'
import pavol from '../assets/pavol.jpg'
import james from '../assets/james.jpg'
import joe from '../assets/joe.jpg'
</script>

<template>
  <v-app>
    <v-main>
      <v-container class="main-container">
        meet the team
        <v-container class="bg-surface-variant">

          <v-row no-gutters>
            <v-col>
              <div class="member-container">
                <v-avatar
                  class="mt-3 member"
                  size="150"
                  color="grey darken-3"
                  :image="shinong"
                  alt="Shinong's profile picture"
                ></v-avatar>
                <p>Shinong</p>
              </div>
            </v-col>
          </v-row>

          <v-row no-gutters>
            <v-col>
              <div class="member-container">
                <v-avatar
                  class="mt-3 member"
                  size="150"
                  color="grey darken-3"
                  :image="joe"
                  alt="Joe's profile picture"
                ></v-avatar>
                <p>Joe</p>
              </div>
            </v-col>
          </v-row>

          <v-row no-gutters>
            <v-col>
              <div class="member-container">
                <v-avatar
                  class="mt-3 member"
                  size="150"
                  color="grey darken-3"
                  :image="pavol"
                  alt="Pavol's profile picture"
                ></v-avatar>
                <p>Pavol</p>
              </div>
            </v-col>
          </v-row>

          <v-row no-gutters>
            <v-col>
              <div class="member-container">
                <v-avatar
                  class="mt-3 member"
                  size="150"
                  color="grey darken-3"
                  :image="james"
                  alt="James's profile picture"
                ></v-avatar>
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
  .main-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'DM Sans', sans-serif;
    font-size: 2rem;
    width: 50%;
  }

  .bg-surface-variant {
    padding: 2rem;
    border-radius: 50px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    max-width: 1200px;
  }

  .member {
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .member:hover {
    transform: scale(1.03);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  }

  .member-container {
    display: flex;
    flex-direction: row;
    align-items: center;
  }



</style>
