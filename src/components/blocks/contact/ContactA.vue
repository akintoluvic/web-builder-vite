<template>
    <section class="text-gray-600 dark:text-gray-400 dark:bg-gray-900 body-font relative">
      <div class="absolute inset-0 bg-gray-300 dark:bg-gray-900">
        <iframe
          title="map"
          width="100%"
          height="100%"
          style="filter: 'grayscale(1) contrast(1.2) opacity(.16)'"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
        />
      </div>
      <div class="container px-5 py-24 mx-auto flex">
        <div class="lg:w-1/3 md:w-1/2 bg-white dark:bg-gray-900 shadow-md rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
          <h2 class="text-gray-900 dark:text-white text-lg mb-1 font-medium title-font">
            Feedback
          </h2>
          <p class="leading-relaxed mb-5">
            Post-ironic portland shabby chic echo park, banjo fashion axe
          </p>
          <div class="relative mb-4">
            <label
              htmlFor="email"
              class="leading-7 text-sm text-gray-400"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="w-full bg-white dark:bg-gray-800 rounded border border-gray-300 dark:border-gray-700 focus:ring-2 text-base outline-none text-gray-100 dark:text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              :class="`${focusBorderColor500}  ${focusRingColor900} dark:${focusRingColor200}`"
            />
          </div>
          <div class="relative mb-4">
            <label
              htmlFor="message"
              class="leading-7 text-sm text-gray-600 dark:text-gray-400"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              class="w-full bg-white dark:bg-gray-800 rounded border border-gray-300 dark:border-gray-700 focus:ring-2 h-32 text-base outline-none text-gray-700 dark:text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              :class="`${focusBorderColor500}  ${focusRingColor900}`"
            ></textarea>
          </div>
          <button class="`text-white border-0 py-2 px-6 focus:outline-none rounded text-lg`"
            :class="`${bgColor500} hover:${bgColor600}`"
          >
            Button
          </button>
          <p class="text-xs text-gray-50 dark:text-gray-400 dark:text-opacity-90 mt-3">
            Chicharrones blog helvetica normcore iceland tousled brook viral
            artisan.
          </p>
        </div>
      </div>
    </section>
</template>
<script>
import { useTheme } from "@/compossable/theme";
export default {
  setup() {
    const { textColor, textBgColor, theme, bgColor600, bgColor500, borderColor500, focusRingColor500, focusRingColor200, focusRingColor900, focusBorderColor500 } = useTheme()
    return { textColor, textBgColor, theme, bgColor600, bgColor500, borderColor500, focusRingColor500, focusRingColor200, focusRingColor900, focusBorderColor500 }
  }
}
</script>