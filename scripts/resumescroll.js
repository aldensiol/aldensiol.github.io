document.addEventListener('DOMContentLoaded', () => {
    const resumeItems = document.querySelectorAll('.resume-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.5 }); // Trigger when half of the item is in view

    resumeItems.forEach(item => {
        observer.observe(item);
    });
});
