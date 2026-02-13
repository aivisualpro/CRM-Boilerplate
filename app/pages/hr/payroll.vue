<script setup lang="ts">
const columns = [
  { key: 'employee', label: 'Employee' },
  { key: 'period', label: 'Period' },
  { key: 'baseSalary', label: 'Base Salary', type: 'currency' as const },
  { key: 'deductions', label: 'Deductions', type: 'currency' as const },
  { key: 'bonus', label: 'Bonus', type: 'currency' as const },
  { key: 'netPay', label: 'Net Pay', type: 'currency' as const },
  { key: 'status', label: 'Status', type: 'badge' as const },
]

const formFields = [
  { key: 'employee', label: 'Employee', placeholder: 'Sarah Johnson' },
  { key: 'period', label: 'Pay Period', placeholder: 'Feb 2026' },
  { key: 'baseSalary', label: 'Base Salary ($)', type: 'number' as const, placeholder: '8500' },
  { key: 'deductions', label: 'Deductions ($)', type: 'number' as const, placeholder: '2100' },
  { key: 'bonus', label: 'Bonus ($)', type: 'number' as const, placeholder: '500' },
  { key: 'netPay', label: 'Net Pay ($)', type: 'number' as const, placeholder: '6900' },
  { key: 'status', label: 'Status', type: 'select' as const, options: [
    { label: 'Draft', value: 'Draft' }, { label: 'Processed', value: 'Processed' },
    { label: 'Paid', value: 'Paid' }, { label: 'On Hold', value: 'On Hold' },
  ] },
]

const seedData = [
  { id: 'py1', employee: 'Sarah Johnson', period: 'Feb 2026', baseSalary: 12500, deductions: 3125, bonus: 2000, netPay: 11375, status: 'Processed' },
  { id: 'py2', employee: 'Michael Chen', period: 'Feb 2026', baseSalary: 11000, deductions: 2750, bonus: 1500, netPay: 9750, status: 'Processed' },
  { id: 'py3', employee: 'Emily Rodriguez', period: 'Feb 2026', baseSalary: 8500, deductions: 2125, bonus: 800, netPay: 7175, status: 'Processed' },
  { id: 'py4', employee: 'David Kim', period: 'Feb 2026', baseSalary: 10500, deductions: 2625, bonus: 1200, netPay: 9075, status: 'Processed' },
  { id: 'py5', employee: 'Priya Patel', period: 'Feb 2026', baseSalary: 9500, deductions: 2375, bonus: 0, netPay: 7125, status: 'Draft' },
  { id: 'py6', employee: 'James Wilson', period: 'Feb 2026', baseSalary: 8000, deductions: 2000, bonus: 600, netPay: 6600, status: 'On Hold' },
  { id: 'py7', employee: 'Lisa Chang', period: 'Feb 2026', baseSalary: 11500, deductions: 2875, bonus: 1800, netPay: 10425, status: 'Paid' },
  { id: 'py8', employee: 'Robert Martinez', period: 'Feb 2026', baseSalary: 15000, deductions: 3750, bonus: 3000, netPay: 14250, status: 'Paid' },
  { id: 'py9', employee: 'Anna Kowalski', period: 'Feb 2026', baseSalary: 8500, deductions: 2125, bonus: 500, netPay: 6875, status: 'Processed' },
  { id: 'py10', employee: 'Thomas Wright', period: 'Feb 2026', baseSalary: 7500, deductions: 1875, bonus: 400, netPay: 6025, status: 'Processed' },
  { id: 'py11', employee: 'Sofia Nguyen', period: 'Jan 2026', baseSalary: 7000, deductions: 1750, bonus: 300, netPay: 5550, status: 'Paid' },
  { id: 'py12', employee: 'Marcus Thompson', period: 'Jan 2026', baseSalary: 6500, deductions: 1625, bonus: 250, netPay: 5125, status: 'Paid' },
]
</script>

<template>
  <ErpCrudPage store-key="hr-payroll" title="Payroll" description="Automated payroll processing with tax calculations and benefit deductions." icon="i-lucide-banknote" entity-name="Payroll Record" :columns="columns" :form-fields="formFields" :initial-data="seedData" />
</template>
