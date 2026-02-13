<script setup lang="ts">
import NumberFlow from '@number-flow/vue'
import { TrendingUp } from 'lucide-vue-next'

const { setHeader } = usePageHeader()
setHeader({ title: 'HR Reports', description: 'Workforce analytics, talent insights, and people metrics', icon: 'i-lucide-file-bar-chart' })

const activeTab = ref('headcount')

// ── KPIs ───────────────────────────────────────────
const kpis = ref([
  { label: 'Total Headcount', value: 0, target: 247, prefix: '', suffix: '', change: 12.8, icon: 'i-lucide-users', color: 'text-blue-500', bg: 'bg-blue-500/10' },
  { label: 'New Hires YTD', value: 0, target: 45, prefix: '', suffix: '', change: 28.6, icon: 'i-lucide-user-plus', color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
  { label: 'Turnover Rate', value: 0, target: 8.2, prefix: '', suffix: '%', change: -2.4, icon: 'i-lucide-user-minus', color: 'text-amber-500', bg: 'bg-amber-500/10' },
  { label: 'Avg. Tenure', value: 0, target: 3.4, prefix: '', suffix: ' yrs', change: 5.0, icon: 'i-lucide-timer', color: 'text-violet-500', bg: 'bg-violet-500/10' },
  { label: 'Open Positions', value: 0, target: 14, prefix: '', suffix: '', change: -12.5, icon: 'i-lucide-briefcase', color: 'text-pink-500', bg: 'bg-pink-500/10' },
  { label: 'eNPS Score', value: 0, target: 72, prefix: '', suffix: '', change: 8.0, icon: 'i-lucide-heart', color: 'text-cyan-500', bg: 'bg-cyan-500/10' },
])

onMounted(() => { kpis.value = kpis.value.map(k => ({ ...k, value: k.target })) })

// ── Headcount Trend ────────────────────────────────
const headcountTrend = [
  { month: 'Jan', headcount: 219, hires: 5, exits: 2 },
  { month: 'Feb', headcount: 222, hires: 6, exits: 3 },
  { month: 'Mar', headcount: 226, hires: 7, exits: 3 },
  { month: 'Apr', headcount: 228, hires: 4, exits: 2 },
  { month: 'May', headcount: 231, hires: 5, exits: 2 },
  { month: 'Jun', headcount: 234, hires: 6, exits: 3 },
  { month: 'Jul', headcount: 236, hires: 4, exits: 2 },
  { month: 'Aug', headcount: 238, hires: 5, exits: 3 },
  { month: 'Sep', headcount: 241, hires: 6, exits: 3 },
  { month: 'Oct', headcount: 243, hires: 4, exits: 2 },
  { month: 'Nov', headcount: 245, hires: 5, exits: 3 },
  { month: 'Dec', headcount: 247, hires: 4, exits: 2 },
]

// ── Department Breakdown ───────────────────────────
const departmentData = [
  { name: 'Engineering', value: 78 },
  { name: 'Sales', value: 42 },
  { name: 'Marketing', value: 28 },
  { name: 'Customer Success', value: 24 },
  { name: 'Operations', value: 22 },
  { name: 'Finance', value: 18 },
  { name: 'HR', value: 15 },
  { name: 'Product', value: 12 },
  { name: 'Legal', value: 8 },
]

// ── Department Table ───────────────────────────────
const deptDetails = [
  { dept: 'Engineering', count: 78, turnover: 6.2, avgSalary: 142000, avgTenure: 3.8, satisfaction: 82, openRoles: 5, growth: 18 },
  { dept: 'Sales', count: 42, turnover: 12.5, avgSalary: 95000, avgTenure: 2.4, satisfaction: 74, openRoles: 3, growth: 12 },
  { dept: 'Marketing', count: 28, turnover: 8.1, avgSalary: 88000, avgTenure: 2.9, satisfaction: 79, openRoles: 2, growth: 8 },
  { dept: 'Customer Success', count: 24, turnover: 7.5, avgSalary: 72000, avgTenure: 2.1, satisfaction: 77, openRoles: 2, growth: 10 },
  { dept: 'Operations', count: 22, turnover: 5.8, avgSalary: 68000, avgTenure: 4.2, satisfaction: 81, openRoles: 1, growth: 5 },
  { dept: 'Finance', count: 18, turnover: 4.2, avgSalary: 105000, avgTenure: 4.8, satisfaction: 85, openRoles: 0, growth: 3 },
  { dept: 'HR', count: 15, turnover: 3.8, avgSalary: 82000, avgTenure: 3.5, satisfaction: 86, openRoles: 1, growth: 4 },
  { dept: 'Product', count: 12, turnover: 5.0, avgSalary: 128000, avgTenure: 3.2, satisfaction: 84, openRoles: 0, growth: 6 },
  { dept: 'Legal', count: 8, turnover: 2.5, avgSalary: 135000, avgTenure: 5.1, satisfaction: 88, openRoles: 0, growth: 0 },
]

// ── Turnover Trend ─────────────────────────────────
const turnoverTrend = [
  { month: 'Jan', voluntary: 1.2, involuntary: 0.4 },
  { month: 'Feb', voluntary: 1.4, involuntary: 0.3 },
  { month: 'Mar', voluntary: 1.1, involuntary: 0.5 },
  { month: 'Apr', voluntary: 0.9, involuntary: 0.3 },
  { month: 'May', voluntary: 0.8, involuntary: 0.2 },
  { month: 'Jun', voluntary: 1.3, involuntary: 0.4 },
  { month: 'Jul', voluntary: 1.0, involuntary: 0.3 },
  { month: 'Aug', voluntary: 1.2, involuntary: 0.4 },
  { month: 'Sep', voluntary: 0.9, involuntary: 0.3 },
  { month: 'Oct', voluntary: 0.8, involuntary: 0.2 },
  { month: 'Nov', voluntary: 1.1, involuntary: 0.3 },
  { month: 'Dec', voluntary: 0.7, involuntary: 0.2 },
]

// ── Exit Reasons ───────────────────────────────────
const exitReasons = [
  { name: 'Better Compensation', value: 32 },
  { name: 'Career Growth', value: 28 },
  { name: 'Work-Life Balance', value: 18 },
  { name: 'Management Issues', value: 12 },
  { name: 'Relocation', value: 10 },
]

// ── Compensation Band ──────────────────────────────
const compBands = [
  { band: 'Under $60K', count: 18, pct: 7.3, color: '#64748b' },
  { band: '$60K–$80K', count: 42, pct: 17.0, color: '#06b6d4' },
  { band: '$80K–$100K', count: 58, pct: 23.5, color: '#3b82f6' },
  { band: '$100K–$120K', count: 52, pct: 21.1, color: '#8b5cf6' },
  { band: '$120K–$150K', count: 45, pct: 18.2, color: '#ec4899' },
  { band: '$150K+', count: 32, pct: 13.0, color: '#f59e0b' },
]

// ── Gender Diversity ───────────────────────────────
const genderData = [
  { name: 'Male', value: 138 },
  { name: 'Female', value: 98 },
  { name: 'Non-binary', value: 11 },
]

// ── Tenure Distribution ────────────────────────────
const tenureData = [
  { range: '< 1 year', count: 45, pct: 18.2 },
  { range: '1–2 years', count: 62, pct: 25.1 },
  { range: '2–3 years', count: 48, pct: 19.4 },
  { range: '3–5 years', count: 52, pct: 21.1 },
  { range: '5+ years', count: 40, pct: 16.2 },
]

// ── Training Data ──────────────────────────────────
const trainingMetrics = [
  { program: 'Leadership Development', enrolled: 45, completed: 38, satisfaction: 92, hoursPerPerson: 24 },
  { program: 'Technical Skills (Cloud)', enrolled: 78, completed: 65, satisfaction: 88, hoursPerPerson: 32 },
  { program: 'Sales Methodology', enrolled: 35, completed: 32, satisfaction: 85, hoursPerPerson: 16 },
  { program: 'Compliance & Ethics', enrolled: 247, completed: 241, satisfaction: 78, hoursPerPerson: 8 },
  { program: 'DEI Awareness', enrolled: 247, completed: 228, satisfaction: 82, hoursPerPerson: 6 },
  { program: 'Project Management', enrolled: 52, completed: 44, satisfaction: 90, hoursPerPerson: 20 },
]

// ── Attendance Trend ───────────────────────────────
const attendanceData = [
  { month: 'Jan', attendance: 96.2, sickLeave: 2.1, vacation: 1.7 },
  { month: 'Feb', attendance: 95.8, sickLeave: 2.4, vacation: 1.8 },
  { month: 'Mar', attendance: 96.5, sickLeave: 1.8, vacation: 1.7 },
  { month: 'Apr', attendance: 97.1, sickLeave: 1.4, vacation: 1.5 },
  { month: 'May', attendance: 96.8, sickLeave: 1.6, vacation: 1.6 },
  { month: 'Jun', attendance: 95.2, sickLeave: 1.2, vacation: 3.6 },
  { month: 'Jul', attendance: 94.5, sickLeave: 1.0, vacation: 4.5 },
  { month: 'Aug', attendance: 94.8, sickLeave: 1.2, vacation: 4.0 },
  { month: 'Sep', attendance: 96.4, sickLeave: 1.8, vacation: 1.8 },
  { month: 'Oct', attendance: 96.9, sickLeave: 1.5, vacation: 1.6 },
  { month: 'Nov', attendance: 95.5, sickLeave: 2.2, vacation: 2.3 },
  { month: 'Dec', attendance: 93.8, sickLeave: 1.8, vacation: 4.4 },
]

// ── Helpers ────────────────────────────────────────
function fmtSalary(n: number) {
  return `$${(n / 1000).toFixed(0)}K`
}

const avatarColors = [
  'bg-violet-500/15 text-violet-600 dark:text-violet-400',
  'bg-pink-500/15 text-pink-600 dark:text-pink-400',
  'bg-blue-500/15 text-blue-600 dark:text-blue-400',
  'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400',
  'bg-amber-500/15 text-amber-600 dark:text-amber-400',
  'bg-cyan-500/15 text-cyan-600 dark:text-cyan-400',
  'bg-rose-500/15 text-rose-600 dark:text-rose-400',
  'bg-indigo-500/15 text-indigo-600 dark:text-indigo-400',
  'bg-teal-500/15 text-teal-600 dark:text-teal-400',
]
</script>

<template>
  <div class="w-full flex flex-col gap-5">
    <!-- Tab Navigation -->
    <div class="flex flex-wrap items-center gap-1 border rounded-lg p-1 bg-muted/30 w-fit">
      <button
        v-for="tab in [
          { id: 'headcount', label: 'Headcount', icon: 'i-lucide-users' },
          { id: 'turnover', label: 'Turnover', icon: 'i-lucide-user-minus' },
          { id: 'compensation', label: 'Compensation', icon: 'i-lucide-coins' },
          { id: 'attendance', label: 'Attendance', icon: 'i-lucide-calendar-check' },
          { id: 'training', label: 'Training', icon: 'i-lucide-graduation-cap' },
          { id: 'diversity', label: 'Diversity', icon: 'i-lucide-heart-handshake' },
        ]"
        :key="tab.id"
        class="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all" :class="[
          activeTab === tab.id ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground',
        ]"
        @click="activeTab = tab.id"
      >
        <Icon :name="tab.icon" class="size-3.5" />
        {{ tab.label }}
      </button>
    </div>

    <!-- KPI Cards -->
    <div class="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
      <Card v-for="(kpi, i) in kpis" :key="i">
        <CardContent class="p-4 space-y-2">
          <div class="flex items-center justify-between">
            <div class="flex items-center justify-center rounded-lg p-1.5" :class="kpi.bg">
              <Icon :name="kpi.icon" class="size-3.5" :class="kpi.color" />
            </div>
            <Badge
              variant="outline"
              :class="
                (kpi.label === 'Turnover Rate' || kpi.label === 'Open Positions')
                  ? (kpi.change < 0 ? 'text-emerald-600 border-emerald-200 bg-emerald-50 dark:text-emerald-400 dark:bg-emerald-500/10 dark:border-emerald-800' : 'text-rose-600 border-rose-200 bg-rose-50 dark:text-rose-400 dark:bg-rose-500/10 dark:border-rose-800')
                  : (kpi.change > 0 ? 'text-emerald-600 border-emerald-200 bg-emerald-50 dark:text-emerald-400 dark:bg-emerald-500/10 dark:border-emerald-800' : 'text-rose-600 border-rose-200 bg-rose-50 dark:text-rose-400 dark:bg-rose-500/10 dark:border-rose-800')
              "
              class="text-[10px] px-1.5 py-0"
            >
              {{ kpi.change > 0 ? '+' : '' }}{{ kpi.change }}%
            </Badge>
          </div>
          <div>
            <p class="text-xl font-bold tabular-nums leading-tight">
              {{ kpi.prefix }}<NumberFlow :value="kpi.value" :format="{ maximumFractionDigits: 1 }" />{{ kpi.suffix }}
            </p>
            <p class="text-[10px] text-muted-foreground mt-0.5">
              {{ kpi.label }}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>

    <!-- HEADCOUNT TAB -->
    <template v-if="activeTab === 'headcount'">
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Card class="lg:col-span-2">
          <CardHeader class="pb-2">
            <div class="flex items-center justify-between">
              <div>
                <CardTitle class="text-sm font-semibold">
                  Headcount Trend
                </CardTitle>
                <CardDescription>Monthly headcount with hires and exits</CardDescription>
              </div>
              <Badge variant="outline" class="text-emerald-600 bg-emerald-50 dark:text-emerald-400 dark:bg-emerald-500/10">
                <TrendingUp class="size-3 mr-1" /> +28 net
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <AreaChart
              :data="headcountTrend"
              index="month"
              :categories="['headcount', 'hires', 'exits']"
              :colors="['#3b82f6', '#10b981', '#ef4444']"
              class="h-[280px]"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader class="pb-2">
            <CardTitle class="text-sm font-semibold">
              Department Distribution
            </CardTitle>
            <CardDescription>Headcount by department</CardDescription>
          </CardHeader>
          <CardContent class="flex flex-col items-center">
            <DonutChart
              :data="departmentData"
              index="name"
              category="value"
              :colors="['#3b82f6', '#10b981', '#f59e0b', '#ec4899', '#8b5cf6', '#06b6d4', '#f97316', '#64748b', '#14b8a6']"
              :value-formatter="(v: number) => `${v} people`"
              class="h-[180px]"
            />
            <div class="w-full mt-4 space-y-1.5 max-h-[180px] overflow-y-auto pr-1">
              <div v-for="(d, i) in departmentData" :key="d.name" class="flex items-center justify-between text-xs">
                <div class="flex items-center gap-2">
                  <div class="size-2.5 rounded-full" :style="{ background: ['#3b82f6', '#10b981', '#f59e0b', '#ec4899', '#8b5cf6', '#06b6d4', '#f97316', '#64748b', '#14b8a6'][i] }" />
                  <span class="text-muted-foreground">{{ d.name }}</span>
                </div>
                <span class="font-semibold tabular-nums">{{ d.value }}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <!-- Department Detail Table -->
      <Card>
        <CardHeader class="pb-2">
          <CardTitle class="text-sm font-semibold">
            Department Overview
          </CardTitle>
          <CardDescription>Detailed metrics by department</CardDescription>
        </CardHeader>
        <CardContent class="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Department</TableHead>
                <TableHead class="text-center">
                  Count
                </TableHead>
                <TableHead class="text-center">
                  Turnover
                </TableHead>
                <TableHead class="text-right">
                  Avg. Salary
                </TableHead>
                <TableHead class="text-center">
                  Avg. Tenure
                </TableHead>
                <TableHead>Satisfaction</TableHead>
                <TableHead class="text-center">
                  Open Roles
                </TableHead>
                <TableHead class="text-center">
                  Growth
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow v-for="(d, i) in deptDetails" :key="d.dept">
                <TableCell>
                  <div class="flex items-center gap-2">
                    <div class="flex items-center justify-center rounded-full size-6 text-[9px] font-bold" :class="avatarColors[i % avatarColors.length]">
                      {{ d.dept.slice(0, 2) }}
                    </div>
                    <span class="text-sm font-medium">{{ d.dept }}</span>
                  </div>
                </TableCell>
                <TableCell class="text-center tabular-nums text-sm font-semibold">
                  {{ d.count }}
                </TableCell>
                <TableCell class="text-center">
                  <Badge
                    variant="outline"
                    :class="d.turnover <= 5 ? 'text-emerald-600 bg-emerald-50 dark:text-emerald-400 dark:bg-emerald-500/10' : d.turnover <= 10 ? 'text-amber-600 bg-amber-50 dark:text-amber-400 dark:bg-amber-500/10' : 'text-rose-600 bg-rose-50 dark:text-rose-400 dark:bg-rose-500/10'"
                    class="text-[10px]"
                  >
                    {{ d.turnover }}%
                  </Badge>
                </TableCell>
                <TableCell class="text-right tabular-nums text-sm">
                  {{ fmtSalary(d.avgSalary) }}
                </TableCell>
                <TableCell class="text-center tabular-nums text-sm text-muted-foreground">
                  {{ d.avgTenure }} yrs
                </TableCell>
                <TableCell>
                  <div class="flex items-center gap-2">
                    <div class="flex-1 h-1.5 rounded-full bg-muted overflow-hidden">
                      <div class="h-full rounded-full" :class="d.satisfaction >= 85 ? 'bg-emerald-500' : d.satisfaction >= 75 ? 'bg-amber-500' : 'bg-rose-500'" :style="{ width: `${d.satisfaction}%` }" />
                    </div>
                    <span class="text-[10px] tabular-nums w-7 text-right">{{ d.satisfaction }}%</span>
                  </div>
                </TableCell>
                <TableCell class="text-center tabular-nums text-sm">
                  <Badge v-if="d.openRoles > 0" variant="secondary" class="text-[10px]">
                    {{ d.openRoles }}
                  </Badge>
                  <span v-else class="text-muted-foreground text-xs">—</span>
                </TableCell>
                <TableCell class="text-center">
                  <span v-if="d.growth > 0" class="text-xs text-emerald-600 dark:text-emerald-400 font-medium">+{{ d.growth }}%</span>
                  <span v-else class="text-xs text-muted-foreground">—</span>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </template>

    <!-- TURNOVER TAB -->
    <template v-if="activeTab === 'turnover'">
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Card class="lg:col-span-2">
          <CardHeader class="pb-2">
            <CardTitle class="text-sm font-semibold">
              Turnover Trend
            </CardTitle>
            <CardDescription>Monthly voluntary vs involuntary turnover rate (%)</CardDescription>
          </CardHeader>
          <CardContent>
            <BarChart
              :data="turnoverTrend"
              index="month"
              :categories="['voluntary', 'involuntary']"
              :colors="['#f59e0b', '#ef4444']"
              type="stacked"
              :rounded-corners="4"
              :y-formatter="(v: number | Date) => `${Number(v)}%`"
              class="h-[280px]"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader class="pb-2">
            <CardTitle class="text-sm font-semibold">
              Exit Reasons
            </CardTitle>
            <CardDescription>Top reasons for voluntary exits</CardDescription>
          </CardHeader>
          <CardContent class="flex flex-col items-center">
            <DonutChart
              :data="exitReasons"
              index="name"
              category="value"
              :colors="['#ef4444', '#f59e0b', '#3b82f6', '#8b5cf6', '#64748b']"
              :value-formatter="(v: number) => `${v}%`"
              class="h-[180px]"
            />
            <div class="w-full mt-4 space-y-2">
              <div v-for="(r, i) in exitReasons" :key="r.name" class="flex items-center justify-between text-xs">
                <div class="flex items-center gap-2">
                  <div class="size-2.5 rounded-full" :style="{ background: ['#ef4444', '#f59e0b', '#3b82f6', '#8b5cf6', '#64748b'][i] }" />
                  <span class="text-muted-foreground">{{ r.name }}</span>
                </div>
                <span class="font-semibold tabular-nums">{{ r.value }}%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <!-- Retention Insights -->
      <Card>
        <CardHeader class="pb-2">
          <CardTitle class="text-sm font-semibold">
            Retention Insights
          </CardTitle>
          <CardDescription>Key retention health indicators</CardDescription>
        </CardHeader>
        <CardContent>
          <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div
              v-for="insight in [
                { label: '90-Day Retention', value: '94.2%', desc: 'New hire success rate', good: true },
                { label: '1-Year Retention', value: '88.5%', desc: 'First-year survival', good: true },
                { label: 'Regrettable Loss', value: '3.1%', desc: 'High-performer exits', good: false },
                { label: 'Cost per Exit', value: '$18.5K', desc: 'Replacement cost avg.', good: false },
              ]" :key="insight.label" class="p-3 rounded-lg border space-y-1"
            >
              <p class="text-2xl font-bold tabular-nums" :class="insight.good ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'">
                {{ insight.value }}
              </p>
              <p class="text-xs font-medium">
                {{ insight.label }}
              </p>
              <p class="text-[10px] text-muted-foreground">
                {{ insight.desc }}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </template>

    <!-- COMPENSATION TAB -->
    <template v-if="activeTab === 'compensation'">
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <!-- Salary Bands -->
        <Card>
          <CardHeader class="pb-2">
            <CardTitle class="text-sm font-semibold">
              Compensation Distribution
            </CardTitle>
            <CardDescription>Employee count by salary band</CardDescription>
          </CardHeader>
          <CardContent>
            <div class="space-y-3">
              <div v-for="band in compBands" :key="band.band" class="space-y-1.5">
                <div class="flex items-center justify-between text-sm">
                  <span class="font-medium">{{ band.band }}</span>
                  <span class="text-muted-foreground tabular-nums">{{ band.count }} <span class="text-[10px]">({{ band.pct }}%)</span></span>
                </div>
                <div class="h-5 rounded-md overflow-hidden bg-muted/50 relative">
                  <div
                    class="h-full rounded-md transition-all duration-700 flex items-center px-2"
                    :style="{ width: `${band.pct * 3.5}%`, background: band.color }"
                  >
                    <span class="text-white text-[9px] font-semibold">{{ band.count }}</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <!-- Pay Equity -->
        <Card>
          <CardHeader class="pb-2">
            <CardTitle class="text-sm font-semibold">
              Compensation Metrics
            </CardTitle>
            <CardDescription>Key pay analytics</CardDescription>
          </CardHeader>
          <CardContent class="space-y-4">
            <div
              v-for="metric in [
                { label: 'Average Salary', value: '$104,200', icon: 'i-lucide-dollar-sign', desc: 'All employees' },
                { label: 'Median Salary', value: '$95,000', icon: 'i-lucide-minus', desc: 'Middle value' },
                { label: 'Compensation Ratio', value: '0.98', icon: 'i-lucide-scale', desc: 'Actual vs market (target: 1.0)' },
                { label: 'Compa-Ratio Range', value: '0.85–1.15', icon: 'i-lucide-move-horizontal', desc: 'Min-max across organization' },
                { label: 'Total Payroll (Annual)', value: '$25.7M', icon: 'i-lucide-wallet', desc: 'Base salary only' },
                { label: 'Benefits Cost', value: '$6.4M', icon: 'i-lucide-heart-pulse', desc: '24.9% of payroll' },
                { label: 'Gender Pay Gap', value: '2.1%', icon: 'i-lucide-users', desc: 'Male vs Female delta' },
                { label: 'Recent Adjustments', value: '32', icon: 'i-lucide-trending-up', desc: 'Salary reviews in Q1' },
              ]" :key="metric.label" class="flex items-center gap-3"
            >
              <div class="flex items-center justify-center rounded-lg p-2 bg-muted/50 shrink-0">
                <Icon :name="metric.icon" class="size-3.5 text-muted-foreground" />
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-xs text-muted-foreground truncate">
                  {{ metric.label }}
                </p>
                <p class="text-sm font-bold tabular-nums">
                  {{ metric.value }}
                </p>
              </div>
              <span class="text-[10px] text-muted-foreground hidden sm:block">{{ metric.desc }}</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </template>

    <!-- ATTENDANCE TAB -->
    <template v-if="activeTab === 'attendance'">
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Card class="lg:col-span-2">
          <CardHeader class="pb-2">
            <CardTitle class="text-sm font-semibold">
              Attendance Rate
            </CardTitle>
            <CardDescription>Monthly attendance, sick leave, and vacation rates (%)</CardDescription>
          </CardHeader>
          <CardContent>
            <LineChart
              :data="attendanceData"
              index="month"
              :categories="['attendance', 'sickLeave', 'vacation']"
              :colors="['#10b981', '#ef4444', '#3b82f6']"
              :y-formatter="(v: number | Date) => `${Number(v)}%`"
              class="h-[300px]"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader class="pb-2">
            <CardTitle class="text-sm font-semibold">
              Attendance Summary
            </CardTitle>
            <CardDescription>FY 2026 averages</CardDescription>
          </CardHeader>
          <CardContent class="space-y-4">
            <div
              v-for="item in [
                { label: 'Avg. Attendance Rate', value: '95.8%', color: 'text-emerald-600 dark:text-emerald-400' },
                { label: 'Avg. Sick Leave Rate', value: '1.7%', color: 'text-rose-600 dark:text-rose-400' },
                { label: 'Avg. Vacation Rate', value: '2.5%', color: 'text-blue-600 dark:text-blue-400' },
                { label: 'Work From Home Days', value: '2.4 days/wk', color: 'text-violet-600 dark:text-violet-400' },
                { label: 'Overtime Hours (Monthly)', value: '12.5 hrs', color: 'text-amber-600 dark:text-amber-400' },
              ]" :key="item.label" class="flex items-center justify-between p-3 rounded-lg border"
            >
              <span class="text-sm font-medium">{{ item.label }}</span>
              <span class="text-sm font-bold tabular-nums" :class="item.color">{{ item.value }}</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </template>

    <!-- TRAINING TAB -->
    <template v-if="activeTab === 'training'">
      <Card>
        <CardHeader class="pb-2">
          <div class="flex items-center justify-between">
            <div>
              <CardTitle class="text-sm font-semibold">
                Training Programs
              </CardTitle>
              <CardDescription>Program enrollment, completion, and effectiveness</CardDescription>
            </div>
            <Badge variant="secondary" class="text-xs">
              6 active programs
            </Badge>
          </div>
        </CardHeader>
        <CardContent class="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Program</TableHead>
                <TableHead class="text-center">
                  Enrolled
                </TableHead>
                <TableHead>Completion</TableHead>
                <TableHead>Satisfaction</TableHead>
                <TableHead class="text-center">
                  Hours/Person
                </TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow v-for="t in trainingMetrics" :key="t.program">
                <TableCell class="font-medium text-sm">
                  {{ t.program }}
                </TableCell>
                <TableCell class="text-center tabular-nums text-sm">
                  {{ t.enrolled }}
                </TableCell>
                <TableCell>
                  <div class="flex items-center gap-2">
                    <div class="flex-1 h-2 rounded-full bg-muted overflow-hidden">
                      <div class="h-full rounded-full bg-emerald-500" :style="{ width: `${(t.completed / t.enrolled) * 100}%` }" />
                    </div>
                    <span class="text-xs tabular-nums w-16 text-right">{{ t.completed }}/{{ t.enrolled }}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div class="flex items-center gap-2">
                    <div class="flex-1 h-2 rounded-full bg-muted overflow-hidden">
                      <div class="h-full rounded-full" :class="t.satisfaction >= 90 ? 'bg-emerald-500' : t.satisfaction >= 80 ? 'bg-blue-500' : 'bg-amber-500'" :style="{ width: `${t.satisfaction}%` }" />
                    </div>
                    <span class="text-xs tabular-nums w-7 text-right">{{ t.satisfaction }}%</span>
                  </div>
                </TableCell>
                <TableCell class="text-center tabular-nums text-sm">
                  {{ t.hoursPerPerson }}h
                </TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    :class="(t.completed / t.enrolled) >= 0.9 ? 'text-emerald-600 bg-emerald-50 dark:text-emerald-400 dark:bg-emerald-500/10' : 'text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-500/10'"
                  >
                    {{ (t.completed / t.enrolled) >= 0.9 ? 'On Track' : 'In Progress' }}
                  </Badge>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <!-- Training KPIs -->
      <div class="grid grid-cols-2 gap-3 md:grid-cols-4">
        <Card
          v-for="stat in [
            { label: 'Total Training Hours', value: '12,480', desc: 'Hours invested YTD', icon: 'i-lucide-clock' },
            { label: 'Avg. Hours/Employee', value: '50.5', desc: 'Annual target: 48h', icon: 'i-lucide-user' },
            { label: 'Completion Rate', value: '89.2%', desc: '↑ 4.1% vs last year', icon: 'i-lucide-check-circle' },
            { label: 'Training ROI', value: '340%', desc: 'Performance uplift', icon: 'i-lucide-trending-up' },
          ]" :key="stat.label"
        >
          <CardContent class="p-4 space-y-1">
            <div class="flex items-center gap-2">
              <Icon :name="stat.icon" class="size-4 text-muted-foreground" />
              <span class="text-[10px] text-muted-foreground uppercase tracking-wider">{{ stat.label }}</span>
            </div>
            <p class="text-2xl font-bold tabular-nums">
              {{ stat.value }}
            </p>
            <p class="text-[10px] text-muted-foreground">
              {{ stat.desc }}
            </p>
          </CardContent>
        </Card>
      </div>
    </template>

    <!-- DIVERSITY TAB -->
    <template v-if="activeTab === 'diversity'">
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Card>
          <CardHeader class="pb-2">
            <CardTitle class="text-sm font-semibold">
              Gender Distribution
            </CardTitle>
            <CardDescription>Workforce gender breakdown</CardDescription>
          </CardHeader>
          <CardContent class="flex flex-col items-center">
            <DonutChart
              :data="genderData"
              index="name"
              category="value"
              :colors="['#3b82f6', '#ec4899', '#8b5cf6']"
              :value-formatter="(v: number) => `${v} (${((v / 247) * 100).toFixed(1)}%)`"
              class="h-[180px]"
            />
            <div class="w-full mt-4 space-y-2">
              <div v-for="(g, i) in genderData" :key="g.name" class="flex items-center justify-between text-xs">
                <div class="flex items-center gap-2">
                  <div class="size-2.5 rounded-full" :style="{ background: ['#3b82f6', '#ec4899', '#8b5cf6'][i] }" />
                  <span class="text-muted-foreground">{{ g.name }}</span>
                </div>
                <span class="font-semibold tabular-nums">{{ g.value }} ({{ ((g.value / 247) * 100).toFixed(1) }}%)</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader class="pb-2">
            <CardTitle class="text-sm font-semibold">
              Tenure Distribution
            </CardTitle>
            <CardDescription>Employee tenure breakdown</CardDescription>
          </CardHeader>
          <CardContent>
            <div class="space-y-3">
              <div v-for="t in tenureData" :key="t.range" class="space-y-1.5">
                <div class="flex items-center justify-between text-sm">
                  <span class="font-medium">{{ t.range }}</span>
                  <span class="text-muted-foreground tabular-nums text-xs">{{ t.count }} ({{ t.pct }}%)</span>
                </div>
                <div class="h-4 rounded-md overflow-hidden bg-muted/50">
                  <div class="h-full rounded-md bg-gradient-to-r from-primary/80 to-primary transition-all duration-700 flex items-center px-2" :style="{ width: `${t.pct * 3}%` }">
                    <span class="text-white text-[9px] font-semibold">{{ t.count }}</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader class="pb-2">
            <CardTitle class="text-sm font-semibold">
              DEI Metrics
            </CardTitle>
            <CardDescription>Diversity, equity & inclusion scores</CardDescription>
          </CardHeader>
          <CardContent class="space-y-4">
            <div
              v-for="metric in [
                { label: 'Diversity Index', value: 0.82, target: 0.85, desc: 'Blau Index (0-1)' },
                { label: 'Pay Equity Score', value: 0.97, target: 1.00, desc: 'Gender pay ratio' },
                { label: 'Inclusion Score', value: 0.78, target: 0.80, desc: 'From annual survey' },
                { label: 'Belonging Score', value: 0.75, target: 0.80, desc: 'Team connection' },
                { label: 'Leadership Diversity', value: 0.42, target: 0.50, desc: 'Underrep. in leadership' },
              ]" :key="metric.label" class="space-y-1.5"
            >
              <div class="flex items-center justify-between text-sm">
                <div>
                  <span class="font-medium">{{ metric.label }}</span>
                  <span class="text-[10px] text-muted-foreground ml-1">{{ metric.desc }}</span>
                </div>
                <span class="font-bold tabular-nums" :class="metric.value >= metric.target ? 'text-emerald-600 dark:text-emerald-400' : 'text-amber-600 dark:text-amber-400'">
                  {{ (metric.value * 100).toFixed(0) }}%
                </span>
              </div>
              <div class="h-2 rounded-full bg-muted overflow-hidden relative">
                <div class="h-full rounded-full transition-all duration-700" :class="metric.value >= metric.target ? 'bg-emerald-500' : 'bg-amber-500'" :style="{ width: `${metric.value * 100}%` }" />
                <div class="absolute top-0 h-full w-0.5 bg-foreground/30" :style="{ left: `${metric.target * 100}%` }" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </template>
  </div>
</template>
