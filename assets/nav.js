(function() {
  var btn = document.getElementById('hamburger-btn');
  var nav = document.getElementById('main-nav');
  if (!btn || !nav) return;

  function close() {
    nav.classList.remove('open');
    btn.setAttribute('aria-label', 'Open menu');
    btn.setAttribute('aria-expanded', 'false');
  }

  btn.addEventListener('click', function() {
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  nav.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', close);
  });
})();
