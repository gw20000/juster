module.exports = {

    nextTick(fn) {
        // return Promise.resolve({ then: (resolve) => { resolve(fn()) } });// ❓为什么返回的Promise是pending ？ 
        return Promise.resolve().then(() => fn())
        // return new Promise((resolve, reject) => resolve()).then(() => fn());

    }
}







