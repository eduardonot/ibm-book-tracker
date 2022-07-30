<template>
  <v-layout align-center justify-center>
    <v-flex xs12 md4 sm8>
      <v-card class="elevation-12">
        <v-toolbar dark color="primary">
          <v-toolbar-title>
            Formulário de Cadastro
          </v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field
            :rules="rules"
              name="name"
              label="Nome"
              type="text"
              v-model="user.name"
            >
            </v-text-field>
            <v-text-field
              :rules="rules"
              name="email"
              label="Email"
              type="email"
              v-model="user.email"
            >
            </v-text-field>
            <v-text-field
              :rules="passwordRules"
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
          <v-btn @click="goToLoginForm" color="secondary">Voltar ao Login</v-btn>
          <v-btn @click="register" color="primary">Cadastrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  name: 'FormRegister',
  data: () => {
    return {
      rules: [
        value => !!value || 'Campo obrigatório'
      ],
      passwordRules: [
        value => !!value || 'Campo obrigatório',
        value => (value && value.length >= 6) || 'A senha deve ter no mínimo 6 caracteres'
      ],
      user: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    register () {
      if (this.user.password.length >= 6) {
        this.$store.dispatch('user/register', this.user)
          .then(() => {
            this.$router.push('/')
          })
      }
    },
    goToLoginForm () {
      this.$router.push('/')
    }
  }
}
</script>
