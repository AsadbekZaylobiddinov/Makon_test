import { defineStore } from 'pinia'

const useFiltrStore = defineStore('filtr', {
  state: () => ({
    isCityVisible: 0,
    isCategoryVisible: 0
  }),
  actions: {
    setIsCityVisible(isCityVisible) {
      this.isCityVisible = isCityVisible;
    },
    setIsCategoryVisible(isCategoryVisible) {
      this.isCategoryVisible = isCategoryVisible;
    }
},
  getters: {
    getIsCityVisible(state) {
      return state.isCityVisible;
    },
    getIsCategoryVisible(state) {
      return state.isCategoryVisible;
    }
  }
})

export default useFiltrStore;