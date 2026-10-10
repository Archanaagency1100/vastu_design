/* Shared header and footer. Edit these templates to update every page. */
(() => {
  'use strict';
  const header = `<header class="site-header" id="top">
    <nav class="navbar navbar-expand-lg container site-container" aria-label="Main navigation">
      <a class="navbar-brand wordmark" href="index.html" aria-label="Vastu Designs home">VASTU<span aria-hidden="true"> · </span>DESIGNS</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-navigation" aria-controls="main-navigation" aria-expanded="false" aria-label="Open navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="main-navigation">
        <ul class="navbar-nav ms-auto align-items-lg-center">
<li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
<li class="nav-item"><a class="nav-link" href="approach.html">Our approach</a></li>
<li class="nav-item"><a class="nav-link" href="services.html">Services</a></li>
<li class="nav-item"><a class="nav-link" href="story.html">Our story</a></li>
<li class="nav-item"><a class="nav-link" href="faqs.html">FAQs</a></li>
<li class="nav-item nav-booking"><a class="btn btn-vastu" href="contact.html">Book a consultation</a></li>
</ul>
</div>
    </nav>
  </header>`;
  const footer = `<footer class="site-footer">
    <div class="container site-container">
      <div class="row align-items-center gy-4">
        <div class="col-lg-5">
<a class="wordmark footer-wordmark" href="index.html">VASTU<span aria-hidden="true"> · </span>DESIGNS</a><p>Ancient wisdom. Modern harmony.</p>
</div>
        <div class="col-lg-7"><nav class="footer-nav" aria-label="Footer navigation"><a href="index.html">Home</a><a href="approach.html">Our approach</a><a href="services.html">Services</a><a href="story.html">Our story</a><a href="faqs.html">FAQs</a><a href="contact.html">Contact</a><span class="copyright">© <span id="year">2026</span> Vastu Designs Ltd &middot; Auckland</span></nav></div>
      </div>
    </div>
  </footer>`;
  const headerSlot = document.getElementById('site-header-slot');
  const footerSlot = document.getElementById('site-footer-slot');
  if (headerSlot) headerSlot.outerHTML = header;
  if (footerSlot) footerSlot.outerHTML = footer;

  const currentPage = `${document.body.dataset.page || 'index'}.html`;
  document.querySelectorAll('#main-navigation a').forEach(link => {
    const isCurrent = link.getAttribute('href') === currentPage;
    link.classList.toggle('active', isCurrent);
    if (isCurrent) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
})();
