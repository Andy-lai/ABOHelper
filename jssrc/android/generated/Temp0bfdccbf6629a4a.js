function initializeTemp0bfdccbf6629a4a() {
    flxCardLayout0a26fbc3c66d24e = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30%",
        "id": "flxCardLayout0a26fbc3c66d24e",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "masterType": constants.MASTER_TYPE_USERWIDGET,
        "skin": "slFbox0dee6417a4ead48"
    }, {}, {});
    flxCardLayout0a26fbc3c66d24e.setDefaultUnit(kony.flex.DP);
    var flxCard0g72ae216e6db4a = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "50%",
        "clipBounds": true,
        "height": "80%",
        "id": "flxCard0g72ae216e6db4a",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "masterType": constants.MASTER_TYPE_USERWIDGET,
        "skin": "CopyslFbox0g326ef9d37a64f",
        "top": "0dp",
        "width": "70%",
        "zIndex": 1
    }, {}, {});
    flxCard0g72ae216e6db4a.setDefaultUnit(kony.flex.DP);
    var imgUserView = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "35%",
        "height": "50%",
        "id": "imgUserView",
        "isVisible": true,
        "left": "16dp",
        "skin": "slImage0e7733bad8ef24d",
        "src": "usermanlogo.png",
        "top": "17dp",
        "width": "50%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var FlexContainer0ad119406520943 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "80%",
        "clipBounds": true,
        "height": "57dp",
        "id": "FlexContainer0ad119406520943",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "52dp",
        "skin": "slFbox0dee6417a4ead48",
        "top": "79dp",
        "width": "49.96%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0ad119406520943.setDefaultUnit(kony.flex.DP);
    var lblUserName = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "40%",
        "id": "lblUserName",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel0f029274f557f41",
        "text": "Name",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    FlexContainer0ad119406520943.add(lblUserName);
    flxCard0g72ae216e6db4a.add(imgUserView, FlexContainer0ad119406520943);
    flxCardLayout0a26fbc3c66d24e.add(flxCard0g72ae216e6db4a);
}