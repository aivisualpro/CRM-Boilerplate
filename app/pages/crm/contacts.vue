<script setup lang="ts">
const columns = [
  { key: 'name', label: 'Name', type: 'avatar' as const },
  { key: 'email', label: 'Email', type: 'email' as const },
  { key: 'company', label: 'Company' },
  { key: 'position', label: 'Position' },
  { key: 'phone', label: 'Phone' },
  { key: 'status', label: 'Status', type: 'badge' as const },
  { key: 'lastContact', label: 'Last Contact', type: 'date' as const },
]

const formFields = [
  { key: 'name', label: 'Full Name', placeholder: 'John Doe' },
  { key: 'email', label: 'Email', type: 'email' as const, placeholder: 'john@company.com' },
  { key: 'phone', label: 'Phone', placeholder: '+1 (555) 000-0000' },
  { key: 'company', label: 'Company', placeholder: 'Acme Corp' },
  { key: 'position', label: 'Position', placeholder: 'VP of Sales' },
  { key: 'status', label: 'Status', type: 'select' as const, options: [
    { label: 'Active', value: 'Active' },
    { label: 'Inactive', value: 'Inactive' },
    { label: 'Lead', value: 'Lead' },
  ] },
  { key: 'lastContact', label: 'Last Contact', type: 'date' as const },
]

const seedData = [
  { id: 'c1', name: 'Sarah Johnson', email: 'sarah@techvision.io', phone: '+1 (555) 234-5678', company: 'TechVision Inc', position: 'CTO', status: 'Active', avatar: 'https://i.pravatar.cc/40?u=sarah@techvision.io', lastContact: '2026-02-11' },
  { id: 'c2', name: 'Michael Chen', email: 'mchen@globalsoft.com', phone: '+1 (555) 345-6789', company: 'GlobalSoft', position: 'CEO', status: 'Active', avatar: 'https://i.pravatar.cc/40?u=mchen@globalsoft.com', lastContact: '2026-02-10' },
  { id: 'c3', name: 'Emily Rodriguez', email: 'emily.r@nexgen.co', phone: '+1 (555) 456-7890', company: 'NexGen Solutions', position: 'VP Sales', status: 'Active', avatar: 'https://i.pravatar.cc/40?u=emily.r@nexgen.co', lastContact: '2026-02-09' },
  { id: 'c4', name: 'James Wilson', email: 'jwilson@dataflowai.com', phone: '+1 (555) 567-8901', company: 'DataFlow AI', position: 'Product Manager', status: 'Lead', avatar: 'https://i.pravatar.cc/40?u=jwilson@dataflowai.com', lastContact: '2026-02-08' },
  { id: 'c5', name: 'Priya Patel', email: 'priya@cloudnine.tech', phone: '+1 (555) 678-9012', company: 'CloudNine Tech', position: 'Engineering Lead', status: 'Active', avatar: 'https://i.pravatar.cc/40?u=priya@cloudnine.tech', lastContact: '2026-02-07' },
  { id: 'c6', name: 'David Kim', email: 'dkim@synthetix.io', phone: '+1 (555) 789-0123', company: 'Synthetix Labs', position: 'Director', status: 'Active', avatar: 'https://i.pravatar.cc/40?u=dkim@synthetix.io', lastContact: '2026-02-06' },
  { id: 'c7', name: 'Lisa Chang', email: 'lchang@meridian.com', phone: '+1 (555) 890-1234', company: 'Meridian Corp', position: 'Marketing Head', status: 'Inactive', avatar: 'https://i.pravatar.cc/40?u=lchang@meridian.com', lastContact: '2026-01-15' },
  { id: 'c8', name: 'Robert Martinez', email: 'rmartinez@apex.group', phone: '+1 (555) 901-2345', company: 'Apex Group', position: 'CFO', status: 'Active', avatar: 'https://i.pravatar.cc/40?u=rmartinez@apex.group', lastContact: '2026-02-12' },
  { id: 'c9', name: 'Anna Kowalski', email: 'anna.k@brightpath.io', phone: '+1 (555) 012-3456', company: 'BrightPath', position: 'COO', status: 'Lead', avatar: 'https://i.pravatar.cc/40?u=anna.k@brightpath.io', lastContact: '2026-02-05' },
  { id: 'c10', name: 'Thomas Wright', email: 'twright@innovatech.co', phone: '+1 (555) 123-4567', company: 'InnovaTech', position: 'Head of Ops', status: 'Active', avatar: 'https://i.pravatar.cc/40?u=twright@innovatech.co', lastContact: '2026-02-13' },
  { id: 'c11', name: 'Sofia Nguyen', email: 'snguyen@zenithsys.com', phone: '+1 (555) 234-8901', company: 'Zenith Systems', position: 'Sales Director', status: 'Active', avatar: 'https://i.pravatar.cc/40?u=snguyen@zenithsys.com', lastContact: '2026-02-04' },
  { id: 'c12', name: 'Marcus Thompson', email: 'marcus@blueocean.ai', phone: '+1 (555) 345-9012', company: 'BlueOcean AI', position: 'Founder', status: 'Lead', avatar: 'https://i.pravatar.cc/40?u=marcus@blueocean.ai', lastContact: '2026-02-01' },
]
</script>

<template>
  <ErpCrudPage
    store-key="crm-contacts"
    title="Contacts"
    description="Manage all your business contacts, track interactions, and build stronger relationships."
    icon="i-lucide-contact"
    entity-name="Contact"
    :columns="columns"
    :form-fields="formFields"
    :initial-data="seedData"
  />
</template>
