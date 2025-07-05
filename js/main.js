 document.addEventListener('DOMContentLoaded', function () {
  'use strict';
 
  window.addEventListener('load', function () {
    window.scrollTo(0, 0);
  }); 
   const navLinks = document.querySelectorAll('.navbar-collapse .nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        if (window.innerWidth < 992) { // lg breakpoint
          const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
          if (bsCollapse) {
            bsCollapse.hide();
          }
        }
      });
    });
    
 function formatNumber(num) {
    return num.toLocaleString() + '+';
  }

  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText.replace(/[+,]/g, '');
      const increment = target / 100;

      if (count < target) {
        const newCount = Math.ceil(count + increment);
        counter.innerText = formatNumber(newCount);
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = formatNumber(target);
      }
    };
    updateCount();
  });

  AOS.init({
    offset: 120,
    duration: 1000,
    easing: 'ease-in-out',
  });
});
