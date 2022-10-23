"ui";

importClass(java.net.HttpURLConnection);
importClass(java.net.URL);
importClass(java.io.File);
importClass(java.io.FileOutputStream);
importClass(android.graphics.Color);

var color = "#FF4FB3FF";

ui.statusBarColor("#FF4FB3FF")

ui.layout(
    <drawer id="drawer">
        <vertical>
            <appbar>
                <toolbar id="toolbar" bg="#ff4fb3ff" title="强国助手-自动学习Pro"/>
                <tabs id="tabs" bg="#ff4fb3ff"/>
            </appbar>
            <viewpager id="viewpager">
                <frame>
                <img src={"https://app.livemz.cn/pics/api.php" } scaleType="centerCrop" alpha="0.55" />
                    <vertical>
                        <vertical gravity="center" layout_weight="1">
                         <card w="*" h="40" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" foreground="?selectableItemBackground"  alpha="0.45" >
                                <horizontal gravity="center_vertical">
                                    <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text text="公告: 正常使用,问题先看帮助页." textColor="#ff0000" textSize="16sp" maxLines="1" />
                                    </vertical>
                                </horizontal>
                            </card>
                            <card w="*" h="70" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" foreground="?selectableItemBackground"  alpha="0.45" >
                                <horizontal gravity="center_vertical">
                                    <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text text="查看 '帮助' 问题处理" textColor="#222222" textSize="16sp" maxLines="1" />
                                        <text text="本软件永久免费,维护更新,更多需求定制联系我们." textColor="#ff0000" textSize="14sp" maxLines="1" />
                                    </vertical>
                                </horizontal>
                            </card>
                            <card w="*" h="50" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" foreground="?selectableItemBackground"   alpha="0.55">
                                <horizontal gravity="center_vertical">
                                    <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                        <text text="无障碍服务" textColor="#222222" textSize="16sp" maxLines="1" />
                                        <text text="请确保开启" textColor="#004b50" textSize="14sp" maxLines="1" />
                                    </vertical>
                                    <checkbox id="autoService" marginLeft="4" marginRight="6" checked="{{auto.service != null}}" />
                                </horizontal>
                            </card>
                            <card w="*" h="50" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" foreground="?selectableItemBackground"   alpha="0.55">
                                <horizontal gravity="center_vertical">
                                    <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                        <text text="悬浮窗权限" textColor="#222222" textSize="16sp" maxLines="1" />
                                        <text text="请确保开启" textColor="#004b50" textSize="14sp" maxLines="1" />
                                    </vertical>
                                    <checkbox id="consoleshow" marginLeft="4" marginRight="6" checked="{{floaty.checkPermission()}}" />
                                </horizontal>
                            </card>
                            <card w="*" h="50" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" foreground="?selectableItemBackground"   alpha="0.45">
                                <horizontal gravity="center_vertical">
                                    <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                        <text text="音量上键可以停止所有脚本运行" textColor="#222222" textSize="16sp" maxLines="1" />
                                    </vertical>
                                </horizontal>
                            </card>
                        </vertical>
                        <vertical>
						<button h="70" id="start" text="开始学习" textSize="25sp" color="#000000" bg="#FF4FB3FF" foreground="?selectableItemBackground"   alpha="0.55"/>
                            <button h="50" layout_gravity="center" id="log" textSize="25sp" color="#000000" bg="#bfbfbf" foreground="?selectableItemBackground" text="查看日志"   alpha="0.55"/>
                            {/* 
                            <button h="50"  id="join_QQ" text="加群交流" textSize="18sp" color="#000000" bg="#bfbfbf" foreground="?selectableItemBackground"  alpha="0.55"/>
                        */} 
                        </vertical>
                    </vertical>
                </frame>
                <ScrollView>
                    <frame>
                    <img src={"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-fc6781eb-b272-4a5f-b63b-5f95b1ebb435/252fc31a-709f-49cc-b7cc-a29dee565cbd.jpg" } scaleType="centerCrop" alpha="0.55" />
                        <vertical id="ttxs_pro" gravity="center">
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1" >
                                    <text w="auto" textColor="#222222" textSize="15sp" text="看门狗(秒)" />
                                    <text w="auto" textColor="#004b50" textSize="12sp" text="填1800就是超过30分钟重试" />
                                    <text w="auto" textColor="#004b50" textSize="12sp" text="空着或0默认5400秒，超过即重新执行" />
                                </vertical> 
                                <input id="ttxs_pro_watchdog" marginLeft="4" marginRight="6" text="1800"  hint="秒"  textSize="13sp"  inputType="number" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="滑动验证的滑动时间(ms)" />
                                    <text w="auto" textColor="#004b50" textSize="12sp" text="空着或0不开启自动滑动验证，滑动分3段" />
                                    <text w="auto" textColor="#004b50" textSize="12sp" text="中间会折返一下，总时间是填的数值*3" />
                                </vertical> 
                                <input id="ttxs_pro_slide_verify" marginLeft="4" marginRight="6" text="300" textSize="13sp"  inputType="number" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="无障碍模式2" />
                                    <text w="auto" textColor="#004b50" textSize="12sp" text="无障碍服务没问题就不勾选" />
                                </vertical>
                                <checkbox id="ttxs_pro_fast_mode" marginLeft="4" marginRight="6" checked="false" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="点点通功能" />
                                </vertical>
                                <checkbox id="ttxs_pro_ddtong" marginLeft="4" marginRight="6" checked="false" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="开始前强制结束强国" />
                                    <text w="auto" textColor="#004b50" textSize="12sp" text="如果关闭，请确保强国已退出或在首页" />
                                </vertical>
                                <checkbox id="ttxs_pro_is_exit" marginLeft="4" marginRight="6" checked="true" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="评论" />
                                </vertical>
                                <checkbox id="ttxs_pro_pinglun" marginLeft="4" marginRight="6" checked="true" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="视听学习次数" />
                                </vertical>
                                <checkbox id="ttxs_pro_shipin" marginLeft="4" marginRight="6" checked="true" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="文章次数与时长" />
                                </vertical>
                                <checkbox id="ttxs_pro_wenzhang" marginLeft="4" marginRight="6" checked="true" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="每日答题" />
                                </vertical>
                                <checkbox id="ttxs_pro_meiri" marginLeft="4" marginRight="6" checked="true" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="每周答题" />
                                    <spinner id="ttxs_pro_meizhou" marginLeft="4" marginRight="6" entries="最近一次已作答开始倒序|正序答题|不做" />
                                </vertical> 
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="专项答题" />
                                    <spinner id="ttxs_pro_zhuanxiang" marginLeft="4" marginRight="6" entries="最近一次已作答开始倒序|正序答题|不做" />
                                </vertical> 
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="挑战答题" />
                                </vertical>
                                <checkbox id="ttxs_pro_tiaozhan" marginLeft="4" marginRight="6" checked="true" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="OCR选择" />
                                    <spinner id="ttxs_pro_ocr_choice" marginLeft="4" marginRight="6" entries="GoogleMLKit|PaddleOCR|第三方插件" />
                                </vertical> 
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="ocr识别跳过阈值(ms)" />
                                    <text w="auto" textColor="#004b50" textSize="12sp" text="空着或0默认5000，超过此时间会跳过多人对战" />
                                    <text w="auto" textColor="#004b50" textSize="12sp" text="建议按照平时正常的ocr识别时间设置" />
                                </vertical> 
                                <input id="ttxs_pro_ocr_maxtime" marginLeft="4" marginRight="6" text="5000" textSize="13sp"  inputType="number" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="对战选项模式" />
                                    <spinner id="ttxs_pro_duizhan_mode" marginLeft="4" marginRight="6" entries="随机顺序(等选项显示后识别答案)|固定顺序(历史遗留选项)|手动答题(识别答案后等待用户手动点击)" />
                                </vertical> 
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="对战极速模式延迟(历史遗留选项)" />
                                    <text w="auto" textColor="#004b50" textSize="12sp" text="只在选项固定顺序时生效" />
                                </vertical> 
                                <input id="ttxs_pro_jisu" marginLeft="4" marginRight="6" text="0" textSize="13sp"  inputType="number" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="是否挂机跳过四人赛首局" />
                                    <text w="auto" textColor="#004b50" textSize="12sp" text="首局匹配对手较强，挂机不会扣积分局数" />
                                </vertical>
                                <checkbox id="ttxs_pro_guaji" marginLeft="4" marginRight="6" checked="true" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="四人赛" />
                                </vertical>
                                <checkbox id="ttxs_pro_siren" marginLeft="4" marginRight="6" checked="true" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="平衡胜率(答错)次数" />
                                </vertical> 
                                <input id="ttxs_pro_dacuo_num" marginLeft="4" marginRight="6" text="2" textSize="13sp"  inputType="number" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="双人对战" />
                                </vertical>
                                <checkbox id="ttxs_pro_shuangren" marginLeft="4" marginRight="6" checked="true" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="本地" />
                                </vertical>
                                <checkbox id="ttxs_pro_bendi" marginLeft="4" marginRight="6" checked="true" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="订阅" />
                                    <spinner id="ttxs_pro_dingyue" marginLeft="4" marginRight="6" entries="不做|正序订阅|只订阅年度上新" />
                                </vertical> 
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="单账号微信推送" />
                                    <text w="auto" textColor="#004b50" textSize="12sp" text="微信关注pushplus推送加，复制token填入" />
                                    <text w="auto" textColor="#004b50" textSize="12sp" text="注意！搜索结果有两个，一定要关注正确" />
                                    <input id="ttxs_pro_pushplus" text="" textSize="13sp" />
                                </vertical> 
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="是否启用音量调节" />
                                    <text w="auto" textColor="#004b50" textSize="12sp" text="每次运行脚本后调节音量百分比" />
                                </vertical>
                                <checkbox id="ttxs_pro_yl_on" marginLeft="4" marginRight="6" checked="true" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="音量" />
                                    <text w="auto" textColor="#004b50" textSize="12sp" text="调节音量百分比(只填数字)" />
                                </vertical> 
                                <input id="ttxs_pro_yinliang" marginLeft="4" marginRight="6" text="0" textSize="13sp"  inputType="number" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="多账号(token选填)" />
                                    <text w="auto" textColor="#004b50" textSize="12sp" text="使用前确保所有账号都在本机登陆过并已完成短信验证" />
                                    <text w="auto" textColor="#004b50" textSize="10sp" text="---------示例---------" />
                                    <text w="auto" textColor="#004b50" textSize="10sp" text="账号1:密码1:token1" />
                                    <text w="auto" textColor="#004b50" textSize="10sp" text="账号2:密码2:token2" />
                                    <text w="auto" textColor="#004b50" textSize="10sp" text="账号3:密码3:token3" />
                                      <text w="auto" textColor="#004b50" textSize="10sp" text=" " />
                                    <text w="auto" textColor="#004b50" textSize="12sp" text="结束后会自动登录回账号1" />
                                    <text w="auto" textColor="#004b50" textSize="12sp" text="新增多账号1对1微信推送，按格式配置即可" />
                                    <text w="auto" textColor="#004b50" textSize="12sp" text="没有则根据上面配置的pushplus_token为主" />
                                    <input id="ttxs_pro_zhanghao" text="" textSize="13sp" />
                                </vertical> 
                            </horizontal>
                            <horizontal>
                                <button style="Widget.AppCompat.Button.Colored" id="ttxs_pro_save" text="保存配置" padding="12dp" w="*" alpha="0.55" />
                            </horizontal>
                            <horizontal>
                                <button style="Widget.AppCompat.Button.Colored" id="ttxs_pro_reset" text="恢复默认" padding="12dp" w="*" alpha="0.55" />
                            </horizontal>
                        </vertical>
                    </frame>
                </ScrollView>
                <frame>
                    <vertical>
                        <webview id="webview" h="*" w="auto" />
                    </vertical>
                </frame>
            </viewpager>
        </vertical>
    </drawer>
);


