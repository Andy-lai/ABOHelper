function addWidgetsfrmUserProfile() {
    frmUserProfile.setDefaultUnit(kony.flex.DP);
    var flxUserProfile = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "645dp",
        "id": "flxUserProfile",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "masterType": constants.MASTER_TYPE_USERWIDGET,
        "skin": "slFbox0b73f9ba547634a",
        "top": "0dp",
        "width": "100.00%",
        "zIndex": 1
    }, {}, {});
    flxUserProfile.setDefaultUnit(kony.flex.DP);
    var flxProfileimgContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50.04%",
        "clipBounds": true,
        "height": "150dp",
        "id": "flxProfileimgContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "CopyslFbox0cc76cc1409c046",
        "top": "0dp",
        "width": "150dp",
        "zIndex": 1
    }, {}, {});
    flxProfileimgContainer.setDefaultUnit(kony.flex.DP);
    var imgProfile = new kony.ui.Image2({
        "centerX": "50.00%",
        "centerY": "50%",
        "id": "imgProfile",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage0h7eff5c80e5749",
        "src": "usermanlogo.png",
        "top": "0dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxProfileimgContainer.add(imgProfile);
    var flxMainNav = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "70dp",
        "id": "flxMainNav",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "masterType": constants.MASTER_TYPE_USERWIDGET,
        "skin": "CopyslFbox0a3f4c2d891514f",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxMainNav.setDefaultUnit(kony.flex.DP);
    var btnCall = new kony.ui.Button({
        "centerX": "12.50%",
        "focusSkin": "CopyslButtonGlossRed0fff8a9bb052848",
        "height": "55dp",
        "id": "btnCall",
        "isVisible": true,
        "skin": "adduserskin0h2382e98f92649",
        "text": "",
        "top": "15%",
        "width": "60dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnMessage = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossRed0h857e265cde949",
        "height": "55dp",
        "id": "btnMessage",
        "isVisible": true,
        "left": "6.00%",
        "skin": "CopyslButtonGlossBlue0d0a0d08cadce4a",
        "text": "",
        "top": "15%",
        "width": "60dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnEmail = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossRed0ceee10e6d7b24b",
        "height": "55dp",
        "id": "btnEmail",
        "isVisible": true,
        "left": "10%",
        "skin": "CopyslButtonGlossBlue0b1601a8d5c344e",
        "text": "",
        "top": "15%",
        "width": "60dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnRemainder = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossRed0fd3b9a2fbe1748",
        "height": "55dp",
        "id": "btnRemainder",
        "isVisible": true,
        "left": "6%",
        "skin": "CopyslButtonGlossBlue0e77fbf121c0646",
        "text": "",
        "top": "15%",
        "width": "60dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxMainNav.add(btnCall, btnMessage, btnEmail, btnRemainder);
    var flxUserDetails = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "353dp",
        "id": "flxUserDetails",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "masterType": constants.MASTER_TYPE_USERWIDGET,
        "skin": "slFbox0b73f9ba547634a",
        "top": "0dp",
        "width": "97.22%",
        "zIndex": 1
    }, {}, {});
    flxUserDetails.setDefaultUnit(kony.flex.DP);
    var flxLabels = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "376dp",
        "id": "flxLabels",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "right": 220,
        "skin": "slFbox0b73f9ba547634a",
        "top": "0dp",
        "width": "37.04%",
        "zIndex": 1
    }, {}, {});
    flxLabels.setDefaultUnit(kony.flex.DP);
    var lblName = new kony.ui.Label({
        "id": "lblName",
        "isVisible": true,
        "right": 0,
        "skin": "slLabel0hecb43e1949a41",
        "text": "Name:",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "2%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblPhone = new kony.ui.Label({
        "id": "lblPhone",
        "isVisible": true,
        "right": -4,
        "skin": "slLabel0hecb43e1949a41",
        "text": "Phone:",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "12%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblEmail = new kony.ui.Label({
        "id": "lblEmail",
        "isVisible": true,
        "right": 0,
        "skin": "slLabel0hecb43e1949a41",
        "text": "Email:",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblTags = new kony.ui.Label({
        "id": "lblTags",
        "isVisible": true,
        "right": 0,
        "skin": "slLabel0hecb43e1949a41",
        "text": "Tags:",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblNotes = new kony.ui.Label({
        "id": "lblNotes",
        "isVisible": true,
        "right": 0,
        "skin": "slLabel0hecb43e1949a41",
        "text": "Notes:",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "13%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxLabels.add(lblName, lblPhone, lblEmail, lblTags, lblNotes);
    var flxTextFields = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "377dp",
        "id": "flxTextFields",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "143dp",
        "skin": "slFbox0b73f9ba547634a",
        "top": "0dp",
        "width": "61.11%",
        "zIndex": 1
    }, {}, {});
    flxTextFields.setDefaultUnit(kony.flex.DP);
    var txtName = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "txtName",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "secureTextEntry": false,
        "skin": "slTextBox0e4b4ffe88b9344",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "2.00%",
        "width": "200dp",
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
        "height": "40dp",
        "id": "txtPhone",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "secureTextEntry": false,
        "skin": "slTextBox0e4b4ffe88b9344",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "9%",
        "width": "200dp",
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
        "height": "40dp",
        "id": "txtEmail",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "secureTextEntry": false,
        "skin": "slTextBox0e4b4ffe88b9344",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "8%",
        "width": "200dp",
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
        "height": "40dp",
        "id": "txtTags",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "secureTextEntry": false,
        "skin": "slTextBox0e4b4ffe88b9344",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "10%",
        "width": "200dp",
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
    var txtNotes = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "txtNotes",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "secureTextEntry": false,
        "skin": "slTextBox0e4b4ffe88b9344",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "9%",
        "width": "200dp",
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
    flxTextFields.add(txtName, txtPhone, txtEmail, txtTags, txtNotes);
    flxUserDetails.add(flxLabels, flxTextFields);
    var btnSave = new kony.ui.Button({
        "centerX": "50.06%",
        "focusSkin": "CopyslButtonGlossRed0c935e92198a747",
        "height": "50dp",
        "id": "btnSave",
        "isVisible": true,
        "skin": "CopyslButtonGlossBlue0bd64edcd2ea949",
        "text": "Save",
        "top": "0.00%",
        "width": "260dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxUserProfile.add(flxProfileimgContainer, flxMainNav, flxUserDetails, btnSave);
    frmUserProfile.add(flxUserProfile);
};

function frmUserProfileGlobals() {
    frmUserProfile = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmUserProfile,
        "enabledForIdleTimeout": false,
        "id": "frmUserProfile",
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