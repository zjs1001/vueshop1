(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f840dc2"],{1376:function(e,t,n){"use strict";var r=n("1bd5");n("d3b7"),n("ac1f"),n("466d"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("e7e5");var s=r(n("d399"));n("96cf");var a=r(n("2fa7")),i=(n("b970"),n("2f62")),c=r(n("ba32"));function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(n,!0).forEach((function(t){(0,a.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l={name:"bind-cellphone",data:function(){return{cellphone:"",msgCode:"",isSendMsgCode:!1,msgCodeText:"获取验证码"}},components:{SubHeader:c.default},mounted:function(){document.title=this.$route.meta.title},created:function(){this.$utils.safeUser(this),this.timer=null,this.isSubmit=!0},methods:u({},(0,i.mapActions)({isReg:"user/isReg",updateCellphone:"user/updateCellphone"}),{getMsgCode:function(){var e,t,n=this;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:if(!this.isSendMsgCode){r.next=17;break}if(!this.cellphone.match(/^\s*$/)){r.next=4;break}return(0,s.default)("请输入手机号"),r.abrupt("return");case 4:if(this.cellphone.match(/^1[0-9][0-9]\d{8}$/)){r.next=7;break}return(0,s.default)("您输入的手机号格式不正确"),r.abrupt("return");case 7:return r.next=9,regeneratorRuntime.awrap(this.isReg({username:this.cellphone}));case 9:if(e=r.sent,"1"!==e.data.isreg){r.next=13;break}return(0,s.default)("此手机号已注册过，请更换手机号"),r.abrupt("return");case 13:this.isSendMsgCode=!1,t=10,this.msgCodeText="重新获取("+t+")",this.timer=setInterval((function(){t>0?(t--,n.msgCodeText="重新获取("+t+")"):(clearInterval(n.timer),n.msgCodeText="获取短信验证码",n.isSendMsgCode=!0)}),1e3);case 17:case"end":return r.stop()}}),null,this)},checkCellphone:function(){var e=!0;this.cellphone.match(/^\s*$/)&&(e=!1),this.cellphone.match(/^1[0-9][0-9]\d{8}$/)||(e=!1),this.isSendMsgCode=!!e},submit:function(){var e,t=this;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:if(!this.cellphone.match(/^\s*$/)){n.next=3;break}return(0,s.default)("请输入手机号"),n.abrupt("return");case 3:if(this.cellphone.match(/^1[0-9][0-9]\d{8}$/)){n.next=6;break}return(0,s.default)("您输入的手机号格式不正确"),n.abrupt("return");case 6:return n.next=8,regeneratorRuntime.awrap(this.isReg({username:this.cellphone}));case 8:if(e=n.sent,"1"!==e.data.isreg){n.next=12;break}return(0,s.default)("此手机号已注册过，请更换手机号"),n.abrupt("return");case 12:if(!this.msgCode.match(/^\s*$/)){n.next=15;break}return(0,s.default)("请输入短信验证码"),n.abrupt("return");case 15:this.isSubmit&&(this.isSubmit=!1,this.updateCellphone({cellphone:this.cellphone,vcode:this.msgCode,success:function(e){200===e.code?t.$router.go(-1):(0,s.default)(e.data)}}));case 16:case"end":return n.stop()}}),null,this)}}),beforeDestroy:function(){clearInterval(this.timer)}};t.default=l},3932:function(e,t,n){},"84b9":function(e,t,n){"use strict";var r=n("3932"),s=n.n(r);s.a},"990b":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page"},[n("SubHeader",{attrs:{title:"绑定手机"}}),n("div",{staticClass:"main"},[e._m(0),n("div",{staticClass:"input-wrap",staticStyle:{"margin-top":"0.5rem"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.cellphone,expression:"cellphone"}],staticClass:"cellphone",attrs:{type:"tel",placeholder:"绑定手机号"},domProps:{value:e.cellphone},on:{input:[function(t){t.target.composing||(e.cellphone=t.target.value)},e.checkCellphone]}})]),n("div",{staticClass:"input-wrap",staticStyle:{"margin-top":"0.2rem"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.msgCode,expression:"msgCode"}],staticClass:"code",attrs:{type:"text",placeholder:"请输入短信验证码"},domProps:{value:e.msgCode},on:{input:function(t){t.target.composing||(e.msgCode=t.target.value)}}}),n("div",{class:{"code-btn":!0,success:e.isSendMsgCode},on:{click:e.getMsgCode}},[e._v(e._s(e.msgCodeText))])]),n("div",{staticClass:"save-btn",on:{click:e.submit}},[e._v("下一步")])])],1)},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tip"},[n("div",{staticClass:"icon"}),n("div",{staticClass:"text"},[e._v("新手机号验证后，即可绑定成功！")])])}];n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return s}))},d68a:function(e,t,n){"use strict";n.r(t);var r=n("990b"),s=n("e458");for(var a in s)"default"!==a&&function(e){n.d(t,e,(function(){return s[e]}))}(a);n("84b9");var i=n("2877"),c=Object(i["a"])(s["default"],r["a"],r["b"],!1,null,"d7e814ea",null);t["default"]=c.exports},e458:function(e,t,n){"use strict";n.r(t);var r=n("1376"),s=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);t["default"]=s.a}}]);
//# sourceMappingURL=chunk-5f840dc2.80b00311.js.map