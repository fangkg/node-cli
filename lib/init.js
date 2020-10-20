const { promisify } = require('util');
const figlet = promisify(require('figlet')); // 放大文字
const clear = require('clear'); // 清除方法
const chalk = require('chalk'); // 粉笔方法
// log 高阶函数
const log = content => console.log(chalk.green(content));
const { clone } = require('./download');
const spawn = async (...args) => {
    const { spawn, spawnSync } = require('child_process');
    return new Promise(resolve => {
        const proc = spawn(...args);
        proc.stdout.pipe(process.stdout);
        proc.stderr.pipe(process.stderr);
        proc.on('close', () => {
            resolve()
        })
    })
}

module.exports = async name => {
    // 打印欢迎界面
    clear();
    const data = await figlet('Welcome');
    log(data);
    log(`创建项目：${name}`);
    // 初始化
    await clone('github:su37josephxia/vue-template', name);

    // 安装依赖
    log('安装依赖...')
    await spawn('cnpm', ['install'], { cwd: `./${name}` });
    log(chalk.green(`
    安装完成：
    To get Start:
    =================
        cd ${name}
        npm run serve
    =================`));
    
    // 下载安装完自动打开浏览器
    const open = require('open');
    // 打开浏览器
    open('http://localhost:8000');
    await spawnSync('npm', ['run', 'serve'], { cwd: `./${name}`}
}