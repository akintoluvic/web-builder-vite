<template>
  <header class="text-gray-600 dark:text-gray-400 dark:bg-gray-900 body-font">
        <div 
          class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
          :class="[navBetween, brandMiddle === '-order-1' ? 'justify-between' : '']"
        >
          <a
            href
            class="flex title-font font-medium items-center text-gray-900 dark:text-white mb-4 md:mb-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              class="w-10 h-10 text-white p-2 bg-${props.theme}-500 rounded-full"
              :class="[theme.bgColor500]"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span class="ml-3 text-xl">Tailblocks</span>
          </a>
          <nav
            class="flex flex-wrap items-center text-base justify-center"
            :class="[allLeft, brandMiddle]"
          >
            <a href class="mr-5 hover:text-gray-900 dark:hover:text-white">
              First Link
            </a>
            <a href class="mr-5 hover:text-gray-900 dark:hover:text-white">
              Second Link
            </a>
            <a href class="mr-5 hover:text-gray-900 dark:hover:text-white">
              Third Link
            </a>
            <a href class="mr-5 hover:text-gray-900 dark:hover:text-white">
              Fourth Link
            </a>
          </nav>
          <button class="inline-flex items-center bg-gray-100 dark:bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 dark:hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
            Button
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              class="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </header>
</template>

<script>
import { useTheme } from "@/compossable/theme";
export default {
  name: "HeaderOne",
  data() {
    return {
      theme: useTheme(),
    }
  },
  props: {
    navOption: {
      type: String,
      default: "default",
    },
  },
  computed: {
    navBetween() {
      return this.navOption === 'space-between'
        ? 'justify-between'
        : ''
    },
    brandMiddle() {
      return this.navOption === 'brand-middle'
        ? '-order-1'
        : ''
    },
    allLeft() {
      switch (this.navOption) {
        case 'all-left':
          return 'md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400'
        case 'default':
          return 'md:ml-auto'
        case '':
          return 'md:ml-auto'
          
      
        default:
          return ''
      }
    },
  },
}
</script>