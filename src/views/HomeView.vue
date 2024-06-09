<script setup>
import DataTable from 'datatables.net-vue3'
import DataTablesCore from 'datatables.net-bs5'
import moment from 'moment'

DataTable.use(DataTablesCore)
// const columns = [
//   { data: 'name' },
//   { data: 'position' },
//   { data: 'office' },
//   { data: 'extn' },
//   { data: 'start_date' },
//   { data: 'salary' }
// ]

import { ref, onMounted, computed, render } from 'vue'
import { useTaskStore } from '../store/tasks'
const store = useTaskStore()
const msg = ref('Welcome to my Vuex Store')
const getTasks = computed(() => {
  return store.getTasks
})
const tasks = computed(() => {
  return store.tasks
})
onMounted(() => {
  store.fetchTasks()
})

const columns = [
  { data: 'name', width: '20%' },
  { data: 'projectname', width: '20%' },
  {
    data: 'startdate',
    width: '12%',
    render: function (data) {
      return moment(String(data))
        .format('DD/MM/YYYY')
        .toLocaleString('en-us', { month: 'short', year: 'numeric' })
    }
  },
  {
    data: 'enddate',
    width: '12%',
    render: function (data) {
      return moment(String(data))
        .format('DD/MM/YYYY')
        .toLocaleString('en-us', { month: 'short', year: 'numeric' })
    }
  },
  { data: 'starttime', width: '10%' },
  { data: 'endtime', width: '10%' },
  { data: 'duration', width: '5%' },
  {
    data: null,
    orderable: false,
    width: '10%',
    render: function (data) {
      return (
        `
      <button id="edit+` +
        data +
        `" class="btn btn-default" @click="showModal()" style=" border: 1px solid var(--vt-c-red); border-radius:4px;"><i class="bi bi-pencil" style="color:var(--vt-c-red);"></i></button>
      <button id="edit+` +
        data +
        `" class="btn btn-default" @click="showModal()" style=" border: 1px solid var(--vt-c-red); border-radius:4px;"><i class="bi bi-trash" style="color:var(--vt-c-red);"></i></button>
      `
      )
    }
  }
]

import Modal from '@/components/ModalForm.vue'

let thisModal = ref(null)

function showModal() {
  thisModal.value.show()
}
</script>

<template>
  <main>
    <div style="height: 50px"></div>
    <div id="card" class="card">
      <div class="card-head">
        <div class="row">
          <p>Name</p>
          <p>Bramantio</p>
        </div>
        <div class="row">
          <p>Rate</p>
          <p>Rp 12.000 / Jam</p>
        </div>
      </div>

      <br />
      <div style="display: flex">
        <b>Daftar Kegiatan</b>
        <button @click="showModal" class="btn button">
          <i class="bi bi-plus-circle"></i> Tambah Kegiatan
        </button>
        <Modal id="0" ref="thisModal"></Modal>
      </div>

      <div class="content">
        <DataTable
          :data="tasks"
          :columns="columns"
          class="table table-hover table-striped"
          style="width: 100%"
        >
          <thead>
            <tr>
              <th>Judul Kegiatan</th>
              <th>Nama Proyek</th>
              <th>Tanggal Mulai</th>
              <th>Tanggal berakhir</th>
              <th>Jam Mulai</th>
              <th>Jam Berakhir</th>
              <th>Durasi</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <th>Judul Kegiatan</th>
              <th>Nama Proyek</th>
              <th>Tanggal Mulai</th>
              <th>Tanggal berakhir</th>
              <th>Jam Mulai</th>
              <th>Jam Berakhir</th>
              <th>Durasi</th>
              <th>Aksi</th>
            </tr>
          </tfoot>
        </DataTable>
      </div>
    </div>
  </main>
</template>

<style>
@import 'bootstrap';
@import 'datatables.net-bs5';
main {
  background-color: var(--vt-c-back);
}

.card-head {
  border-bottom: 2px solid #f9f9f9;
}
.row {
  display: flex;
  padding: 8px;
}

.row p {
  width: 50%;
}

.button {
  border: none;
  background-color: var(--vt-c-lightblue);
  color: var(--vt-c-blue);
  margin-left: 16px;
}

.content {
  clear: both;
}

.card {
  background-color: var(--vt-c-white);
  border-radius: 8px;
  min-height: 300px;
  padding: 16px;
  margin: 16px;
}
</style>
