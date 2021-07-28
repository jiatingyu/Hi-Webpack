module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  extends: ['standard', 'eslint:recommended'],
  //   extends: 'eslint:recommended',
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // sourceType: 'module',  // 默认：script
    ecmaVersion: 12, // es 版本
    ecmaFeatures: {
      // 额外的语言特性
      jsx: true,
      ts: true
    }
  },
  rules: {
    'prefer-const': 'warn',
    semi: 'warn'
  },
  globals: {
    // 设置一些全局变量
    BaseUrl: 'writable'
  }
}
