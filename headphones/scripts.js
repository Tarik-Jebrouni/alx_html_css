document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('.header');
  const toggle = document.querySelector('.menu-toggle');

  if (header && toggle) {
    toggle.addEventListener('click', () => {
      header.classList.toggle('active');
    });
  }
});