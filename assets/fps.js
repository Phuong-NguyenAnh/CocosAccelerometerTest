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
        camera: cc.Camera,
        debug: cc.Label,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.cameraNode = this.camera.node
        this.cameraNode.x = this.cameraNode.y = this.cameraNode.z = 0

        cc.Canvas.instance.node.on(cc.Node.EventType.TOUCH_MOVE, (event) => this._onTouch(event), this)

        if (window.DeviceOrientationEvent) {
            window.addEventListener('orientationchange', (event) => this._onScreenOrientationChangeEvent(event));
            window.addEventListener('deviceorientation', (event) => this._deviceOrientationHandler(event));
        }
    },

    _onScreenOrientationChangeEvent(event) {
        this.orientation = window.orientation
    },

    _deviceOrientationHandler(event) {
        var zee = cc.v3(0, 0, 1);
        var euler = cc.v3(event.beta, event.alpha, - event.gamma);
        this.debug.string = `${event.alpha}, ${event.beta}, ${event.gamma}`
        var q1 = cc.quat(- Math.sqrt(0.5), 0, 0, Math.sqrt(0.5)); // - PI/2 around the x-axis
        let quat = cc.quat().fromEuler(euler)
        quat.mul(q1, quat) // camera looks out the back of the device, not the top
        // quat.mul(cc.quat(0, 0, 1, -this.orientation || 0), quat)
        this.cameraNode.quat = quat
    },

    _onTouch(event) {
        this.cameraNode.eulerAngles = new cc.v3(
            this.cameraNode.eulerAngles.x - (event.getLocation().y - event.getPreviousLocation().y) / 10,
            this.cameraNode.eulerAngles.y + (event.getLocation().x - event.getPreviousLocation().x) / 10,
            0
        )
    },

    start() {

    },

    // update (dt) {},
});
