<script setup>
import { onMounted, ref, computed } from 'vue'
import { Modal } from 'bootstrap'

import { useProjectStore } from '../store/projects'
const store = useProjectStore()
const msg = ref('Welcome to my Vuex Store')
const getProjects = computed(() => {
  return store.getProjects
})
const projects = computed(() => {
  return store.projects
})
onMounted(() => {
  store.fetchProjects()
})

defineProps({
  id: {
    type: Number,
    default: 0
  }
})

function submitTask() {
  
}

let modalEle = ref(null)
let thisModalObj = null

onMounted(() => {
  thisModalObj = new Modal(modalEle.value)
})
function _show() {
  thisModalObj.show()
}
defineExpose({ show: _show })
</script>

<template>
  <div
    class="modal modal-lg fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby=""
    aria-hidden="true"
    ref="modalEle"
    style="min-width: 1000px"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            {{ id == 0 ? 'Add Task' : 'Edit Task' }}
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form>
            <div id="date" class="d-flex" style="justify-content: space-between">
              <div>
                <label for="task">Start Date</label>
                <input class="form-control" type="date" />
              </div>
              <div>
                <label for="task">End Date</label>
                <input class="form-control" type="date" />
              </div>
              <div>
                <label for="task">Start Time</label>
                <input class="form-control" type="time" />
              </div>
              <div>
                <label for="task">End Time</label>
                <input class="form-control" type="time" />
              </div>
            </div>
            <div>
              <label for="task">Task</label>
              <input class="form-control" type="text" />
            </div>
            <div>
              <label for="task">Project</label>
              <select class="form-control">
                <option v-for="item in projects">
                  {{ item.name }}
                </option>
              </select>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <slot name="footer"></slot>
          <button
            type="button"
            class="btn btn-default"
            style="border: none; color: var(--vt-c-red)"
            data-bs-dismiss="modal"
          >
            Kembali
          </button>
          <button
            type="submit"
            @click="submitTask"
            class="btn btn-default"
            style="background-color: var(--vt-c-red); color: var(--vt-c-white)"
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
