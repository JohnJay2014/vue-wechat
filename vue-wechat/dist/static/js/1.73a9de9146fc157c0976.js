webpackJsonp([1,21],{3:function(n,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var t=e(8);o.default={props:{backText:{type:String,default:"返回"},decline:{default:!1},curText:{},nextPath:{},nextIcon:{type:String}},vuex:{getters:{backPath:t.backPath}},data:function(){return{}},methods:{}}},4:function(n,o,e){o=n.exports=e(1)(),o.push([n.id,"","",{version:3,sources:[],names:[],mappings:"",file:"top-handle.vue",sourceRoot:"webpack://"}])},5:function(n,o,e){var t=e(4);"string"==typeof t&&(t=[[n.id,t,""]]);e(2)(t,{});t.locals&&(n.exports=t.locals)},6:function(n,o){n.exports=' <div class=_cover-top _v-0ee120b9=""> <div class=top-back _v-0ee120b9=""> <div class="_ellipsis iconfont icon-return-arrow" v-link=backPath v-text=backText _v-0ee120b9=""> </div> </div> <div class=top-other _v-0ee120b9=""> <slot name=right _v-0ee120b9=""> <div class=_align-right v-link=nextPath _v-0ee120b9=""> <span class=iconfont :class=nextIcon _v-0ee120b9=""></span> </div> </slot> </div> <div class="top-title _effect" :class="{\'_effect--50\':decline}" _v-0ee120b9=""> <slot name=center _v-0ee120b9=""> <p _v-0ee120b9=""> <span v-text=curText _v-0ee120b9=""></span> </p> </slot> </div> </div> '},7:function(n,o,e){var t,a,i={};e(5),t=e(3),a=e(6),n.exports=t||{},n.exports.__esModule&&(n.exports=n.exports.default);var A="function"==typeof n.exports?n.exports.options||(n.exports.options={}):n.exports;a&&(A.template=a),A.computed||(A.computed={}),Object.keys(i).forEach(function(n){var o=i[n];A.computed[n]=function(){return o}})},65:function(n,o,e){var t,a,i={};e(186),t=e(103),a=e(261),n.exports=t||{},n.exports.__esModule&&(n.exports=n.exports.default);var A="function"==typeof n.exports?n.exports.options||(n.exports.options={}):n.exports;a&&(A.template=a),A.computed||(A.computed={}),Object.keys(i).forEach(function(n){var o=i[n];A.computed[n]=function(){return o}})},103:function(n,o,e){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(o,"__esModule",{value:!0});var a=e(7),i=t(a);o.default={vuex:{getters:{},actions:{}},route:{activate:function(n){var o=(n.from,n.to,n.next);this.$parent.$emit("route-pipe",!0),o()},deactivate:function(n){var o=(n.from,n.to,n.next);this.$parent.$emit("route-pipe",!1),o()}},data:function(){return{decline:!1,current:0,menu:[{type:"scan-qr-code",name:"扫码",title:"二维码/条码",text:"将二维码/条码放入框内,即可自动扫描"},{type:"scan-book",name:"封面",title:"封面/电影海报",text:"讲书、CD、电影海报放入框内,即可自动扫描"},{type:"scan-street",name:"街景",title:"街景",text:"扫一下周边环境,即可自动扫描"},{type:"scan-word",name:"翻译",title:"翻译",text:"将英文单词放入框内"}],topModel:{backText:"返回",curText:"二维码/条码",nextPath:{path:""},nextIcon:""}}},methods:{chooseItem:function(n){this.current=n}},events:{"route-pipe":function(n){this.decline=n,this.$parent.$emit("route-pipe",n)}},created:function(){},ready:function(){},components:{topHandle:i.default}}},160:function(n,o,e){o=n.exports=e(1)(),o.push([n.id,'._cover-content[_v-b78f9290]{color:#979797;background-color:#000}.sao-yi-sao-panel[_v-b78f9290]{height:calc(100% - 90px);display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;text-align:center}.sao-yi-sao-panel>div[_v-b78f9290]{width:100%}.sao-yi-sao-panel .frame[_v-b78f9290]{width:200px;height:200px;transform-origin:50% 50%;margin:0 auto;margin-bottom:15px;transition:all .5s ease;border:1px solid #b3b3b3;position:relative}.sao-yi-sao-panel .frame .green-line[_v-b78f9290]{position:absolute;left:2%;top:2%;width:96%;height:1px;background:-webkit-radial-gradient(#72e52d 5%,#54cf21 50%,#0a4a04 80%,#000 100%);box-shadow:0 0 2px rgba(96,255,0,.5);animation-name:linemove;animation-duration:1.5s;animation-delay:.3s;animation-iteration-count:infinite;animation-timing-function:linear;-webkit-animation-name:linemove;-webkit-animation-duration:1.5s;-webkit-animation-delay:.3s;-webkit-animation-iteration-count:infinite;-webkit-animation-timing-function:linear}@keyframes linemove{0%{top:2%}to{top:95%;opacity:1}}.sao-yi-sao-panel .scan-qr-code .frame[_v-b78f9290]{width:70%;padding-top:70%;height:0}.sao-yi-sao-panel .scan-book .frame[_v-b78f9290],.sao-yi-sao-panel .scan-street .frame[_v-b78f9290]{width:90%;padding-top:100%;height:0}.sao-yi-sao-panel .scan-word .frame[_v-b78f9290]{width:50%;height:50px}.sao-yi-sao-panel .frame .left-top[_v-b78f9290]{position:absolute;left:-1px;top:-1px}.sao-yi-sao-panel .frame .left-top[_v-b78f9290]:before{content:"";display:block;width:14px;height:2px;background-color:#09bb07}.sao-yi-sao-panel .frame .left-top[_v-b78f9290]:after{content:"";display:block;width:2px;height:14px;background-color:#09bb07;margin-left:0;margin-top:-2px}.sao-yi-sao-panel .frame .right-top[_v-b78f9290]{position:absolute;right:-1px;top:-1px}.sao-yi-sao-panel .frame .right-top[_v-b78f9290]:before{content:"";display:block;width:14px;height:2px;background-color:#09bb07}.sao-yi-sao-panel .frame .right-top[_v-b78f9290]:after{content:"";float:right;display:block;width:2px;height:14px;background-color:#09bb07;margin-left:0;margin-top:-2px}.sao-yi-sao-panel .frame .left-bottom[_v-b78f9290]{position:absolute;left:-1px;bottom:-1px}.sao-yi-sao-panel .frame .left-bottom[_v-b78f9290]:before{content:"";display:block;width:2px;height:14px;background-color:#09bb07;margin-left:0;margin-top:-2px}.sao-yi-sao-panel .frame .left-bottom[_v-b78f9290]:after{content:"";display:block;width:14px;height:2px;background-color:#09bb07}.sao-yi-sao-panel .frame .right-bottom[_v-b78f9290]{position:absolute;right:-1px;bottom:-1px}.sao-yi-sao-panel .frame .right-bottom[_v-b78f9290]:before{content:"";display:block;width:2px;height:14px;background-color:#09bb07;margin-left:12px}.sao-yi-sao-panel .frame .right-bottom[_v-b78f9290]:after{float:left;content:"";display:block;width:14px;height:2px;background-color:#09bb07}.sao-yi-sao-footer[_v-b78f9290]{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;position:absolute;bottom:20px;width:100%;left:0}.sao-yi-sao-footer li[_v-b78f9290]{text-align:center;padding:0 10px}.sao-yi-sao-footer li div[_v-b78f9290]{width:40px;height:40px;margin-bottom:5px;background-size:contain;background-repeat:no-repeat}.sao-yi-sao-footer li.current p[_v-b78f9290]{color:#09bb07}.sao-yi-sao-footer li.scan-qr-code div[_v-b78f9290]{background-image:url('+e(223)+")}.sao-yi-sao-footer li.scan-qr-code.current div[_v-b78f9290]{background-image:url("+e(224)+")}.sao-yi-sao-footer li.scan-book div[_v-b78f9290]{background-image:url("+e(221)+")}.sao-yi-sao-footer li.scan-book.current div[_v-b78f9290]{background-image:url("+e(222)+")}.sao-yi-sao-footer li.scan-street div[_v-b78f9290]{background-image:url("+e(225)+")}.sao-yi-sao-footer li.scan-street.current div[_v-b78f9290]{background-image:url("+e(226)+")}.sao-yi-sao-footer li.scan-word div[_v-b78f9290]{background-image:url("+e(227)+")}.sao-yi-sao-footer li.scan-word.current div[_v-b78f9290]{background-image:url("+e(228)+")}.sao-yi-sao-footer li.scan-word .frame .green-line[_v-b78f9290]{display:none}","",{version:3,sources:["/./src/views/find/sao-yi-sao.vue"],names:[],mappings:"AA6HA,6BACI,cAAe,AACf,qBAA0B,CAC7B,AAKD,+BACI,yBAA0B,AAC1B,oBAAqB,AACrB,aAAc,AACd,qBAAsB,AAClB,uBAAwB,AAC5B,sBAAuB,AACnB,mBAAoB,AACxB,iBAAmB,CACtB,AACD,mCACI,UAAY,CACf,AAED,sCACI,YAAa,AACb,aAAc,AACd,yBAA0B,AAC1B,cAAe,AACf,mBAAoB,AACpB,wBAAyB,AACzB,yBAA0B,AAC1B,iBAAmB,CACtB,AAED,kDACI,kBAAmB,AACnB,QAAS,AACT,OAAQ,AACR,UAAW,AACX,WAAY,AACZ,iFAAwF,AACxF,qCAA6C,AAE7C,wBAAyB,AACzB,wBAA2B,AAC3B,oBAAuB,AACvB,mCAAoC,AACpC,iCAAkC,AAClC,gCAAiC,AACjC,gCAAmC,AACnC,4BAA+B,AAC/B,2CAA4C,AAC5C,wCAA0C,CAC7C,AACD,oBACI,GACI,MAAQ,CACX,AACD,GACI,QAAS,AACT,SAAU,CACb,CACJ,AAED,oDACI,UAAW,AACX,gBAAiB,AACjB,QAAU,CACb,AAQD,oGALI,UAAW,AACX,iBAAkB,AAClB,QAAU,CAOb,AAED,iDACI,UAAW,AACX,WAAa,CAChB,AAED,gDACI,kBAAmB,AACnB,UAAW,AACX,QAAU,CACb,AAED,uDACI,WAAY,AACZ,cAAe,AACf,WAAY,AACZ,WAAY,AACZ,wBAA0B,CAC7B,AAED,sDACI,WAAY,AACZ,cAAe,AACf,UAAW,AACX,YAAa,AACb,yBAA0B,AAC1B,cAAiB,AACjB,eAAiB,CACpB,AAED,iDACI,kBAAmB,AACnB,WAAY,AACZ,QAAU,CACb,AAED,wDACI,WAAY,AACZ,cAAe,AACf,WAAY,AACZ,WAAY,AACZ,wBAA0B,CAC7B,AAED,uDACI,WAAY,AACZ,YAAa,AACb,cAAe,AACf,UAAW,AACX,YAAa,AACb,yBAA0B,AAC1B,cAAiB,AACjB,eAAiB,CACpB,AAED,mDACI,kBAAmB,AACnB,UAAW,AACX,WAAa,CAChB,AAED,0DACI,WAAY,AACZ,cAAe,AACf,UAAW,AACX,YAAa,AACb,yBAA0B,AAC1B,cAAiB,AACjB,eAAiB,CACpB,AAED,yDACI,WAAY,AACZ,cAAe,AACf,WAAY,AACZ,WAAY,AACZ,wBAA0B,CAC7B,AAED,oDACI,kBAAmB,AACnB,WAAY,AACZ,WAAa,CAChB,AAED,2DACI,WAAY,AACZ,cAAe,AACf,UAAW,AACX,YAAa,AACb,yBAA0B,AAC1B,gBAAkB,CACrB,AAED,0DACI,WAAY,AACZ,WAAY,AACZ,cAAe,AACf,WAAY,AACZ,WAAY,AACZ,wBAA0B,CAC7B,AAKD,gCACI,oBAAqB,AACrB,aAAc,AACd,qBAAsB,AAClB,uBAAwB,AAC5B,sBAAuB,AACnB,mBAAoB,AACxB,kBAAmB,AACnB,YAAa,AACb,WAAY,AACZ,MAAQ,CACX,AAED,mCACI,kBAAmB,AACnB,cAAgB,CACnB,AAED,uCACI,WAAY,AACZ,YAAa,AACb,kBAAmB,AACnB,wBAAyB,AACzB,2BAA6B,CAChC,AAED,6CACI,aAAe,CAClB,AAED,oDACI,8CAAuE,CAC1E,AAED,4DACI,8CAA0E,CAC7E,AAED,iDACI,8CAAoE,CACvE,AAED,yDACI,8CAAuE,CAC1E,AAED,mDACI,8CAAsE,CACzE,AAED,2DACI,8CAAyE,CAC5E,AAED,iDACI,8CAAoE,CACvE,AAED,yDACI,8CAAuE,CAC1E,AAED,gEACI,YAAc,CACjB",file:"sao-yi-sao.vue",sourcesContent:['\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n._cover-content[_v-b78f9290] {\n    color: #979797;\n    background-color: #000000;\n}\n\n\n/**/\n\n.sao-yi-sao-panel[_v-b78f9290] {\n    height: calc(100% - 90px);\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: center;\n        justify-content: center;\n    -ms-flex-align: center;\n        align-items: center;\n    text-align: center;\n}\n.sao-yi-sao-panel>div[_v-b78f9290]{\n    width: 100%;\n}\n\n.sao-yi-sao-panel .frame[_v-b78f9290] {\n    width: 200px;\n    height: 200px;\n    transform-origin: 50% 50%;\n    margin: 0 auto;\n    margin-bottom: 15px;\n    transition: .5s all ease;\n    border: 1px solid #b3b3b3;\n    position: relative;\n}\n\n.sao-yi-sao-panel .frame .green-line[_v-b78f9290] {\n    position: absolute;\n    left: 2%;\n    top: 2%;\n    width: 96%;\n    height: 1px;\n    background: -webkit-radial-gradient(#72e52d 5%, #54cf21 50%, #0a4a04 80%, #000000 100%);\n    box-shadow: 0px 0px 2px rgba(96, 255, 0, .5);\n\n    animation-name: linemove;\n    animation-duration: 1500ms;\n    animation-delay: 300ms;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n    -webkit-animation-name: linemove;\n    -webkit-animation-duration: 1500ms;\n    -webkit-animation-delay: 300ms;\n    -webkit-animation-iteration-count: infinite;\n    -webkit-animation-timing-function: linear;\n}\n@keyframes linemove {\n    0% {\n        top: 2%;\n    }\n    100% {\n        top: 95%;\n        opacity:1;\n    }\n}\n\n.sao-yi-sao-panel .scan-qr-code .frame[_v-b78f9290] {\n    width: 70%;\n    padding-top: 70%;\n    height: 0;\n}\n\n.sao-yi-sao-panel .scan-book .frame[_v-b78f9290] {\n    width: 90%;\n    padding-top: 100%;\n    height: 0;\n}\n\n.sao-yi-sao-panel .scan-street .frame[_v-b78f9290] {\n    width: 90%;\n    padding-top: 100%;\n    height: 0;\n}\n\n.sao-yi-sao-panel .scan-word .frame[_v-b78f9290] {\n    width: 50%;\n    height: 50px;\n}\n\n.sao-yi-sao-panel .frame .left-top[_v-b78f9290] {\n    position: absolute;\n    left: -1px;\n    top: -1px;\n}\n\n.sao-yi-sao-panel .frame .left-top[_v-b78f9290]::before {\n    content: "";\n    display: block;\n    width: 14px;\n    height: 2px;\n    background-color: #09bb07;\n}\n\n.sao-yi-sao-panel .frame .left-top[_v-b78f9290]::after {\n    content: "";\n    display: block;\n    width: 2px;\n    height: 14px;\n    background-color: #09bb07;\n    margin-left: 0px;\n    margin-top: -2px;\n}\n\n.sao-yi-sao-panel .frame .right-top[_v-b78f9290] {\n    position: absolute;\n    right: -1px;\n    top: -1px;\n}\n\n.sao-yi-sao-panel .frame .right-top[_v-b78f9290]::before {\n    content: "";\n    display: block;\n    width: 14px;\n    height: 2px;\n    background-color: #09bb07;\n}\n\n.sao-yi-sao-panel .frame .right-top[_v-b78f9290]::after {\n    content: "";\n    float: right;\n    display: block;\n    width: 2px;\n    height: 14px;\n    background-color: #09bb07;\n    margin-left: 0px;\n    margin-top: -2px;\n}\n\n.sao-yi-sao-panel .frame .left-bottom[_v-b78f9290] {\n    position: absolute;\n    left: -1px;\n    bottom: -1px;\n}\n\n.sao-yi-sao-panel .frame .left-bottom[_v-b78f9290]::before {\n    content: "";\n    display: block;\n    width: 2px;\n    height: 14px;\n    background-color: #09bb07;\n    margin-left: 0px;\n    margin-top: -2px;\n}\n\n.sao-yi-sao-panel .frame .left-bottom[_v-b78f9290]::after {\n    content: "";\n    display: block;\n    width: 14px;\n    height: 2px;\n    background-color: #09bb07;\n}\n\n.sao-yi-sao-panel .frame .right-bottom[_v-b78f9290] {\n    position: absolute;\n    right: -1px;\n    bottom: -1px;\n}\n\n.sao-yi-sao-panel .frame .right-bottom[_v-b78f9290]::before {\n    content: "";\n    display: block;\n    width: 2px;\n    height: 14px;\n    background-color: #09bb07;\n    margin-left: 12px;\n}\n\n.sao-yi-sao-panel .frame .right-bottom[_v-b78f9290]::after {\n    float: left;\n    content: "";\n    display: block;\n    width: 14px;\n    height: 2px;\n    background-color: #09bb07;\n}\n\n\n/**/\n\n.sao-yi-sao-footer[_v-b78f9290] {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: center;\n        justify-content: center;\n    -ms-flex-align: center;\n        align-items: center;\n    position: absolute;\n    bottom: 20px;\n    width: 100%;\n    left: 0;\n}\n\n.sao-yi-sao-footer li[_v-b78f9290] {\n    text-align: center;\n    padding: 0 10px;\n}\n\n.sao-yi-sao-footer li div[_v-b78f9290] {\n    width: 40px;\n    height: 40px;\n    margin-bottom: 5px;\n    background-size: contain;\n    background-repeat: no-repeat;\n}\n\n.sao-yi-sao-footer li.current p[_v-b78f9290] {\n    color: #09bb07;\n}\n\n.sao-yi-sao-footer li.scan-qr-code div[_v-b78f9290] {\n    background-image: url(../../assets/images/sao-yi-sao/scan-qr-code.png);\n}\n\n.sao-yi-sao-footer li.scan-qr-code.current div[_v-b78f9290] {\n    background-image: url(../../assets/images/sao-yi-sao/scan-qr-code_hl.png);\n}\n\n.sao-yi-sao-footer li.scan-book div[_v-b78f9290] {\n    background-image: url(../../assets/images/sao-yi-sao/scan-book.png);\n}\n\n.sao-yi-sao-footer li.scan-book.current div[_v-b78f9290] {\n    background-image: url(../../assets/images/sao-yi-sao/scan-book_hl.png);\n}\n\n.sao-yi-sao-footer li.scan-street div[_v-b78f9290] {\n    background-image: url(../../assets/images/sao-yi-sao/scan-street.png);\n}\n\n.sao-yi-sao-footer li.scan-street.current div[_v-b78f9290] {\n    background-image: url(../../assets/images/sao-yi-sao/scan-street_hl.png);\n}\n\n.sao-yi-sao-footer li.scan-word div[_v-b78f9290] {\n    background-image: url(../../assets/images/sao-yi-sao/scan-word.png);\n}\n\n.sao-yi-sao-footer li.scan-word.current div[_v-b78f9290] {\n    background-image: url(../../assets/images/sao-yi-sao/scan-word_hl.png);\n}\n\n.sao-yi-sao-footer li.scan-word .frame .green-line[_v-b78f9290]{\n    display: none;\n}\n'],sourceRoot:"webpack://"}])},186:function(n,o,e){var t=e(160);"string"==typeof t&&(t=[[n.id,t,""]]);e(2)(t,{});t.locals&&(n.exports=t.locals)},221:function(n,o,e){n.exports=e.p+"static/img/scan-book.368cc72.png"},222:function(n,o,e){n.exports=e.p+"static/img/scan-book_hl.7cf016a.png"},223:function(n,o,e){n.exports=e.p+"static/img/scan-qr-code.fc67aad.png"},224:function(n,o,e){n.exports=e.p+"static/img/scan-qr-code_hl.f10cf0f.png"},225:function(n,o,e){n.exports=e.p+"static/img/scan-street.d392faf.png"},226:function(n,o,e){n.exports=e.p+"static/img/scan-street_hl.c470222.png"},227:function(n,o,e){n.exports=e.p+"static/img/scan-word.e01f228.png"},228:function(n,o,e){n.exports=e.p+"static/img/scan-word_hl.a039761.png"},261:function(n,o){n.exports=' <div class="_full_router component-sao-yi-sao" _v-b78f9290=""> <div class=_full_inner _v-b78f9290=""> <top-handle :back-text=topModel.backText :cur-text=menu[current].title :decline=decline :next-path=topModel.nextPath :next-icon=topModel.nextIcon _v-b78f9290=""> </top-handle> <div class="_cover-content _effect" :class="{\'_effect--30\':decline}" _v-b78f9290=""> <div class=sao-yi-sao-panel _v-b78f9290=""> <div :class=menu[current].type _v-b78f9290=""> <div class=frame _v-b78f9290=""> <span class=green-line _v-b78f9290=""></span> <span class=left-top _v-b78f9290=""></span> <span class=right-top _v-b78f9290=""></span> <span class=left-bottom _v-b78f9290=""></span> <span class=right-bottom _v-b78f9290=""></span> </div> <div class=desc _v-b78f9290=""> <p v-text=menu[current].text _v-b78f9290=""></p> </div> </div> </div> <ul class=sao-yi-sao-footer _v-b78f9290=""> <li v-for="item in menu" :class="[item.type,{\'current\':current===$index}]" v-touch:tap=chooseItem($index) _v-b78f9290=""> <div _v-b78f9290=""></div> <p v-text=item.name _v-b78f9290=""></p> </li> </ul> </div> </div> <router-view transition=cover _v-b78f9290=""></router-view> </div> '}});
//# sourceMappingURL=1.73a9de9146fc157c0976.js.map