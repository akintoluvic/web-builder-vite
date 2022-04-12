<template>
    <section class="text-gray-600 dark:text-gray-400 dark:bg-gray-900 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -mx-4 -my-8">
          <div class="py-8 px-4 lg:w-1/3">
            <div class="h-full flex items-start">
              <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                <span class="text-gray-500 dark:text-gray-400 pb-2 mb-2 border-b-2 border-gray-200 dark:border-gray-700">
                  Jul
                </span>
                <span class="font-medium text-lg leading-none text-gray-800 dark:text-gray-300 title-font">
                  18
                </span>
              </div>
              <div class="flex-grow pl-6">
                <h2 class="tracking-widest text-xs title-font font-medium mb-1" :class="textColor">
                  CATEGORY
                </h2>
                <h1 class="title-font text-xl font-medium text-gray-900 dark:text-white mb-3">
                  The 400 Blows
                </h1>
                <p class="leading-relaxed mb-5">
                  Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                  microdosing tousled waistcoat.
                </p>
                <a href class="inline-flex items-center">
                  <img
                    alt="blog"
                    src="https://dummyimage.com/103x103"
                    class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span class="flex-grow flex flex-col pl-3">
                    <span class="title-font font-medium text-gray-900 dark:text-white">
                      Alper Kamu
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div class="py-8 px-4 lg:w-1/3">
            <div class="h-full flex items-start">
              <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                 <span class="text-gray-500 dark:text-gray-400 pb-2 mb-2 border-b-2 border-gray-200 dark:border-gray-700">
                  Jul
                </span>
                <span class="font-medium text-lg leading-none text-gray-800 dark:text-gray-300 title-font">
                  18
                </span>
              </div>
              <div class="flex-grow pl-6">
                <h2 class="tracking-widest text-xs title-font font-medium mb-1" :class="textColor">
                  CATEGORY
                </h2>
                <h1 class="title-font text-xl font-medium text-gray-900 dark:text-white mb-3">
                  Shooting Stars
                </h1>
                <p class="leading-relaxed mb-5">
                  Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                  microdosing tousled waistcoat.
                </p>
                <a href class="inline-flex items-center">
                  <img
                    alt="blog"
                    src="https://dummyimage.com/102x102"
                    class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span class="flex-grow flex flex-col pl-3">
                    <span class="title-font font-medium text-gray-900 dark:text-white">
                      Holden Caulfield
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div class="py-8 px-4 lg:w-1/3">
            <div class="h-full flex items-start">
              <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                 <span class="text-gray-500 dark:text-gray-400 pb-2 mb-2 border-b-2 border-gray-200 dark:border-gray-700">
                  Jul
                </span>
                <span class="font-medium text-lg leading-none text-gray-800 dark:text-gray-300 title-font">
                  18
                </span>
              </div>
              <div class="flex-grow pl-6">
                <h2 class="tracking-widest text-xs title-font font-medium mb-1" :class="textColor">
                  CATEGORY
                </h2>
                <h1 class="title-font text-xl font-medium text-gray-900 dark:text-white mb-3">
                  Neptune
                </h1>
                <p class="leading-relaxed mb-5">
                  Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                  microdosing tousled waistcoat.
                </p>
                <a href class="inline-flex items-center">
                  <img
                    alt="blog"
                    src="https://dummyimage.com/101x101"
                    class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span class="flex-grow flex flex-col pl-3">
                    <span class="title-font font-medium text-gray-900 dark:text-white">
                      Henry Letham
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>
<script>
import { useTheme } from "@/compossable/theme";
export default {
  setup() {
    const { textColor, textBgColor, theme } = useTheme()
    return { textColor, textBgColor, theme }
  }
}
</script>