module.exports = {

    //页面滚动到某个一个父组件的某个子组件的位置（dom操作）
    scrollFn(fatherCompIns, childClassName) {
        if (typeof childClassName !== 'string' || childClassName.trim().length == 0) return
        if (just.getDataType(fatherCompIns?.$children) !== 'Array') return
        const children = fatherCompIns.$children.map(comp => comp.$el)
        const child = children.filter(ele => ele.nodeName == "DIV" && Array.prototype.includes.call(ele.classList, childClassName))[0]
        if (child) window.scroll(0, child.offsetTop)
    }

}