http.__okhttp__.setTimeout(10000);
//标签名
// 设置滑动页面的标题
ui.viewpager.setTitles(["首页", "脚本配置", "帮助"]);
// 让滑动页面和标签栏联动
ui.tabs.setupWithViewPager(ui.viewpager);

//帮助页加载
var src = "https://static-fc6781eb-b272-4a5f-b63b-5f95b1ebb435.bspapp.com/aboutsay";
ui.webview.loadUrl(src);

var GLOBAL_CONFIG = storages.create("GLOBAL_CONFIG");
var TTXS_PRO_CONFIG = storages.create("TTXS_PRO_CONFIG");
var BAIDUAPI = storages.create("BAIDUAPI");
var execution = "";
var thread = null;
Initialize();


// 创建选项菜单(右上角)
ui.emitter.on("create_options_menu", menu=>{
    menu.add("日志");
    menu.add("Github");
    menu.add("学习强国V2.30.0下载");
});
//一键加qq群
ui.join_QQ.click(function() {
    // threads.start(加群)
    //加群(qq群号);
    //var qq群号 = 239086004;
    //加群(qq群号);
   // app.startActivity({
   //    action: "android.intent.action.VIEW",
    //    data: "mqqapi://card/show_pslcard?card_type=group&uin=" + qq群号,
  //      packageName: "com.tencent.mobileqq",
    //}); //打开qq群名片
	  app.openUrl("https://docs.qq.com/doc/DWGpjcHFaZWJRWlBR");
})
// 监听选项菜单点击
ui.emitter.on("options_item_selected", (e, item)=>{
    switch(item.getTitle()){
        case "日志":
            app.startActivity("console");
            break;
        case "检测更新":
            //模拟下载框
        internet_down(latest_version)

           // alert("关于", "强国助手Pro v"+latest_version);
            break;
        case "Github":
            app.openUrl("https://github.com/search?q=&type=");
            break;
        case "学习强国V2.30.0下载":
            app.openUrl("https://android-apps.pp.cn/fs08/2021/09/30/11/110_705003d9cfba4e4a5aefa15eeaa35510.apk?yingid=web_space&packageid=500713990&md5=efe438ceb2b56f945e6b895361efef9e&minSDK=21&size=121269103&shortMd5=8e4898e2c357f962beaecbb35469a41c&crc32=3080273094&did=8ce97e2f54d8b777327408a141562800");
            break;
    }
    e.consumed = true;
});
activity.setSupportActionBar(ui.toolbar);

