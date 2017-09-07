/**
 * ��ȡ��������Ԫ����ʽ�ļ���д��
 */
function getStyle(element,attr){
    if(window.getComputedStyle){
        return getComputedStyle(element,null)[attr];
    }else{
        return element.currentStyle[attr];
    }
}
/**
 * ������������
 * @param element
 * @param obj
 * @param callback
 */
function animate_v4(element,obj,callback){
    //�����ʱ��
    clearInterval(element.timer);
    element.timer = setInterval(function(){
        var flag = true;
        //�����������ÿһ����ֵ��
        for(var attr in obj){
            //�ж�attr��ֵ
            if(attr === "zIndex"){
                //û����Ч����ֱ�Ӹ�ֵ
                element.style[attr] = obj[attr];
                //�ж�ֹͣ������
                var target = obj[attr];
                var current = target;
                if(current != target){
                    flag = false;
                }
            }else if(attr === "opacity"){
                //��ȡ��ǰֵ
                var current = parseFloat(getStyle(element,attr));
                //���㲽��
                current = current * 100;
                var target = obj[attr] * 100;
                var step = (target - current) / 10;
                //�ж����ϻ�������ȡ��
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                //��������
                current += step;
                element.style[attr] = current / 100;
                //�ж�ֹͣ������
                if(current != target){
                    flag = false;
                }
            }else{
                //��ȡ��ǰֵ
                var current = parseFloat(getStyle(element,attr));
                //���㲽��
                var target = obj[attr];
                var step = (target - current) / 10;
                //�ж�step������ȡ����������ȡ��
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current += step;
                //��������
                element.style[attr] = current + "px";
                //�ж�ֹͣ������
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
 * ��ȡҳ�����ȥ�ľ���ļ���д��
 */
function getScroll(){
    return {
        //�ȸ�֧��                  �ȸ衢��ie�����           ������Ͱ汾ie
        left:document.body.scrollLeft || window.pageXOffset || document.documentElement.scrollLeft || 0,
        top: document.body.scrollTop || window.pageYOffset || document.documentElement.scrollTop || 0
    };
}

window.onload = function (){
    /**
     * ���ֻ�����Ч
     * @type {Element}
     */
    //��ȡ����ӡ�С����
    var imgList = document.getElementById("imgList");
    //С���Ӽ���
    var img = imgList.children;
    //����ÿһ��С����
    for(var i = 0; i < img.length; i++){
        //���浱ǰС���ӵ�����
        img[i].index = i;
        //��ÿ��С����ע����������¼�
        img[i].onmouseover = function(){
            var index = this.index;
            //��ȡҪ�޸ĵĺ��������Ԫ��
            var theme = img[index].children[0].children[1];
            var des = img[index].children[0].children[2];
            var bg = img[index].children[0].children[3];
            //���û����������޸���ʽ
            animate_v4(theme,{left:25});
            animate_v4(des,{bottom:25});
            animate_v4(bg,{opacity:0.5});
        }
        //ע������Ƴ��¼�
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
     * ������������Ч
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
     * �̶�������
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