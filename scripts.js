 const faders = document.querySelectorAll('.fade-slide');
    const testimonials = document.querySelectorAll('#testimonials .testimonial');

    function checkFade() {
      const triggerBottom = window.innerHeight * 0.85;

      faders.forEach(fader => {
        const top = fader.getBoundingClientRect().top;
        if(top < triggerBottom) {
          fader.classList.add('visible');
        }
      });

      testimonials.forEach(testimonial => {
        const top = testimonial.getBoundingClientRect().top;
        if(top < triggerBottom) {
          testimonial.classList.add('visible');
        }
      });
    }

    window.addEventListener('scroll', checkFade);
    window.addEventListener('load', checkFade);

    // Smooth scroll fix for older browsers (optional)
    document.querySelectorAll('nav a').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
      });
    });