// 热更函数
var latest_version = TTXS_PRO_CONFIG.get('lastest_version','1.0.3')   //放旧版本号
function internet_down(latest_version) {
        var latest_version = TTXS_PRO_CONFIG.get('lastest_version','v1.0.3')   //放旧版本号
        var releaseNotes =  "当前版本  "+latest_version + "\n"+ "新版本 v1.0.4\n"   //放新版本号
        + "更新日志:\n"
        + "* 美化界面\n"
        + "* 增加热更新\n"
        + "* 尝试修复检测\n";
    dialogs.build({
        title: "发现新版本",
        content: releaseNotes,
        positive: "立即下载",
        negative: "取消",
        neutral: "到浏览器下载"
    })
        .on("positive", download)
        .on("neutral", () => {
            app.openUrl("https://www.123pan.com/s/ogy0Vv-K0mGd");
        })
        .show();

    var downloadDialog = null;
    var downloadId = -1;

    function download(){
        downloadDialog = dialogs.build({
            title: "下载中...",
            positive: "暂停",
        
            progress: {
                max: 100,
                showMinMax: true
            },
            autoDismiss: false
        })
            .on("positive", ()=>{
                if(downloadDialog.getActionButton("positive") == "暂停"){
                    stopDownload();
                    downloadDialog.setActionButton("positive", "继续");
                }else{
                    startDownload();
                    downloadDialog.setActionButton("positive", "暂停");
                }
            })
            .on("negative", ()=>{
                stopDownload();
                downloadDialog.dismiss();
                downloadDialog = null;
            })
            .show();
        startDownload();
    }

    function startDownload(){
        downloadId = setInterval(()=>{
            var p = downloadDialog.getProgress();
            if(p >= 100){
                stopDownload();
                downloadDialog.dismiss();
                downloadDialog = null;
                toast("下载完成");
                TTXS_PRO_CONFIG.put('lastest_version',"1.0.4")  //放新版本号
            }else{
                downloadDialog.setProgress(p + 1);
            }
        }, 100);
    }

    function stopDownload(){
        clearInterval(downloadId);
    }


}

