function addWidgetsfrmDashboard() {
    frmDashboard.setDefaultUnit(kony.flex.DP);
    var lblDashboard = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblDashboard",
        "isVisible": true,
        "left": "0dp",
        "skin": "slLabel",
        "text": "Dashboard",
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
    var diagPV = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "15%",
        "id": "diagPV",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "20%",
        "skin": "slFbox",
        "top": "10%",
        "width": "30%",
        "zIndex": 1
    }, {}, {});
    diagPV.setDefaultUnit(kony.flex.DP);
    diagPV.add();
    var diagBV = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "15%",
        "id": "diagBV",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "right": "20%",
        "skin": "slFbox",
        "top": "10%",
        "width": "30%",
        "zIndex": 1
    }, {}, {});
    diagBV.setDefaultUnit(kony.flex.DP);
    diagBV.add();
    var lblBonus = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblBonus",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel0db4d496430a746",
        "text": "BONUS",
        "top": "25%",
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
    var flxGraph = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "220dp",
        "horizontalScrollIndicator": true,
        "id": "flxGraph",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "slFSbox",
        "top": "32%",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxGraph.setDefaultUnit(kony.flex.DP);
    var lblBonusvsMonths = new kony.ui.Label({
        "id": "lblBonusvsMonths",
        "isVisible": true,
        "left": "2%",
        "skin": "CopyslLabel0bc9bd5caeece45",
        "text": "Bonus-Months",
        "top": "0%",
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
    var graphBonusVsMonth = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "graphBonusVsMonth",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0",
        "skin": "slFbox",
        "top": "0",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    graphBonusVsMonth.setDefaultUnit(kony.flex.DP);
    graphBonusVsMonth.add();
    var lblCustomersVsMonths = new kony.ui.Label({
        "id": "lblCustomersVsMonths",
        "isVisible": true,
        "left": "2%",
        "skin": "CopyslLabel0je8fcd7a510b4b",
        "text": "Customers-Month",
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
    var graphCustomersvsMonth = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "graphCustomersvsMonth",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0",
        "skin": "slFbox",
        "top": "0",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    graphCustomersvsMonth.setDefaultUnit(kony.flex.DP);
    graphCustomersvsMonth.add();
    var lblProductsVsMonths = new kony.ui.Label({
        "id": "lblProductsVsMonths",
        "isVisible": true,
        "left": "2%",
        "skin": "CopyslLabel0je8fcd7a510b4b",
        "text": "Customers-Month",
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
    var graphProductsVsMonth = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "graphProductsVsMonth",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0",
        "skin": "slFbox",
        "top": "0",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    graphProductsVsMonth.setDefaultUnit(kony.flex.DP);
    graphProductsVsMonth.add();
    flxGraph.add(lblBonusvsMonths, graphBonusVsMonth, lblCustomersVsMonths, graphCustomersvsMonth, lblProductsVsMonths, graphProductsVsMonth);
    frmDashboard.add(lblDashboard, diagPV, diagBV, lblBonus, flxGraph);
};

function frmDashboardGlobals() {
    frmDashboard = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmDashboard,
        "enabledForIdleTimeout": false,
        "id": "frmDashboard",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "skin": "CopyslForm0c3855db06f4b4b"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false
    });
};