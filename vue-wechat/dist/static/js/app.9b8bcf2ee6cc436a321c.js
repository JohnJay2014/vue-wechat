webpackJsonp([23,21],{0:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var o=n(66),a=i(o),c=n(67),u=i(c),s=n(286),r=i(s),d=n(288),l=n(287),f=i(l),p=n(236),_=i(p),h=n(68),m=i(h),v=n(189),b=i(v),g=n(33),x=i(g),y=n(74),w=i(y),M=n(70),S=i(M);a.default.config.devtools=!0,a.default.use(u.default),a.default.use(r.default),a.default.use(f.default),a.default.use(_.default);var k=new r.default({hashbang:!0,saveScrollPosition:!0});(0,w.default)(k),(0,d.sync)(x.default,k),(0,S.default)(a.default),b.default.attach(document.body);var C=a.default.extend(n(264));k.start(C,"body"),window.router=k,window.Vue=a.default,window.$=m.default},8:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.index_nav=function(e){var t=e.base;return t.index_nav},t.menu_active=function(e){var t=e.base;return t.menu_active},t.backPath=function(e){var t=e.base;return t.backPath},t.wechat_list=function(e){var t=e.chat;return t.wechat_list},t.chat_base=function(e){var t=e.chat;return t.chat_base},t.dialogue_type=function(e){var t=e.chat;return t.dialogue_type},t.dialogue=function(e){var t=e.chat;return t.dialogue},t.dialogue_bar=function(e){var t=e.chat;return t.dialogue_bar},t.chat_member=function(e){var t=e.chat;return t.chat_member},t.chat_config=function(e){var t=e.chat;return t.chat_config},t.person_info=function(e){var t=e.contacts;return t.person_info},t.contact_friends=function(e){var t=e.contacts;return t.contact_friends},t.iframe_url=function(e){var t=e.find;return t.iframe_url},t.iframe_title=function(e){var t=e.find;return t.iframe_title}},19:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.get_index_nav=function(e){var t=e.dispatch,i=n(73);t("SET_MENU",i)},t.set_menu_active=function(e,t){var n=e.dispatch;n("SET_MENU_ACTIVE",t)},t.set_chat_count=function(e,t){var n=e.dispatch;n("SET_CHAT_COUNT",t)},t.set_news_state=function(e,t,n,i){var o=e.dispatch;o("SET_NEWS_STATE",t,n),!!i&&i()},t.delete_news=function(e,t,n){var i=e.dispatch;i("DELETE_NEWS",t),!!n&&n()},t.get_menu_wechat_list=function(e,t){var i=e.dispatch,o=n(71);i("SET_MENU_WECHAT_LIST",o),!!t&&t()},t.set_chat=function(e,t){var n=e.dispatch;n("CHAT",t)},t.get_person_info=function(e,t,i){var o=e.dispatch,a=n(290)("./person-info-"+t);o("PERSON_INFO",a),!!i&&i()},t.get_friends_list=function(e,t){var i=e.dispatch,o=n(72);i("CONTACT_FRIENDS",o)},t.set_iframe_url=function(e,t,n){var i=e.dispatch;i("SET_IFRAME_URL",t),!!n&&n()}},32:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.SET_MENU="SET_MENU",t.SET_MENU_ACTIVE="SET_MENU_ACTIVE",t.BACK_PATH="BACK_PATH",t.SET_MENU_WECHAT_LIST="SET_MENU_WECHAT_LIST",t.CHAT="CHAT",t.SET_CHAT_COUNT="SET_CHAT_COUNT",t.SET_NEWS_STATE="SET_NEWS_STATE",t.DELETE_NEWS="DELETE_NEWS",t.PERSON_INFO="PERSON_INFO",t.CONTACT_FRIENDS="CONTACT_FRIENDS",t.FRIEND_ID="FRIEND_ID"},33:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(66),a=i(o),c=n(67),u=i(c),s=n(75),r=i(s),d=n(76),l=i(d),f=n(77),p=i(f),_=n(78),h=i(_);a.default.use(u.default),t.default=new u.default.Store({modules:{base:r.default,chat:l.default,contacts:p.default,find:h.default},strict:!0})},48:function(e,t){"use strict";e.exports={base:{id:1,name:"杨涛",nickname:"杨涛",remark:"阿涛",wxid:"wxid_yangtao",qq:"00001",email:"00001@qq.com",type:"firends",iconSrc:"//ad-gold-cdn.xitu.io/14999138688354f1720f589d2d33db77f026bb07c8f67.jpg",qrCode:"",telphone:18812345678,signature:"个性签名",area:["中国","北京","海淀"],selfPhotos:[{imgSrc:""}]},chatPrevivw:{newsUnreadCount:1,endTimeStr:1472632586443,endChatAuth:"杨涛",endChatTxt:"晚上打球",chatBackground:null,newsMute:!1}}},49:function(e,t){"use strict";e.exports={base:{id:11,name:"小明",nickname:"小明",remark:"小明",wxid:"wxid_xiaoming",qq:"000011",email:"00002@qq.com",type:"firends",iconSrc:"//ad-gold-cdn.xitu.io/1499913563353063825fa09e5e83359a90c91417e029e.jpg",qrCode:"",telphone:18812345678,signature:"个性签名",area:["中国","北京","海淀"],selfPhotos:[{imgSrc:""}]},chatPrevivw:{newsUnreadCount:11,endTimeStr:1472632586443,endChatAuth:"杨涛",endChatTxt:"晚上打球",chatBackground:null,newsMute:!1}}},50:function(e,t){"use strict";e.exports={base:{id:11,name:"白加黑",nickname:"白加黑",remark:"白加黑",wxid:"wxid_baijiahei",qq:"00000",email:"00000@qq.com",type:"firends",iconSrc:"//ad-gold-cdn.xitu.io/1499914019068553d2c25d0b33b83481795c552e0b47f.jpg",qrCode:"",telphone:18812345678,signature:"个性签名",area:["中国","北京","海淀"],selfPhotos:[{imgSrc:""}]},chatPrevivw:{newsUnreadCount:11,endTimeStr:1472632586443,endChatAuth:"杨涛",endChatTxt:"",chatBackground:null,newsMute:!1}}},51:function(e,t){"use strict";e.exports={base:{id:11,name:"小亮",nickname:"小亮",remark:"小亮",wxid:"wxid_xiaoliang",qq:"00000",email:"00000@qq.com",type:"firends",iconSrc:"//ad-gold-cdn.xitu.io/14999140634069b6825290779221783b3b59fbba0addd.jpg",qrCode:"",telphone:18812345678,signature:"个性签名",area:["中国","北京","海淀"],selfPhotos:[{imgSrc:""}]},chatPrevivw:{newsUnreadCount:11,endTimeStr:1472632586443,endChatAuth:"杨涛",endChatTxt:"",chatBackground:null,newsMute:!1}}},70:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(52),a=i(o),c={};c.fmtDate=function(e,t){var n=new Date(e),i={"M+":n.getMonth()+1,"d+":n.getDate(),"h+":n.getHours(),"m+":n.getMinutes(),"s+":n.getSeconds(),"q+":Math.floor((n.getMonth()+3)/3),S:n.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(n.getFullYear()+"").substr(4-RegExp.$1.length)));for(var o in i)new RegExp("("+o+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[o]:("00"+i[o]).substr((""+i[o]).length)));return t},t.default=function(e){(0,a.default)(c).forEach(function(t){e.filter(t,c[t])})}},71:function(e,t){"use strict";var n=[{base:{id:1,name:"杨涛",nickname:"nick_杨涛",remark:"remark_杨涛",wxid:"wxid_yangtao",qq:"00001",email:"00001@qq.com",type:"friends",iconSrc:"//ad-gold-cdn.xitu.io/14999138688354f1720f589d2d33db77f026bb07c8f67.jpg",qrCode:"",signature:"个性签名",telphone:18812345678,area:["中国","北京","海淀"],selfPhotos:[{imgSrc:""}]},chatBaseModel:{newsUnreadCount:1,endTimeStr:1472632586443,endChatAuth:"杨涛",endChatTxt:"晚上打球?"},chatDialogueBarModel:{menu:[]},chatDialogueModel:[],chatMemberModel:[{id:1,iconSrc:"//ad-gold-cdn.xitu.io/14999138688354f1720f589d2d33db77f026bb07c8f67.jpg",name:"杨涛",nickname:"nick_杨涛",remark:"remark_杨涛"}],chatConfigModel:{isStick:!1,newsMute:!1,starFriends:!1,lookMePhotos:!0,lookHisPhotos:!0,blacklist:!1}},{base:{id:2,name:"微信群01",nickname:"nick_微信群01",remark:"remark_微信群01",wxid:"wxid_group01",qq:"00002",email:null,type:"group",iconSrc:"//ad-gold-cdn.xitu.io/1499913766441c45960d8bd44ed5ffcf0d4a67d0aa317.jpg",qrCode:"",signature:"个性签名"},chatBaseModel:{newsUnreadCount:1,endTimeStr:1472632586443,endChatAuth:"领导",endChatTxt:"大家下班的时候记得锁好门"},chatDialogueBarModel:{menu:[]},chatDialogueModel:[],chatMemberModel:[{id:1,iconSrc:"//ad-gold-cdn.xitu.io/14999138688354f1720f589d2d33db77f026bb07c8f67.jpg",name:"yangtao01",nickname:"nick_微信群01",remark:"remark_微信群01"},{id:1,iconSrc:"//ad-gold-cdn.xitu.io/14999138688354f1720f589d2d33db77f026bb07c8f67.jpg",name:"yangtao02",nickname:"nick_微信群01",remark:"remark_微信群01"}],chatConfigModel:{chatBackground:null,groupNotice:"",isStick:!1,newsMute:!0,contactsSave:!1,showGroupNickname:!0}},{base:{id:1,name:"稀土圈",nickname:"稀土圈",remark:"稀土圈",wxid:"iloveleme",qq:"00000",email:"000000@qq.com",type:"service",iconSrc:"//ad-gold-cdn.xitu.io/14999139497307c668d55b4dd5984b6accc6bf41206a8.jpg",qrCode:"",signature:"个性签名",telphone:18812345678,area:["中国","北京","海淀"],selfPhotos:[{imgSrc:""}]},chatBaseModel:{newsUnreadCount:11,endTimeStr:1472632586443,endChatAuth:"",endChatTxt:"挖掘最优质的互联网技术"},chatDialogueBarModel:{menu:[{title:"翻译计划",url:"http://p.memoe.cn/",subMenu:[]},{title:"绝密试卷",url:"http://p.memoe.cn/",subMenu:[]},{title:"稀土掘金",url:"//gold.xitu.io",subMenu:[]}]},chatDialogueModel:[{id:1,name:"稀土圈",nickname:"稀土圈",remark:"稀土圈",wxid:"wxid_jingdong",qq:"000021",email:"000021@qq.com",type:"service",iconSrc:"//ad-gold-cdn.xitu.io/14999139497307c668d55b4dd5984b6accc6bf41206a8.jpg",qrCode:"",signature:"个性签名",telphone:18812345678,area:["中国","北京","海淀"],selfPhotos:[{imgSrc:""}]}],chatMemberModel:[],chatConfigModel:{isStick:!1,newsMute:!1,starFriends:!1,lookMePhotos:!0,lookHisPhotos:!0,blacklist:!1}},{base:{id:1,name:"饿了么",nickname:"饿了么",remark:"饿了么",wxid:"iloveleme",qq:"00000",email:"000000@qq.com",type:"service",iconSrc:"//tb1.bdstatic.com/tb/cms/ngmis/file_1453447545023.jpg",qrCode:"",signature:"个性签名",telphone:18812345678,area:["中国","北京","海淀"],selfPhotos:[{imgSrc:""}]},chatBaseModel:{newsUnreadCount:0,endTimeStr:1472632586443,endChatAuth:"",endChatTxt:"饿了么网上订餐平台"},chatDialogueBarModel:{menu:[{title:"我要订餐",url:"//m.ele.me/",subMenu:[]},{title:"关注必读",url:"",subMenu:[]},{title:"联系我们",url:"//m.ele.me/",subMenu:[]}]},chatDialogueModel:[{id:1,name:"饿了么",nickname:"饿了么",remark:"饿了么",wxid:"iloveleme",qq:"00000",email:"00000@qq.com",type:"service",iconSrc:"",qrCode:"",signature:"个性签名",telphone:18812345678,area:["中国","北京","海淀"],selfPhotos:[{imgSrc:""}]}],chatMemberModel:[],chatConfigModel:{isStick:!1,newsMute:!1,starFriends:!1,lookMePhotos:!0,lookHisPhotos:!0,blacklist:!1}}];e.exports=n},72:function(e,t){"use strict";e.exports=[{alpha:"A",list:[{id:1,name:"杨涛",nickname:"杨涛",remark:"阿涛",wxid:"wxid_yangtao",qq:"00000",email:"00000@qq.com",type:"friends",iconSrc:"//ad-gold-cdn.xitu.io/14999138688354f1720f589d2d33db77f026bb07c8f67.jpg",qrCode:"",signature:"个性签名"}]},{alpha:"B",list:[{id:12,name:"baijiahei",nickname:"baijiahei",remark:"白加黑",wxid:"wxid_baijiahei",qq:"00000",email:"00000@qq.com",type:"friends",iconSrc:"//ad-gold-cdn.xitu.io/1499914019068553d2c25d0b33b83481795c552e0b47f.jpg",qrCode:"",signature:"个性签名"}]},{alpha:"X",list:[{id:11,name:"小明",nickname:"小明",remark:"小明",wxid:"wxid_xiaoming",qq:"00011",email:"00011@qq.com",type:"firends",iconSrc:"//ad-gold-cdn.xitu.io/1499913563353063825fa09e5e83359a90c91417e029e.jpg",qrCode:"",telphone:18812345678,signature:"个性签名",area:["中国","北京","海淀"],selfPhotos:[{imgSrc:""}]},{id:13,nickname:"小亮",name:"小亮",remark:"小亮",wxid:"wxid_xiaoliang",qq:"00011",email:"00011@qq.com",type:"firends",iconSrc:"//ad-gold-cdn.xitu.io/14999140634069b6825290779221783b3b59fbba0addd.jpg",qrCode:"",telphone:18812345678,signature:"个性签名",area:["中国","北京","海淀"],selfPhotos:[{imgSrc:""}]}]}]},73:function(e,t){"use strict";e.exports=[{index:0,path:{path:"/chat"},hint:{type:"count",count:0},iconClass:"icon-wechat",text:"微信"},{index:1,path:{path:"/contact"},hint:{type:"count",count:0},iconClass:"icon-contact",text:"通讯录"},{index:2,path:{path:"/find"},hint:{type:"dot",count:99},iconClass:"icon-find",text:"发现"},{index:3,path:{path:"/me"},hint:{type:null,count:""},iconClass:"icon-me",text:"我"}]},74:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={component:function(e){n.e(16,function(t){var n=[t(277)];e.apply(null,n)}.bind(this))},subRoutes:{"person-info-set":{component:function(e){n.e(17,function(t){var n=[t(276)];e.apply(null,n)}.bind(this))}}}},i={component:function(e){n.e(4,function(t){var n=[t(282)];e.apply(null,n)}.bind(this))},subRoutes:{"person-info":t}};t.albums=i;var o={component:function(e){n.e(5,function(t){var n=[t(273)];e.apply(null,n)}.bind(this))},subRoutes:{"chat-detail":{component:function(e){n.e(18,function(t){var n=[t(271)];e.apply(null,n)}.bind(this))},subRoutes:{"person-info":t}},"chat-info":{component:function(e){n.e(12,function(t){var n=[t(272)];e.apply(null,n)}.bind(this))},subRoutes:{"person-info":t}},link:{component:function(e){n.e(3,function(t){var n=[t(63)];e.apply(null,n)}.bind(this))}}}};e.map({"/chat":{component:function(e){n.e(20,function(t){var n=[t(270)];e.apply(null,n)}.bind(this))},subRoutes:{dialogue:o,"add-friends":{component:function(e){n.e(0,function(t){var n=[t(47)];e.apply(null,n)}.bind(this))}},"sao-yi-sao":{component:function(e){n.e(1,function(t){var n=[t(65)];e.apply(null,n)}.bind(this))}},"group-chat":{component:function(e){n.e(2,function(t){var n=[t(64)];e.apply(null,n)}.bind(this))}}}},"*":{name:"404",component:function(e){n.e(19,function(t){var n=[t(269)];e.apply(null,n)}.bind(this))}},"/contact":{component:function(e){n.e(10,function(t){var n=[t(274)];e.apply(null,n)}.bind(this))},subRoutes:{"person-info":t,"public-info":{component:function(e){n.e(15,function(t){var n=[t(278)];e.apply(null,n)}.bind(this))}},"new-friends":{component:function(e){n.e(9,function(t){var n=[t(275)];e.apply(null,n)}.bind(this))},subRoutes:{"add-friends":{component:function(e){n.e(0,function(t){var n=[t(47)];e.apply(null,n)}.bind(this))}}}},"add-friends":{component:function(e){n.e(0,function(t){var n=[t(47)];e.apply(null,n)}.bind(this))}},"group-chat":{component:function(e){n.e(2,function(t){var n=[t(64)];e.apply(null,n)}.bind(this))}},tag:{component:function(e){n.e(13,function(t){var n=[t(280)];e.apply(null,n)}.bind(this))}},public:{component:function(e){n.e(14,function(t){var n=[t(279)];e.apply(null,n)}.bind(this))}}}},"/find":{component:function(e){n.e(7,function(t){var n=[t(281)];e.apply(null,n)}.bind(this))},subRoutes:{"albums-friends":i,"sao-yi-sao":{component:function(e){n.e(1,function(t){var n=[t(65)];e.apply(null,n)}.bind(this))}},"yao-yi-yao":{component:function(e){n.e(6,function(t){var n=[t(284)];e.apply(null,n)}.bind(this))}},"drift-bottle":{component:function(e){n.e(8,function(t){var n=[t(283)];e.apply(null,n)}.bind(this))}},shopping:{component:function(e){n.e(3,function(t){var n=[t(63)];e.apply(null,n)}.bind(this))}}}},"/me":{component:function(e){n.e(11,function(t){var n=[t(285)];e.apply(null,n)}.bind(this))}}}),e.redirect({"/":"/chat"}),e.afterEach(function(e){var t=e.from,n=e.to,i=(t.path||"/",n.path),o=i.lastIndexOf("/"),c=i.slice(0,o);a.default.dispatch("BACK_PATH",c)})};var o=n(33),a=i(o)},75:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o,a=n(25),c=i(a),u=n(32),s={backPath:"",index_nav:[{index:0,path:{path:"/chat"},hint:{type:"count",count:0},iconClass:"icon-wechat",text:"微信"}],menu_active:{text:"",index:0}},r=(o={},(0,c.default)(o,u.SET_MENU,function(e,t){e.index_nav=t}),(0,c.default)(o,u.SET_MENU_ACTIVE,function(e,t){e.menu_active=e.index_nav[t]}),(0,c.default)(o,u.BACK_PATH,function(e,t){e.backPath={path:t}}),(0,c.default)(o,u.SET_CHAT_COUNT,function(e,t){e.index_nav[0].hint.count=t}),o);t.default={state:s,mutations:r}},76:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o,a=n(25),c=i(a),u=n(32),s={wechat_list:[],chat_base:{id:1,name:"聊天中",wxid:"",qq:"",email:"",type:"friends",iconSrc:"",qrCode:"",signature:""},dialogue_type:"friends",dialogue:[],dialogue_bar:{menu:[{title:"",link:"",subMenu:[{title:"",link:""},{title:"",link:""}]}]},chat_member:[{id:1,iconSrc:"",name:""}],chat_config:{chatBackground:null,groupNotice:"",isStick:!1,newsMute:!0,contactsSave:!1,showGroupNickname:!0}},r=(o={},(0,c.default)(o,u.SET_MENU_WECHAT_LIST,function(e,t){e.wechat_list=t}),(0,c.default)(o,u.CHAT,function(e,t){var n=t.base,i=t.chatDialogueModel,o=t.chatDialogueBarModel,a=t.chatMemberModel,c=t.chatConfigModel;e.dialogue_type=n.type,e.chat_base=n,e.dialogue=i,e.dialogue_bar=o,e.chat_member=a,e.chat_config=c}),(0,c.default)(o,u.SET_NEWS_STATE,function(e,t,n){e.wechat_list[t].chatBaseModel.newsUnreadCount=n}),(0,c.default)(o,u.DELETE_NEWS,function(e,t){e.wechat_list.splice(t,1)}),o);t.default={state:s,mutations:r}},77:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o,a=n(25),c=i(a),u=n(32),s={person_info:{base:{}},contact_friends:[]},r=(o={},(0,c.default)(o,u.PERSON_INFO,function(e,t){e.person_info=t}),(0,c.default)(o,u.CONTACT_FRIENDS,function(e,t){e.contact_friends=t}),(0,c.default)(o,u.FRIEND_ID,function(e,t){}),o);t.default={state:s,mutations:r}},78:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(25),a=i(o),c={iframe_url:"",iframe_title:""},u=(0,a.default)({},"SET_IFRAME_URL",function(e,t){e.iframe_url=t.url,e.iframe_title=t.title});t.default={state:c,mutations:u}},79:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(33),a=i(o),c=n(267),u=i(c),s=n(268),r=i(s);n(164),n(163),t.default={replace:!1,store:a.default,data:function(){return{appload:!1,welcome:!1,isnotMobile:!1,decline:!1}},created:function(){var e=this,t=function(){for(var e=navigator.userAgent,t=new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"),n=!1,i=0;i<t.length;i++)if(e.indexOf(t[i])>0){n=!0;break}return n}();t||(this.isnotMobile=!0),1===this.$route.matched.length&&(this.welcome=!0),this.appload=!0,setTimeout(function(){e.welcome=!1},2e3)},events:{"route-pipe":function(e){this.decline=e}},components:{indexHeader:u.default,indexNav:r.default}}},84:function(e,t,n){(function(e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(8);t.default={vuex:{getters:{index_nav:i.index_nav,menu_active:i.menu_active}},data:function(){return{tips_isOpen:!1,menuArr:[{_link:{path:"group-chat",append:!0},text:"发起群聊",iconClass:"icon-tips-xiaoxi"},{_link:{path:"add-friends",append:!0},text:"添加朋友",iconClass:"icon-tips-add-friend"},{_link:{path:"sao-yi-sao",append:!0},text:"扫一扫",iconClass:"icon-tips-saoyisao"},{_link:{path:"receipt-payment-money",append:!0},text:"收付款",iconClass:"icon-tips-fukuan"}]}},computed:{chatCount:function(){return"微信"===this.menu_active.text&&this.index_nav[0].hint.count>0}},created:function(){var t=this;e("body").on("touchend",function(){setTimeout(function(){t.tips_isOpen=!1},0)})},methods:{tap:function(){event.stopPropagation(),this.tips_isOpen=!this.tips_isOpen}}}}).call(t,n(68))},85:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(8),o=n(19);t.default={vuex:{getters:{index_nav:i.index_nav},actions:{get_index_nav:o.get_index_nav,set_menu_active:o.set_menu_active}},props:{},data:function(){return{}},filters:{get_prompt:function(e){return e.count}},created:function(){this.get_index_nav()},methods:{}}},163:function(e,t){},164:function(e,t){},167:function(e,t){},174:function(e,t){},184:function(e,t){},220:function(e,t,n){e.exports=n.p+"static/img/mobile.3c6662f.png"},242:function(e,t,n){e.exports=' <div id=app _v-1c4f8ff4=""> <header class=app-header style=display:none v-show=appload _v-1c4f8ff4=""> <div class=_effect :class="{\'_effect--50\':decline}" _v-1c4f8ff4=""> <index-header style=overflow:visible _v-1c4f8ff4=""></index-header> </div> </header> <section class=app-content style=display:none v-show=appload _v-1c4f8ff4=""> <router-view keep-alive="" _v-1c4f8ff4=""></router-view> </section> <footer class="app-footer _line-fine" style=display:none v-show=appload _v-1c4f8ff4=""> <div class=_effect :class="{\'_effect--50\':decline}" _v-1c4f8ff4=""> <index-nav _v-1c4f8ff4=""></index-nav> </div> </footer> <section class=welcome v-show=welcome transition=welcome _v-1c4f8ff4=""></section> <section class=mobile-tips style=dislay:none v-show=isnotMobile _v-1c4f8ff4=""> <div class=mobile-tips-inner _v-1c4f8ff4=""> <div class=mobile-model _v-1c4f8ff4=""> <img src='+n(220)+' alt="" _v-1c4f8ff4=""></div> <p _v-1c4f8ff4=""><br _v-1c4f8ff4="">为保证最佳用户体验,<br _v-1c4f8ff4=""></p> <p class=_align-left _v-1c4f8ff4="">1.请用chrome移动设备调试模式(F12)下打开</p> <p class=_align-left _v-1c4f8ff4="">2.手机浏览器访问</p> <br _v-1c4f8ff4=""> <button class="weui_btn weui_btn_mini weui_btn_primary" v-touch:tap="isnotMobile = false" _v-1c4f8ff4="">关闭</button> </div> </section> </div> '},249:function(e,t){e.exports=' <div class=_cover-top _v-2f60b6c1=""> <div class=other _v-2f60b6c1=""> <span class="iconfont icon-tips-jia" v-show="$route.path===\'/chat\'" v-touch:tap=tap _v-2f60b6c1=""></span> <span class="iconfont icon-tips-add-friend" v-show="$route.path===\'/contact\'" v-link={path:&quot;/contact/add-friends&quot;} _v-2f60b6c1=""></span> <ul class=tips-menu :class="tips_isOpen?\'tips-open\':\'tips-close\'" _v-2f60b6c1=""> <li v-for="item in menuArr" v-link=item._link _v-2f60b6c1=""> <span class=iconfont :class=item.iconClass _v-2f60b6c1=""></span> <div v-text=item.text _v-2f60b6c1=""></div> </li> </ul> <div class=tips-masker v-show=tips_isOpen _v-2f60b6c1=""></div> </div> <div class=center _v-2f60b6c1=""> {{menu_active.text}} <span class=parentheses v-show=chatCount v-text=index_nav[0].hint.count _v-2f60b6c1=""></span> </div> </div> '},259:function(e,t){e.exports=' <nav _v-b21590c2=""> <dl v-for="item in index_nav" v-link=item.path @click=set_menu_active($index) _v-b21590c2=""> <dt class=iconfont :class=item.iconClass _v-b21590c2=""> <i v-if=item.hint.count v-text="item.hint | get_prompt " :class="\'_news-\'+item.hint.type" _v-b21590c2=""></i> </dt> <dd v-text=item.text _v-b21590c2=""></dd> </dl> </nav> '},264:function(e,t,n){var i,o,a={};n(167),i=n(79),o=n(242),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports.default);var c="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;o&&(c.template=o),c.computed||(c.computed={}),Object.keys(a).forEach(function(e){var t=a[e];c.computed[e]=function(){return t}})},267:function(e,t,n){var i,o,a={};n(174),i=n(84),o=n(249),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports.default);var c="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;o&&(c.template=o),c.computed||(c.computed={}),Object.keys(a).forEach(function(e){var t=a[e];c.computed[e]=function(){return t}})},268:function(e,t,n){var i,o,a={};n(184),i=n(85),o=n(259),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports.default);var c="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;o&&(c.template=o),c.computed||(c.computed={}),Object.keys(a).forEach(function(e){var t=a[e];c.computed[e]=function(){return t}})},290:function(e,t,n){function i(e){return n(o(e))}function o(e){return a[e]||function(){throw new Error("Cannot find module '"+e+"'.")}()}var a={"./person-info-1":48,"./person-info-1.js":48,"./person-info-11":49,"./person-info-11.js":49,"./person-info-12":50,"./person-info-12.js":50,"./person-info-13":51,"./person-info-13.js":51};i.keys=function(){return Object.keys(a)},i.resolve=o,e.exports=i,i.id=290}});
//# sourceMappingURL=app.9b8bcf2ee6cc436a321c.js.map