document.addEventListener("DOMContentLoaded", () => {
  const divider = document.querySelector(".divider");
  const sentBubble = document.querySelector(".sent");
  const receivedBubble = document.querySelector(".received");
  const music = document.getElementById("bg-music");

  let triggered = false;

  /* Smooth music fade-in */
  function fadeInMusic(target = 0.35, duration = 4000) {
    music.volume = 0;
    music.play().catch(() => {});
    const step = target / (duration / 100);
    const fade = setInterval(() => {
      if (music.volume < target) {
        music.volume = Math.min(music.volume + step, target);
      } else {
        clearInterval(fade);
      }
    }, 100);
  }

  /* Trigger on first scroll OR click */
  function triggerMoment() {
    if (triggered) return;
    triggered = true;

    divider.classList.add("open");
    fadeInMusic();

    setTimeout(() => {
      sentBubble.classList.add("show");
    }, 600);

    setTimeout(() => {
      receivedBubble.classList.add("show");
    }, 1400);
  }

  window.addEventListener("scroll", triggerMoment, { once: true });
  document.body.addEventListener("click", triggerMoment, { once: true });
});
