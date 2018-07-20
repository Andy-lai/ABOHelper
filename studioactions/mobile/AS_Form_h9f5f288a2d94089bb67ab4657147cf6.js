function AS_Form_h9f5f288a2d94089bb67ab4657147cf6(eventobject) {
    frmHome.flxNavHome.left = "-100%"

    function formGesture(widgetID, gestureInfo) {
        var a = gestureInfo.gestureType;
        if (kony.os.toNumber(a) == 2) {
            h = gestureInfo.swipeDirection;
            if (h == 1) {
                moveAnimation(frmHome.flxNavHome, "-100%");
                frmHome.flxMainActivity.setEnabled(true)
            }
        }
    }

    function ActivityCardGesture(widgetID, gestureInfo) {
        var a = gestureInfo.gestureType;
        if (kony.os.toNumber(a) == 2) {
            h = gestureInfo.swipeDirection;
            if (h == 2) {
                moveAnimation("-100%");
                frmHome.flxMainActivity.setEnabled(true)
            }
        }
    }
    var x = {
        fingers: 1,
        taps: 1
    };
    try {
        frmHome.flxNavHome.setGestureRecognizer(2, x, formGesture);
        frmHome.setGestureRecognizer(2, x, formGesture);
    } catch (err) {
        alert(typeof err);
        alert("error in function callbackSingleTapGesture: " + err.message);
    }
}