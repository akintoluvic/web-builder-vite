import { ref, computed } from "vue"
const viewType = ref('desktop')
const codeView = ref(false)

export function useViewOrCode() {
  const iframeViewWidth = computed(() => {
    switch (viewType.value) {
      case 'desktop':
        return 'w-full'
      case 'tablet':
        return 'max-w-3xl w-full'
      case 'mobile':
        return 'max-w-md w-full'
        
      default:
        return `w-full`
    }
  })

  const deviceViewWidth = computed(() => {
    switch (viewType.value) {
      case 'desktop':
        return 'w-full'
      case 'tablet':
        return 'max-w-4xl w-full'
      case 'mobile':
        return 'max-w-lg w-full'
        
      default:
        return `w-full`
    }
  })

  const setViewType = value => {
    viewType.value = value
    codeView.value = false
  }

  const toggleCodeView = () => {
    codeView.value = !codeView.value
  }

  return {
    setViewType,
    toggleCodeView,
    codeView,
    viewType,
    iframeViewWidth,
    deviceViewWidth,
  }
}
