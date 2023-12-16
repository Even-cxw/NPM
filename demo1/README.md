
## 账号注册
- 客户端
- 管理端

## 配置环境
1. 设置npm源
2. 查看终端是否支持vpn
3. 配置代理
4. 命令


```sh
// 查看npm源
npm config list
```
- 如果使用的是淘宝镜像，只能下载不能上传npm包。（没办法维护）
```sh
// 配置国外镜像
npm config set registry https://registry.npmjs.org
```


title: 终端配置代理
管理端（终端） - 要在国外镜像发包
- 终端的行为和网络请求是独立的，即使开了VPN，终端本身并不会跟随翻墙
- 所以终端也需要连接vpn

npm login - 报错

或者连接 curl www.google.com


- `npm login` 坑 => 报错 timeout
图片1
可以测试下`终端`是否支持翻墙
```sh
// 找个国外网站
curl www.google.com
```
图片2

需要给终端翻墙
1. 配置文件 ~/.zshrc
```sh
cat ~/.zshrc
function proxy_on() {
    export no_proxy="localhost,127.0.0.1,localaddress,.localdomain.com"
    export http_proxy="http://127.0.0.1:7890"
    export https_proxy=$http_proxy
    export all_proxy=socks5://127.0.0.1:7890 # or this line
    curl www.google.com
    echo -e "\n"
    echo -e "\033[32m已开启代理\033[0m"
}

function proxy_off(){
    unset http_proxy
    unset https_proxy
    unset all_proxy
    echo -e "已关闭代理"
}
```

2. 从新加载配置文件 source ~/.zshrc

3. 执行 proxy_on


登陆 npm login


## 初始化项目 - 基本结构目录
1. 配置package.json文件
2. 创建index.js
4. 创建 README.md 文件


## 发布包
1. npm publish






## 招聘大侠
- 是否有开发或者维护过npm依赖


## 问题大师
- 你们开发的npm依赖具体做了哪些功能？
- 什么场景下需要独立出依赖托管到镜像中维护？


## 掌门人
- 依赖用的什么工具进行打包？
- 这个工具有什么特点、为什么不用某某某打包工具？


## 职场导演
- 如何维护版本？
- 发包流程是怎么样的？








