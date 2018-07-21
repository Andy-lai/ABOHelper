function addWidgetsfrmHome() {
    frmHome.setDefaultUnit(kony.flex.DP);
    var flxMainActivity = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxMainActivity",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "skin": "slFbox",
        "width": "100.31%",
        "zIndex": 1
    }, {}, {});
    flxMainActivity.setDefaultUnit(kony.flex.DP);
    var flxTitlebar = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "60dp",
        "id": "flxTitlebar",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0e1484bded31543",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxTitlebar.setDefaultUnit(kony.flex.DP);
    var imgAmway = new kony.ui.Image2({
        "centerX": "50.00%",
        "centerY": "50%",
        "height": "35dp",
        "id": "imgAmway",
        "isVisible": true,
        "left": "137dp",
        "skin": "slImage",
        "src": "amwaylogo.png",
        "top": "0dp",
        "width": "97dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnNavigation = new kony.ui.Button({
        "centerY": "50%",
        "id": "btnNavigation",
        "isVisible": true,
        "left": "10dp",
        "onClick": AS_Button_gb101c5509434c029348774becf4da44,
        "skin": "CopyslButtonGlossBlue0da98f8fb2a1e4b",
        "text": "",
        "top": "5dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnSearch = new kony.ui.Button({
        "centerX": "90.03%",
        "centerY": "49.81%",
        "id": "btnSearch",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_ae3ea02c9cf34f028eb7701aa564dea0,
        "skin": "CopyslButtonGlossBlue0j049ceb63a0747",
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
    flxTitlebar.add(imgAmway, btnNavigation, btnSearch);
    var flxScrollMainActivity = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "100%",
        "horizontalScrollIndicator": true,
        "id": "flxScrollMainActivity",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "CopyslFSbox0hbd5345ad04a45",
        "top": "0",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxScrollMainActivity.setDefaultUnit(kony.flex.DP);
    var flxMainNav = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "130dp",
        "id": "flxMainNav",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0hf1c721ae4eb41",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxMainNav.setDefaultUnit(kony.flex.DP);
    var btnAddUser = new kony.ui.Button({
        "centerX": "15%",
        "centerY": "61%",
        "focusSkin": "CopyslButtonGlossRed0f152788faa0c41",
        "height": "55dp",
        "id": "btnAddUser",
        "isVisible": true,
        "left": "15dp",
        "onClick": AS_Button_ab19e3c0a41a4d5f9cd4e499c034088a,
        "skin": "adduserskin",
        "text": "",
        "width": "60dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnAddGroup = new kony.ui.Button({
        "centerX": "38.33%",
        "centerY": "61%",
        "focusSkin": "CopyslButtonGlossRed0b9e7ee271ba948",
        "height": "55dp",
        "id": "btnAddGroup",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_b4a9fcc9d3e24afbb81c97afa44a961d,
        "skin": "CopyslButtonGlossBlue0e6f8454fa2e44c",
        "text": "",
        "top": "28.89%",
        "width": "60dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnViewUser = new kony.ui.Button({
        "centerX": "61.66%",
        "centerY": "61%",
        "focusSkin": "CopyslButtonGlossRed0a4bd3927f06f41",
        "height": "55dp",
        "id": "btnViewUser",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_f53df0f962f7438ba92bac3eaf5f45c4,
        "skin": "CopyslButtonGlossBlue0b53242fe21764f",
        "text": "",
        "top": "28.89%",
        "width": "60dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnPromote = new kony.ui.Button({
        "centerX": "85%",
        "centerY": "61%",
        "focusSkin": "CopyslButtonGlossRed0g4184fa5fe1e43",
        "height": "55dp",
        "id": "btnPromote",
        "isVisible": true,
        "onClick": AS_Button_b5afad3813a940e89552383d4a3bb735,
        "skin": "CopyslButtonGlossBlue0f45d22bcd28f41",
        "text": "",
        "top": "33dp",
        "width": "60dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblNewCon = new kony.ui.Label({
        "centerX": "15%",
        "centerY": "80%",
        "id": "lblNewCon",
        "isVisible": true,
        "skin": "CopyslLabel0c659fd5e7b3248",
        "text": "Connection",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": "20%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblNewGrp = new kony.ui.Label({
        "centerX": "38.30%",
        "centerY": "80%",
        "id": "lblNewGrp",
        "isVisible": true,
        "skin": "CopyslLabel0c659fd5e7b3248",
        "text": "New Group",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": "20%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblView = new kony.ui.Label({
        "centerX": "61.60%",
        "centerY": "80%",
        "id": "lblView",
        "isVisible": true,
        "skin": "CopyslLabel0c659fd5e7b3248",
        "text": "View",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": "10%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblPromotions = new kony.ui.Label({
        "centerX": "86.24%",
        "centerY": "80%",
        "id": "lblPromotions",
        "isVisible": true,
        "skin": "CopyslLabel0c659fd5e7b3248",
        "text": "Promotions",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": "20%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxMainNav.add(btnAddUser, btnAddGroup, btnViewUser, btnPromote, lblNewCon, lblNewGrp, lblView, lblPromotions);
    var flxAboActivies = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flxAboActivies",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "CopyslFbox0fa01172cb5534d",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxAboActivies.setDefaultUnit(kony.flex.DP);
    var sgmtActivities = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "data": [
            [{
                    "lblActivityHeaderTitle": "Label"
                },
                [{
                    "btnActivityCall": "",
                    "btnActivityMsg": "",
                    "btnReminder": "",
                    "lblActivityCardBody": "",
                    "lblUserId": "Label"
                }, {
                    "btnActivityCall": "",
                    "btnActivityMsg": "",
                    "btnReminder": "",
                    "lblActivityCardBody": "",
                    "lblUserId": "Label"
                }, {
                    "btnActivityCall": "",
                    "btnActivityMsg": "",
                    "btnReminder": "",
                    "lblActivityCardBody": "",
                    "lblUserId": "Label"
                }, {
                    "btnActivityCall": "",
                    "btnActivityMsg": "",
                    "btnReminder": "",
                    "lblActivityCardBody": "",
                    "lblUserId": "Label"
                }, {
                    "btnActivityCall": "",
                    "btnActivityMsg": "",
                    "btnReminder": "",
                    "lblActivityCardBody": "",
                    "lblUserId": "Label"
                }, {
                    "btnActivityCall": "",
                    "btnActivityMsg": "",
                    "btnReminder": "",
                    "lblActivityCardBody": "",
                    "lblUserId": "Label"
                }, {
                    "btnActivityCall": "",
                    "btnActivityMsg": "",
                    "btnReminder": "",
                    "lblActivityCardBody": "",
                    "lblUserId": "Label"
                }]
            ],
            [{
                    "lblActivityHeaderTitle": "Label"
                },
                [{
                    "btnActivityCall": "",
                    "btnActivityMsg": "",
                    "btnReminder": "",
                    "lblActivityCardBody": "",
                    "lblUserId": "Label"
                }, {
                    "btnActivityCall": "",
                    "btnActivityMsg": "",
                    "btnReminder": "",
                    "lblActivityCardBody": "",
                    "lblUserId": "Label"
                }, {
                    "btnActivityCall": "",
                    "btnActivityMsg": "",
                    "btnReminder": "",
                    "lblActivityCardBody": "",
                    "lblUserId": "Label"
                }, {
                    "btnActivityCall": "",
                    "btnActivityMsg": "",
                    "btnReminder": "",
                    "lblActivityCardBody": "",
                    "lblUserId": "Label"
                }, {
                    "btnActivityCall": "",
                    "btnActivityMsg": "",
                    "btnReminder": "",
                    "lblActivityCardBody": "",
                    "lblUserId": "Label"
                }, {
                    "btnActivityCall": "",
                    "btnActivityMsg": "",
                    "btnReminder": "",
                    "lblActivityCardBody": "",
                    "lblUserId": "Label"
                }, {
                    "btnActivityCall": "",
                    "btnActivityMsg": "",
                    "btnReminder": "",
                    "lblActivityCardBody": "",
                    "lblUserId": "Label"
                }]
            ]
        ],
        "groupCells": false,
        "id": "sgmtActivities",
        "isVisible": true,
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowTemplate": flxActivityCardContainer,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "sectionHeaderTemplate": flxActivityHeader,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorRequired": false,
        "separatorThickness": 0,
        "showScrollbars": false,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "btnActivityCall": "btnActivityCall",
            "btnActivityMsg": "btnActivityMsg",
            "btnReminder": "btnReminder",
            "flxActivityCard": "flxActivityCard",
            "flxActivityCardContainer": "flxActivityCardContainer",
            "flxActivityHeader": "flxActivityHeader",
            "flxActivityOptions": "flxActivityOptions",
            "lblActivityCardBody": "lblActivityCardBody",
            "lblActivityHeaderTitle": "lblActivityHeaderTitle",
            "lblUserId": "lblUserId"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxAboActivies.add(sgmtActivities);
    var Button0da380c05206d40 = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "Button0da380c05206d40",
        "isVisible": true,
        "left": "54dp",
        "skin": "slButtonGlossBlue",
        "text": "Button",
        "top": "0dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxScrollMainActivity.add(flxMainNav, flxAboActivies, Button0da380c05206d40);
    flxMainActivity.add(flxTitlebar, flxScrollMainActivity);
    var flxNavHome = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxNavHome",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "-100%",
        "masterType": constants.MASTER_TYPE_USERWIDGET,
        "skin": "slFbox0b6a20b6c81764e",
        "top": "0dp",
        "width": "280dp",
        "zIndex": 1
    }, {}, {});
    flxNavHome.setDefaultUnit(kony.flex.DP);
    var flxProfileimgContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50.04%",
        "clipBounds": true,
        "height": "150dp",
        "id": "flxProfileimgContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "1dp",
        "skin": "CopyslFbox0cc76cc1409c046",
        "top": "16dp",
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
    var FlexContainer0ed9bbd01114640 = new kony.ui.FlexContainer({
        "centerX": "49.96%",
        "clipBounds": true,
        "height": "220dp",
        "id": "FlexContainer0ed9bbd01114640",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "-7dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0ed9bbd01114640.setDefaultUnit(kony.flex.DP);
    var Button0i501679fa16648 = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "Button0i501679fa16648",
        "isVisible": true,
        "left": "3dp",
        "onClick": AS_Button_eae5b12a30984e5683572620a5fbfa60,
        "skin": "CopyslButtonGlossBlue0d7fbee1ace174a",
        "text": "My Dashboard",
        "top": "30dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyButton0j8e35cc3f4c94a = new kony.ui.Button({
        "centerX": "49.96%",
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "CopyButton0j8e35cc3f4c94a",
        "isVisible": true,
        "left": "3dp",
        "onClick": AS_Button_ca21bd4b30ba4b04bb6b3ce91e5867d9,
        "skin": "CopyslButtonGlossBlue0d7fbee1ace174a",
        "text": "Logout",
        "top": "10dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer0ed9bbd01114640.add(Button0i501679fa16648, CopyButton0j8e35cc3f4c94a);
    flxNavHome.add(flxProfileimgContainer, FlexContainer0ed9bbd01114640);
    frmHome.add(flxMainActivity, flxNavHome);
};

function frmHomeGlobals() {
    frmHome = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmHome,
        "enabledForIdleTimeout": false,
        "id": "frmHome",
        "init": AS_Form_h9f5f288a2d94089bb67ab4657147cf6,
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "CopyslForm0ca6bc927b95a40"
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