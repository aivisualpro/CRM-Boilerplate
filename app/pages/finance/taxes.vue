<script setup lang="ts">
const columns = [
  { key: 'jurisdiction', label: 'Jurisdiction' },
  { key: 'taxType', label: 'Tax Type', type: 'badge' as const },
  { key: 'rate', label: 'Rate' },
  { key: 'amount', label: 'Amount Due', type: 'currency' as const },
  { key: 'period', label: 'Period' },
  { key: 'dueDate', label: 'Due Date', type: 'date' as const },
  { key: 'status', label: 'Status', type: 'badge' as const },
]

const formFields = [
  { key: 'jurisdiction', label: 'Jurisdiction', placeholder: 'Federal' },
  { key: 'taxType', label: 'Tax Type', type: 'select' as const, options: [
    { label: 'Income Tax', value: 'Income Tax' }, { label: 'Sales Tax', value: 'Sales Tax' },
    { label: 'Payroll Tax', value: 'Payroll Tax' }, { label: 'Property Tax', value: 'Property Tax' },
    { label: 'VAT', value: 'VAT' },
  ] },
  { key: 'rate', label: 'Rate', placeholder: '21%' },
  { key: 'amount', label: 'Amount ($)', type: 'number' as const, placeholder: '50000' },
  { key: 'period', label: 'Period', placeholder: 'Q1 2026' },
  { key: 'dueDate', label: 'Due Date', type: 'date' as const },
  { key: 'status', label: 'Status', type: 'select' as const, options: [
    { label: 'Pending', value: 'Pending' }, { label: 'Paid', value: 'Paid' },
    { label: 'Overdue', value: 'Overdue' }, { label: 'Draft', value: 'Draft' },
  ] },
]

const seedData = [
  { id: 'tx1', jurisdiction: 'Federal', taxType: 'Income Tax', rate: '21%', amount: 156000, period: 'Q4 2025', dueDate: '2026-03-15', status: 'Pending' },
  { id: 'tx2', jurisdiction: 'California', taxType: 'Sales Tax', rate: '7.25%', amount: 34200, period: 'Jan 2026', dueDate: '2026-02-28', status: 'Paid' },
  { id: 'tx3', jurisdiction: 'Federal', taxType: 'Payroll Tax', rate: '6.2%', amount: 47800, period: 'Jan 2026', dueDate: '2026-02-15', status: 'Paid' },
  { id: 'tx4', jurisdiction: 'New York', taxType: 'Sales Tax', rate: '8%', amount: 18400, period: 'Jan 2026', dueDate: '2026-02-20', status: 'Paid' },
  { id: 'tx5', jurisdiction: 'California', taxType: 'Income Tax', rate: '8.84%', amount: 67400, period: 'Q4 2025', dueDate: '2026-04-15', status: 'Draft' },
  { id: 'tx6', jurisdiction: 'Federal', taxType: 'Income Tax', rate: '21%', amount: 0, period: 'Q1 2026', dueDate: '2026-06-15', status: 'Draft' },
  { id: 'tx7', jurisdiction: 'EU', taxType: 'VAT', rate: '20%', amount: 25000, period: 'Q4 2025', dueDate: '2026-01-31', status: 'Overdue' },
  { id: 'tx8', jurisdiction: 'County', taxType: 'Property Tax', rate: '1.1%', amount: 10450, period: '2026 Annual', dueDate: '2026-04-10', status: 'Pending' },
]
</script>

<template>
  <ErpCrudPage store-key="fin-taxes" title="Tax Management" description="Multi-jurisdiction tax compliance with automated calculations." icon="i-lucide-percent" entity-name="Tax Entry" :columns="columns" :form-fields="formFields" :initial-data="seedData" />
</template>
