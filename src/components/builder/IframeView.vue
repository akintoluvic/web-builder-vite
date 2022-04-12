<template>
  <div 
    class="overflow-y-scroll py-14 bg-slate-200 border-2 border-slate-300 mx-auto rounded-3xl"
    :class="[deviceViewWidth, viewType === 'mobile' ? '' : 'h-full' ]" 
  >
    <iframe 
        ref="iframe"
        id="iframe"
        class=" bg-white mx-auto dark:bg-gray-900 border-2 border-slate-300"
        :class="[iframeViewWidth, viewType === 'mobile' ? 'mobile-height' : 'h-full']"
        title="Page components preview"
        loading="lazy"
        name="Page components preview"
      />
  </div>
</template>
<script>
import { useViewOrCode } from "@/compossable/view-mode"
import { toRefs, onMounted, ref, onUnmounted  } from "vue"

export default {
  name: 'IframeView',
  props: {
    code: String
  },
  setup(props) {
    const { code } = toRefs(props)
    const { viewWidth, codeView, deviceViewWidth, iframeViewWidth, viewType } = useViewOrCode()
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
    }
  }
}
</script>
<style>
.mobile-height {
  height: 812px;
}
</style>
