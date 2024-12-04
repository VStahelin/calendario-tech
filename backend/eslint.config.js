import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist', 'node_modules'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.node,
    },
    plugins: {
      import: importPlugin,
    },
    rules: {
      'sort-imports': [
        'error',
        { ignoreCase: true, ignoreDeclarationSort: true },
      ],
      'import/order': [
        'error',
        {
          groups: [
            ['builtin', 'external'], // Módulos nativos do Node e dependências externas
            'internal', // Imports internos do projeto
            ['sibling', 'parent'], // Imports de arquivos relacionados
            'index', // Arquivos index.js/ts
          ],
          pathGroups: [
            {
              pattern: '@src/**', // Ajuste para aliases como @src/
              group: 'internal',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],

      // Boas práticas de TypeScript
      '@typescript-eslint/no-unused-vars': ['warn'], // Avisar sobre variáveis não utilizadas
      '@typescript-eslint/no-explicit-any': 'warn', // Avisar sobre uso do tipo 'any'
      '@typescript-eslint/explicit-function-return-type': [
        'warn',
        { allowExpressions: true },
      ], // Incentivar a tipagem de funções
    },
  },
);
