module.exports = {

    nextTick(fn) {
        // return Promise.resolve({ then: (resolve) => { resolve(fn()) } });// ❓为什么返回的Promise是pending ？ 
        return Promise.resolve().then(() => fn())
        // return new Promise((resolve, reject) => resolve()).then(() => fn());

    },
    /**
     * 
     * @param {array} list    一组数据
     * @param {number} qps    一次并发处理的数据量
     * @param {ms} duration   每次并发处理之间的间隔
     * @param {fn} cb         回调函数 
     * @returns 
     */
    throttleSendData(list, qps, duration = 1000, cb) {
        if (typeof duration == 'function') {
            cb = duration
            duration = 1000
        }
        const len = list.length
        let timer = null
        // qps = parseInt(qps)
        if (!['number', 'biginit'].includes(typeof qps)) throw new TypeError("the second param of function 'throttleSendData' must be a number or biginit")
        qps = qps > len ? len : qps
        if (qps <= 0) return
        let j = 0
        // console.time('throttle')
        timer = setInterval(timerHandler, duration)

        function timerHandler() {
            // console.log('timeHandler')
            for (let i = 0; i < qps; i++) {
                cb(list[j])
                j++
                if (j == len) {
                    // console.timeEnd('throttle')
                    clearInterval(timer)
                    return
                }
            }
        }

    }
}








