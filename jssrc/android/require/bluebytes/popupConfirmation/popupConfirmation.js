define(function() {
    return function(controller) {
        var popupConfirmation = new kony.ui.FlexContainer({
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "popupConfirmation",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        popupConfirmation.setDefaultUnit(kony.flex.DP);
        var flxPopupConfirmation = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "height": "30%",
            "id": "flxPopupConfirmation",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyslFbox0ba5ff8f409d045",
            "top": "115dp",
            "width": "80%",
            "zIndex": 1
        }, {}, {});
        flxPopupConfirmation.setDefaultUnit(kony.flex.DP);
        var lblPopupConfirmation = new kony.ui.Label({
            "height": "75%",
            "id": "lblPopupConfirmation",
            "isVisible": true,
            "left": "0%",
            "skin": "CopyslLabel0a4383d51dc5047",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0%",
            "width": "100.00%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [2, 2, 2, 2],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var btnPopupConfirmationOk = new kony.ui.Button({
            "centerX": "50%",
            "focusSkin": "slButtonGlossRed",
            "height": "30dp",
            "id": "btnPopupConfirmationOk",
            "isVisible": true,
            "left": 0,
            "skin": "slButtonGlossBlue",
            "text": "Button",
            "top": "80%",
            "width": "50%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var btnPopupConfirmationNo = new kony.ui.Button({
            "focusSkin": "slButtonGlossRed",
            "height": "50dp",
            "id": "btnPopupConfirmationNo",
            "isVisible": true,
            "left": "16dp",
            "skin": "slButtonGlossBlue",
            "text": "Button",
            "top": "60dp",
            "width": "260dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxPopupConfirmation.add(lblPopupConfirmation, btnPopupConfirmationOk, btnPopupConfirmationNo);
        popupConfirmation.add(flxPopupConfirmation);
        return popupConfirmation;
    }
})