<template>
  <div class="w-40 flex-shrink-0 max-w-60 h-screen overflow-y-scroll bg-slate-200 dark:bg-gray-800 py-16">
    
    <!-- Selected components -->
    <h3 class="px-4 text-sm text-slate-600 dark:text-slate-500">Page Sections</h3>
    <div class="px-2 my-5 h-32 overflow-y-scroll">
      <div 
        class="text-xs text-gray-800 dark:text-gray-400 flex justify-between items-center mx-2 px-2 py-1 hover:bg-slate-100 dark:hover:bg-slate-700 rounded mb-1 cursor-pointer"
        v-for="(component, index) in selectedIcons"
        :key="index"
        draggable="true"
        @dragstart="handleDragStart(component, index)"
        @dragover.prevent
        @drop="handleDrop(index)"
      >
        <span>{{ component[0] }}</span>
        <svg @click="removeSelectComponent(index)" class="w-3 h-3 cursor-pointer hover:bg-slate-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </div>
    </div>

    <!-- Icon list -->
    <h3 class="px-4 pt-3 text-sm text-slate-600 dark:text-slate-500 border-t border-gray-300 dark:border-gray-700">Add section</h3>
    <div
      v-for="(icons, type) in iconList"
      :key="type"
      class="mt-5 mx-2 px-2"
    >
      <h2 class="mb-5 text-sm text-slate-600 dark:text-slate-500">{{ type }}</h2>
      <div
        v-for="(icon, index) in icons"
        :key="index"
        class="relative shadow-md dark:bg-slate-600 dark:shadow-lg dark:drop-shadow-xl rounded mb-5 overflow-hidden hover:outline hover:outline-slate-300"
        :class="blockAvailable(type, index) ? 'cursor-pointer' : 'cursor-not-allowed'"
        @click="blockAvailable(type, index) && addSelectComponent([index, type])"
        aria-labelledby="component icon button"
      >
        <component :is="icon" class="text-gray-400" />
        <span v-if="!blockAvailable(type, index)" class="absolute inset-0 z-10 flex justify-center items-center text-xs bg-gray-200  bg-opacity-60 dark:bg-opacity-30 w-full h-full text-gray-900 dark:text-gray-300">
          <span class="text-xs">Coming soon</span>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import { useTheme } from "@/compossable/theme"
import { useComponents } from "@/compossable/components"
import { useViewOrCode } from "@/compossable/view-mode"
import { ref } from 'vue'

export default {
  name: 'LeftSideBar',
  setup() {
    const dragStartItem = ref(null)
    const { theme } = useTheme()
    const { setViewType } = useViewOrCode()
    const { 
      iconList,
      blockListArr,
      blocksList,
      selectedIcons,
      addComponent,
      removeComponent,
    } = useComponents()


    const blockAvailable = (type, index) => {
      return blocksList.value[type] !== undefined && blocksList.value[type][index] !== undefined
    }

    const addSelectComponent = val => {
      addComponent(val)
      setViewType('desktop')
    }

    const removeSelectComponent = val => {
      removeComponent(val)
      setViewType('desktop')
    }

    const handleDragStart = ( startElem, startIndex) => {
      dragStartItem.value = [startElem, startIndex]
    }
      
    const handleDrop = dropIndex => {
      let tempArr = [...selectedIcons.value]
      tempArr.splice(dragStartItem.value[1], 1)
      tempArr.splice(dropIndex, 0, dragStartItem.value[0])
      selectedIcons.value = tempArr
    }

    return { 
        addSelectComponent,
        removeSelectComponent,
        theme,
        blockAvailable,
        iconList,
        blockListArr,
        blocksList,
        selectedIcons,

        handleDragStart,
        handleDrop,
    }
  },
}
</script>