YUI.add("node",function(C){C.Array._diff=function(M,L){var Q=[],S=false;outer:for(var O=0,R=M.length;O<R;O++){S=false;for(var N=0,P=L.length;N<P;N++){if(M[O]===L[N]){S=true;continue outer;}}if(!S){Q[Q.length]=M[O];}}return Q;};C.Array.diff=function(M,L){return{added:C.Array._diff(L,M),removed:C.Array._diff(M,L)};};var J=[],I=Array.prototype.slice,D="_yuid",A=function(M){var N=M.doc||C.config.doc,L=M.nodes||[];if(typeof L==="string"){this._query=L;L=C.Selector.query(L,N);}C.stamp(this);A._instances[this[D]]=this;J[this[D]]=L;A.superclass.constructor.apply(this,arguments);};A.NAME="NodeList";A.ATTRS={style:{value:{}}};A._instances=[];A.each=function(L,O,N){var M=J[L[D]];if(M&&M.length){C.Array.each(M,O,N||L);}else{}};A.DEFAULT_SETTER=function(L,N){var M=A._tmpNode=A._tmpNode||C.Node.create("<div>");A.each(this,function(P){var O=C.Node._instances[P[D]];if(!O){K[M[D]]=P;O=M;}O.set(L,N);});};A.DEFAULT_GETTER=function(L){var N=A._tmpNode=A._tmpNode||C.Node.create("<div>"),M=[];A.each(this,function(P){var O=C.Node._instances[P[D]];if(!O){K[N[D]]=P;O=N;}M[M.length]=O.get(L);});return M;};C.extend(A,C.Base);C.mix(A.prototype,{initializer:function(L){},hasAttr:function(L){return this._conf.get(L);},get:function(L){if(!this.hasAttr(L)){this._addAttr(L);}return A.superclass.constructor.prototype.get.apply(this,arguments);},set:function(L,M){if(!this.hasAttr(L)){this._addAttr(L);}A.superclass.constructor.prototype.set.apply(this,arguments);},on:function(Q,P,O,L){var N=I.call(arguments,0),M;N.splice(2,0,J[this[D]]);if(G.DOM_EVENTS[Q]){C.Event.attach.apply(C.Event,N);}return A.superclass.constructor.prototype.on.apply(this,arguments);},destructor:function(){J[this[D]]=[];delete A._instances[this[D]];},refresh:function(){var M,L,N=J[this[D]];if(this._query){if(J[this[D]]&&J[this[D]][0]&&J[this[D]][0].ownerDocument){M=J[this[D]][0].ownerDocument;}J[this[D]]=C.Selector.query(this._query,M||C.config.doc);L=C.Array.diff(N,J[this[D]]);L.added=L.added?C.all(L.added):null;L.removed=L.removed?C.all(L.removed):null;this.fire("refresh",L);}},size:function(){return J[this[D]].length;},toString:function(){var O="",N=this[D]+": not bound to any nodes",L=J[this[D]];if(L&&L[0]){var M=L[0];O+=M[E];if(M.id){O+="#"+M.id;}if(M.className){O+="."+M.className.replace(" ",".");}if(L.length>1){O+="...["+L.length+" items]";}}return O||N;},_addAttr:function(L){var M=J[this[D]]||[];this.addAttr(L,{getter:function(){return A.DEFAULT_GETTER.call(this,L);},setter:function(N){A.DEFAULT_SETTER.call(this,L,N);}});}},true);C.NodeList=A;C.all=function(M,O,L){var N=new A({nodes:M,doc:O,restrict:L});return N.size()?N:null;};var K=[],I=Array.prototype.slice,H=".",E="nodeName",D="_yuid",G=function(L){this[D]=C.stamp(L.node);K[this[D]]=L.node;G._instances[this[D]]=this;F.apply(this,arguments);},F=C.Base,B=C.Base.prototype;G.NAME="Node";G.DOM_EVENTS={click:true};G._instances={};G.getDOMNode=function(L){return K[L[D]];};G.get=function(N,O,M){var L=null;N=(typeof N==="string")?C.Selector.query(N,O,true):N;if(N){L=G._instances[N[D]]||new G({node:N,restricted:M});}return L;};G.create=function(){return C.get(C.DOM.create.apply(C.DOM,arguments));};G.ATTRS={text:{getter:function(){return C.DOM.getText(K[this[D]]);},readOnly:true},restricted:{writeOnce:true,value:false}};G.DEFAULT_SETTER=function(L,O){var M=K[this[D]],P,N;if(L.indexOf(H)!==-1){P=L;N=L.split(H);L=N.shift();if(N){O=C.Object.setValue(M[L],N,O);if(O===undefined){allowSet=false;}}}else{M[L]=O;}return O;};G.DEFAULT_GETTER=function(L){var M=K[this[D]];return M[L];};C.extend(G,C.Base);C.mix(G.prototype,{hasAttr:function(L){return !!this._conf.get(L);},toString:function(){var N="",M=this[D]+": not bound to a node",L=K[this[D]];if(L){N+=L[E];if(L.id){N+="#"+L.id;}if(L.className){N+="."+L.className.replace(" ",".");}N+=" "+this[D];}return N||M;},_addDOMAttr:function(L){var M=K[this[D]],N=L.split(".")[0];if(M&&M[N]!==undefined){this.addAttr(N,{getter:function(){return G.DEFAULT_GETTER.call(this,L);},setter:function(O){return G.DEFAULT_SETTER.call(this,L,O);}});}else{}},addNode:function(M,L){return C.DOM.insertNode(K[this[D]],M,L);},on:function(P,O,N,L){var M=I.call(arguments,0);M.splice(2,0,K[this[D]]);if(G.DOM_EVENTS[P]){C.Event.attach.apply(C.Event,M);}return B.on.apply(this,arguments);},detach:function(N,M){var L=_slice.call(arguments,0);L.splice(2,0,K[this[D]]);return C.Event.detach.apply(C.Event,L);},get:function(L){if(!this.hasAttr(L)){this._addDOMAttr(L);}return B.get.apply(this,arguments);},set:function(L,M){if(!this.hasAttr(L)){this._addDOMAttr(L);}B.set.apply(this,arguments);},destructor:function(){K[this[D]]=[];delete G._instances[this[D]];}},true);C.Node=G;C.get=C.Node.get;},"@VERSION@",{requires:["dom"]});