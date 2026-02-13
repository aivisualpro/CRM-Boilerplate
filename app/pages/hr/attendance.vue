<script setup lang="ts">
const columns = [
  { key: 'employee', label: 'Employee' },
  { key: 'date', label: 'Date', type: 'date' as const },
  { key: 'clockIn', label: 'Clock In' },
  { key: 'clockOut', label: 'Clock Out' },
  { key: 'hours', label: 'Hours' },
  { key: 'overtime', label: 'OT (hrs)' },
  { key: 'status', label: 'Status', type: 'badge' as const },
]

const formFields = [
  { key: 'employee', label: 'Employee', placeholder: 'Sarah Johnson' },
  { key: 'date', label: 'Date', type: 'date' as const },
  { key: 'clockIn', label: 'Clock In', placeholder: '09:00 AM' },
  { key: 'clockOut', label: 'Clock Out', placeholder: '05:30 PM' },
  { key: 'hours', label: 'Total Hours', placeholder: '8.5' },
  { key: 'overtime', label: 'Overtime Hours', placeholder: '0.5' },
  { key: 'status', label: 'Status', type: 'select' as const, options: [
    { label: 'Present', value: 'Present' }, { label: 'Late', value: 'Late' },
    { label: 'Absent', value: 'Absent' }, { label: 'On Leave', value: 'On Leave' },
  ] },
]

const seedData = [
  { id: 'at1', employee: 'Sarah Johnson', date: '2026-02-13', clockIn: '08:45 AM', clockOut: '05:30 PM', hours: '8.75', overtime: '0.75', status: 'Present' },
  { id: 'at2', employee: 'Michael Chen', date: '2026-02-13', clockIn: '09:15 AM', clockOut: '06:45 PM', hours: '9.5', overtime: '1.5', status: 'Late' },
  { id: 'at3', employee: 'Emily Rodriguez', date: '2026-02-13', clockIn: '08:55 AM', clockOut: '05:00 PM', hours: '8.08', overtime: '0', status: 'Present' },
  { id: 'at4', employee: 'David Kim', date: '2026-02-13', clockIn: '09:00 AM', clockOut: '05:30 PM', hours: '8.5', overtime: '0.5', status: 'Present' },
  { id: 'at5', employee: 'Priya Patel', date: '2026-02-13', clockIn: '—', clockOut: '—', hours: '0', overtime: '0', status: 'On Leave' },
  { id: 'at6', employee: 'James Wilson', date: '2026-02-13', clockIn: '—', clockOut: '—', hours: '0', overtime: '0', status: 'On Leave' },
  { id: 'at7', employee: 'Lisa Chang', date: '2026-02-13', clockIn: '08:30 AM', clockOut: '05:00 PM', hours: '8.5', overtime: '0.5', status: 'Present' },
  { id: 'at8', employee: 'Robert Martinez', date: '2026-02-13', clockIn: '07:45 AM', clockOut: '04:30 PM', hours: '8.75', overtime: '0.75', status: 'Present' },
  { id: 'at9', employee: 'Anna Kowalski', date: '2026-02-13', clockIn: '09:30 AM', clockOut: '06:00 PM', hours: '8.5', overtime: '0.5', status: 'Late' },
  { id: 'at10', employee: 'Thomas Wright', date: '2026-02-13', clockIn: '—', clockOut: '—', hours: '0', overtime: '0', status: 'Absent' },
  { id: 'at11', employee: 'Sofia Nguyen', date: '2026-02-13', clockIn: '08:50 AM', clockOut: '05:20 PM', hours: '8.5', overtime: '0.5', status: 'Present' },
  { id: 'at12', employee: 'Marcus Thompson', date: '2026-02-13', clockIn: '09:05 AM', clockOut: '05:35 PM', hours: '8.5', overtime: '0.5', status: 'Present' },
]
</script>

<template>
  <ErpCrudPage store-key="hr-attendance" title="Attendance" description="Track employee attendance with shift management and overtime calculations." icon="i-lucide-clock" entity-name="Attendance Record" :columns="columns" :form-fields="formFields" :initial-data="seedData" />
</template>
