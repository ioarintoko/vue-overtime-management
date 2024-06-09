import { defineStore } from 'pinia'
// Import axios to make HTTP requests
import axios from 'axios'
export const useProjectStore = defineStore('project', {
  state: () => ({
    projects: []
  }),
  getters: {
    getProjects(state) {
      return state.projects
    }
  },
  actions: {
    async fetchProjects() {
      try {
        const data = await axios.get('http://localhost:8087/api/project')
        this.projects = data.data
      } catch (error) {
        alert(error)
        console.log(error)
      }
    }
  }
})
