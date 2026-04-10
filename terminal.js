const TerminalEngine = {
    output: document.getElementById('terminal-output'),
    
    log: function(message, type = 'info') {
        const span = document.createElement('div');
        span.style.marginBottom = '4px';
        
        const colors = {
            error: '#cf222e',
            success: '#2ea44f',
            warn: '#f0883e',
            info: '#d1d7dd'
        };
        
        span.style.color = colors[type] || colors.info;
        span.textContent = `> ${message}`;
        this.output.appendChild(span);
        this.output.scrollTop = this.output.scrollHeight;
    },

    clear: function() {
        this.output.innerHTML = '> Console cleared...';
    }
};
