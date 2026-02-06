document.addEventListener("DOMContentLoaded", () => {
  const divider = document.querySelector(".divider");
  const sent = document.querySelector(".sent");
  const received = document.querySelector(".received");

  let triggered = false;

  window.addEventListener("scroll", () => {
    if (!triggered && window.scrollY > window.innerHeight * 0.3) {
      triggered = true;

      divider.classList.add("open");

      setTimeout(() => {
        sent.classList.add("show");
      }, 600);

      setTimeout(() => {
        received.classList.add("show");
      }, 1400);
    }
  });
});
