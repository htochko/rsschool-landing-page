// slider logics
const track = document.getElementById('slider-track');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const underlines = document.querySelectorAll('.slider-pagination .underline');

// Arrow button click handlers
nextBtn?.addEventListener('click', () => {
    track.scrollBy({ left: track.clientWidth, behavior: 'smooth' });
});

prevBtn?.addEventListener('click', () => {
    track.scrollBy({ left: -track.clientWidth, behavior: 'smooth' });
});

// Clickable underlines to jump to slide
underlines.forEach((underline, index) => {
    underline.addEventListener('click', () => {
        const targetSlide = track.children[index];
        targetSlide.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    });
});

// Update active underline on scroll/swipe
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const index = Array.from(track.children).indexOf(entry.target);
            underlines.forEach((u, i) => {
                u.classList.toggle('active', i === index);
            });
        }
    });
}, { root: track, threshold: 0.6 });

Array.from(track.children).forEach(slide => observer.observe(slide));