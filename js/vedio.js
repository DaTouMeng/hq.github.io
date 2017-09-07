function getStyle(element,attr){
    if(getComputedStyle){
        return getComputedStyle(element,null)[attr];
    }else {
        return element.currentStyle[attr];
    }
}


function animate_v6(element,obj,callback){
    clearInterval(element.timer);
    element.timer = setInterval(function(){
        var flag = true;
        for(var attr in obj){
            if(attr == "opacity"){
                var current = parseFloat(getStyle(element,attr));
                var target = obj[attr];
                current *= 100;
                target *= 100;
                var step = (target - current) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current += step;
                element.style[attr] = current / 100;
            }else if(attr == "zIndex"){
                element.style[attr] = obj[attr];
                var target = obj[attr];
                var current = target;

            } else {
                var current = parseFloat(getStyle(element,attr));
                var target = obj[attr];
                var step = (target - current) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current += step;
                element.style[attr] = current + "px";
            }
            if(target != current){
                flag = false;
            }

        }
        if(flag){
            clearInterval(element.timer);
            callback && callback();
        }
    },20);
}




