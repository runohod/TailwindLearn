import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'
import betterTailwindcss from 'eslint-plugin-better-tailwindcss'
import importX from 'eslint-plugin-import-x'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    plugins: {
      'better-tailwindcss': betterTailwindcss,
      'import-x': importX,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: {
      'import-x/resolver': {
        alias: {
          map: [
            ['@', './src']
          ],
          extensions: ['.js', '.jsx', '.json']
        },
        node: {
          extensions: ['.js', '.jsx']
        }
      }
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      
      // 3. Включаем правило для автозамены [1230px] -> max-w-1230
      'better-tailwindcss/enforce-canonical-classes': 'warn',
      
      // Дополнительные полезные правила от ментора
      'import-x/no-unresolved': 'error',
      'import-x/order': ['warn', { 'newlines-between': 'always' }],
    },
  },
])