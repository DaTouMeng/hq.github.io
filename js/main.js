//������Ƶ���������ţ�������λ�Ķ���������Ч
$(function(){
    $(".videoTop,.newTop,.teamTop").hover(function(){
        $(this).stop().animate({"border-right-width":40,"border-left-width":40},800)
    },function(){
        $(this).stop().animate({"border-right-width":4,"border-left-width":4},800)
    })
    //������Ƶ���������ţ�������λ�Ķ���������Ч����

    //�����������ַ���

  videoHandle();
    /**
     * ��Ƶ�ַ��� ---˼·����ÿ��liд����
     */
      function videoHandle() {
          //�ֱ��li���ö���
          $(".videoImgListOne>li").on("mouseover",function(){
              var index = $(this).index();
              if(index == 0) {
                  $(this).stop().animate({"width": "518","height": "518"})
                      .next().stop().animate({"left": "524","height":"250","width": "204"})
                      .next().stop().animate({"left": "732","width": "204"})
                      .next().stop().animate({"left": "524","width": "134"})
                      .next().stop().animate({"left": "664","width": "134"})
                      .next().stop().animate({"left": "802","width": "134"});
              }else if(index == 1) {
                  $(this).stop().animate({"left":"318","width": "518","height": "518"})
                      .prev().stop().animate({"width": "300","height": "250"})
                      .end().next().stop().animate({"left": "842","width": "95","height":"250"})
                      .next().stop().animate({"left":"0","width":"140"})
                      .next().stop().animate({"left": "158","width": "140"})
                      .next().stop().animate({"left":"842","width":"95"});
              } else if(index == 2) {
                  $(this).stop().animate({"left": "420","width": "518","height": 518})
                      .prev().stop().animate({"left":"210","width":"204","height":"250"})
                      .prev().stop().animate({"left":"0","width":"204","height":"250"})
                      .end().end()
                      .next().stop().animate({"left":"0","width":"134","height":"250"})
                      .next().stop().animate({"left": "140","width":"134","height":"250"})
                      .next().stop().animate({"left":"280","width":"134","height":"250"});
              } else if(index == 3) {
                  $(this).stop().animate({"width":518,"left":"0"})
                      .next().stop().animate({"left": "520","width":"204"})
                      .next().stop().animate({"left":"726","width":"194"})
                      .end().end()
                      .prev().stop().animate({"left":"620","width":"300","height":"250"})
                      .prev().stop().animate({"left":"310","width":"300","height":"250"})
                      .prev().stop().animate({"left":"0","width":"300","height":"250"});
              } else if(index == 4) {
                  $(this).stop().animate({"left":"208","width":"518"})
                      .next().stop().animate({"width":"189","left":"730","height":"250"})
                      .end()
                      .prev().stop().animate({"width":"204","left":"0","height":"250"})
                      .prev().stop().animate({"left":"620","width":"300","height":"250"})
                      .prev().stop().animate({"left":"310","width":"300","height":"250"})
                      .prev().stop().animate({"left":"0","width":"300","height":"250"});
              } else {
                  $(this).stop().animate({"left": "414","width":"507","height":"250"})
                      .prev().stop().animate({"left":"206","width":"204","height":"250"})
                      .prev().stop().animate({"left":"0","width":"204","height":"250"})
                      .prev().stop().animate({"left":"620","width":"300","height":"250"})
                      .prev().stop().animate({"left":"310","width":"300","height":"250"})
                      .prev().stop().animate({"left":"0","width":"300","height":"250"});
              }
          });

          $(".videoImgListOne").on("mouseout",function(){
              $(".videoImgListOne>li").eq(0).stop().animate({left: 0, width: "300px", height: "250px"})
                  .next().stop().animate({left: "310px", width: "300px", height: "250px"})
                  .next().stop().animate({left: "620px", width: "300px", height: "250px"})
                  .next().stop().animate({left: 0, top: "268px", width: "300px", height: "250px"})
                  .next().stop().animate({left: "310px", top: "268px", width: "300px", height: "250px"})
                  .next().stop().animate({left: "620px", top: "268px", width: "300px", height: "250px"});
          });

      }
    //������Ƶ���ַ��ٽ���

    //�������ŵĵ��뵭��
    var lis = $("#list").find("li");
    lis.hover(function(){
        $(this).children(".listTop").stop().animate({"opacity":0},500)
        $(this).children(".listTopHidden").stop().animate({"opacity":1},500)
    },function(){
        $(this).children(".listTop").stop().animate({"opacity":1},500)
        $(this).children(".listTopHidden").stop().animate({"opacity":0},500)
    })
    //�������ŵĵ��뵭������

    //������λ��Ч


    //������λ��Ч����

    //�ײ���Ч
   var lisB = $(".footAbout,.footNews,.footWork,.footServe").find("li");
    lisB.hover(function(){
        lisB.css("backgroundColor","white");
        $(this).css("backgroundColor","hotpink")
    },function(){
        lisB.css("backgroundColor","white");
    })
    //�ײ���Ч����
})

