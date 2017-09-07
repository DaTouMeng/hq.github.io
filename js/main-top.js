/**
 * Created by Administrator on 2017/4/22.
 */
/**
 * @author mzn
 */
$(function(){
    /**顶部轮播图**/
    headSliderRun();
    /**头部导航栏---header**/
    navRun();
    /**最新活动 --activity**/
       //标题部分
    $(".activity-head>a").on("mouseover",function(){
        $(this).stop().animate({borderWidth:"40px"});
    });
    $(".activity-head>a").on("mouseout",function(){
        $(this).stop().animate({borderWidth:"5px"});
    });
       //内容--自动轮播图
    activitySliderRun();
    /**最新案例---case**/
       //标题部分
    $(".case-head>a").on("mouseover",function(){
        $(this).stop().animate({borderWidth:"40px"});
    });
    $(".case-head>a").on("mouseout",function(){
        $(this).stop().animate({borderWidth:"5px"});
    });
       //内容
    caseHandle();

    /**
     * 顶部轮播图---淡入淡出
     */
    function headSliderRun(){
        //思路：通过层级显示图片，fadeIn,fadeOut
        var  imglist = $("#ul-imglist").children();
        var header_crilelist= $(".header-slider-crilelist");
        var currIndex =0;//当前索引
        var zIndex = 2; //通过层级控制图片显示
        var timeid = null; //设置定时器
        //动态创建圆点
        for(var i =0;i<imglist.length;i++){
            var crile = $("<i>");
            if(i==0){
                crile.addClass("current");
            }
            crile.appendTo(header_crilelist);
        }

        //鼠标移入，当前小圆点改变样式，并且切换图片---排他
        $(".header-slider-crilelist>i").on("mouseover",function(){
            //设置小圆点当前样式，其他移除样式
            $(this).addClass("current").siblings("i").removeClass("current");
            var index = $(this).index(); //获取小圆点当前索引
            currIndex = index; //同步索引
            //通过索引取到当前对应的图片--改变层级--淡入---其他图片淡出，每次动画前先stop
            $(".header-slider>ul>li").eq(index).css("zindex",zIndex).stop().fadeIn(1000).siblings("li").stop().fadeOut(1000);
        });
        //自动播放,鼠标移入停止，移出继续
        //自动播放
        timeid = setInterval(autoRun,2000);
        //鼠标移入，停止播放
        $(".header-slider").on("mouseover",function(){
            clearInterval(timeid);
        });
        //移出继续
        $(".header-slider").on("mouseout",function(){
            timeid = setInterval(autoRun,2000);
        });
        function autoRun(){
            currIndex++;
            currIndex = currIndex>imglist.length-1? 0 : currIndex;//当超过图片数量重置为0
            //当前小圆点设置样式
            $(".header-slider-crilelist>i").eq(currIndex).addClass("current").siblings("i").removeClass("current");
            //图片切换
            $(".header-slider>ul>li").eq(currIndex).css("zindex",zIndex).stop().fadeIn(1000).siblings("li").stop().fadeOut(1000);
        }
    }
    /**
     * 头部导航栏--固定定位，鼠标移入移出事件
     */
    function navRun(){
        /**固定定位**/
            //思路：当鼠标滚出一定距离(导航栏上部分的高度)，固定导航栏
        $(window).on("scroll",function(){
            if($(window).scrollTop() > $(".header-slider").height()){
                //固定导航栏
                $(".header-nav").css({position:"fixed","left":0,"top":0,"zIndex":999});
                $(".activity").css("marginTop",$(".header-nav").height()); //解决
            }else{
                $(".header-nav").css({position:"static","left":0,"top":0});
                $(".activity").css("marginTop",0);
            }
        });
        $(".header-nav-list>ul>li>a").on("mouseenter",function(){
            //鼠标移入，当前li变化样式
            $(this).children("span").eq(0).stop().animate({top:"18px"},150);
            $(this).children("i").eq(0).addClass("current").stop().animate({top:"-25px"},200);

        });
        $(".header-nav-list>ul>li").on("mouseleave",function(){
            //鼠标离开，去除样式
            $(".header-nav-list>ul>li>a>span").stop().animate({top:0},150);
            $(".header-nav-list>ul>li:first").siblings("li").children().children("i").removeClass("current"); //除了第一个其他变化
            $(".header-nav-list>ul>li>a>i").stop().animate({top:0},200);
        });

    }
    /**
     * 最新案例 ----思路：遮罩层包括幕布+文字两个盒子，幕布改变透明度，文字蒙板通过改变bottom
     */
    function caseHandle(){
        /**内容上半部分**/
        //效果：鼠标移入--文字变色，opacity变为0.4，遮罩层动画出现
        $(".case-content-top>li").hover(function(){
            //文字效果
            $(this).find("span").css("color","#EC82B7");
            //遮罩---幕布和文字蒙板
            $(this).children().children(".case-c-imgMaskBack").stop().animate({opacity:"0.4"});
            $(this).children().children(".case-c-imgMask").stop().animate({opacity:"1",bottom:"75px",zIndex:2});
        },function(){
            $(".case-content-descri>span").css("color","#666");
            $(this).children().children(".case-c-imgMaskBack").stop().animate({opacity:"0"});
            $(this).children().children(".case-c-imgMask").stop().animate({opacity:"0",bottom:"0",zIndex:2});
        });
    }
    /**
     *最新活动--内容--- 旋转木马效果
     */
    function activitySliderRun(){
        var len = $(".activity-content>ul").children().length;//图片长度
        var index_2 = 0;//当前正中间显示的索引
        var intervaltimer = 0;
        var timer = 800;
        slider(); //解决第一次初始化的时候出现的问题
        slider();
        intervaltimer = setInterval(slider,1800);//自动轮播
        $(".activity-content").hover(function(){
            clearInterval(intervaltimer);
        },function(){
            intervaltimer = setInterval(slider,2000);//自动轮播
        });

        function slider(){
            var prev,next,hidden;
            var curr = $("#active"+index_2); //当前正中显示
            //头尾交接
            if(index_2==0){
                prev = $("#active"+(len-1)); //当前正中是第0张， 则上一张是最后一张
            }else{
                prev = $("#active"+(index_2-1));//否则上一张是序号减一
            }
            if(index_2 == (len-1)){
                next = $("#active0"); //当前正中是最后一张，则下一张是第一张
            }else{
                next = $("#active"+(index_2+1)); //否则序号加一
            }
            //设置隐藏的
            if(index_2-2>=0){									//index_2						2		3		4
                hidden=$("#active"+(index_2-2));//									0		1		2
            }else{													//index_2		0		1
                hidden=$("#active"+(len+index_2-2));//			3		4
            }
            //思路二：设置隐藏，通过排他，除了prev，curr，next的索引，其他的索引为隐藏
            //hidden =  prev.siblings().siblings(curr).siblings(next);
            prev.css("z-index","5");			//点击prev按钮  让prev位置上的这张图片 层级最高 显示
            next.css("z-index","1");
            curr.css("z-index","2");
            hidden.css("z-index","1")
            //当index_2自减，各图片往右运动效果
            hidden.css({width:"180px",height:"127px",top:"60px",left:"0px",opacity:0});
            // hidden --> prev 出现蒙板
            hidden.find("span").css("opacity",0.6);
            hidden.stop(true,true).animate({width:"350px",height:"247px",top:"40px",left:"0px",opacity:1},timer);
            // curr --> next
            curr.find("span").css("opacity",0.6);
            curr.stop(true,true).animate({width:"350px",height:"247px",top:"40px",left:"700px",opacity:1},timer);
            // next --> hidden
            next.find("span").css("opacity",0);
            next.stop(true,true).animate({width:"180px",height:"127px",top:"60px",left:"1050px",opacity:0},timer);
            //prev  -->  curr     prev中的图片li轮换到curr的位置      其他一次轮换
            prev.find("span").css("opacity",0); //成为正中那张，去除遮罩
            prev.stop(true,true).animate({width:"450px",height:"317px",left:"300px",top:0,opacity:1},timer);
            index_2--;
            //限制index_2的范围
            if(index_2==len) index_2=0;
            if(index_2<0) index_2=len+index_2;
        }
    }
});
