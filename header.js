/**
 * Vortexia Universal Header Controller & Security Suite
 * Handles dynamic header interactions and implements advanced front-end protection.
 */
document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. NAVIGATION HEADER LOGIC (Optimized)
       ========================================================================== */
    
    // Handle Menu Toggle Clicks (Open / Close)
    document.addEventListener('click', (e) => {
        const toggleBtn = e.target.closest('#vxNavToggle');
        if (!toggleBtn) return;

        e.stopPropagation();
        const navMenu = document.getElementById('vxNavMenu');
        const toggleIcon = document.getElementById('vxToggleIcon');
        
        if (!navMenu || !toggleIcon) return;

        const isActive = navMenu.classList.contains('is-active');
        
        if (isActive) {
            navMenu.classList.remove('is-active');
            toggleBtn.classList.remove('is-active');
            setTimeout(() => {
                toggleIcon.className = 'fas fa-bars vx-toggle-icon';
            }, 150);
        } else {
            navMenu.classList.add('is-active');
            toggleBtn.classList.add('is-active');
            toggleIcon.className = 'fas fa-times vx-toggle-icon';
        }
    });

    // Close Menu when clicking anywhere outside
    document.addEventListener('click', (e) => {
        const navMenu = document.getElementById('vxNavMenu');
        const toggleBtn = document.getElementById('vxNavToggle');
        
        if (navMenu && navMenu.classList.contains('is-active')) {
            if (!navMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
                const toggleIcon = document.getElementById('vxToggleIcon');
                navMenu.classList.remove('is-active');
                toggleBtn.classList.remove('is-active');
                if (toggleIcon) toggleIcon.className = 'fas fa-bars vx-toggle-icon';
            }
        }
    });

    // Close Menu automatically on Window Resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            const navMenu = document.getElementById('vxNavMenu');
            const toggleBtn = document.getElementById('vxNavToggle');
            const toggleIcon = document.getElementById('vxToggleIcon');

            if (navMenu && navMenu.classList.contains('is-active')) {
                navMenu.classList.remove('is-active');
                if (toggleBtn) toggleBtn.classList.remove('is-active');
                if (toggleIcon) toggleIcon.className = 'fas fa-bars vx-toggle-icon';
            }
        }
    });


    /* ==========================================================================
       2. SITE PROTECTION SUITE (Anti-DevTools & Anti-Download)
       ========================================================================== 

    // A. Disable Right-Click (Saves context menu theft)
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    }, false);

    // B. Disable DevTools & Download Shortcuts
    document.addEventListener('keydown', (e) => {
        // Disable F12
        if (e.key === 'F12') {
            e.preventDefault();
            return false;
        }

        // Disable Ctrl+Shift+I (Inspect Element), Ctrl+Shift+J (Console), Ctrl+Shift+C (Elements)
        if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'j' || e.key === 'J' || e.key === 'c' || e.key === 'C')) {
            e.preventDefault();
            return false;
        }

        // Disable Ctrl+U (View Source)
        if (e.ctrlKey && (e.key === 'u' || e.key === 'U')) {
            e.preventDefault();
            return false;
        }

        // Disable Ctrl+S (Save Page) - Stops downloading HTML files locally
        if (e.ctrlKey && (e.key === 's' || e.key === 'S')) {
            e.preventDefault();
            return false;
        }
    });

    // C. Anti-Debugging Loop (If they somehow open DevTools, it freezes/pauses the tab)
    const antiDebug = () => {
        try {
            (function() {
                (function a() {
                    debugger; 
                    setTimeout(a, 50);
                })();
            })();
        } catch (err) {}
    };
    
    // Run the loop continuously to freeze inspection attempts
    setInterval(antiDebug, 200);  */
});