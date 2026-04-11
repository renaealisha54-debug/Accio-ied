let debounceTimeout;

document.addEventListener('DOMContentLoaded', () => {
    const editor = document.getElementById('code-editor');
    if (editor) {
        const saved = ProjectManager.load();
        if (saved) editor.value = saved;
        if (typeof ProjectManager.updateStorageLabel === 'function') {
            ProjectManager.updateStorageLabel();
        }

        // Auto-save with debounce for performance
        editor.addEventListener('input', () => {
            clearTimeout(debounceTimeout);
            debounceTimeout = setTimeout(() => {
                ProjectManager.save(editor.value);
            }, 500);
        });
    }
});

function handleAction(action) {
    const editor = document.getElementById('code-editor');
    
    switch(action) {
        case 'RUN':
            TerminalEngine.clear();
            try {
                new Function(editor.value)();
                TerminalEngine.log("Process finished.", "success");
            } catch (e) {
                TerminalEngine.log(e.message, "error");
            }
            break;

        case 'BUILD':
            document.getElementById('build-modal').style.display = 'flex';
            CompilerCore.startBuild(() => {
                document.getElementById('build-status').textContent = "Build Successful!";
                document.getElementById('build-actions').style.display = 'flex';
                TerminalEngine.log("Local APK/Bundle generated.", "success");
            });
            break;

        case 'STORAGE':
            document.getElementById('storage-modal').style.display = 'flex';
            break;
            
        case 'TEMPLATES':
            document.getElementById('templates-modal').style.display = 'flex';
            break;
    }
}

function closeModals() {
    document.querySelectorAll('.modal-overlay').forEach(m => m.style.display = 'none');
}
