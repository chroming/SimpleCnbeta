
if($("#today_read").text()==false){
    newspage()
}else{
    homepage()
}

function homepage() {

////以下是首页修改语句

    //删除广告位
    var coopa = $(".item.cooperation");
    coopa.remove();

    //删除右边广告模块
    //var rightch = $(".main_content_right>:not(.cb_box)");
    var rightch = $(".main_content_right>:not(section)");
    rightch.remove();

    //删除上部框架
    var headch = $(".cb_box.hd_main");
    headch.remove();

    //删除上部广告1
    var headadch = $(".content_box");
    headadch[0].remove();

    //删除上部广告2
    var headad2ch = $(".content_box.main_content_left .mt5:not(.allinfo)");
    headad2ch.remove();

    //删除底部信息
    var botinfo = $(".mt5.wrapper");
    botinfo.remove();

    //删除”详细内容“等信息
    var graych = $(".item:not(.cooperation) .tools.repeat");
    graych.remove();

    //删除底部广告.广告为异步生成,直接删除生成脚本即可
    //var botch = $('[id^=tanxssp-outer]');
    var botch = $('script[mod_name="tanxssp-main"]');
    botch.remove();

    //删除最上面模块
    var tinych = $('.tiny_bar');
    left = tinych.scrollLeft;
    width = tinych.scrollWidth;
    tinych.text('');



    $("body")[0].style.fontFamily="PingFangSC-Regular, Georgia, 'Times New Roman','Microsoft YaHei', '微软雅黑', STXihei, '华文细黑', sans-serif"

    /*
     //设置字体
     //var titlemo=document.getElementsByClassName("title");
     //for(var k=0;k<40;k++){var title=titlemo[k].getElementsByTagName("a");title[0].style.fontStyle="italic"};
     //for(var k=0;k<40;k++){var title=titlemo[k].getElementsByTagName("a");title[0].style.fontFamily="PingFangSC-Regular, sans-serif"};
     //for(var k=0;k<40;k++){var title=titlemo[k].getElementsByTagName("a");title[0].style.fontFamily="STHeiti"};

     //全文字体
     //document.getElementsByTagName("body")[0].style.fontFamily="PingFangSC-Regular, sans-serif"
     document.getElementsByTagName("body")[0].style.fontFamily="PingFangSC-Regular, Georgia, 'Times New Roman','Microsoft YaHei', '微软雅黑', STXihei, '华文细黑', sans-serif"

     //设置其他样式
     //标题
     //var titlemo=document.getElementsByClassName("title");
     //for(var k=0;k<40;k++){var title=titlemo[k].getElementsByTagName("a");title[0].style.fontSize="larger"};
     */
}

function newspage() {


////以下是新闻页代码

    //删除右边广告模块
    var newsrightch = $(".main_content_right>:not(.cber.hotcomments):not(#relation_box)");
    newsrightch.remove();

    //删除上部广告
    var newsheadadch = $(".tal");
    newsheadadch.remove();

    //删除左边顶/评论模块
    var newsleftcom = $("#left_art");
    newsleftcom.remove();

    //删除底部广告1
    var newsbotad1 = $(".body section:not(.article_content)");
    newsbotad1.remove();

    //删除底部广告2
    var newsbotad2ch = $(".mt5:not(.main_content)");
    newsbotad2ch.remove();

    //删除分享模块
    var newsbotshare = $(".bdsharebuttonbox");
    newsbotshare.remove();


    //删除最上面模块
    var tinych = $(".tiny_bar");
    left = tinych.scrollLeft;
    width = tinych.scrollWidth;
    tinych.text("");

    $("body")[0].style.fontFamily="PingFangSC-Regular, Georgia, 'Times New Roman','Microsoft YaHei', '微软雅黑', STXihei, '华文细黑', sans-serif"

}



