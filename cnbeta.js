////注意!!!该js已不再更新.转为更新cnbetajQ.js.

if(document.getElementById("today_read")){
    homepage()
}else{
    newspage()
}

function homepage() {

////以下是首页修改语句
//获取新闻框架
//var element=document.getElementById("allnews_all");
//document.write(element.innerHTML);

//document.reload()
//var document=element.innerHTML;
//注意：先运行完上面的再运行下面的
//删除广告位
    var coopa = document.getElementsByClassName("item cooperation");
    coopa[0].parentNode.removeChild(coopa[0]);

//删除右边框架
    var rightch = document.getElementsByClassName("main_content_right");
    rightch[0].parentNode.removeChild(rightch[0]);

//删除上部框架
    var headch = document.getElementsByClassName("cb_box hd_main");
    headch[0].parentNode.removeChild(headch[0]);

//删除上部广告1
    var headadch = document.getElementsByClassName("content_box");
    var headadpa = document.getElementsByClassName("wrapper");
    headadpa[1].removeChild(headadch[0]);

//删除上部广告2
    var headad2ch = document.getElementsByClassName("mt5");
    var headad2pa = document.getElementsByClassName("content_box main_content_left");
    headad2pa[0].removeChild(headad2ch[1]);

//删除底部信息
    var botinfo = document.getElementsByClassName("mt5 wrapper");
    botinfo[0].parentNode.removeChild(botinfo[0]);

//删除”详细内容“等信息
    var graypa = document.getElementsByClassName("item");
    var graych = document.getElementsByClassName("tools repeat");
    for (var j = 0; j < 40; j++) {
        graypa[j].removeChild(graych[0])
    }
    ;

    /*
//删除底部广告//非固定格式暂时不匹配
    var botch = document.getElementsByClassName("wrapper")[1].getElementsByTagName("div");
    var botch = document.getElementById("tanxssp-outer-conmm_10007624_104555_13330262");
    botch.parentNode.removeChild(botch);
    */

//删除最上面模块
    var tinych = document.getElementsByClassName("tiny_bar");
    left = tinych[0].scrollLeft;
    width = tinych[0].scrollWidth;
    tinych[0].innerHTML = ""
//由于改变宽度会改变文字显示,暂时不改宽度
//var allnews=document.getElementById("allnews_all").style.width=width+'px';
//var allnews=document.getElementById("all_news_list").style.width=width+'px';
//var allnews=document.getElementsByClassName("mt5 allinfo")[0].style.width=width+'px';
//var allnews=document.getElementsByClassName("content_box main_content_left")[0].style.width=width+'px';
//tinych[0].parentNode.removeChild(tinych[0]);


    /*
     //删除新闻预览图
     var parent=document.getElementsByClassName("hd");
     var child=document.getElementsByClassName("picno");
     for (var i=0;i<40;i++){parent[i].removeChild(child[0])};
     //for (i=0;i<40;i++){child[i].parentNode.removeChild(child[0])};
     //设置字体
     //var titlemo=document.getElementsByClassName("title");
     //for(var k=0;k<40;k++){var title=titlemo[k].getElementsByTagName("a");title[0].style.fontStyle="italic"};
     //for(var k=0;k<40;k++){var title=titlemo[k].getElementsByTagName("a");title[0].style.fontFamily="PingFangSC-Regular, sans-serif"};
     //for(var k=0;k<40;k++){var title=titlemo[k].getElementsByTagName("a");title[0].style.fontFamily="STHeiti"};

     //全文字体
     //document.getElementsByTagName("body")[0].style.fontFamily="PingFangSC-Regular, sans-serif"
     document.getElementsByTagName("body")[0].style.fontFamily="PingFangSC-Regular, Georgia, 'Times New Roman','Microsoft YaHei', '微软雅黑', STXihei, '华文细黑', sans-serif"

     //添加分割线
     var para=document.createElement("hr");
     var clearmo=document.getElementsByClassName("clear");
     for(var l=0;l<40;l++){clearmo[l].innerHTML="=================================================================="};
     //设置其他样式
     //标题
     //var titlemo=document.getElementsByClassName("title");
     //for(var k=0;k<40;k++){var title=titlemo[k].getElementsByTagName("a");title[0].style.fontSize="larger"};
     */
}

function newspage() {


////以下是新闻页代码

//删除右边框架
    var newsrightch = document.getElementsByClassName("main_content_right");
    newsrightch[0].parentNode.removeChild(newsrightch[0]);

//删除上部广告
    var newsheadadch = document.getElementsByClassName("tal");
    newsheadadch[0].parentNode.removeChild(newsheadadch[0]);

//删除左边顶/评论模块
    var newsleftcom = document.getElementById("left_art");
    newsleftcom.parentNode.removeChild(newsleftcom);

//删除底部广告1
    var newsbotad1 = document.getElementsByTagName("section");
    newsbotad1[5].parentNode.removeChild(newsbotad1[5]);

//删除分享模块
    var newsbotshare = document.getElementsByClassName("bdsharebuttonbox");
    newsbotshare[0].parentNode.removeChild(newsbotshare[0]);

//删除底部广告2
    var newsbotad2ch = document.getElementsByClassName("mt5");
    for (var m = 1; m < 5; m++) {
        newsbotad2ch[1].parentNode.removeChild(newsbotad2ch[1])
    }
//newsbotad1[5].parentNode.removeChild(newsbotad1[5]);

//删除最上面模块
    var tinych = document.getElementsByClassName("tiny_bar");
    left = tinych[0].scrollLeft;
    width = tinych[0].scrollWidth;
    tinych[0].innerHTML = ""
}



