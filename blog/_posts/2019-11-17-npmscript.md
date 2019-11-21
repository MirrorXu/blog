---
date: 2019-11-17
tag:
  - npm
  - npm script
  - js
  - node
  - package.json
author: MirrorXu
location: BeiJing
---

# 使用 NPM 打造前端工作流

## npm 创建 package.json 文件

- `npm init` 使用问答的模式创建
- `npm init -f` 跳过文档模式直接创建

## `.npmrc` 文件

- `~/.npmrc` 是用户配置文件，记录了一些重要信息,例如 文件中的 `registry=https://registry.npm.taobao.org/` 是将 npm 的镜像源设置为淘宝镜像源

- `npm config set xxx=xxx` 命令可以修改一些配置信息，本质是修改了`.npmrc`文件

## `npm run xxx` 与 `npm run script xxx`

`npm run xxx` 命令是 `npm run script xxx`的缩写，此命令是会在项目的 `package.json` 文件中寻找 `script`字段对应的脚本命令。

```json
// package.json 示例文件
{
  "name": "xxxx",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "xxxx",
    "clean": "rm -rm ./temp"
  },
  "author": "Mirror <xuxulee@163.com>",
  "license": "ISC"
}
```

## 创建 npm script 命令(配置 eslint 代码风格检测工具)

- 本地安装 eslint 4.13.1 `npm i elint@4.13.1 -D`
- 使用 eslint 可执行文件创建一个 eslint 配置文件 `./node_modules/.bin/eslint --init` ， 创建完成会在项目根目录下形成`.eslintrc.js`文件

```js
/* 使用 eslint 可执行性文件创建 elint配置文件过程中的问题 */
// ? How would you like to configure ESLint? Answer questions about your
// style
// ? Are you using ECMAScript 6 features? Yes
// ? Are you using ES6 modules? Yes
// ? Where will your code run? Browser, Node
// ? Do you use CommonJS? Yes
// ? Do you use JSX? No
// ? What style of indentation do you use? Spaces
// ? What quotes do you use for strings? Single
// ? What line endings do you use? Unix
// ? Do you require semicolons? Yes
// ? What format do you want your config file to be in? JavaScript

/* 配置成功后形成的.eslintrc.js 文件内容 */

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  extends: "eslint:recommended",
  parserOptions: {
    sourceType: "module"
  },
  rules: {
    indent: ["error", 4],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "single"],
    semi: ["error", "always"]
  }
};
```

- 在项目根目录下创建一个`index.js`文件，并使用 eslint 进行代码风格检查`./node_modules/.bin/eslint index.js`
- 修改`package.josn`将 elint 检查的命令添加至 npm script

```json
{
  "script": {
    // ...其他npm script
    "eslint": "eslint index.js"
  }
}
```
