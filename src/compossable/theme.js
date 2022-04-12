import { ref, computed } from 'vue'
const theme = ref('blue')

export function useTheme() {
  
      const textColor = computed(() => {
        switch (theme.value) {
          case 'red':
            return 'text-red-500'
          case 'orange':
            return 'text-orange-500'
          case 'green':
            return 'text-green-500'
          case 'yellow':
            return 'text-yellow-500'
          case 'blue':
            return 'text-blue-500'
          case 'purple':
            return 'text-purple-500'
          case 'pink':
            return 'text-pink-500'
          case 'indigo':
              return 'text-indigo-500'
            
          default:
            return `text-indigo-500`
        }
      })

      const textBgColor = computed(() => {
        switch (theme.value) {
          case 'red':
            return 'bg-red-50'
          case 'orange':
            return 'bg-orange-50'
          case 'green':
            return 'bg-green-50'
          case 'yellow':
            return 'bg-yellow-50'
          case 'blue':
            return 'bg-blue-50'
          case 'purple':
            return 'bg-purple-50'
          case 'pink':
            return 'bg-pink-50'
            
          default:
            return `bg-indigo-50`
        }
      })

      const borderColor500 = computed(() => {
        switch (theme.value) {
          case 'red':
            return 'border-red-500'
          case 'orange':
            return 'border-orange-500'
          case 'green':
            return 'border-green-500'
          case 'yellow':
            return 'border-yellow-500'
          case 'blue':
            return 'border-blue-500'
          case 'purple':
            return 'border-purple-500'
          case 'pink':
            return 'border-pink-500'
            
          default:
            return `border-indigo-500`
        }
      })

      const bgColor500 = computed(() => {
        switch (theme.value) {
          case 'red':
            return 'bg-red-500'
          case 'orange':
            return 'bg-orange-500'
          case 'green':
            return 'bg-green-500'
          case 'yellow':
            return 'bg-yellow-500'
          case 'blue':
            return 'bg-blue-500'
          case 'purple':
            return 'bg-purple-500'
          case 'pink':
            return 'bg-pink-500'
            
          default:
            return `bg-indigo-500`
        }
      })

      
      const bgColor600 = computed(() => {
        switch (theme.value) {
          case 'red':
            return 'bg-red-600'
          case 'orange':
            return 'bg-orange-600'
          case 'green':
            return 'bg-green-600'
          case 'yellow':
            return 'bg-yellow-600'
          case 'blue':
            return 'bg-blue-600'
          case 'purple':
            return 'bg-purple-600'
          case 'pink':
            return 'bg-pink-600'
            
          default:
            return `bg-indigo-600`
        }
      })

      const hoverBgColor600 = computed(() => {
        switch (theme.value) {
          case 'red':
            return 'hover:bg-red-600'
          case 'orange':
            return 'hover:bg-orange-600'
          case 'green':
            return 'hover:bg-green-600'
          case 'yellow':
            return 'hover:bg-yellow-600'
          case 'blue':
            return 'hover:bg-blue-600'
          case 'purple':
            return 'hover:bg-purple-600'
          case 'pink':
            return 'hover:bg-pink-600'
            
          default:
            return `hover:bg-indigo-600`
        }
      })

      const focusBorderColor500 = computed(() => {
        switch (theme.value) {
          case 'red':
            return 'focus:border-red-500'
          case 'orange':
            return 'focus:border-orange-500'
          case 'green':
            return 'focus:border-green-500'
          case 'yellow':
            return 'focus:border-yellow-500'
          case 'blue':
            return 'focus:border-blue-500'
          case 'purple':
            return 'focus:border-purple-500'
          case 'pink':
            return 'focus:border-pink-500'
            
          default:
            return `focus:border-indigo-500`
        }
      })


      const focusRingColor200 = computed(() => {
        switch (theme.value) {
          case 'red':
            return 'focus:ring-red-200'
          case 'orange':
            return 'focus:ring-orange-200'
          case 'green':
            return 'focus:ring-green-200'
          case 'yellow':
            return 'focus:ring-yellow-200'
          case 'blue':
            return 'focus:ring-blue-200'
          case 'purple':
            return 'focus:ring-purple-200'
          case 'pink':
            return 'focus:ring-pink-200'
            
          default:
            return `focus:ring-indigo-200`
        }
      })

      const focusRingColor500 = computed(() => {
        switch (theme.value) {
          case 'red':
            return 'focus:ring-red-500'
          case 'orange':
            return 'focus:ring-orange-500'
          case 'green':
            return 'focus:ring-green-500'
          case 'yellow':
            return 'focus:ring-yellow-500'
          case 'blue':
            return 'focus:ring-blue-500'
          case 'purple':
            return 'focus:ring-purple-500'
          case 'pink':
            return 'focus:ring-pink-500'
            
          default:
            return `focus:ring-indigo-500`
        }
      })

      const focusRingColor900 = computed(() => {
        switch (theme.value) {
          case 'red':
            return 'focus:ring-red-900'
          case 'orange':
            return 'focus:ring-orange-900'
          case 'green':
            return 'focus:ring-green-900'
          case 'yellow':
            return 'focus:ring-yellow-900'
          case 'blue':
            return 'focus:ring-blue-900'
          case 'purple':
            return 'focus:ring-purple-900'
          case 'pink':
            return 'focus:ring-pink-900'
            
          default:
            return `focus:ring-indigo-900`
        }
      })


      const changeTheme = newTheme => { 
        theme.value = newTheme 
      }

  return { 
    theme, 
    textColor, 
    textBgColor, 
    changeTheme, 
    bgColor600, bgColor500, borderColor500,
    hoverBgColor600,
    focusRingColor200, focusRingColor500, focusRingColor900,
    focusBorderColor500,
  }
}

