function initializesgmtSearchHeader() {
    flxSearchHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flxSearchHeader",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "CopyslFbox0h156b2ff9cfa48"
    }, {}, {});
    flxSearchHeader.setDefaultUnit(kony.flex.DP);
    var lblSearchHeader = new kony.ui.Label({
        "id": "lblSearchHeader",
        "isVisible": true,
        "left": "2%",
        "skin": "CopyslLabel0a7674e07b5de48",
        "text": "Label",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [1, 1, 1, 2],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    flxSearchHeader.add(lblSearchHeader);
}