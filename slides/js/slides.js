/**
 * Navis Slides — Presentation Engine
 * Handles: navigation, animations, keyboard, progress, counter
 */
(function() {
    'use strict';

    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    const counter = document.getElementById('slide-counter');
    const progress = document.getElementById('progress-bar');
    const navDots = document.getElementById('slide-nav');
    let currentSlide = 0;
    let isScrolling = false;

    // Build nav dots
    if (navDots) {
        slides.forEach((_, i) => {
            const dot = document.createElement('button');
            dot.className = 'nav-dot' + (i === 0 ? ' active' : '');
            dot.title = 'Slide ' + (i + 1);
            dot.onclick = () => goToSlide(i);
            navDots.appendChild(dot);
        });
    }

    function updateUI(index) {
        currentSlide = index;
        // Counter
        if (counter) counter.textContent = (index + 1) + ' / ' + totalSlides;
        // Progress
        if (progress) progress.style.width = ((index + 1) / totalSlides * 100) + '%';
        // Nav dots
        document.querySelectorAll('.nav-dot').forEach((d, i) => {
            d.classList.toggle('active', i === index);
        });
        // Trigger animations on current slide
        const current = slides[index];
        if (current) {
            current.querySelectorAll('.animate').forEach((el, i) => {
                el.style.animationDelay = (i * 0.12) + 's';
                el.classList.add('animated');
            });
        }
    }

    function goToSlide(index) {
        if (index < 0 || index >= totalSlides || isScrolling) return;
        isScrolling = true;
        slides[index].scrollIntoView({ behavior: 'smooth' });
        updateUI(index);
        setTimeout(() => { isScrolling = false; }, 600);
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === ' ') {
            e.preventDefault();
            goToSlide(currentSlide + 1);
        } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
            e.preventDefault();
            goToSlide(currentSlide - 1);
        } else if (e.key === 'Home') {
            e.preventDefault();
            goToSlide(0);
        } else if (e.key === 'End') {
            e.preventDefault();
            goToSlide(totalSlides - 1);
        }
    });

    // Scroll/snap detection
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const idx = Array.from(slides).indexOf(entry.target);
                if (idx >= 0) updateUI(idx);
            }
        });
    }, { threshold: 0.6 });

    slides.forEach(s => observer.observe(s));

    // Init
    updateUI(0);
})();
