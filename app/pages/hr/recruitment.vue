<script setup lang="ts">
const columns = [
  { key: 'position', label: 'Position' },
  { key: 'department', label: 'Department', type: 'badge' as const },
  { key: 'applicants', label: 'Applicants', type: 'number' as const },
  { key: 'interviews', label: 'Interviews', type: 'number' as const },
  { key: 'status', label: 'Status', type: 'badge' as const },
  { key: 'priority', label: 'Priority', type: 'badge' as const },
  { key: 'postedDate', label: 'Posted', type: 'date' as const },
]

const formFields = [
  { key: 'position', label: 'Position Title', placeholder: 'Senior Developer' },
  { key: 'department', label: 'Department', type: 'select' as const, options: [
    { label: 'Engineering', value: 'Engineering' }, { label: 'Sales', value: 'Sales' },
    { label: 'Marketing', value: 'Marketing' }, { label: 'HR', value: 'HR' },
    { label: 'Finance', value: 'Finance' }, { label: 'Product', value: 'Product' },
  ] },
  { key: 'applicants', label: 'Applicants', type: 'number' as const, placeholder: '25' },
  { key: 'interviews', label: 'Interviews Scheduled', type: 'number' as const, placeholder: '5' },
  { key: 'status', label: 'Status', type: 'select' as const, options: [
    { label: 'Open', value: 'Open' }, { label: 'In Progress', value: 'In Progress' },
    { label: 'On Hold', value: 'On Hold' }, { label: 'Closed', value: 'Closed' },
  ] },
  { key: 'priority', label: 'Priority', type: 'select' as const, options: [
    { label: 'High', value: 'High' }, { label: 'Medium', value: 'Medium' }, { label: 'Low', value: 'Low' },
  ] },
  { key: 'postedDate', label: 'Posted Date', type: 'date' as const },
  { key: 'description', label: 'Description', type: 'textarea' as const, placeholder: 'Job description...' },
]

const seedData = [
  { id: 'r1', position: 'Senior Full Stack Engineer', department: 'Engineering', applicants: 87, interviews: 12, status: 'In Progress', priority: 'High', postedDate: '2026-01-15' },
  { id: 'r2', position: 'Product Designer (UI/UX)', department: 'Product', applicants: 64, interviews: 8, status: 'Open', priority: 'High', postedDate: '2026-02-01' },
  { id: 'r3', position: 'Account Executive', department: 'Sales', applicants: 42, interviews: 5, status: 'In Progress', priority: 'Medium', postedDate: '2026-01-20' },
  { id: 'r4', position: 'DevOps Engineer', department: 'Engineering', applicants: 53, interviews: 6, status: 'Open', priority: 'High', postedDate: '2026-02-05' },
  { id: 'r5', position: 'Content Marketing Manager', department: 'Marketing', applicants: 38, interviews: 4, status: 'Open', priority: 'Medium', postedDate: '2026-02-08' },
  { id: 'r6', position: 'Financial Analyst', department: 'Finance', applicants: 29, interviews: 3, status: 'On Hold', priority: 'Low', postedDate: '2026-01-10' },
  { id: 'r7', position: 'HR Business Partner', department: 'HR', applicants: 18, interviews: 2, status: 'Open', priority: 'Medium', postedDate: '2026-02-10' },
  { id: 'r8', position: 'Junior Frontend Developer', department: 'Engineering', applicants: 124, interviews: 15, status: 'Closed', priority: 'Low', postedDate: '2025-12-01' },
  { id: 'r9', position: 'Sales Development Rep', department: 'Sales', applicants: 56, interviews: 7, status: 'In Progress', priority: 'Medium', postedDate: '2026-01-25' },
  { id: 'r10', position: 'Data Engineer', department: 'Engineering', applicants: 71, interviews: 9, status: 'Open', priority: 'High', postedDate: '2026-02-12' },
]
</script>

<template>
  <ErpCrudPage store-key="hr-recruitment" title="Recruitment" description="Full-cycle recruitment with job postings and applicant tracking." icon="i-lucide-briefcase" entity-name="Position" :columns="columns" :form-fields="formFields" :initial-data="seedData" />
</template>
