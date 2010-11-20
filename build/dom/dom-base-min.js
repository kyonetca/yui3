YUI.add("dom-base",function(d){(function(h){var n="nodeType",r="ownerDocument",s="documentElement",g="defaultView",l="parentWindow",p="tagName",j="parentNode",e="firstChild",q="previousSibling",t="nextSibling",k="contains",o="compareDocumentPosition",f="",v=h.config.doc.documentElement,m=/<([a-z]+)/i,i=function(y,w){var z=h.config.doc.createElement("div"),x=true;z.innerHTML=y;if(!z.firstChild||z.firstChild.tagName!==w){x=false;}return x;},u={byId:function(x,w){return u.allById(x,w)[0]||null;},getText:(v.textContent!==undefined)?function(x){var w="";if(x){w=x.textContent;}return w||"";}:function(x){var w="";if(x){w=x.innerText||x.nodeValue;}return w||"";},setText:(v.textContent!==undefined)?function(w,x){if(w){w.textContent=x;}}:function(w,x){if("innerText" in w){w.innerText=x;}else{if("nodeValue" in w){w.nodeValue=x;}}},ancestor:function(x,y,z){var w=null;if(z){w=(!y||y(x))?x:null;}return w||u.elementByAxis(x,j,y,null);},ancestors:function(y,z,A){var x=u.ancestor.apply(u,arguments),w=(x)?[x]:[];while((x=u.ancestor(x,z))){if(x){w.unshift(x);}}return w;},elementByAxis:function(w,z,y,x){while(w&&(w=w[z])){if((x||w[p])&&(!y||y(w))){return w;}}return null;},contains:function(x,y){var w=false;if(!y||!x||!y[n]||!x[n]){w=false;}else{if(x[k]){if(h.UA.opera||y[n]===1){w=x[k](y);}else{w=u._bruteContains(x,y);}}else{if(x[o]){if(x===y||!!(x[o](y)&16)){w=true;}}}}return w;},inDoc:function(y,z){var x=false,w;if(y&&y.nodeType){(z)||(z=y[r]);w=z[s];if(w&&w.contains&&y.tagName){x=w.contains(y);}else{x=u.contains(w,y);}}return x;},allById:function(B,w){w=w||h.config.doc;var x=[],y=[],z,A;if(w.querySelectorAll){y=w.querySelectorAll('[id="'+B+'"]');}else{if(w.all){x=w.all(B);if(x&&x.nodeType){x=[x];}if(x&&x.length){for(z=0;A=x[z++];){if(A.attributes&&A.attributes.id&&A.attributes.id.value===B){y.push(A);}}}}else{y=[u._getDoc(w).getElementById(B)];}}return y;},create:function(A,D){if(typeof A==="string"){A=h.Lang.trim(A);}D=D||h.config.doc;var z=m.exec(A),B=u._create,x=u.creators,C=null,y,E,w;if(A!=undefined){if(z&&z[1]){y=x[z[1].toLowerCase()];if(typeof y==="function"){B=y;}else{E=y;}}w=B(A,D,E).childNodes;if(w.length===1){C=w[0].parentNode.removeChild(w[0]);}else{if(w[0]&&w[0].className==="yui3-big-dummy"){if(w.length===2){C=w[0].nextSibling;}else{w[0].parentNode.removeChild(w[0]);C=u._nl2frag(w,D);}}else{C=u._nl2frag(w,D);}}}return C;},_nl2frag:function(x,A){var y=null,z,w;if(x&&(x.push||x.item)&&x[0]){A=A||x[0].ownerDocument;y=A.createDocumentFragment();if(x.item){x=h.Array(x,0,true);}for(z=0,w=x.length;z<w;z++){y.appendChild(x[z]);}}return y;},CUSTOM_ATTRIBUTES:(!v.hasAttribute)?{"for":"htmlFor","class":"className"}:{"htmlFor":"for","className":"class"},setAttribute:function(y,w,z,x){if(y&&w&&y.setAttribute){w=u.CUSTOM_ATTRIBUTES[w]||w;y.setAttribute(w,z,x);}},getAttribute:function(z,w,y){y=(y!==undefined)?y:2;var x="";if(z&&w&&z.getAttribute){w=u.CUSTOM_ATTRIBUTES[w]||w;x=z.getAttribute(w,y);if(x===null){x="";}}return x;},isWindow:function(w){return !!(w&&w.alert&&w.document);},_fragClones:{},_create:function(x,y,w){w=w||"div";var z=u._fragClones[w];if(z){z=z.cloneNode(false);}else{z=u._fragClones[w]=y.createElement(w);}z.innerHTML=x;return z;},_removeChildNodes:function(w){while(w.firstChild){w.removeChild(w.firstChild);}},addHTML:function(D,C,y){var w=D.parentNode,A=0,B,x=C,z;if(C!=undefined){if(C.nodeType){z=C;}else{if(typeof C=="string"||typeof C=="number"){x=z=u.create(C);}else{if(C[0]&&C[0].nodeType){z=h.config.doc.createDocumentFragment();while((B=C[A++])){z.appendChild(B);}}}}}if(y){if(y.nodeType){y.parentNode.insertBefore(z,y);}else{switch(y){case"replace":while(D.firstChild){D.removeChild(D.firstChild);}if(z){D.appendChild(z);}break;case"before":w.insertBefore(z,D);break;case"after":if(D.nextSibling){w.insertBefore(z,D.nextSibling);}else{w.appendChild(z);}break;default:D.appendChild(z);}}}else{if(z){D.appendChild(z);}}return x;},VALUE_SETTERS:{},VALUE_GETTERS:{},getValue:function(y){var x="",w;if(y&&y[p]){w=u.VALUE_GETTERS[y[p].toLowerCase()];if(w){x=w(y);}else{x=y.value;}}if(x===f){x=f;}return(typeof x==="string")?x:"";},setValue:function(w,x){var y;if(w&&w[p]){y=u.VALUE_SETTERS[w[p].toLowerCase()];if(y){y(w,x);}else{w.value=x;}}},siblings:function(z,y){var w=[],x=z;while((x=x[q])){if(x[p]&&(!y||y(x))){w.unshift(x);}}x=z;while((x=x[t])){if(x[p]&&(!y||y(x))){w.push(x);}}return w;},_bruteContains:function(w,x){while(x){if(w===x){return true;}x=x.parentNode;}return false;},_getRegExp:function(x,w){w=w||"";u._regexCache=u._regexCache||{};if(!u._regexCache[x+w]){u._regexCache[x+w]=new RegExp(x,w);}return u._regexCache[x+w];},_getDoc:function(w){var x=h.config.doc;if(w){x=(w[n]===9)?w:w[r]||w.document||h.config.doc;}return x;},_getWin:function(w){var x=u._getDoc(w);return x[g]||x[l]||h.config.win;},_batch:function(w,F,C,B,A,y){F=(typeof F==="string")?u[F]:F;var G,E=Array.prototype.slice.call(arguments,2),z=0,x,D;if(F&&w){while((x=w[z++])){G=G=F.call(u,x,C,B,A,y);if(typeof G!=="undefined"){(D)||(D=[]);D.push(G);}}}return(typeof D!=="undefined")?D:w;},wrap:function(z,x){var y=h.DOM.create(x),w=y.getElementsByTagName("*");if(w.length){y=w[w.length-1];}if(z.parentNode){z.parentNode.replaceChild(y,z);}y.appendChild(z);},unwrap:function(z){var x=z.parentNode,y=x.lastChild,z=x.firstChild,w=z,A;if(x){A=x.parentNode;if(A){while(z!==y){w=z.nextSibling;A.insertBefore(z,x);z=w;}A.replaceChild(y,x);}else{x.removeChild(z);}}},generateID:function(w){var x=w.id;if(!x){x=h.stamp(w);w.id=x;}return x;},creators:{}};(function(A){var B=u.creators,w=u.create,z=/(?:\/(?:thead|tfoot|tbody|caption|col|colgroup)>)+\s*<tbody/,y="<table>",x="</table>";if(A.UA.ie&&A.UA.ie<9){A.mix(B,{tbody:function(D,E){var F=w(y+D+x,E),C=F.children.tags("tbody")[0];if(F.children.length>1&&C&&!z.test(D)){C[j].removeChild(C);}return F;},script:function(C,D){var E=D.createElement("div");E.innerHTML="-"+C;E.removeChild(E[e]);return E;}},true);A.mix(u.VALUE_GETTERS,{button:function(C){return(C.attributes&&C.attributes.value)?C.attributes.value.value:"";
}});A.mix(u.VALUE_SETTERS,{button:function(D,E){var C=D.attributes.value;if(!C){C=D[r].createAttribute("value");D.setAttributeNode(C);}C.value=E;},select:function(F,G){for(var D=0,C=F.getElementsByTagName("option"),E;E=C[D++];){if(u.getValue(E)===G){u.setAttribute(E,"selected",true);break;}}}});u.creators.col=u.creators.link=u.creators.style=u.creators.script;}if(!i("<tr/>","TR")){A.mix(B,{option:function(C,D){return w('<select><option class="yui3-big-dummy" selected></option>'+C+"</select>",D);},tr:function(C,D){return w("<tbody>"+C+"</tbody>",D);},td:function(C,D){return w("<tr>"+C+"</tr>",D);},col:function(C,D){return w("<colgroup>"+C+"</colgroup>",D);},tbody:"table"});A.mix(B,{legend:"fieldset",th:B.td,thead:B.tbody,tfoot:B.tbody,caption:B.tbody,colgroup:B.tbody,optgroup:B.option});}A.mix(u.VALUE_GETTERS,{option:function(D){var C=D.attributes;return(C.value&&C.value.specified)?D.value:D.text;},select:function(D){var E=D.value,C=D.options;if(C&&C.length&&E===""){if(D.multiple){}else{E=u.getValue(C[D.selectedIndex]);}}return E;}});})(h);h.DOM=u;})(d);var b,a,c;d.mix(d.DOM,{hasClass:function(g,f){var e=d.DOM._getRegExp("(?:^|\\s+)"+f+"(?:\\s+|$)");return e.test(g.className);},addClass:function(f,e){if(!d.DOM.hasClass(f,e)){f.className=d.Lang.trim([f.className,e].join(" "));}},removeClass:function(f,e){if(e&&a(f,e)){f.className=d.Lang.trim(f.className.replace(d.DOM._getRegExp("(?:^|\\s+)"+e+"(?:\\s+|$)")," "));if(a(f,e)){c(f,e);}}},replaceClass:function(f,e,g){c(f,e);b(f,g);},toggleClass:function(f,e,g){var h=(g!==undefined)?g:!(a(f,e));if(h){b(f,e);}else{c(f,e);}}});a=d.DOM.hasClass;c=d.DOM.removeClass;b=d.DOM.addClass;d.mix(d.DOM,{setWidth:function(f,e){d.DOM._setSize(f,"width",e);},setHeight:function(f,e){d.DOM._setSize(f,"height",e);},_setSize:function(f,h,g){g=(g>0)?g:0;var e=0;f.style[h]=g+"px";e=(h==="height")?f.offsetHeight:f.offsetWidth;if(e>g){g=g-(e-g);if(g<0){g=0;}f.style[h]=g+"px";}}});},"@VERSION@",{requires:["oop"]});