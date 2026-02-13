<script setup lang="ts">
const columns = [
  { key: 'title', label: 'Article Title' },
  { key: 'category', label: 'Category', type: 'badge' as const },
  { key: 'author', label: 'Author' },
  { key: 'views', label: 'Views', type: 'number' as const },
  { key: 'helpful', label: 'Helpful', type: 'progress' as const },
  { key: 'lastUpdated', label: 'Updated', type: 'date' as const },
  { key: 'status', label: 'Status', type: 'badge' as const },
]

const formFields = [
  { key: 'title', label: 'Article Title', placeholder: 'Getting Started Guide' },
  { key: 'category', label: 'Category', type: 'select' as const, options: [
    { label: 'Getting Started', value: 'Getting Started' }, { label: 'Account', value: 'Account' },
    { label: 'Billing', value: 'Billing' }, { label: 'API', value: 'API' },
    { label: 'Integrations', value: 'Integrations' }, { label: 'Troubleshooting', value: 'Troubleshooting' },
  ] },
  { key: 'author', label: 'Author', placeholder: 'Thomas Wright' },
  { key: 'status', label: 'Status', type: 'select' as const, options: [
    { label: 'Published', value: 'Published' }, { label: 'Draft', value: 'Draft' }, { label: 'Under Review', value: 'Under Review' },
  ] },
  { key: 'content', label: 'Content', type: 'textarea' as const, placeholder: 'Article content...' },
]

const seedData = [
  { id: 'kb1', title: 'Getting Started with Your Dashboard', category: 'Getting Started', author: 'Thomas Wright', views: 4521, helpful: 94, lastUpdated: '2026-02-10', status: 'Published' },
  { id: 'kb2', title: 'How to Configure SSO Authentication', category: 'Account', author: 'Sofia Nguyen', views: 2380, helpful: 89, lastUpdated: '2026-02-08', status: 'Published' },
  { id: 'kb3', title: 'Understanding Your Invoice & Billing', category: 'Billing', author: 'Robert Martinez', views: 1876, helpful: 92, lastUpdated: '2026-02-05', status: 'Published' },
  { id: 'kb4', title: 'REST API Authentication Guide', category: 'API', author: 'Michael Chen', views: 3245, helpful: 87, lastUpdated: '2026-02-12', status: 'Published' },
  { id: 'kb5', title: 'Connecting Slack & Teams Notifications', category: 'Integrations', author: 'David Kim', views: 1542, helpful: 91, lastUpdated: '2026-02-03', status: 'Published' },
  { id: 'kb6', title: 'Troubleshooting Login Issues', category: 'Troubleshooting', author: 'Thomas Wright', views: 5678, helpful: 85, lastUpdated: '2026-02-11', status: 'Published' },
  { id: 'kb7', title: 'Setting Up Webhook Endpoints', category: 'API', author: 'Michael Chen', views: 987, helpful: 90, lastUpdated: '2026-02-09', status: 'Published' },
  { id: 'kb8', title: 'Data Import & Export Best Practices', category: 'Getting Started', author: 'Priya Patel', views: 2890, helpful: 88, lastUpdated: '2026-02-07', status: 'Published' },
  { id: 'kb9', title: 'Managing Team Permissions & Roles', category: 'Account', author: 'Lisa Chang', views: 1345, helpful: 93, lastUpdated: '2026-02-04', status: 'Published' },
  { id: 'kb10', title: 'Mobile App Setup Guide', category: 'Getting Started', author: 'Sofia Nguyen', views: 456, helpful: 78, lastUpdated: '2026-02-13', status: 'Draft' },
  { id: 'kb11', title: 'Advanced Reporting & Custom Dashboards', category: 'Getting Started', author: 'Priya Patel', views: 0, helpful: 0, lastUpdated: '2026-02-13', status: 'Under Review' },
]
</script>

<template>
  <ErpCrudPage store-key="support-kb" title="Knowledge Base" description="Self-service knowledge management with searchable articles and feedback." icon="i-lucide-book-open" entity-name="Article" :columns="columns" :form-fields="formFields" :initial-data="seedData" />
</template>
