//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "ABOHelper",
    appName: "ABOHelper",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "135.135.4.211",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: true,
    middlewareContext: "ABOHelper",
    isMFApp: false,
    eventTypes: ["FormEntry", "ServiceRequest", "Error", "Crash"],
    url: null,
    secureurl: null
};
sessionID = "";

function appInit(params) {
    skinsInit();
    initializeUserWidgets();
    initializeFBox0e62db3a21db547();
    initializeflxNav();
    initializesgmtActivityCard();
    initializesgmtActivityHeader();
    initializesgmtSearchContent();
    initializesgmtSearchHeader();
    frmCardGlobals();
    frmHomeGlobals();
    frmLoginGlobals();
    frmNewConnectionGlobals();
    frmSearchGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        marginsIncludedInWidgetContainerWeight: true,
        APILevel: 7300
    })
};

function themeCallBack() {
    initializeGlobalVariables();
    callAppMenu();
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            frmLogin.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "eventTypes": appConfig.eventTypes,
    }
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;