<template>
  <user-books></user-books>
</template>
<script>
import UserBooks from './../components/UserBooks.vue'
export default {
  name: 'UserBookView',
  components: { UserBooks },
  mounted () {
    this.$store.commit('structure/setAppTitle', 'Meus Livros')
  }
}
</script>
