import { ref, onMounted } from 'vue'
import getIcons from "@/components/icons"
import getBlocks from "@/components/blocks"

const iconList = ref(null)
const blocksList = ref(null)
const blockListArr = ref([])
const selectedIcons = ref([])

blocksList.value = getBlocks()
iconList.value = getIcons()

export function useComponents() {

    const addComponent = val => {
      selectedIcons.value = [...selectedIcons.value, val]
    }

    const removeComponent = val => {
      selectedIcons.value.splice(val, 1)
    }

    onMounted(() => {
        Object.entries(iconList).forEach(([type, icons]) => {
          Object.keys(icons).map((name) =>
            blockListArr.value.push(`${name},${type}`)
          );
        })
      })

    return {
      iconList,
      blocksList,
      blockListArr,
      selectedIcons,
      addComponent,
      removeComponent
    }
}