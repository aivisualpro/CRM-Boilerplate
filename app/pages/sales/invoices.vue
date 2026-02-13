<script setup lang="ts">
const columns = [
  { key: 'number', label: 'Invoice #' },
  { key: 'client', label: 'Client' },
  { key: 'amount', label: 'Total', type: 'currency' as const },
  { key: 'paidAmount', label: 'Paid', type: 'currency' as const },
  { key: 'status', label: 'Status', type: 'badge' as const },
  { key: 'issuedDate', label: 'Issued', type: 'date' as const },
  { key: 'dueDate', label: 'Due', type: 'date' as const },
]

const formFields = [
  { key: 'number', label: 'Invoice Number', placeholder: 'INV-2026-001' },
  { key: 'client', label: 'Client', placeholder: 'TechVision Inc' },
  { key: 'amount', label: 'Total ($)', type: 'number' as const, placeholder: '15000' },
  { key: 'paidAmount', label: 'Paid ($)', type: 'number' as const, placeholder: '15000' },
  { key: 'status', label: 'Status', type: 'select' as const, options: [
    { label: 'Draft', value: 'Draft' }, { label: 'Sent', value: 'Sent' },
    { label: 'Paid', value: 'Paid' }, { label: 'Overdue', value: 'Overdue' }, { label: 'Cancelled', value: 'Cancelled' },
  ] },
  { key: 'issuedDate', label: 'Issue Date', type: 'date' as const },
  { key: 'dueDate', label: 'Due Date', type: 'date' as const },
]

const seedData = [
  { id: 'i1', number: 'INV-2026-078', client: 'GlobalSoft', amount: 72000, paidAmount: 72000, status: 'Paid', issuedDate: '2026-01-15', dueDate: '2026-02-15' },
  { id: 'i2', number: 'INV-2026-079', client: 'TechVision Inc', amount: 185000, paidAmount: 92500, status: 'Sent', issuedDate: '2026-02-01', dueDate: '2026-03-01' },
  { id: 'i3', number: 'INV-2026-080', client: 'NexGen Solutions', amount: 34500, paidAmount: 0, status: 'Overdue', issuedDate: '2026-01-05', dueDate: '2026-02-05' },
  { id: 'i4', number: 'INV-2026-081', client: 'DataFlow AI', amount: 18500, paidAmount: 18500, status: 'Paid', issuedDate: '2026-01-20', dueDate: '2026-02-20' },
  { id: 'i5', number: 'INV-2026-082', client: 'Meridian Corp', amount: 95000, paidAmount: 0, status: 'Sent', issuedDate: '2026-02-10', dueDate: '2026-03-10' },
  { id: 'i6', number: 'INV-2026-083', client: 'CloudNine Tech', amount: 22000, paidAmount: 22000, status: 'Paid', issuedDate: '2026-01-28', dueDate: '2026-02-28' },
  { id: 'i7', number: 'INV-2026-084', client: 'Apex Group', amount: 156000, paidAmount: 0, status: 'Draft', issuedDate: '2026-02-12', dueDate: '2026-03-12' },
  { id: 'i8', number: 'INV-2026-085', client: 'Zenith Systems', amount: 45000, paidAmount: 0, status: 'Overdue', issuedDate: '2026-01-01', dueDate: '2026-01-31' },
  { id: 'i9', number: 'INV-2026-086', client: 'BrightPath', amount: 8500, paidAmount: 8500, status: 'Paid', issuedDate: '2026-02-05', dueDate: '2026-03-05' },
  { id: 'i10', number: 'INV-2026-087', client: 'Synthetix Labs', amount: 67000, paidAmount: 0, status: 'Cancelled', issuedDate: '2026-01-10', dueDate: '2026-02-10' },
]
</script>

<template>
  <ErpCrudPage store-key="sales-invoices" title="Invoices" description="Generate, send, and track invoices with automated payment reminders." icon="i-lucide-receipt" entity-name="Invoice" :columns="columns" :form-fields="formFields" :initial-data="seedData" />
</template>
