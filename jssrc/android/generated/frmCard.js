function addWidgetsfrmCard() {
    frmCard.setDefaultUnit(kony.flex.DP);
    var viewCard = new bluebytes.viewCard({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "viewCard",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "85dp",
        "masterType": constants.MASTER_TYPE_DEFAULT,
        "preShow": AS_UWI_fcdb0a4e33634ba48df97aa17f7a8711,
        "skin": "CopyslFbox0d8da4cb5848c4c",
        "top": "85dp",
        "zIndex": 1
    }, {}, {});
    viewCard.left = "85dp";
    viewCard.top = "85dp";
    viewCard.zIndex = 1;
    viewCard.preShow = AS_UWI_fcdb0a4e33634ba48df97aa17f7a8711;
    frmCard.add(viewCard);
};

function frmCardGlobals() {
    frmCard = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmCard,
        "enabledForIdleTimeout": false,
        "id": "frmCard",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "skin": "slForm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });
};