import { instance as request } from './../plugins/axios'

export default {
  state: {
    books: []
  },
  getters: {
    getBooks (state) {
      return state.books
    }
  },
  mutations: {
    setBooks (state, books) {
      state.books = books
    }
  },
  actions: {
    getBooks ({ commit }) {
      return new Promise((resolve, reject) => {
        request.get('/book')
          .then(response => {
            commit('setBooks', response.data.body)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    insertIntoUserBookCatalog (_commit, payload) {
      return new Promise((resolve) => {
        request.post('/insertintouserbookcatalog', payload)
          .then(response => resolve(response))
          .catch(() => alert('Não foi possível adicionar o livro à sua lista'))
      })
    }
  },
  namespaced: true
}
