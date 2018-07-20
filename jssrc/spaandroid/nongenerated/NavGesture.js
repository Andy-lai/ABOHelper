function moveAnimation(obj, leftVal) {
    obj.animate(kony.ui.createAnimation({
        "100": {
            "left": leftVal,
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": "1",
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.3,
        "direction": kony.anim.DIRECTION_NONE
    }, {
        "animationEnd": {}
    });
}