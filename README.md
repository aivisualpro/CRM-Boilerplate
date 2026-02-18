<![CDATA[<div align="center">

# 🚀 Full Stack CRM

**A modern, full-featured CRM boilerplate built with Nuxt 4, Vue 3, and shadcn-vue.**

[![Nuxt 4](https://img.shields.io/badge/Nuxt-4.2.0-00DC82?style=for-the-badge&logo=nuxt.js&logoColor=white)](https://nuxt.com)
[![Vue 3](https://img.shields.io/badge/Vue-3.5-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)](https://vuejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![shadcn/ui](https://img.shields.io/badge/shadcn--vue-2.3-000000?style=for-the-badge&logo=shadcnui&logoColor=white)](https://www.shadcn-vue.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](./LICENSE)

[Live Demo](#) · [Report Bug](#) · [Request Feature](#)

</div>

---

## 📋 Table of Contents

- [About](#-about)
- [Owner](#-owner)
- [Tech Stack](#-tech-stack)
- [Features](#-features)
- [UI Components](#-ui-components)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Configuration](#-configuration)
- [Available Scripts](#-available-scripts)
- [Pages & Routes](#-pages--routes)
- [Theming](#-theming)
- [Tags](#-tags)
- [Contributing](#-contributing)
- [License](#-license)

---

## 📖 About

**Full Stack CRM** is a production-ready CRM (Customer Relationship Management) boilerplate application designed to serve as a robust starting point for building enterprise-grade business applications. It combines the power of **Nuxt 4** with a comprehensive **shadcn-vue** component library, delivering a polished admin dashboard with authentication flows, task management, email client, Kanban board, and 50+ pre-built UI components — all with full dark mode support and customizable theming.

This boilerplate eliminates weeks of setup time by providing a fully structured, type-safe, and beautifully designed foundation that can be extended for any CRM, ERP, or internal business tool.

---

## 👤 Owner

| | |
|---|---|
| **Name** | Adeel Jabbar |
| **Website** | [aivisualpro.com](https://aivisualpro.com) |
| **Repository** | CRM-Boilerplate |

---

## 🛠 Tech Stack

### Core Framework
| Technology | Version | Purpose |
|---|---|---|
| [Nuxt](https://nuxt.com) | 4.2.0 | Full-stack Vue framework (SSR, SSG, file-based routing) |
| [Vue](https://vuejs.org) | 3.5 | Reactive UI framework (Composition API) |
| [TypeScript](https://www.typescriptlang.org) | 5.9 | Static type-checking for JavaScript |
| [Nitro](https://nitro.unjs.io) | 2.12.8 | Server engine |
| [Vite](https://vitejs.dev) | 7.1 | Build tool & dev server |

### Styling & UI
| Technology | Version | Purpose |
|---|---|---|
| [Tailwind CSS](https://tailwindcss.com) | 4.1 | Utility-first CSS framework |
| [shadcn-vue](https://www.shadcn-vue.com) | 2.3.1 | Accessible, customizable component library |
| [Reka UI](https://reka-ui.com) | 2.5 | Headless UI primitives (powers shadcn-vue) |
| [Lucide Icons](https://lucide.dev) | 0.482 | Beautiful open-source icon set |
| [Radix Icons](https://www.radix-ui.com/icons) | — | Additional icon set |
| [tw-animate-css](https://www.npmjs.com/package/tw-animate-css) | 1.4 | Tailwind CSS animation utilities |

### State & Data
| Technology | Purpose |
|---|---|
| [Pinia](https://pinia.vuejs.org) | Global state management |
| [VueUse](https://vueuse.org) | Collection of essential Vue composition utilities |
| [TanStack Vue Table](https://tanstack.com/table/latest) | Headless, type-safe table/data-grid |
| [Zod](https://zod.dev) | TypeScript-first schema validation |
| [VeeValidate](https://vee-validate.logaretm.com/v4/) | Form validation |

### Charts & Visualization
| Technology | Purpose |
|---|---|
| [Unovis](https://unovis.dev) | Data visualization library for Vue |
| [Number Flow](https://number-flow.barvian.me) | Animated number transitions |

### Utilities
| Technology | Purpose |
|---|---|
| [date-fns](https://date-fns.org) | Modern date utility library |
| [nanoid](https://www.npmjs.com/package/nanoid) | Tiny, secure URL-friendly unique string ID generator |
| [Embla Carousel](https://www.embla-carousel.com) | Lightweight carousel library |
| [vuedraggable](https://www.npmjs.com/package/vuedraggable) | Drag-and-drop component (Kanban) |
| [class-variance-authority](https://cva.style) | Component variant management |
| [clsx](https://www.npmjs.com/package/clsx) + [tailwind-merge](https://www.npmjs.com/package/tailwind-merge) | Conditional class utilities |
| [vaul-vue](https://www.npmjs.com/package/vaul-vue) | Drawer component for Vue |
| [vue-sonner](https://vue-sonner.vercel.app) | Toast notification system |

### Developer Experience
| Technology | Purpose |
|---|---|
| [ESLint](https://eslint.org) + [@antfu/eslint-config](https://www.npmjs.com/package/@antfu/eslint-config) | Linting & code formatting |
| [@nuxt/fonts](https://fonts.nuxt.com) | Automatic font optimization |
| [@nuxtjs/color-mode](https://color-mode.nuxtjs.org) | Dark/light mode switching |
| [release-it](https://www.npmjs.com/package/release-it) | Automated versioning & releases |
| [Renovate](https://renovatebot.com) | Automated dependency updates |

---

## ✨ Features

### 🏠 Dashboard
- Interactive analytics dashboard with KPI cards
- Area, bar, line, and donut chart visualizations
- Animated number counters
- Recent activity & transaction feeds

### 📧 Email Client
- Full email inbox interface with account switching
- Mail list with search and filtering
- Email detail view with reply support

### ✅ Task Management
- Advanced data table with sorting, filtering, and pagination
- Column visibility controls
- Row selection with bulk actions
- Faceted filters for status and priority

### 📋 Kanban Board
- Drag-and-drop columns and cards
- Real-time task reordering
- Visual status management

### 🔐 Authentication Pages
- **Login** — Standard and basic variants
- **Register** — New user sign-up
- **Forgot Password** — Password recovery flow
- **OTP Verification** — Three different OTP layout variants

### ⚙️ Settings
- Profile management
- Account settings
- Appearance customization
- Notification preferences
- Display configuration

### 🚨 Error Pages
- `401` — Unauthorized
- `403` — Forbidden
- `404` — Not Found
- `500` — Internal Server Error
- `503` — Service Unavailable

### 🎨 Theming & Customization
- 9 color themes (Default, Blue, Green, Orange, Purple, Red, Teal, Yellow, Rose)
- 3 theme types (Default, Mono, Scaled)
- Dark / Light mode toggle
- Configurable sidebar (collapsible, position, variant)
- App-wide settings panel

---

## 🧩 UI Components

The project includes **63 pre-built shadcn-vue components**, each fully accessible and customizable:

<details>
<summary><strong>View all 63 components</strong></summary>

| Component | Component | Component |
|---|---|---|
| Accordion | Alert | Alert Dialog |
| Aspect Ratio | Auto Form | Avatar |
| Badge | Breadcrumb | Button |
| Button Group | Calendar | Card |
| Carousel | Chart (Area, Bar, Donut, Line) | Checkbox |
| Collapsible | Combobox | Command |
| Context Menu | Dialog | Drawer |
| Dropdown Menu | Empty State | Field |
| Form | Hover Card | Input |
| Input Group | Item | Kbd |
| Label | Menubar | Navigation Menu |
| Number Field | Pagination | PIN Input |
| Popover | Progress | Radio Group |
| Range Calendar | Resizable | Scroll Area |
| Select | Separator | Sheet |
| Sidebar | Skeleton | Slider |
| Sonner (Toast) | Spinner | Stepper |
| Switch | Table | Tabs |
| Tags Input | Textarea | Toggle |
| Toggle Group | Tooltip | |

</details>

---

## 📁 Project Structure

```
CRM-Boilerplate/
├── app/
│   ├── assets/
│   │   └── css/                  # Global styles & Tailwind config
│   ├── components/
│   │   ├── ui/                   # 63 shadcn-vue base components
│   │   ├── auth/                 # Authentication components
│   │   ├── dashboard/            # Dashboard widgets & charts
│   │   ├── kanban/               # Kanban board components
│   │   ├── layout/               # Layout shell (sidebar, header, footer)
│   │   ├── mail/                 # Email client components
│   │   ├── settings/             # Settings form components
│   │   └── tasks/                # Task management components
│   ├── composables/
│   │   ├── defineShortcuts.ts    # Keyboard shortcut system
│   │   ├── useAppSettings.ts     # App-wide settings state
│   │   ├── useKanban.ts          # Kanban board logic
│   │   └── useShortcuts.ts       # Shortcut key bindings
│   ├── constants/
│   │   ├── menus.ts              # Navigation menu definitions
│   │   └── themes.ts             # Theme configuration
│   ├── layouts/
│   │   ├── default.vue           # Main app layout (sidebar + content)
│   │   └── blank.vue             # Blank layout (auth, error pages)
│   ├── lib/
│   │   └── utils.ts              # Utility functions (cn, etc.)
│   ├── pages/
│   │   ├── index.vue             # Dashboard home page
│   │   ├── email.vue             # Email client page
│   │   ├── tasks.vue             # Task management page
│   │   ├── kanban.vue            # Kanban board page
│   │   ├── (auth)/               # Authentication pages
│   │   ├── (error)/              # Error pages (401–503)
│   │   ├── settings/             # Settings pages
│   │   └── components/           # Component showcase pages
│   ├── plugins/
│   │   └── ssrWidth.ts           # SSR viewport width plugin
│   ├── types/
│   │   ├── appSettings.d.ts      # App settings type definitions
│   │   ├── kanban.ts             # Kanban type definitions
│   │   └── nav.d.ts              # Navigation type definitions
│   ├── app.vue                   # Root Vue component
│   ├── app.config.ts             # Runtime app configuration
│   └── error.vue                 # Global error boundary
├── public/                       # Static assets (favicon, images)
├── server/                       # Nitro server-side code
├── nuxt.config.ts                # Nuxt configuration
├── components.json               # shadcn-vue component config
├── tsconfig.json                 # TypeScript configuration
├── eslint.config.js              # ESLint configuration
└── package.json                  # Dependencies & scripts
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** — `v22.x` (recommended)
- **pnpm** — `v9+`

### Installation

```bash
# 1. Clone the repository
git clone <your-repository-url>

# 2. Navigate to the project
cd CRM-Boilerplate

# 3. Install dependencies
pnpm install

# 4. Start the development server
pnpm run dev
```

The app will be available at **http://localhost:3000**.

---

## ⚙️ Configuration

### App Settings (`app/app.config.ts`)

```ts
export default defineAppConfig({
  appSettings: {
    sidebar: {
      collapsible: 'offcanvas',  // 'offcanvas' | 'icon' | 'none'
      side: 'left',              // 'left' | 'right'
      variant: 'inset',          // 'sidebar' | 'floating' | 'inset'
    },
    theme: {
      color: 'default',          // 'default' | 'blue' | 'green' | 'orange' | 'purple' | 'red' | 'teal' | 'yellow' | 'rose'
      type: 'scaled',            // 'default' | 'mono' | 'scaled'
    },
  },
})
```

### Nuxt Modules

The following Nuxt modules are configured out of the box:

| Module | Purpose |
|---|---|
| `shadcn-nuxt` | shadcn-vue component integration |
| `@vueuse/nuxt` | VueUse composables auto-import |
| `@nuxt/eslint` | ESLint integration |
| `@nuxt/icon` | Icon component with Iconify |
| `@pinia/nuxt` | Pinia state management |
| `@nuxtjs/color-mode` | Dark/light mode |
| `@nuxt/fonts` | Font optimization |

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `pnpm run dev` | Start the development server |
| `pnpm run build` | Build for production |
| `pnpm run generate` | Generate static site |
| `pnpm run preview` | Preview production build |
| `pnpm run lint` | Lint the codebase |
| `pnpm run format` | Auto-fix lint issues |
| `pnpm run typecheck` | Run TypeScript type checking |
| `pnpm run release` | Create a new release |

---

## 🗺 Pages & Routes

| Route | Page | Layout |
|---|---|---|
| `/` | Dashboard | Default |
| `/email` | Email Client | Default |
| `/tasks` | Task Management | Default |
| `/kanban` | Kanban Board | Default |
| `/settings/profile` | Profile Settings | Default |
| `/settings/account` | Account Settings | Default |
| `/settings/appearance` | Appearance Settings | Default |
| `/settings/notifications` | Notification Settings | Default |
| `/settings/display` | Display Settings | Default |
| `/login` | Login | Blank |
| `/login-basic` | Login (Basic) | Blank |
| `/register` | Register | Blank |
| `/forgot-password` | Forgot Password | Blank |
| `/otp` | OTP Verification | Blank |
| `/otp-1` | OTP Variant 1 | Blank |
| `/otp-2` | OTP Variant 2 | Blank |
| `/401` | Unauthorized | Blank |
| `/403` | Forbidden | Blank |
| `/404` | Not Found | Blank |
| `/500` | Server Error | Blank |
| `/503` | Service Unavailable | Blank |
| `/components/*` | Component Showcase | Default |

---

## 🎨 Theming

The app supports real-time theme switching via the built-in **App Settings** panel:

### Color Palettes
`default` · `blue` · `green` · `orange` · `purple` · `red` · `teal` · `yellow` · `rose`

### Theme Types
- **Default** — Standard theme with balanced contrast
- **Mono** — Monochromatic design
- **Scaled** — Scaled color variations for depth

### Color Mode
Full **dark mode** and **light mode** support with system preference detection, powered by `@nuxtjs/color-mode`.

---

## 🏷 Tags

`crm` · `boilerplate` · `dashboard` · `admin-panel` · `nuxt4` · `vue3` · `typescript` · `shadcn-vue` · `tailwindcss` · `pinia` · `dark-mode` · `kanban` · `email-client` · `task-management` · `authentication` · `enterprise` · `full-stack` · `responsive` · `accessible` · `open-source`

---

## 🏭 Industry

This boilerplate is designed to be **industry-agnostic** and can be adapted for:

- 🏢 **Enterprise CRM** — Sales, leads, and customer management
- 📦 **Inventory & ERP** — Stock tracking and operations management
- 🏗️ **Construction & Field Services** — Job tickets, scheduling, and crew management
- 🏥 **Healthcare** — Patient records and appointment management
- 📚 **Education** — Student and course management
- 💼 **Professional Services** — Client and project management
- 🛒 **E-commerce** — Order and product management

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for details.

---

<div align="center">

**Built with ❤️ by [Adeel Jabbar](https://aivisualpro.com)**

</div>
]]>
