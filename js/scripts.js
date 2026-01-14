/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/

// Theme Toggle Functionality - Simplified and Robust
(function() {
    'use strict';

    console.log('Theme script loaded');

    // Check for saved theme preference or default to dark mode
    function getTheme() {
        const savedTheme = localStorage.getItem('theme');
        console.log('Saved theme:', savedTheme);
        return savedTheme || 'dark';
    }

    // Set theme
    function setTheme(theme) {
        console.log('Setting theme to:', theme);
        const body = document.body;
        const html = document.documentElement;

        if (theme === 'dark') {
            body.classList.add('dark-mode');
            html.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
            html.classList.remove('dark-mode');
        }

        localStorage.setItem('theme', theme);
        console.log('Theme applied. Body classes:', body.className);
    }

    // Toggle theme function
    function toggleTheme(e) {
        console.log('Toggle theme called!', e);
        if (e && e.preventDefault) {
            e.preventDefault();
        }

        const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        console.log('Toggling from', currentTheme, 'to', newTheme);
        setTheme(newTheme);
        return false;
    }

    // Expose globally for inline onclick handlers
    window.toggleTheme = toggleTheme;
    console.log('window.toggleTheme set:', typeof window.toggleTheme);

    // Initialize theme immediately
    const initialTheme = getTheme();
    setTheme(initialTheme);

    // Setup button when ready
    function setupButton() {
        const button = document.getElementById('themeToggle');
        console.log('Looking for button... found:', !!button);

        if (button) {
            console.log('Button element:', button);
            // Clear any existing listeners and add new one
            button.onclick = function(e) {
                console.log('Button clicked via onclick!');
                toggleTheme(e);
                return false;
            };
            console.log('Button onclick handler attached');
        } else {
            console.warn('Theme toggle button not found!');
        }
    }

    // Try to setup button immediately if DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setupButton);
    } else {
        setupButton();
    }

    // Fallback setup on window load
    window.addEventListener('load', function() {
        console.log('Window loaded, setting up button again');
        setupButton();
    });

    console.log('Theme script initialization complete');
})();