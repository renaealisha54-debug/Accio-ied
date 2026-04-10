

// Initialization
window.onload = () => {
    const savedCode = ProjectManager.load();
    if (savedCode) document.getElementById('code-editor').value = savedCode;
    ProjectManager.updateStorageLabel();
};

function handleAction(action) {
    const editor = document.getElementById('code-editor');
    
    switch(action) {
        case 'RUN':
            TerminalEngine.clear();
            try {
                // Execute code in a scoped function
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
                TerminalEngine.log("APK/Bundle generated locally.", "success");
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

// Global modal closer
function closeModals() {
    document.querySelectorAll('.modal-overlay').forEach(m => m.style.display = 'none');
}
