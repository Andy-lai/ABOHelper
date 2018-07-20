function initializeflxNav() {
    flxNav = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "80dp",
        "id": "flxNav",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "slFbox0b6a20b6c81764e"
    }, {
        "containerWeight": 100
    }, {});
    flxNav.setDefaultUnit(kony.flex.DP);
    var lblNavItem = new kony.ui.Label({
        "centerY": "50%",
        "height": "50dp",
        "id": "lblNavItem",
        "isVisible": true,
        "left": "15dp",
        "skin": "CopyslLabel0j3685622805f48",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "90.48%",
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    flxNav.add(lblNavItem);
}