var rule = {
    title:'ss直播',
    host:'https://api.zbjk.live',
    homeUrl:'/txt/json.txt',
    url:'/txt/fyclass',
    class_name:'夜猫子VIP直播',
    class_url:'json.txt',
    headers:{
        'User-Agent':'MOBILE_UA',
    },
    timeout:5000,
    limit:200,
    play_parse:true,
    lazy:'',
    一级:'json:pingtai;title;xinimg;Number;address',
    二级:'js:var d=[];var jo=JSON.parse(request(input)).zhubo;VOD={};for(var i=0;i<jo.length;i++){d.push({title:jo[i].title,url:jo[i].address})}VOD.vod_play_from="播放源";VOD.vod_play_url=d.map(function(it){return it.title+"$"+it.url}).join("#");setResult(d);',
    搜索:'*',
}