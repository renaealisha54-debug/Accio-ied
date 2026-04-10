const ProjectManager = {
    STORAGE_KEY: 'ACCIO_OFFLINE_V3',

    save: function(code) {
        localStorage.setItem(this.STORAGE_KEY, code);
        this.updateStorageLabel();
    },

    load: function() {
        return localStorage.getItem(this.STORAGE_KEY) || "";
    },

    updateStorageLabel: function() {
        const size = (JSON.stringify(localStorage).length / 1024).toFixed(2);
        const label = document.getElementById('storage-usage');
        if (label) label.textContent = `Cache: ${size}KB`;
    },

    clearData: function() {
        if (confirm("Wipe all local project data?")) {
            localStorage.clear();
            location.reload();
        }
    }
};
