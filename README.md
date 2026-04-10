# Accio-ied## 🧩 Modular Components

Accio IDE 3.0 is built on a decoupled architecture to ensure high performance on mobile hardware:

* **Logic Sandbox (`runner.worker.js`)**: Runs user-generated JavaScript in a background thread. This prevents "Infinite Loop" bugs from freezing the entire IDE UI.
* **Storage Engine (`project-manager.js`)**: Manages the JSON-serialized project data. Includes a real-time Cache Tracker to monitor `localStorage` limits (typically 5MB).
* **Android Shield (`webview-fixes.js`)**: A specialized utility script that mitigates focus-state crashes and provides stable input pickers for Samsung and Google Pixel webview implementations.
* **OLED UI (`styles.css`)**: Utilizes hardware-accelerated transitions and a true-black (#000) palette to reduce battery consumption on mobile devices.
