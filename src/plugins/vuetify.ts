// plugins/vuetify.js
import 'vuetify/styles'              // ← this line pulls in all of Vuetify’s CSS
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify({
  components,
  directives,
})