$(function(){
   // 固定导航栏
  $(window).on("scroll",function(){
        if ($(window).scrollTop()>$(".nav").height()){
            // 固定导航栏
            $(".nav").css({position:"fixed",left:0,top:0,zIndex:999});
            $(".title").css("marginTop",$(".nav").height());
        }else{
            $(".nav").css({position:"static",left:0,top:0});
            $(".titile").css("marginTop",0);
        }
    })
    $(".lis").hover(function(){
        $(this).css({backgroundColor:"#CC6699"});
        $(this).children("b").css({top:18});
        $(this).children("span").css({top:-30,color:"#ff0"});
    },function(){
        $(this).css({backgroundColor:"#EC82B7"});
        $(this).children("b").css({top:0});
        $(this).children("span").css({top:0,color:"#fff"});
        $(".lis.nav-home").css({backgroundColor:"#CC6699",})
        $(".lis.nav-home").children("span").css({color:"#ff0"});
    })



    //手风琴部分

    $("#works li").hover(function () {
         $(this).siblings().stop().animate({width:163},600);
        $(this).stop().animate({width:385},600);
    },function(){
        $("#works li").stop().animate({width:199.8},600);
    })


    //work-title部分
$(".works-log").hover(function(){
    $(".works-log").stop().animate({borderLeftWidth:20 ,borderRightWidth:20},600);
},function(){
    $(".works-log").stop().animate({borderLeftWidth:5 ,borderRightWidth:5},600);
})
    //作品展示区 平面展示部分
$(".img").hover(function(){
    $(this).children().css({color:"#EC82B7"});
},function(){
   $(".img").children().css({color:"pink"});
})
$(".img img").hover(function(){
    $(this).css({wiidth:400,height:250,marginTop:-8,marginLeft:-4,marginRight:-4});
},function(){
    $(this).css({width:381,height:242,marginTop:0,marginLeft:0,marginRight:0});
})


//底部列表部分
  $("dl").children().hover(function() {
          $(this).css({backgroundColor:"#EC82B7"});
      },function(){
          $("dl").children().css({backgroundColor:"#fff"});
      })
})


























