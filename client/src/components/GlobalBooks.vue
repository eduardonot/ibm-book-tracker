<template>
  <v-layout column>
    <v-text-field
      v-model="search"
      append-icon="mdi-magnify"
      label="Pesquisar"
      single-line
      hide-details
    ></v-text-field>
    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="books"
      :search="search"
      item-key="title"
      :items-per-page="10"
      @click:row = "onClickRow"
    >
      <v-skeleton-loader
        class="mx-auto"
        max-width="100%"
        type="card">
      </v-skeleton-loader>
    </v-data-table>
    <v-dialog
      v-model="isModalOpen"
        max-width = "600px"
      >
        <form-add-to-my-books :book="bookSelected"></form-add-to-my-books>
      </v-dialog>
  </v-layout>
</template>
<script>
import FormAddToMyBooks from './FormAddToMyBooks.vue'
export default {
  components: { FormAddToMyBooks },
  name: 'GlobalAccessBookDatabase',
  data () {
    return {
      search: '',
      selected: [],
      bookSelected: {},
      headers: [
        { text: 'Título', value: 'title' },
        { text: 'Autor', value: 'author' }
      ]
    }
  },
  computed: {
    books () {
      return this.$store.getters['book/getBooks']
    },

    user () {
      return this.$store.getters['user/getUser']
    },

    userBooks () {
      return this.$store.getters['user/getBooks']
    },
    isModalOpen: {
      get () {
        return this.$store.getters['structure/getPreviewLibraryBookModal']
      },
      set () {
        this.$store.commit('structure/closePreviewLibraryBookModal')
      }
    }
  },
  created () {
    this.requestBooks()
    this.requestUserBookCatalog()
  },
  methods: {
    requestBooks () {
      this.$store.dispatch('book/getBooks')
    },
    requestUserBookCatalog () {
      this.$store.dispatch('user/getUserData')
    },
    insertIntoUserBookCatalog () {
      const book = {
        author: this.selected[0].author,
        title: this.selected[0].title
      }
      this.$store.dispatch('book/insertIntoUserBookCatalog', book)
      this.requestUserBookCatalog()
    },
    onClickRow (_item, element) {
      this.bookSelected = element
      this.$store.commit('structure/openPreviewLibraryBookModal')
    }
  }
}
</script>
