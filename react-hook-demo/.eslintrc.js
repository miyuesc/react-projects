module.exports = {
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "rules": {
    "max-len": [1, 120, 2, {"ignoreComments": true}],
    "no-var": 2,
    // 不允许在块中function、var的申明
    "no-inner-declarations": [2, "both"],
    // 变量不强制为camelcase
    camelcase: 0,
    // 构造函数首字母必须大写
    "new-cap": [
      2,
      {
        newIsCap: true,
        capIsNew: false,
      },
    ],
    // 尽量不要出现变量及函数参数定义了不使用的情况
    "no-unused-vars": 0,
    // 禁止在变量定义之前使用它们
    "no-use-before-define": 0, // 不检测该类型

    /** 编码风格相关 **/
    // 不强制结尾分号，为保证代码风格一致性，建议统一不使用分号，但应注意不要混淆多行表达式
    semi: 0,
    // 代码缩进为2个空格
    indent: [1, 2, { SwitchCase: 1 }],
    // 箭头函数的箭头前后应该有空格
    "arrow-spacing": [
      2,
      {
        before: true,
        after: true,
      },
    ],
    // 花括号风格采用one true brace style
    "brace-style": [
      2,
      "1tbs",
      {
        allowSingleLine: true,
      },
    ],
    // 禁止空格和 tab 的混合缩进
    "no-mixed-spaces-and-tabs": 2,
    // 最大的连续空行限制为2行
    "no-multiple-empty-lines": [
      2,
      {
        max: 2,
      },
    ],
    // 不强制在对象和数组字面量中使用一致的拖尾逗号，但所有的风格应尽量保持统一
    "comma-dangle": 0,
    // 逗号后需要跟空格
    "comma-spacing": [
      2,
      {
        before: false,
        after: true,
      },
    ],
    // 允许在字符串和注释以外用一些不规则的空格，但是整体风格应尽量保持统一
    "no-irregular-whitespace": 0,
    quotes: [2, "double"],
    // JSX 属性值强制使用双引号
    "jsx-quotes": [2, "prefer-double"],
    // 对象字面量属性冒号前不能有空格，冒号后必须跟空格
    "key-spacing": [
      2,
      {
        beforeColon: false,
        afterColon: true,
      },
    ]
  }
}
