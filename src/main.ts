import { createApp } from 'vue'
import './style/index.less'
// import App from './App.vue'

// createApp(App).mount('#app')


import { Application } from 'pixi.js';

// Asynchronous IIFE
(async () =>
{
    // Create a PixiJS application.
    const app = new Application();

    // Intialize the application.
    await app.init({ background: '#1099bb', resizeTo: window });

    // Then adding the application's canvas to the DOM body.
    document.body.appendChild(app.canvas);
})();