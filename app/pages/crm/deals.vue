<script setup lang="ts">
const columns = [
  { key: 'title', label: 'Deal' },
  { key: 'company', label: 'Company' },
  { key: 'value', label: 'Value', type: 'currency' as const },
  { key: 'stage', label: 'Stage', type: 'badge' as const },
  { key: 'probability', label: 'Probability', type: 'progress' as const },
  { key: 'owner', label: 'Owner' },
  { key: 'closeDate', label: 'Close Date', type: 'date' as const },
]

const formFields = [
  { key: 'title', label: 'Deal Title', placeholder: 'Enterprise License Deal' },
  { key: 'company', label: 'Company', placeholder: 'Acme Corp' },
  { key: 'value', label: 'Deal Value ($)', type: 'number' as const, placeholder: '50000' },
  { key: 'stage', label: 'Stage', type: 'select' as const, options: [
    { label: 'Discovery', value: 'Discovery' }, { label: 'Proposal', value: 'Proposal' },
    { label: 'Negotiation', value: 'Negotiation' }, { label: 'Closed Won', value: 'Closed Won' },
    { label: 'Closed Lost', value: 'Closed Lost' },
  ] },
  { key: 'probability', label: 'Probability (%)', type: 'number' as const, placeholder: '75' },
  { key: 'owner', label: 'Deal Owner', placeholder: 'John Smith' },
  { key: 'contact', label: 'Primary Contact', placeholder: 'jane@company.com' },
  { key: 'closeDate', label: 'Expected Close', type: 'date' as const },
]

const seedData = [
  { id: 'd1', title: 'Enterprise Cloud Migration', company: 'TechVision Inc', value: 185000, stage: 'Negotiation', probability: 80, owner: 'Sarah Johnson', contact: 'CTO Office', closeDate: '2026-03-15' },
  { id: 'd2', title: 'Annual SaaS License', company: 'GlobalSoft', value: 72000, stage: 'Proposal', probability: 60, owner: 'David Kim', contact: 'Michael Chen', closeDate: '2026-02-28' },
  { id: 'd3', title: 'Custom ERP Implementation', company: 'Meridian Corp', value: 340000, stage: 'Discovery', probability: 30, owner: 'Emily Rodriguez', contact: 'Lisa Chang', closeDate: '2026-05-01' },
  { id: 'd4', title: 'Data Analytics Platform', company: 'DataFlow AI', value: 95000, stage: 'Closed Won', probability: 100, owner: 'Michael Chen', contact: 'James Wilson', closeDate: '2026-01-20' },
  { id: 'd5', title: 'Security Audit & Upgrade', company: 'Apex Group', value: 48000, stage: 'Proposal', probability: 55, owner: 'Sarah Johnson', contact: 'Robert Martinez', closeDate: '2026-03-01' },
  { id: 'd6', title: 'Mobile App Development', company: 'BrightPath', value: 120000, stage: 'Negotiation', probability: 75, owner: 'David Kim', contact: 'Anna Kowalski', closeDate: '2026-04-10' },
  { id: 'd7', title: 'Infrastructure Refresh', company: 'Zenith Systems', value: 210000, stage: 'Discovery', probability: 25, owner: 'Emily Rodriguez', contact: 'Sofia Nguyen', closeDate: '2026-06-15' },
  { id: 'd8', title: 'AI Chatbot Integration', company: 'BlueOcean AI', value: 65000, stage: 'Closed Lost', probability: 0, owner: 'Michael Chen', contact: 'Marcus Thompson', closeDate: '2026-01-30' },
  { id: 'd9', title: 'Compliance Platform', company: 'NexGen Solutions', value: 155000, stage: 'Proposal', probability: 50, owner: 'Sarah Johnson', contact: 'Emily R.', closeDate: '2026-03-20' },
]
</script>

<template>
  <ErpCrudPage store-key="crm-deals" title="Deals Pipeline" description="Track and manage deals through every stage of your sales cycle." icon="i-lucide-handshake" entity-name="Deal" :columns="columns" :form-fields="formFields" :initial-data="seedData" />
</template>
