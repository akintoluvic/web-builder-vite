// {
//   "root": true,
//   "env": {
//     "browser": true,
//     "es2021": true,
//     "node": true
//   },
//   "extends": [
//     //   "plugin:vue/vue3-recommended",
//     //   "eslint:recommended",
//     //   "@vue/typescript/recommended",
//     //   "@vue/prettier",
//     //   "@vue/prettier/@typescript-eslint"

//     "plugin:vue/vue3-essential",
//     "eslint:recommended",
//     "@vue/typescript/recommended",
//     "@vue/prettier",
//     "@vue/prettier/@typescript-eslint",
//     "plugin:prettier/recommended"
//   ],
//   "parserOptions": {
//     "ecmaVersion": 2021,
//     "parser": '@typescript-eslint/parser',
//   },
//   "plugins": [],
//   "rules": {}
// }

module.exports = {
  env: { node: true, es2021: true, browser: true },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
  globals: {
    defineEmits: 'readonly',
    defineProps: 'readonly',
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2021,
    // sourceType: 'module',
  },
  rules: {},
}
