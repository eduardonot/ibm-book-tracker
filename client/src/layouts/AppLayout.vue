<template>
  <v-app
    :style="{
      background: $vuetify.theme.themes[colorTheme].background
    }"
  >
    <v-app-bar
      app
      dark
      color="primary"
      dense
      elevation = 0
    >
      <v-app-bar-title>
        <div class="title-row">
          <router-link to="/app" tag="span" style="cursor: pointer">BookTracker</router-link>
          <v-img src="@/assets/logo.png" max-width="25"></v-img>
        </div>
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn
        color="primary"
        elevation = 0
        v-for="menu in menuItems"
        :key="menu.title"
        :to="menu.path"
        exact
      >
        {{menu.title}}
      </v-btn>
      <v-btn
        color="primary"
        elevation = 0
        @click="logout"
      >
        <span class="mr-2">Sair</span>
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container style="padding-top: 80px">
        <v-card>
          <v-card-title>
            <header-container></header-container>
            <v-card-text>
              <router-view></router-view>
            </v-card-text>
          </v-card-title>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import HeaderContainer from './../components/HeaderContainer.vue'
export default {
  name: 'AppLayout',
  components: { HeaderContainer },
  data () {
    return {
      colorTheme: 'light',
      menuItems: [
        {
          title: 'Biblioteca',
          path: '/app'
        },
        {
          title: 'Meus Livros',
          path: '/app/userbooks'
        }
      ]
    }
  },
  beforeCreate () {
    const getUser = this.$store.getters['user/getUser']
    if (!getUser.token && !localStorage.getItem('token')) {
      alert('É necessário estar logado para acessar essa página')
      this.$router.push('/')
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('user/logout')
        .then(() => this.$router.push('/'))
    }
  }
}
</script>
<style>
  .title-row {
    display: flex;
    flex-direction: row;
  }

  @media screen and (max-width: 560px) {
    .title-row {
      display: none;
    }
  }
</style>
