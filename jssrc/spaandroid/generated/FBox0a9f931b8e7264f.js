function initializeFBox0a9f931b8e7264f() {
    FBox0a9f931b8e7264f = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": false,
        "height": "preferred",
        "id": "FBox0a9f931b8e7264f",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "width": "100%"
    }, {
        "containerWeight": 100
    }, {});
    FBox0a9f931b8e7264f.setDefaultUnit(kony.flex.DP);
    var imgProduct = new kony.ui.Image2({
        "centerX": "50%",
        "height": "100dp",
        "id": "imgProduct",
        "imageWhileDownloading": "barchart.png",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "0dp",
        "width": "150dp",
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
    FBox0a9f931b8e7264f.add(imgProduct);
}