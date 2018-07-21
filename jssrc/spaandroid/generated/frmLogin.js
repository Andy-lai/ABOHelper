function addWidgetsfrmLogin() {
    frmLogin.setDefaultUnit(kony.flex.DP);
    var flxLoginMain = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "36.31%",
        "clipBounds": true,
        "height": "50%",
        "id": "flxLoginMain",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "CopyslFbox0f9f0d7b63def43",
        "width": "95%",
        "zIndex": 1
    }, {}, {});
    flxLoginMain.setDefaultUnit(kony.flex.DP);
    var lgoAmway = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "12.50%",
        "height": "150dp",
        "id": "lgoAmway",
        "isVisible": true,
        "left": "141dp",
        "skin": "slImage",
        "src": "amwaylogo.png",
        "top": "18dp",
        "width": "150dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var txtUsername = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "centerY": "32.50%",
        "height": "40dp",
        "id": "txtUsername",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_EMAIL,
        "left": "43dp",
        "maxTextLength": null,
        "placeholder": "Username",
        "secureTextEntry": false,
        "skin": "CopyslTextBox0bfb686d52f6549",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "100dp",
        "width": "80%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoComplete": false,
        "autoCorrect": false
    });
    var txtPassword = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50.09%",
        "centerY": "50.92%",
        "height": "40dp",
        "id": "txtPassword",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "43dp",
        "placeholder": "Pasword",
        "secureTextEntry": true,
        "skin": "CopyslTextBox0baeafe67874345",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "100dp",
        "width": "80%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoComplete": false,
        "autoCorrect": false
    });
    var flxUnderlineUser = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "38.96%",
        "clipBounds": true,
        "height": "2dp",
        "id": "flxUnderlineUser",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "27dp",
        "skin": "flxUnderlinePassword",
        "top": "136dp",
        "width": "80%",
        "zIndex": 1
    }, {}, {});
    flxUnderlineUser.setDefaultUnit(kony.flex.DP);
    flxUnderlineUser.add();
    var flxUnderlinePassword = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "56.82%",
        "clipBounds": true,
        "height": "2dp",
        "id": "flxUnderlinePassword",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "27dp",
        "skin": "flxUnderlinePassword",
        "top": "136dp",
        "width": "80%",
        "zIndex": 1
    }, {}, {});
    flxUnderlinePassword.setDefaultUnit(kony.flex.DP);
    flxUnderlinePassword.add();
    var btnLogin = new kony.ui.Button({
        "centerX": "50%",
        "centerY": "80%",
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "btnLogin",
        "isVisible": true,
        "left": "49dp",
        "onClick": AS_Button_ba3a520a824742e4ac9f7c7e8b1ef9be,
        "skin": "CopyslButtonGlossBlue0e6a17700111844",
        "text": "Login",
        "top": "213dp",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxLoginMain.add(lgoAmway, txtUsername, txtPassword, flxUnderlineUser, flxUnderlinePassword, btnLogin);
    var flxLoginSocial = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50.09%",
        "centerY": "73.17%",
        "clipBounds": true,
        "height": "15%",
        "id": "flxLoginSocial",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "81dp",
        "skin": "CopyslFbox0d40e30701aa947",
        "top": "326dp",
        "width": "95%",
        "zIndex": 1
    }, {}, {});
    flxLoginSocial.setDefaultUnit(kony.flex.DP);
    var btnFb = new kony.ui.Button({
        "centerX": "27.50%",
        "centerY": "50%",
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "btnFb",
        "isVisible": true,
        "skin": "CopyslButtonGlossBlue0ccd3e41b727d48",
        "text": "F",
        "width": "40%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnGoogle = new kony.ui.Button({
        "centerX": "72.50%",
        "centerY": "50.00%",
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "btnGoogle",
        "isVisible": true,
        "left": "87dp",
        "skin": "CopyslButtonGlossBlue0ia7cedbf52314a",
        "text": "G",
        "top": "26dp",
        "width": "40%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxLoginSocial.add(btnFb, btnGoogle);
    frmLogin.add(flxLoginMain, flxLoginSocial);
};

function frmLoginGlobals() {
    frmLogin = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmLogin,
        "enabledForIdleTimeout": false,
        "id": "frmLogin",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "skin": "slForm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false
    });
};