document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('themeToggle');
  const body = document.body;

  // Load saved theme or default to light
  const savedTheme = localStorage.getItem('theme') || 'light';
  body.classList.add(`${savedTheme}-mode`);
  toggle.checked = savedTheme === 'dark';

  toggle.addEventListener('change', () => {
    const mode = toggle.checked ? 'dark' : 'light';
    body.classList.remove('dark-mode', 'light-mode');
    body.classList.add(`${mode}-mode`);
    localStorage.setItem('theme', mode);
  });
});