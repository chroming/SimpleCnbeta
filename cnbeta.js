//获取新闻框架
var element=document.getElementById("allnews_all");
document.write(element.innerHTML);

//document.reload()
//var document=element.innerHTML;
//注意：先运行完上面的再运行下面的
//删除广告位
var coopa=document.getElementsByClassName("item cooperation");
coopa[0].parentNode.removeChild(coopa[0]);

//删除新闻预览图
var parent=document.getElementsByClassName("hd");
var child=document.getElementsByClassName("picno");
for (var i=0;i<40;i++){parent[i].removeChild(child[0])};

//删除”详细内容“等信息
var graypa=document.getElementsByClassName("item");
var graych=document.getElementsByClassName("tools repeat");
for (var j=0;j<40;j++){graypa[j].removeChild(graych[0])};

//添加分割线
var para=document.createElement("hr");
var clearmo=document.getElementsByClassName("clear");
for(var l=0;l<40;l++){clearmo[l].innerHTML="=================================================================="};


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