// // 脚本选择监听
// var script_chosen_Listener = new android.widget.AdapterView.OnItemSelectedListener({
//     onItemSelected: function (parent, view, position, id) {
//         toastLog('选择脚本：' + ui.script_chosen.getSelectedItem());
//         if (ui.script_chosen.getSelectedItemPosition() == 0) {
//             ui.ttxs.visibility = 8;
//             ui.study.visibility = 8;
//             ui.ttxs_pro.visibility = 0;
//         }
//         else if (ui.script_chosen.getSelectedItemPosition() == 1) {
//             ui.ttxs_pro.visibility = 8;
//             ui.study.visibility = 8;
//             ui.ttxs.visibility = 0;
//         }
//         else if (ui.script_chosen.getSelectedItemPosition() == 2) {
//             ui.ttxs_pro.visibility = 8;
//             ui.ttxs.visibility = 8;
//             ui.study.visibility = 0;
//         }
//         GLOBAL_CONFIG.put("script_chosen", ui.script_chosen.getSelectedItemPosition());
//     }
// })
// ui.script_chosen.setOnItemSelectedListener(script_chosen_Listener);
GLOBAL_CONFIG.put("script_chosen", 0);//在xxqg文件中，选择启动指定脚本
// 用户勾选无障碍服务的选项时，跳转到页面让用户去开启 
// android.permission.SYSTEM_ALERT_WINDOW
ui.autoService.on("check", function (checked) {
    if (checked && auto.service == null) {
        app.startActivity({
            action: "android.settings.ACCESSIBILITY_SETTINGS"
        });
    }
    if (!checked && auto.service != null) {
        auto.service.disableSelf();
    }
});

