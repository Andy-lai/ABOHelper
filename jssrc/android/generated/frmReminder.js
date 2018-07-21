function addWidgetsfrmReminder() {
    frmReminder.setDefaultUnit(kony.flex.DP);
    var txtReminderNote = new kony.ui.TextArea2({
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "height": "120dp",
        "id": "txtReminderNote",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
        "left": "57dp",
        "numberOfVisibleLines": 3,
        "placeholder": "Enter your reminder note",
        "skin": "slTextArea",
        "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
        "top": "25%",
        "width": "80%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false
    }, {});
    var clndrReminder = new kony.ui.Calendar({
        "calendarIcon": "calbtn.png",
        "centerX": "50%",
        "dateComponents": [21, 7, 2018, 0, 0, 0],
        "dateFormat": "dd/MM/yyyy",
        "day": 21,
        "formattedDate": "21/07/2018",
        "height": "40dp",
        "hour": 0,
        "id": "clndrReminder",
        "isVisible": true,
        "left": "50dp",
        "minutes": 0,
        "month": 7,
        "seconds": 0,
        "skin": "slCalendar",
        "top": "10%",
        "viewType": constants.CALENDAR_VIEW_TYPE_DEFAULT,
        "width": "50%",
        "year": 2018,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnSaveReminder = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "btnSaveReminder",
        "isVisible": true,
        "left": "41dp",
        "skin": "slButtonGlossBlue",
        "text": "Save",
        "top": "50%",
        "width": "260dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    frmReminder.add(txtReminderNote, clndrReminder, btnSaveReminder);
};

function frmReminderGlobals() {
    frmReminder = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmReminder,
        "enabledForIdleTimeout": false,
        "id": "frmReminder",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "skin": "CopyslForm0f6cad1ae9bf342"
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