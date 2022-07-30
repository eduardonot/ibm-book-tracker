<template>
  <v-card>
    <v-card-title>
      Biblioteca
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field
          name="title"
          label="Título"
          type="text"
          disabled
          v-model="form.title"
        >
        </v-text-field>
        <v-text-field
          name="author"
          label="Autor"
          disabled
          type="text"
          v-model="form.author"
        >
        </v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
    <v-spacer></v-spacer>
      <v-btn
        color="grey"
        text
        @click="cancel"
      >
        Cancelar
      </v-btn>
      <v-btn
        color="primary"
        @click="save"
      >
        Adicionar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: 'FormAddToMyBooks',
  data () {
    return {
      bookIndex: null,
      form: {
        title: '',
        author: ''
      }
    }
  },
  props: {
    book: {
      type: Object,
      required: true
    }
  },
  watch: {
    book: {
      handler (val) {
        this.setBooks(val)
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    setBooks (data) {
      this.form.title = data.item.title
      this.form.author = data.item.author
      this.bookIndex = data.index
    },
    closeModal () {
      this.$store.commit('structure/closePreviewLibraryBookModal')
    },
    save () {
      this.$store.dispatch('book/insertIntoUserBookCatalog', this.form)
        .then(() => this.$store.dispatch('user/getUserData'))
        .then(() => alert('Livro adicionado em "Meus Livros"!'))
      this.closeModal()
    },
    cancel () {
      this.closeModal()
    }
  }
}
</script>
