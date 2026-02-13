<script setup lang="ts">
const columns = [
  { key: 'employee', label: 'Employee' },
  { key: 'project', label: 'Project' },
  { key: 'date', label: 'Date', type: 'date' as const },
  { key: 'hours', label: 'Hours' },
  { key: 'billable', label: 'Billable', type: 'badge' as const },
  { key: 'rate', label: 'Rate', type: 'currency' as const },
  { key: 'status', label: 'Status', type: 'badge' as const },
]

const formFields = [
  { key: 'employee', label: 'Employee', placeholder: 'Sarah Johnson' },
  { key: 'project', label: 'Project', placeholder: 'Enterprise Cloud Migration' },
  { key: 'date', label: 'Date', type: 'date' as const },
  { key: 'hours', label: 'Hours', type: 'number' as const, placeholder: '8' },
  { key: 'billable', label: 'Billable', type: 'select' as const, options: [
    { label: 'Billable', value: 'Billable' }, { label: 'Non-Billable', value: 'Non-Billable' },
  ] },
  { key: 'rate', label: 'Hourly Rate ($)', type: 'number' as const, placeholder: '150' },
  { key: 'status', label: 'Status', type: 'select' as const, options: [
    { label: 'Pending', value: 'Pending' }, { label: 'Approved', value: 'Approved' }, { label: 'Rejected', value: 'Rejected' },
  ] },
  { key: 'task', label: 'Task Description', type: 'textarea' as const, placeholder: 'What did you work on?' },
]

const seedData = [
  { id: 'ts1', employee: 'Michael Chen', project: 'Enterprise Cloud Migration', date: '2026-02-13', hours: '8', billable: 'Billable', rate: 175, status: 'Pending', task: 'Backend API migration' },
  { id: 'ts2', employee: 'David Kim', project: 'Enterprise Cloud Migration', date: '2026-02-13', hours: '7.5', billable: 'Billable', rate: 150, status: 'Pending', task: 'Database schema updates' },
  { id: 'ts3', employee: 'Sofia Nguyen', project: 'Mobile App v3.0', date: '2026-02-13', hours: '8', billable: 'Billable', rate: 125, status: 'Pending', task: 'React Native component development' },
  { id: 'ts4', employee: 'Emily Rodriguez', project: 'ERP Implementation', date: '2026-02-13', hours: '6', billable: 'Billable', rate: 150, status: 'Approved', task: 'Client requirements workshop' },
  { id: 'ts5', employee: 'Priya Patel', project: 'Security Audit', date: '2026-02-13', hours: '8', billable: 'Billable', rate: 160, status: 'Approved', task: 'Vulnerability assessment report' },
  { id: 'ts6', employee: 'Michael Chen', project: 'API Integration Platform', date: '2026-02-12', hours: '4', billable: 'Billable', rate: 175, status: 'Approved', task: 'OAuth2 implementation' },
  { id: 'ts7', employee: 'James Wilson', project: 'Website Redesign', date: '2026-02-12', hours: '3', billable: 'Non-Billable', rate: 0, status: 'Approved', task: 'Internal design review meeting' },
  { id: 'ts8', employee: 'David Kim', project: 'AI Chatbot Development', date: '2026-02-12', hours: '6', billable: 'Billable', rate: 150, status: 'Approved', task: 'NLP model integration' },
  { id: 'ts9', employee: 'Thomas Wright', project: 'Data Analytics Dashboard', date: '2026-02-12', hours: '2', billable: 'Non-Billable', rate: 0, status: 'Approved', task: 'Post-launch bug fixes' },
  { id: 'ts10', employee: 'Sofia Nguyen', project: 'Mobile App v3.0', date: '2026-02-12', hours: '8', billable: 'Billable', rate: 125, status: 'Approved', task: 'Push notification system' },
]
</script>

<template>
  <ErpCrudPage store-key="proj-timesheets" title="Timesheets" description="Accurate time tracking with project-based logging and billing." icon="i-lucide-timer" entity-name="Timesheet Entry" :columns="columns" :form-fields="formFields" :initial-data="seedData" />
</template>
