<script setup lang="ts">
const columns = [
  { key: 'name', label: 'Campaign' },
  { key: 'list', label: 'List' },
  { key: 'sent', label: 'Sent', type: 'number' as const },
  { key: 'opens', label: 'Opens' },
  { key: 'clicks', label: 'Clicks' },
  { key: 'status', label: 'Status', type: 'badge' as const },
  { key: 'date', label: 'Date', type: 'date' as const },
]

const formFields = [
  { key: 'name', label: 'Email Name', placeholder: 'February Newsletter' },
  { key: 'list', label: 'Recipient List', type: 'select' as const, options: [
    { label: 'All Subscribers', value: 'All Subscribers' }, { label: 'Enterprise', value: 'Enterprise' },
    { label: 'Free Trial', value: 'Free Trial' }, { label: 'Inactive Users', value: 'Inactive Users' },
    { label: 'Newsletter', value: 'Newsletter' }, { label: 'Product Updates', value: 'Product Updates' },
  ] },
  { key: 'sent', label: 'Recipients', type: 'number' as const, placeholder: '5000' },
  { key: 'subject', label: 'Subject Line', placeholder: 'Your February update is here!' },
  { key: 'status', label: 'Status', type: 'select' as const, options: [
    { label: 'Draft', value: 'Draft' }, { label: 'Scheduled', value: 'Scheduled' },
    { label: 'Sent', value: 'Sent' }, { label: 'Cancelled', value: 'Cancelled' },
  ] },
  { key: 'date', label: 'Send Date', type: 'date' as const },
]

const seedData = [
  { id: 'eb1', name: 'February Product Newsletter', list: 'All Subscribers', sent: 18400, opens: '34.2%', clicks: '8.7%', status: 'Sent', date: '2026-02-05' },
  { id: 'eb2', name: 'Enterprise Feature Spotlight', list: 'Enterprise', sent: 2340, opens: '42.1%', clicks: '12.3%', status: 'Sent', date: '2026-02-10' },
  { id: 'eb3', name: 'Spring Launch Teaser', list: 'All Subscribers', sent: 18400, opens: '28.5%', clicks: '6.2%', status: 'Sent', date: '2026-02-01' },
  { id: 'eb4', name: 'Re-engagement: Inactive Users', list: 'Inactive Users', sent: 4560, opens: '18.3%', clicks: '4.1%', status: 'Sent', date: '2026-01-28' },
  { id: 'eb5', name: 'Trial Expiry Reminder', list: 'Free Trial', sent: 890, opens: '52.4%', clicks: '22.8%', status: 'Sent', date: '2026-02-12' },
  { id: 'eb6', name: 'March Newsletter Draft', list: 'Newsletter', sent: 0, opens: '—', clicks: '—', status: 'Draft', date: '2026-03-01' },
  { id: 'eb7', name: 'V3.0 Release Announcement', list: 'Product Updates', sent: 0, opens: '—', clicks: '—', status: 'Scheduled', date: '2026-02-20' },
  { id: 'eb8', name: 'Webinar Invitation - Cloud Series', list: 'Enterprise', sent: 2340, opens: '38.7%', clicks: '15.2%', status: 'Sent', date: '2026-02-08' },
  { id: 'eb9', name: 'Customer Survey Q1', list: 'All Subscribers', sent: 18400, opens: '22.1%', clicks: '9.4%', status: 'Sent', date: '2026-01-15' },
]
</script>

<template>
  <ErpCrudPage store-key="mkt-email-blasts" title="Email Blasts" description="Mass email marketing with list management and engagement analytics." icon="i-lucide-mails" entity-name="Email Blast" :columns="columns" :form-fields="formFields" :initial-data="seedData" />
</template>
