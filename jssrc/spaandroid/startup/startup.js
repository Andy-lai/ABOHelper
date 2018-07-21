//startup.js file
var appConfig = {
    appId: "ABOHelper",
    appName: "ABOHelper",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "135.135.4.211",
    serverPort: "80",
    secureServerPort: "443",
    isMFApp: false,
    eventTypes: ["FormEntry", "ServiceRequest", "Error", "Crash"],
    url: null,
    secureurl: null,
    middlewareContext: "ABOHelper"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    initializeUserWidgets();
    initializeFBox0a9f931b8e7264f();
    initializeFBox0e62db3a21db547();
    initializeflxNav();
    initializesgmtActivityCard();
    initializesgmtActivityHeader();
    initializesgmtProducts();
    initializesgmtSearchContent();
    initializesgmtSearchHeader();
    frmCardGlobals();
    frmDashboardGlobals();
    frmHomeGlobals();
    frmLoginGlobals();
    frmNewConnectionGlobals();
    frmNewGroupGlobals();
    frmPromotionsGlobals();
    frmReminderGlobals();
    frmSearchGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        APILevel: 7300
    })
};

function themeCallBack() {
    initializeGlobalVariables();
    requirejs.config({
        baseUrl: "spaandroid/appjs"
    });
    var requireModulesList = getSPARequireModulesList();
    require(requireModulesList, function() {
        kony.application.setApplicationInitializationEvents({
            init: appInit,
            showstartupform: function() {
                frmLogin.show();
            }
        });
    });
};

function loadResources() {
    kony.theme.packagedthemes(
        ["default"]);
    globalhttpheaders = {};
    callAppMenu();
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        eventTypes: ["FormEntry", "ServiceRequest", "Error", "Crash"]
    }
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};

function onSuccessSDKCallBack() {
    spaAPM && spaAPM.startTracking();
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}

function initializeApp() {
    kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
    //If default locale is specified. This is set even before any other app life cycle event is called.
    loadResources();
};
									function getSPARequireModulesList(){ return ['kvmodules']; }
								