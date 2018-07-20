function addWidgetsfrmHome() {
    frmHome.setDefaultUnit(kony.flex.DP);
    var flxMainActivity = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxMainActivity",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": 0,
        "skin": "slFbox",
        "top": "0dp",
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
        "onClick": AS_Button_icea28465b7b4643ae564b901cfe6cae,
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
        "centerX": "84.99%",
        "centerY": "61%",
        "focusSkin": "CopyslButtonGlossRed0g4184fa5fe1e43",
        "height": "55dp",
        "id": "btnPromote",
        "isVisible": true,
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
    flxMainNav.add(btnAddUser, btnAddGroup, btnViewUser, btnPromote);
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
        "data": [{
            "Button0b05168f9f5ab42": "",
            "btnActivityCall": "",
            "btnActivityMsg": "",
            "lblActivityCardBody": ""
        }, {
            "Button0b05168f9f5ab42": "",
            "btnActivityCall": "",
            "btnActivityMsg": "",
            "lblActivityCardBody": ""
        }, {
            "Button0b05168f9f5ab42": "",
            "btnActivityCall": "",
            "btnActivityMsg": "",
            "lblActivityCardBody": ""
        }, {
            "Button0b05168f9f5ab42": "",
            "btnActivityCall": "",
            "btnActivityMsg": "",
            "lblActivityCardBody": ""
        }, {
            "Button0b05168f9f5ab42": "",
            "btnActivityCall": "",
            "btnActivityMsg": "",
            "lblActivityCardBody": ""
        }, {
            "Button0b05168f9f5ab42": "",
            "btnActivityCall": "",
            "btnActivityMsg": "",
            "lblActivityCardBody": ""
        }, {
            "Button0b05168f9f5ab42": "",
            "btnActivityCall": "",
            "btnActivityMsg": "",
            "lblActivityCardBody": ""
        }],
        "groupCells": false,
        "id": "sgmtActivities",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": flxActivityCardContainer,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "00000055",
        "separatorRequired": true,
        "separatorThickness": 3,
        "showScrollbars": false,
        "top": "0dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "Button0b05168f9f5ab42": "Button0b05168f9f5ab42",
            "btnActivityCall": "btnActivityCall",
            "btnActivityMsg": "btnActivityMsg",
            "flxActivityCard": "flxActivityCard",
            "flxActivityCardContainer": "flxActivityCardContainer",
            "flxActivityOptions": "flxActivityOptions",
            "lblActivityCardBody": "lblActivityCardBody"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxAboActivies.add(sgmtActivities);
    flxScrollMainActivity.add(flxMainNav, flxAboActivies);
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
        "top": "10dp",
        "width": "150dp",
        "zIndex": 1
    }, {}, {});
    flxProfileimgContainer.setDefaultUnit(kony.flex.DP);
    var imgProfile = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "80%",
        "id": "imgProfile",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage0h7eff5c80e5749",
        "src": "imagedrag.png",
        "top": "0dp",
        "width": "80%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxProfileimgContainer.add(imgProfile);
    var flxPvBv = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flxPvBv",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxPvBv.setDefaultUnit(kony.flex.DP);
    var lblBv = new kony.ui.Label({
        "centerX": 0,
        "id": "lblBv",
        "isVisible": true,
        "left": "0dp",
        "skin": "slLabel0e2af7e8c1e1a42",
        "text": "BV",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [80, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var lblPv = new kony.ui.Label({
        "centerX": 0,
        "id": "lblPv",
        "isVisible": true,
        "left": "0dp",
        "skin": "slLabel0e2af7e8c1e1a42",
        "text": "PV",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [29, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    flxPvBv.add(lblBv, lblPv);
    var lblBonus = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblBonus",
        "isVisible": true,
        "left": "0dp",
        "skin": "slLabel0e2af7e8c1e1a42",
        "text": "Bonus",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var segOptions = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "data": [{
            "lblNavItem": "My Dashboard"
        }, {
            "lblNavItem": "My Remainders"
        }, {
            "lblNavItem": "Help"
        }, {
            "lblNavItem": "Logout"
        }],
        "groupCells": false,
        "id": "segOptions",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg0f886d2f4535541",
        "rowSkin": "Copyseg0a40457c6ae4c4c",
        "rowTemplate": flxNav,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader0i8b5539ea80140",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "00000032",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "flxNav": "flxNav",
            "lblNavItem": "lblNavItem"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxNavHome.add(flxProfileimgContainer, flxPvBv, lblBonus, segOptions);
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
        "retainScrollPosition": false
    });
};