function initializeUserWidgets() {
    kony.mvc.registry.add("bluebytes.viewCard", "viewCard", "viewCardController");
    kony.application.registerMaster({
        "namespace": "bluebytes",
        "classname": "viewCard",
        "name": "bluebytes.viewCard"
    });
}