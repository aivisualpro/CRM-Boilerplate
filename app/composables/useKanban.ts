import type { BoardState, Column, NewTask, Task } from '~/types/kanban'

const isClient = import.meta.client

const STORAGE_KEY = 'kanban.board.v2'
const TASK_KEY_ID = 'TASK'

function generateTaskId() {
  const key = 'kanban.task.counter'
  let counter = 1

  if (import.meta.client) {
    const saved = localStorage.getItem(key)
    counter = saved ? Number.parseInt(saved) + 1 : 1
    localStorage.setItem(key, counter.toString())
  }

  return `${TASK_KEY_ID}-${counter.toString().padStart(3, '0')}`
}

function generateColumnId(title: string) {
  return title.toLowerCase().replace(/\s+/g, '-')
}

const defaultBoard: BoardState = {
  columns: [
    {
      id: 'backlog',
      title: 'Backlog',
      tasks: [
        {
          id: 'TASK-001',
          title: 'Implement dark mode toggle animation',
          description: 'Add a smooth sun/moon transition animation when toggling between light and dark mode. Use CSS transitions with a 300ms ease-in-out curve.',
          priority: 'low',
          assignee: { id: 'u1', name: 'Sarah Chen', avatar: '/avatars/shadcn.png' },
          dueDate: new Date(Date.now() + 14 * 86400000).toISOString(),
          status: 'backlog',
          labels: ['UI/UX', 'Enhancement'],
          createdAt: new Date(Date.now() - 5 * 86400000).toISOString(),
        },
        {
          id: 'TASK-002',
          title: 'Add CSV export to reports module',
          description: 'Users need the ability to export filtered report data as CSV files. Include column headers and respect active filters.',
          priority: 'medium',
          assignee: { id: 'u2', name: 'Adeel Jabbar', avatar: '/avatars/adeel.png' },
          dueDate: new Date(Date.now() + 21 * 86400000).toISOString(),
          status: 'backlog',
          labels: ['Feature', 'Reports'],
          createdAt: new Date(Date.now() - 3 * 86400000).toISOString(),
        },
        {
          id: 'TASK-003',
          title: 'Research WebSocket integration for live updates',
          description: 'Evaluate Socket.io vs native WebSockets for real-time dashboard updates. Document performance benchmarks and bundle size impact.',
          priority: 'low',
          assignee: { id: 'u3', name: 'Marcus Webb', avatar: '/avatars/avatartion.png' },
          dueDate: new Date(Date.now() + 30 * 86400000).toISOString(),
          status: 'backlog',
          labels: ['Research', 'Infrastructure'],
          createdAt: new Date(Date.now() - 7 * 86400000).toISOString(),
        },
        {
          id: 'TASK-004',
          title: 'Design multi-tenant architecture',
          description: 'Create an architecture document for supporting multiple organizations within the same deployment. Consider data isolation, theming, and billing.',
          priority: 'high',
          assignee: { id: 'u1', name: 'Sarah Chen', avatar: '/avatars/shadcn.png' },
          dueDate: new Date(Date.now() + 45 * 86400000).toISOString(),
          status: 'backlog',
          labels: ['Architecture', 'Planning'],
          createdAt: new Date(Date.now() - 1 * 86400000).toISOString(),
        },
      ],
    },
    {
      id: 'todo',
      title: 'To Do',
      tasks: [
        {
          id: 'TASK-005',
          title: 'Fix pagination on inventory table',
          description: 'The inventory table shows incorrect page counts when filters are applied. The total count is not respecting the active category filter.',
          priority: 'high',
          assignee: { id: 'u2', name: 'Adeel Jabbar', avatar: '/avatars/adeel.png' },
          dueDate: new Date(Date.now() + 2 * 86400000).toISOString(),
          status: 'todo',
          labels: ['Bug', 'Inventory'],
          createdAt: new Date(Date.now() - 2 * 86400000).toISOString(),
        },
        {
          id: 'TASK-006',
          title: 'Create vendor onboarding form',
          description: 'Build a multi-step form for onboarding new vendors. Include fields for company info, banking details, tax documents, and compliance certifications.',
          priority: 'medium',
          assignee: { id: 'u4', name: 'Priya Sharma', avatar: '/avatars/avatartion.png' },
          dueDate: new Date(Date.now() + 5 * 86400000).toISOString(),
          status: 'todo',
          labels: ['Feature', 'Vendors'],
          createdAt: new Date(Date.now() - 4 * 86400000).toISOString(),
        },
        {
          id: 'TASK-007',
          title: 'Optimize dashboard KPI queries',
          description: 'The main dashboard takes 3.2s to load due to unoptimized MongoDB aggregation pipelines. Target < 500ms load time.',
          priority: 'high',
          assignee: { id: 'u3', name: 'Marcus Webb', avatar: '/avatars/avatartion.png' },
          dueDate: new Date(Date.now() + 3 * 86400000).toISOString(),
          status: 'todo',
          labels: ['Performance', 'Backend'],
          createdAt: new Date(Date.now() - 1 * 86400000).toISOString(),
        },
        {
          id: 'TASK-008',
          title: 'Add email notifications for order status changes',
          description: 'Send automated email notifications when sale order status changes (confirmed, shipped, delivered). Use the existing email template system.',
          priority: 'medium',
          assignee: { id: 'u1', name: 'Sarah Chen', avatar: '/avatars/shadcn.png' },
          dueDate: new Date(Date.now() + 7 * 86400000).toISOString(),
          status: 'todo',
          labels: ['Feature', 'Notifications'],
          createdAt: new Date(Date.now() - 6 * 86400000).toISOString(),
        },
      ],
    },
    {
      id: 'in-progress',
      title: 'In Progress',
      tasks: [
        {
          id: 'TASK-009',
          title: 'Build PDF invoice generation',
          description: 'Implement server-side PDF generation for sale order invoices using Google Docs templates. Include line items, totals, and company branding.',
          priority: 'high',
          assignee: { id: 'u2', name: 'Adeel Jabbar', avatar: '/avatars/adeel.png' },
          dueDate: new Date(Date.now() + 1 * 86400000).toISOString(),
          status: 'in-progress',
          labels: ['Feature', 'Sales'],
          createdAt: new Date(Date.now() - 8 * 86400000).toISOString(),
        },
        {
          id: 'TASK-010',
          title: 'Implement role-based access control',
          description: 'Add granular RBAC with roles: Admin, Manager, Staff, Viewer. Protect routes and API endpoints based on user role.',
          priority: 'high',
          assignee: { id: 'u3', name: 'Marcus Webb', avatar: '/avatars/avatartion.png' },
          dueDate: new Date(Date.now() + 4 * 86400000).toISOString(),
          status: 'in-progress',
          labels: ['Security', 'Backend'],
          createdAt: new Date(Date.now() - 10 * 86400000).toISOString(),
        },
        {
          id: 'TASK-011',
          title: 'Migrate image uploads to Cloudinary',
          description: 'Replace local file storage with Cloudinary CDN. Implement auto-optimization, responsive images, and lazy loading placeholders.',
          priority: 'medium',
          assignee: { id: 'u4', name: 'Priya Sharma', avatar: '/avatars/avatartion.png' },
          dueDate: new Date(Date.now() + 6 * 86400000).toISOString(),
          status: 'in-progress',
          labels: ['Infrastructure', 'Media'],
          createdAt: new Date(Date.now() - 5 * 86400000).toISOString(),
        },
      ],
    },
    {
      id: 'in-review',
      title: 'In Review',
      tasks: [
        {
          id: 'TASK-012',
          title: 'Redesign manufacturing detail page',
          description: 'Overhaul the manufacturing order detail view with better layout, inline editing, theme-adaptive colors, and a searchable SKU dropdown.',
          priority: 'medium',
          assignee: { id: 'u1', name: 'Sarah Chen', avatar: '/avatars/shadcn.png' },
          dueDate: new Date(Date.now() + 1 * 86400000).toISOString(),
          status: 'in-review',
          labels: ['UI/UX', 'Manufacturing'],
          createdAt: new Date(Date.now() - 12 * 86400000).toISOString(),
        },
        {
          id: 'TASK-013',
          title: 'Add bulk import for inventory items',
          description: 'Support CSV/Excel bulk import with validation, duplicate detection, and a preview step before committing. Handle up to 10,000 rows.',
          priority: 'high',
          assignee: { id: 'u2', name: 'Adeel Jabbar', avatar: '/avatars/adeel.png' },
          dueDate: new Date(Date.now() - 1 * 86400000).toISOString(),
          status: 'in-review',
          labels: ['Feature', 'Inventory'],
          createdAt: new Date(Date.now() - 15 * 86400000).toISOString(),
        },
        {
          id: 'TASK-014',
          title: 'Implement optimistic UI updates',
          description: 'Add instant UI feedback for all CRUD operations. Show toast notifications and revert on server errors for a seamless user experience.',
          priority: 'medium',
          assignee: { id: 'u3', name: 'Marcus Webb', avatar: '/avatars/avatartion.png' },
          dueDate: new Date(Date.now() + 2 * 86400000).toISOString(),
          status: 'in-review',
          labels: ['Performance', 'Frontend'],
          createdAt: new Date(Date.now() - 9 * 86400000).toISOString(),
        },
      ],
    },
    {
      id: 'done',
      title: 'Done',
      tasks: [
        {
          id: 'TASK-015',
          title: 'Set up Nuxt 4 project with Shadcn Vue',
          description: 'Initialize the boilerplate with Nuxt 4, Shadcn Vue, TailwindCSS 4, and configure the project structure with layouts, composables, and types.',
          priority: 'high',
          assignee: { id: 'u2', name: 'Adeel Jabbar', avatar: '/avatars/adeel.png' },
          dueDate: new Date(Date.now() - 20 * 86400000).toISOString(),
          status: 'done',
          labels: ['Infrastructure', 'Setup'],
          createdAt: new Date(Date.now() - 30 * 86400000).toISOString(),
        },
        {
          id: 'TASK-016',
          title: 'Build sidebar navigation with collapsible groups',
          description: 'Create a responsive sidebar with nested navigation groups, icons, active state indicators, and keyboard shortcut support.',
          priority: 'medium',
          assignee: { id: 'u1', name: 'Sarah Chen', avatar: '/avatars/shadcn.png' },
          dueDate: new Date(Date.now() - 15 * 86400000).toISOString(),
          status: 'done',
          labels: ['UI/UX', 'Navigation'],
          createdAt: new Date(Date.now() - 25 * 86400000).toISOString(),
        },
        {
          id: 'TASK-017',
          title: 'Implement dark/light theme with color presets',
          description: 'Add multi-theme support with smooth transitions. Include 8 color presets and persist user preference to localStorage.',
          priority: 'low',
          assignee: { id: 'u4', name: 'Priya Sharma', avatar: '/avatars/avatartion.png' },
          dueDate: new Date(Date.now() - 10 * 86400000).toISOString(),
          status: 'done',
          labels: ['UI/UX', 'Theming'],
          createdAt: new Date(Date.now() - 20 * 86400000).toISOString(),
        },
        {
          id: 'TASK-018',
          title: 'Create CRUD composable with localStorage',
          description: 'Build a reusable useCrud composable that provides full CRUD operations backed by localStorage for client-side data persistence.',
          priority: 'medium',
          assignee: { id: 'u2', name: 'Adeel Jabbar', avatar: '/avatars/adeel.png' },
          dueDate: new Date(Date.now() - 8 * 86400000).toISOString(),
          status: 'done',
          labels: ['Feature', 'Composable'],
          createdAt: new Date(Date.now() - 18 * 86400000).toISOString(),
        },
        {
          id: 'TASK-019',
          title: 'Deploy to Vercel with custom domain',
          description: 'Configure Vercel deployment with environment variables, custom domain DNS setup, and automatic preview deployments for PRs.',
          priority: 'high',
          assignee: { id: 'u3', name: 'Marcus Webb', avatar: '/avatars/avatartion.png' },
          dueDate: new Date(Date.now() - 5 * 86400000).toISOString(),
          status: 'done',
          labels: ['DevOps', 'Deployment'],
          createdAt: new Date(Date.now() - 14 * 86400000).toISOString(),
        },
      ],
    },
  ],
}

