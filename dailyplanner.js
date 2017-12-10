// Daily Planner Extension Event Page
(function() {
    chrome.runtime.onInstalled.addListener(function(details) {
        if (details && details.reason && details.reason == 'install') chrome.tabs.create({
            url: "main.html"
        });
    });
    chrome.browserAction.onClicked.addListener(function(tab) {
        chrome.tabs.create({
            url: "main.html"
        });
    });
})();
