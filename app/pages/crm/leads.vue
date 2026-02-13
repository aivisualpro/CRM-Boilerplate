<script setup lang="ts">
const columns = [
  { key: 'name', label: 'Name', type: 'avatar' as const },
  { key: 'company', label: 'Company' },
  { key: 'source', label: 'Source', type: 'badge' as const },
  { key: 'score', label: 'Score', type: 'progress' as const },
  { key: 'value', label: 'Deal Value', type: 'currency' as const },
  { key: 'status', label: 'Status', type: 'badge' as const },
  { key: 'assignee', label: 'Assignee' },
]

const formFields = [
  { key: 'name', label: 'Lead Name', placeholder: 'Jane Smith' },
  { key: 'email', label: 'Email', type: 'email' as const, placeholder: 'jane@company.com' },
  { key: 'company', label: 'Company', placeholder: 'Acme Corp' },
  { key: 'source', label: 'Source', type: 'select' as const, options: [
    { label: 'Website', value: 'Website' }, { label: 'Referral', value: 'Referral' },
    { label: 'LinkedIn', value: 'LinkedIn' }, { label: 'Cold Call', value: 'Cold Call' },
    { label: 'Event', value: 'Event' }, { label: 'Organic', value: 'Organic' },
  ] },
  { key: 'score', label: 'Lead Score (0-100)', type: 'number' as const, placeholder: '75' },
  { key: 'value', label: 'Estimated Value ($)', type: 'number' as const, placeholder: '25000' },
  { key: 'status', label: 'Status', type: 'select' as const, options: [
    { label: 'New', value: 'New' }, { label: 'Contacted', value: 'Contacted' },
    { label: 'Qualified', value: 'Qualified' }, { label: 'Proposal', value: 'Proposal' },
    { label: 'Won', value: 'Won' }, { label: 'Lost', value: 'Lost' },
  ] },
  { key: 'assignee', label: 'Assignee', placeholder: 'Sales Rep Name' },
]

const seedData = [
  { id: 'l1', name: 'Alexandra Rivers', email: 'alex@quantum.io', company: 'Quantum Dynamics', source: 'LinkedIn', score: 92, value: 85000, status: 'Qualified', assignee: 'David Kim', avatar: 'https://i.pravatar.cc/40?u=alex@quantum.io' },
  { id: 'l2', name: 'Ryan Foster', email: 'rfoster@nexacore.com', company: 'NexaCore Systems', source: 'Website', score: 78, value: 42000, status: 'Proposal', assignee: 'Sarah Johnson', avatar: 'https://i.pravatar.cc/40?u=rfoster@nexacore.com' },
  { id: 'l3', name: 'Maria Santos', email: 'maria@brightedge.co', company: 'BrightEdge Inc', source: 'Referral', score: 85, value: 120000, status: 'Contacted', assignee: 'Emily Rodriguez', avatar: 'https://i.pravatar.cc/40?u=maria@brightedge.co' },
  { id: 'l4', name: 'Kevin Zhao', email: 'kzhao@stratosai.com', company: 'Stratos AI', source: 'Event', score: 64, value: 35000, status: 'New', assignee: 'Michael Chen', avatar: 'https://i.pravatar.cc/40?u=kzhao@stratosai.com' },
  { id: 'l5', name: 'Catherine Bell', email: 'cbell@vortexlabs.io', company: 'Vortex Labs', source: 'Cold Call', score: 45, value: 18000, status: 'Contacted', assignee: 'David Kim', avatar: 'https://i.pravatar.cc/40?u=cbell@vortexlabs.io' },
  { id: 'l6', name: 'Derek Morgan', email: 'derek@pinnacle.group', company: 'Pinnacle Group', source: 'Website', score: 91, value: 95000, status: 'Qualified', assignee: 'Sarah Johnson', avatar: 'https://i.pravatar.cc/40?u=derek@pinnacle.group' },
  { id: 'l7', name: 'Natasha Romanova', email: 'natasha@cyberflow.tech', company: 'CyberFlow', source: 'LinkedIn', score: 55, value: 28000, status: 'New', assignee: 'Emily Rodriguez', avatar: 'https://i.pravatar.cc/40?u=natasha@cyberflow.tech' },
  { id: 'l8', name: 'Oliver Grant', email: 'ogrant@metashift.co', company: 'MetaShift', source: 'Referral', score: 88, value: 67000, status: 'Won', assignee: 'Michael Chen', avatar: 'https://i.pravatar.cc/40?u=ogrant@metashift.co' },
  { id: 'l9', name: 'Jasmine Torres', email: 'jtorres@helixdata.com', company: 'Helix Data', source: 'Organic', score: 72, value: 52000, status: 'Proposal', assignee: 'David Kim', avatar: 'https://i.pravatar.cc/40?u=jtorres@helixdata.com' },
  { id: 'l10', name: 'Brian McCarthy', email: 'bmcc@forgetech.io', company: 'ForgeTech', source: 'Event', score: 38, value: 15000, status: 'Lost', assignee: 'Sarah Johnson', avatar: 'https://i.pravatar.cc/40?u=bmcc@forgetech.io' },
]
</script>

<template>
  <ErpCrudPage store-key="crm-leads" title="Leads" description="Capture, qualify, and nurture leads through your sales pipeline." icon="i-lucide-magnet" entity-name="Lead" :columns="columns" :form-fields="formFields" :initial-data="seedData" />
</template>
