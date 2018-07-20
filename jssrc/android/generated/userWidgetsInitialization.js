function initializeUserWidgets() {
    kony.mvc.registry.add("bluebytes.popupConfirmation", "popupConfirmation", "popupConfirmationController");
    kony.application.registerMaster({
        "namespace": "bluebytes",
        "classname": "popupConfirmation",
        "name": "bluebytes.popupConfirmation"
    });
    kony.mvc.registry.add("bluebytes.viewCard", "viewCard", "viewCardController");
    kony.application.registerMaster({
        "namespace": "bluebytes",
        "classname": "viewCard",
        "name": "bluebytes.viewCard"
    });
}