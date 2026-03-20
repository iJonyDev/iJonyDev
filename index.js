document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
    const htmlElement = document.documentElement;

    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    let currentTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');

    // Apply initial theme
    applyTheme(currentTheme);

    themeToggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            currentTheme = currentTheme === 'light' ? 'dark' : 'light';
            applyTheme(currentTheme);
            localStorage.setItem('theme', currentTheme);
        });
    });

    function applyTheme(theme) {
        if (theme === 'dark') {
            htmlElement.setAttribute('data-bs-theme', 'dark');
            themeToggleBtns.forEach(btn => {
                const icon = btn.querySelector('.theme-icon');
                if (icon) icon.className = 'bi bi-sun fs-5 theme-icon';
            });
        } else {
            htmlElement.setAttribute('data-bs-theme', 'light');
            themeToggleBtns.forEach(btn => {
                const icon = btn.querySelector('.theme-icon');
                // Shows moon to toggle to dark
                if (icon) icon.className = 'bi bi-moon-stars fs-5 theme-icon'; 
            });
        }
    }
});
