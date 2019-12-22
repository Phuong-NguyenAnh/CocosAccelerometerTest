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
        let quat = this.cameraNode.quat.fromEuler(cc.v3(event.beta, event.alpha, -event.gamma))
        let a = Math.sqrt(0.5)
        quat.mul(cc.quat(-a, 0, 0, a), quat)
        this.cameraNode.quat = quat
        console.log(this.cameraNode.quat)
        this.debug.string = `${parseInt(event.alpha)}, ${parseInt(event.beta)}, ${parseInt(event.gamma)}\n
        ${parseInt(this.cameraNode.eulerAngles.x)}, ${parseInt(this.cameraNode.eulerAngles.y)}, ${parseInt(this.cameraNode.eulerAngles.z)}\n`
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
