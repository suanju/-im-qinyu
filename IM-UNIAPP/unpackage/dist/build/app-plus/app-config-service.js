
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/chat/chatList","pages/login/login","pages/login/forget","pages/login/register","pages/chat/chatRoom","pages/chat/map","pages/contact/index","pages/contact/addFriend","pages/contact/newFriend","pages/contact/newGroup","pages/dynamic/index","pages/dynamic/myDynamic","pages/dynamic/addDynamic","pages/dynamic/dynamicInfo","pages/personal/index","pages/personal/friendCard","pages/collect/index","pages/group/create","pages/group/chatGroupRoom","pages/group/groupInfo"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"即时通讯","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8","titleNView":false},"tabBar":{"color":"#909399","selectedColor":"#303133","backgroundColor":"#FFFFFF","borderStyle":"black","list":[{"pagePath":"pages/chat/chatList","iconPath":"static/icon/xiaoxi.png","selectedIconPath":"static/icon/xiaoxi_select.png","text":"消息"},{"pagePath":"pages/contact/index","iconPath":"static/icon/lianxiren.png","selectedIconPath":"static/icon/lianxiren_select.png","text":"联系人"},{"pagePath":"pages/dynamic/index","iconPath":"static/icon/kongjian.png","selectedIconPath":"static/icon/kongjian_select.png","text":"动态"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"IM即时通讯","compilerVersion":"3.2.16","entryPagePath":"pages/chat/chatList","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/chat/chatList","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"聊天列表","enablePullDownRefresh":true}},{"path":"/pages/login/login","meta":{},"window":{}},{"path":"/pages/login/forget","meta":{},"window":{}},{"path":"/pages/login/register","meta":{},"window":{}},{"path":"/pages/chat/chatRoom","meta":{},"window":{"navigationBarTitleText":"聊天页面"}},{"path":"/pages/chat/map","meta":{},"window":{"navigationBarTitleText":"地图"}},{"path":"/pages/contact/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"联系人列表","enablePullDownRefresh":true}},{"path":"/pages/contact/addFriend","meta":{},"window":{"navigationBarTitleText":"添加好友/群聊"}},{"path":"/pages/contact/newFriend","meta":{},"window":{"navigationBarTitleText":"新朋友"}},{"path":"/pages/contact/newGroup","meta":{},"window":{"navigationBarTitleText":"群通知"}},{"path":"/pages/dynamic/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"动态","enablePullDownRefresh":true}},{"path":"/pages/dynamic/myDynamic","meta":{},"window":{"navigationBarTitleText":"我的动态","enablePullDownRefresh":true}},{"path":"/pages/dynamic/addDynamic","meta":{},"window":{"navigationBarTitleText":"发布动态"}},{"path":"/pages/dynamic/dynamicInfo","meta":{},"window":{"navigationBarTitleText":"动态详情"}},{"path":"/pages/personal/index","meta":{},"window":{"navigationBarTitleText":"资料卡"}},{"path":"/pages/personal/friendCard","meta":{},"window":{"navigationBarTitleText":"好友资料卡"}},{"path":"/pages/collect/index","meta":{},"window":{"navigationBarTitleText":"我的收藏"}},{"path":"/pages/group/create","meta":{},"window":{"navigationBarTitleText":"创建群聊"}},{"path":"/pages/group/chatGroupRoom","meta":{},"window":{"navigationBarTitleText":"群聊聊天"}},{"path":"/pages/group/groupInfo","meta":{},"window":{"navigationBarTitleText":"群详情"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
