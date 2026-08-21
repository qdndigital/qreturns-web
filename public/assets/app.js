/* QReturns — Marketing site shared scripts */
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion:reduce)').matches;

  /* reveal-on-scroll */
  var io = new IntersectionObserver(
    function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll('.rv').forEach(function (el, i) {
    el.style.transitionDelay = (i % 3) * 60 + 'ms';
    io.observe(el);
  });

  /* sticky header hairline on scroll */
  var hdr = document.querySelector('header.site');
  if (hdr) {
    var scrolled = false,
      ticking = false;
    var apply = function () {
      ticking = false;
      var s = window.scrollY > 16;
      if (s !== scrolled) {
        scrolled = s;
        hdr.classList.toggle('scrolled', s);
      }
    };
    var onS = function () {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(apply);
      }
    };
    requestAnimationFrame(apply);
    addEventListener('scroll', onS, { passive: true });
  }

  /* mobile menu — class toggle only, with overlay + a11y */
  var mb = document.querySelector('.menu-btn');
  var ov = document.querySelector('.nav-overlay');
  var links = document.querySelector('.nav-links');
  if (mb && links) {
    var setMenu = function (open) {
      document.body.classList.toggle('nav-open', open);
      mb.setAttribute('aria-expanded', open ? 'true' : 'false');
      mb.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    };
    mb.addEventListener('click', function () {
      setMenu(!document.body.classList.contains('nav-open'));
    });
    if (ov)
      ov.addEventListener('click', function () {
        setMenu(false);
      });
    links.addEventListener('click', function (e) {
      if (e.target.closest('a')) setMenu(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setMenu(false);
    });
    var mq = window.matchMedia('(min-width:1024px)');
    (mq.addEventListener ? mq.addEventListener.bind(mq, 'change') : mq.addListener.bind(mq))(
      function (e) {
        if (e.matches) setMenu(false);
      }
    );
  }
})();
