function addWidgetsfrmNewGroup() {
    frmNewGroup.setDefaultUnit(kony.flex.DP);
    var txtNewGroup = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "txtNewGroup",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0%",
        "placeholder": "Enter Group Name",
        "secureTextEntry": false,
        "skin": "CopyslTextBox0h311635e872e47",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "10%",
        "width": "85%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var btnAddGroup = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "40dp",
        "id": "btnAddGroup",
        "isVisible": true,
        "left": "85%",
        "onClick": AS_Button_fe507ad4490e4dd5a265c97a6477ef29,
        "skin": "CopyslButtonGlossBlue0g9bcd47ab3184b",
        "text": "",
        "top": "10%",
        "width": "15%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblAddGroup = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblAddGroup",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel0a614fa7c448b48",
        "text": "Add a Group",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "5dp",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    frmNewGroup.add(txtNewGroup, btnAddGroup, lblAddGroup);
};

function frmNewGroupGlobals() {
    frmNewGroup = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmNewGroup,
        "enabledForIdleTimeout": false,
        "id": "frmNewGroup",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "skin": "CopyslForm0ebc8db51d7a44d"
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