// 悬浮窗权限
ui.consoleshow.on("check", function (checked) {
    if (checked && !floaty.checkPermission()) {
        app.startActivity({
            packageName: "com.android.settings",
            className: "com.android.settings.Settings$AppDrawOverlaySettingsActivity",
            data: "package:" + context.getPackageName(),
        });
    }
});
 
// 当用户回到本界面时，resume事件会被触发
ui.emitter.on("resume", function () {
    // 此时根据无障碍服务的开启情况，同步开关的状态
    ui.autoService.checked = auto.service != null;
    ui.consoleshow.checked = floaty.checkPermission();
});

// 打开日志
ui.log.click(function () {
    app.startActivity("console");
});



// 下载并运行脚本
ui.start.click(function () {
    threads.shutDownAll();
    if (thread != null && thread.isAlive()) {
        alert("注意", "脚本正在运行，请结束之前进程");
        return;
    }
    threads.start(function () {
        toastLog("脚本加载中，请稍后...")
        var link = "https://gitcode.net/m0_61540717/ttxs_auto/-/raw/master/xxqg.js"
 
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
        engines.execScript("强国助手", xxqg);
        //engines.execScriptFile("./xxqg.js");
    });
});

// 保存天天向上pro脚本设置
ui.ttxs_pro_save.click(function () {
    TTXS_PRO_CONFIG.put("watchdog", ui.ttxs_pro_watchdog.getText()+"");
    TTXS_PRO_CONFIG.put("slide_verify", ui.ttxs_pro_slide_verify.getText()+"");
    TTXS_PRO_CONFIG.put("fast_mode", ui.ttxs_pro_fast_mode.isChecked());
    TTXS_PRO_CONFIG.put("ddtong", ui.ttxs_pro_ddtong.isChecked());
    TTXS_PRO_CONFIG.put("is_exit", ui.ttxs_pro_is_exit.isChecked());
    TTXS_PRO_CONFIG.put("pinglun", ui.ttxs_pro_pinglun.isChecked());
    TTXS_PRO_CONFIG.put("shipin", ui.ttxs_pro_shipin.isChecked());
    TTXS_PRO_CONFIG.put("wenzhang", ui.ttxs_pro_wenzhang.isChecked());
    TTXS_PRO_CONFIG.put("meiri", ui.ttxs_pro_meiri.isChecked());
    TTXS_PRO_CONFIG.put("meizhou", ui.ttxs_pro_meizhou.getSelectedItemPosition());
    TTXS_PRO_CONFIG.put("zhuanxiang", ui.ttxs_pro_zhuanxiang.getSelectedItemPosition());
    TTXS_PRO_CONFIG.put("tiaozhan", ui.ttxs_pro_tiaozhan.isChecked());
    TTXS_PRO_CONFIG.put("ocr_choice", ui.ttxs_pro_ocr_choice.getSelectedItemPosition());
    TTXS_PRO_CONFIG.put("ocr_maxtime", ui.ttxs_pro_ocr_maxtime.getText()+"");
    TTXS_PRO_CONFIG.put("duizhan_mode", ui.ttxs_pro_duizhan_mode.getSelectedItemPosition());
    TTXS_PRO_CONFIG.put("jisu", ui.ttxs_pro_jisu.getText()+"");
    TTXS_PRO_CONFIG.put("guaji", ui.ttxs_pro_guaji.isChecked());
    TTXS_PRO_CONFIG.put("siren", ui.ttxs_pro_siren.isChecked());
    TTXS_PRO_CONFIG.put("dacuo_num", ui.ttxs_pro_dacuo_num.getText()+"");
    TTXS_PRO_CONFIG.put("shuangren", ui.ttxs_pro_shuangren.isChecked());
    TTXS_PRO_CONFIG.put("bendi", ui.ttxs_pro_bendi.isChecked());
    TTXS_PRO_CONFIG.put("dingyue", ui.ttxs_pro_dingyue.getSelectedItemPosition());
    TTXS_PRO_CONFIG.put("pushplus", ui.ttxs_pro_pushplus.getText()+"");
    TTXS_PRO_CONFIG.put("yl_on", ui.ttxs_pro_yl_on.isChecked());
    TTXS_PRO_CONFIG.put("yinliang", ui.ttxs_pro_yinliang.getText()+"");
    TTXS_PRO_CONFIG.put("zhanghao", ui.ttxs_pro_zhanghao.getText()+"");

    toastLog("学习助手Pro配置保存成功！");
});

