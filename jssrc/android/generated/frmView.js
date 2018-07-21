function addWidgetsfrmView() {
    frmView.setDefaultUnit(kony.flex.DP);
    var flxView = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxView",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "masterType": constants.MASTER_TYPE_USERWIDGET,
        "skin": "slFbox0fb2c467a8f7948",
        "top": "0dp",
        "width": "100.00%",
        "zIndex": 1
    }, {}, {});
    flxView.setDefaultUnit(kony.flex.DP);
    var flxViewTitlebar = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "5%",
        "clipBounds": true,
        "height": "10%",
        "id": "flxViewTitlebar",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "47dp",
        "masterType": constants.MASTER_TYPE_USERWIDGET,
        "skin": "CopyslFbox0i81cef5f40eb45",
        "top": "19dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxViewTitlebar.setDefaultUnit(kony.flex.DP);
    var Label0bb8b91afcf2940 = new kony.ui.Label({
        "centerX": "50%",
        "id": "Label0bb8b91afcf2940",
        "isVisible": true,
        "skin": "slLabel",
        "text": "View",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "7dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxViewTitlebar.add(Label0bb8b91afcf2940);
    var sgmtConnectionViewRight = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "imgUserView": "usermanlogo.png",
            "lblUserName": "Name"
        }, {
            "imgUserView": "usermanlogo.png",
            "lblUserName": "Name"
        }, {
            "imgUserView": "usermanlogo.png",
            "lblUserName": "Name"
        }, {
            "imgUserView": "usermanlogo.png",
            "lblUserName": "Name"
        }, {
            "imgUserView": "usermanlogo.png",
            "lblUserName": "Name"
        }, {
            "imgUserView": "usermanlogo.png",
            "lblUserName": "Name"
        }, {
            "imgUserView": "usermanlogo.png",
            "lblUserName": "Name"
        }, {
            "imgUserView": "usermanlogo.png",
            "lblUserName": "Name"
        }, {
            "imgUserView": "usermanlogo.png",
            "lblUserName": "Name"
        }],
        "groupCells": false,
        "height": "90%",
        "id": "sgmtConnectionViewRight",
        "isVisible": true,
        "left": "50%",
        "needPageIndicator": true,
        "onRowClick": AS_Segment_ee4ccb503f994e599498978695c14fc4,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg0ibd9179580214f",
        "rowSkin": "Copyseg0g7de1fa5d6d543",
        "rowTemplate": flxCardLayout0a26fbc3c66d24e,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader0g66e6b5d865c4f",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "60dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "FlexContainer0ad119406520943": "FlexContainer0ad119406520943",
            "flxCard0g72ae216e6db4a": "flxCard0g72ae216e6db4a",
            "flxCardLayout0a26fbc3c66d24e": "flxCardLayout0a26fbc3c66d24e",
            "imgUserView": "imgUserView",
            "lblUserName": "lblUserName"
        },
        "width": "50%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var sgmtConnectionViewLeft = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "imgUserView": "usermanlogo.png",
            "lblUserName": "Name"
        }, {
            "imgUserView": "usermanlogo.png",
            "lblUserName": "Name"
        }, {
            "imgUserView": "usermanlogo.png",
            "lblUserName": "Name"
        }, {
            "imgUserView": "usermanlogo.png",
            "lblUserName": "Name"
        }, {
            "imgUserView": "usermanlogo.png",
            "lblUserName": "Name"
        }, {
            "imgUserView": "usermanlogo.png",
            "lblUserName": "Name"
        }, {
            "imgUserView": "usermanlogo.png",
            "lblUserName": "Name"
        }, {
            "imgUserView": "usermanlogo.png",
            "lblUserName": "Name"
        }, {
            "imgUserView": "usermanlogo.png",
            "lblUserName": "Name"
        }, {
            "imgUserView": "usermanlogo.png",
            "lblUserName": "Name"
        }],
        "groupCells": false,
        "height": "90%",
        "id": "sgmtConnectionViewLeft",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "onRowClick": AS_Segment_g860aaf354694fff8d1cefeb08f0721a,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg0ibd9179580214f",
        "rowSkin": "Copyseg0g7de1fa5d6d543",
        "rowTemplate": flxCardLayout0a26fbc3c66d24e,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader0g66e6b5d865c4f",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "60dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "FlexContainer0ad119406520943": "FlexContainer0ad119406520943",
            "flxCard0g72ae216e6db4a": "flxCard0g72ae216e6db4a",
            "flxCardLayout0a26fbc3c66d24e": "flxCardLayout0a26fbc3c66d24e",
            "imgUserView": "imgUserView",
            "lblUserName": "lblUserName"
        },
        "width": "50%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxView.add(flxViewTitlebar, sgmtConnectionViewRight, sgmtConnectionViewLeft);
    frmView.add(flxView);
};

function frmViewGlobals() {
    frmView = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmView,
        "enabledForIdleTimeout": false,
        "id": "frmView",
        "init": AS_Form_g3bb309e366a49bb83b71fe6e8ec144f,
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