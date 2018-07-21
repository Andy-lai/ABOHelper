function initializeflxCardLayout() {
    flxCardLayout = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30%",
        "id": "flxCardLayout",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM
    }, {
        "containerWeight": 100
    }, {});
    flxCardLayout.setDefaultUnit(kony.flex.DP);
    var flxCard = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "50%",
        "clipBounds": true,
        "height": "80%",
        "id": "flxCard",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "0dp",
        "width": "70%",
        "zIndex": 1
    }, {
        "containerWeight": 100
    }, {});
    flxCard.setDefaultUnit(kony.flex.DP);
    var imgUserView = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "35%",
        "height": "50%",
        "id": "imgUserView",
        "isVisible": true,
        "left": "16dp",
        "src": "usermanlogo.png",
        "top": "17dp",
        "width": "50%",
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var flxCardFlipRem = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "30%",
        "clipBounds": true,
        "height": "50dp",
        "id": "flxCardFlipRem",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "10dp",
        "top": "15dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerWeight": 100
    }, {});
    flxCardFlipRem.setDefaultUnit(kony.flex.DP);
    var imgRem = new kony.ui.Image2({
        "centerX": "15%",
        "centerY": "50%",
        "height": "100%",
        "id": "imgRem",
        "isVisible": true,
        "left": "0dp",
        "src": "reminderlogo.png",
        "top": "0dp",
        "width": "20%",
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lblRem = new kony.ui.Label({
        "centerX": "35%",
        "centerY": "50%",
        "id": "lblRem",
        "isVisible": true,
        "left": "0dp",
        "text": "Reminders",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    flxCardFlipRem.add(imgRem, lblRem);
    var flxCardFlipTags = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "49.77%",
        "centerY": "65%",
        "clipBounds": true,
        "height": "50dp",
        "id": "flxCardFlipTags",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "10dp",
        "top": "15dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerWeight": 100
    }, {});
    flxCardFlipTags.setDefaultUnit(kony.flex.DP);
    var imgTags = new kony.ui.Image2({
        "centerX": "15.00%",
        "centerY": "50%",
        "height": "100%",
        "id": "imgTags",
        "isVisible": true,
        "left": "0dp",
        "src": "taglogo.png",
        "top": "0dp",
        "width": "20%",
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lbltags = new kony.ui.Label({
        "centerX": "30%",
        "centerY": "50%",
        "id": "lbltags",
        "isVisible": true,
        "left": "0dp",
        "text": "Tags",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    flxCardFlipTags.add(imgTags, lbltags);
    var FlexContainer0ad119406520943 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "80%",
        "clipBounds": true,
        "height": "57dp",
        "id": "FlexContainer0ad119406520943",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "52dp",
        "top": "79dp",
        "width": "49.96%",
        "zIndex": 1
    }, {
        "containerWeight": 100
    }, {});
    FlexContainer0ad119406520943.setDefaultUnit(kony.flex.DP);
    var lblUserName = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "40%",
        "id": "lblUserName",
        "isVisible": true,
        "left": "0dp",
        "text": "Name",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    FlexContainer0ad119406520943.add(lblUserName);
    flxCard.add(imgUserView, flxCardFlipRem, flxCardFlipTags, FlexContainer0ad119406520943);
    flxCardLayout.add(flxCard);
}