<template>
  <v-layout align-center justify-center>
    <v-flex xs12 md4 sm8>
      <v-card class="elevation-12">
        <v-toolbar dark color="primary">
          <v-toolbar-title>
            Formulário de Login
          </v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field
              :rules="rules"
              name="email"
              label="Email"
              type="email"
              v-model="user.email"
            >
            </v-text-field>
            <v-text-field
              :rules="rules"
              name="password"
              label="Senha"
              type="password"
              v-model="user.password"
            >
            </v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="goToSignupForm" color="primary">Cadastrar</v-btn>
          <v-btn @click="login" color="primary">Entrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  name: 'FormLogin',
  data: () => {
    return {
      rules: [
        value => !!value || 'Campo obrigatório'
      ],
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      if (this.user.email.length > 0 && this.user.password.length > 0) {
        this.$store.dispatch('user/login', this.user)
          .then(() => {
            this.$router.push('/app')
          })
      }
    },
    goToSignupForm () {
      this.$router.push('/register')
    }
  }
}
</script>
