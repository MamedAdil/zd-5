document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'y') toggleTheme();
});
  
document.getElementById('toggle-theme')?.addEventListener('click', toggleTheme);
  
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}
  
const images = document.querySelectorAll('#gallery img');
images.forEach(img => {
    img.addEventListener('click', () => alert(`You clicked on ${img.alt}`));
});
  
document.addEventListener('keydown', (e) => {
    const form = document.getElementById('contact-form');
    if (!form) return;

    if (e.key === 'Tab') {
        e.preventDefault();
        const focusable = form.querySelectorAll('input, textarea, button');
        const index = Array.from(focusable).indexOf(document.activeElement);
        const nextIndex = (index + 1) % focusable.length;
        focusable[nextIndex].focus();
    }
});
  