document.addEventListener("DOMContentLoaded", () => {
  const divider = document.querySelector(".divider");
  const tapOpen = document.querySelector(".tap-open");
  const sentBubble = document.querySelector(".sent");
  const receivedBubble = document.querySelector(".received");
  const music = document.getElementById("bg-music");
  const tapArea = document.querySelector(".divider-container");

  let opened = false;

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

  function openWall() {
    if (opened) return;
    opened = true;

    divider.classList.add("open");
    tapOpen.classList.add("hide");
    fadeInMusic();

    setTimeout(() => {
      sentBubble.classList.add("show");
    }, 600);

    setTimeout(() => {
      receivedBubble.classList.add("show");
    }, 1400);
  }

  tapArea.addEventListener("click", openWall);
  tapArea.addEventListener("touchstart", (e) => {
    e.preventDefault();
    openWall();
  }, { passive: false });
});
