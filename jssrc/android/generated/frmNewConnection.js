function addWidgetsfrmNewConnection() {
    frmNewConnection.setDefaultUnit(kony.flex.DP);
    var flxConnectionImport = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "49.97%",
        "centerY": "14.09%",
        "clipBounds": true,
        "height": "20%",
        "id": "flxConnectionImport",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "23dp",
        "skin": "CopyslFbox0ae15635f73274c",
        "top": "34dp",
        "width": "85%",
        "zIndex": 1
    }, {}, {});
    flxConnectionImport.setDefaultUnit(kony.flex.DP);
    var btnImportProspect = new kony.ui.Button({
        "centerX": "26.14%",
        "centerY": "59.62%",
        "focusSkin": "slButtonGlossRed",
        "height": "40%",
        "id": "btnImportProspect",
        "isVisible": true,
        "left": "43dp",
        "onClick": AS_Button_e532fbb3a8ab4d5399946dc0bcf32020,
        "skin": "CopyslButtonGlossBlue0af9114a8098f48",
        "text": "Prospect",
        "top": "42dp",
        "width": "40%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnImportCustomer = new kony.ui.Button({
        "centerX": "69.72%",
        "centerY": "59.59%",
        "focusSkin": "slButtonGlossRed",
        "height": "40%",
        "id": "btnImportCustomer",
        "isVisible": true,
        "left": "43dp",
        "onClick": AS_Button_ffb577bcad1e4a11812f759f02e333bf,
        "skin": "CopyslButtonGlossBlue0af9114a8098f48",
        "text": "Customer",
        "top": "42dp",
        "width": "40%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblProspect = new kony.ui.Label({
        "id": "lblProspect",
        "isVisible": true,
        "left": "68dp",
        "skin": "CopyslLabel0afdc84d7550649",
        "text": "",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "27dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblCustomer = new kony.ui.Label({
        "id": "lblCustomer",
        "isVisible": true,
        "left": "201dp",
        "skin": "CopyslLabel0afdc84d7550649",
        "text": "",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "28dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblImportAs = new kony.ui.Label({
        "centerX": "50.03%",
        "centerY": "15%",
        "height": "50dp",
        "id": "lblImportAs",
        "isVisible": true,
        "left": "137dp",
        "skin": "CopyslLabel0bdea3e532ff34e",
        "text": "Import As",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "20dp",
        "width": "100dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxConnectionImport.add(btnImportProspect, btnImportCustomer, lblProspect, lblCustomer, lblImportAs);
    var flxConnectionFill = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50.21%",
        "centerY": "61.56%",
        "clipBounds": true,
        "height": "69.92%",
        "id": "flxConnectionFill",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "41dp",
        "skin": "CopyslFbox0d7131e094c6945",
        "top": "214dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    flxConnectionFill.setDefaultUnit(kony.flex.DP);
    var txtName = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "centerY": "10%",
        "height": "35dp",
        "id": "txtName",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "36dp",
        "placeholder": "Name",
        "secureTextEntry": false,
        "skin": "CopyslTextBox0fd0d8f15ed564c",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "40dp",
        "width": "80%",
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
    var txtPhone = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "centerY": "20%",
        "height": "35dp",
        "id": "txtPhone",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "32dp",
        "maxTextLength": null,
        "placeholder": "Phone Number",
        "secureTextEntry": false,
        "skin": "CopyslTextBox0fd0d8f15ed564c",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
        "top": "73dp",
        "width": "80%",
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
    var txtEmail = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "centerY": "30%",
        "height": "35dp",
        "id": "txtEmail",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "32dp",
        "placeholder": "Email",
        "secureTextEntry": false,
        "skin": "CopyslTextBox0fd0d8f15ed564c",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "117dp",
        "width": "80%",
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
    var txtTags = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "centerY": "40%",
        "height": "35dp",
        "id": "txtTags",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "32dp",
        "placeholder": "Nutrition - Beauty - Home - Sports",
        "secureTextEntry": false,
        "skin": "CopyslTextBox0fd0d8f15ed564c",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "157dp",
        "width": "80%",
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
    var txtareaNotes = new kony.ui.TextArea2({
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
        "centerX": "50.00%",
        "centerY": "60.97%",
        "height": "30%",
        "id": "txtareaNotes",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
        "left": "32dp",
        "numberOfVisibleLines": 3,
        "skin": "CopyslTextArea0ebf62a034d714c",
        "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
        "top": "207dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false
    }, {});
    var btnCreateConnection = new kony.ui.Button({
        "centerX": "50%",
        "centerY": "87.50%",
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "btnCreateConnection",
        "isVisible": true,
        "left": "30dp",
        "onClick": AS_Button_b604247152bd4f3482e4c2ea8d3d5037,
        "skin": "CopyslButtonGlossBlue0i36d9816528649",
        "text": "Create",
        "top": "353dp",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxConnectionFill.add(txtName, txtPhone, txtEmail, txtTags, txtareaNotes, btnCreateConnection);
    frmNewConnection.add(flxConnectionImport, flxConnectionFill);
};

function frmNewConnectionGlobals() {
    frmNewConnection = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmNewConnection,
        "enabledForIdleTimeout": false,
        "id": "frmNewConnection",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "skin": "CopyslForm0e7dacda0a08847"
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