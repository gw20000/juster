module.exports = {

    addUp(...args) {
        try {

            return args.reduce((a, b) => {
                return a + b;
            }, 0);

        }
        catch (e) {
            console.log("当前环境不支持剩余参数");
            return [].reduce.call(arguments, (a, b) => {
                return a + b;
            }, 0);

        }
    },
    /**
       * 
       * @param {String,Number} num 
       * @param {Number} f 
       * @returns  {Float,undefined}
       */
    myFixed(num, f = 0) {
        if (isNaN(parseFloat(num))) {
            console.warn(`parameter1 num : ${num} is not a string number or  number`)
            return NaN
        }
        return (Math.round((parseFloat(num) + Number.EPSILON) * Math.pow(10, f)) / Math.pow(10, f)).toFixed(f)
    }



}