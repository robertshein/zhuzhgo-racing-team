document.addEventListener('DOMContentLoaded', () => {
    const bgObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const bgUrl = el.dataset.bg;
                if (bgUrl) {
                    el.style.backgroundImage = `url('${bgUrl}')`;
                }
                bgObserver.unobserve(el);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('[data-bg]').forEach(el => {
        bgObserver.observe(el);
    });
});