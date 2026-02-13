<script setup lang="ts">
const columns = [
  { key: 'type', label: 'Type', type: 'badge' as const },
  { key: 'subject', label: 'Subject' },
  { key: 'contact', label: 'Contact' },
  { key: 'assignee', label: 'Assignee' },
  { key: 'date', label: 'Date', type: 'date' as const },
  { key: 'status', label: 'Status', type: 'badge' as const },
]

const formFields = [
  { key: 'type', label: 'Activity Type', type: 'select' as const, options: [
    { label: 'Call', value: 'Call' }, { label: 'Email', value: 'Email' },
    { label: 'Meeting', value: 'Meeting' }, { label: 'Note', value: 'Note' }, { label: 'Task', value: 'Task' },
  ] },
  { key: 'subject', label: 'Subject', placeholder: 'Follow-up call with client' },
  { key: 'contact', label: 'Contact', placeholder: 'Jane Smith' },
  { key: 'assignee', label: 'Assignee', placeholder: 'John Doe' },
  { key: 'date', label: 'Date', type: 'date' as const },
  { key: 'status', label: 'Status', type: 'select' as const, options: [
    { label: 'Completed', value: 'Completed' }, { label: 'Pending', value: 'Pending' }, { label: 'Overdue', value: 'Overdue' },
  ] },
  { key: 'notes', label: 'Notes', type: 'textarea' as const, placeholder: 'Activity notes...' },
]

const seedData = [
  { id: 'a1', type: 'Call', subject: 'Quarterly review call', contact: 'Sarah Johnson', assignee: 'David Kim', date: '2026-02-13', status: 'Completed', notes: 'Discussed Q1 targets' },
  { id: 'a2', type: 'Email', subject: 'Proposal follow-up', contact: 'Michael Chen', assignee: 'Emily Rodriguez', date: '2026-02-12', status: 'Completed', notes: 'Sent revised pricing' },
  { id: 'a3', type: 'Meeting', subject: 'Product demo - Enterprise plan', contact: 'Alex Rivers', assignee: 'Sarah Johnson', date: '2026-02-14', status: 'Pending', notes: 'Virtual demo at 2pm' },
  { id: 'a4', type: 'Task', subject: 'Prepare contract for GlobalSoft', contact: 'Michael Chen', assignee: 'David Kim', date: '2026-02-11', status: 'Overdue', notes: 'Legal review needed' },
  { id: 'a5', type: 'Call', subject: 'Cold outreach - Helix Data', contact: 'Jasmine Torres', assignee: 'Emily Rodriguez', date: '2026-02-13', status: 'Pending', notes: 'First touchpoint' },
  { id: 'a6', type: 'Meeting', subject: 'Onboarding kickoff', contact: 'Oliver Grant', assignee: 'Michael Chen', date: '2026-02-10', status: 'Completed', notes: 'Implementation timeline agreed' },
  { id: 'a7', type: 'Email', subject: 'Invoice reminder - Q4', contact: 'Lisa Chang', assignee: 'Sarah Johnson', date: '2026-02-09', status: 'Completed', notes: 'Payment confirmed' },
  { id: 'a8', type: 'Note', subject: 'Competitor intel - Pinnacle deal', contact: 'Derek Morgan', assignee: 'David Kim', date: '2026-02-08', status: 'Completed', notes: 'They are also evaluating CompetitorX' },
  { id: 'a9', type: 'Call', subject: 'Renewal discussion', contact: 'Priya Patel', assignee: 'Emily Rodriguez', date: '2026-02-15', status: 'Pending', notes: 'Contract expires March 30' },
  { id: 'a10', type: 'Task', subject: 'Update CRM with trade show contacts', contact: 'N/A', assignee: 'Sarah Johnson', date: '2026-02-07', status: 'Overdue', notes: '45 new contacts from SaaStr' },
]
</script>

<template>
  <ErpCrudPage store-key="crm-activities" title="Activities" description="Log and track all customer-facing activities across your team." icon="i-lucide-activity" entity-name="Activity" :columns="columns" :form-fields="formFields" :initial-data="seedData" />
</template>
