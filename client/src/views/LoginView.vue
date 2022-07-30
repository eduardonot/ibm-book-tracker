<template>
  <v-container fluid fill-height>
    <form-login></form-login>
  </v-container>
</template>
<script>
import FormLogin from './../components/FormLogin.vue'
export default {
  name: 'LoginView',
  components: {
    FormLogin
  }
}
</script>
