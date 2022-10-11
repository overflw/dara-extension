window.addEventListener('__js-event__', (event) => {
    sendMessage('from-javascript', event.detail, 'background');
});