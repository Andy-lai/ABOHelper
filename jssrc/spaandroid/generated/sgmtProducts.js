function initializesgmtProducts() {
    flxProducts = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flxProducts",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "skin": "slFbox"
    }, {}, {});
    flxProducts.setDefaultUnit(kony.flex.DP);
    var prdctImage = new kony.ui.Image2({
        "height": "80dp",
        "id": "prdctImage",
        "isVisible": true,
        "left": "5dp",
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "2dp",
        "width": "80dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxProducts.add(prdctImage);
}