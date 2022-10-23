"ui";

importClass(java.net.HttpURLConnection);
importClass(java.net.URL);
importClass(java.io.File);
importClass(java.io.FileOutputStream);
importClass(android.graphics.Color);
ui.statusBarColor("#FF4FB3FF")
ui.layout(
    <vertical>
        <appbar>
            <toolbar id="toolbar" title="公告:" bg="#ff4fb3ff" />
        </appbar>
        <vertical id="ver1" visibility="visible">
            <progressbar id="jdt" w="*"h="25"margin="10 0 10 0"  indeterminate="true" style="@style/Base.Widget.AppCompat.ProgressBar.Horizontal"/>
            <text text="网络检测,请确保网络可以连接..."margin="20 15 0 0" h="auto"textSize="16"/>
        </vertical>
        <vertical id="ver2"visibility="gone">
            <vertical padding="16 0">
                <text id="tex" text="h"layout_gravity="center_vertical"textColor="#757575" textStyle="bold"textSize="18"/>
                <img  id="png"src="file:///sdcard/vgz.png" layout_gravity="center" margin="0 16 0 0" w="auto"h="auto"/>
            </vertical>
        <button id="sx" layout_gravity="center" textSize="24" text="启动软件" style="Widget.AppCompat.Button.Colored" w="280" h="66"/>
      </vertical> 
         </vertical>
);

http.__okhttp__.setTimeout(10000);

// 下载并运行脚本
ui.sx.click(function () {
    threads.shutDownAll();
 
    threads.start(function () {
        toastLog("启动中. . .")
        var link = "https://gitee.com/xz0816/ttxs_auto/raw/master/info.json-master/UI/UI.js"
 
        let resc = http.get(link, {
                headers: {   //通过headers修复文件过大网络无法下载
                    "Accept-Language": "zh-cn,zh;q=0.5",
                    "User-Agent": random(0, 17),
                },
                });
            var xxqg = resc.body.string();
            if (resc != 0){} 
        else {
            toastLog('脚本下载失败');
        }
        engines.execScript("xxqg", xxqg);
        //engines.execScriptFile("./xxqg.js");
    });
});

threads.start(function() {
    
        let version = 20221020; //当前应用版本号
        var r = http.get("https://gitee.com/xz0816/ttxs_auto/raw/master/ver/ncNetgx.json");
        var s = r.body.json();
        if (version < s.应用内测) {
            dialogs.build({
                //对话框标题
                title: '有新版本！',
                //对话框内容
                content: s.公告,
                //确定键内容
                positive: '点我下载',
                cancelable: false,
                canceledOnTouchOutside: false
            }).on("positive", () => {
                app.openUrl(s.url);
                exit();
                //确定
            }).show();
        }
        var r = http.get("https://gitee.com/xz0816/ttxs_auto/raw/master/ver/notice1.json");
        var s = r.body.json();
        var png = http.get(s.图片1).body.bytes();
        files.writeBytes(files.join("/sdcard/", "vgz.png"), png);
        var b = s.公告;
        ui.run(() => {
        ui.tex.setText(b);
        ui.png.attr("src","file:///sdcard/vgz.png");
    ui.png.on("click", () => {
        app.openUrl(s.url);
    })
        ui.ver1.attr('visibility', 'gone');
        ui.ver2.attr('visibility', 'visible');
    });
});
