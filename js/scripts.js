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

    // Set theme on page load
    const setTheme = (theme) => {
        if (theme === 'dark') {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
        localStorage.setItem('theme', theme);
    };

    // Toggle theme
    const toggleTheme = () => {
        const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    };

    // Initialize theme on page load (before DOMContentLoaded to prevent flash)
    setTheme(getTheme());

    // Add click event listener when DOM is ready
    document.addEventListener('DOMContentLoaded', function() {
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', toggleTheme);
        }
    });
})();