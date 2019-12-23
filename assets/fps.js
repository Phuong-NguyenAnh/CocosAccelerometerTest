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
            window.addEventListener('deviceorientation', (event) => this._deviceOrientationHandler(event));
        }
    },

    _deviceOrientationHandler(event) {
        this.deviceOrientation = event
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

    update(dt) {
        if (this.deviceOrientation) {
            let euler = cc.v3(this.deviceOrientation.beta, this.deviceOrientation.alpha, -this.deviceOrientation.gamma)
            let quat = this.node.quat.fromEuler(euler)
            quat.mul(cc.quat(-Math.sqrt(0.5), 0, 0, Math.sqrt(0.5)), quat) // - PI/2 around the x-axis
            this.node.quat = quat
            this.debug.string = `${parseInt(event.alpha)}, ${parseInt(event.beta)}, ${parseInt(event.gamma)}\n
            ${parseInt(this.node.eulerAngles.x)}, ${parseInt(this.node.eulerAngles.y)}, ${parseInt(this.node.eulerAngles.z)}\n`
        }
    },
});
