function AS_Form_h9f5f288a2d94089bb67ab4657147cf6(eventobject) {
    setActivitiesData();
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

    function ActivityCardGesture(widgetID, gestureInfo, context) {
        var leftTransObj = kony.ui.makeAffineTransform();
        var rightTransObj = kony.ui.makeAffineTransform();
        leftTransObj.translate(-180, 0);
        rightTransObj.translate(180, 0);
        var aniconfig = {
            duration: 0.5,
            fillMode: kony.anim.FILL_MODE_FORWARDS
        }
        var leftaniobj = {
            "100": {
                "transform": leftTransObj
            }
        }
        var rightaniobj = {
            "100": {
                "transform": rightTransObj
            }
        }
        var index = {
            sectionIndex: context.sectionIndex,
            rowIndex: context.rowIndex,
        }; //context.rowIndex
        var a = gestureInfo.gestureType;
        if (kony.os.toNumber(a) == 2) {
            h = gestureInfo.swipeDirection;
            if (h == 1) {
                // alert("Right")
                frmHome.sgmtActivities.animateRows({
                    rows: [index],
                    widgets: ["flxActivityOptions"],
                    animation: {
                        definition: kony.ui.createAnimation(leftaniobj),
                        config: aniconfig
                    }
                });
            } else if (h == 2) {
                frmHome.sgmtActivities.animateRows({
                    rows: [index],
                    widgets: ["flxActivityOptions"],
                    animation: {
                        definition: kony.ui.createAnimation(rightaniobj),
                        config: aniconfig
                    }
                });
            }
        }
    }
    var x = {
        fingers: 1
    };
    try {
        frmHome.flxNavHome.setGestureRecognizer(2, x, formGesture);
        frmHome.setGestureRecognizer(2, x, formGesture);
        frmHome.sgmtActivities.rowTemplate.setGestureRecognizer(2, x, ActivityCardGesture)
    } catch (err) {
        alert(typeof err);
        alert("error in function callbackSingleTapGesture: " + err.message);
    }
}