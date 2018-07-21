function initializesgmtActivityCard() {
    flxActivityCardContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flxActivityCardContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "skin": "CopyslFbox0eeeb73e3b63146"
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
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var lblUserId = new kony.ui.Label({
        "id": "lblUserId",
        "isVisible": true,
        "left": "273dp",
        "skin": "CopyslLabel0b3135437572645",
        "text": "Label",
        "top": "39dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    flxActivityCard.add(lblActivityCardBody, lblUserId);
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
        "centerY": "51.44%",
        "focusSkin": "CopyslButtonGlossRed0d8e7f169647647",
        "id": "btnActivityCall",
        "isVisible": true,
        "left": "0%",
        "onClick": AS_Button_hf10e0fbe60e441d8546041d04c49345,
        "skin": "Copyadduserskin0e144989b8bfd42",
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
        "focusSkin": "CopyslButtonGlossRed0d637c979722247",
        "id": "btnActivityMsg",
        "isVisible": true,
        "left": "0dp",
        "skin": "Copyadduserskin0e75b63f617e244",
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
    var btnReminder = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "CopyslButtonGlossRed0be22c110886044",
        "id": "btnReminder",
        "isVisible": true,
        "left": "0dp",
        "skin": "Copyadduserskin0aa2aa00420b04f",
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
    flxActivityOptions.add(btnActivityCall, btnActivityMsg, btnReminder);
    flxActivityCardContainer.add(flxActivityCard, flxActivityOptions);
}