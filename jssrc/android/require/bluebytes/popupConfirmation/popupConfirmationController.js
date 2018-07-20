define(function() {
    var controller = require("bluebytes/popupConfirmation/userpopupConfirmationController");
    var actions = require("bluebytes/popupConfirmation/popupConfirmationControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});