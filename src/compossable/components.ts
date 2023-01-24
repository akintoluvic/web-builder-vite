import { ref, onMounted, shallowRef } from 'vue'
import getIcons from '@/components/icons'
import getBlocks from '@/components/blocks'

interface Icons {
  [key: string]: object
}

const iconList = shallowRef<Icons>({})
const blocksList = shallowRef<Record<string, Record<string, unknown>>>({})
const blockListArr = shallowRef<string[]>([])
const selectedIcons = ref<string[][]>([])

blocksList.value = getBlocks()
iconList.value = getIcons()

export function useComponents() {
  const addComponent = (val: string[]) => {
    selectedIcons.value = [...selectedIcons.value, val]
  }

  const removeComponent = (val: number) => {
    selectedIcons.value.splice(val, 1)
  }

  onMounted(() => {
    Object.entries(iconList).forEach(([type, icons]) => {
      Object.keys(icons).map((name) =>
        blockListArr.value.push(`${name},${type}`)
      )
    })
    console.log(iconList.value)
  })

  return {
    iconList,
    blocksList,
    blockListArr,
    selectedIcons,
    addComponent,
    removeComponent,
  }
}
