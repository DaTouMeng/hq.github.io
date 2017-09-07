///**
// * Created by Administrator on 2017/4/20.
// */
$(function() {

    $('#topNav-lis>li').on('mouseenter',function() {
        $(this).find('span').stop()    // 选择所有span
            .animate({ "top": "-25" },200)  // 修改top值
            .addClass('topNav-current')    // 添加类
            .end().find('b').stop()   // 拿到所有的b
            .animate({ "top": "18" },200)    // 动画修改top
            .end().siblings().find('span')   // 拿到所有兄弟下的span
            .removeClass('topNav-current');    // 删除类名
    });
    $('#topNav-lis>li').on('mouseleave',function() {
        $(this).find('span')    // 选择所有span
            .animate({ "top": "0" },200)
            .removeClass('topNav-current')// 修改top值
            .end().find('b').stop()   // 拿到所有的b
            .animate({ "top": "0" },200);   // 动画修改top
    });

    // dt 动画模块
    $('.syq-footer-l').find('dt').on('mouseenter',function() {
        $(this).children('div').stop().animate({"width":"200"},200);
    });
    $('.syq-footer-l').find('dt').on('mouseleave',function() {
        $(this).children('div').stop().animate({"width":"0"},200);
    });

    // dd 动画模块
    $('.syq-footer-l').find('dd').on('mouseenter',function() {
        $(this).children('div').stop().animate({"width":"200"},200);
    });
    $('.syq-footer-l').find('dd').on('mouseleave',function() {
        $(this).children('div').stop().animate({"width":"0"},200);
    });


    $(function(){
        $("#wxl_nav").children().click(function(){
            $(this).addClass("hover").siblings().removeClass("hover");
        });
    })
});

//侧边栏切换效果start

//侧边栏切换效果End

//返回顶部
$(".retop").on('click',function() {
    $('html,body').animate({
        "scrollTop": 0
    },300);
})
//注册右边客服图标事件
$(".bohaoBox").on("mouseover",function(){
    $(".bohaoBox").css("display","block");
})