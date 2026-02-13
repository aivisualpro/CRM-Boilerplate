interface PageHeaderState {
  title: string
  description?: string
  icon?: string
}

const headerState = reactive<PageHeaderState>({
  title: '',
  description: '',
  icon: '',
})

export function usePageHeader() {
  function setHeader(opts: PageHeaderState) {
    headerState.title = opts.title
    headerState.description = opts.description || ''
    headerState.icon = opts.icon || ''
  }

  function clearHeader() {
    headerState.title = ''
    headerState.description = ''
    headerState.icon = ''
  }

  return {
    headerState: readonly(headerState),
    setHeader,
    clearHeader,
  }
}
