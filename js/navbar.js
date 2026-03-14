document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const navWrapper = document.querySelector('.futuristic-nav-wrapper');
    const mobileToggle = document.getElementById('mobileNavToggle');
    const mobileOverlay = document.getElementById('mobileNavOverlay');
    const closeMobileNav = document.getElementById('closeMobileNav');

    // 1. Scroll Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            body.classList.add('scrolled');
        } else {
            body.classList.remove('scrolled');
        }
    });

    // 2. Mobile Menu Logic
    if (mobileToggle && mobileOverlay) {
        mobileToggle.addEventListener('click', () => {
            mobileOverlay.classList.add('open');
            body.style.overflow = 'hidden'; // Prevent scroll
        });

        const closeMenu = () => {
            mobileOverlay.classList.remove('open');
            body.style.overflow = ''; // Restore scroll
        };

        if (closeMobileNav) closeMobileNav.addEventListener('click', closeMenu);

        // Close on link click
        const mobileLinks = mobileOverlay.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileOverlay.classList.contains('open')) {
                closeMenu();
            }
        });
    }

    // 3. Highlight active link based on current page
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const allLinks = document.querySelectorAll('.nav-link-item, .mobile-nav-links a');
    
    allLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