// 重置天天向上pro脚本设置
ui.ttxs_pro_reset.click(function () {
    TTXS_PRO_CONFIG.put("watchdog", "1800");
    ui.ttxs_pro_watchdog.setText(TTXS_PRO_CONFIG.get("watchdog"));
    TTXS_PRO_CONFIG.put("slide_verify", "300");
    ui.ttxs_pro_slide_verify.setText(TTXS_PRO_CONFIG.get("slide_verify"));
    TTXS_PRO_CONFIG.put("fast_mode", false);
    ui.ttxs_pro_fast_mode.setChecked(TTXS_PRO_CONFIG.get("fast_mode"));
    TTXS_PRO_CONFIG.put("ddtong", false);
    ui.ttxs_pro_ddtong.setChecked(TTXS_PRO_CONFIG.get("ddtong"));
    TTXS_PRO_CONFIG.put("is_exit", true);
    ui.ttxs_pro_is_exit.setChecked(TTXS_PRO_CONFIG.get("is_exit"));
    TTXS_PRO_CONFIG.put("pinglun", true);
    ui.ttxs_pro_pinglun.setChecked(TTXS_PRO_CONFIG.get("pinglun"));
    TTXS_PRO_CONFIG.put("shipin", true);
    ui.ttxs_pro_shipin.setChecked(TTXS_PRO_CONFIG.get("shipin"));
    TTXS_PRO_CONFIG.put("wenzhang", true);
    ui.ttxs_pro_wenzhang.setChecked(TTXS_PRO_CONFIG.get("wenzhang"));
    TTXS_PRO_CONFIG.put("meiri", true);
    ui.ttxs_pro_meiri.setChecked(TTXS_PRO_CONFIG.get("meiri"));
    TTXS_PRO_CONFIG.put("meizhou", 0);
    ui.ttxs_pro_meizhou.setSelection(TTXS_PRO_CONFIG.get("meizhou"));
    TTXS_PRO_CONFIG.put("zhuanxiang", 0);
    ui.ttxs_pro_zhuanxiang.setSelection(TTXS_PRO_CONFIG.get("zhuanxiang"));
    TTXS_PRO_CONFIG.put("tiaozhan", true);
    ui.ttxs_pro_tiaozhan.setChecked(TTXS_PRO_CONFIG.get("tiaozhan"));
    TTXS_PRO_CONFIG.put("ocr_choice", 0);
    ui.ttxs_pro_ocr_choice.setSelection(TTXS_PRO_CONFIG.get("ocr_choice"));
    TTXS_PRO_CONFIG.put("ocr_maxtime", "5000");
    ui.ttxs_pro_ocr_maxtime.setText(TTXS_PRO_CONFIG.get("ocr_maxtime"));
    TTXS_PRO_CONFIG.put("duizhan_mode", 0);
    ui.ttxs_pro_duizhan_mode.setSelection(TTXS_PRO_CONFIG.get("duizhan_mode"));
    TTXS_PRO_CONFIG.put("jisu", "0");
    ui.ttxs_pro_jisu.setText(TTXS_PRO_CONFIG.get("jisu"));
    TTXS_PRO_CONFIG.put("guaji", true);
    ui.ttxs_pro_guaji.setChecked(TTXS_PRO_CONFIG.get("guaji"));
    TTXS_PRO_CONFIG.put("siren", true);
    ui.ttxs_pro_siren.setChecked(TTXS_PRO_CONFIG.get("siren"));
    TTXS_PRO_CONFIG.put("dacuo_num", "2");
    ui.ttxs_pro_dacuo_num.setText(TTXS_PRO_CONFIG.get("dacuo_num"));
    TTXS_PRO_CONFIG.put("shuangren", true);
    ui.ttxs_pro_shuangren.setChecked(TTXS_PRO_CONFIG.get("shuangren"));
    TTXS_PRO_CONFIG.put("bendi", true);
    ui.ttxs_pro_bendi.setChecked(TTXS_PRO_CONFIG.get("bendi"));
    TTXS_PRO_CONFIG.put("dingyue", 0);
    ui.ttxs_pro_dingyue.setSelection(TTXS_PRO_CONFIG.get("dingyue"));
    TTXS_PRO_CONFIG.put("pushplus", "");
    ui.ttxs_pro_pushplus.setText(TTXS_PRO_CONFIG.get("pushplus"));
    TTXS_PRO_CONFIG.put("yl_on", true);
    ui.ttxs_pro_yl_on.setChecked(TTXS_PRO_CONFIG.get("yl_on"));
    TTXS_PRO_CONFIG.put("yinliang", "0");
    ui.ttxs_pro_yinliang.setText(TTXS_PRO_CONFIG.get("yinliang"));
    TTXS_PRO_CONFIG.put("zhanghao", "");
    ui.ttxs_pro_zhanghao.setText(TTXS_PRO_CONFIG.get("zhanghao"));

    toastLog("学习助手Pro配置恢复默认！");
});


