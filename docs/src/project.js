window.__require=function e(n,t,r){function a(o,c){if(!t[o]){if(!n[o]){var s=o.split("/");if(s=s[s.length-1],!n[s]){var u="function"==typeof __require&&__require;if(!c&&u)return u(s,!0);if(i)return i(s,!0);throw new Error("Cannot find module '"+o+"'")}}var d=t[o]={exports:{}};n[o][0].call(d.exports,function(e){return a(n[o][1][e]||e)},d,d.exports,e,n,t,r)}return t[o].exports}for(var i="function"==typeof __require&&__require,o=0;o<r.length;o++)a(r[o]);return a}({fps:[function(e,n,t){"use strict";cc._RF.push(n,"b04d1qoWphEK4qtl9uWcT1c","fps"),cc.Class({extends:cc.Component,properties:{camera:cc.Camera,debug:cc.Label},onLoad:function(){var e=this;this.cameraNode=this.camera.node,this.cameraNode.x=this.cameraNode.y=this.cameraNode.z=0,cc.Canvas.instance.node.on(cc.Node.EventType.TOUCH_MOVE,function(n){return e._onTouch(n)},this),window.DeviceOrientationEvent&&(window.addEventListener("orientationchange",function(n){return e._onScreenOrientationChangeEvent(n)}),window.addEventListener("deviceorientation",function(n){return e._deviceOrientationHandler(n)}))},_onScreenOrientationChangeEvent:function(e){this.orientation=window.orientation},_deviceOrientationHandler:function(e){this.cameraNode.eulerAngles=cc.v3(e.beta-90,e.alpha,-e.gamma),this.debug.string=parseInt(e.alpha)+", "+parseInt(e.beta)+", "+parseInt(e.gamma)+", "+parseInt(this.orientation)+"\n\n        "+parseInt(this.cameraNode.eulerAngles.x)+", "+parseInt(this.cameraNode.eulerAngles.y)+", "+parseInt(this.cameraNode.eulerAngles.z)+"\n\n        "+parseInt(this.cameraNode.quat.x)+", "+parseInt(this.cameraNode.quat.y)+", "+parseInt(this.cameraNode.quat.z)+", "+parseInt(this.cameraNode.quat.w)+"\n"},_onTouch:function(e){this.cameraNode.eulerAngles=new cc.v3(this.cameraNode.eulerAngles.x-(e.getLocation().y-e.getPreviousLocation().y)/10,this.cameraNode.eulerAngles.y+(e.getLocation().x-e.getPreviousLocation().x)/10,0)},start:function(){}}),cc._RF.pop()},{}]},{},["fps"]);