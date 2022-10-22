"ui";
ui.statusBarColor("#3640A9"); //通知栏颜色
ui.layout(
    <vertical>
        <appbar>
            <toolbar id="toolbar" title="请悉知:"bg="#3640A9" />
        </appbar>
        <vertical id="ver1" visibility="visible">
            <progressbar id="jdt" w="*"h="25"margin="10 0 10 0"  indeterminate="true" style="@style/Base.Widget.AppCompat.ProgressBar.Horizontal"/>
            <text text="请等待..."margin="20 15 0 0" h="auto"textSize="16"/>
        </vertical>
        <vertical id="ver2"visibility="gone">
            <vertical padding="16 0">
                <text id="tex" text="h"layout_gravity="center_vertical"textColor="#757575" textStyle="bold"textSize="18"/>
                <img  id="png"src="file:///sdcard/vgz.png" layout_gravity="center" margin="0 16 0 0" w="auto"h="auto"/>
            </vertical>
            <horizontal>
			   <button id="sx" text="点击进入" style="Widget.AppCompat.Button.Colored" w="auto"/>
            </horizontal>
        </vertical> 
    </vertical>
);

ui.sx.on("click", () => {
     engines.execScript("https://gitee.com/xz0816/ttxs_auto/raw/master/info.json-master/UI/mian.js");
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