import { defineStore } from 'pinia'
// Import axios to make HTTP requests
import axios from 'axios'
export const useTaskStore = defineStore('task', {
  state: () => ({
    tasks: []
  }),
  getters: {
    getUsers(state) {
      return state.tasks
    }
  },
  actions: {
    async fetchTasks() {
      try {
        const data = await axios.get('http://localhost:8087/api/task')
        this.tasks = data.data
      } catch (error) {
        alert(error)
        console.log(error)
      }
    }
  }
})
