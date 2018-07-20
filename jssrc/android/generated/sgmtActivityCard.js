function initializesgmtActivityCard() {
    flxActivityCardContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flxActivityCardContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "skin": "slFbox"
    }, {}, {});
    flxActivityCardContainer.setDefaultUnit(kony.flex.DP);
    var flxActivityCard = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "75dp",
        "id": "flxActivityCard",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "1%",
        "skin": "CopyslFbox0i18f2861194d45",
        "top": "5dp",
        "width": "98%",
        "zIndex": 1
    }, {}, {});
    flxActivityCard.setDefaultUnit(kony.flex.DP);
    var lblActivityCardBody = new kony.ui.Label({
        "id": "lblActivityCardBody",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel0d49d2c9f8d684c",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxActivityCard.add(lblActivityCardBody);
    var flxActivityOptions = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "77dp",
        "id": "flxActivityOptions",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0%",
        "right": "0%",
        "skin": "CopyslFbox0c993346212c842",
        "top": "5dp",
        "width": "50%",
        "zIndex": 1
    }, {}, {});
    flxActivityOptions.setDefaultUnit(kony.flex.DP);
    var btnActivityCall = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "slButtonGlossRed",
        "id": "btnActivityCall",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslButtonGlossBlue0fbd5d4c1d37340",
        "text": "",
        "top": "0dp",
        "width": "33%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnActivityMsg = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "slButtonGlossRed",
        "id": "btnActivityMsg",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslButtonGlossBlue0i6694ae3dcae42",
        "text": "",
        "top": "0dp",
        "width": "33%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Button0b05168f9f5ab42 = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "slButtonGlossRed",
        "id": "Button0b05168f9f5ab42",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslButtonGlossBlue0heb7e705f87a4b",
        "text": "",
        "top": "0dp",
        "width": "33%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxActivityOptions.add(btnActivityCall, btnActivityMsg, Button0b05168f9f5ab42);
    flxActivityCardContainer.add(flxActivityCard, flxActivityOptions);
}