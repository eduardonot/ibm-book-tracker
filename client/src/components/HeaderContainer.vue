<template>
  <v-app-bar
    flat
    color="rgba(0, 0, 0, 0)"
  >
    <v-toolbar-title>{{title}}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn v-if="title === 'Meus Livros'" @click="addNew">
      Adicionar Novo
    </v-btn>
  </v-app-bar>
</template>
<script>
export default {
  name: 'HeaderContainer',
  computed: {
    title () {
      return this.$store.getters['structure/getAppTitle']
    }
  },
  methods: {
    addNew () {
      this.$store.commit('structure/openPreviewNewBookModal')
    }
  }
}
</script>
