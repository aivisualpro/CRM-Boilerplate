<script setup lang="ts">
const columns = [
  { key: 'number', label: 'Quote #' },
  { key: 'client', label: 'Client' },
  { key: 'amount', label: 'Amount', type: 'currency' as const },
  { key: 'items', label: 'Items', type: 'number' as const },
  { key: 'status', label: 'Status', type: 'badge' as const },
  { key: 'date', label: 'Created', type: 'date' as const },
  { key: 'validUntil', label: 'Valid Until', type: 'date' as const },
]

const formFields = [
  { key: 'number', label: 'Quote Number', placeholder: 'QT-2026-001' },
  { key: 'client', label: 'Client', placeholder: 'TechVision Inc' },
  { key: 'amount', label: 'Total Amount ($)', type: 'number' as const, placeholder: '15000' },
  { key: 'items', label: 'Line Items', type: 'number' as const, placeholder: '5' },
  { key: 'status', label: 'Status', type: 'select' as const, options: [
    { label: 'Draft', value: 'Draft' }, { label: 'Sent', value: 'Sent' },
    { label: 'Accepted', value: 'Accepted' }, { label: 'Rejected', value: 'Rejected' }, { label: 'Expired', value: 'Expired' },
  ] },
  { key: 'date', label: 'Quote Date', type: 'date' as const },
  { key: 'validUntil', label: 'Valid Until', type: 'date' as const },
  { key: 'createdBy', label: 'Created By', placeholder: 'Sales Rep' },
]

const seedData = [
  { id: 'q1', number: 'QT-2026-041', client: 'TechVision Inc', amount: 185000, items: 12, status: 'Sent', date: '2026-02-10', validUntil: '2026-03-10', createdBy: 'Sarah Johnson' },
  { id: 'q2', number: 'QT-2026-040', client: 'GlobalSoft', amount: 72000, items: 6, status: 'Accepted', date: '2026-02-08', validUntil: '2026-03-08', createdBy: 'David Kim' },
  { id: 'q3', number: 'QT-2026-039', client: 'Meridian Corp', amount: 34500, items: 4, status: 'Draft', date: '2026-02-12', validUntil: '2026-03-12', createdBy: 'Emily Rodriguez' },
  { id: 'q4', number: 'QT-2026-038', client: 'NexGen Solutions', amount: 95000, items: 8, status: 'Sent', date: '2026-02-06', validUntil: '2026-03-06', createdBy: 'Michael Chen' },
  { id: 'q5', number: 'QT-2026-037', client: 'Apex Group', amount: 210000, items: 15, status: 'Rejected', date: '2026-01-28', validUntil: '2026-02-28', createdBy: 'Sarah Johnson' },
  { id: 'q6', number: 'QT-2026-036', client: 'DataFlow AI', amount: 18500, items: 3, status: 'Accepted', date: '2026-01-25', validUntil: '2026-02-25', createdBy: 'David Kim' },
  { id: 'q7', number: 'QT-2026-035', client: 'BrightPath', amount: 45000, items: 5, status: 'Expired', date: '2026-01-10', validUntil: '2026-02-10', createdBy: 'Emily Rodriguez' },
  { id: 'q8', number: 'QT-2026-034', client: 'Zenith Systems', amount: 128000, items: 10, status: 'Sent', date: '2026-02-11', validUntil: '2026-03-11', createdBy: 'Michael Chen' },
]
</script>

<template>
  <ErpCrudPage store-key="sales-quotes" title="Quotes & Estimates" description="Create professional quotes with configurable line items and one-click conversion." icon="i-lucide-file-text" entity-name="Quote" :columns="columns" :form-fields="formFields" :initial-data="seedData" />
</template>
