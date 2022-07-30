<template>
  <global-books></global-books>
</template>
<script>
import GlobalBooks from '../components/GlobalBooks.vue'
export default {
  name: 'BooksView',
  components: { GlobalBooks },
  mounted () {
    this.$store.commit('structure/setAppTitle', 'Biblioteca')
  }
}
</script>
