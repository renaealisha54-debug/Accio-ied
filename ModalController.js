

const ProjectManager = {
    save: function(code) {
        localStorage.setItem('IGNIS_CURRENT_FILE', code);
        this.updateStorageLabel();
    },

    load: function() {
        return localStorage.getItem('IGNIS_CURRENT_FILE') || "";
    },

    updateStorageLabel: function() {
        const size = (JSON.stringify(localStorage).length / 1024).toFixed(2);
        document.getElementById('storage-usage').textContent = `Cache: ${size}KB`;
    }
};
