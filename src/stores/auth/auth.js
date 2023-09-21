import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    password: '',
    phoneNumber: '',
    errorStatusCode: ''
  }),
  actions: {
    setPassword(password) {
      this.password = password;
    },
    setPhoneNumber(phoneNumber) {
      this.phoneNumber = phoneNumber;
    },
    setStatusCode(statusCode){
      this.errorStatusCode = statusCode;
    }
},
  getters: {
    getPassword(state) {
      return state.password;
    },
    getPhoneNumber(state) {
      return state.phoneNumber;
    },
    getStatusCode(state) {
      return state.errorStatusCode;
    }
  }
})