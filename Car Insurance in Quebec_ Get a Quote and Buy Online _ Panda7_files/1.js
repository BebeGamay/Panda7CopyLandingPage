if(!window.TrustedSite){window.TrustedSite={config:[],window_width:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,window_height:window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,is_mobile:this.window_height<=500||this.window_width<=500,init:function(){this.log("init");if(navigator.userAgent.match(/; MSIE [6-9]/i)){return}this.load_config(function(){TrustedSite.load_trustmark();if(TrustedSite.config.load_conversion){TrustedSite.load_conversion()
}})},load_trustmark:function(){window.addEventListener("message",function(o){if(o.data&&o.data=="trustedsite_verify_show"){TrustedSite.toggleverify()}},false);var n=TrustedSite.config.host;var k=TrustedSite.config.trustmark.position_x;var a=TrustedSite.config.trustmark.position_y;var g=TrustedSite.config.trustmark.offset_x;var b=TrustedSite.config.demo;if(!b){var l=TrustedSite.storage_get("trustedsite_visit")||TrustedSite.cookie_get("trustedsite_visit");if(!l){TrustedSite.storage_set("trustedsite_visit",1,24*60);
TrustedSite.cookie_set("trustedsite_visit",1,24*60);TrustedSite.load_js("https://www.trustedsite.com/rpc/tmjs/"+n+"/visit?rand="+new Date().getTime())}}if(TrustedSite.is_mobile()&&TrustedSite.config.trustmark.disable_on_mobile){return}if(document.getElementById("trustedsite-tm-image")){return}if(document.getElementById("trustedsite-tm-float-disable")){return}if(document.getElementsByClassName("trustedsite-tm-float-disable").length>0){return}if(!TrustedSite.config.trustmark.enabled){return}var c="svg";
var i=205;var h="https://cdn.ywxi.net/meter/"+n+"/"+i+"."+c+"?ts="+TrustedSite.config.timestamp+"&l="+TrustedSite.getLanguage();if(b){h+="&demo=1"}var f=a=="bottom"?"top":"bottom";var m=k=="right"?"left":"right";var d=document.getElementById("trustedsite-tm-style");if(!d){d=document.createElement("style");d.setAttribute("id","trustedsite-tm-style");d.setAttribute("type","text/css");d.innerHTML=".trustedsite-body-noscroll{ overflow:hidden !important; width:100% !important;}";document.getElementsByTagName("head")[0].appendChild(d)
}var j=document.createElement("div");j.id="trustedsite-tm-image";j.title="TrustedSite Certified";j.style.cssText=TrustedSite.cleanStyleCss()+"position:fixed;height:38px !important;width:92px !important;overflow:hidden !important;"+a+":0px !important;"+k+":"+g+"px !important;z-index:1000003 !important;cursor:pointer !important;";j.oncontextmenu=function(){return false};j.onclick=function(){TrustedSite.toggleverify()};j.addEventListener("keydown",function(o){if(o.key==="Enter"){TrustedSite.toggleverify()
}});j.tabIndex=0;j.role="button";j.style.boxShadow="0 0 5px 0 rgba(0,0,0,0.20)";j.style.backgroundColor="#fff";j.style.backgroundImage="url("+h+")";j.style.backgroundSize="92px 38px";j.style.backgroundRepeat="no-repeat";j.style.backgroundPosition="center center";j.style["border-"+f+"-"+m+"-radius"]="2px";if(g>0){j.style["border-"+f+"-"+k+"-radius"]="2px"}TrustedSite.animatetm(j);j.appendChild(document.createElement("div"));TrustedSite.appendChild(j)},animatetm:function(a){if(TrustedSite.cookie_get("trustedsite_tm_float_seen")){a.style.bottom="-13px"
}else{TrustedSite.cookie_set("trustedsite_tm_float_seen",1,5);a.style.bottom="-92px";window.setTimeout(function(){a.style.bottom="0px"},10);TrustedSite.animatetm_hide(a,5000)}a.style.transition="1s bottom linear";a.onmouseout=function(){TrustedSite.animatetm_hide(a,1000)};a.onmouseover=function(){a.style.transition="0.2s bottom ease";this.style.bottom="0px";window.clearTimeout(TrustedSite.animatetm_hide_to)}},animatetm_hide_to:0,animatetm_hide:function(b,a){TrustedSite.animatetm_hide_to=window.setTimeout(function(){b.style.transition="0.2s all";
b.style.bottom="-13px"},a)},toggleverify:function(d){var c="https://www.trustedsite.com";if(TrustedSite.window_height<490||TrustedSite.window_width()<320||TrustedSite.config.trustmark.disable_modal){var j=c+"/verify?js=1&host="+TrustedSite.config.host+"&popup=1";j+="&lang="+TrustedSite.getLanguage();if(TrustedSite.config.demo){j+="&demo=1"}if(d){j+="&"+d}var i=window.open(j);if(!i){document.location=j}return}var j=c+"/verify-modal?js=1&host="+TrustedSite.config.host;j+="&lang="+TrustedSite.getLanguage();
if(TrustedSite.config.demo){j+="&demo=1"}if(d){j+="&"+d}var l=document.getElementById("trustedsite-tm-verify");if(!l){l=document.createElement("div");l.id="trustedsite-tm-verify";l.title="TrustedSite Certified";TrustedSite.cleanStyle(l);l.style.position="fixed";l.innerHTML='<iframe style="'+TrustedSite.cleanStyleCss()+'width:100%;height:100%;left:0;right:0;top:0;bottom:0;overflow-y:auto;overflow-x:hidden;" frameborder="0" scrolling="yes" src="'+j+'"></iframe>';l.style.background="#e6e7e8";l.style.margin="0";
l.style.padding="0";l.style.zIndex="1000004";l.style.display="none";document.body.addEventListener("keydown",TrustedSite.escapeverify);document.body.appendChild(l)}var a=document.getElementById("trustedsite-tm-overlay");if(!a){a=document.createElement("div");a.id="trustedsite-tm-overlay";TrustedSite.cleanStyle(a);a.style.position="fixed";a.style.top="0px";a.style.right="0px";a.style.left="0px";a.style.bottom="0px";a.style.width="100%";a.style.height="100%";a.style.background="rgba(20, 20, 20, .95)";
a.style.zIndex="1000003";a.style.display="none";a.onclick=function(){TrustedSite.hideverify()};a.style.cursor="zoom-out";a.appendChild(document.createElement("div"));document.body.appendChild(a)}var b=document.getElementById("trustedsite-tm-close");if(!b){b=document.createElement("div");TrustedSite.cleanStyle(b);b.id="trustedsite-tm-close";b.style.backgroundImage="url(https://cdn.ywxi.net/static/img/modal-close.png)";b.style.backgroundSize="11px 11px";b.style.backgroundRepeat="no-repeat";b.style.backgroundPosition="center center";
b.style.zIndex="1000005";b.style.position="absolute";b.style.width="11px";b.style.height="11px";b.style.right="10px";b.style.top="-20px";b.style.cursor="zoom-out";b.onclick=function(){TrustedSite.hideverify()};b.addEventListener("keydown",TrustedSite.ele_close_key);b.appendChild(document.createElement("div"));l.appendChild(b)}if(TrustedSite.is_hidden("#trustedsite-tm-verify")){var k=TrustedSite.window_width();var g=TrustedSite.window_height();var i=k;if(i>500){i=500}var f=g-60;if(f>480){f=480}l.style.width=i+"px";
l.style.height=f+"px";l.style.top=((g/2)-(f/2))+"px";l.style.left=((k/2)-(i/2))+"px";document.getElementById("trustedsite-tm-overlay").style.display="";document.getElementById("trustedsite-tm-verify").style.display="";TrustedSite.add_class("body","trustedsite-body-noscroll")}else{TrustedSite.hideverify()}},hideverify:function(){document.removeEventListener("keydown",TrustedSite.escapeverify);this.remove_element("#trustedsite-tm-overlay");this.remove_element("#trustedsite-tm-verify");this.remove_class("body","trustedsite-body-noscroll")
},escapeverify:function(a){if(a.key==="Escape"){TrustedSite.hideverify();document.removeEventListener("keydown",TrustedSite.escapeverify)}},ele_close_key:function(a){if(a.key==="Enter"){TrustedSite.hideverify();document.removeEventListener("keydown",TrustedSite.ele_close_key)}},load_conversion:function(){var a;if(TrustedSite.config.platform=="shopify"){if(location.pathname.endsWith("/thank_you")){a=Shopify.checkout.order_id}}if(TrustedSite.config.platform=="bigcommerce"){}if(!a){return}var b=document.createElement("script");
b.setAttribute("type","text/javascript");b.setAttribute("class","trustedsite-track-conversion");b.setAttribute("data-orderid",a);b.setAttribute("src","https://cdn.ywxi.net/js/conversion.js");document.getElementsByTagName("head")[0].appendChild(b)},float_reload:function(){var a=document.getElementById("trustedsite-tm-image");if(a&&(document.getElementById("trustedsite-tm-float-disable")||document.getElementsByClassName("trustedsite-tm-float-disable").length>0)){a.parentNode.removeChild(a)}TrustedSite.load_trustmark()
},load_config:function(f){var c=this;var a=false||(typeof BCData=="object"&&document.referrer.includes("/manage/page-builder"));var b=String(window.location.host).replace(/^www\./,"");var d="//s3-us-west-2.amazonaws.com/mfesecure-public/host/"+b+"/client.json?source=jsmain";c.get_json(d,function(g){c.config=g;c.config.demo=a;c.log("load_trustedsite_main");c.log(c.config);c.load_config_local();if(c.config.error&&!c.config.demo){return}if(c.config.error&&c.config.demo){c.load_config_demo(c.config)}if(f){c.do_callback(f,c)
}},function(g){if(g===403&&a){c.config.demo=a;c.load_config_demo(c.config);if(f){c.do_callback(f,c)}}console.log("trustedsite-tm-main[config]["+g+"]")})},load_config_local:function(){var a=document.getElementById("trustedsite-code");if(!a||!a.dataset){return}if(a.dataset.rescan){this.config.rescan=1}},load_config_demo:function(a){a.brand="ts";a.host="trustedsite.com";a.pro=1;a.secure=1;a.trustmark={};a.trustmark.position_x="right";a.trustmark.position_y="bottom";a.trustmark.offset_x=0;a.trustmark.enabled=1
},do_callback:function(b,a){if(document.readyState!=="loading"){b(a.config)}else{document.addEventListener("DOMContentLoaded",function(c){b(a.config)})}},cleanStyle:function(a){try{a.style.maxWidth="none"}catch(b){}try{a.style.minWidth="none"}catch(b){}try{a.style.maxHeight="none"}catch(b){}try{a.style.minHeight="none"}catch(b){}},cleanStyleCss:function(){return"margin:0;padding:0;border:0;background:none;max-width:none;max-height:none;"},cookie_set:function(b,f,g){if(g){var c=new Date();c.setTime(c.getTime()+(g*60*1000));
var a="expires="+c.toGMTString();document.cookie=b+"="+f+"; path=/;"+a}else{document.cookie=b+"="+f+"; path=/;"}},cookie_get:function(d){var b=d+"=";var a=document.cookie.split(";");for(var f=0;f<a.length;f++){var g=a[f].trim();if(g.indexOf(b)==0){return g.substring(b.length,g.length)}}return""},storage_set:function(b,d,f){if(!localStorage){return}var a=new Date();var c={value:d,expiry:a.getTime()+(f*1000*60),};localStorage.setItem(b,JSON.stringify(c))},storage_get:function(b){if(!localStorage){return""
}var c=localStorage.getItem(b);if(!c){return""}var d=JSON.parse(c);var a=new Date();if(a.getTime()>d.expiry){localStorage.removeItem(b);return""}return d.value},load_js:function(b){var a=document.createElement("script");a.setAttribute("type","text/javascript");a.setAttribute("src",b);document.getElementsByTagName("head")[0].appendChild(a)},get_element:function(b){if(typeof b==="object"){return b}if(typeof b==="string"){var a=document.querySelectorAll(b);return a.length>0?a.item(0):null}console.log("trustedsite unhandle element type ["+(typeof b)+"]");
return b},remove_element:function(a){if(!a){return}a=this.get_element(a);if(a){a.parentNode.removeChild(a)}},is_hidden:function(a){a=this.get_element(a);return window.getComputedStyle(a).display==="none"},has_class:function(a,b){a=this.get_element(a);return a.classList.contains(b)},add_class:function(a,b){a=this.get_element(a);a.classList.add(b)},remove_class:function(a,b){a=this.get_element(a);a.classList.remove(b)},get_json:function(b,c,a){var d=new XMLHttpRequest();d.open("GET",b,true);d.responseType="text";
d.onload=function(){if(d.status===200){if(c){c(JSON.parse(d.response))}}else{if(a){a(d.status)}}};d.send()},window_width:function(){return window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth},window_height:function(){return window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight},is_mobile:function(){return this.window_height()<=500||this.window_width()<=500},calc_wh:function(b,a,d){var c=b&&b.length==2?b[0]:0;var f=b&&b.length==2?b[1]:0;
if(c&&c>0){return[c,parseInt(c/a*d)]}if(f&&f>0){return[parseInt(f/d*a),f]}return[a,d]},log:function(b,a){if(!a&&(!window.location.hash||window.location.hash.indexOf("TRUSTEDSITEDEBUG")==-1)){return}console.log("trustedsite-main ",b);return 0},appendChild:function(a,c){var b=this;if(!c){c=0}if(c>100){return}if(document.body){document.body.appendChild(a)}else{window.setTimeout(function(){b.appendChild(a,c+1)},100)}},getLanguage:function(){if(typeof Shopify!=="undefined"&&typeof Shopify.locale==="string"){return encodeURIComponent(Shopify.locale)
}return encodeURIComponent(navigator.language.substring(0,2))},}}if(!window.TrustedSite_done){window.TrustedSite_done=1;TrustedSite.init()}try{window.addEventListener("message",function(a){if(a.data&&new String(a.data).indexOf("mfesecure_verifyhover_hide")==0){TrustedSite.hideverify()}if(a.data&&new String(a.data).indexOf("trustedsite_verifyhover_hide")==0){TrustedSite.hideverify()}})}catch(e){}if(!window.TrustedSiteInline){window.TrustedSiteInline={config:[],init:function(){TrustedSiteInline.log("init");
if(navigator.userAgent.match(/; MSIE [6-9]/i)){return}TrustedSiteInline.load_config(function(){TrustedSiteInline.load_inline();TrustedSiteInline.load_rescan()})},load_inline:function(){if(!TrustedSiteInline.config.demo){if(!TrustedSiteInline.config.secure||!TrustedSiteInline.config.pro){return}}var c=new String(window.location.host).replace(/^www\./,"");var a=document.querySelectorAll("div.mfes-trustmark:not(.loaded),div.trustedsite-trustmark:not(.loaded),button.trustedsite-trustmark:not(.loaded)");
for(var b=0;b<a.length;b++){var d=a.item(b);if(TrustedSiteInline.has_class(d,"loaded")){return}TrustedSiteInline.add_class(d,"loaded");TrustedSiteInline.load_inline_sub(d)}},load_inline_sub:function(k){var j=new String(window.location.host).replace(/^www\./,"");var h=parseInt(k.getAttribute("data-type"));if(!h){return}TrustedSiteInline.log("loading "+h);var b=[parseInt(k.getAttribute("data-width")),parseInt(k.getAttribute("data-height"))];var c=k.getAttribute("data-ext");if(c!="png"&&c!="svg"){c="svg"
}var i=location.protocol==="https:"?1:0;var d="";if(TrustedSiteInline.config.demo){d+="&demo=1"}if(k.tagName=="BUTTON"){k.style.border=0;k.style.margin=0;k.style.padding=0;if(!b[0]){k.style.width="100%"}}if(h==101){b=TrustedSiteInline.calc_wh(b,125,55);c="png"}else{if(h==102){b=TrustedSiteInline.calc_wh(b,90,37)}else{if(h==103){b=TrustedSiteInline.calc_wh(b,320,40)}else{if([202,214,301,302,303,304,215].indexOf(h)>=0){b=TrustedSiteInline.calc_wh(b,120,50)}else{if(h==216){d="&inbox=1";b=TrustedSiteInline.calc_wh(b,160,50)
}else{if(h==204){b=TrustedSiteInline.calc_wh(b,320,70)}else{if(h==203){b=TrustedSiteInline.calc_wh(b,320,40)}else{if([211,212,213].indexOf(h)>=0){if(!i){return}b=TrustedSiteInline.calc_wh(b,120,50)}else{if(h==1001){if(b[0]){k.style.width=b[0]+"px";k.style.display="inline-block"}k.style.height="60px";k.style.minWidth="200px";c="html"}else{if(h==1002){if(!b[0]&&!b[1]){b[1]=150}if(b[0]){k.style.width=b[0]+"px";k.style.display="inline-block"}if(b[1]){k.style.height=b[1]+"px"}k.style.minHeight="150px";
k.style.minWidth="180px";c="html"}else{return}}}}}}}}}}k.oncontextmenu=function(){return false};if(c=="html"){var a="https://www.trustedsite.com/widget/tm-"+h+"/?host="+j+"&lang="+TrustedSiteInline.getLanguage();if(TrustedSiteInline.config.demo){a+="&demo=1"}k.innerHTML='<iframe src="'+a+'" title="TrustedSite Certified" style="border:0px;height:100%;width:100%;" width="100%" height="100%"></iframe>';return}var g="https://cdn.ywxi.net/meter/"+j+"/"+h+"."+c+"?ts="+TrustedSiteInline.config.timestamp+"&l="+TrustedSiteInline.getLanguage();
if(c=="png"){g+="&w="+(2*b[0])+"&h="+(2*b[1])}var f=k.getAttribute("data-color");if(f){g+="&color="+encodeURIComponent(f)}if(TrustedSiteInline.config.demo){g+="&demo=1"}k.title="TrustedSite Certified";k.tabIndex=0;k.style.width=b[0]+"px";k.style.height=b[1]+"px";k.style.display="inline-block";k.style.backgroundImage="url("+g+")";k.style.backgroundSize="contain";k.style.backgroundPosition="top center";k.style.backgroundRepeat="no-repeat";k.style.cursor="pointer";k.onclick=function(){TrustedSiteInline.handle_verify(j,d)
};k.addEventListener("keydown",function(l){if(l.key==="Enter"){TrustedSiteInline.handle_verify(j,d)}})},handle_verify:function(c,a){if(window.TrustedSite){window.TrustedSite.toggleverify(a)}else{var b="https://www.trustedsite.com";b+="/verify?js=1&host="+c;if(a){b+="&"+a}window.open(b)}},calc_wh:function(b,a,d){var c=b&&b.length==2?b[0]:0;var f=b&&b.length==2?b[1]:0;if(c&&c>0){return[c,parseInt(c/a*d)]}if(f&&f>0){return[parseInt(f/d*a),f]}return[a,d]},load_rescan:function(){if(!TrustedSiteInline.config||!TrustedSiteInline.config.secure||!TrustedSiteInline.config.pro){return
}TrustedSiteInline.log("rescan enabled",1);window.setInterval(function(){TrustedSiteInline.load_inline()},100)},load_config:function(f){var c=this;var a=false||(typeof BCData=="object"&&document.referrer.includes("/manage/page-builder"));var b=String(window.location.host).replace(/^www\./,"");var d="//s3-us-west-2.amazonaws.com/mfesecure-public/host/"+b+"/client.json?source=jsinline";c.get_json(d,function(g){c.config=g;c.config.demo=a;c.log("load_trustedsite_inline");c.log(c.config);c.load_config_local();
if(c.config.error&&!c.config.demo){return}if(c.config.error&&c.config.demo){c.load_config_demo(c.config)}if(f){c.do_callback(f,c)}},function(g){if(g===403&&a){c.config.demo=a;c.load_config_demo(c.config);if(f){c.do_callback(f,c)}}console.log("trustedsite-tm-inline[config]["+g+"]")})},load_config_local:function(){var a=document.getElementById("trustedsite-code");if(!a||!a.dataset){return}if(a.dataset.rescan){this.config.rescan=1}},load_config_demo:function(a){a.brand="ts";a.host="trustedsite.com";
a.pro=1;a.secure=1;a.trustmark={};a.trustmark.position_x="right";a.trustmark.position_y="bottom";a.trustmark.offset_x=0;a.trustmark.enabled=1},do_callback:function(b,a){if(document.readyState!=="loading"){b(a.config)}else{document.addEventListener("DOMContentLoaded",function(c){b(a.config)})}},cleanStyle:function(a){try{a.style.maxWidth="none"}catch(b){}try{a.style.minWidth="none"}catch(b){}try{a.style.maxHeight="none"}catch(b){}try{a.style.minHeight="none"}catch(b){}},cleanStyleCss:function(){return"margin:0;padding:0;border:0;background:none;max-width:none;max-height:none;"
},cookie_set:function(b,f,g){if(g){var c=new Date();c.setTime(c.getTime()+(g*60*1000));var a="expires="+c.toGMTString();document.cookie=b+"="+f+"; path=/;"+a}else{document.cookie=b+"="+f+"; path=/;"}},cookie_get:function(d){var b=d+"=";var a=document.cookie.split(";");for(var f=0;f<a.length;f++){var g=a[f].trim();if(g.indexOf(b)==0){return g.substring(b.length,g.length)}}return""},storage_set:function(b,d,f){if(!localStorage){return}var a=new Date();var c={value:d,expiry:a.getTime()+(f*1000*60),};
localStorage.setItem(b,JSON.stringify(c))},storage_get:function(b){if(!localStorage){return""}var c=localStorage.getItem(b);if(!c){return""}var d=JSON.parse(c);var a=new Date();if(a.getTime()>d.expiry){localStorage.removeItem(b);return""}return d.value},load_js:function(b){var a=document.createElement("script");a.setAttribute("type","text/javascript");a.setAttribute("src",b);document.getElementsByTagName("head")[0].appendChild(a)},get_element:function(b){if(typeof b==="object"){return b}if(typeof b==="string"){var a=document.querySelectorAll(b);
return a.length>0?a.item(0):null}console.log("trustedsite unhandle element type ["+(typeof b)+"]");return b},remove_element:function(a){if(!a){return}a=this.get_element(a);if(a){a.parentNode.removeChild(a)}},is_hidden:function(a){a=this.get_element(a);return window.getComputedStyle(a).display==="none"},has_class:function(a,b){a=this.get_element(a);return a.classList.contains(b)},add_class:function(a,b){a=this.get_element(a);a.classList.add(b)},remove_class:function(a,b){a=this.get_element(a);a.classList.remove(b)
},get_json:function(b,c,a){var d=new XMLHttpRequest();d.open("GET",b,true);d.responseType="text";d.onload=function(){if(d.status===200){if(c){c(JSON.parse(d.response))}}else{if(a){a(d.status)}}};d.send()},window_width:function(){return window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth},window_height:function(){return window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight},is_mobile:function(){return this.window_height()<=500||this.window_width()<=500
},calc_wh:function(b,a,d){var c=b&&b.length==2?b[0]:0;var f=b&&b.length==2?b[1]:0;if(c&&c>0){return[c,parseInt(c/a*d)]}if(f&&f>0){return[parseInt(f/d*a),f]}return[a,d]},log:function(b,a){if(!a&&(!window.location.hash||window.location.hash.indexOf("TRUSTEDSITEDEBUG")==-1)){return}console.log("trustedsite-inline ",b);return 0},appendChild:function(a,c){var b=this;if(!c){c=0}if(c>100){return}if(document.body){document.body.appendChild(a)}else{window.setTimeout(function(){b.appendChild(a,c+1)},100)}},getLanguage:function(){if(typeof Shopify!=="undefined"&&typeof Shopify.locale==="string"){return encodeURIComponent(Shopify.locale)
}return encodeURIComponent(navigator.language.substring(0,2))},}}TrustedSiteInline.init();