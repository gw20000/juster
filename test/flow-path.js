const { flowPath } = require('./index.js')

console.log(flowPath)
let list = []
for (let i = 0; i < 50; i++) {
    list.push(i)
}


const cb = (listItem) => {
    console.log(listItem)
}
flowPath.throttleSendData(list, 9, 1000, cb)