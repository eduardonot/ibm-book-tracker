export default {
  state: {
    appTitle: '',
    previewMyBooksModal: false,
    previewLibraryBookModal: false,
    previewNewBookModal: false

  },
  getters: {
    getAppTitle: state => state.appTitle,
    getPreviewMyBooksModal: state => state.previewMyBooksModal,
    getPreviewLibraryBookModal: state => state.previewLibraryBookModal,
    getPreviewNewBookModal: state => state.previewNewBookModal
  },
  mutations: {
    setAppTitle: (state, title) => {
      state.appTitle = title
    },
    openPreviewMyBooksModal: (state) => {
      state.previewMyBooksModal = true
    },
    closePreviewMyBooksModal: (state) => {
      state.previewMyBooksModal = false
    },
    openPreviewLibraryBookModal: (state) => {
      state.previewLibraryBookModal = true
    },
    closePreviewLibraryBookModal: (state) => {
      state.previewLibraryBookModal = false
    },
    openPreviewNewBookModal: (state) => {
      state.previewNewBookModal = true
    },
    closePreviewNewBookModal: (state) => {
      state.previewNewBookModal = false
    }
  },
  namespaced: true
}