export function useKanban() {
  const board = useState<BoardState>('kanban-board', () => load())

  onMounted(() => {
    board.value = load()
  })

  function load(): BoardState {
    if (isClient) {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) {
        try { return JSON.parse(raw) as BoardState }
        catch { }
      }
    }
    return defaultBoard
  }

  function persist() {
    if (isClient) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(board.value))
    }
  }

  function addColumn(title: string) {
    const newCol: Column = { id: generateColumnId(title), title, tasks: [] }
    board.value.columns.push(newCol)
    persist()
  }

  function removeColumn(id: string) {
    board.value.columns = board.value.columns.filter(c => c.id !== id)
    persist()
  }

  function updateColumn(id: string, title: string) {
    const col = board.value.columns.find(c => c.id === id)
    if (!col)
      return
    col.title = title
    persist()
  }

  function addTask(columnId: string, payload: NewTask) {
    const col = board.value.columns.find(c => c.id === columnId)
    if (!col)
      return
    col.tasks.unshift({ id: generateTaskId(), createdAt: new Date(), ...payload })
    persist()
  }

  function updateTask(columnId: string, taskId: string, patch: Partial<Task>) {
    const col = board.value.columns.find(c => c.id === columnId)
    if (!col)
      return
    const t = col.tasks.find(t => t.id === taskId)
    if (!t)
      return
    Object.assign(t, patch)
    persist()
  }

  function removeTask(columnId: string, taskId: string) {
    const col = board.value.columns.find(c => c.id === columnId)
    if (!col)
      return
    col.tasks = col.tasks.filter(t => t.id !== taskId)
    persist()
  }

  function setColumns(next: Column[]) {
    board.value.columns = next
    persist()
  }

  return { board, addColumn, removeColumn, updateColumn, addTask, updateTask, removeTask, setColumns, persist }
}
