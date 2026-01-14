/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/

// Theme Toggle Functionality
(function() {
    'use strict';

    // Check for saved theme preference or default to dark mode
    const getTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme;
        }
        // Default to dark mode
        return 'dark';
    };

    // Set theme
    const setTheme = (theme) => {
        if (theme === 'dark') {
            document.body.classList.add('dark-mode');
            document.documentElement.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
            document.documentElement.classList.remove('dark-mode');
        }
        localStorage.setItem('theme', theme);
        console.log('Theme set to:', theme);
    };

    // Toggle theme
    const toggleTheme = (e) => {
        if (e) e.preventDefault();
        const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        console.log('Toggling from', currentTheme, 'to', newTheme);
        setTheme(newTheme);
    };

    // Expose toggle function globally as backup
    window.toggleTheme = toggleTheme;

    // Initialize theme on page load
    const initTheme = () => {
        const theme = getTheme();
        setTheme(theme);
    };

    // Initialize immediately
    initTheme();

    // Setup event listener when DOM is ready
    const setupToggle = () => {
        const themeToggle = document.getElementById('themeToggle');
        console.log('Theme toggle button found:', !!themeToggle);
        if (themeToggle) {
            // Remove any existing listeners
            themeToggle.removeEventListener('click', toggleTheme);
            // Add new listener
            themeToggle.addEventListener('click', toggleTheme);
            console.log('Theme toggle listener attached');
        }
    };

    // Try multiple times to attach the listener
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setupToggle);
    } else {
        setupToggle();
    }

    // Also try after window load as a fallback
    window.addEventListener('load', setupToggle);
})();