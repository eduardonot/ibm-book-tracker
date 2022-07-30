<template>
  <v-card>
    <v-card-title>
      Meus Livros
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
        <v-row>
          <v-btn-toggle
            v-model="form.status"
          >
          <v-btn
            v-for="status in bookStatus"
            :key="status"
            :value="status"
          >{{status}}
          </v-btn>
          </v-btn-toggle>
          <v-rating
            v-if="form.status === 'lido'"
            empty-icon="mdi-star-outline"
            full-icon="mdi-star"
            hover
            length="5"
            size="35"
            v-model="rating"
          >
          </v-rating>
        </v-row>
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
        color="red"
        dark
        @click="remove"
      >
        Remover
      </v-btn>
      <v-btn
        color="primary"
        @click="save"
      >
        Salvar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  data () {
    return {
      bookIndex: null,
      bookStatus: ['quero ler', 'lendo', 'lido'],
      rating: 0,
      form: {
        title: '',
        author: '',
        status: '',
        createdAt: '',
        conclusionDate: '',
        rating: 5
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
      this.form.status = data.item.status
      this.form.createdAt = data.item.createdAt
      this.form.conclusionDate = data.item.conclusionDate
      this.form.rating = data.item.rating
      this.bookIndex = data.index
    },
    closeModal () {
      this.$store.commit('structure/closePreviewMyBooksModal')
    },
    save () {
      this.form.rating = this.rating
      this.$store.dispatch('user/updateBook', {
        index: this.bookIndex,
        data: this.form
      })
        .then(() => this.$store.dispatch('user/getUserData'))
      this.closeModal()
    },
    remove () {
      this.$store.dispatch('user/removeBook', {
        title: this.form.title
      })
        .then(() => this.$store.dispatch('user/getUserData'))
      this.closeModal()
    },
    cancel () {
      this.closeModal()
    }
  }
}
</script>
