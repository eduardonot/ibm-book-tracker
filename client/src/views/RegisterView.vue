<template>
  <v-container fluid fill-height>
    <form-register></form-register>
  </v-container>
</template>
<script>
import FormRegister from './../components/FormRegister.vue'
export default {
  name: 'RegisterView',
  components: {
    FormRegister
  }
}
</script>
