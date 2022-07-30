import { instance as request } from './../plugins/axios'

export default {
  state: {
    user: {},
    books: []
  },
  getters: {
    getUser (state) {
      return state.user
    },
    getBooks (state) {
      return state.books
    }
  },
  mutations: {
    setUser (state, user) {
      state.user = user
    },
    setBooks (state, books) {
      state.books = books
    },
    updateABook (state, payload) {
      const { data, index } = payload
      state.books[index] = data
    }
  },
  actions: {
    login ({ commit }, payload) {
      return new Promise((resolve, reject) => {
        request.post('/login', payload)
          .then(response => {
            commit('setUser', response.data)
            resolve(response)
          })
          .catch(error => {
            alert('Usuário ou senha inválidos')
            reject(error)
          })
      })
    },
    logout: ({ commit }) => {
      commit('setUser', {})
      localStorage.removeItem('token')
      return Promise.resolve()
    },
    register ({ commit }, payload) {
      return new Promise((resolve, reject) => {
        request.post('/register', payload)
          .then(response => {
            commit('setUser', response.data)
            resolve(response)
          })
          .catch(error => {
            alert('Não foi possível cadastrar')
            reject(error)
          })
      })
    },
    getUserData ({ commit }) {
      return new Promise((resolve, reject) => {
        request.get('/user')
          .then(response => {
            commit('setBooks', response.data.body.books)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    insertNewBookIntoUserList ({ commit }, payload) {
      return new Promise((resolve, reject) => {
        request.post('/addbooktolist', payload)
          .then(response => {
            commit('setBooks', response.data.body.books)
            resolve(response)
          })
          .catch(error => {
            alert('Não foi possível adicionar o livro')
            reject(error)
          })
      })
    },
    removeBook ({ commit }, payload) {
      return new Promise((resolve, reject) => {
        request.delete('/removefromlist', { data: payload })
          .then(response => {
            commit('setBooks', response.data.body.books)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    updateBook ({ commit }, payload) {
      return new Promise((resolve, reject) => {
        request.put('/setstatus', payload.data)
          .then(response => {
            commit('updateABook', payload)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  },
  namespaced: true
}
