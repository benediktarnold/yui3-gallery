YUI.add("gallery-zui-rascroll",function(e){var d=0,a=false,b=false,c=function(){c.superclass.constructor.apply(this,arguments);};c.NAME="pluginRAScroll";c.NS="zras";c.ATTRS={horizontal:{value:true,lazyAdd:false,validator:e.Lang.isBoolean,setter:function(f){this._hori=f;return f;}},cooperation:{value:false,lazyAdd:false,validator:e.Lang.isBoolean,setter:function(f){this._coop=f;return f;}}};e.namespace("zui").RAScroll=e.extend(c,e.Plugin.Base,{initializer:function(){this._host=this.get("host");this._node=this._host.get("boundingBox");this._cnt=this._host.get("contentBox");this._start=false;if(!this._hori){this._cnt.setStyle("overflowX","hidden");}this._handles.push(new e.EventHandle([this._node.on("gesturemovestart",this.handleGestureMoveStart),this._node.on("gesturemove",e.bind(this.handleGestureMove,this)),this._cnt.on("gesturemoveend",e.bind(this.handleGestureMoveEnd,this),{standAlone:true})]));this.syncScroll();},handleGestureMoveStart:function(f){d++;},handleGestureMove:function(f){if(this._start){return;}this._start=true;if(!a){b=Math.abs(this._host._startClientX-f.clientX)>Math.abs(this._host._startClientY-f.clientY);a=true;}if(this._coop&&d<2){return;}if(this._hori?!b:b){this._host.set("disabled",true);}else{f.preventDefault();}},handleGestureMoveEnd:function(f){this._start=false;a=false;d=0;if(this._hori?!b:b){if(e.UA.ipad+e.UA.iphone+e.UA.ipod>=6){this._host.set("disabled",false);}else{e.later(1,this._host,this._host.set,["disabled",false]);}}},syncScroll:function(){if(this._hori){this._node.set("offsetHeight",this._node.get("scrollHeight"));}else{this.syncWidth();}},syncWidth:function(){var i=this._cnt,f=this._node.get("scrollWidth"),h=this._node.get("offsetWidth"),g=i.get("offsetWidth");if(g&&(f>h)){i.set("offsetWidth",g+h-f);}}});},"gallery-2012.11.07-21-32",{requires:["scrollview"],skinnable:false});