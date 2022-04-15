<template>
  <div
    class="overflow-y-scroll py-14 border-2 mx-auto rounded-3xl"
    :class="[
      deviceViewWidth,
      viewType === 'mobile' ? '' : 'h-full',
      darkMode
        ? 'bg-slate-600 border-slate-500'
        : ' bg-slate-200 border-slate-300',
    ]"
  >
    <iframe
      ref="iframe"
      id="iframe"
      class="bg-white mx-auto dark:bg-gray-900 border-2"
      :class="[
        iframeViewWidth,
        viewType === 'mobile' ? 'mobile-height' : 'h-full',
        darkMode ? 'border-slate-500' : ' border-slate-300',
      ]"
      title="Page components preview"
      loading="lazy"
      name="Page components preview"
    />
  </div>
</template>
<script>
  import { useViewOrCode } from '@/compossable/view-mode'
  import { toRefs, onMounted, ref, onUnmounted } from 'vue'
  import { useDarkMode } from '@/compossable/dark-mode'

  export default {
    name: 'IframeView',
    props: {
      code: String,
    },
    setup(props) {
      const { code } = toRefs(props)
      const { darkMode } = useDarkMode()
      const {
        viewWidth,
        codeView,
        deviceViewWidth,
        iframeViewWidth,
        viewType,
      } = useViewOrCode()
      const iframe = ref('')

      const displayContent = () => {
        iframe.value.contentWindow.document.write(code.value)
        iframe.value.contentWindow.document.close()
      }

      onMounted(() => {
        displayContent()
      })

      onUnmounted(() => {})

      const logShit = () => {
        console.log('Hmmm, what iFrame doing here?')
      }

      return {
        viewWidth,
        codeView,
        iframe,
        logShit,
        deviceViewWidth,
        iframeViewWidth,
        viewType,
        darkMode,
      }
    },
  }
</script>
<style>
  .mobile-height {
    height: 812px;
  }
</style>
