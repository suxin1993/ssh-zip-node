/*
 * @Author: your name
 * @Date: 2021-11-04 18:57:38
 * @LastEditTime: 2021-12-02 21:42:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /suxin-blog-style/aaa-lib/ssh/index.js
 */
let Client = require('ssh2-sftp-client');
const path = require('path')
const glob = require('glob')
let sftp = new Client();
const localPath = '/Users/wanqu/Desktop/code/suxin-blog-style/aaa-lib/znote/docs/.vuepress/dist'
const remotePath = '/data/dist'
sftp.connect({
    host: '',
    port: 22,
    username: '',
    password: ''
}).then(() => {
    console.log('连接成功');
    // console.log('删除static');
    // return sftp.rmdir(`${remotePath}`, true)
})

// .then(async () => {
//     console.log('删除static成功');
//     console.log('创建static中js,css,img,fonts文件');
//     await sftp.mkdir(`${remotePath}`, true)
//     await sftp.mkdir(`${remotePath}/static`, true)
//     await sftp.mkdir(`${remotePath}/static/css`, true)
//     await sftp.mkdir(`${remotePath}/static/img`, true)
//     await sftp.mkdir(`${remotePath}/static/fonts`, true)
//     await sftp.mkdir(`${remotePath}/static/js`, true)
// }).then(() => {
//     console.log('创建static中js,css,img,fonts文件成功');

//     const fileLiat = glob.sync(`${localPath}/**/*.{js,css,png,eot,woff,ttf,html}`)
//     return Promise.all(
//         fileLiat.map(file => {
//             console.log(file);
//             const remoteFile = file.replace(localPath, remotePath)
//             return sftp.fastPut(file, remoteFile)
//         })
//     )
// }).then(() => {
//     console.log('成功');
//     sftp.end()
// }).catch((err) => {
//     console.log(err.message, 'catch error');
//     sftp.end()
// });