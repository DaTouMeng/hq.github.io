/**
 * 获取计算过后的元素样式的兼容写法
 */
function getStyle(element,attr){
    if(window.getComputedStyle){
        return getComputedStyle(element,null)[attr];
    }else{
        return element.currentStyle[attr];
    }
}
/**
 * 缓动动画函数
 * @param element
 * @param obj
 * @param callback
 */
function animate_v4(element,obj,callback){
    //清除计时器
    clearInterval(element.timer);
    element.timer = setInterval(function(){
        var flag = true;
        //遍历对象里的每一个键值对
        for(var attr in obj){
            //判断attr的值
            if(attr === "zIndex"){
                //没动画效果，直接赋值
                element.style[attr] = obj[attr];
                //判断停止的条件
                var target = obj[attr];
                var current = target;
                if(current != target){
                    flag = false;
                }
            }else if(attr === "opacity"){
                //获取当前值
                var current = parseFloat(getStyle(element,attr));
                //计算步长
                current = current * 100;
                var target = obj[attr] * 100;
                var step = (target - current) / 10;
                //判断向上还是向下取整
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                //重新设置
                current += step;
                element.style[attr] = current / 100;
                //判断停止的条件
                if(current != target){
                    flag = false;
                }
            }else{
                //获取当前值
                var current = parseFloat(getStyle(element,attr));
                //计算步长
                var target = obj[attr];
                var step = (target - current) / 10;
                //判断step是向上取整还是向下取整
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current += step;
                //重新设置
                element.style[attr] = current + "px";
                //判断停止的条件
                if(current != target){
                    flag = false;
                }
            }
        }
        if(flag){
            clearInterval(element.timer);
            callback && callback();
        }
    },20);
}

/**
 * 获取页面滚出去的距离的兼容写法
 */
function getScroll(){
    return {
        //谷歌支持                  谷歌、高ie、火狐           火狐，低版本ie
        left:document.body.scrollLeft || window.pageXOffset || document.documentElement.scrollLeft || 0,
        top: document.body.scrollTop || window.pageYOffset || document.documentElement.scrollTop || 0
    };
}

window.onload = function (){
    /**
     * 文字缓动特效
     * @type {Element}
     */
    //获取大盒子、小盒子
    var imgList = document.getElementById("imgList");
    //小盒子集合
    var img = imgList.children;
    //遍历每一个小盒子
    for(var i = 0; i < img.length; i++){
        //保存当前小盒子的索引
        img[i].index = i;
        //给每个小盒子注册鼠标移入事件
        img[i].onmouseover = function(){
            var index = this.index;
            //获取要修改的盒子里面的元素
            var theme = img[index].children[0].children[1];
            var des = img[index].children[0].children[2];
            var bg = img[index].children[0].children[3];
            //调用缓动函数，修改样式
            animate_v4(theme,{left:25});
            animate_v4(des,{bottom:25});
            animate_v4(bg,{opacity:0.5});
        }
        //注册鼠标移出事件
        img[i].onmouseout = function(){
            var index = this.index;
            var theme = img[index].children[0].children[1];
            var des = img[index].children[0].children[2];
            var bg = img[index].children[0].children[3];
            animate_v4(theme,{left:-110});
            animate_v4(des,{bottom:-25});
            animate_v4(bg,{opacity:0});
        }
    }


    /**
     * 导航栏文字特效
     */
    var ul = document.getElementById("nav-lis");
    var lis = ul.children;
    for(var i = 0; i < lis.length; i++){
        lis[i].index = i;
        lis[i].onmouseover = function(){
            var index = this.index;
            var zh = lis[index].children[0].children[0];
            var en = lis[index].children[0].children[1];
            en.className = "nav-current";
            animate_v4(zh,{"top":18});
            animate_v4(en,{"top":-25});
        }
        lis[i].onmouseout = function(){
            var index = this.index;
            var zh = lis[index].children[0].children[0];
            var en = lis[index].children[0].children[1];
            en.className = "";
            animate_v4(zh,{"top":0});
            animate_v4(en,{"top":0});
        }
    }


    /**
     * 固定导航栏
     */
    var nav = document.getElementById("nav");
    var container = document.getElementById("container")
    window.onscroll = function(){
        var top = getScroll().top;
        if(top > nav.offsetTop){
            nav.className = "nav fixed"
            container.style.marginTop = nav.offsetHeight + "px";
        }else{
            nav.className = "nav"
            container.style.marginTop = 0 + "px";
        }
    }
}