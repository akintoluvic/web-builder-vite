<template>
  <section class="text-gray-600 dark:text-gray-400 dark:bg-gray-900 body-font">
      <div
        class="container mx-auto flex px-5 py-24 flex-col items-center"
        :class="[heroCenter]"
      >
        <div
          class="flex flex-col mb-16 md:mb-0 items-center"
          :class="[heroCenterBody]"
        >
          <h1
            class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-white"
            :class="[heroType !== 'center' ? 'max-w-md' : '']"
          >
            Before they sold out readymade gluten
          </h1>
          <p class="mb-8 leading-relaxed max-w-2xl">
            Copper mug try-hard pitchfork pour-ovwqer freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
          <div class="flex justify-center items-center">
            <button 
              class="inline-flex text-white border-0 py-2 px-6 focus:outline-none rounded text-lg"
              :class="[theme.bgColor500, theme.hoverBgColor600]"
            >
              Button
            </button>
            <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Button
            </button>
          </div>
        </div>
        <div
          class="md:w-1/2 w-5/6"
          :class="[imageFirst, heroStype === 'center' ? 'lg:w-2/6' : 'lg:max-w-lg lg:w-full']"
        >
          <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
        </div>
      </div>
    </section>
</template>

<script>
import { useTheme } from "@/compossable/theme";
export default {
  data() {
    return {
      theme: useTheme(),
    }
  },
  props: {
    heroType: {
      type: String,
      default: "default",
    },
  },
  computed: {
    heroStype() {
      switch (this.heroType) {
          case 'image-first':
            return ''
      
          default:
            return ''
      }
    },
    heroCenter() {
      return this.heroType === 'center' ? 'flex-col-reverse justify-center' : 'md:flex-row'
    },
    heroCenterBody() {
      return this.heroType === 'center'
        ? 'lg:w-2/3 w-full mt-10 text-center'
        : 'lg:flex-grow md:w-1/2 md:text-left items-center md:items-start'
    },
    imageFirst() {
      return this.heroType === 'image-first' ? '-order-1 lg:pr-24 md:pr-16 ' : 'lg:pl-24 md:pl-16 '
    },

  },
}
</script>
