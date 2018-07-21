function addWidgetsfrmSearchContacts() {
    frmSearchContacts.setDefaultUnit(kony.flex.DP);
    var FlexContainer0i22910272e5e42 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "617dp",
        "id": "FlexContainer0i22910272e5e42",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "masterType": constants.MASTER_TYPE_USERWIDGET,
        "skin": "slFbox0h2554bfdb4b14c",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0i22910272e5e42.setDefaultUnit(kony.flex.DP);
    var flxSearchBar = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "43dp",
        "id": "flxSearchBar",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "masterType": constants.MASTER_TYPE_USERWIDGET,
        "skin": "slFbox0h2554bfdb4b14c",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxSearchBar.setDefaultUnit(kony.flex.DP);
    var searchInput = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "id": "searchInput",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0.00%",
        "placeholder": "Search...",
        "secureTextEntry": false,
        "skin": "CopyslTextBox0f8986992657c4a",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "18.28%",
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
    var btnSearch = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossRed0d4ae608f6ed340",
        "id": "btnSearch",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslButtonGlossBlue0f54919e099ab49",
        "text": "",
        "top": "14dp",
        "width": "50dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxSearchBar.add(searchInput, btnSearch);
    var flxSearch = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "centerY": "55%",
        "clipBounds": true,
        "enableScrolling": true,
        "height": "570dp",
        "horizontalScrollIndicator": true,
        "id": "flxSearch",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "slFSbox0f9ffaf1dc9b849",
        "top": "47dp",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxSearch.setDefaultUnit(kony.flex.DP);
    var flxResults = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "centerX": "50.00%",
        "centerY": "55%",
        "clipBounds": true,
        "enableScrolling": true,
        "height": "100%",
        "horizontalScrollIndicator": true,
        "id": "flxResults",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "CopyslFbox0e38843e4ce4d43",
        "top": "70dp",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxResults.setDefaultUnit(kony.flex.DP);
    var chkbx = new kony.ui.CheckBoxGroup({
        "id": "chkbx",
        "isVisible": true,
        "left": "10dp",
        "masterData": [
            ["cbg1", "Checkbox One"],
            ["cbg2", "Checkbox Two"],
            ["cbg3", "Checkbox Three"]
        ],
        "skin": "CopyslCheckBoxGroup0c1d0bbef4d754d",
        "top": "0dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxResults.add(chkbx);
    flxSearch.add(flxResults);
    var btnImport = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossRed0fb073652b7424a",
        "height": "43dp",
        "id": "btnImport",
        "isVisible": true,
        "left": "297dp",
        "skin": "CopyslButtonGlossBlue0gc1d9a7836b943",
        "text": "",
        "top": "557dp",
        "width": "50dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer0i22910272e5e42.add(flxSearchBar, flxSearch, btnImport);
    frmSearchContacts.add(FlexContainer0i22910272e5e42);
};

function frmSearchContactsGlobals() {
    frmSearchContacts = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSearchContacts,
        "enabledForIdleTimeout": false,
        "id": "frmSearchContacts",
        "init": AS_Form_ic8ff0b49d144a47ac0b95197a207ac6,
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