document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.marquee-toggle').forEach((button) => {
    const marquee = button.closest('.logo-marquee');

    button.addEventListener('click', () => {
      const isPaused = marquee.classList.toggle('is-paused');
      button.setAttribute('aria-pressed', String(isPaused));
      button.textContent = isPaused ? 'Play animation' : 'Pause animation';
    });
  });
});
