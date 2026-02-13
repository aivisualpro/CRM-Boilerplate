<script setup lang="ts">
const columns = [
  { key: 'name', label: 'Employee', type: 'avatar' as const },
  { key: 'email', label: 'Email', type: 'email' as const },
  { key: 'department', label: 'Department', type: 'badge' as const },
  { key: 'position', label: 'Position' },
  { key: 'phone', label: 'Phone' },
  { key: 'startDate', label: 'Start Date', type: 'date' as const },
  { key: 'status', label: 'Status', type: 'badge' as const },
]

const formFields = [
  { key: 'name', label: 'Full Name', placeholder: 'Jane Smith' },
  { key: 'email', label: 'Email', type: 'email' as const, placeholder: 'jane@company.com' },
  { key: 'phone', label: 'Phone', placeholder: '+1 (555) 000-0000' },
  { key: 'department', label: 'Department', type: 'select' as const, options: [
    { label: 'Engineering', value: 'Engineering' }, { label: 'Sales', value: 'Sales' },
    { label: 'Marketing', value: 'Marketing' }, { label: 'HR', value: 'HR' },
    { label: 'Finance', value: 'Finance' }, { label: 'Operations', value: 'Operations' },
    { label: 'Support', value: 'Support' }, { label: 'Product', value: 'Product' },
  ] },
  { key: 'position', label: 'Position', placeholder: 'Software Engineer' },
  { key: 'startDate', label: 'Start Date', type: 'date' as const },
  { key: 'status', label: 'Status', type: 'select' as const, options: [
    { label: 'Active', value: 'Active' }, { label: 'On Leave', value: 'On Leave' }, { label: 'Inactive', value: 'Inactive' },
  ] },
]

const seedData = [
  { id: 'e1', name: 'Sarah Johnson', email: 'sarah.j@company.com', phone: '+1 (555) 101-2020', department: 'Sales', position: 'VP of Sales', startDate: '2021-03-15', status: 'Active', avatar: 'https://i.pravatar.cc/40?u=sarah.j@company.com' },
  { id: 'e2', name: 'Michael Chen', email: 'michael.c@company.com', phone: '+1 (555) 202-3030', department: 'Engineering', position: 'Lead Engineer', startDate: '2020-06-01', status: 'Active', avatar: 'https://i.pravatar.cc/40?u=michael.c@company.com' },
  { id: 'e3', name: 'Emily Rodriguez', email: 'emily.r@company.com', phone: '+1 (555) 303-4040', department: 'Sales', position: 'Account Executive', startDate: '2022-01-10', status: 'Active', avatar: 'https://i.pravatar.cc/40?u=emily.r@company.com' },
  { id: 'e4', name: 'David Kim', email: 'david.k@company.com', phone: '+1 (555) 404-5050', department: 'Engineering', position: 'Senior Developer', startDate: '2019-09-20', status: 'Active', avatar: 'https://i.pravatar.cc/40?u=david.k@company.com' },
  { id: 'e5', name: 'Priya Patel', email: 'priya.p@company.com', phone: '+1 (555) 505-6060', department: 'Product', position: 'Product Manager', startDate: '2023-02-14', status: 'Active', avatar: 'https://i.pravatar.cc/40?u=priya.p@company.com' },
  { id: 'e6', name: 'James Wilson', email: 'james.w@company.com', phone: '+1 (555) 606-7070', department: 'Marketing', position: 'Marketing Manager', startDate: '2021-08-05', status: 'On Leave', avatar: 'https://i.pravatar.cc/40?u=james.w@company.com' },
  { id: 'e7', name: 'Lisa Chang', email: 'lisa.c@company.com', phone: '+1 (555) 707-8080', department: 'HR', position: 'HR Director', startDate: '2018-11-12', status: 'Active', avatar: 'https://i.pravatar.cc/40?u=lisa.c@company.com' },
  { id: 'e8', name: 'Robert Martinez', email: 'robert.m@company.com', phone: '+1 (555) 808-9090', department: 'Finance', position: 'CFO', startDate: '2017-04-01', status: 'Active', avatar: 'https://i.pravatar.cc/40?u=robert.m@company.com' },
  { id: 'e9', name: 'Anna Kowalski', email: 'anna.k@company.com', phone: '+1 (555) 909-1010', department: 'Operations', position: 'Operations Lead', startDate: '2022-07-18', status: 'Active', avatar: 'https://i.pravatar.cc/40?u=anna.k@company.com' },
  { id: 'e10', name: 'Thomas Wright', email: 'thomas.w@company.com', phone: '+1 (555) 010-1111', department: 'Support', position: 'Support Manager', startDate: '2023-05-22', status: 'Active', avatar: 'https://i.pravatar.cc/40?u=thomas.w@company.com' },
  { id: 'e11', name: 'Sofia Nguyen', email: 'sofia.n@company.com', phone: '+1 (555) 121-2222', department: 'Engineering', position: 'Frontend Developer', startDate: '2024-01-08', status: 'Active', avatar: 'https://i.pravatar.cc/40?u=sofia.n@company.com' },
  { id: 'e12', name: 'Marcus Thompson', email: 'marcus.t@company.com', phone: '+1 (555) 232-3333', department: 'Sales', position: 'Sales Rep', startDate: '2024-09-15', status: 'Active', avatar: 'https://i.pravatar.cc/40?u=marcus.t@company.com' },
]
</script>

<template>
  <ErpCrudPage store-key="hr-employees" title="Employees" description="Complete employee lifecycle management from onboarding to offboarding." icon="i-lucide-user-round-check" entity-name="Employee" :columns="columns" :form-fields="formFields" :initial-data="seedData" />
</template>
