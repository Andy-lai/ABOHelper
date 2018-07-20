define(function() {
    var controller = require("bluebytes/viewCard/userviewCardController");
    var actions = require("bluebytes/viewCard/viewCardControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});