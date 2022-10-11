message.on('from-javascript', (detail, sender) => {
    if (detail.type === 'to_active') {
        detail.data.workflowTabId = sender.tab.id;
        let queryOptions = { active: true, lastFocusedWindow: true };
        browser.tabs.query(queryOptions).then(tabs => {
            browser.tabs.sendMessage(tabs[0].id, detail);
        });
    }
});

message.on('remove:tab', (tabId) => {
    return browser.tabs.remove(tabId);
});