chrome.browserAction.onClicked.addListener(function (activeTab) {
    var newURL = "index.html";
    chrome.tabs.create({ url: newURL });
});

chrome.app.runtime.onLaunched.addListener(function (launchData) {
    var requirementUrl = null;

    if (launchData.id) {
        // We are called to handle a URL that matches one of our url_handlers.
        if (launchData.id === 'requirement') {
            // Convert the desktop URL to a mobile one.
            //requirementUrl = launchData.url.replace("en.wikipedia", "en.m.wikipedia");
            console.log('got url:', launchData.url + ' for id:', launchData.id);
        } else {
            console.error("Unexpected URL handler ID: " + launchData.id);
        }
    } 

    if (requirementUrl)
        new AppWindow('chrome-extension://pcmpcnglkoldfegmpkgkcfdpddncampb/index.html#/details/-JL7qGVmyO6OPXad3KLj');
});