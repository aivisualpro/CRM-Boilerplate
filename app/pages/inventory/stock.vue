<script setup lang="ts">
const columns = [
  { key: 'sku', label: 'SKU' },
  { key: 'product', label: 'Product' },
  { key: 'warehouse', label: 'Warehouse', type: 'badge' as const },
  { key: 'quantity', label: 'Qty', type: 'number' as const },
  { key: 'value', label: 'Value', type: 'currency' as const },
  { key: 'reorderPoint', label: 'Reorder At', type: 'number' as const },
  { key: 'status', label: 'Status', type: 'badge' as const },
]

const formFields = [
  { key: 'sku', label: 'SKU', placeholder: 'SKU-001' },
  { key: 'product', label: 'Product Name', placeholder: 'Widget Pro' },
  { key: 'warehouse', label: 'Warehouse', type: 'select' as const, options: [
    { label: 'Main HQ', value: 'Main HQ' }, { label: 'East Wing', value: 'East Wing' },
    { label: 'West Depot', value: 'West Depot' }, { label: 'South Hub', value: 'South Hub' },
  ] },
  { key: 'quantity', label: 'Quantity', type: 'number' as const, placeholder: '100' },
  { key: 'value', label: 'Value ($)', type: 'number' as const, placeholder: '5000' },
  { key: 'reorderPoint', label: 'Reorder Point', type: 'number' as const, placeholder: '25' },
  { key: 'status', label: 'Status', type: 'select' as const, options: [
    { label: 'In Stock', value: 'In Stock' }, { label: 'Low Stock', value: 'Low Stock' }, { label: 'Out of Stock', value: 'Out of Stock' },
  ] },
]

const seedData = [
  { id: 's1', sku: 'ECS-001', product: 'Enterprise Cloud Suite', warehouse: 'Main HQ', quantity: 450, value: 1124550, reorderPoint: 50, status: 'In Stock' },
  { id: 's2', sku: 'DSP-002', product: 'DataShield Pro', warehouse: 'Main HQ', quantity: 320, value: 287680, reorderPoint: 40, status: 'In Stock' },
  { id: 's3', sku: 'SDH-003', product: 'SmartDesk Hub', warehouse: 'East Wing', quantity: 18, value: 22500, reorderPoint: 20, status: 'Low Stock' },
  { id: 's4', sku: 'AGL-004', product: 'API Gateway License', warehouse: 'Main HQ', quantity: 890, value: 444110, reorderPoint: 100, status: 'In Stock' },
  { id: 's5', sku: 'WPR-006', product: 'Wireless Presenter', warehouse: 'West Depot', quantity: 0, value: 0, reorderPoint: 30, status: 'Out of Stock' },
  { id: 's6', sku: 'ADH-007', product: 'Analytics Dashboard', warehouse: 'Main HQ', quantity: 675, value: 404325, reorderPoint: 50, status: 'In Stock' },
  { id: 's7', sku: 'SRU-008', product: 'Server Rack Unit 42U', warehouse: 'South Hub', quantity: 5, value: 19000, reorderPoint: 8, status: 'Low Stock' },
  { id: 's8', sku: 'UDS-010', product: 'USB-C Docking Station', warehouse: 'East Wing', quantity: 230, value: 43470, reorderPoint: 30, status: 'In Stock' },
  { id: 's9', sku: 'NSW-012', product: 'Network Switch 48-Port', warehouse: 'West Depot', quantity: 8, value: 16800, reorderPoint: 10, status: 'Low Stock' },
  { id: 's10', sku: 'CAB-013', product: 'Cat6a Cable Box (1000ft)', warehouse: 'South Hub', quantity: 42, value: 6300, reorderPoint: 15, status: 'In Stock' },
  { id: 's11', sku: 'MNT-014', product: 'Dual Monitor Arm', warehouse: 'East Wing', quantity: 0, value: 0, reorderPoint: 20, status: 'Out of Stock' },
  { id: 's12', sku: 'HPH-015', product: 'Noise Cancelling Headset', warehouse: 'Main HQ', quantity: 156, value: 23400, reorderPoint: 25, status: 'In Stock' },
]
</script>

<template>
  <ErpCrudPage store-key="inv-stock" title="Stock Overview" description="Real-time inventory visibility across all warehouses." icon="i-lucide-warehouse" entity-name="Stock Item" :columns="columns" :form-fields="formFields" :initial-data="seedData" />
</template>
