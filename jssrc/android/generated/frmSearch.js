function addWidgetsfrmSearch() {
    frmSearch.setDefaultUnit(kony.flex.DP);
    var flxSearch = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "100%",
        "horizontalScrollIndicator": true,
        "id": "flxSearch",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "top": "1dp",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxSearch.setDefaultUnit(kony.flex.DP);
    var sgmtSearchResults = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [
            [{
                    "lblSearchHeader": "Label"
                },
                [{
                    "lblSearchContent": "Label"
                }, {
                    "lblSearchContent": "Label"
                }, {
                    "lblSearchContent": "Label"
                }]
            ],
            [{
                    "lblSearchHeader": "Label"
                },
                [{
                    "lblSearchContent": "Label"
                }, {
                    "lblSearchContent": "Label"
                }, {
                    "lblSearchContent": "Label"
                }]
            ]
        ],
        "groupCells": false,
        "height": "595dp",
        "id": "sgmtSearchResults",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": flxSearchContent,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "sectionHeaderTemplate": flxSearchHeader,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "6.97%",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "flxSearchContent": "flxSearchContent",
            "flxSearchHeader": "flxSearchHeader",
            "lblSearchContent": "lblSearchContent",
            "lblSearchHeader": "lblSearchHeader"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flxSearchBar = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "55dp",
        "id": "flxSearchBar",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
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
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "2%",
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
        "focusSkin": "CopyslButtonGlossRed0c91216144c9541",
        "id": "btnSearch",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_j6dd63dcc8a745348348e392641f324c,
        "skin": "CopyslButtonGlossBlue0ad50756122264b",
        "text": "",
        "top": "8dp",
        "width": "50dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxSearchBar.add(searchInput, btnSearch);
    flxSearch.add(sgmtSearchResults, flxSearchBar);
    frmSearch.add(flxSearch);
};

function frmSearchGlobals() {
    frmSearch = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSearch,
        "enabledForIdleTimeout": false,
        "id": "frmSearch",
        "init": AS_Form_c766be6e6a604c73b8a1778617c91ed4,
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "CopyslForm0fb3d9a3ed9b748"
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