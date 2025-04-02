document.addEventListener('DOMContentLoaded', function() {

    // --- Set Current Year in Footer ---
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- Basic Form Submission Handler ---
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission

            // In a real application, you would collect data and send it:
            // const formData = new FormData(contactForm);
            // fetch('your-server-endpoint', { method: 'POST', body: formData })
            //   .then(response => response.json())
            //   .then(data => { ... handle success ... })
            //   .catch(error => { ... handle error ... });

            // --- Simulate form submission success ---
            if (formStatus) {
                formStatus.textContent = 'Thank you! Your quote request has been sent.';
                formStatus.className = 'success'; // Apply success styling
                contactForm.reset(); // Clear the form
            }

            // Clear the status message after a few seconds
            setTimeout(() => {
                if (formStatus) formStatus.textContent = '';
                 formStatus.className = '';
            }, 5000); // 5 seconds

        });
    }

    // --- Intersection Observer for Animations on Scroll ---
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    // Optional: Stop observing once animated
                    // observer.unobserve(entry.target);
                }
                // Optional: Reset animation if it scrolls out of view
                // else {
                //     entry.target.classList.remove('is-visible');
                // }
            });
        }, {
            threshold: 0.1 // Trigger when 10% of the element is visible
        });

        animatedElements.forEach(el => {
            observer.observe(el);
        });
    } else {
        // Fallback for older browsers: just make them visible
        animatedElements.forEach(el => {
            el.classList.add('is-visible');
        });
    }

    // --- Trigger Initial Load Animations (Handled by CSS) ---
    // Elements with .animate-on-load class use CSS animations directly
    // We just need to ensure they are initially hidden (opacity: 0) in CSS
    // and the animation brings them to opacity: 1.

});