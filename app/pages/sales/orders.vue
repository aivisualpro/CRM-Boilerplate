<script setup lang="ts">
const columns = [
  { key: 'number', label: 'Order #' },
  { key: 'customer', label: 'Customer' },
  { key: 'total', label: 'Total', type: 'currency' as const },
  { key: 'items', label: 'Items', type: 'number' as const },
  { key: 'status', label: 'Status', type: 'badge' as const },
  { key: 'orderDate', label: 'Order Date', type: 'date' as const },
  { key: 'tracking', label: 'Tracking' },
]

const formFields = [
  { key: 'number', label: 'Order Number', placeholder: 'ORD-2026-001' },
  { key: 'customer', label: 'Customer', placeholder: 'John Smith' },
  { key: 'total', label: 'Total ($)', type: 'number' as const, placeholder: '500' },
  { key: 'items', label: 'Items Count', type: 'number' as const, placeholder: '3' },
  { key: 'status', label: 'Status', type: 'select' as const, options: [
    { label: 'Pending', value: 'Pending' }, { label: 'Processing', value: 'Processing' },
    { label: 'Shipped', value: 'Shipped' }, { label: 'Delivered', value: 'Delivered' }, { label: 'Cancelled', value: 'Cancelled' },
  ] },
  { key: 'orderDate', label: 'Order Date', type: 'date' as const },
  { key: 'tracking', label: 'Tracking #', placeholder: 'USP-123456789' },
]

const seedData = [
  { id: 'o1', number: 'ORD-2026-312', customer: 'Sarah Johnson', total: 2450, items: 3, status: 'Delivered', orderDate: '2026-02-08', tracking: 'USP-847291536' },
  { id: 'o2', number: 'ORD-2026-313', customer: 'Michael Chen', total: 8900, items: 7, status: 'Shipped', orderDate: '2026-02-10', tracking: 'FDX-293847561' },
  { id: 'o3', number: 'ORD-2026-314', customer: 'Emily Rodriguez', total: 1250, items: 2, status: 'Processing', orderDate: '2026-02-12', tracking: '—' },
  { id: 'o4', number: 'ORD-2026-315', customer: 'James Wilson', total: 15600, items: 12, status: 'Pending', orderDate: '2026-02-13', tracking: '—' },
  { id: 'o5', number: 'ORD-2026-316', customer: 'Priya Patel', total: 3200, items: 4, status: 'Shipped', orderDate: '2026-02-09', tracking: 'DHL-192837465' },
  { id: 'o6', number: 'ORD-2026-317', customer: 'David Kim', total: 780, items: 1, status: 'Delivered', orderDate: '2026-02-05', tracking: 'USP-738291046' },
  { id: 'o7', number: 'ORD-2026-318', customer: 'Lisa Chang', total: 4500, items: 5, status: 'Cancelled', orderDate: '2026-02-07', tracking: '—' },
  { id: 'o8', number: 'ORD-2026-319', customer: 'Robert Martinez', total: 21000, items: 15, status: 'Processing', orderDate: '2026-02-11', tracking: '—' },
  { id: 'o9', number: 'ORD-2026-320', customer: 'Anna Kowalski', total: 6750, items: 8, status: 'Shipped', orderDate: '2026-02-06', tracking: 'FDX-847261930' },
  { id: 'o10', number: 'ORD-2026-321', customer: 'Thomas Wright', total: 950, items: 2, status: 'Pending', orderDate: '2026-02-13', tracking: '—' },
]
</script>

<template>
  <ErpCrudPage store-key="sales-orders" title="Orders" description="End-to-end order management from creation to fulfillment." icon="i-lucide-shopping-cart" entity-name="Order" :columns="columns" :form-fields="formFields" :initial-data="seedData" />
</template>
