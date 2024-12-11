// Smooth Scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 60,
            behavior: 'smooth'
        });
    });
});

// Sticky Navigation on Scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('header');
    if (window.scrollY > 50) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
});

// Scroll Animations on Entering Viewport
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(element => {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight - 150) {
            element.classList.add('fade-in');
        } else {
            element.classList.remove('fade-in');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
document.addEventListener('DOMContentLoaded', animateOnScroll);

// Toggle Mobile Menu
const mobileMenuIcon = document.querySelector('#mobile-menu-icon');
const navLinks = document.querySelector('.nav-links');

mobileMenuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Dynamic Content (e.g., skills and projects sections) - Fade In on Scroll
const dynamicElements = document.querySelectorAll('.dynamic-fade');

dynamicElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transition = 'opacity 1s ease-in-out';
});

window.addEventListener('scroll', () => {
    dynamicElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            element.style.opacity = '1';
        }
    });
});

// Scroll Back to Top Button
const backToTopButton = document.querySelector('#back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.opacity = '1';
        backToTopButton.style.pointerEvents = 'auto';
    } else {
        backToTopButton.style.opacity = '0';
        backToTopButton.style.pointerEvents = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Skill Progress Bar Animation
const skillBars = document.querySelectorAll('.skill-bar');
const skillContainer = document.querySelector('.skills');

const animateSkillBars = () => {
    const position = skillContainer.getBoundingClientRect();
    if (position.top < window.innerHeight - 100) {
        skillBars.forEach(bar => {
            const value = bar.getAttribute('data-skill');
            bar.style.width = `${value}%`;
            bar.style.transition = 'width 2s ease-in-out';
        });
    }
};

window.addEventListener('scroll', animateSkillBars);

// Image Gallery Hover Effect
const projectImages = document.querySelectorAll('.project-image');

projectImages.forEach(image => {
    image.addEventListener('mouseenter', () => {
        image.style.transform = 'scale(1.05)';
        image.style.transition = 'transform 0.3s ease-in-out';
    });

    image.addEventListener('mouseleave', () => {
        image.style.transform = 'scale(1)';
    });
});

// Fade-In Elements on Page Load (Just to make things dynamic on load)
document.addEventListener('DOMContentLoaded', () => {
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach(element => {
        element.classList.add('visible');
    });
});
