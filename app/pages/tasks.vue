<script setup lang="ts">
import { columns } from '@/components/tasks/components/columns'
import DataTable from '@/components/tasks/components/DataTable.vue'
import tasks from '@/components/tasks/data/tasks.json'

const { setHeader } = usePageHeader()
setHeader({ title: 'Tasks', icon: 'i-lucide-calendar-check-2', description: 'Here\'s a list of your tasks for this month!' })
</script>

<template>
  <div class="w-full flex flex-col items-stretch gap-4">
    <DataTable :data="tasks.data" :columns="columns" />
  </div>
</template>

<style scoped>

</style>
