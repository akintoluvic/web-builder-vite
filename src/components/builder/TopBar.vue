<template>
  <div
    class="fixed top-0 z-30 w-full flex items-center justify-between h-12 px-5"
    :class="bgColor600"
  >
    <!-- Logo & Title -->
    <div class="flex items-center space-x-5">
      <div
        class="flex items-center justify-center bg-slate-100 rounded-full h-8 w-8"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <h1 class="text-white">WeBuilder</h1>
    </div>

    <div class="flex space-x-1">
      <svg
        class="w-7 cursor-pointer"
        :class="viewType === 'desktop' ? 'stroke-white' : 'stroke-slate-400'"
        @click="setViewType('desktop')"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <path d="M8 21h8m-4-4v4" />
      </svg>
      <svg
        class="h-7 cursor-pointer"
        :class="viewType === 'tablet' ? 'stroke-white' : 'stroke-slate-400'"
        @click="setViewType('tablet')"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
        <path d="M12 18h.01" />
      </svg>

      <svg
        class="h-7 cursor-pointer"
        :class="viewType === 'mobile' ? 'stroke-white' : 'stroke-slate-400'"
        @click="setViewType('mobile')"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="5" y="2" width="13" height="20" rx="2" ry="2" />
        <path d="M12 18h.01" />
      </svg>
      <button class="mode" @click="changeMode"></button>
    </div>

    <!-- Save, publish buttons -->
    <div class="flex space-x-5 items-center">
      <button
        class="flex w-36 text-white text-sm border border-white rounded-full px-4 py-1 cursor-pointer"
      >
        <svg
          v-if="codeView"
          class="h-5"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="css-i6dzq1"
          viewBox="0 0 24 24"
        >
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
        <svg
          v-else
          class="h-5"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M16 18L22 12 16 6"></path>
          <path d="M8 6L2 12 8 18"></path>
        </svg>

        <span class="font-light uppercase ml-2" @click="toggleCodeView">{{
          codeView ? 'Preview' : 'Code view'
        }}</span>
      </button>
      <div
        class="flex space-x-2 justify-between py-2 px-3 bg-slate-200 rounded-full"
      >
        <button
          v-for="(uiTheme, key) in themeList"
          :key="uiTheme"
          class="rounded-full w-4 h-4 text-xs"
          :class="uiTheme"
          @click="switchTheme(key)"
          :aria-label="`select ${key} uiTheme`"
        >
          <span v-if="uiTheme === `bg-${currentTheme}-500`">&#10004;</span>
        </button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { useTheme } from '@/compossable/theme'
  import { useDarkMode } from '@/compossable/dark-mode'
  import { useViewOrCode } from '@/compossable/view-mode'
  import { ref, reactive, toRefs } from 'vue'

  export default {
    name: 'TopBar',
    setup() {
      const currentTheme = ref('blue')
      const { bgColor600, changeTheme } = useTheme()
      const { toggleDarkMode } = useDarkMode()
      const { viewType, setViewType, codeView, toggleCodeView } =
        useViewOrCode()
      let state = reactive({
        themeList: {
          blue: 'bg-blue-500',
          red: 'bg-red-500',
          orange: 'bg-orange-500',
          yellow: 'bg-yellow-500',
          indigo: 'bg-indigo-500',
          pink: 'bg-pink-500',
          purple: 'bg-purple-500',
        },
      })

      const switchTheme = (newTheme: string) => {
        currentTheme.value = newTheme
        changeTheme(currentTheme.value)
      }

      const changeMode = () => {
        toggleDarkMode()
      }

      return {
        bgColor600,
        currentTheme,
        switchTheme,
        ...toRefs(state),
        changeMode,
        viewType,
        codeView,
        setViewType,
        toggleCodeView,
      }
    },
  }
</script>
