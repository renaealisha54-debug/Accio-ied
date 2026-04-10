const KeyboardBridge = {
    symbols: ['{', '}', '(', ')', '[', ']', ';', '<', '>', '=', '"', "'", '/', '$'],
    
    init: function() {
        const editor = document.getElementById('code-editor');
        const bar = document.createElement('div');
        bar.id = 'symbol-bar';
        
        // Styling the bar via JS for quick integration
        Object.assign(bar.style, {
            display: 'flex',
            overflowX: 'auto',
            background: '#1e1e1e',
            padding: '5px',
            borderBottom: '1px solid #30363d',
            gap: '8px',
            WebkitOverflowScrolling: 'touch'
        });

        this.symbols.forEach(sym => {
            const btn = document.createElement('button');
            btn.textContent = sym;
            Object.assign(btn.style, {
                minWidth: '35px',
                height: '35px',
                background: '#30363d',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                fontSize: '16px'
            });

            btn.onclick = (e) => {
                e.preventDefault();
                const start = editor.selectionStart;
                const end = editor.selectionEnd;
                const val = editor.value;
                editor.value = val.substring(0, start) + sym + val.substring(end);
                editor.selectionStart = editor.selectionEnd = start + 1;
                editor.focus();
            };
            bar.appendChild(btn);
        });

        document.getElementById('editor-section').prepend(bar);
    }
};
