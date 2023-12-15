---
title: npm
date: 2022-04-11 16:15:24
author: Even
---

### npm发包
- 包作者：evendetail

- 查看当前环境下的用户
```sh
npm whoami
```

- npm登录
```sh
npm adduser
```

- 发包命令
```sh
npm publish
```

- 查看包版本
```sh
npm view vue-rate-compontents version
```

- 更新自己发版的npm包
```sh
npm uninstall vue-rate-compontents
npm install vue-rate-compontents
```

- npm whoami报错
```js
Unexpected token < in JSON at position 0 while parsing near '<!DOCTYPE HTML PUBLI...'
```
> 因为有中间代理，需要从新执行命令`npm set registry https://registry.npmjs.org/`