function initializeFBox0e62db3a21db547() {
    FBox0e62db3a21db547 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": false,
        "height": "55dp",
        "id": "FBox0e62db3a21db547",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "width": "100%"
    }, {
        "containerWeight": 100
    }, {});
    FBox0e62db3a21db547.setDefaultUnit(kony.flex.DP);
    var flxCard = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "28dp",
        "id": "flxCard",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "20dp",
        "skin": "CopyslFbox0b22838b5786c47",
        "top": "15dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "containerWeight": 100
    }, {});
    flxCard.setDefaultUnit(kony.flex.DP);
    var lblActivityTitle = new kony.ui.Label({
        "id": "lblActivityTitle",
        "isVisible": true,
        "left": "25dp",
        "skin": "CopyslLabel0e2df8e4249a840",
        "text": "Label",
        "top": "3dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
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
        "renderAsAnchor": false,
        "textCopyable": false
    });
    flxCard.add(lblActivityTitle);
    FBox0e62db3a21db547.add(flxCard);
}