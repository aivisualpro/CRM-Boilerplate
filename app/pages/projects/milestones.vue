<script setup lang="ts">
const columns = [
  { key: 'title', label: 'Milestone' },
  { key: 'project', label: 'Project' },
  { key: 'progress', label: 'Progress', type: 'progress' as const },
  { key: 'status', label: 'Status', type: 'badge' as const },
  { key: 'dueDate', label: 'Due Date', type: 'date' as const },
  { key: 'owner', label: 'Owner' },
]

const formFields = [
  { key: 'title', label: 'Milestone Title', placeholder: 'Phase 2 Complete' },
  { key: 'project', label: 'Project', placeholder: 'Enterprise Cloud Migration' },
  { key: 'progress', label: 'Progress (%)', type: 'number' as const, placeholder: '50' },
  { key: 'status', label: 'Status', type: 'select' as const, options: [
    { label: 'On Track', value: 'On Track' }, { label: 'At Risk', value: 'At Risk' },
    { label: 'Completed', value: 'Completed' }, { label: 'Overdue', value: 'Overdue' },
  ] },
  { key: 'dueDate', label: 'Due Date', type: 'date' as const },
  { key: 'owner', label: 'Owner', placeholder: 'Sarah Johnson' },
  { key: 'description', label: 'Description', type: 'textarea' as const, placeholder: 'Milestone details...' },
]

const seedData = [
  { id: 'ms1', title: 'Infrastructure Setup', project: 'Enterprise Cloud Migration', progress: 100, status: 'Completed', dueDate: '2025-12-15', owner: 'Michael Chen' },
  { id: 'ms2', title: 'Data Migration Phase 1', project: 'Enterprise Cloud Migration', progress: 85, status: 'On Track', dueDate: '2026-02-28', owner: 'David Kim' },
  { id: 'ms3', title: 'UI/UX Design Sign-off', project: 'Mobile App v3.0', progress: 100, status: 'Completed', dueDate: '2026-02-01', owner: 'Priya Patel' },
  { id: 'ms4', title: 'Beta Release', project: 'Mobile App v3.0', progress: 40, status: 'On Track', dueDate: '2026-04-15', owner: 'Sofia Nguyen' },
  { id: 'ms5', title: 'Module Configuration', project: 'ERP Implementation', progress: 55, status: 'At Risk', dueDate: '2026-02-20', owner: 'Emily Rodriguez' },
  { id: 'ms6', title: 'UAT Complete', project: 'ERP Implementation', progress: 10, status: 'At Risk', dueDate: '2026-03-15', owner: 'Emily Rodriguez' },
  { id: 'ms7', title: 'Penetration Testing', project: 'Security Audit', progress: 90, status: 'On Track', dueDate: '2026-02-18', owner: 'Priya Patel' },
  { id: 'ms8', title: 'Final Report Delivery', project: 'Security Audit', progress: 30, status: 'On Track', dueDate: '2026-02-28', owner: 'Priya Patel' },
  { id: 'ms9', title: 'OAuth2 Integration', project: 'API Integration Platform', progress: 70, status: 'On Track', dueDate: '2026-03-01', owner: 'Michael Chen' },
  { id: 'ms10', title: 'Launch Readiness Review', project: 'AI Chatbot Development', progress: 60, status: 'On Track', dueDate: '2026-03-01', owner: 'David Kim' },
  { id: 'ms11', title: 'Go-Live', project: 'Data Analytics Dashboard', progress: 100, status: 'Completed', dueDate: '2026-01-20', owner: 'Thomas Wright' },
  { id: 'ms12', title: 'Client Training', project: 'ERP Implementation', progress: 0, status: 'Overdue', dueDate: '2026-02-10', owner: 'Emily Rodriguez' },
]
</script>

<template>
  <ErpCrudPage store-key="proj-milestones" title="Milestones" description="Track project milestones with progress indicators and deadline management." icon="i-lucide-flag" entity-name="Milestone" :columns="columns" :form-fields="formFields" :initial-data="seedData" />
</template>
