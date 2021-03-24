const WARN = 'warn';
const OFF = 'off';
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    // 'airbnb',
    'eslint:recommended',
    // 'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended'
    // 'plugin:taro/react'
  ],
  parserOptions: {
    parser: 'babel-eslint', //词法解析器使用babel-eslint，以更好的适配es6的新api
    ecmaVersion: 6, //启用 ES6 语法支持;默认设置为3，5（默认）， 你可以使用 6、7、8 或 9 来指定你想要使用的 ECMAScript 版本。你也可以用使用年份命名的版本号指定为 2015（同 6），2016（同 7），或 2017（同 8）或 2018（同 9）
    sourceType: 'module' //设置为 "script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)。
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': WARN,
    'no-console': OFF,
    'no-debugger': OFF,
    'react/prop-types': OFF,
    'react/no-find-dom-node': OFF,
    'react/display-name': OFF
  }
};
