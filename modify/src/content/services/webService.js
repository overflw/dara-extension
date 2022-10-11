
window.addEventListener('DOMContentLoaded', async () => {
    try {
        const webListener = initWebListener();
        webListener.on('execute-workflow', async ({ workflow }) => {
            if (!workflow) return;
            workflow.includeTabId = true;
            sendMessage('workflow:execute', workflow, 'background');
        });
        webListener.on('set-active-tab', async ({ tabId }) => {
            if (!tabId) return;
            await sendMessage('set:active-tab', tabId, 'background');
        });
        webListener.on('remove-tab', async ({ tabId }) => {
            if (!tabId) return;
            sendMessage('remove:tab', tabId, 'background');
        });
    } catch (error) {
        console.error(error);
    }
});
browser.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.type === 'to_active') {
        window.postMessage(message.data)
    }
});