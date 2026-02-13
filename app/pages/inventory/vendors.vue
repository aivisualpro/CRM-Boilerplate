<script setup lang="ts">
const columns = [
  { key: 'name', label: 'Vendor' },
  { key: 'contact', label: 'Contact Person' },
  { key: 'email', label: 'Email', type: 'email' as const },
  { key: 'phone', label: 'Phone' },
  { key: 'rating', label: 'Rating' },
  { key: 'onTimeRate', label: 'On-Time', type: 'progress' as const },
  { key: 'status', label: 'Status', type: 'badge' as const },
]

const formFields = [
  { key: 'name', label: 'Vendor Name', placeholder: 'Dell Technologies' },
  { key: 'contact', label: 'Contact Person', placeholder: 'Jane Smith' },
  { key: 'email', label: 'Email', type: 'email' as const, placeholder: 'vendor@company.com' },
  { key: 'phone', label: 'Phone', placeholder: '+1 (555) 000-0000' },
  { key: 'rating', label: 'Rating (out of 5)', placeholder: '4.5' },
  { key: 'onTimeRate', label: 'On-Time Delivery (%)', type: 'number' as const, placeholder: '95' },
  { key: 'status', label: 'Status', type: 'select' as const, options: [
    { label: 'Active', value: 'Active' }, { label: 'Inactive', value: 'Inactive' }, { label: 'Under Review', value: 'Under Review' },
  ] },
  { key: 'address', label: 'Address', type: 'textarea' as const, placeholder: '123 Main St, City, State' },
]

const seedData = [
  { id: 'v1', name: 'Dell Technologies', contact: 'Mark Anderson', email: 'mark@dell.com', phone: '+1 (800) 624-9897', rating: '4.8/5', onTimeRate: 96, status: 'Active', address: 'Round Rock, TX' },
  { id: 'v2', name: 'Cisco Systems', contact: 'Rachel Green', email: 'rgreen@cisco.com', phone: '+1 (800) 553-6387', rating: '4.5/5', onTimeRate: 92, status: 'Active', address: 'San Jose, CA' },
  { id: 'v3', name: 'HP Enterprise', contact: 'Tom Harris', email: 'tharris@hpe.com', phone: '+1 (800) 474-6836', rating: '4.3/5', onTimeRate: 88, status: 'Active', address: 'Palo Alto, CA' },
  { id: 'v4', name: 'Amazon Business', contact: 'Lisa Chen', email: 'lchen@amazon.com', phone: '+1 (888) 280-4331', rating: '4.6/5', onTimeRate: 98, status: 'Active', address: 'Seattle, WA' },
  { id: 'v5', name: 'CDW Corporation', contact: 'Brian Walsh', email: 'bwalsh@cdw.com', phone: '+1 (800) 750-4239', rating: '4.1/5', onTimeRate: 85, status: 'Active', address: 'Lincolnshire, IL' },
  { id: 'v6', name: 'Lenovo', contact: 'Wei Zhang', email: 'wzhang@lenovo.com', phone: '+1 (855) 253-6686', rating: '4.4/5', onTimeRate: 91, status: 'Active', address: 'Morrisville, NC' },
  { id: 'v7', name: 'Brother Industries', contact: 'Kenji Tanaka', email: 'ktanaka@brother.com', phone: '+1 (800) 276-7746', rating: '3.9/5', onTimeRate: 78, status: 'Under Review', address: 'Bridgewater, NJ' },
  { id: 'v8', name: 'Logitech', contact: 'Emma Cooper', email: 'ecooper@logitech.com', phone: '+1 (800) 231-7717', rating: '4.7/5', onTimeRate: 94, status: 'Active', address: 'Newark, CA' },
  { id: 'v9', name: 'Ubiquiti Networks', contact: 'Alex Novak', email: 'anovak@ui.com', phone: '+1 (888) 452-3501', rating: '4.2/5', onTimeRate: 87, status: 'Active', address: 'New York, NY' },
  { id: 'v10', name: 'TechData Corp', contact: 'Maria Lopez', email: 'mlopez@techdata.com', phone: '+1 (800) 237-8931', rating: '3.7/5', onTimeRate: 72, status: 'Inactive', address: 'Clearwater, FL' },
]
</script>

<template>
  <ErpCrudPage store-key="inv-vendors" title="Vendors" description="Centralized vendor management with performance scorecards." icon="i-lucide-truck" entity-name="Vendor" :columns="columns" :form-fields="formFields" :initial-data="seedData" />
</template>
