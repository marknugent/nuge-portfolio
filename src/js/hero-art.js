/* hero-art.js
   Cycles the line-art slides in the home hero. All the visuals live in
   site.css (search "line art"); this only moves the .is-active class.
   data-hold = ms each slide stays (default 7000)
   data-fade = crossfade ms, matching --fade in the CSS (default 1600) */
(function () {
  var root = document.querySelector('.hero-art');
  if (!root) return;
  var slides = [].slice.call(root.querySelectorAll('.hero-art__slide'));
  if (!slides.length) return;

  var hold = parseInt(root.dataset.hold, 10) || 7000;
  var fade = parseInt(root.dataset.fade, 10) || 1600;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  root.classList.add('is-ready');

  if (reduce || slides.length === 1) {
    slides[0].classList.add('is-static');
    return;
  }

  var current = -1;
  var timer = null;
  var onScreen = true;

  function show(n) {
    slides.forEach(function (s, i) {
      if (i === n) {
        s.classList.remove('is-leaving');
        s.classList.add('is-active');
      } else if (s.classList.contains('is-active')) {
        s.classList.remove('is-active');
        s.classList.add('is-leaving');
        setTimeout(function () { s.classList.remove('is-leaving'); }, fade + 60);
      }
    });
    current = n;
  }

  function schedule() {
    clearTimeout(timer);
    timer = setTimeout(function () {
      show((current + 1) % slides.length);
      schedule();
    }, hold);
  }

  // Stop the cycle (and freeze any half-drawn strokes) whenever nobody can
  // see it: tab hidden, hero scrolled away, or the art hidden on narrow
  // screens. Resuming picks up where it left off.
  function sync() {
    var visible = onScreen && !document.hidden;
    root.classList.toggle('is-paused', !visible);
    if (visible) schedule(); else clearTimeout(timer);
  }

  show(0);
  schedule();

  document.addEventListener('visibilitychange', sync);
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      onScreen = entries[0].isIntersecting;
      sync();
    }).observe(root);
  }
})();
