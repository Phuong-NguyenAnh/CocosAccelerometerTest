<<<<<<< HEAD
window.__require=function e(n,t,r){function o(a,c){if(!t[a]){if(!n[a]){var u=a.split("/");if(u=u[u.length-1],!n[u]){var s="function"==typeof __require&&__require;if(!c&&s)return s(u,!0);if(i)return i(u,!0);throw new Error("Cannot find module '"+a+"'")}}var d=t[a]={exports:{}};n[a][0].call(d.exports,function(e){return o(n[a][1][e]||e)},d,d.exports,e,n,t,r)}return t[a].exports}for(var i="function"==typeof __require&&__require,a=0;a<r.length;a++)o(r[a]);return o}({fps:[function(e,n,t){"use strict";cc._RF.push(n,"66a16rZMupNdqwqGQ1M7VUO","fps"),cc.Class({extends:cc.Component,properties:{camera:cc.Camera,debug:cc.Label},onLoad:function(){var e=this;this.cameraNode=this.camera.node,this.cameraNode.x=this.cameraNode.y=this.cameraNode.z=0,cc.Canvas.instance.node.on(cc.Node.EventType.TOUCH_MOVE,function(n){return e._onTouch(n)},this),window.DeviceOrientationEvent&&(window.addEventListener("orientationchange",function(n){return e._onScreenOrientationChangeEvent(n)}),window.addEventListener("deviceorientation",function(n){return e._deviceOrientationHandler(n)}))},_onScreenOrientationChangeEvent:function(e){this.orientation=window.orientation},_deviceOrientationHandler:function(e){cc.v3(0,0,1);var n=cc.v3(e.beta,e.alpha,-e.gamma),t=cc.quat(-Math.sqrt(.5),0,0,Math.sqrt(.5)),r=cc.quat().fromEuler(n);r.mul(t,r),this.cameraNode.quat=r},_onTouch:function(e){this.cameraNode.eulerAngles=new cc.v3(this.cameraNode.eulerAngles.x-(e.getLocation().y-e.getPreviousLocation().y)/10,this.cameraNode.eulerAngles.y+(e.getLocation().x-e.getPreviousLocation().x)/10,0)},start:function(){}}),cc._RF.pop()},{}]},{},["fps"]);
=======
window.__require=function t(n,o,e){function c(r,s){if(!o[r]){if(!n[r]){var a=r.split("/");if(a=a[a.length-1],!n[a]){var u="function"==typeof __require&&__require;if(!s&&u)return u(a,!0);if(i)return i(a,!0);throw new Error("Cannot find module '"+r+"'")}}var h=o[r]={exports:{}};n[r][0].call(h.exports,function(t){return c(n[r][1][t]||t)},h,h.exports,t,n,o,e)}return o[r].exports}for(var i="function"==typeof __require&&__require,r=0;r<e.length;r++)c(e[r]);return c}({DeviceOrientationControl:[function(t,n,o){"use strict";cc._RF.push(n,"928b4GnPHNL/IUvHx699WYz","DeviceOrientationControl"),cc.Class({extends:cc.Component,onLoad:function(){var t=this;this.node.x=this.node.z=0,this.node.y=100,window.addEventListener("deviceorientation",function(n){return t.onDeviceOrientationChangeEvent(n)},!1)},onDeviceOrientationChangeEvent:function(t){var n=this.node.quat;n.fromEuler(cc.v3(t.beta,t.alpha,-t.gamma)),cc.log(n),n.mul(cc.quat(-Math.sqrt(.5),0,0,Math.sqrt(.5)),n),cc.log(n),this.node.quat=n},start:function(){}}),cc._RF.pop()},{}],raycast:[function(t,n,o){"use strict";cc._RF.push(n,"33357aK1a5LhqRVgk1JUqcD","raycast");cc.Color.WHITE;cc.Class({extends:cc.Component,properties:{mesh:cc.Node,camera:cc.Camera},start:function(){var t=cc.find("Canvas");t.on(cc.Node.EventType.TOUCH_START,this.onTouchStart,this),t.on(cc.Node.EventType.TOUCH_MOVE,this.onTouchMove,this),t.on(cc.Node.EventType.TOUCH_END,this.onTouchEnd,this),this.touchPos=null,this.results=[]},onTouchStart:function(t){this.touchPos=t.touch.getLocation()},onTouchMove:function(t){this.touchPos=t.touch.getLocation()},onTouchEnd:function(t){this.touchPos=null},raycast:function(t){var n=this.camera.getRay(t);return cc.geomUtils.intersect.raycast(this.node,n)},update:function(t){for(var n=0;n<this.results.length;n++)this.results[n].node.opacity=255;if(this.results.length=0,this.touchPos){var o=this.camera.getRay(this.touchPos),e=cc.geomUtils.intersect.raycast(this.node,o);if(e.length>0){var c=e[0].distance,i=cc.vmath.vec3.normalize(cc.v3(),o.d),r=cc.vmath.vec3.scaleAndAdd(cc.v3(),o.o,i,c);this.mesh.position=r,console.log(r)}this.results=e}}}),cc._RF.pop()},{}]},{},["DeviceOrientationControl","raycast"]);
>>>>>>> 293593ac109da9babe9a4b47bdb8b3ab2d5c4fbd
