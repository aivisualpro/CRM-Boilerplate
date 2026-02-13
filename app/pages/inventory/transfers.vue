<script setup lang="ts">
const columns = [
  { key: 'transferId', label: 'Transfer #' },
  { key: 'from', label: 'From' },
  { key: 'to', label: 'To' },
  { key: 'items', label: 'Items', type: 'number' as const },
  { key: 'status', label: 'Status', type: 'badge' as const },
  { key: 'date', label: 'Date', type: 'date' as const },
  { key: 'requestedBy', label: 'Requested By' },
]

const formFields = [
  { key: 'transferId', label: 'Transfer ID', placeholder: 'TRF-001' },
  { key: 'from', label: 'From Warehouse', type: 'select' as const, options: [
    { label: 'Main HQ', value: 'Main HQ' }, { label: 'East Wing', value: 'East Wing' },
    { label: 'West Depot', value: 'West Depot' }, { label: 'South Hub', value: 'South Hub' },
  ] },
  { key: 'to', label: 'To Warehouse', type: 'select' as const, options: [
    { label: 'Main HQ', value: 'Main HQ' }, { label: 'East Wing', value: 'East Wing' },
    { label: 'West Depot', value: 'West Depot' }, { label: 'South Hub', value: 'South Hub' },
  ] },
  { key: 'items', label: 'Items Count', type: 'number' as const, placeholder: '5' },
  { key: 'status', label: 'Status', type: 'select' as const, options: [
    { label: 'Pending', value: 'Pending' }, { label: 'In Transit', value: 'In Transit' },
    { label: 'Completed', value: 'Completed' }, { label: 'Cancelled', value: 'Cancelled' },
  ] },
  { key: 'date', label: 'Transfer Date', type: 'date' as const },
  { key: 'requestedBy', label: 'Requested By', placeholder: 'John Doe' },
]

const seedData = [
  { id: 't1', transferId: 'TRF-0041', from: 'Main HQ', to: 'East Wing', items: 45, status: 'Completed', date: '2026-02-10', requestedBy: 'David Kim' },
  { id: 't2', transferId: 'TRF-0042', from: 'West Depot', to: 'Main HQ', items: 120, status: 'In Transit', date: '2026-02-12', requestedBy: 'Sarah Johnson' },
  { id: 't3', transferId: 'TRF-0043', from: 'Main HQ', to: 'South Hub', items: 30, status: 'Pending', date: '2026-02-13', requestedBy: 'Emily Rodriguez' },
  { id: 't4', transferId: 'TRF-0044', from: 'East Wing', to: 'West Depot', items: 18, status: 'In Transit', date: '2026-02-11', requestedBy: 'Michael Chen' },
  { id: 't5', transferId: 'TRF-0045', from: 'South Hub', to: 'Main HQ', items: 250, status: 'Completed', date: '2026-02-08', requestedBy: 'David Kim' },
  { id: 't6', transferId: 'TRF-0046', from: 'Main HQ', to: 'West Depot', items: 6, status: 'Cancelled', date: '2026-02-07', requestedBy: 'Sarah Johnson' },
  { id: 't7', transferId: 'TRF-0047', from: 'West Depot', to: 'South Hub', items: 75, status: 'Pending', date: '2026-02-14', requestedBy: 'Emily Rodriguez' },
  { id: 't8', transferId: 'TRF-0048', from: 'East Wing', to: 'Main HQ', items: 15, status: 'Completed', date: '2026-02-06', requestedBy: 'Michael Chen' },
]
</script>

<template>
  <ErpCrudPage store-key="inv-transfers" title="Stock Transfers" description="Manage inter-warehouse transfers with shipment tracking." icon="i-lucide-arrow-left-right" entity-name="Transfer" :columns="columns" :form-fields="formFields" :initial-data="seedData" />
</template>
