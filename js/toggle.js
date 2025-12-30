// Gestion du toggle de thème
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');
const html = document.documentElement;

// Charger le thème sauvegardé ou utiliser le thème par défaut
const savedTheme = localStorage.getItem('theme') || 'dark';
if (savedTheme === 'light') {
    html.setAttribute('data-theme', 'light');
    themeIcon.classList.remove('ri-sun-line');
    themeIcon.classList.add('ri-moon-line');
}

// Toggle entre les thèmes
themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    
    if (currentTheme === 'light') {
        html.removeAttribute('data-theme');
        themeIcon.classList.remove('ri-moon-line');
        themeIcon.classList.add('ri-sun-line');
        localStorage.setItem('theme', 'dark');
    } else {
        html.setAttribute('data-theme', 'light');
        themeIcon.classList.remove('ri-sun-line');
        themeIcon.classList.add('ri-moon-line');
        localStorage.setItem('theme', 'light');
    }
});
