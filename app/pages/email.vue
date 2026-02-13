<script setup lang="ts">
import { accounts, mails } from '@/components/mail/data/mails'

const { setHeader } = usePageHeader()
setHeader({ title: 'Email', icon: 'i-lucide-mail', description: 'Inbox & communications' })
</script>

<template>
  <div class="-m-4 lg:-m-6">
    <MailLayout
      :accounts="accounts"
      :mails="mails"
      :nav-collapsed-size="4"
    />
  </div>
</template>
