const CompilerCore = {
    isBuilding: false,

    startBuild: function(onComplete) {
        if (this.isBuilding) return;
        this.isBuilding = true;
        
        const progressBar = document.getElementById('build-progress-bar');
        const statusText = document.getElementById('build-step');
        let progress = 0;

        const steps = [
            "Initializing environment...",
            "Validating manifest...",
            "Optimizing assets...",
            "Compiling bytecode...",
            "Signing package..."
        ];

        const interval = setInterval(() => {
            progress += Math.random() * 15;
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
                this.isBuilding = false;
                onComplete();
            }
            
            progressBar.style.width = `${progress}%`;
            const stepIndex = Math.min(Math.floor((progress / 100) * steps.length), steps.length - 1);
            statusText.textContent = steps[stepIndex];
        }, 300);
    }
};
