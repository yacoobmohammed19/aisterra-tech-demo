(function(){
  // Reveal-on-scroll
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
  document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });

  // Nav background state on scroll
  var header = document.querySelector('header');
  if (header) {
    var onScroll = function(){ header.classList.toggle('is-scrolled', window.scrollY > 30); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Mobile hamburger toggle
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('header nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function(){
      var open = nav.classList.toggle('is-open');
      toggle.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){
        nav.classList.remove('is-open');
        toggle.classList.remove('is-open');
      });
    });
  }
})();
