<script setup lang="ts">
const columns = [
  { key: 'name', label: 'Project' },
  { key: 'client', label: 'Client' },
  { key: 'status', label: 'Status', type: 'badge' as const },
  { key: 'progress', label: 'Progress', type: 'progress' as const },
  { key: 'budget', label: 'Budget', type: 'currency' as const },
  { key: 'team', label: 'Team Size', type: 'number' as const },
  { key: 'endDate', label: 'Deadline', type: 'date' as const },
]

const formFields = [
  { key: 'name', label: 'Project Name', placeholder: 'Website Redesign' },
  { key: 'client', label: 'Client', placeholder: 'TechVision Inc' },
  { key: 'status', label: 'Status', type: 'select' as const, options: [
    { label: 'In Progress', value: 'In Progress' }, { label: 'On Track', value: 'On Track' },
    { label: 'At Risk', value: 'At Risk' }, { label: 'On Hold', value: 'On Hold' },
    { label: 'Completed', value: 'Completed' },
  ] },
  { key: 'progress', label: 'Progress (%)', type: 'number' as const, placeholder: '65' },
  { key: 'budget', label: 'Budget ($)', type: 'number' as const, placeholder: '50000' },
  { key: 'team', label: 'Team Size', type: 'number' as const, placeholder: '5' },
  { key: 'startDate', label: 'Start Date', type: 'date' as const },
  { key: 'endDate', label: 'Deadline', type: 'date' as const },
  { key: 'description', label: 'Description', type: 'textarea' as const, placeholder: 'Project overview...' },
]

const seedData = [
  { id: 'pj1', name: 'Enterprise Cloud Migration', client: 'TechVision Inc', status: 'In Progress', progress: 68, budget: 185000, team: 8, startDate: '2025-11-01', endDate: '2026-04-30' },
  { id: 'pj2', name: 'Mobile App v3.0', client: 'BrightPath', status: 'On Track', progress: 42, budget: 120000, team: 6, startDate: '2026-01-10', endDate: '2026-06-15' },
  { id: 'pj3', name: 'ERP Implementation', client: 'Meridian Corp', status: 'At Risk', progress: 35, budget: 340000, team: 12, startDate: '2025-09-01', endDate: '2026-03-31' },
  { id: 'pj4', name: 'Security Audit', client: 'Apex Group', status: 'In Progress', progress: 85, budget: 48000, team: 3, startDate: '2026-01-15', endDate: '2026-02-28' },
  { id: 'pj5', name: 'Data Analytics Dashboard', client: 'DataFlow AI', status: 'Completed', progress: 100, budget: 95000, team: 5, startDate: '2025-10-01', endDate: '2026-01-20' },
  { id: 'pj6', name: 'API Integration Platform', client: 'GlobalSoft', status: 'On Track', progress: 55, budget: 72000, team: 4, startDate: '2025-12-15', endDate: '2026-05-01' },
  { id: 'pj7', name: 'Website Redesign', client: 'CloudNine Tech', status: 'On Hold', progress: 20, budget: 35000, team: 3, startDate: '2026-02-01', endDate: '2026-04-15' },
  { id: 'pj8', name: 'AI Chatbot Development', client: 'BlueOcean AI', status: 'In Progress', progress: 72, budget: 65000, team: 4, startDate: '2025-11-15', endDate: '2026-03-15' },
]
</script>

<template>
  <ErpCrudPage store-key="proj-list" title="Projects" description="Enterprise project management with progress tracking and budget control." icon="i-lucide-folder-kanban" entity-name="Project" :columns="columns" :form-fields="formFields" :initial-data="seedData" />
</template>