// 读取脚本设置
function Initialize() {
    //ui.script_chosen.setSelection(GLOBAL_CONFIG.get("script_chosen", 0));

    ui.ttxs_pro_watchdog.setText(TTXS_PRO_CONFIG.get("watchdog", "1800"));
    ui.ttxs_pro_slide_verify.setText(TTXS_PRO_CONFIG.get("slide_verify", "300"));
    ui.ttxs_pro_fast_mode.setChecked(TTXS_PRO_CONFIG.get("fast_mode", false));
    ui.ttxs_pro_ddtong.setChecked(TTXS_PRO_CONFIG.get("ddtong", false));
    ui.ttxs_pro_is_exit.setChecked(TTXS_PRO_CONFIG.get("is_exit", true));
    ui.ttxs_pro_pinglun.setChecked(TTXS_PRO_CONFIG.get("pinglun", true));
    ui.ttxs_pro_shipin.setChecked(TTXS_PRO_CONFIG.get("shipin", true));
    ui.ttxs_pro_wenzhang.setChecked(TTXS_PRO_CONFIG.get("wenzhang", true));
    ui.ttxs_pro_meiri.setChecked(TTXS_PRO_CONFIG.get("meiri", true));
    ui.ttxs_pro_meizhou.setSelection(TTXS_PRO_CONFIG.get("meizhou", 0));
    ui.ttxs_pro_zhuanxiang.setSelection(TTXS_PRO_CONFIG.get("zhuanxiang", 0));
    ui.ttxs_pro_tiaozhan.setChecked(TTXS_PRO_CONFIG.get("tiaozhan", true));
    ui.ttxs_pro_ocr_choice.setSelection(TTXS_PRO_CONFIG.get("ocr_choice", 0));
    ui.ttxs_pro_ocr_maxtime.setText(TTXS_PRO_CONFIG.get("ocr_maxtime", "5000"));
    ui.ttxs_pro_duizhan_mode.setSelection(TTXS_PRO_CONFIG.get("duizhan_mode", 0));
    ui.ttxs_pro_jisu.setText(TTXS_PRO_CONFIG.get("jisu", "0"));
    ui.ttxs_pro_guaji.setChecked(TTXS_PRO_CONFIG.get("guaji", true));
    ui.ttxs_pro_siren.setChecked(TTXS_PRO_CONFIG.get("siren", true));
    ui.ttxs_pro_dacuo_num.setText(TTXS_PRO_CONFIG.get("dacuo_num", "2"));
    ui.ttxs_pro_shuangren.setChecked(TTXS_PRO_CONFIG.get("shuangren", true));
    ui.ttxs_pro_bendi.setChecked(TTXS_PRO_CONFIG.get("bendi", true));
    ui.ttxs_pro_dingyue.setSelection(TTXS_PRO_CONFIG.get("dingyue", 0));
    ui.ttxs_pro_pushplus.setText(TTXS_PRO_CONFIG.get("pushplus", ""));
    ui.ttxs_pro_yl_on.setChecked(TTXS_PRO_CONFIG.get("yl_on", true));
    ui.ttxs_pro_yinliang.setText(TTXS_PRO_CONFIG.get("yinliang", "0"));
    ui.ttxs_pro_zhanghao.setText(TTXS_PRO_CONFIG.get("zhanghao", ""));

}