<script setup lang="ts">
const columns = [
  { key: 'name', label: 'Company' },
  { key: 'industry', label: 'Industry' },
  { key: 'size', label: 'Size' },
  { key: 'revenue', label: 'Annual Revenue', type: 'currency' as const },
  { key: 'location', label: 'Location' },
  { key: 'employees', label: 'Employees', type: 'number' as const },
  { key: 'status', label: 'Status', type: 'badge' as const },
]

const formFields = [
  { key: 'name', label: 'Company Name', placeholder: 'Acme Corp' },
  { key: 'industry', label: 'Industry', type: 'select' as const, options: [
    { label: 'Technology', value: 'Technology' }, { label: 'Healthcare', value: 'Healthcare' },
    { label: 'Finance', value: 'Finance' }, { label: 'Manufacturing', value: 'Manufacturing' },
    { label: 'Retail', value: 'Retail' }, { label: 'Education', value: 'Education' },
    { label: 'Consulting', value: 'Consulting' }, { label: 'Energy', value: 'Energy' },
  ] },
  { key: 'size', label: 'Company Size', type: 'select' as const, options: [
    { label: '1-10', value: '1-10' }, { label: '11-50', value: '11-50' },
    { label: '51-200', value: '51-200' }, { label: '201-1000', value: '201-1000' },
    { label: '1000+', value: '1000+' },
  ] },
  { key: 'revenue', label: 'Annual Revenue ($)', type: 'number' as const, placeholder: '5000000' },
  { key: 'location', label: 'Location', placeholder: 'San Francisco, CA' },
  { key: 'employees', label: 'Employees', type: 'number' as const, placeholder: '250' },
  { key: 'website', label: 'Website', type: 'url' as const, placeholder: 'https://example.com' },
  { key: 'status', label: 'Status', type: 'select' as const, options: [
    { label: 'Active', value: 'Active' }, { label: 'Inactive', value: 'Inactive' }, { label: 'Prospect', value: 'Prospect' },
  ] },
]

const seedData = [
  { id: 'co1', name: 'TechVision Inc', industry: 'Technology', size: '201-1000', revenue: 45000000, location: 'San Francisco, CA', employees: 450, status: 'Active', website: 'https://techvision.io' },
  { id: 'co2', name: 'GlobalSoft', industry: 'Technology', size: '1000+', revenue: 120000000, location: 'New York, NY', employees: 2800, status: 'Active', website: 'https://globalsoft.com' },
  { id: 'co3', name: 'Meridian Corp', industry: 'Finance', size: '201-1000', revenue: 78000000, location: 'Chicago, IL', employees: 620, status: 'Active', website: 'https://meridian.com' },
  { id: 'co4', name: 'NexGen Solutions', industry: 'Consulting', size: '51-200', revenue: 18000000, location: 'Austin, TX', employees: 145, status: 'Active', website: 'https://nexgen.co' },
  { id: 'co5', name: 'DataFlow AI', industry: 'Technology', size: '11-50', revenue: 5200000, location: 'Seattle, WA', employees: 38, status: 'Prospect', website: 'https://dataflowai.com' },
  { id: 'co6', name: 'Apex Group', industry: 'Manufacturing', size: '1000+', revenue: 340000000, location: 'Detroit, MI', employees: 4200, status: 'Active', website: 'https://apex.group' },
  { id: 'co7', name: 'CloudNine Tech', industry: 'Technology', size: '51-200', revenue: 22000000, location: 'Denver, CO', employees: 178, status: 'Active', website: 'https://cloudnine.tech' },
  { id: 'co8', name: 'BrightPath', industry: 'Education', size: '11-50', revenue: 3800000, location: 'Boston, MA', employees: 42, status: 'Prospect', website: 'https://brightpath.io' },
  { id: 'co9', name: 'Zenith Systems', industry: 'Healthcare', size: '201-1000', revenue: 56000000, location: 'Houston, TX', employees: 520, status: 'Active', website: 'https://zenithsys.com' },
  { id: 'co10', name: 'Synthetix Labs', industry: 'Energy', size: '51-200', revenue: 15000000, location: 'Portland, OR', employees: 95, status: 'Inactive', website: 'https://synthetix.io' },
]
</script>

<template>
  <ErpCrudPage store-key="crm-companies" title="Companies" description="Manage B2B accounts with financial data and relationship mapping." icon="i-lucide-building-2" entity-name="Company" :columns="columns" :form-fields="formFields" :initial-data="seedData" />
</template>
