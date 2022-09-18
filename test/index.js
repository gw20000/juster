const fs = require('fs')
const path = require('path')
let dirPath = path.resolve(__dirname, '../lib');
let files = fs.readdirSync(dirPath); // 该文件夹下的所有文件名称 (文件夹 + 文件)

let modulesNames = files.filter(filename => filename != 'index.js')

function dealFileName(fileName) {
    let arr = fileName.substring(0, fileName.length - 3).split('-')
    if (arr.length > 1) {
        arr[1] = arr[1].replace(/^./, arr[1][0].toUpperCase())
    }
    return arr.join('')
}
modulesNames.forEach(fileName => { exports[dealFileName(fileName)] = require(path.resolve(__dirname, `../lib/${fileName}`)) })

