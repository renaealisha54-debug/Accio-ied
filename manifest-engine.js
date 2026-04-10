const ManifestEngine = {
    config: {
        packageName: "com.vicious.accioapp",
        permissions: []
    },

    togglePermission: function(perm) {
        const index = this.config.permissions.indexOf(perm);
        if (index > -1) {
            this.config.permissions.splice(index, 1);
        } else {
            this.config.permissions.push(perm);
        }
        TerminalEngine.log(`Manifest Updated: ${perm} toggled.`, "info");
    },

    generateXML: function() {
        let permsXML = this.config.permissions.map(p => 
            `<uses-permission android:name="android.permission.${p}" />`
        ).join('\n    ');
        
        return `<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="${this.config.packageName}">
    ${permsXML}
    <application ... />
</manifest>`;
    }
};
