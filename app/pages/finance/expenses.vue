<script setup lang="ts">
const columns = [
  { key: 'employee', label: 'Employee' },
  { key: 'category', label: 'Category', type: 'badge' as const },
  { key: 'description', label: 'Description' },
  { key: 'amount', label: 'Amount', type: 'currency' as const },
  { key: 'date', label: 'Date', type: 'date' as const },
  { key: 'status', label: 'Status', type: 'badge' as const },
]

const formFields = [
  { key: 'employee', label: 'Employee', placeholder: 'Sarah Johnson' },
  { key: 'category', label: 'Category', type: 'select' as const, options: [
    { label: 'Travel', value: 'Travel' }, { label: 'Meals', value: 'Meals' },
    { label: 'Office Supplies', value: 'Office Supplies' }, { label: 'Software', value: 'Software' },
    { label: 'Equipment', value: 'Equipment' }, { label: 'Training', value: 'Training' },
    { label: 'Client Entertainment', value: 'Client Entertainment' }, { label: 'Mileage', value: 'Mileage' },
  ] },
  { key: 'description', label: 'Description', placeholder: 'Business dinner with client' },
  { key: 'amount', label: 'Amount ($)', type: 'number' as const, placeholder: '250' },
  { key: 'date', label: 'Date', type: 'date' as const },
  { key: 'status', label: 'Status', type: 'select' as const, options: [
    { label: 'Pending', value: 'Pending' }, { label: 'Approved', value: 'Approved' },
    { label: 'Rejected', value: 'Rejected' }, { label: 'Paid', value: 'Paid' },
  ] },
]

const seedData = [
  { id: 'ex1', employee: 'Sarah Johnson', category: 'Travel', description: 'Flight to NYC for client meeting', amount: 580, date: '2026-02-10', status: 'Approved' },
  { id: 'ex2', employee: 'David Kim', category: 'Software', description: 'Figma annual subscription', amount: 144, date: '2026-02-08', status: 'Paid' },
  { id: 'ex3', employee: 'Emily Rodriguez', category: 'Client Entertainment', description: 'Dinner with Meridian Corp team', amount: 345, date: '2026-02-11', status: 'Pending' },
  { id: 'ex4', employee: 'Michael Chen', category: 'Equipment', description: 'External monitor for home office', amount: 489, date: '2026-02-05', status: 'Approved' },
  { id: 'ex5', employee: 'Priya Patel', category: 'Training', description: 'AWS certification course', amount: 300, date: '2026-02-03', status: 'Paid' },
  { id: 'ex6', employee: 'Lisa Chang', category: 'Travel', description: 'Hotel - Chicago HR conference', amount: 890, date: '2026-02-09', status: 'Approved' },
  { id: 'ex7', employee: 'James Wilson', category: 'Meals', description: 'Team lunch - marketing brainstorm', amount: 185, date: '2026-02-12', status: 'Pending' },
  { id: 'ex8', employee: 'Robert Martinez', category: 'Travel', description: 'Uber rides - investor meetings', amount: 124, date: '2026-02-07', status: 'Paid' },
  { id: 'ex9', employee: 'Anna Kowalski', category: 'Office Supplies', description: 'Printer paper and toner', amount: 86, date: '2026-02-06', status: 'Approved' },
  { id: 'ex10', employee: 'Thomas Wright', category: 'Mileage', description: 'Client site visit - 120 miles', amount: 79, date: '2026-02-13', status: 'Pending' },
  { id: 'ex11', employee: 'Sarah Johnson', category: 'Meals', description: 'Coffee meeting with prospects', amount: 42, date: '2026-02-13', status: 'Pending' },
  { id: 'ex12', employee: 'Marcus Thompson', category: 'Training', description: 'Salesforce admin certification', amount: 200, date: '2026-02-01', status: 'Rejected' },
]
</script>

<template>
  <ErpCrudPage store-key="fin-expenses" title="Expenses" description="Employee expense management with receipt capture and approval workflows." icon="i-lucide-credit-card" entity-name="Expense" :columns="columns" :form-fields="formFields" :initial-data="seedData" />
</template>
