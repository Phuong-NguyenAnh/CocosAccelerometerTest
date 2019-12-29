// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        debug: cc.Label,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.node.x = this.node.y = this.node.z = 0


        cc.Canvas.instance.node.on(cc.Node.EventType.TOUCH_MOVE, (event) => this._onTouch(event), this)

        if (window.DeviceOrientationEvent) {
            window.addEventListener('deviceorientation', (event) => this._deviceOrientationHandler(event), false);
        }
    },

    _deviceOrientationHandler(event) {
        let euler = cc.v3(event.beta -90, event.alpha, event.gamma)
        let quat = this.node.quat.fromEuler(euler)

        //Calculate Pitch in degrees (-180 to 180)
        let sinP = 2.0 * (quat.w * quat.x + quat.y * quat.z);
        let cosP = 1.0 - 2.0 * (quat.x * quat.x + quat.y * quat.y);
        let pitch = Math.atan2(sinP, cosP) * (180 / Math.PI);

        //Calculate Tilt in degrees (-90 to 90)
        let sinT = 2.0 * (quat.w * quat.y - quat.z * quat.x);
        let tilt = Math.asin(sinT) * (180 / Math.PI);
        if (Math.abs(sinT) >= 1)
            tilt = Math.sign(Math.PI / 2, sinT) * (180 / Math.PI);
        else
            tilt = Math.asin(sinT) * (180 / Math.PI);
    
        //Calculate Azimuth in degrees (0 to 360; 0 = North, 90 = East, 180 = South, 270 = West)
        let sinA = 2.0 * (quat.w * quat.z + quat.x * quat.y);
        let cosA = 1.0 - 2.0 * (quat.y * quat.y + quat.z * quat.z);
        let azimuth = Math.atan2(sinA, cosA) * (180 / Math.PI);

        console.log(pitch, tilt, azimuth)
        this.node.eulerAngles = cc.v3(pitch, tilt, azimuth)

        
        // quat.mul(cc.quat(-Math.sqrt(0.5), 0 ,0, Math.sqrt(0.5)), quat) // - PI/2 around the x-axis
        // this.cameraNode.quat = quat
        // this.debug.string = `${parseInt(event.alpha)}, ${parseInt(event.beta)}, ${parseInt(event.gamma)}\n
        // ${parseInt(this.cameraNode.eulerAngles.x)}, ${parseInt(this.cameraNode.eulerAngles.y)}, ${parseInt(this.cameraNode.eulerAngles.z)}\n`
    },

    _onTouch(event) {
        let euler = new cc.v3(
            this.node.eulerAngles.x - (event.getLocation().y - event.getPreviousLocation().y) / 10,
            this.node.eulerAngles.y + (event.getLocation().x - event.getPreviousLocation().x) / 10,
            0
        )
        this.node.quat = this.node.quat.fromEuler(euler)
    },

    start() {

    },

    // update(dt) {
    // },
});
