<script setup lang="ts">
const columns = [
  { key: 'visitor', label: 'Visitor' },
  { key: 'email', label: 'Email', type: 'email' as const },
  { key: 'subject', label: 'Subject' },
  { key: 'agent', label: 'Agent' },
  { key: 'duration', label: 'Duration' },
  { key: 'messages', label: 'Messages', type: 'number' as const },
  { key: 'status', label: 'Status', type: 'badge' as const },
  { key: 'startTime', label: 'Started', type: 'date' as const },
]

const formFields = [
  { key: 'visitor', label: 'Visitor Name', placeholder: 'John Smith' },
  { key: 'email', label: 'Email', type: 'email' as const, placeholder: 'john@example.com' },
  { key: 'subject', label: 'Subject', placeholder: 'Pricing inquiry' },
  { key: 'agent', label: 'Agent', placeholder: 'Thomas Wright' },
  { key: 'status', label: 'Status', type: 'select' as const, options: [
    { label: 'Active', value: 'Active' }, { label: 'Pending', value: 'Pending' },
    { label: 'Resolved', value: 'Resolved' }, { label: 'Closed', value: 'Closed' },
  ] },
]

const seedData = [
  { id: 'ch1', visitor: 'Jennifer Adams', email: 'jadams@techcorp.com', subject: 'Enterprise pricing question', agent: 'Thomas Wright', duration: '12 min', messages: 18, status: 'Active', startTime: '2026-02-13' },
  { id: 'ch2', visitor: 'Patrick Lee', email: 'plee@startup.io', subject: 'API integration help', agent: 'Sofia Nguyen', duration: '8 min', messages: 11, status: 'Active', startTime: '2026-02-13' },
  { id: 'ch3', visitor: 'Anonymous Visitor', email: '—', subject: 'Free trial questions', agent: 'Thomas Wright', duration: '3 min', messages: 5, status: 'Pending', startTime: '2026-02-13' },
  { id: 'ch4', visitor: 'Rebecca Stone', email: 'rstone@enterprise.com', subject: 'Data migration support', agent: 'David Kim', duration: '25 min', messages: 32, status: 'Resolved', startTime: '2026-02-13' },
  { id: 'ch5', visitor: 'Carlos Mendez', email: 'cmendez@retail.co', subject: 'Billing discrepancy', agent: 'Thomas Wright', duration: '15 min', messages: 20, status: 'Resolved', startTime: '2026-02-12' },
  { id: 'ch6', visitor: 'Aisha Rahman', email: 'arahman@healthco.org', subject: 'HIPAA compliance question', agent: 'Lisa Chang', duration: '18 min', messages: 22, status: 'Closed', startTime: '2026-02-12' },
  { id: 'ch7', visitor: 'Tyler Brooks', email: 'tbrooks@agency.com', subject: 'Custom branding options', agent: 'Sofia Nguyen', duration: '10 min', messages: 14, status: 'Closed', startTime: '2026-02-11' },
  { id: 'ch8', visitor: 'Maya Singh', email: 'msingh@fintech.io', subject: 'Multi-currency support', agent: 'Thomas Wright', duration: '22 min', messages: 28, status: 'Closed', startTime: '2026-02-10' },
]
</script>

<template>
  <ErpCrudPage store-key="support-chat" title="Live Chat" description="Real-time customer communication with agent routing and chat history." icon="i-lucide-message-circle" entity-name="Conversation" :columns="columns" :form-fields="formFields" :initial-data="seedData" />
</template>
