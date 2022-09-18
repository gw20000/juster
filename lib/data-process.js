module.exports = {

    getStrByteLen(str) {
        if (just.getDataType(str) !== "String") return 0
        let len = str.length
        for (var i = 0; i < str.length; i++) {
            if (str.charCodeAt(i) > 255) len++
        }
        return len
    },

    getDataType(data) {
        return Object.prototype.toString.call(data).split(' ')[1].slice(0, -1)
    },
    //给数字加千位符
    thousandSeparator(number) {
        var isLegal = (typeof number === "string" || typeof number === "number") && (!isNaN(number))
        if (isLegal) {
            return Number(number).toLocaleString("zh-cn")
        } else {
            console.log("非数值型无法添加千位符")
            return "not a number"
        }
    }



}


