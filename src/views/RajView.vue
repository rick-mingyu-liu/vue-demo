<script setup lang="ts">
// functions for contact section
import { ref } from 'vue'

const showDialog = ref(false)
const form = ref({ name: '', email: '', message: '' })

function submitForm() {
  const { name, email, message } = form.value
  if (!name || !email || !message) {
    alert('Please fill in all fields.')
    return
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address.')
    return
  }

  console.log('Form submitted:', form.value)

  form.value = { name: '', email: '', message: '' }
  showDialog.value = false
}
</script>

<template>
  <v-app>
    <v-main>
      <v-container class="pa-4 about-container" fluid>
        <div class="content-wrapper">
          <!-- Profile Card -->
          <v-card class="mx-auto profile-card" max-width="700">
            <div class="profile-header">
              <v-avatar size="150" class="profile-avatar">
                <v-img src="/waterloo.png" alt="From public folder" max-width="400" />
              </v-avatar>
              <div class="profile-info">
                <h1 class="profile-name">Hey, I'm Raj!</h1>
                <div class="profile-title">
                  AI Developer
                  <v-chip color="deep-purple" size="small" class="ml-2">University of Waterloo</v-chip>
                </div>
              </div>
            </div>
            <!-- self intro -->
            <v-card-text class="profile-bio">
              I’ve always been curious about how things work, especially when it comes to tech. In
              school, I was the kid who asked way too many questions in math class. That curiosity led
              me to coding, and by the time I hit my teens, I was building small apps and exploring AI.
              Now, I’m all about creating software that solves real problems and helps others!
            </v-card-text>

            <v-divider class="divider"></v-divider>

            <!-- Skills Section -->
            <div class="skills-section pa-4">
              <h2 class="skills-title mb-3">Technologies</h2>
              <div class="skills-grid">
                <v-chip class="ma-1 skill-chip" color="indigo accent-3" text-color="white"
                  >Python</v-chip
                >
                <v-chip class="ma-1 skill-chip" color="purple accent-3" text-color="white">Java</v-chip>
                <v-chip class="ma-1 skill-chip" color="blue darken-2" text-color="white">C++</v-chip>
                <v-chip class="ma-1 skill-chip" color="green accent" text-color="white">C</v-chip>
                <v-chip class="ma-1 skill-chip" color="blue-grey darken-2" text-color="white"
                  >C#</v-chip
                >
                <v-chip class="ma-1 skill-chip" color="green darken-2" text-color="white"
                  >JavaScript</v-chip
                >
                <v-chip class="ma-1 skill-chip" color="red darken-1" text-color="white"
                  >TypeScript</v-chip
                >
                <v-chip class="ma-1 skill-chip" color="purple accent-4" text-color="white"
                  >React</v-chip
                >
                <v-chip class="ma-1 skill-chip" color="orange darken-3" text-color="white">Vue</v-chip>
              </div>
            </div>

            <v-divider class="divider"></v-divider>

            <v-card-actions class="profile-actions">

              <v-badge content="New" offset-x="10" offset-y="10" color="red" overlap>
                <template #badge>
                  <v-icon small>mdi-message-text</v-icon>
                </template>
                <!-- contact section -->
                <v-btn
                  color="black accent-4"
                  dark
                  variant="elevated"
                  class="contact-btn"
                  @click="showDialog = true"
                >
                  <v-icon start>mdi-email-outline</v-icon> Contact Me‎ ‎ ‎ ‎ ‎
                </v-btn>
              </v-badge>
              <!-- personal web link -->
              <v-btn
                color="deep-purple accent-4"
                dark
                variant="elevated"
                class="social-btn"
                href="https://www.rajshah.live"
                target="_blank"
              >
                <v-icon start>mdi-account</v-icon> Website
              </v-btn>
              <!-- github link -->
              <v-btn
                color="blue accent-4"
                dark
                variant="elevated"
                href="https://github.com/rajshah6"
                target="_blank"
              >
                <v-icon start>mdi-github</v-icon> GitHub
              </v-btn>
            </v-card-actions>
          </v-card>

          <!-- More info -->
          <v-expansion-panels multiple class="mt-4 info-panels">
            <v-expansion-panel>
              <v-expansion-panel-title>More About Me</v-expansion-panel-title>
              <v-expansion-panel-text>
                I'm currently exploring RAG pipelines with LangChain and preparing for future
                opportunities. I love to learn and grow, and I’m always on the lookout for new
                challenges. I believe that with the right tools, we can solve some of the biggest
                problems we face today.
              </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-title>Hobbies & Interests</v-expansion-panel-title>
              <v-expansion-panel-text>
                Running every morning, mentoring students, and playing chess.
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>

        <!-- Contact Form Dialog -->
        <v-dialog v-model="showDialog" max-width="500" transition="dialog-bottom-transition">
          <v-card class="contact-dialog">
            <v-toolbar color="deep-purple accent-4" dark flat>
              <v-toolbar-title>Get in Touch</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn icon @click="showDialog = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-toolbar>

            <v-card-text class="pt-6">
              <v-form ref="contactForm" class="contact-form" action="https://formspree.io/f/mblooeoo" method="POST">
                <input type="text" name="name" v-model="form.name" required placeholder="Name" class="native-input" />
                <input type="email" name="_replyto" v-model="form.email" required placeholder="Email" class="native-input" />
                <textarea name="message" v-model="form.message" required placeholder="Your message" class="native-input"></textarea>

                <input type="hidden" name="_subject" value="New message from your site!" />

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn variant="text" @click="showDialog = false">Cancel</v-btn>
                  <v-btn type="submit" color="deep-purple accent-4">
                    <v-icon start>mdi-send</v-icon> Send
                  </v-btn>
                </v-card-actions>
              </v-form>
            </v-card-text>

          </v-card>
        </v-dialog>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
.about-container {
  min-height: 100vh;
  display: flex;
  padding: 2rem 1rem;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
}

.profile-card {
  border-radius: 20px;
  /* background-color: #ffffff; */
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s;
  overflow: hidden;
  width: 100%;
}

.profile-card:hover {
  transform: translateY(-5px);
}

.profile-header {
  padding: 2rem 2rem 0.5rem;
  display: flex;
  align-items: center;
  gap: 2rem;
}

.profile-avatar {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  border: 4px solid white;
  flex-shrink: 0;
}

.profile-info {
  flex: 1;
}

.profile-name {
  font-size: 2rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 0.5rem;
}

.profile-title {
  font-size: 1.1rem;
  color: #666;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.profile-bio {
  font-size: 1.05rem;
  line-height: 1.6;
  color: #555;
  padding: 0.5rem 2rem;
}

.divider {
  margin: 0.5rem 0;
}

.skills-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: #333;
}

.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-chip {
  font-weight: 500;
  border-radius: 12px;
}

.profile-actions {
  padding: 1.5rem 2rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.contact-btn {
  min-width: 140px;
}

.contact-dialog {
  border-radius: 12px;
  overflow: hidden;
}

.contact-form .v-input {
  margin-bottom: 1.25rem;
}

.info-panels {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

.native-input {
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
}

@media (max-width: 600px) {
  .profile-header {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }

  .profile-title {
    justify-content: center;
  }

  .profile-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .about-container {
    padding: 1rem 0.5rem;
  }
}

/* dark theme */
.dark-theme {
  .profile-name,
  .skills-title {
    color: #ffffff;
  }

  .profile-title {
    color: #e0e0e0;
  }

  .profile-bio {
    color: #b0bec5;
  }
}
</style>
