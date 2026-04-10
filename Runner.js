

// runner.js
self.onmessage = function(e) {
    const userCode = e.data;
    try {
        // We use a Function constructor to execute the string code
        const result = new Function(userCode)();
        self.postMessage({ type: 'log', content: 'Execution finished.' });
    } catch (err) {
        self.postMessage({ type: 'error', content: err.message });
    }
};
