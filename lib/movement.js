module.exports = {
    //js动画 之  定时器动画
    //直线运动 ( s =  start + dis ;  dis = add a speed(direction) distance  per unit time)
    /**
     * 
     * @param {DOM} dom 
     * @param {Number} start 
     * @param {Number} targetDis 
     * @param {String: left/right/top/bottom/scrollLeft/scrollTop} dir 
     * @returns  Promise
     */
    moveTo(dom, start, targetDis, dir, speed = 2) {

        return new Promise((resolve, reject) => {
            let dis = 0;
            // let speed = 2;
            if (targetDis < 0) speed *= -1; //速度方向
            let t = setInterval(() => {
                dis += speed;
                //超过目标距离，归位
                if (Math.abs(dis) > Math.abs(targetDis)) {//无论是向左动，还是，向右动，我们都可以把它抽取成绝对值的方式。

                    clearInterval(t);
                    t = null;
                    resolve()
                }
                //未超过目标距离，继续运动
                if (dir === 'scrollLeft' || dir === 'scrollTop') {
                    dom[dir] = start + dis;
                }
                else dom.style[dir] = start + dis + "px";

            }, 16.7); //这种方式： 第一次加1步，第二次加2步，.... 以保证每次都是向前的状态
        });

    },



    //js动画 之 逐帧动画
    //直线运动
    move(dom, start, target, dir, speed, callback) {
        let stop = false
        let handle
        if (target - start < 0) speed *= -1
        const targetDis = Math.abs(start - target)
        const isScroll = dir === 'scrollLeft' || dir === 'scrollTop'
        if (isScroll) handle = animate2()
        else handle = animate1()

        function animate1() {
            //逐帧动画
            function updateAnimation() {
                if (stop) return
                //超出目标距离回正
                if (Math.abs(start - parseInt(dom.style[dir])) >= targetDis) {
                    dom.style[dir] = target + 'px'
                    return callback()
                }
                //运动
                dom.style[dir] = parseInt(dom.style[dir]) + speed + 'px'
                //递归（连续动画）
                requestAnimationFrame(updateAnimation)//按照浏览器渲染帧的频率 来 执行js
            }
            requestAnimationFrame(updateAnimation)


            //暂停
            function toggleStop() {

                stop = !stop
                if (stop) {
                    console.log('stop1')
                }
                else requestAnimationFrame(updateAnimation)
            }
            return toggleStop

        }

        function animate2() {

            function updateAnimation() {
                if (stop) return
                if (Math.abs(start - dom[dir]) >= targetDis) {
                    dom[dir] = target
                    return callback()
                }

                dom[dir] = dom[dir] + speed;

                requestAnimationFrame(updateAnimation)
            }
            requestAnimationFrame(updateAnimation)


            //暂停
            function toggleStop() {

                stop = !stop
                if (stop) {
                    console.log('stop2')
                }
                else requestAnimationFrame(updateAnimation)
            }
            return toggleStop
        }

        return handle
    }



}