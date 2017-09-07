/**
 * Created by Administrator on 2017/4/20.
 */



$(function(){

    $("#pipixia li").on("mouseover",function() {
        $(this).find(".top").stop()
            .animate({ "top": "20" },200)
            .end().find(".buttom").stop()
            .animate({ "top": "17" },200)
            .end().siblings().find(".top")
        $(this).find(".buttom").css("color","#ff0");
    });
    $("#pipixia li").on("mouseout",function() {
        $(this).find(".top").stop()
            .animate({ "top": "0" },200)
            .end().find(".buttom").stop()
            .animate({ "top": "37" },200)
        $(this).find(".buttom").css("color","#fff");
    });

    function $id(id){
        return document.getElementById(id);
    }

    function animate(element,target){
        clearInterval(element.timer);
        element.timer = setInterval(function (){
            var currentLeft = element.offsetLeft;
            var step = 18;
            currentLeft += target > currentLeft ? step : -step;
            element.style.left = currentLeft + "px";
            if(Math.abs(target - currentLeft) < step){
                clearInterval(element.timer);
                element.style.left = target + "px";
            }
        },10);
    }
    //ÂÖ²¥Í¼
    var box = $id("box");
    var inner = box.children[0];
    var imglist = inner.children[0];
    var imgs = imglist.children;
    var list = inner.children[1];
    var arrow = inner.children[2];
    var leftBtn = inner.children[2].children[0];
    var rightBtn = inner.children[2].children[1];
    var pWidth = inner.offsetWidth;
    var currentIndex = 0;
    for(var i = 0;i<imgs.length;i++){
        var e = document.createElement("i");
        e.innerHTML = (i+1);
        e.index = i;
        list.appendChild(e);
        e.onmouseover = function(){
            for(var j =0;j<list.children.length;j++){
                list.children[j].removeAttribute("class");
            }
            this.className = "current";
            currentIndex = this.index;
            var target = -currentIndex*pWidth;
            animate(imglist,target);
        }
    }
    list.children[currentIndex].className = "current";
    imglist.appendChild(imglist.children[0].cloneNode(true));

    var timer = null;
    function move(){

        if(currentIndex == imglist.children.length - 1){
            currentIndex = 0;
            imglist.style.left = "0px";
        }
        currentIndex++;
        if(currentIndex == imglist.children.length - 1){

            list.children[0].className = "current";
            list.children[list.children.length-1].removeAttribute("class");
        }else {
            for(var j = 0;j<list.children.length;j++){
                list.children[j].removeAttribute("class");
            }
            list.children[currentIndex].className = "current";
        }
        var target = -currentIndex*pWidth;
        animate(imglist,target);
    }
    box.onmouseover = function(){
        arrow.style.display = "block";
        clearInterval(timer);
    }
    box.onmouseout = function(){
        arrow.style.display = "none";
        timer = setInterval(move,3000);
    }
    timer = setInterval(move,3000);

    leftBtn.onclick = function () {
        if(currentIndex == 0){
            currentIndex = imglist.children.length - 1;
            imglist.style.left = -currentIndex*pWidth+"px";
        }
        currentIndex--;
        var target = -currentIndex*pWidth;
        animate(imglist,target);
        for (var j = 0; j < list.children.length; j++) {
            list.children[j].removeAttribute("class");
            list.children[currentIndex].className = "current";
        }
    }
    rightBtn.onclick = move;
//µ×²¿¶¯»­
    $(".last-footer-l").find("dt").on("mouseover",function() {
        $(this).children("div").stop().animate({"width":"200"},200);
    });
    $(".last-footer-l").find("dt").on("mouseout",function() {
        $(this).children("div").stop().animate({"width":"0"},200);
    });

    $(".last-footer-l").find("dd").on("mouseover",function() {
        $(this).children("div").stop().animate({"width":"200"},200);
    });
    $(".last-footer-l").find("dd").on("mouseout",function() {
        $(this).children("div").stop().animate({"width":"0"},200);
    });


})

