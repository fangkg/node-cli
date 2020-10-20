// 输入github地址，根据要求把代码模板下载下来
const { promisify } = require('util');
module.exports.clone = async function (repo, desc) {
    const download = promisify(require('download-git-repo'));
    // 进度
    const ora = require('ora');
    const process = ora(`下载....${repo}`);
    process.start();
    await download(repo, desc);
    process.succeed();
}
