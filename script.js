// EggHatch-AI Tutorial Scripts

document.addEventListener('DOMContentLoaded', function() {
    // Highlight current page in navigation
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.sidebar-nav a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (currentPage === linkPage || 
            (currentPage === '' && linkPage === 'index.html')) {
            link.parentElement.classList.add('active');
        }
    });
    
    // Mobile menu toggle (for responsive design)
    const createMobileMenu = () => {
        const sidebar = document.querySelector('.sidebar');
        const menuButton = document.createElement('button');
        menuButton.classList.add('mobile-menu-toggle');
        menuButton.innerHTML = '<i class="fas fa-bars"></i>';
        
        document.querySelector('.content header').prepend(menuButton);
        
        menuButton.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });
    };
    
    // Only create mobile menu if screen is small
    if (window.innerWidth <= 768) {
        createMobileMenu();
    }
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
