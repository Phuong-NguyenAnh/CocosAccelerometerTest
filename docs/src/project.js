window.__require=function e(n,t,r){function i(a,c){if(!t[a]){if(!n[a]){var u=a.split("/");if(u=u[u.length-1],!n[u]){var s="function"==typeof __require&&__require;if(!c&&s)return s(u,!0);if(o)return o(u,!0);throw new Error("Cannot find module '"+a+"'")}}var d=t[a]={exports:{}};n[a][0].call(d.exports,function(e){return i(n[a][1][e]||e)},d,d.exports,e,n,t,r)}return t[a].exports}for(var o="function"==typeof __require&&__require,a=0;a<r.length;a++)i(r[a]);return i}({fps:[function(e,n,t){"use strict";cc._RF.push(n,"66a16rZMupNdqwqGQ1M7VUO","fps"),cc.Class({extends:cc.Component,properties:{camera:cc.Camera,debug:cc.Label},onLoad:function(){var e=this;this.cameraNode=this.camera.node,this.cameraNode.x=this.cameraNode.y=this.cameraNode.z=0,cc.Canvas.instance.node.on(cc.Node.EventType.TOUCH_MOVE,function(n){return e._onTouch(n)},this),window.DeviceOrientationEvent&&(window.addEventListener("orientationchange",function(n){return e._onScreenOrientationChangeEvent(n)}),window.addEventListener("deviceorientation",function(n){return e._deviceOrientationHandler(n)}))},_onScreenOrientationChangeEvent:function(e){this.orientation=window.orientation},_deviceOrientationHandler:function(e){var n=cc.v3(e.beta,e.alpha,-e.gamma);this.debug.string=e.alpha+", "+e.beta+", "+e.gamma;var t=cc.quat(-.5,0,0,.5),r=cc.quat().fromEuler(n);r.mul(t,r),r.mul(cc.quat(0,0,1,-this.orientation||0),r),this.cameraNode.quat=r},_onTouch:function(e){this.cameraNode.eulerAngles=new cc.v3(this.cameraNode.eulerAngles.x-(e.getLocation().y-e.getPreviousLocation().y)/10,this.cameraNode.eulerAngles.y+(e.getLocation().x-e.getPreviousLocation().x)/10,0)},start:function(){}}),cc._RF.pop()},{}]},{},["fps"]);