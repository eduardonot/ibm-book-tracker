<template>
  <v-layout column>
    <v-card>
      <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Pesquisar"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="books"
        :search="search"
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
        <form-my-books :book="bookSelected"></form-my-books>
      </v-dialog>
      <v-dialog
      v-model="isNewBookModalOpen"
        max-width = "600px"
      >
        <form-add-new-book :book="bookSelected"></form-add-new-book>
      </v-dialog>
    </v-card>
  </v-layout>
</template>
<script>
import FormAddNewBook from './FormAddNewBook.vue'
import FormMyBooks from './FormMyBooks.vue'
export default {
  name: 'UserBooks',
  components: { FormMyBooks, FormAddNewBook },
  data () {
    return {
      search: '',
      bookSelected: {},
      headers: [
        { text: 'Título', value: 'title' },
        { text: 'Autor', value: 'author' },
        { text: 'Status', value: 'status' },
        { text: 'Data de Início', value: 'createdAt' },
        { text: 'Data de Término', value: 'conclusionDate' },
        { text: 'Nota', value: 'rating' }
      ]
    }
  },
  computed: {
    books () {
      return this.$store.getters['user/getBooks']
    },
    isModalOpen: {
      get () {
        return this.$store.getters['structure/getPreviewMyBooksModal']
      },
      set () {
        this.$store.commit('structure/closePreviewMyBooksModal')
      }
    },
    isNewBookModalOpen: {
      get () {
        return this.$store.getters['structure/getPreviewNewBookModal']
      },
      set () {
        this.$store.commit('structure/closePreviewNewBookModal')
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
    onClickRow (_item, element) {
      this.bookSelected = element
      this.$store.commit('structure/openPreviewMyBooksModal')
    }
  }
}
</script>
