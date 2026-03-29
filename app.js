/* =========================================================
   HiFred Landing Page — app.js
   ========================================================= */

// ── Navbar scroll shadow ──────────────────────────────────
(function () {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });
})();


// ── Modal helpers ─────────────────────────────────────────
function openModal(id) {
  const overlay = document.getElementById(id);
  overlay.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

function closeModal(id) {
  const overlay = document.getElementById(id);
  overlay.classList.remove('is-open');
  document.body.style.overflow = '';
}

// Close on backdrop click
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeModal(overlay.id);
  });
});

// Close on Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.is-open').forEach(overlay => {
      closeModal(overlay.id);
    });
  }
});


// ── Beta form submit ──────────────────────────────────────
function handleBetaSubmit(e) {
  e.preventDefault();
  document.getElementById('betaForm').hidden = true;
  document.getElementById('betaSuccess').hidden = false;
}
