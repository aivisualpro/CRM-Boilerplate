<script setup lang="ts">
const columns = [
  { key: 'number', label: 'PO #' },
  { key: 'vendor', label: 'Vendor' },
  { key: 'total', label: 'Total', type: 'currency' as const },
  { key: 'items', label: 'Items', type: 'number' as const },
  { key: 'status', label: 'Status', type: 'badge' as const },
  { key: 'orderDate', label: 'Ordered', type: 'date' as const },
  { key: 'expectedDate', label: 'Expected', type: 'date' as const },
]

const formFields = [
  { key: 'number', label: 'PO Number', placeholder: 'PO-2026-001' },
  { key: 'vendor', label: 'Vendor', placeholder: 'Dell Technologies' },
  { key: 'total', label: 'Total ($)', type: 'number' as const, placeholder: '50000' },
  { key: 'items', label: 'Line Items', type: 'number' as const, placeholder: '5' },
  { key: 'status', label: 'Status', type: 'select' as const, options: [
    { label: 'Draft', value: 'Draft' }, { label: 'Sent', value: 'Sent' }, { label: 'Partial', value: 'Partial' },
    { label: 'Completed', value: 'Completed' }, { label: 'Cancelled', value: 'Cancelled' },
  ] },
  { key: 'orderDate', label: 'Order Date', type: 'date' as const },
  { key: 'expectedDate', label: 'Expected Delivery', type: 'date' as const },
]

const seedData = [
  { id: 'po1', number: 'PO-2026-089', vendor: 'Dell Technologies', total: 156000, items: 8, status: 'Sent', orderDate: '2026-02-05', expectedDate: '2026-02-20' },
  { id: 'po2', number: 'PO-2026-090', vendor: 'Cisco Systems', total: 84000, items: 4, status: 'Partial', orderDate: '2026-01-28', expectedDate: '2026-02-15' },
  { id: 'po3', number: 'PO-2026-091', vendor: 'HP Enterprise', total: 42500, items: 12, status: 'Completed', orderDate: '2026-01-15', expectedDate: '2026-02-01' },
  { id: 'po4', number: 'PO-2026-092', vendor: 'Amazon Business', total: 8900, items: 25, status: 'Sent', orderDate: '2026-02-10', expectedDate: '2026-02-18' },
  { id: 'po5', number: 'PO-2026-093', vendor: 'CDW Corporation', total: 23400, items: 6, status: 'Draft', orderDate: '2026-02-13', expectedDate: '2026-03-01' },
  { id: 'po6', number: 'PO-2026-094', vendor: 'Lenovo', total: 67000, items: 15, status: 'Sent', orderDate: '2026-02-08', expectedDate: '2026-02-25' },
  { id: 'po7', number: 'PO-2026-095', vendor: 'Brother Industries', total: 5600, items: 3, status: 'Completed', orderDate: '2026-01-20', expectedDate: '2026-02-05' },
  { id: 'po8', number: 'PO-2026-096', vendor: 'Logitech', total: 12800, items: 40, status: 'Cancelled', orderDate: '2026-02-01', expectedDate: '2026-02-15' },
]
</script>

<template>
  <ErpCrudPage store-key="inv-purchase-orders" title="Purchase Orders" description="Streamline procurement with automated PO generation and vendor management." icon="i-lucide-clipboard-list" entity-name="Purchase Order" :columns="columns" :form-fields="formFields" :initial-data="seedData" />
</template>
