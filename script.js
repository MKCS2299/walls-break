document.addEventListener("DOMContentLoaded", () => {
  const divider = document.querySelector(".divider");
  const sentBubble = document.querySelector(".sent");
  const receivedBubble = document.querySelector(".received");

  let triggered = false;

  window.addEventListener("scroll", () => {
    const triggerPoint = window.innerHeight * 0.6;

    if (!triggered && window.scrollY > triggerPoint) {
      triggered = true;

      // Divider opens
      divider.classList.add("open");

      // First bubble
      setTimeout(() => {
        sentBubble.classList.add("show");
      }, 600);

      // Second bubble
      setTimeout(() => {
        receivedBubble.classList.add("show");
      }, 1400);
    }
  });
});
