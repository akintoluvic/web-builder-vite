<template>
  <div class="flex-auto bg-white dark:bg-gray-900 h-screen overflow-y-scroll justify-center">
    <div class="w-full h-full text-gray-900 mt-20">
      <div v-if="codeView" class="m-8 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500">
        <div class="flex justify-center w-full h-12 bg-slate-300 dark:bg-slate-700 rounded-t-lg py-2">
          <button
            @click="copyToClipboard"
            class="py-1 w-40 text-center rounded-full text-slate-200 bg-gray-600 hover:bg-gray-800 uppercase text-sm"
          >{{ copyButtonText }}</button>
        </div>
        <pre class="w-full h-full p-4 overflow-y-scroll">{{ codeForView }}</pre>
      </div>
      <main v-else-if="deviceViewWidth === 'w-full'" class="px-8 mb-12 min-h-screen">
        <template v-for="(currentIcon, index) in selectedIcons" :key="index">
          <component :is="blocksList[currentIcon[1]][currentIcon[0]]"  />
        </template>
      </main>
      <IframeView v-else :code="codeForPreview" />
      
    </div> 
    <main class="hidden px-8 my-12 min-h-screen" ref="codeBlock">
      <template v-for="(currentIcon, index) in selectedIcons" :key="index">
        <component :is="blocksList[currentIcon[1]][currentIcon[0]]"  />
      </template>
    </main>
  </div>
</template>
<script>
import { useComponents } from "@/compossable/components"
import { useDarkMode } from "@/compossable/dark-mode"
import { useTheme } from "@/compossable/theme"
import { useViewOrCode } from "@/compossable/view-mode"
import { ref, watch, onMounted } from "vue"
import IframeView from "@/components/builder/IframeView"

export default {
  name: 'CodeOrPagePreview',
  components: {
    IframeView,
  },
  setup() {
    const { 
      blocksList,
      selectedIcons,
    } = useComponents()
    const { darkMode } = useDarkMode()
    const { deviceViewWidth, codeView, } = useViewOrCode()
    const { theme } = useTheme()

    const codeBlock = ref('')
    const codeForView = ref('')
    const codeForPreview = ref('')
    const copyButtonText = ref('Copy Code')
    

    const beautifyHTML = (codeStr) => {
      const process = (str) => {
        let div = document.createElement('div');
        div.innerHTML = str.trim();
        return format(div, 0).innerHTML.trim();
      }
      
      const format = (node, level) => {
        let indentBefore = new Array(level++ + 1).join('  '),
          indentAfter = new Array(level - 1).join('  '),
          textNode;
      
        for (let i = 0; i < node.children.length; i++) {
          textNode = document.createTextNode('\n' + indentBefore);
          node.insertBefore(textNode, node.children[i]);
      
          format(node.children[i], level);
      
          if (node.lastElementChild === node.children[i]) {
            textNode = document.createTextNode('\n' + indentAfter);
            node.appendChild(textNode);
          }
        }
        return node;
      }
      return process(codeStr);
    }

    const generateCodeForPreview = () => {
      codeForPreview.value = `
        <!DOCTYPE html>
        <html>
        <head>
        <title>Page Title</title>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
        <link href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css" rel="stylesheet" />
        </head>
        <body class="dark dark-mode">
          ${codeBlock.value.innerHTML}
        </body>
        </html>
      `
      codeForView.value = beautifyHTML(codeBlock.value.innerHTML)
    }

    const copyToClipboard = () => {
      navigator.clipboard.writeText(codeForView.value)
      copyButtonText.value = 'Code copied'
      setTimeout(() => {
        copyButtonText.value = 'Copy Code'
      }, 1000)
    }

    onMounted(() => {
      generateCodeForPreview()
    })

    watch([() => theme.value, () => selectedIcons.value], () => {        
      setTimeout(() => {
        generateCodeForPreview()
      }, 100);
      },
      { deep: true }
    )
    
    return {
      selectedIcons,
      blocksList,
      codeForView,
      codeForPreview,
      codeBlock,
      darkMode,
      deviceViewWidth,
      codeView,
      copyToClipboard,
      copyButtonText,
    }
  },
}
</script>