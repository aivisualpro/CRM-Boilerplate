<script setup lang="ts">
const columns = [
  { key: 'employee', label: 'Employee' },
  { key: 'type', label: 'Leave Type', type: 'badge' as const },
  { key: 'startDate', label: 'Start', type: 'date' as const },
  { key: 'endDate', label: 'End', type: 'date' as const },
  { key: 'days', label: 'Days', type: 'number' as const },
  { key: 'reason', label: 'Reason' },
  { key: 'status', label: 'Status', type: 'badge' as const },
]

const formFields = [
  { key: 'employee', label: 'Employee', placeholder: 'Sarah Johnson' },
  { key: 'type', label: 'Leave Type', type: 'select' as const, options: [
    { label: 'Annual', value: 'Annual' }, { label: 'Sick', value: 'Sick' },
    { label: 'Personal', value: 'Personal' }, { label: 'Maternity', value: 'Maternity' },
  ] },
  { key: 'startDate', label: 'Start Date', type: 'date' as const },
  { key: 'endDate', label: 'End Date', type: 'date' as const },
  { key: 'days', label: 'Days', type: 'number' as const, placeholder: '3' },
  { key: 'reason', label: 'Reason', type: 'textarea' as const, placeholder: 'Reason for leave...' },
  { key: 'status', label: 'Status', type: 'select' as const, options: [
    { label: 'Pending', value: 'Pending' }, { label: 'Approved', value: 'Approved' }, { label: 'Rejected', value: 'Rejected' },
  ] },
]

const seedData = [
  { id: 'lv1', employee: 'James Wilson', type: 'Annual', startDate: '2026-02-10', endDate: '2026-02-21', days: 10, reason: 'Family vacation', status: 'Approved' },
  { id: 'lv2', employee: 'Priya Patel', type: 'Sick', startDate: '2026-02-13', endDate: '2026-02-14', days: 2, reason: 'Flu symptoms', status: 'Approved' },
  { id: 'lv3', employee: 'Emily Rodriguez', type: 'Personal', startDate: '2026-02-17', endDate: '2026-02-17', days: 1, reason: 'Moving day', status: 'Pending' },
  { id: 'lv4', employee: 'Michael Chen', type: 'Annual', startDate: '2026-03-01', endDate: '2026-03-05', days: 5, reason: 'Spring break trip', status: 'Pending' },
  { id: 'lv5', employee: 'Sarah Johnson', type: 'Sick', startDate: '2026-02-06', endDate: '2026-02-07', days: 2, reason: 'Medical appointment', status: 'Approved' },
  { id: 'lv6', employee: 'Anna Kowalski', type: 'Annual', startDate: '2026-03-15', endDate: '2026-03-22', days: 6, reason: 'Wedding anniversary trip', status: 'Pending' },
  { id: 'lv7', employee: 'David Kim', type: 'Personal', startDate: '2026-02-20', endDate: '2026-02-20', days: 1, reason: 'Home repair', status: 'Approved' },
  { id: 'lv8', employee: 'Sofia Nguyen', type: 'Maternity', startDate: '2026-04-01', endDate: '2026-06-30', days: 65, reason: 'Maternity leave', status: 'Approved' },
  { id: 'lv9', employee: 'Marcus Thompson', type: 'Sick', startDate: '2026-02-11', endDate: '2026-02-12', days: 2, reason: 'Back pain', status: 'Approved' },
  { id: 'lv10', employee: 'Thomas Wright', type: 'Annual', startDate: '2026-02-24', endDate: '2026-02-28', days: 5, reason: 'Ski trip', status: 'Rejected' },
]
</script>

<template>
  <ErpCrudPage store-key="hr-leaves" title="Leave Management" description="Comprehensive leave tracking with configurable policies and approval workflows." icon="i-lucide-calendar-off" entity-name="Leave Request" :columns="columns" :form-fields="formFields" :initial-data="seedData" />
</template>
