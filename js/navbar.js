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

    // 4. Mobile Search FAB Logic
    const mobileSearchFab = document.getElementById('mobileSearchFab');
    const mobileSearchWrapper = document.getElementById('mobileSearchWrapper');
    const closeMobileSearch = document.getElementById('closeMobileSearch');
    const mobileSearchInput = document.getElementById('mobileSearchInput');

    if (mobileSearchFab && mobileSearchWrapper && mobileSearchInput) {
        // Toggle search input
        mobileSearchFab.addEventListener('click', () => {
            mobileSearchWrapper.classList.toggle('active');
            if (mobileSearchWrapper.classList.contains('active')) {
                setTimeout(() => mobileSearchInput.focus(), 300); // Focus after animation
            }
        });

        // Close search input
        if (closeMobileSearch) {
            closeMobileSearch.addEventListener('click', () => {
                mobileSearchWrapper.classList.remove('active');
                mobileSearchInput.value = ''; // Clear input on close
            });
        }

        // Handle search submission
        mobileSearchInput.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                const query = mobileSearchInput.value.trim();
                if (query) {
                    if (window.location.pathname.includes('product.html') && typeof searchProducts === 'function') {
                        // We are on product page, use existing search logic
                        const desktopSearchInput = document.getElementById('searchInput');
                        if (desktopSearchInput) {
                            desktopSearchInput.value = query;
                            searchProducts(); // Call the global function from product.js if it exists, otherwise trigger event
                            
                            // fallback for product.js if the global function relies on input event
                            desktopSearchInput.dispatchEvent(new Event('input', { bubbles: true }));
                        }
                    } else {
                        // Redirect to product page with search param
                        window.location.href = `product.html?search=${encodeURIComponent(query)}`;
                    }
                    mobileSearchWrapper.classList.remove('active');
                }
            }
        });

        // Close search when clicking outside
        document.addEventListener('click', (e) => {
            if (mobileSearchWrapper.classList.contains('active') && 
                !mobileSearchWrapper.contains(e.target) && 
                !mobileSearchFab.contains(e.target)) {
                mobileSearchWrapper.classList.remove('active');
            }
        });
    }
});
