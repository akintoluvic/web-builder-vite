import { ref, onMounted } from "vue"
const darkMode = ref(false)

export function useDarkMode() {
  onMounted(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
        darkMode.value = true
    } else {
        darkMode.value = false
    }
  })

  const toggleDarkMode = () => {
    darkMode.value = !darkMode.value
    localStorage.theme = darkMode.value ? "dark" : "light"
  }

  return {
    darkMode,
    toggleDarkMode,
  }
}
