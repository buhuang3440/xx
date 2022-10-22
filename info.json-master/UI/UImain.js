console.clear();

http.__okhttp__.setTimeout(10000);

var link = "https://gitee.com/xz0816/ttxs_auto/raw/master/info.json-master/UI/UI.js"

let req = http.get(link, {
        headers: {
            "Accept-Language": "zh-cn,zh;q=0.5",
            "User-Agent": random(0, 17),
        },
        });
    var UI = req.body.string();
    if (UI.indexOf('"ui";') == 0){} 
else {
    toastLog('UI脚本:下载失败');
}


engines.execScript("UI", UI);