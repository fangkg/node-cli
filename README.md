# node-cli
# 创建工程
mkdir vue-auto-cli

cd vue-auto-cli

npm init -y

npm i commander download-git-repo ora handlebars figlet clear chalk open -s

#bin/cli.js

指定脚本解释器为node
#!/usr/bin/env node

package.json

"bin": {
    "cli": "./bin/cli.js"
}

将npm模块链接到对应的运行项目中去 npm link

# 定制命令行界面

# 打印欢迎界面

# 克隆脚手架

# 安装依赖

# 启动项目

