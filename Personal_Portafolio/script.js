document.addEventListener('DOMContentLoaded', (event) => {
    const themeCheckbox = document.querySelector('.theme-checkbox');
    themeCheckbox.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode', themeCheckbox.checked);
    });
});