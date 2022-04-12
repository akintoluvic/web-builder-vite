<template>
    <section class="text-gray-600 default:text-gray-400 dark:bg-gray-900 body-font overflow-hidden">
      <div class="container px-5 py-24 mx-auto">
        <div class="-my-8 divide-y-2 divide-gray-100 dark:divide-gray-800">
          <div class="py-8 flex flex-wrap md:flex-nowrap">
            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span class="font-semibold title-font text-gray-700 dark:text-white">
                CATEGORY
              </span>
              <span class="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
            </div>
            <div class="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-900 dark:text-white title-font mb-2">
                Bitters hashtag waistcoat fashion axe chia unicorn
              </h2>
              <p className="leading-relaxed">
                Glossier echo park pug, church-key sartorial biodiesel vexillologist
                pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger
                bag selfies, poke vaporware kombucha lumbersexual pork belly
                polaroid hoodie portland craft beer.
              </p>
              <a href class="inline-flex items-center mt-4" :class="theme.textColor">
                Learn More
                <svg
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          <div class="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-nowrap">
            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span class="font-semibold title-font text-gray-700 dark:text-white">
                CATEGORY
              </span>
              <span class="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
            </div>
            <div class="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-900 dark:text-white title-font mb-2">
                Meditation bushwick direct trade taxidermy shaman
              </h2>
              <p class="leading-relaxed">
                Glossier echo park pug, church-key sartorial biodiesel vexillologist
                pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger
                bag selfies, poke vaporware kombucha lumbersexual pork belly
                polaroid hoodie portland craft beer.
              </p>
              <a href class="inline-flex items-center mt-4" :class="theme.textColor">
                Learn More
                <svg
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          <div class="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-nowrap">
            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span class="font-semibold title-font text-gray-700 dark:text-white">
                CATEGORY
              </span>
              <span class="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
            </div>
            <div class="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-900 dark:text-white title-font mb-2">
                Woke master cleanse drinking vinegar salvia
              </h2>
              <p class="leading-relaxed">
                Glossier echo park pug, church-key sartorial biodiesel vexillologist
                pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger
                bag selfies, poke vaporware kombucha lumbersexual pork belly
                polaroid hoodie portland craft beer.
              </p>
              <a href class="inline-flex items-center mt-4" :class="theme.textColor">
                Learn More
                <svg
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
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
}
</script>