<script setup lang="ts">
const columns = [
  { key: 'name', label: 'Campaign' },
  { key: 'channel', label: 'Channel', type: 'badge' as const },
  { key: 'status', label: 'Status', type: 'badge' as const },
  { key: 'budget', label: 'Budget', type: 'currency' as const },
  { key: 'spent', label: 'Spent', type: 'currency' as const },
  { key: 'leads', label: 'Leads', type: 'number' as const },
  { key: 'roi', label: 'ROI' },
]

const formFields = [
  { key: 'name', label: 'Campaign Name', placeholder: 'Spring Launch 2026' },
  { key: 'channel', label: 'Channel', type: 'select' as const, options: [
    { label: 'Email', value: 'Email' }, { label: 'Social Media', value: 'Social Media' },
    { label: 'Google Ads', value: 'Google Ads' }, { label: 'Content', value: 'Content' },
    { label: 'Webinar', value: 'Webinar' }, { label: 'LinkedIn', value: 'LinkedIn' },
  ] },
  { key: 'status', label: 'Status', type: 'select' as const, options: [
    { label: 'Running', value: 'Running' }, { label: 'Paused', value: 'Paused' },
    { label: 'Scheduled', value: 'Scheduled' }, { label: 'Completed', value: 'Completed' }, { label: 'Draft', value: 'Draft' },
  ] },
  { key: 'budget', label: 'Budget ($)', type: 'number' as const, placeholder: '10000' },
  { key: 'spent', label: 'Spent ($)', type: 'number' as const, placeholder: '5000' },
  { key: 'leads', label: 'Leads Generated', type: 'number' as const, placeholder: '50' },
  { key: 'roi', label: 'ROI', placeholder: '340%' },
  { key: 'startDate', label: 'Start Date', type: 'date' as const },
  { key: 'endDate', label: 'End Date', type: 'date' as const },
]

const seedData = [
  { id: 'cm1', name: 'Spring Product Launch 2026', channel: 'Email', status: 'Running', budget: 25000, spent: 18500, leads: 234, roi: '420%', startDate: '2026-02-01', endDate: '2026-03-31' },
  { id: 'cm2', name: 'Enterprise Decision Makers', channel: 'LinkedIn', status: 'Running', budget: 15000, spent: 9800, leads: 67, roi: '285%', startDate: '2026-01-15', endDate: '2026-04-15' },
  { id: 'cm3', name: 'Cloud Migration Webinar Series', channel: 'Webinar', status: 'Scheduled', budget: 8000, spent: 2400, leads: 0, roi: '—', startDate: '2026-03-01', endDate: '2026-03-30' },
  { id: 'cm4', name: 'Google Search - Brand Terms', channel: 'Google Ads', status: 'Running', budget: 12000, spent: 7200, leads: 189, roi: '510%', startDate: '2026-01-01', endDate: '2026-12-31' },
  { id: 'cm5', name: 'Customer Success Stories Blog', channel: 'Content', status: 'Running', budget: 5000, spent: 3200, leads: 45, roi: '380%', startDate: '2026-01-10', endDate: '2026-06-30' },
  { id: 'cm6', name: 'Black Friday Early Access', channel: 'Email', status: 'Completed', budget: 10000, spent: 10000, leads: 412, roi: '680%', startDate: '2025-11-20', endDate: '2025-12-02' },
  { id: 'cm7', name: 'SMB Social Awareness', channel: 'Social Media', status: 'Paused', budget: 8000, spent: 4500, leads: 28, roi: '95%', startDate: '2026-01-20', endDate: '2026-03-20' },
  { id: 'cm8', name: 'Product Hunt Launch', channel: 'Social Media', status: 'Draft', budget: 3000, spent: 0, leads: 0, roi: '—', startDate: '2026-04-01', endDate: '2026-04-07' },
]
</script>

<template>
  <ErpCrudPage store-key="mkt-campaigns" title="Campaigns" description="Plan, execute, and measure marketing campaigns across channels." icon="i-lucide-megaphone" entity-name="Campaign" :columns="columns" :form-fields="formFields" :initial-data="seedData" />
</template>
