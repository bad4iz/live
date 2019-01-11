// https://eslint.org/docs/user-guide/configuring
module.exports = {
    root: true,
    parserOptions: {
      parser: 'babel-eslint',
    },
    env: {
      browser: true,
    },
    extends: ['eslint-config-airbnb-es5'],
    // required to lint files
    plugins: [],
  
    // add your custom rules here
    rules: {
      // allow debugger during development
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  
      indent: ['error', 4, { "SwitchCase": 1 }],
  
      'one-var': 1,
      // Require or disallow a space before function parenthesis 
      "space-before-function-paren": ["error", {
             "anonymous": "never",
             "named": "never", // ignore
             "asyncArrow": "always",
         }],
    },
  };