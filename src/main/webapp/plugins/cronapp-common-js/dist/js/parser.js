!function(){window.parseXml=function(e){var t=null;if(window.DOMParser)try{t=(new DOMParser).parseFromString(e,"text/xml")}catch(e){t=null}else if(window.ActiveXObject)try{t=new ActiveXObject("Microsoft.XMLDOM"),t.async=!1,t.loadXML(e)||console.log(t.parseError.reason+t.parseError.srcText)}catch(e){t=null}return t},window.xml2json=function(e,t){var n={toObj:function(e){var t={};if(1==e.nodeType){if(e.attributes.length)for(var r=0;r<e.attributes.length;r++)t["@"+e.attributes[r].nodeName]=(e.attributes[r].nodeValue||"").toString();if(e.firstChild){for(var o=0,i=0,a=!1,l=e.firstChild;l;l=l.nextSibling)1==l.nodeType?a=!0:3==l.nodeType&&l.nodeValue.match(/[^ \f\n\r\t\v]/)?o++:4==l.nodeType&&i++;if(a)if(o<2&&i<2){n.removeWhite(e);for(var l=e.firstChild;l;l=l.nextSibling)3==l.nodeType?t["#text"]=n.escape(l.nodeValue):4==l.nodeType?t["#cdata"]=n.escape(l.nodeValue):t[n.normalizeName(l.nodeName)]?t[n.normalizeName(l.nodeName)]instanceof Array?t[n.normalizeName(l.nodeName)][t[n.normalizeName(l.nodeName)].length]=n.toObj(l):t[n.normalizeName(l.nodeName)]=[t[n.normalizeName(l.nodeName)],n.toObj(l)]:t[n.normalizeName(l.nodeName)]=n.toObj(l)}else e.attributes.length?t["#text"]=n.escape(n.innerXml(e)):t=n.escape(n.innerXml(e));else if(o)e.attributes.length?t["#text"]=n.escape(n.innerXml(e)):t=n.escape(n.innerXml(e));else if(i)if(i>1)t=n.escape(n.innerXml(e));else for(var l=e.firstChild;l;l=l.nextSibling)t["#cdata"]=n.escape(l.nodeValue)}e.attributes.length||e.firstChild||(t=null)}else 9==e.nodeType?t=n.toObj(e.documentElement):console.log("unhandled node type: "+e.nodeType);return t},normalizeName:function(e){if(e&&e.length>5&&0==e.indexOf("cron-")){e=e.substr(5);var t="",n=!1;for(var r in e){var o=e.charAt(r);n&&"-"!=o?(t+=o.toUpperCase(),n=!1):"-"==o?n=!0:t+=o.toLowerCase()}return t}},toJson:function(e,t,r){var o=t?'"'+t+'"':"";if(e instanceof Array){for(var i=0,a=e.length;i<a;i++)e[i]=n.toJson(e[i],"",r+"\t");o+=(t?":[":"[")+(e.length>1?"\n"+r+"\t"+e.join(",\n"+r+"\t")+"\n"+r:e.join(""))+"]"}else if(null==e)o+=(t&&":")+"null";else if("object"==typeof e){var l=[];for(var s in e)l[l.length]=n.toJson(e[s],s,r+"\t");o+=(t?":{":"{")+(l.length>1?"\n"+r+"\t"+l.join(",\n"+r+"\t")+"\n"+r:l.join(""))+"}"}else if("string"==typeof e){var u=$.trim(e.toString());o+=(t&&":")+'"'+n.htmlDecode(u)+'"'}else o+=(t&&":")+n.htmlDecode($.trim(e.toString()));return o},htmlDecode:function(e){return(new DOMParser).parseFromString(e,"text/html").documentElement.textContent},innerXml:function(e){var t="";if("innerHTML"in e)t=e.innerHTML;else for(var n=function(e){var t="";if(1==e.nodeType){t+="<"+e.nodeName;for(var r=0;r<e.attributes.length;r++)t+=" "+e.attributes[r].nodeName+'="'+(e.attributes[r].nodeValue||"").toString()+'"';if(e.firstChild){t+=">";for(var o=e.firstChild;o;o=o.nextSibling)t+=n(o);t+="</"+e.nodeName+">"}else t+="/>"}else 3==e.nodeType?t+=e.nodeValue:4==e.nodeType&&(t+="<![CDATA["+e.nodeValue+"]]>");return t},r=e.firstChild;r;r=r.nextSibling)t+=n(r);return t},escape:function(e){return e.trim().replace(/[\\]/g,"\\\\").replace(/[\"]/g,'\\"').replace(/[\n]/g,"\\n").replace(/[\r]/g,"\\r")},removeWhite:function(e){e.normalize();for(var t=e.firstChild;t;)if(3==t.nodeType)if(t.nodeValue.match(/[^ \f\n\r\t\v]/))t=t.nextSibling;else{var r=t.nextSibling;e.removeChild(t),t=r}else 1==t.nodeType?(n.removeWhite(t),t=t.nextSibling):t=t.nextSibling;return e}};9==e.nodeType&&(e=e.documentElement);var r=n.toJson(n.toObj(n.removeWhite(e)),e.nodeName,"\t");return"{\n"+t+(t?r.replace(/\t/g,t):r.replace(/\t|\n/g,""))+"\n}"},window.json2xml=function(e,t){var n=e,r=document.createElement(t),o=function(e){return{}.toString.call(e).split(" ")[1].slice(0,-1).toLowerCase()},i=function(e){var t="";for(var n in e){var r=e.charAt(n);n>0&&r==r.toUpperCase()&&(t+="-"),t+=r.toLowerCase()}return"cron-"+t},a=function(e,t,n,r){if("array"!=o(n)&&"object"!=o(n))"null"!=o(n)&&t.appendChild(document.createTextNode(n));else for(var a in n){var l=n[a];if("__type"==a&&"object"==o(n))t.setAttribute("__type",l);else if("object"==o(l)){var s=t.appendChild(document.createElementNS(null,i(a)));e(e,s,l)}else if("array"==o(l))for(var u in l){var s=t.appendChild(document.createElementNS(null,i(a)));e(e,s,l[u],!0)}else{var c=document.createElementNS(null,i(a));"null"!=o(l)&&("string"==o(l)&&(l=l.trim()),c.appendChild(document.createTextNode(l)));var s=t.appendChild(c)}}};return a(a,r,n,o(n)),r.outerHTML},window.buildElementOptions=function(e){var t=$(e).closest("[data-component]").find("cron-options"),n=parseXml("<cron-options>"+$(t).html()+"</cron-options>"),r=xml2json(n);return r&&(r=r.slice(1),r=r.substring(0,r.length-1),r=r.trim(),r=r.replace(/undefined"cron-options":/gm,""),r=r.replace(/"undefined"/gm,""),r=r.replace(/"undefined:"/gm,""),r=r.replace(/undefined:/gm,""),r=r.replace(/undefined/gm,""),r=r.replace(/"cron-options":/gm,"")),r},window.objectClone=function(e,t){var n;if(null==e||"object"!=typeof e)return e;if(e instanceof Date)return n=new Date,n.setTime(e.getTime()),n;if(e instanceof Array){n=[];for(var r=0,o=e.length;r<o;r++)n[r]=objectClone(e[r],void 0);return n}if(e instanceof Object){n={};for(var i in e)e.hasOwnProperty(i)&&void 0!=e[i]&&"_"!=i.substr(0,1)&&!function(e){return e&&"[object Function]"==={}.toString.call(e)}(e[i])&&function(e,t){if(t){for(var n in t)if(e==n)return!0;return!1}return!0}(i,t)&&(n[i]=objectClone(e[i],t[i]));return n}throw new Error("Unable to copy obj! Its type isn't supported.")},window.getOperatorODATA=function(e){return"="==e?" eq ":"!="==e?" ne ":">"==e?" gt ":">="==e?" ge ":"<"==e?" lt ":"<="==e?" le ":void 0},window.executeRight=function(right){var result="null";return null!=right&&(right.startsWith(":")?result=right:(result=eval(right),result instanceof Date?result="datetimeoffset'"+result.toISOString()+"'":"string"==typeof result&&(result="'"+result+"'"))),result},window.parserOdata=function(e){var t="",n=e.type;if(e.args)for(var r=0;r<e.args.length;r++){var o=e.args[r],i=n;0==r&&(i=""),t=o.args&&o.args.length>0?t+" "+i.toLowerCase()+" ( "+parserOdata(o)+" ) ":t+" "+i.toLowerCase()+" "+o.left+getOperatorODATA(o.type)+executeRight(o.right)}return t.trim()}}();