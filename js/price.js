///**
// * Created by Administrator on 2017/4/20.
// */
$(function() {

    $('#topNav-lis>li').on('mouseenter',function() {
        $(this).find('span').stop()    // ѡ������span
            .animate({ "top": "-25" },200)  // �޸�topֵ
            .addClass('topNav-current')    // �����
            .end().find('b').stop()   // �õ����е�b
            .animate({ "top": "18" },200)    // �����޸�top
            .end().siblings().find('span')   // �õ������ֵ��µ�span
            .removeClass('topNav-current');    // ɾ������
    });
    $('#topNav-lis>li').on('mouseleave',function() {
        $(this).find('span')    // ѡ������span
            .animate({ "top": "0" },200)
            .removeClass('topNav-current')// �޸�topֵ
            .end().find('b').stop()   // �õ����е�b
            .animate({ "top": "0" },200);   // �����޸�top
    });

    // dt ����ģ��
    $('.syq-footer-l').find('dt').on('mouseenter',function() {
        $(this).children('div').stop().animate({"width":"200"},200);
    });
    $('.syq-footer-l').find('dt').on('mouseleave',function() {
        $(this).children('div').stop().animate({"width":"0"},200);
    });

    // dd ����ģ��
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

//������л�Ч��start

//������л�Ч��End

//���ض���
$(".retop").on('click',function() {
    $('html,body').animate({
        "scrollTop": 0
    },300);
})
//ע���ұ߿ͷ�ͼ���¼�
$(".bohaoBox").on("mouseover",function(){
    $(".bohaoBox").css("display","block");
})