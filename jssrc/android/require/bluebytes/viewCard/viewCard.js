define(function() {
    return function(controller) {
        var viewCard = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "isMaster": true,
            "id": "viewCard",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyslFbox0d8da4cb5848c4c",
            "top": "0dp",
            "width": "200dp"
        }, {}, {});
        viewCard.setDefaultUnit(kony.flex.DP);
        var flxCardFrontView = new kony.ui.FlexContainer({
            "clipBounds": true,
            "height": "220dp",
            "id": "flxCardFrontView",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxCardFrontView.setDefaultUnit(kony.flex.DP);
        var flxProfileimgContainer = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50.04%",
            "clipBounds": true,
            "height": "150dp",
            "id": "flxProfileimgContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
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
        var lblCardName = new kony.ui.Label({
            "centerX": "50%",
            "id": "lblCardName",
            "isVisible": true,
            "left": "0dp",
            "skin": "CopyslLabel0dee1968bd5114c",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxCardFrontView.add(flxProfileimgContainer, lblCardName);
        var flxCardBackView = new kony.ui.FlexContainer({
            "clipBounds": true,
            "height": "220dp",
            "id": "flxCardBackView",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxCardBackView.setDefaultUnit(kony.flex.DP);
        var Label0b2114a39f71e4f = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "10%",
            "id": "Label0b2114a39f71e4f",
            "isVisible": true,
            "left": "0dp",
            "skin": "slLabel",
            "text": "Reminders",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var Label0h6167d01f10340 = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "10%",
            "id": "Label0h6167d01f10340",
            "isVisible": true,
            "skin": "slLabel",
            "text": "Tags",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxCardBackView.add(Label0b2114a39f71e4f, Label0h6167d01f10340);
        viewCard.add(flxCardFrontView, flxCardBackView);
        return viewCard;
    }
})