function initializesgmtActivityHeader() {
    flxActivityHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flxActivityHeader",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "CopyslFbox0be753b77e91b44"
    }, {}, {});
    flxActivityHeader.setDefaultUnit(kony.flex.DP);
    var lblActivityHeaderTitle = new kony.ui.Label({
        "id": "lblActivityHeaderTitle",
        "isVisible": true,
        "left": "10dp",
        "skin": "CopyslLabel0a4b27fd0fa4f42",
        "text": "Label",
        "top": "5dp",
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
    flxActivityHeader.add(lblActivityHeaderTitle);
}