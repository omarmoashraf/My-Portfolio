// Update year automatically
        document.getElementById('year').textContent = new Date().getFullYear();
        
        // Mobile menu toggle
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
        
        burger.addEventListener('click', () => {
            nav.classList.toggle('active');
            burger.classList.toggle('toggle');
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });